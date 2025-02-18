import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { companyData } from "@/constants/MockData";
import { Dropdown } from "@/components/AdminServicesComp/Dropdown";
import { Searchbar } from "@/components/AdminServicesComp/Searchbar";
import { ServiceRequestList } from "@/components/AdminServicesComp/ServiceRequestList";
import { secondaryColor } from "@/constants/Colors";
import {useRouter} from 'expo-router';


export default function ManageServices() {
  const [statusFilter, setStatusFilter] = useState("Open");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuVisible, setMenuVisible] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  
  const router = useRouter();
  const filteredCompanies = companyData
    .map((company) => ({
      ...company,
      requests: company.requests.filter((req) =>
        statusFilter === "All" ? true : req.status === statusFilter
      ),
    }))
    .filter((company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <SafeAreaView className="bg-primary h-full px-5">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* Header */}
        <View className="flex-row justify-between mt-5">
          <Text className="text-secondary font-bold text-2xl">
            Service Requests
          </Text>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu" size={24} color={secondaryColor} />
          </TouchableOpacity>
        </View>

            {/* Dropdown Menu */}
         {menuVisible && (
          <View className="absolute right-5 top-16 bg-white shadow-md rounded-lg p-3 w-48" style={{ zIndex: 10, elevation: 10 }} >
            <TouchableOpacity className="py-2"  onPress={() => console.log("Manage Machines Clicked")} >
              <Text className="text-black text-lg">Manage Customers</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-2" onPress={() => router.push({ pathname: "/admin-services/manage_machines"} )}>
              <Text className="text-black text-lg">Manage Machines</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-2" onPress={() => router.push({ pathname: "/admin"} )}>
              <Text className="text-black text-lg">Admin</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Service Requests Counter & Add Button */}
        <View className="flex-row justify-between items-center mt-2">
          {/* Left Side: Counter & Add Button */}
          <View className="flex-row gap-2 items-center">
            <Text className="text-lg">Service Requests (12)</Text>
            <TouchableOpacity>
              <Feather name="plus-square" size={24} color={secondaryColor} />
            </TouchableOpacity>
          </View>

          {/* Right Side: Dropdown (with controlled width) */}
          <View className="">
            <Dropdown
              selectedValue={statusFilter}
              onValueChange={setStatusFilter}
              items={[
                { label: "All", value: "All" },
                { label: "Open", value: "Open" },
                { label: "Closed", value: "Closed" },
              ]}
            />
          </View>
        </View>

        {/* Search Input */}
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} />

        {/* Service Requests List */}
        {filteredCompanies.map((company) => (
          <ServiceRequestList key={company.id} company={company} />
        ))}
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

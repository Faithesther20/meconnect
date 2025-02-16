import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { companyData } from "../constants/MockData";
import { Dropdown } from "../components/AdminServicesComp/Dropdown";
import { Searchbar } from "../components/AdminServicesComp/Searchbar";
import { ServiceRequestList } from "../components/AdminServicesComp/ServiceRequestList";
import { secondaryColor } from "@/constants/Colors";

export default function App() {
  const [statusFilter, setStatusFilter] = useState("Open");
  const [searchQuery, setSearchQuery] = useState("");
  

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
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color={secondaryColor} />
          </TouchableOpacity>
        </View>

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

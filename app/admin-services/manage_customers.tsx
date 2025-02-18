import { View, Text, ScrollView, TouchableOpacity, Touchable } from "react-native";
import { useState } from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"; // Ensure you have this package installed
import { companyMachineData, customersData } from "@/constants/MockData"; // Your mock data file
import { useRouter } from "expo-router";
import { secondaryColor } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Dropdown } from "@/components/AdminServicesComp/Dropdown";

export default function ManageCustomers() {
  const [customerFilter, setCustomerFilter] = useState("Open");
  const [activeTab, setActiveTab] = useState<"customers" | "pending">(
    "customers"
  );
  const [expandedCompanies, setExpandedCompanies] = useState<string[]>([]);
  const router = useRouter();
  const toggleCompany = (company: string) => {
    setExpandedCompanies((prev) =>
      prev.includes(company)
        ? prev.filter((c) => c !== company)
        : [...prev, company]
    );
  };

  // ✅ Filter counts based on pending status
  const totalPending = companyMachineData.reduce(
    (count, company) =>
      count + company.machines.filter((m) => m.pending).length,
    0
  );

  return (
    <SafeAreaView className="bg-primary h-full px-5">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between mt-5 ">
          <Text className="text-secondary font-bold text-2xl">
            Manage Customers
          </Text>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color={secondaryColor} />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center gap-4 my-2">
          <View className="flex-1 border border-gray-500 rounded-md  ">
            <Dropdown
              selectedValue={customerFilter}
              onValueChange={setCustomerFilter}
              items={[
                { label: "ABL Company", value: "ABL Company" },
                { label: "LMBL Company", value: "LMBL Company" },
                { label: "LUL Company", value: "LUL Company" },
              ]}
            />
          </View>
          <TouchableOpacity>
          <MaterialCommunityIcons className="" name="filter" size={30} color={secondaryColor} />
          </TouchableOpacity>
        </View>
        {/* Tabs */}

        <View className="flex-row my-2 gap-2">
          <TouchableOpacity
            className={`px-4 py-3 rounded-md ${
              activeTab === "customers" ? "bg-secondary" : "bg-white border"
            }`}
            onPress={() => setActiveTab("customers")}>
            <Text
              className={`font-semibold ${
                activeTab === "customers" ? "text-white" : "text-black"
              }`}>
             Customers ({totalPending})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`px-4 py-3 rounded-md ${
              activeTab === "pending" ? "bg-secondary" : "bg-white border"
            }`}
            onPress={() => setActiveTab("pending")}>
            <Text
              className={`font-semibold ${
                activeTab === "pending" ? "text-white" : "text-black"
              }`}>
              Pending Approval ({totalPending})
            </Text>
          </TouchableOpacity>
        </View>

        {/* List of Customers */}
        {activeTab === "customers"
          ? customersData.map((customerItem) => {
              const approvedCustomer = customerItem.customerDetails.pendingApproval

              if (approvedCustomer === true) return null;

              return (
                <TouchableOpacity
                        onPress={() =>
                          router.push({
                            pathname: "/admin-services/customer-details/[id]",
                            params: { id: customerItem.custID },
                          })
                        }
                        key={customerItem.custID}
                        className="flex-row justify-between items-center gap-2 p-3 border border-gray-300 shadow-sm rounded  bg-white">
                          {customerItem.customerDetails.starred ?<Ionicons name="star-sharp" size={24} color="yellow" />:<Ionicons name="star-sharp" size={24} color="white" className="transparent"/>}
                        <Text className="font-medium flex-1">{customerItem.customerDetails.customerName}</Text>
                        {customerItem.customerDetails.needSetting ?<Image source={images.wrench_red} />:''}
                      </TouchableOpacity>
              );
            })
          : customersData.map((customerItem) => {
              const pendingMachines = customerItem.customerDetails.pendingApproval


              if (pendingMachines === false) return null;

              return (
                // <View key={customerItem.company} className="my-5">
                <TouchableOpacity
                        onPress={() =>
                          router.push({
                            pathname: "/admin-services/customer-approval/[id]",
                            params: { id: customerItem.custID },
                          })
                        }
                        key={customerItem.custID}
                        className="flex-row justify-between items-center gap-2 p-3 border border-gray-300 shadow-sm rounded  bg-white">
                          {customerItem.customerDetails.starred ?<Ionicons name="star-sharp" size={24} color="yellow" />:<Ionicons name="star-sharp" size={24} color="white" className="transparent"/>}
                        <Text className="font-medium flex-1">{customerItem.customerDetails.customerName}</Text>
                        <AntDesign name="rightsquareo" size={20} color={secondaryColor} />
                      </TouchableOpacity>
              
            )
            })}
      </ScrollView>
    </SafeAreaView>
  );
}

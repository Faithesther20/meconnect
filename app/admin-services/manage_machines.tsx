import { View, Text, ScrollView, TouchableOpacity} from "react-native";
import { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons"; // Ensure you have this package installed
import { companyMachineData } from "@/constants/MockData"; // Your mock data file
import { useRouter } from "expo-router";
import { secondaryColor } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Image } from "react-native";

export default function ManageMachines() {
  const [activeTab, setActiveTab] = useState<"machines" | "pending">("machines");
  const [expandedCompanies, setExpandedCompanies] = useState<string[]>([]);
  const router = useRouter();
  const toggleCompany = (company: string) => {
    setExpandedCompanies((prev) =>
      prev.includes(company) ? prev.filter((c) => c !== company) : [...prev, company]
    );
  };

    // ✅ Filter counts based on pending status
    const totalPending = companyMachineData.reduce(
      (count, company) => count + company.machines.filter((m) => m.pending).length,
      0
    );

  return (
    <SafeAreaView className="bg-primary h-full px-5">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={false} >
        
        {/* Header */}
        <View className="flex-row justify-between mt-5">
          <Text className="text-secondary font-bold text-2xl">
           Manage Machines
          </Text>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color={secondaryColor} />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        
        <View className="flex-row my-4 gap-2">
        <TouchableOpacity
          className={`px-4 py-3 rounded-md ${
            activeTab === "machines" ? "bg-secondary" : "bg-white border"
          }`}
          onPress={() => setActiveTab("machines")}
        >
          <Text className={`font-semibold ${activeTab === "machines" ? "text-white" : "text-black"}`}>
            Machines ({totalPending})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-4 py-3 rounded-md ${
            activeTab === "pending" ? "bg-secondary" : "bg-white border"
          }`}
          onPress={() => setActiveTab("pending")}
        >
          <Text className={`font-semibold ${activeTab === "pending" ? "text-white" : "text-black"}`}>
            Pending Approval ({totalPending})
          </Text>
        </TouchableOpacity>
      </View>

        {/* List of Companies */}
        {activeTab === "machines"
          ? companyMachineData.map((companyItem) => {
              const approvedMachines = companyItem.machines.filter((m) => !m.pending);

              if (approvedMachines.length === 0) return null;

              return (
                <View key={companyItem.company} className="my-5">
                  {/* Company Header */}
                  <TouchableOpacity
                    onPress={() => toggleCompany(companyItem.company)}
                    className="flex-row justify-between items-center p-3 bg-gray-100 rounded-md"
                  >
                    <Text className="font-semibold text-lg">
                      {companyItem.company} ({approvedMachines.length})
                    </Text>
                    <AntDesign
                      name={expandedCompanies.includes(companyItem.company) ? "up-square-o" : "down-square-o"}
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>

                  {/* Machines List */}
                  {expandedCompanies.includes(companyItem.company) &&
                    approvedMachines.map((machine) => (
                      <View key={machine.id} className="bg-white p-4 rounded-md shadow-sm mt-2">
                        <View className="flex-row justify-between">
                          <Text className="font-bold">{machine.serial}</Text>
                          <Text className="text-red-600 font-semibold">{machine.status}</Text>
                        </View>
                        <View className="flex-row gap-3 mt-3">
                          <View>
                            <Text className="text-gray-500 text-sm">Installed</Text>
                            <Text className="font-bold text-md">{machine.installedDate}</Text>
                          </View>
                          <View>
                            <Text className="text-gray-500 text-sm">Location</Text>
                            <Text className="font-bold text-md">{machine.location}</Text>
                          </View>
                        </View>

                        {/* Buttons */}
                        <View className="flex-row justify-between">
                            <View className="flex-row flex-1 mt-3 space-x-2 gap-3 self-center">
                              <TouchableOpacity className="flex-row items-center bg-black p-2 rounded-md flex-1">
                                <Text className="text-white  text-[0.7rem]">WARRANTY CERTIFICATE</Text>
                                <Image source={images.shield} />
                              </TouchableOpacity>
                              <TouchableOpacity  onPress={() => router.push({ pathname: "/admin-services/machine-details/[id]", params: { id: machine.id } })} className="flex-row  items-center bg-black p-2 rounded-md flex-1">
                                <Text className="text-white text-[0.85rem]">VIEW REQUEST</Text>
                                <Image source={images.wrench} />
                              </TouchableOpacity>
                              
                            </View>
                            <Image source={images.machine}  />
                        </View>
                </View>
                
                    ))}
                </View>
              );
            })
          : companyMachineData.map((companyItem) => {
              const pendingMachines = companyItem.machines.filter((m) => m.pending);

              if (pendingMachines.length === 0) return null;

              return (
                <View key={companyItem.company} className="my-5">
                  {/* Company Header */}
                  <TouchableOpacity
                    onPress={() => toggleCompany(companyItem.company)}
                    className="flex-row justify-between items-center p-3 bg-gray-100 rounded-md"
                  >
                    <Text className="font-semibold text-lg">
                      {companyItem.company} ({pendingMachines.length})
                    </Text>
                    <AntDesign
                      name={expandedCompanies.includes(companyItem.company) ? "up-square-o" : "down-square-o"}
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>

                  {/* Pending Machines List */}
                  {expandedCompanies.includes(companyItem.company) &&
                    pendingMachines.map((machine) => (
                      <TouchableOpacity onPress={() => router.push({ pathname: "/admin-services/machine-approval/[id]", params: { id: machine.id } })}
                       key={machine.id} className="flex-row justify-between items-center p-4 border border-gray-300 shadow-sm rounded  bg-white">
                      <Text className="font-medium">{machine.serial}</Text>
                      <AntDesign name="rightsquareo" size={20} color={secondaryColor} />
                      </TouchableOpacity>
                    ))}
                </View>


              );
            })}
      </ScrollView>
    </SafeAreaView>
  );
}

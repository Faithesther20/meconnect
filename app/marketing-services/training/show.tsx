import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"; // Ensure you have this package installed
import { companyMachineData, companyTrainingData  } from "@/constants/MockData"; // Your mock data file
import { useRouter } from "expo-router";
import { secondaryColor } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
// import images from "@/constants/images";
// import { Image } from "react-native";

export default function showTraning() {
  const [activeTab, setActiveTab] = useState<"machines" | "pending">(
    "machines"
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
  // const totalPending = companyMachineData.reduce(
  //   (count, company) =>
  //     count + company.machines.filter((m) => m.pending).length,
  //   0
  // );

  const handleEdit = (id: string) => {
    console.log(`Edit product with id: ${id}`);
    router.push({ pathname: "/marketing-services/training/edit/[id]", params: { id } });
  };

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}

        <View className="px-5 *:">
          <View className="flex-row justify-between mt-5">
            <TouchableOpacity className="" onPress={() => router.back()}>
              <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
            </TouchableOpacity>
            <Text className=" flex-1  text-secondary font-bold text-2xl text-center">
              Training and Webinars
            </Text>
          </View>

          <View className="flex-row gap-2 my-2">
            <TouchableOpacity
              className="flex-row bg-black py-2 px-3  rounded-md items-center gap-2
            "   onPress={() => router.push({ pathname: "/marketing-services/training/add" })}>
              <Text className="text-white text-sm">ADD {"\n"}TRAINING</Text>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row bg-black py-2 px-3 rounded-md  items-center gap-2
            "   onPress={() => router.push({ pathname: "/marketing-services/training/review" })}>
              <Text className="text-white text-sm "  >
                ADD TRAINING {"\n"}CALENDER
              </Text>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Tabs */}

          <View className="flex-row my-4 gap-2">
            <TouchableOpacity
              className={`px-4 py-3 rounded-md ${
                activeTab === "machines" ? "bg-secondary" : "bg-white border"
              }`}
              onPress={() => setActiveTab("machines")}>
              <Text
                className={`font-semibold ${
                  activeTab === "machines" ? "text-white" : "text-black"
                }`}>
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`px-4 py-3 rounded-md ${
                activeTab === "pending" ? "bg-secondary" : "bg-white border"
              }`}
              // onPress={() => setActiveTab("pending")}
              >
              <Text
                className={`font-semibold ${
                  activeTab === "pending" ? "text-white" : "text-black"
                }`}
                >
                Classroom
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`px-4 py-3 rounded-md ${
                activeTab === "pending" ? "bg-secondary" : "bg-white border"
              }`}
              // onPress={() => setActiveTab("pending")}
              >
              <Text
                className={`font-semibold ${
                  activeTab === "pending" ? "text-white" : "text-black"
                }`}>
                Webinars
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full border border-b-black  bg-black"></View>

        <View className="px-5 flex-row justify-between gap-2 py-5">
          <TouchableOpacity className="flex-row justify-between border-b-2 border-gray-300 mb-6 p-3 rounded-lg items-center flex-1"
         >
            <Text className="text-gray-600">All topics</Text>
            <FontAwesome name="chevron-down" size={16} color={secondaryColor} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between border-b-2 border-gray-300 mb-6 p-3 rounded-lg items-center flex-1">
            <Text className="text-gray-600">All Class</Text>
            <FontAwesome name="chevron-down" size={16} color={secondaryColor} />
          </TouchableOpacity>
        </View>

        {/* List of Companies */}
        {activeTab === "machines"
          ? companyTrainingData.map((companyItem) => {
              const approvedMachines = companyItem.machines.filter(
                (m) => !m.pending
              );

              if (approvedMachines.length === 0) return null;

              return (
                <View key={companyItem.company} className="my-2 px-5">
                  {/* Company Header */}
                  <TouchableOpacity
                    onPress={() => toggleCompany(companyItem.company)}
                    className="flex-row justify-between items-center p-3 bg-gray-100 rounded-md">
                    <Text className="font-semibold text-lg">
                      {companyItem.company} 
                    </Text>
                    <AntDesign
                      name={
                        expandedCompanies.includes(companyItem.company)
                          ? "up-square-o"
                          : "down-square-o"
                      }
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>

                  {/* Machines List */}
                  {expandedCompanies.includes(companyItem.company) &&
                    approvedMachines.map((machine) => (
                      <View
                        key={machine.id}
                        className="bg-white rounded-md shadow-sm mt-2 p-2 ">
                        <View className="flex-row justify-between items-center gap-1">
                          <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded">
                            <AntDesign
                              name="delete"
                              size={20}
                              color={secondaryColor}
                            />
                          </TouchableOpacity>
                          <View className="flex-row justify-between item items-center">
                            <Text className="text-sm font-bold text-secondary">
                              Apr 2023 -
                            </Text>
                            <Text className="font-bold text-[1rem] ]text-black" numberOfLines={1}>
                              Product Operation Trainning
                            </Text>
                          </View>

                          {/* Edit Button */}
                          <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded"
                          onPress={() =>handleEdit('2')}>
                            <FontAwesome
                              name="edit"
                              size={20}
                              color={secondaryColor}
                            />
                          </TouchableOpacity>
                        </View>
                        <View className="flex-row my-2 justify-between items-center p-2">
                          <View>
                            <Text>Venue: <Text className="font-bold">Webinar</Text></Text>
                            <Text className="text-sm text-gray-500 mt-1">Reg closes on: 14 Apr</Text>
                            <Text className="text-sm text-gray-500 mt-1">Time: 4:30pm</Text>
                          </View>
                          <View>
                           <TouchableOpacity className="bg-secondary px-4 py-3 rounded-lg  ">
                            <Text className="text-white  font-bold">Register</Text>
                           </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    ))}
                </View>
              );
            })
          : companyMachineData.map((companyItem) => {
              const pendingMachines = companyItem.machines.filter(
                (m) => m.pending
              );

              if (pendingMachines.length === 0) return null;

              return (
                <View key={companyItem.company} className="my-5">
                  {/* Company Header */}
                  <TouchableOpacity
                    onPress={() => toggleCompany(companyItem.company)}
                    className="flex-row justify-between items-center p-3 bg-gray-100 rounded-md">
                    <Text className="font-semibold text-lg">
                      {companyItem.company} ({pendingMachines.length})
                    </Text>
                    <AntDesign
                      name={
                        expandedCompanies.includes(companyItem.company)
                          ? "up-square-o"
                          : "down-square-o"
                      }
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>

                  {/* Pending Machines List */}
                  {expandedCompanies.includes(companyItem.company) &&
                    pendingMachines.map((machine) => (
                      <TouchableOpacity
                        onPress={() =>
                          router.push({
                            pathname: "/admin-services/machine-approval/[id]",
                            params: { id: machine.id },
                          })
                        }
                        key={machine.id}
                        className="flex-row justify-between items-center p-4 border border-gray-300 shadow-sm rounded  bg-white">
                        <Text className="font-medium">{machine.serial}</Text>
                        <AntDesign
                          name="rightsquareo"
                          size={20}
                          color={secondaryColor}
                        />
                      </TouchableOpacity>
                    ))}
                </View>
              );
            })}
      </ScrollView>
    </SafeAreaView>
  );
}

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons"; // Ensure you have this package installed
import { companyMachineData, companyTrainingData  } from "@/constants/MockData"; // Your mock data file
import { useRouter } from "expo-router";
import { secondaryColor } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
// import images from "@/constants/images";
import {  Modal } from "react-native";

export default function showTraning() {
  const [activeTab, setActiveTab] = useState<"machines" | "pending">(
    "machines"
  );

  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

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
    <View className="px-5">
        <View className="" >
          <View className="flex-row justify-between mt-5">
            <TouchableOpacity className="" onPress={() => router.back()}>
              <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
            </TouchableOpacity>
            <Text className=" flex-1  text-secondary font-bold text-2xl text-center">
            Review Trainings &
            Webinars Uploaded
            </Text>
          </View>
      
            <Text className="font-bold my-5">
                File “Trainingcalender.xlsx” has been uploaded </Text>

        
        </View>
       
       

        {/* List of Companies */}
        {activeTab === "machines"
          ? companyTrainingData.map((companyItem) => {
              const approvedMachines = companyItem.machines.filter(
                (m) => !m.pending
              );

              if (approvedMachines.length === 0) return null;

              return (
                <View key={companyItem.company} className="my-2 ">
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

        

            <View className="mt-8 flex-row justify-between gap-10  ">
                <TouchableOpacity className="border border-secondary flex-1 p-3 items-center rounded-lg">
                    <Text>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-secondary flex-1  p-3 items-center rounded-lg"
                 onPress={() => setModalVisible(true)}
                >
                    <Text className="text-white ">PUBLISH</Text>
                </TouchableOpacity>
            </View>

              {/* Confirmation Modal */}
         <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                >
                <View className="flex-1 justify-center items-center bg-black/50">
                    <View className="bg-white p-5 pt-12 rounded-lg w-80 items-center">
                    <TouchableOpacity 
                className="absolute top-3 right-3 pb-5" 
                onPress={() => setModalVisible(false)}
            >
            
            <Feather name="x-square" size={24} color={secondaryColor} />
            </TouchableOpacity>
                    <Text className="text-lg  text-center">Training Calender
                    published successfully </Text>
             
              <TouchableOpacity 
                className="mt-4  bg-secondary  px-4 py-2 rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white">CLOSE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
          </View>


      </ScrollView>
    </SafeAreaView>
  );
}

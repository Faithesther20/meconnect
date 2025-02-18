import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Button,Modal, Image } from "react-native";
import { customersData } from "@/constants/MockData";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
//import Dropdown from '@/components/AdminServicesComp/Dropdown'
import { secondaryColor } from "@/constants/Colors";
import {AntDesign, Feather, FontAwesome }from "@expo/vector-icons";

import RNPickerSelect from "react-native-picker-select";
import { RadioButton } from "react-native-paper";
import images from "@/constants/images";
export default function CustomerDetails() {
 
  const [selectedEngineer, setSelectedEngineer] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const router = useRouter();

  const { id } = useLocalSearchParams(); // Get ID from the URL
//   const request = customersData
//     .flatMap((company) => company.requests)
//     .find((req) => req.custID === id);

    const getRequestsByCustID = (id) => {
        const customer = customersData.find((company) => company.custID === id);
        // return customer ? customer.machines : [];
        return customer;
    };

    const request = getRequestsByCustID(id);
    const machines = request.machines;


  if (!request) {
    return (
      <Text className="text-red-600 text-center mt-10">
        Customer Request Not Found
      </Text>
    );
  }

  return (
    <SafeAreaView className="p-5">
      <ScrollView showsVerticalScrollIndicator={false} >
      <View className="flex-row justify-between mt-5">
          <TouchableOpacity className=""
          onPress={() => router.back()} 
          >
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className=" text-secondary font-bold text-2xl">
          Customer Details
          </Text>

          <Feather name="edit" size={24} color={secondaryColor} />
        </View>
        <View className="mt-5 font-bold">
            <Text className="font-bold text-lg">{request.customer}</Text>
        </View>
     <View className="mt-5 p-1  rounded-lg">
        

        <View className="rounded-lg b ">
        {/* Header */}
        <View className=" rounded-t-lg">
            <Text className="font-bold text-lg">COMPANY INFORMATION</Text>
        </View>

        {/* Company Details */}
        <View className="">
            <View className="mt-3">
            <Text className="text-sm text-gray-500">PAN Number</Text>
            <View className="flex-row justify-between items-center">
                <Text className="text-lg flex-row items-center">
                    JKENJ742968
                    
                </Text>
                <TouchableOpacity className="ml-2">
                <AntDesign name="pdffile1" size={24} color="red" />
                </TouchableOpacity>
                </View>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">GST Number</Text>
          <View className="flex-row justify-between items-center">
          <Text className="text-lg flex-row justify items-center">
                27AANFA3807C1ZQ
               
            </Text>
            <TouchableOpacity className="ml-2">
                <AntDesign name="pdffile1" size={24} color="red" />
                </TouchableOpacity>
          </View>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Company Name</Text>
            <Text className="text-lg ">AIM ENGINEERING</Text>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Company Full Address</Text>
            <Text className="text-lg leading-6">
                T-Block, W-34 M.I.D.C, BHOSARI,{"\n"}
                Dist-Pune, Maharashtra 411026
            </Text>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Constitution</Text>
            <Text className="text-lg ">Private</Text>
            </View>

            {/* Letter of Assurance with PDF Icon */}
            <View className="mt-3 ">
                <Text className="text-sm text-gray-500">Letter of Assurance</Text>
                
                <View className="flex-row justify-between items-center">
                <Text className="text-lg flex-row justify items-center">
                        27AANFA3807C1ZQ
                    
                </Text>
            <TouchableOpacity className="ml-2">
                <AntDesign name="pdffile1" size={24} color="red" />
                </TouchableOpacity>
          </View>
            </View>
        </View>

        {/* Contact Information */}
        <View className=" rounded-b-lg mt-5">
            <Text className="font-bold text-lg">CONTACT INFORMATION</Text>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Customer Name</Text>
            <Text className="text-lg ">PINAKESHWAR INDUSTRIES</Text>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Customer Mail ID</Text>
            <Text className="text-lg">aimengineeringpune@gmail.com</Text>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Contact Person Name</Text>
            <Text className="text-lg ">Ganesh</Text>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Contact Person Phone No.</Text>
            <Text className="text-lg">8274988284</Text>
            </View>

            <View className="mt-3">
            <Text className="text-sm text-gray-500">Contact Person Designation</Text>
            <Text className="text-lg">Owner</Text>
            </View>
        </View>
        <View className=" rounded-b-lg mt-5">
            <Text className="font-bold text-lg">MACHINE INFORMATION</Text>
            {machines && machines.length > 0 ? (
              machines.map((machine) => (
                 <View key={machine.id} className="bg-white p-3 rounded-md shadow mt-5">
                        <View className="flex-row justify-between">
                          <Text className="font-bold">{machine.serial}</Text>
                          <Text className="text-red-600 font-bold">{machine.status}</Text>
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
                            <View className="flex-row flex-1 mt-3 gap-2 self-center">
                              <TouchableOpacity className="flex-row items-center bg-black p-2 rounded-md flex-1">
                                <Text className="text-white  text-xs">WARRANTY CERTIFICATE</Text>
                                <Image source={images.shield} className="w-2 " />
                              </TouchableOpacity>
                              <TouchableOpacity  onPress={() => router.push({ pathname: "/admin-services/machine-details/[id]", params: { id: machine.id } })} className="flex-row  items-center bg-black p-2 rounded-md flex-1">
                                <Text className="text-white text-xs">VIEW {"\n"}REQUEST</Text>
                                <Image source={images.wrench} className="w-4" />
                              </TouchableOpacity>
                              
                            </View>
                            <Image source={images.machine}  />
                        </View>
                </View>
              ))
            ) : (
              <Text className="text-center text-gray-500 mt-4">No machines available.</Text>
            )}
          </View>
        </View>
     </View>
                

       


        
   
      </ScrollView>
    </SafeAreaView>
  );
}

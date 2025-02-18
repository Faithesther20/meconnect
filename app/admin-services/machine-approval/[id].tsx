import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Button,Modal } from "react-native";
import { companyData, companyMachineData } from "@/constants/MockData";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
//import Dropdown from '@/components/AdminServicesComp/Dropdown'
import { secondaryColor } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from '@expo/vector-icons/Feather';
import RNPickerSelect from "react-native-picker-select";
import { RadioButton } from "react-native-paper";

export default function MachineApproval() {
 
  const [selectedEngineer, setSelectedEngineer] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const router = useRouter();

  const { id } = useLocalSearchParams(); // Get ID from the URL
  const request = companyMachineData
    .flatMap((company) => company.machines)
    .find((req) => req.id === id);

  if (!request) {
    return (
      <Text className="text-red-600 text-center mt-10">
       Machine Details
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
          Aproval Request
          </Text>
          <Feather name="edit" size={24} color={secondaryColor} />
        </View>

       

        <View className="rounded-lg border-gray-300 mt-5">
          <View className="rounded-lg border  bg-gray-200 p-3 space-y-1  border-gray-300">
            <View className="flex-row justify-center items-center">
             <Text className="text-lg font-bold">
                {request.serial} 
              </Text> 
            
            </View>

          </View>
          <View className="bg-white p-4 border border-gray-200 rounded-lg mt-5">
          <View className="">
              <Text className="text-lg font-bold">Company Information</Text>
             
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Customer Name</Text>
              <Text className="text-lg leading-6 ">PINAKESHWAR INDUSTRIES</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Company address</Text>
              <Text className="text-lg leading-6 ">T-Block, W-34 M.I.D.C, BHOSARI, Dist-Pune, Maharashtra 411026</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">State</Text>
              <Text className="text-lg leading-6 ">Maharashtra</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Location</Text>
              <Text className="text-lg leading-6 ">T-Block, W-34 M.I.D.C, BHOSARI, 
              Dist-Pune, Maharashtra 411026</Text>
         </View>

           
          </View>
          <View className="mt-5 bg-white p-4 border border-gray-200 rounded-lg ">
          <View className="">
              <Text className="text-lg font-bold">Machine Information</Text>
             
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">MTB Category</Text>
              <Text className="text-lg leading-6 ">INDIA</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">MTB</Text>
              <Text className="text-lg leading-6 ">LWW</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Machine Model</Text>
              <Text className="text-lg leading-6 ">FCA80H-4BV</Text>
         </View>
         <View className="mt-3">
              <Text className="text-sm text-gray-500">NC Model</Text>
              <Text className="text-lg leading-6 ">FCA80H-4BV</Text>
         </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">MC Ser NO</Text>
              <Text className="text-lg leading-6 ">V123-00029</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Dealer</Text>
              <Text className="text-lg leading-6 ">V123-00029</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Shipped on</Text>
              <Text className="text-lg leading-6 ">20-12-2024</Text>
            </View>
           
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Model</Text>
              <Text className="text-lg leading-6 ">New</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Model</Text>
              <Text className="text-lg leading-6 ">Model STD</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Registered in Mobile number</Text>
              <Text className="text-lg leading-6 ">Yes</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">BOM ID</Text>
              <Text className="text-lg leading-6 ">2849583593</Text>
            </View>

           
          </View>
        </View>
        
        <View className="mt-8 flex-row justify-between gap-10">
        <TouchableOpacity className="border border-secondary flex-1 p-3 items-center rounded-lg">
          <Text>REJECT</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-secondary flex-1  p-3 items-center rounded-lg" onPress={() => setModalVisible(true)} >
          <Text className="text-white ">APPOROVE</Text>
        </TouchableOpacity>
       
        </View>

   

        {/* <Text className="text-2xl font-bold text-red-600">{request.title}</Text>
        <Text className="text-lg font-semibold">{request.status}</Text>
        <Text className="text-gray-600">{request.description}</Text>
        <Text className="text-gray-400">
          Requested Date: {request.requestedDate}
        </Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}

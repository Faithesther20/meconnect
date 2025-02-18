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

export default function MachineDetails() {
 
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
           Machine Details
          </Text>

          <Feather name="edit" size={24} color={secondaryColor} />
        </View>

       

        <View className="rounded-lg border border-gray-300 mt-5">
          <View className="bg-gray-200 p-3 space-y-1  border-b-2 border-gray-300">
            <View className="flex-row justify-between">
             <Text className="text-lg font-bold">
                {request.serial} 
              </Text> 
             <Text className="text-sm  text-secondary font-bold">
                {request.status ? "ACTIVE" : "INACTIVE"}{" "}
              </Text>
            </View>

          </View>
          <View className="bg-gray-50 p-3 rounded-b-lg">
            <View className="flex-row justify-between">
              <View className=" flex-1">
                <Text className="text-sm text-gray-500">MTB Category</Text>
                <Text className="text-lg ">FCA-C80</Text>
              </View>
              <View className="flex-1 ">
                <Text className="text-sm text-gray-500">MTB</Text>
                <Text className="text-lg ">Cosmos</Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-1">
                <Text className="text-sm text-gray-500">MC Ser No</Text>
                <Text className="text-lg ">M8011M123ZN</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Machine Model</Text>
                <Text className="text-lg ">M8011M123ZN </Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Nc Model</Text>
                <Text className="text-lg ">M8011M123ZN</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">NC Serial No</Text>
                <Text className="text-lg ">M8011M123ZN</Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Dealer</Text>
                <Text className="text-lg ">M8011M123ZN</Text>
                
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Shipped on</Text>
                
                <Text className="text-lg ">20-12-2024 </Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Machine Status</Text>
                <Text className="text-lg ">M8011M123ZN</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Model</Text>
                <Text className="text-lg ">Model STD </Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Registered in
                Mobile number</Text>
                <Text className="text-lg ">Yes</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">BOM ID</Text>
                <Text className="text-lg ">2849583593</Text>
              </View>
            </View>

           
          </View>
        </View>
        
        {/* <View className="mt-8 flex-row justify-between gap-10">
        <TouchableOpacity className="border border-secondary flex-1 p-3 items-center rounded-lg">
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-secondary flex-1  p-3 items-center rounded-lg" onPress={() => setModalVisible(true)} >
          <Text className="text-white ">Assign</Text>
        </TouchableOpacity>
       
        </View> */}

   

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

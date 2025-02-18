import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Button,Modal, Image,TextInput } from "react-native";
import { customersData } from "@/constants/MockData";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
//import Dropdown from '@/components/AdminServicesComp/Dropdown'
import { secondaryColor } from "@/constants/Colors";
import {AntDesign, Feather, FontAwesome }from "@expo/vector-icons";

import RNPickerSelect from "react-native-picker-select";
import { RadioButton } from "react-native-paper";
import images from "@/constants/images";
export default function CustomerApproval() {
 
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
          Registration Approval
          </Text>
          <Feather name="edit" size={24} color={secondaryColor} />
        </View>

        <View className="rounded-lg border border-gray-300 mt-5">
       
            
            {/* Header */}
            <View className="bg-gray-50 p-3 rounded-t-lg">
                <Text className="font-bold text-lg">COMPANY INFORMATION</Text>
            </View>

            {/* Company Details */}
            <View className="p-3">
                <View className="mt-3">
                <Text className="text-sm text-gray-500">PAN Number</Text>
                <Text className="text-lg font-bold">JKENJ742968</Text>
                </View>

                <View className="mt-3">
                <Text className="text-sm text-gray-500">GST Number</Text>
                <Text className="text-lg font-bold">27AANFA3807C1ZQ</Text>
                </View>

                <View className="mt-3">
                <Text className="text-sm text-gray-500">Company Name</Text>
                <Text className="text-lg font-bold">AIM ENGINEERING</Text>
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
                <Text className="text-lg font-bold">Private</Text>
                </View>
            </View>

            {/* Information from MESYS */}
            <View className="bg-gray-50 p-3 mt-5">
                <Text className="font-bold text-lg">INFORMATION FROM MESYS</Text>
            </View>

            {/* Contact Information */}
            <View className="p-3">
                <Text className="font-bold text-lg">Contact Information</Text>
                <View className="mt-3">
                <Text className="text-sm text-gray-500">Customer Name</Text>
                <Text className="text-lg font-bold">PINAKESHWAR INDUSTRIES</Text>
                </View>
                <View className="mt-3">
                <Text className="text-sm text-gray-500">Customer Mail ID</Text>
                <Text className="text-lg">aimengineeringpune@gmail.com</Text>
                </View>
                <View className="mt-3">
                <Text className="text-sm text-gray-500">Contact Person Name</Text>
                <Text className="text-lg font-bold">Ganesh</Text>
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

            {/* Machine Information */}
            <View className="bg-gray-50 p-3 mt-5">
                <Text className="font-bold text-lg">Machine Information</Text>
            </View>

            <View className="p-3">
                <View className="mt-3">
                <Text className="text-sm text-gray-500">Machine Model</Text>
                <Text className="text-lg font-bold">JV5S</Text>
                </View>
                <View className="mt-3">
                <Text className="text-sm text-gray-500">J.V.C No</Text>
                <Text className="text-lg font-bold">V123-00029</Text>
                </View>
                <View className="mt-3">
                <Text className="text-sm text-gray-500">NC Model</Text>
                <Text className="text-lg font-bold">FCA08H-4BV</Text>
                </View>
                <View className="mt-3">
                <Text className="text-sm text-gray-500">B No</Text>
                <Text className="text-lg font-bold">N801M-132ZN</Text>
                </View>
            </View>

            {/* Payment Information */}
            <View className="bg-gray-50 p-3 mt-5">
                <Text className="font-bold text-lg">Payment Information</Text>
            </View>

            <View className="p-3">
                <View className="mt-3">
                <Text className="text-sm text-gray-500">Payment Method</Text>
                <Text className="text-lg font-bold">Credit Card</Text>
                </View>
                <View className="mt-3">
                <Text className="text-sm text-gray-500">Warranty Status</Text>
                <Text className="text-lg font-bold">Yes</Text>
                </View>
            </View>
        </View>

       


        
        <View className="mt-5  border rounded-lg border-red-500 p-3 ">
         <View>
          <Text className="font-bold">SAP CODE</Text>
          {/* <Dropdown
          selectedValue={selectedEngineer}
          onValueChange={setSelectedEngineer}
          items={[
            { label: "John Doe", value: "john" },
            { label: "Jane Smith", value: "jane" }
          ]}
        /> */}
     
     <View className="border mt-4 rounded-lg p-2">
        <TextInput
            placeholder="Enter SAP code from meisys"
            placeholderTextColor="gray"
            value={selectedEngineer}
            onChangeText={setSelectedEngineer}
            style={{
            color: 'black',
            fontSize: 14,
            }}
        />
    </View>

<View className="mt-4 ">
 
  <View className="flex-row">
  {["VIP Customer"].map(slot => (
    <View key={slot} className="flex-row items-center">
      <RadioButton 
        value={slot}
        status={selectedSlot === slot ? "checked" : "unchecked"}
        onPress={() => setSelectedSlot(slot)}
      />
      <Text>{slot}</Text>
      
    </View>
  ))}

    </View>
  
</View>

         </View>
        </View>
        <View className="mt-8 flex-row justify-between gap-10">
        <TouchableOpacity className="border border-secondary flex-1 p-3 items-center rounded-lg">
          <Text>REJECT</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-secondary flex-1  p-3 items-center rounded-lg" onPress={() => setModalVisible(true)} >
          <Text className="text-white ">APPROVE</Text>
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
              <Text className="text-lg  text-center">Customer registration approved</Text>
              {/* <Text className="mt-2 text-gray-600">{request.title} - {id}</Text> */}
              <Text className="mt-2 text-gray-600">ABCD Company - Bangalore  </Text>
              
              <View className="flex-row space-between gap-4 items-center">               
              <TouchableOpacity 
                className="flex-1  flex-1 items-center  mt-4 border border-red-500 px-4 py-2 rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-red">CLOSE</Text>
              </TouchableOpacity>

            
              
              <TouchableOpacity 
                className="flex-1  flex-1 items-center  mt-4 bg-red-500 px-4 py-2 rounded-lg"
                // onPress={() => setModalVisible(false)}
              >
                <Text className="text-white text-sm">NEXT REQUEST</Text>
              </TouchableOpacity>
                </View>
            </View>
          </View>
        </Modal>

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

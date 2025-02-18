import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Button,Modal } from "react-native";
import { companyData } from "@/constants/MockData";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
//import Dropdown from '@/components/AdminServicesComp/Dropdown'
import { secondaryColor } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from '@expo/vector-icons/Feather';
import RNPickerSelect from "react-native-picker-select";
import { RadioButton } from "react-native-paper";

export default function ServiceRequestDetails() {
 
  const [selectedEngineer, setSelectedEngineer] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const router = useRouter();

  const { id } = useLocalSearchParams(); // Get ID from the URL
  const request = companyData
    .flatMap((company) => company.requests)
    .find((req) => req.id === id);

  if (!request) {
    return (
      <Text className="text-red-600 text-center mt-10">
        Service Request Not Found
      </Text>
    );
  }

  return (
    <SafeAreaView className="p-5">
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="flex-1"
          onPress={() => router.back()} 
          >
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className="flex-2  text-secondary font-bold text-2xl">
            Service Request Details
          </Text>
        </View>

        <View className="mt-5 font-bold">
          <Text>Company Name</Text>
        </View>

        <View className="rounded-lg border border-gray-300 mt-5">
          <View className="bg-gray-200 p-3 space-y-1  border-b-2 border-gray-300">
            <View className="flex-row justify-between">
              <Text className="text-lg font-bold">
                {request.title} [{request.status}]
              </Text>
              <Text className="text-sm  text-secondary font-bold">
                {request.registered ? "REGISTERED" : "NOT REGISTERED"}{" "}
              </Text>
            </View>

            <Text
              className="text-gray-600"
              numberOfLines={2}
              ellipsizeMode="tail">
              {request.description}
            </Text>
            <Text className="text-black">
              Requested Date: {request.requestedDate}
            </Text>
          </View>
          <View className="bg-white p-3 rounded-b-lg">
            <View className="flex-row justify-between">
              <View className=" flex-1">
                <Text className="text-sm text-gray-500">Contribution Type</Text>
                <Text className="text-lg ">FCA-C80</Text>
              </View>
              <View className="flex-1 ">
                <Text className="text-sm text-gray-500">MTB Name</Text>
                <Text className="text-lg ">Cosmos</Text>
              </View>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-1">
                <Text className="text-sm text-gray-500">MC Ser No</Text>
                <Text className="text-lg ">M8011M123ZN</Text>
              </View>
              <View className="flex-1">
                <Text className="text-sm text-gray-500">Issue type</Text>
                <Text className="text-lg ">Not working </Text>
              </View>
            </View>

            <View className="mt-3">
              <Text className="text-sm text-gray-500">Description</Text>
              <Text className="text-lg leading-6 ">{request.description}</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">
                Preferred Date & Time slots{" "}
              </Text>
              <Text className="text-lg leading-6 ">26-12-2024, 29-12-2024</Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">
                Contact Information{" "}
              </Text>
              <Text className="text-lg leading-6 ">
                Customer name - Designation adkajf@gmail.com 8492930238
              </Text>
            </View>
            <View className="mt-3">
              <Text className="text-sm text-gray-500">Address </Text>
              <Text className="text-lg leading-6 ">
                Customer name - Designation adkajf@gmail.com 8492930238
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-5  border rounded-lg border-red-500 p-3 ">
         <View>
          <Text className="font-bold">Assign Servic Engineer</Text>
          {/* <Dropdown
          selectedValue={selectedEngineer}
          onValueChange={setSelectedEngineer}
          items={[
            { label: "John Doe", value: "john" },
            { label: "Jane Smith", value: "jane" }
          ]}
        /> */}
     

<View className="border mt-4 rounded-lg">
  <RNPickerSelect
    value={selectedEngineer}
    onValueChange={setSelectedEngineer}
    items={[
      { label: "John Doe", value: "john" },
      { label: "Jane Smith", value: "jane" }
    ]}
    style={{
      inputAndroid: {
        color: "black",
        fontSize: 14,
      },
      inputIOS: {
        color: "black",
        fontSize: 14,
      },
    }}
  />
</View>

<View className="mt-4 ">
  <Text className="font-bold f">Confirm Slot</Text>
  <View className="flex-row">
  {["26-12-2024", "27-12-2024"].map(slot => (
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
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-secondary flex-1  p-3 items-center rounded-lg" onPress={() => setModalVisible(true)} >
          <Text className="text-white ">Assign</Text>
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
              <Text className="text-lg  text-center">Service Engineer Assigned Successfully</Text>
              <Text className="mt-2 text-gray-600">{request.title} - {id}</Text>
              
              <TouchableOpacity 
                className="mt-4 bg-red-500 px-4 py-2 rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white">Close</Text>
              </TouchableOpacity>
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

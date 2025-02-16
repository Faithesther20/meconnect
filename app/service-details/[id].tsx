import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { companyData } from "../../constants/MockData";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import { secondaryColor } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ServiceRequestDetails() {
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
      <ScrollView >
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="flex-1">
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className="flex-2  text-secondary font-bold text-2xl" >
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

            <Text className="text-gray-600" numberOfLines={2} ellipsizeMode="tail">{request.description}</Text>
            <Text className="text-black">
              Requested Date: {request.requestedDate}
            </Text>
          </View>
          <View className="bg-white p-3 ">
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
                <Text className="text-sm text-gray-500">Preferred Date & Time slots </Text>
                <Text className="text-lg leading-6 ">26-12-2024, 29-12-2024</Text>
              </View>
            <View className="mt-3">
                <Text className="text-sm text-gray-500">Contact Information </Text>
                <Text className="text-lg leading-6 ">Customer name - Designation
                                adkajf@gmail.com
                                8492930238</Text>
              </View>
            
          </View>



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

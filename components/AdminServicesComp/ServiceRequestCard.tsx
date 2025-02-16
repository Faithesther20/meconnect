import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

interface ServiceRequestProps {
    request: {
      id: string;
      title: string;
      status: string;
      registered: boolean;
      description: string;
      requestedDate: string;
    };
  }
// interface ServiceRequestProps {
//   request: {
//     id: string;
//     title: string;
//     description: string;
//     requestedDate: string;
//     status: string;
//     registered: boolean;
//   };
// }

export const ServiceRequestCard: React.FC<ServiceRequestProps> = ({ request }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="p-3 my-2 bg-white shadow drop-shadow- rounded-md"
      onPress={() => router.push({ pathname: "/service-details/[id]", params: { id: request.id } })}
    >
        <View className="flex-row justify-between">
            <Text className="text-lg font-bold">{request.title} [{request.status}]</Text>
            <Text className="text-sm  text-secondary font-bold">{request.registered ?"REGISTERED":"NOT REGISTERED"} </Text>
        </View>
      
      <Text className="text-gray-600">{request.description}</Text>
      <Text className="text-gray-400">Requested Date: {request.requestedDate}</Text>
    </TouchableOpacity>
  );
};

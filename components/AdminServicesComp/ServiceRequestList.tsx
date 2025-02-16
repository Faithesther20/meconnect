import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { ServiceRequestCard } from "./ServiceRequestCard";
import AntDesign from '@expo/vector-icons/AntDesign';
import { secondaryColor } from "@/constants/Colors";


interface ServiceRequest {
  id: string;
  title: string;
  description: string;
  requestedDate: string;
  status: string;
  registered:boolean
}

interface CompanyProps {
  company: {
    id: string;
    name: string;
    requests: ServiceRequest[];
  };
}

export const ServiceRequestList: React.FC<CompanyProps> = ({ company }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <View className="mb-4">
      {/* Company Header */}
      <TouchableOpacity
  className="p-3 flex-row justify-between"
  onPress={() => setIsCollapsed(!isCollapsed)}
>
  <Text className="text-lg font-semibold">{company.name}</Text>
  {/* Fix: Directly use JSX inside the ternary operator */}
  {isCollapsed ? (
    <AntDesign name="up-square-o" size={24} color={secondaryColor} />
  ) : (
    <AntDesign name="down-square-o" size={24} color={secondaryColor} />
  )}
</TouchableOpacity>


      {/* Collapsible List */}
      <Collapsible collapsed={isCollapsed}>
        {company.requests.map((request) => (
          <ServiceRequestCard key={request.id} request={request} />
        ))}
      </Collapsible>
    </View>
  );
};

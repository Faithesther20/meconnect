import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { companyData } from "../constants/MockData";
import { Dropdown } from "../components/AdminServicesComp/Dropdown";
import { Searchbar } from "../components/AdminServicesComp/Searchbar";
import { ServiceRequestList } from "../components/AdminServicesComp/ServiceRequestList";
import { secondaryColor } from "@/constants/Colors";
import {useRouter} from 'expo-router';


export default function App() {
  

  
  const router = useRouter();
 
  return (
    <SafeAreaView className="bg-primary h-full px-5 flex-row justify-between items-center border border-secondary">
    
    <TouchableOpacity
        className="bg-secondary p-4 rounded-lg"
        onPress={() => router.push("/admin-services")}
      >
        <Text className="text-white font-bold">Admin Services</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-secondary p-4 rounded-lg"
        onPress={() => router.push("/marketing-services")}
      >
        <Text className="text-white font-bold">Marketing Services</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

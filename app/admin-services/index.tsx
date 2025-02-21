import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome, Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
// import { Svg, Circle } from "react-native-svg";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { secondaryColor } from "@/constants/Colors";
import { useRouter } from "expo-router";


export default function admin() {
  const [menuVisible, setMenuVisible] = useState(false);
  // Circular Progress Props
  const progress = 0.8; // 80%
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  // const strokeDashoffset = circumference * (1 - progress);
  
 
  const router = useRouter();
  // Section Data
  const sections = [
    {
      title: "Manage Service Requests",
      btn1: ["Raise Serv Request"],
      btn2: ["All Service Requests","manage_services"] as const,
      pathname: "/",
    },
    {
      title: "Manage Machines",
      btn1: ["New Registration", "/"],
      btn2: ["All Machines","manage_machines"] as const,
      pathname: "/",
    },
    {
      title: "Manage Customers",
      btn1: ["New Registration", "/"],
      btn2: ["All Customers","manage_customers"] as const,
      pathname: "/",
    },
  ]as const;

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 bg-gray-100 p-4">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Image source={images.logo} className="h-10 w-28" />
            <View className="flex-row gap-4 items-center">
              <View className=" ">
                <View className="absoute top-0 left-3 w-5 h-5 rounded-full bg-black  flex-row justify-center items-center" style={{ zIndex: 10, elevation: 10 }}>
                  <Text className="text-white flex-row text-xs">5</Text>
                </View>
                <TouchableOpacity className="absolute top-0">       
                  <MaterialCommunityIcons name="bell-outline" size={26} color={secondaryColor} />
                </TouchableOpacity>

              </View>
            

              <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                <Feather name="menu" size={26} color={secondaryColor} />
              </TouchableOpacity>
            </View>
          </View>


          {/*Menue section */}
         {
          menuVisible && (
            <View className="absolute  top-3 right-3 rounded-2xl bg-white  w-full "style={{ zIndex: 10, elevation: 2 }}>
            <View  className="p-5 py-8 flex-row justify-between items-center">
              <Text className="text-secondary text-lg font-bold">
                Hi, James Daniel
              </Text>
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <Feather name="x-square" size={26} color={secondaryColor} />

            </TouchableOpacity>
            </View>
            <View className="w-full border border-b-black border-1  bg-black"></View>
            <View className="px-5 pb-8">
              <TouchableOpacity className="flex-row justify-between items-center py-5 border-b-2 border-gray-300" 
              onPress={() => router.push({ pathname: "/admin-services/manage_machines" })}>
                <Text>
                Manage Machines
                </Text>
                <AntDesign name="rightsquareo" size={24} color={secondaryColor} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center py-5 border-b-2 border-gray-300"
               onPress={() => router.push({ pathname: "/admin-services/manage_services" })}>
                <Text>
                Service request
                </Text>
                <AntDesign name="rightsquareo" size={24} color={secondaryColor} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center py-5 border-b-2 border-gray-300"
               onPress={() => router.push({ pathname: "/marketing-services/training/show" })}>
                <Text>
                Training schedules

                </Text>
                <AntDesign name="rightsquareo" size={24} color={secondaryColor} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center py-5 ">
                <Text>
                {/* Manage Machines */}
                </Text>
              
              </TouchableOpacity>
            </View>
           
          </View>
          )
         }

          

          {/* Cards */}
          {sections.map((section, index) => (
            <View
              key={index}
              className="mb-4 bg-white rounded-lg shadow-md p-5">
              <View className="flex-row justify-center">
                <Text className="font-bold text-lg  mb-2">{section.title}</Text>
              </View>

              {/* Dropdown Selector */}

              {/* Row Layout */}
              <View className="flex-row items-center justify-between mt-4">
                {/* Circular Progress */}
                {/* <Svg  height="70" width="70" viewBox="0 0 60 60">
              <Circle cx="30" cy="30" r={radius} stroke="#E5E7EB" strokeWidth="6" fill="none" />
              <Circle
                cx="30"
                cy="30"
                r={radius}
                stroke="#4CAF50"
                strokeWidth="6"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
              <Text className="absolute text-center w-full text-lg font-bold">{8}</Text>
            
                <Image source={images.chart} />
                {/* Status List */}
                <View className="ml-6 flex-1">
                  <TouchableOpacity className="flex-row justify-between border-b-2 border-gray-300 mb-6 p-3 rounded-lg items-center">
                    <Text className="text-gray-600">Select Option</Text>
                    <FontAwesome
                      name="chevron-down"
                      size={16}
                      color={secondaryColor}
                    />
                  </TouchableOpacity>
                  <View className="flex-row items-center justify-between mb-1 gap-3">
                    <FontAwesome name="square" size={16} color="#16a34a" />
                    <Text className="flex-1  text-sm">Active: 5</Text>
                    <AntDesign name="rightsquareo" size={20} color="black" />
                  </View>
                  <View className="flex-row items-center justify-between mb-1 gap-3">
                    <FontAwesome name="square" size={16} color="#eab308" />
                    <Text className="flex-1   text-sm">
                      Pending Approval: 1
                    </Text>
                    <AntDesign name="rightsquareo" size={20} color="black" />
                  </View>
                  <View className="flex-row items-center justify-between gap-3">
                    <FontAwesome name="square" size={16} color=" #ef4444;" />
                    <Text className="flex-1 text-sm">Inactive: 2</Text>
                    <AntDesign name="rightsquareo" size={20} color="black" />
                  </View>
                </View>
              </View>

              {/* Buttons */}
              <View className="mt-4 flex-row justify-between gap-2">
                <TouchableOpacity 
                 className="flex-1 flex-row justify-center bg-black px-4 py-3 rounded-xl">
                  <Text className="text-white text-sm font-semibold">
                    {section.btn1[0]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push(`/admin-services/${section.btn2[1]}` )} 
                 className="flex-1 flex-row justify-center bg-black px-4 py-3 rounded-xl" >
                  <Text className="text-white text-sm font-semibold">
                    {section.btn2[0]}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

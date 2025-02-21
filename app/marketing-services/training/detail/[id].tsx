import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";
import { router } from "expo-router";
import images from "@/constants/images";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { Platform } from "react-native";
// import { TextInput } from "react-native";

const productDetail = () => {
  const { id } = useLocalSearchParams();

  // const [date, setDate] = useState<Date>(new Date());
  // const [showPicker, setShowPicker] = useState<boolean>(false);

    const handleEdit = (id: string) => {
      console.log(`Edit product with id: ${id}`);
      router.push({ pathname: "/marketing-services/product/edit/[id]", params: { id } });
    };

  

  // Function to handle date change
  // const onChange = (event: any, selectedDate?: Date) => {
  //   if (selectedDate) {
  //     setDate(selectedDate);
  //   }
  //   setShowPicker(false); // Hide the picker after selecting a date
  // };

  return (
    <SafeAreaView className="p-5">
      <ScrollView>
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className=" flex-1  text-secondary font-bold text-2xl text-center">
            Training details
          </Text>
          {/* <TouchableOpacity className=""
          onPress={() => router.push} 
          >
            <Feather name="plus-square" size={24} color={secondaryColor} />
          </TouchableOpacity> */}
        </View>
        <View className="mt-2 ">
                <View className="py-5">
                <Text className="font-bold  text-center">Product & Operation training</Text>
              <Text className="text-sm text-center">Venue: Coimbatore </Text>
              <Text className="text-sm text-center">[ Reg. closes on 23 Apr 2023. <Text className="text-red">Available seats: 0 ] </Text></Text>
              <Text className="font-bold text-sm text-center underline text-secondary mt-2">Next Class room seats available on 15 May</Text>
    
              </View>   
                   
           <View className="w-full  rounded-lg  ">
            <Image
              source={images.worker}
              className="w-full h-[200px] rounded-lg"
              resizeMode="cover"
            />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-gray-500 text-sm">Date & Time:</Text>
          <Text className="">
          Monday 23 Apr 2023, 9:30 a.m. to 4:30  p.m. IST
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-gray-500 text-sm">Venue Address: </Text>
          <Text className="">
          BMH Srinivas, 2nd Floor, Door No. 1604, Trichy Road, Near ICICI Bank, Coimbatore – 641 018
          Tel: +91-422-4385606
          </Text>
        </View>

        <View className="mt-6" >
          <Text className="text-gray-500 text-sm">Description </Text>
          <Text className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </View>


        <View className="mt-6 border border-secondary p-5 rounded-lg" >
          <Text className="text-md font-semibold">
          Note : Please cross check that the above information are correct and click on Confirm button  
          </Text>
        </View>
        

        <View className="mt-8 flex-row justify-between gap-10">
          <TouchableOpacity className="border border-secondary flex-1 p-3 items-center rounded-lg">
            <Text>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-secondary flex-1  p-3 items-center rounded-lg"
            onPress={() => handleEdit('1')}
          >
            <Text className="text-white ">EDIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default productDetail;

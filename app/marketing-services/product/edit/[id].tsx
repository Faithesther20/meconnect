import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";
import { router } from "expo-router";
import images from "@/constants/images";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { TextInput } from "react-native";

const productEdit = () => {
  const { id } = useLocalSearchParams();

  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);

  // Function to handle date change
  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowPicker(false); // Hide the picker after selecting a date
  };

  return (
    <SafeAreaView className="p-5">
      <ScrollView>
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className=" flex-1  text-secondary font-bold text-2xl text-center">
            Edit Product
          </Text>
          {/* <TouchableOpacity className=""
          onPress={() => router.push} 
          >
            <Feather name="plus-square" size={24} color={secondaryColor} />
          </TouchableOpacity> */}
        </View>
        <View className="mt-4 ">
          <Text className="font-bold py-3">Images</Text>
          <View className="w-full h- rounded-lg border p-6">
            <Image
              source={images.aircondition}
              className="w-full h-[6.25rem] rounded-lg"
              resizeMode="contain"
            />
            <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded absolute right-3 top-3">
              <FontAwesome name="edit" size={20} color={secondaryColor} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text className="mt-2 font-bold text-lg">Product Name</Text>
          <TextInput
            placeholder="Enter Product Name"
            className="rounded-lg border bg-white p-3"
          />
        </View>

        <View>
          <Text className="mt-2 font-bold text-lg">Product Description</Text>
          <TextInput
              placeholder="Enter Product description"
              className="rounded-lg border bg-white p- h-[6rem]"
              multiline={true}  
              numberOfLines={4}  
              textAlignVertical="top"
             
            />
        </View>

        <View className="mt-8 flex-row justify-between gap-10">
          <TouchableOpacity className="border border-secondary flex-1 p-3 items-center rounded-lg">
            <Text>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-secondary flex-1  p-3 items-center rounded-lg"
            // onPress={() => setModalVisible(true)}
          >
            <Text className="text-white ">SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default productEdit;

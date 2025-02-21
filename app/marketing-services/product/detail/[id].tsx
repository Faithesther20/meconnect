import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign} from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";
import { router } from "expo-router";
import images from "@/constants/images";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { Platform } from "react-native";
// import { TextInput } from "react-native";

const productDetail = () => {
  // const { id } = useLocalSearchParams();

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
            Air Conditioning System
          </Text>
          {/* <TouchableOpacity className=""
          onPress={() => router.push} 
          >
            <Feather name="plus-square" size={24} color={secondaryColor} />
          </TouchableOpacity> */}
        </View>
        <View className="mt-2 ">
          <Text className="font-bold py-3">Images</Text>
          <View className="w-full  rounded-lg  ">
            <Image
              source={images.aircondition}
              className="w-full h-[200px] rounded-lg"
              resizeMode="contain"
            />
          </View>
        </View>
        <Text className="mt-3">
        Lorem ipsum dolor sit amet consectetur. Interdum euismod cursus leo quis ullamcorper enim pretium. Libero in sodales massa eget sit duis quisque vitae. Senectus pellentesque aliquam fusce vitae vitae libero orci. Vestibulum leo sollicitudin placerat eget varius id nisi aliquet gravida. Malesuada ipsum sagittis tincidunt vestibulum et velit tortor. In parturient tellus ipsum tincidunt mauris lectus tellus ultrices malesuada. Eget viverra laoreet facilisi placerat massa leo mattis. Faucibus ullamcorper aliquet tortor vestibulum. Iaculis tempus aliquam est quis sagittis fringilla.

        </Text>

        

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

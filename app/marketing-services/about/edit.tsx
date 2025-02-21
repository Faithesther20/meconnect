import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
// import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";
import { router } from "expo-router";
import images from "@/constants/images";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { Platform } from "react-native";
import { TextInput } from "react-native-paper";

const aboutEdit = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);

  // Function to handle date change
  // const onChange = (event: any, selectedDate?: Date) => {
  //   if (selectedDate) {
  //     setDate(selectedDate);
  //   }
  //   setShowPicker(false); // Hide the picker after selecting a date
  // };

  return (
    <SafeAreaView className="p-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className=" flex-1  text-secondary font-bold text-2xl text-center">
          Edit About Mitsubishi 
          </Text>
          {/* <TouchableOpacity className=""
          onPress={() => router.push} 
          >
            <Feather name="plus-square" size={24} color={secondaryColor} />
          </TouchableOpacity> */}
        </View>

        <View className="mt-4 ">
          <Text className="mt-2 font-bold text-lg">Company</Text>
          <View>
            <Text className="font-bold py-3">Images</Text>
            <View className="w-full rounded-lg">
              <Image
                source={images.company}
                className="w-full rounded-lg h-[6.25rem]"
                resizeMode="cover"
              />
              <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded absolute right-3 top-3">
                <FontAwesome name="edit" size={20} color={secondaryColor} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
          <Text className="mt-2 font-bold text-lg">Text</Text>
          <TextInput placeholder="Our Company " className="rounded-lg border bg-white"/>
          </View>
          <View>
          <Text className="mt-2 font-bold text-lg">Url</Text>
          <TextInput placeholder="https://mitsubishielectric.in/about-us " className="rounded-lg border bg-white"/>
          </View>
        </View>
        <View className="mt-6 ">
          <Text className="mt-2 font-bold text-lg">News</Text>
          <View>
            <Text className="font-bold py-3">Images</Text>
            <View className="w-full rounded-lg">
              <Image
                source={images.news}
                className="w-full rounded-lg h-[6.25rem]"
                resizeMode="cover"
              />
              <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded absolute right-3 top-3">
                <FontAwesome name="edit" size={20} color={secondaryColor} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
          <Text className="mt-2 font-bold text-lg">Text</Text>
          <TextInput placeholder="Our Company " className="rounded-lg border bg-white"/>
          </View>
          <View>
          <Text className="mt-2 font-bold text-lg">Url</Text>
          <TextInput placeholder="https://mitsubishielectric.in/about-us " className="rounded-lg border bg-white"/>
          </View>
        </View>
        <View className="mt-6 ">
          <Text className="mt-2 font-bold text-lg">Location</Text>
          <View>
            <Text className="font-bold py-3">Images</Text>
            <View className="w-full rounded-lg">
              <Image
                source={images.location}
                className="w-full rounded-lg h-[6.25rem]"
                resizeMode="cover"
              />
              <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded absolute right-3 top-3">
                <FontAwesome name="edit" size={20} color={secondaryColor} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
          <Text className="mt-2 font-bold text-lg">Text</Text>
          <TextInput placeholder="Our Company " className="rounded-lg border bg-white"/>
          </View>
          <View>
          <Text className="mt-2 font-bold text-lg">Url</Text>
          <TextInput placeholder="https://mitsubishielectric.in/about-us " className="rounded-lg border bg-white"/>
          </View>
        </View>

        <View className="mt-6 ">
          <Text className="mt-2 font-bold text-lg">Location</Text>

          <View>
          <Text className="mt-2 font-bold text-lg">Text</Text>
          <TextInput placeholder="Our Company " className="rounded-lg border bg-white"/>
          </View>
          <View>
          <Text className="mt-2 font-bold text-lg">Url</Text>
          <TextInput placeholder="https://mitsubishielectric.in/about-us " className="rounded-lg border bg-white"/>
          </View>
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

export default aboutEdit;

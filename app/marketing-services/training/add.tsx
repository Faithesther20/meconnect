import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import React, { useState } from "react";
  // import { useLocalSearchParams } from "expo-router";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
  import { secondaryColor } from "@/constants/Colors";
  import { router } from "expo-router";
  // import images from "@/constants/images";
  import DateTimePicker from "@react-native-community/datetimepicker";
  // import DateTimePicker from "react-native-modal-datetime-picker";
  import { Platform } from "react-native";
  
  const trainingAdd = () => {
    // Function to handle date change
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
              Add Training
            </Text>
            {/* <TouchableOpacity className=""
            onPress={() => router.push} 
            >
              <Feather name="plus-square" size={24} color={secondaryColor} />
            </TouchableOpacity> */}
          </View>

          <View>
          <Text className="mt-4 font-bold text-lg">Title</Text>
          <TextInput placeholder="Select/Enter Title" className="rounded-lg border bg-primary p-3"/>
          </View>
          <View className="mt-3 ">

            <Text className="font-bold py-3">Image/Icon</Text>
            <View className="w-full rounded-lg border border-black h-[150px] flex justify-center items-center">
              <TouchableOpacity className="flex-row gap-2 bg-black p-3 w-[50%] rounded-lg justify-center">
                  <Text className="text-white text-lg font-bold">Upload Image </Text>
                  <MaterialIcons name="cloud-upload" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-4">
            <Text className="font-bold py-3">Date</Text>
  
            {/* Date Input Field */}
            <TouchableOpacity
              className="w-full flex-row items-center justify-between border border-black rounded-lg p-4"
              onPress={() => setShowPicker(true)}>
              <Text className="text-gray-700">{date.toLocaleDateString()}</Text>
              <Feather name="calendar" size={20} color="gray" />
            </TouchableOpacity>
  
            {/* Date Picker (Only Shows on Button Click) */}
            {showPicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={onChange}
              />
            )}
          </View>
          <View>
          <Text className="mt-4 font-bold text-lg">Time</Text>
          <TextInput placeholder="Select Time " className="rounded-lg border bg-prmary  p-3"/>
          </View>
          <View>

          <Text className="mt-4 font-bold text-lg">Venue</Text>
          <TextInput placeholder="Select City" className="rounded-lg border bg-prmary  p-3"/>
          </View>

          <View>
          <Text className="mt-2 font-bold text-lg">Description</Text>
          <TextInput
            placeholder="Describe"
            className="rounded-lg border bg-white p- h-[100px]  p-3"
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <View>

          <Text className="mt-4 font-bold text-lg">Note</Text>
          <TextInput placeholder="Enter note" className="rounded-lg border bg-prmary  p-3"/>
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
  
  export default trainingAdd;
  
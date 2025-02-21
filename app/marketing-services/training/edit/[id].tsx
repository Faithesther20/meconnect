import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    Modal
  } from "react-native";
  import React, { useState } from "react";
  // import { useLocalSearchParams } from "expo-router";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
  import { secondaryColor } from "@/constants/Colors";
  import { router } from "expo-router";
  import images from "@/constants/images";
  import DateTimePicker from "@react-native-community/datetimepicker";
  // import DateTimePicker from "react-native-modal-datetime-picker";
  import { Platform } from "react-native";
  
  const trainingAdd = () => {
    // Function to handle date change
    const [date, setDate] = useState<Date>(new Date());
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  
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
             Edit Training
            </Text>
            {/* <TouchableOpacity className=""
            onPress={() => router.push} 
            >
              <Feather name="plus-square" size={24} color={secondaryColor} />
            </TouchableOpacity> */}
          </View>

          <View className="mt-3 ">
            <Text className="text-gray-500 text-sm font-bold">Title </Text>
            <Text className="text-lg font-bold">Product & Operation training</Text>
         </View>
          <View className="mt-3 ">
            <Text className="text-gray-500 text-sm font-bold">Venue Address</Text>
            <Text className="text-lg font-bold">Coimbatore</Text>
         </View>
         <View className="mt-2 ">
          <Text className="font-bold py-3">Images</Text>
          <View className="w-full h rounded-lg">
            <Image
              source={images.worker}
              className="w-full h-[7rem] rounded-lg"
              resizeMode="cover"
            />
             <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded absolute right-3 top-3"
             >
              <FontAwesome name="edit" size={20} color={secondaryColor} />
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
            <TextInput placeholder="9:30 AM - 4:30 ON " className="rounded-lg border bg-prmary  p-3"/>
          </View>
          <View className="mt-4">
            <Text className="font-bold py-3">Last date to reg.</Text>
  
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
            <Text className="mt-4 font-bold text-lg">Total seats</Text>
            <TextInput placeholder="10" className="rounded-lg border bg-prmary  p-3"/>
          </View>

          <View>
            <Text className="mt-2 font-bold text-lg">Description</Text>
            <TextInput
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                className="rounded-lg border bg-white p- h-[100px]"
                multiline={true}
                numberOfLines={5}
                textAlignVertical="top"
            />
        </View>

           <View>
            <Text className="mt-4 font-bold text-lg">Note</Text>
            <TextInput placeholder="There are 10 seats(limited) in each program....." className="rounded-lg border bg-prmary  p-3"/>
          </View>

          <View className="mt-8 flex-row justify-between gap-10">
            <TouchableOpacity className="border border-secondary flex-1 p-3 items-center rounded-lg">
              <Text>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-secondary flex-1  p-3 items-center rounded-lg"
              onPress={() => setModalVisible(true)}
            >
              <Text className="text-white ">UPDATE</Text>
            </TouchableOpacity>

            {/* Confirmation Modal */}
         <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                >
                <View className="flex-1 justify-center items-center bg-black/50">
                    <View className="bg-white p-5 pt-12 rounded-lg w-80 items-center">
                    <TouchableOpacity 
                className="absolute top-3 right-3 pb-5" 
                onPress={() => setModalVisible(false)}
            >
            
            <Feather name="x-square" size={24} color={secondaryColor} />
            </TouchableOpacity>
                    <Text className="text-lg  text-center">Your update has been
              saved successfully </Text>
              <Text className="mt-1text-gray-600 text-center">Do you want to notify all {'\n'} registerants? </Text>
              
              <View className="flex-row justify-center gap-2">
              <TouchableOpacity 
                className="mt-4 border border-red-500 px-4 py-2 rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-secondary">CLOSE</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className="mt-4 bg-red-500 px-4 py-2 rounded-lg"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white">NOTIFY</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default trainingAdd;
  
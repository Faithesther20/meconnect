import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";
import { router } from "expo-router";
import images from "@/constants/images";

const AllProducts = () => {
  const { id } = useLocalSearchParams();
  
  const handleDelete = (id: string) => {
    console.log(`Delete product with id: ${id}`);
    // router.push({ pathname: "/marketing-services/promotion/edit/[id]", params: { id } });
  };

  const handleEdit = (id: string) => {
    console.log(`Edit product with id: ${id}`);
    router.push({ pathname: "/marketing-services/product/edit/[id]", params: { id } });
  };
  return (
    <SafeAreaView className="p-5" >
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className=" text-secondary font-bold text-2xl">Products</Text>
          <TouchableOpacity className="" onPress={() => router.push({ pathname: "/marketing-services/product/add" })}>
            <Feather name="plus-square" size={24} color={secondaryColor} />
          </TouchableOpacity>
        </View>
       
        <View className="w-full mt-4 rounded-lg  border border-black h-[150px] flex justify-center items-center">
          <Image
            source={images.aircondition}
            className=" rounded-lg"
            resizeMode="cover"
          />
          <View className="flex-row justify-between px-4 py-3 absolute top-2 w-full">
            {/* Delete Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() => handleDelete('1')}>
              <AntDesign name="delete" size={20} color={secondaryColor} />
            </TouchableOpacity>

            {/* Edit Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() =>handleEdit('1')}>
              <FontAwesome name="edit" size={20} color={secondaryColor} />
            </TouchableOpacity>
          </View>
          <Text className="font-bold  p-2">Air Conditioning system</Text>
        </View>
        <View className="w-full mt-4 rounded-lg  border border-black h-[150px] flex justify-center items-center">
          <Image
            source={images.aircondition}
            className=" rounded-lg"
            resizeMode="cover"
          />
          <View className="flex-row justify-between px-4 py-3 absolute top-2 w-full">
            {/* Delete Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() => handleDelete('1')}>
              <AntDesign name="delete" size={20} color={secondaryColor} />
            </TouchableOpacity>

            {/* Edit Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() =>handleEdit('1')}>
              <FontAwesome name="edit" size={20} color={secondaryColor} />
            </TouchableOpacity>
          </View>
          <Text className="font-bold  p-2">Air Conditioning system</Text>
        </View>
        <View className="w-full mt-4 rounded-lg  border border-black h-[150px] flex justify-center items-center">
          <Image
            source={images.aircondition}
            className=" rounded-lg"
            resizeMode="cover"
          />
          <View className="flex-row justify-between px-4 py-3 absolute top-2 w-full">
            {/* Delete Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() => handleDelete('1')}>
              <AntDesign name="delete" size={20} color={secondaryColor} />
            </TouchableOpacity>

            {/* Edit Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() =>handleEdit('1')}>
              <FontAwesome name="edit" size={20} color={secondaryColor} />
            </TouchableOpacity>
          </View>
          <Text className="font-bold  p-2">Air Conditioning system</Text>
        </View>
       
      
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllProducts;

import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";
import { router } from "expo-router";
import images from "@/constants/images";

const AllPromotions = () => {
  const { id } = useLocalSearchParams();
  
  const handleDelete = (id: string) => {
    console.log(`Delete product with id: ${id}`);
    // router.push({ pathname: "/marketing-services/promotion/edit/[id]", params: { id } });
  };

  const handleEdit = (id: string) => {
    console.log(`Edit product with id: ${id}`);
    router.push({ pathname: "/marketing-services/promotion/edit/[id]", params: { id } });
  };
  return (
    <SafeAreaView className="p-5" >
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className="flex-row justify-between mt-5">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <AntDesign name="leftsquareo" size={24} color={secondaryColor} />
          </TouchableOpacity>
          <Text className=" text-secondary font-bold text-2xl">Promotions</Text>
          <TouchableOpacity className="" onPress={() => router.push({ pathname: "/marketing-services/promotion/add" })}>
            <Feather name="plus-square" size={24} color={secondaryColor} />
          </TouchableOpacity>
        </View>
       
        <View className="w-full mt-4 rounded-lg">
          <Image
            source={images.promotion_banner}
            className="w-full rounded-lg"
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
          <Text className="font-bold text-gray-500  p-2">Expiry Date: 24-01-2025</Text>
        </View>
       
        <View className="w-full mt-4 rounded-lg">
          <Image
            source={images.promotion_banner}
            className="w-full rounded-lg"
            resizeMode="cover"
          />
          <View className="flex-row justify-between px-4 py-3 absolute top-2 w-full">
            {/* Delete Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() => handleDelete('2')}>
              <AntDesign name="delete" size={20} color={secondaryColor} />
            </TouchableOpacity>

            {/* Edit Button */}
            <TouchableOpacity
              className="bg-gray-50 px-2 py-1 rounded"
              onPress={() =>handleEdit('2')}>
              <FontAwesome name="edit" size={20} color={secondaryColor} />
            </TouchableOpacity>
          </View>
          <Text className="font-bold text-gray-500  p-2">Expiry Date: 24-01-2025</Text>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllPromotions;

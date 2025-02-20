import { View, FlatList, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import PromotionCard from "./PromotionCard";
import { useRouter } from "expo-router";
import { Promotion } from "@/types";
import images from "@/constants/images";

type PromotionListProps = {
  promotions: Promotion[];
};

const PromotionList: React.FC<PromotionListProps> = ({ promotions }) => {
  const router = useRouter();
  const flatListRef = useRef<FlatList<Promotion>>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / event.nativeEvent.layoutMeasurement.width);
    setCurrentIndex(index);
  };

  const handleEdit = (id: string) => {
   
    router.push({ pathname: "/marketing-services/promotion/edit/[id]", params: { id } }); // ✅ Fixed path
  };

  const handleDelete = (id: string) => {
    console.log(`Delete banner with ID: ${id}`);
  };

  return (
    <View>
      {/* Section Header */}
      {/* <View className="mt-5 flex-row justify-between items-center">
        <View className="flex-row gap-2">
          <View className="bg-secondary w-2 rounded" />
          <Text className="font-bold text-lg">Promotions</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-lg text-secondary">View All</Text>
        </TouchableOpacity>
      </View> */}

      {/* Banner List */}
      <View className="mt-2 ">
        <FlatList
          ref={flatListRef}
          data={promotions}
          horizontal
          pagingEnabled
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
           
            return (
              <PromotionCard
                id={item.id}
                imageKey={item.imageKey as keyof typeof images} 
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            );
          }}
          
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />

        {/* Indicator */}
        <View className="flex-row justify-center mt-2">
          {promotions.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? "bg-secondary" : "bg-gray-300"
              }`}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default PromotionList;

import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";
import { Promotion } from "@/types";
import images from "@/constants/images";

type PromotionCardProps = {
  id:string;
  imageKey: keyof typeof images;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const PromotionCard: React.FC<PromotionCardProps> = ({id, imageKey, onEdit, onDelete }) => {
  return (
    <View className="rounded-lg relative  flex-1" >
      <Image   source={images[imageKey]}  className="rounded-lg " />

      {/* Overlay Container */}
      <View className="flex-row justify-between px-4 py-3 absolute top-2 w-full">
        {/* Delete Button */}
        <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded" onPress={() => onDelete(id)}>
          <AntDesign name="delete" size={20} color={secondaryColor} />
        </TouchableOpacity>

        {/* Edit Button */}
        <TouchableOpacity className="bg-gray-50 px-2 py-1 rounded" onPress={() => onEdit(id)}>
          <FontAwesome name="edit" size={20} color={secondaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PromotionCard;

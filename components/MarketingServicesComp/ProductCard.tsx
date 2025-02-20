import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { secondaryColor } from "@/constants/Colors";

type ProductCardProps = {
  id: string;
  name: string;
  image: any;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onProductClick: (id: string) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, onDelete, onEdit, onProductClick }) => {
  return (
    <View
      className="w-[12rem] bg-white rounded-lg px-2 py-3"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // Required for Android shadows
      }}>
      <View className="bg-white rounded-lg flex-col justify-between items-center p-2">
        <View className="flex-row justify-between px-1 py-2 w-full">
          {/* Delete Button */}
          <TouchableOpacity className="bg-gray-200 p-2 rounded" onPress={() => onDelete(id)}>
            <AntDesign name="delete" size={20} color={secondaryColor} />
          </TouchableOpacity>

          {/* Edit Button */}
          <TouchableOpacity className="bg-gray-200 p-2 rounded" onPress={() => onEdit(id)}>
            <FontAwesome name="edit" size={20} color={secondaryColor} />
          </TouchableOpacity>
        </View>

      <TouchableOpacity onPress={() => onProductClick(id)}>
      <Image source={image}  />
      <Text className="font-bold">{name}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

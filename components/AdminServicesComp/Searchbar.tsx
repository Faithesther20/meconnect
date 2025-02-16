import React from "react";
import { TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const Searchbar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View className="mb-3">
      <TextInput
        placeholder="Search SR/Company"
        className="border border-gray-300 p-2 rounded-md"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

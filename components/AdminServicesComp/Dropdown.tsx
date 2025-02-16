import React from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface DropdownProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onValueChange,
  items,
}) => {
  return (
    <View className="rounded-md w-full">
      <RNPickerSelect
        value={selectedValue}
        onValueChange={onValueChange}
        items={items}
        style={{
          inputAndroid: {
            color: "black",
            paddingHorizontal: 10,
            fontSize: 14,
          },
          inputIOS: {
            color: "black",
            paddingHorizontal: 10,
            fontSize: 14,
          },
        }}
      />
    </View>
  );
};

import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading
}) => {
   return (
      <TouchableOpacity
        className={`bg-secondary rounded-xl min-h-[64px] justify-center items-center ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
      >
        <Text className={` text-primary font-semibold text-lg ${textStyles}`}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  export default CustomButton;
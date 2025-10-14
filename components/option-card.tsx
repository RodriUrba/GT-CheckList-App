import { JSX } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";


type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
};

export default function OptionCard({icon, title, description, link} : Props) {
  return (
    <View className='bg-white rounded-lg shadow-md p-4 mb-4 w-4/5'>
      <View className='flex-row items-center mb-2'>
        {icon}
        <Text className='text-lg font-bold'>{title}</Text>
      </View>
      <Text className='text-gray-600'>{description}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(link)} className='mt-2'>
        <Text className='text-blue-500'>Learn more</Text>
      </TouchableOpacity>
    </View>
  );
}

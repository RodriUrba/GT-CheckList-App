import { Text, View } from "react-native";

import OptionCard from "@/components/option-card";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';

const options = [{
  icon: <Octicons name="checklist" size={24} color="black" />,
  title: 'Check Lists',
}, {
  icon: <MaterialIcons name="home-repair-service" size={24} color="black" />,
  title: 'Mantenimiento Preventivo',
},
{
  icon: <MaterialIcons name="home-repair-service" size={24} color="black" />,
  title: 'Mantenimiento Correctivo',
},
{
  icon: <Feather name="file-text" size={24} color="black" />,
  title: 'Ficha Técnica',
}];

export default function HomeScreen() {
  return (
      <View className='flex-1'>
        <View className='items-center justify-center mb-6'>
          <Text className='text-2xl font-bold text-primary'>¿Qué necesita hacer?</Text>
        </View>
        <View className='flex-1 items-center justify-center'>
          {options.map((option, index) => (
            <OptionCard key={index} icon={option.icon} title={option.title} description="" link="#" />
          ))}
        </View>
      </View>
  );
}

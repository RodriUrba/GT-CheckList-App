import { Image } from 'expo-image';
import { ActivityIndicator, Text, View } from 'react-native';

export function AuthLoadingScreen() {
  return (
    <View className="flex-1 bg-gray-100 items-center justify-center">
      <View className="items-center">
        <Image
          style={{ width: 283, height: 100, marginBottom: 32 }}
          source={require('../assets/logo/image.png')}
          contentFit="contain"
        />
        <ActivityIndicator size="large" color="#06B6D4" />
        <Text className="text-gray-600 mt-4">Cargando...</Text>
      </View>
    </View>
  );
}

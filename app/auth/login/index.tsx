import { Image } from 'expo-image';
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-6 py-4">
                {/* Header */}
                <View className="items-center justify-center mb-6">
                    <Text className="text-primary text-3xl font-bold">Bienvenido a</Text>
                </View>

                {/* Imagen */}
                <View className="flex-1 justify-center items-center mb-6">
                    <Image
                        className="w-full h-48 rounded-lg border-2 border-primary"
                        source="https://picsum.photos/seed/696/3000/2000"
                        contentFit="cover"
                        transition={1000}
                    />
                </View>

                {/* Formulario */}
                <View className="flex-1 justify-center">
                    <TextInput
                        className="border-2 border-gray-300 rounded-lg p-4 mb-4 text-base bg-white"
                        placeholder="Usuario"
                        placeholderTextColor="#9CA3AF"
                    />
                    <TextInput
                        className="border-2 border-gray-300 rounded-lg p-4 mb-2 text-base bg-white"
                        placeholder="Contraseña"
                        secureTextEntry
                        placeholderTextColor="#9CA3AF"
                    />
                    <Text className="text-primary text-right mb-6 text-sm">¿Olvidaste tu contraseña?</Text>

                    <View className="bg-primary rounded-lg p-4 mb-4 items-center">
                        <Text className="text-white text-lg font-bold">Iniciar Sesión</Text>
                    </View>

                    <View className="bg-secondary border-primary border-2 rounded-lg p-4 items-center">
                        <Text className="text-text text-lg font-bold">Registrar</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
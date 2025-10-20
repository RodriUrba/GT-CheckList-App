import { useAuth } from '@/contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen() {
    const router = useRouter();
    const { register, isLoading, error, clearError } = useAuth();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async () => {
        // Clear previous errors
        clearError();

        // Validation
        if (!email.trim() || !username.trim() || !password.trim()) {
            Alert.alert('Error', 'Por favor, completa todos los campos');
            return;
        }

        try {
            await register({
                email: email.trim(),
                username: username.trim(),
                password: password,
            });
            // Navigation is handled automatically by AuthContext
        } catch (err) {
            // Error is already set in context
            Alert.alert(
                'Error de inicio de sesión',
                error || 'No se pudo iniciar sesión. Verifica tus credenciales.',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <SafeAreaView>
            <View>
                {/* Header */}
                <View>
                    <Text>Bienvenido a</Text>
                </View>

                {/* Logo */}
                <View>
                    <Image
                        style={{ width: 283, height: 100, paddingLeft:19, paddingRight:19 }}
                        source={require('../../../assets/logo/image.png')}
                        contentFit="contain"
                        transition={1000}
                    />
                </View>

                {/* Formulario */}
                <View>
                    {/* Input Correo electrónico */}
                    <View>
                        <Ionicons
                            name="mail-outline"
                            size={16}
                            color="#565D6D" 
                            style={{ position: 'absolute', left: 12, top: 18, zIndex: 10 }} 
                        />
                        <TextInput
                            style={{
                                height: 52,
                                paddingLeft: 34,
                                paddingRight: 12,
                                fontSize: 16,
                                lineHeight: 26,
                                fontWeight: '400',
                                backgroundColor: '#FFFFFF',
                                borderRadius: 10,
                                borderWidth: 0,
                                color: '#565D6D'
                            }}
                            placeholder="Correo electrónico"
                            placeholderTextColor="#9CA3AF"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            editable={!isLoading}
                        />
                    </View>

                    {/* Input Nombre de usuario */}
                    <View>
                        <Ionicons 
                            name="mail-outline" 
                            size={16} 
                            color="#565D6D" 
                            style={{ position: 'absolute', left: 12, top: 18, zIndex: 10 }} 
                        />
                        <TextInput
                            style={{
                                height: 52,
                                paddingLeft: 34,
                                paddingRight: 12,
                                fontSize: 16,
                                lineHeight: 26,
                                fontWeight: '400',
                                backgroundColor: '#FFFFFF',
                                borderRadius: 10,
                                borderWidth: 0,
                                color: '#565D6D'
                            }}
                            placeholder="Correo nombre de usuario"
                            placeholderTextColor="#9CA3AF"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={username}
                            onChangeText={setUsername}
                            editable={!isLoading}
                        />
                    </View>

                    {/* Input Contraseña */}
                    <View>
                        <Ionicons
                            name="lock-closed-outline"
                            size={16}
                            color="#565D6D"
                            style={{ position: 'absolute', left: 12, top: 18, zIndex: 10 }}
                        />
                        <TextInput
                            style={{
                                height: 52,
                                paddingLeft: 34,
                                paddingRight: 44,
                                fontSize: 16,
                                lineHeight: 26,
                                fontWeight: '400',
                                backgroundColor: '#FFFFFF',
                                borderRadius: 10,
                                borderWidth: 0,
                                color: '#565D6D'
                            }}
                            placeholder="Contraseña"
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#9CA3AF"
                            autoCapitalize="none"
                            value={password}
                            onChangeText={setPassword}
                            editable={!isLoading}
                        />
                        <TouchableOpacity
                            style={{ position: 'absolute', right: 12, top: 18, zIndex: 10 }}
                            onPress={() => setShowPassword(!showPassword)}
                            disabled={isLoading}
                        >
                            <Ionicons 
                                name={showPassword ? "eye-off-outline" : "eye-outline"} 
                                size={20} 
                                color="#565D6D" 
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Olvidaste tu contraseña */}
                    <TouchableOpacity 
                        style={{ marginBottom: 116 }}
                        disabled={isLoading}
                    >
                        <Text>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={handleRegister}
                        disabled={isLoading}
                        style={{ opacity: isLoading ? 0.6 : 1 }}
                    >
                        {isLoading ? (
                            <ActivityIndicator color="#FFFFFF" />
                        ) : (
                            <Text>Crear cuenta</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity 
                        disabled={isLoading}
                        style={{ opacity: isLoading ? 0.6 : 1 }}
                    >
                        <Text>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
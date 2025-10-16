import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface MaintenanceCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    onPress?: () => void;
}

export default function MaintenanceCard({ icon, title, onPress }: MaintenanceCardProps) {
    return (
        <TouchableOpacity
            style={{
                height: 60,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                marginBottom: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                shadowColor: '#171a1f',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.08,
                shadowRadius: 2,
                elevation: 2,
            }}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View className="flex-row items-center flex-1">
                <View className="w-10 h-10 items-center justify-center mr-4">
                    <Ionicons name={icon} size={24} color="#06B6D4" />
                </View>
                <Text className="text-base font-normal text-gray-900 flex-1">
                    {title}
                </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
    );
}

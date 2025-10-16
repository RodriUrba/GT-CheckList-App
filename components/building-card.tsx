import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface BuildingCardProps {
    initial: string;
    name: string;
    onPress?: () => void;
}

export default function BuildingCard({ initial, name, onPress }: BuildingCardProps) {
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
                {/* Avatar circular con inicial */}
                <View 
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: '#06B6D4',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 16
                    }}
                >
                    <Text className="text-white text-lg font-semibold">
                        {initial}
                    </Text>
                </View>
                <Text className="text-base font-normal text-gray-900 flex-1">
                    {name}
                </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </TouchableOpacity>
    );
}

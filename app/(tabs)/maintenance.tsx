import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaintenanceCard from '../../components/maintenance-card';

export default function MaintenanceScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        {/* Container Header - 147px de altura con fondo blanco */}
        <View style={{ backgroundColor: '#FFFFFF', height: 147, paddingHorizontal: 24 }}>
          {/* Logo - posición top: 6px, left: 4px (relativo al padding) */}
          <View style={{ marginTop: 6, marginLeft: 4 }}>
            <Image
              style={{ width: 93, height: 27 }}
              source={require('../../assets/logo/image.png')}
              contentFit="contain"
            />
          </View>

          {/* Título Mantenimiento */}
          <View className="items-center" style={{ marginTop: 10 }}>
            <Text className="text-xl font-semibold text-gray-900">Mantenimiento</Text>
          </View>

          {/* Barra de búsqueda - top: 88px desde el container */}
          <View style={{ position: 'absolute', top: 88, left: 24, right: 24 }}>
            <View className="relative">
              <Ionicons 
                name="search-outline" 
                size={16} 
                color="#BDC1CA" 
                style={{ position: 'absolute', left: 12, top: 13, zIndex: 10 }} 
              />
              <TextInput
                style={{
                  height: 42,
                  paddingLeft: 34,
                  paddingRight: 12,
                  fontSize: 16,
                  lineHeight: 26,
                  fontWeight: '400',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: '#3892B0',
                  color: '#BDC1CA'
                }}
                placeholder="Buscar equipos"
                placeholderTextColor="#BDC1CA"
              />
            </View>
          </View>
        </View>

        {/* Lista de opciones - margen top: 16px, padding horizontal: 24px */}
        <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 24 }}>
          <MaintenanceCard
            icon="construct-outline"
            title="Pozo a tierra"
            onPress={() => console.log('Pozo a tierra')}
          />
          <MaintenanceCard
            icon="home-outline"
            title="Luces de emergencia"
            onPress={() => console.log('Luces de emergencia')}
          />
          <MaintenanceCard
            icon="clipboard-outline"
            title="Ascensores"
            onPress={() => console.log('Ascensores')}
          />
          <MaintenanceCard
            icon="stats-chart-outline"
            title="Tableros electricos"
            onPress={() => console.log('Tableros electricos')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

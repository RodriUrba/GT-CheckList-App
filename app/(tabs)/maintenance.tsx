import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultHeader from '../../components/default-header';
import MaintenanceCard from '../../components/maintenance-card';

export default function MaintenanceScreen() {
  const router = useRouter();

  const handleOptionPress = (type: string, title: string) => {
    console.log('Selected maintenance type:', title);
    router.push({
      pathname: '/maintenance/select-building',
      params: { type: title }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1">
        {/* Header */}
        <DefaultHeader
          title="Mantenimiento"
          searchPlaceholder="Buscar equipos"
        />

        {/* Lista de opciones - margen top: 16px, padding horizontal: 24px */}
        <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 24 }}>
          <MaintenanceCard
            icon="construct-outline"
            title="Pozo a tierra"
            onPress={() => handleOptionPress('pozo-tierra', 'Pozo a tierra')}
          />
          <MaintenanceCard
            icon="home-outline"
            title="Luces de emergencia"
            onPress={() => handleOptionPress('luces-emergencia', 'Luces de emergencia')}
          />
          <MaintenanceCard
            icon="clipboard-outline"
            title="Ascensores"
            onPress={() => handleOptionPress('ascensores', 'Ascensores')}
          />
          <MaintenanceCard
            icon="stats-chart-outline"
            title="Tableros electricos"
            onPress={() => handleOptionPress('tableros-electricos', 'Tableros electricos')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

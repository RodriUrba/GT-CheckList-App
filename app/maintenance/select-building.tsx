import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BuildingCard from '../../components/building-card';
import DefaultHeader from '../../components/default-header';

export default function SelectBuildingScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const maintenanceType = params.type as string;

    const buildings = [
        { id: '1', initial: 'C', name: 'Centro Empresarial Leuro' },
        { id: '2', initial: 'E', name: 'Edificio Larco' },
        { id: '3', initial: 'E', name: 'Edificio Aliaga 360' },
        { id: '4', initial: 'T', name: 'Torre América' },
    ];

    const handleBuildingSelect = (building: { id: string; initial: string; name: string }) => {
        // Navegar a la pantalla de resumen con ambas selecciones
        console.log('Selected:', maintenanceType, building.name);
        // TODO: Navegar a pantalla de resumen cuando esté lista
        // router.push({
        //     pathname: '/maintenance/summary',
        //     params: {
        //         type: maintenanceType,
        //         building: building.name,
        //         buildingId: building.id
        //     }
        // });
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView className="flex-1">
                {/* Header */}
                <DefaultHeader
                    title="¿En que inmueble se encuentra?"
                    searchPlaceholder="Buscar inmuebles"
                />

                {/* Lista de inmuebles */}
                <View style={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 24 }}>
                    {buildings.map((building) => (
                        <BuildingCard
                            key={building.id}
                            initial={building.initial}
                            name={building.name}
                            onPress={() => handleBuildingSelect(building)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

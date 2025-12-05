
import { useRouter } from 'expo-router';
import { ScrollView, View, StyleSheet, Text, Switch, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import DefaultHeader from '@/components/default-header';

// --- State and Data Types ---

type Equipment = {
  id: 'contactores' | 'relays' | 'ventiladores' | 'termostato';
  name: string;
  icon: React.ReactNode;
  hasDetails: boolean;
};

type EquipmentState = {
  [key in Equipment['id']]: {
    enabled: boolean;
    quantity: number;
    items: string[];
  };
};

const EQUIPMENT_DATA: Equipment[] = [
  { id: 'contactores', name: 'Contactores', icon: <MaterialCommunityIcons name="electric-switch" size={24} color="#0891B2" />, hasDetails: true },
  { id: 'relays', name: 'Relays', icon: <MaterialCommunityIcons name="toggle-switch-off-outline" size={24} color="#0891B2" />, hasDetails: false },
  { id: 'ventiladores', name: 'Ventiladores', icon: <MaterialCommunityIcons name="fan" size={24} color="#0891B2" />, hasDetails: true },
  { id: 'termostato', name: 'Termostato', icon: <MaterialCommunityIcons name="thermometer" size={24} color="#0891B2" />, hasDetails: false },
];


export default function ExtraEquipmentScreen() {
  const [equipmentState, setEquipmentState] = useState<EquipmentState>({
    contactores: { enabled: true, quantity: 2, items: ['Motor', 'Auxiliar contac'] },
    relays: { enabled: false, quantity: 1, items: [''] },
    ventiladores: { enabled: true, quantity: 1, items: ['Cabina'] },
    termostato: { enabled: false, quantity: 1, items: [''] },
  });

  const toggleSwitch = (id: Equipment['id']) => {
    setEquipmentState(prev => ({
      ...prev,
      [id]: { ...prev[id], enabled: !prev[id].enabled },
    }));
  };

  const handleQuantityChange = (id: Equipment['id'], quantity: number) => {
    setEquipmentState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity,
        // Adjust the items array to match the new quantity
        items: Array.from({ length: quantity }, (_, i) => prev[id].items[i] || ''),
      },
    }));
  };

  const handleItemTextChange = (id: Equipment['id'], index: number, text: string) => {
    setEquipmentState(prev => {
      const newItems = [...prev[id].items];
      newItems[index] = text;
      return {
        ...prev,
        [id]: { ...prev[id], items: newItems },
      };
    });
  };

  const renderEquipmentCard = (equipment: Equipment) => {
    const state = equipmentState[equipment.id];
    const isExpanded = state.enabled && equipment.hasDetails;

    return (
      <View key={equipment.id} style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleContainer}>
            {equipment.icon}
            <Text style={styles.cardTitle}>{equipment.name}</Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={state.enabled ? '#0891B2' : '#f4f3f4'}
            onValueChange={() => toggleSwitch(equipment.id)}
            value={state.enabled}
          />
        </View>

        {isExpanded && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsLabel}>Seleccione la cantidad</Text>
            {/* A simple quantity selector for demonstration */}
            <View style={styles.quantitySelector}>
              {[1, 2, 3, 4].map(q => (
                <TouchableOpacity
                  key={q}
                  style={[
                    styles.quantityButton,
                    state.quantity === q && styles.quantityButtonSelected,
                  ]}
                  onPress={() => handleQuantityChange(equipment.id, q)}
                >
                  <Text style={[
                    styles.quantityText,
                    state.quantity === q && styles.quantityTextSelected
                  ]}>{q}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {state.items.map((item, index) => (
              <View key={index} style={styles.inputContainer}>
                 <Text style={styles.inputLabel}>{`${equipment.id.substring(0,2).toUpperCase()}-${index + 1}`}</Text>
                 <TextInput
                    style={styles.textInput}
                    value={item}
                    onChangeText={(text) => handleItemTextChange(equipment.id, index, text)}
                    placeholder={`Descripción ${index + 1}`}
                 />
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultHeader title="Equipamientos extras" searchPlaceholder="" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {EQUIPMENT_DATA.map(renderEquipmentCard)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 12,
  },
  detailsContainer: {
    marginTop: 16,
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    paddingTop: 16,
  },
  detailsLabel: {
    fontSize: 14,
    color: '#0891B2',
    marginBottom: 8,
  },
  quantitySelector: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  quantityButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 8,
  },
  quantityButtonSelected: {
    backgroundColor: '#0891B2',
    borderColor: '#0891B2',
  },
  quantityText: {
    color: '#1F2937',
  },
  quantityTextSelected: {
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginRight: 8,
    minWidth: 50,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
});

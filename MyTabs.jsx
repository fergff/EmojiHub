import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, Button, Text, StyleSheet, FlatList ,Image,TouchableOpacity} from 'react-native';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator style={styles.fondo}
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarStyle: { // Aquí se especifica el estilo de la barra de navegación
                    backgroundColor: "#ffc83d",
                }
            }}  
        >
            <Tab.Screen name="Buscar" component={HomeScreen} 
                options={{
                    tarBarLabel: 'My Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="search" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="Ajustes" component={SettingsScreen}
                options={{
                    tarBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" size={size} color={color} />
                    ),
                    headerShown: false
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({


  });

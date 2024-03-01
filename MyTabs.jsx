import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, Button, Text, StyleSheet, FlatList ,Image,TouchableOpacity} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarPosition="bottom" // Esto coloca las pestañas en la parte inferior
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: "#ffc83d",
                    padding: 0, // Reduce el padding vertical para que el menú ocupe menos espacio
                    height: 65, 
                },
                swipeEnabled: true,
                tabBarIndicatorStyle: { // Oculta el indicador de la pestaña
                    backgroundColor: 'white',
                },
            }}
        >
            <Tab.Screen
                name="Buscar"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'My Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" color={color} size={24} />
                    ),
                    tabBarShowIcon: true,
                }}
            />
            <Tab.Screen
                name="Ajustes"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Feather name="settings" color={color} size={24} />
                    ),
                    tabBarShowIcon: true,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({


  });

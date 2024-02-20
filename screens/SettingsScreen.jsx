import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image ,Text} from 'react-native';
import CurrencyComboBox from '../components/CurrencyComboBoxSettings';
import { Feather } from '@expo/vector-icons';

colores=["rojo","negro","blanco","verde"];

export default function SettingsScreen() {
    const [selectedCurrency, setSelectedCurrency] = useState('negro');
    const [fromCurrency, setFromCurrency] = useState('');
    const handleSelectCurrency = (currency) => {
        setSelectedCurrency(currency);
        setFromCurrency(currency);
        // Acciones adicionales si son necesarias
    };

    const color= "#FFFFFF";
    return (
        <View style={styles.sContainer}>
            <Text  style={{color:'white', fontSize: 30,}}><Feather size={30} name="settings"/> Ajustes </Text>
            <CurrencyComboBox currencies={colores} onSelectCurrency={handleSelectCurrency} />
        </View>
    );
}

const styles = new StyleSheet.create({
    sContainer: {
        backgroundColor: "#0d1017",
        flex: 1,
        paddingTop: 50,
    },
    textInput: {
      backgroundColor: '#FFFFFF', // Fondo blanco
      borderColor: '#e3771d', // Borde naranja
      borderWidth: 2, // Grosor del borde
      borderRadius: 10, // Bordes redondeados
      width: '100%', // O el ancho específico que necesites
      overflow: 'hidden', // Asegura que el contenido interno no sobresalga
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 20,
      textAlign:'center',
    },
  
  });
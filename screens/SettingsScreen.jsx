import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image ,Text,TouchableOpacity} from 'react-native';
import CurrencyComboBox from '../components/CurrencyComboBoxSettings';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Creditos from '../screens/Creditos';
const colores = {
    "Negro": "#0d1017",
    "Gris": "#7E8A7E",
    "Verde": "#47A048",
    "Rojo": "#F26F5A",
    "Azul": "#44C1BB",
  }

  const cuadriculas = {
    "x3": "3",
    "x4": "4",
    "x5": "5",
  }
  

export default function SettingsScreen({onNewGoal}) {
    const [selectedCurrency, setSelectedCurrency] = useState('Negro');
    const [selectedCurrencycu, setSelectedCurrencycu] = useState('x4');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelectCurrency = async (currency) => {
        setSelectedCurrency(currency);
        const backgroundColor = colores[currency];
        try {
          await AsyncStorage.setItem('@backgroundColor', backgroundColor);
        } catch (e) {
          // Guardar error
        }
        // Acciones adicionales si son necesarias
    };

    const handleSelectCurrencycu = async (currency) => {
      setSelectedCurrencycu(currency);
      const cuadricula = cuadriculas[currency];
      try {
        await AsyncStorage.setItem('@cuadricula', cuadricula);
      } catch (e) {
        // Guardar error
      }
      // Acciones adicionales si son necesarias
  };

  // Usa el estado selectedCurrency para determinar el color de fondo
  const backgroundColor = colores[selectedCurrency];


    const color= "#0d1017";
    return (
        <View style={[styles.sContainer, { backgroundColor: backgroundColor }]}>
        <Text style={{ color: 'white', fontSize: 30 ,paddingBottom:20}}><Feather size={30} name="settings"/> Ajustes </Text>
        <View style={styles.linea} />
        <Text style={{ color: 'white', fontSize: 15 ,padding:15 }}> Colores : </Text>
        <View style={styles.centrar}>
            <CurrencyComboBox currencies={Object.keys(colores)} onSelectCurrency={handleSelectCurrency} /> 
        </View>
        <Text style={{ color: 'white', fontSize: 15 ,padding:15 }}> Cuadricula : </Text>
        <View style={styles.centrar}>
            <CurrencyComboBox currencies={Object.keys(cuadriculas)} onSelectCurrency={handleSelectCurrencycu} /> 
        </View>
        <View style={styles.centrar}>
          <TouchableOpacity onPress={() => setModalVisible(true)} >
          <Text style={{ color: 'white', fontSize: 15 ,padding:15 }}> Creditos : </Text>
          </TouchableOpacity>
        </View>
        <Creditos
          onCancel={() => setModalVisible(false)}
          visible={modalVisible}
        />
      </View>
    );
}

const styles = new StyleSheet.create({
    sContainer: {
        flex: 1,
        paddingTop: 50,
    },
    centrar: {
        alignItems:'center',
    },
    linea: {
        borderBottomColor: '#ffc83d', // Color de la línea
        borderBottomWidth: 1, // Grosor de la línea
        alignSelf: 'stretch', // Hace que la línea se extienda en el ancho disponible
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
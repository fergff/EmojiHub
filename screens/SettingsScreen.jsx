import { useState , useEffect} from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image ,Text,TouchableOpacity} from 'react-native';
import CurrencyComboBox from '../components/CurrencyComboBoxSettings';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Creditos from '../screens/Creditos';
const colores = {
    "Negro": "#000000",
    "Gris": "#7E8A7E",
    "Verde": "#4B8E35",
    "Rojo": "#C23939",
    "Azul": "#4092B3",
  }

  const cuadriculas = {
    "x3": "3",
    "x4": "4",
    "x5": "5",
  }
  

  export default function SettingsScreen({}) {
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

   // Esto Carga el color de fondo y la cuadrícula y lo pilla del AsyncStorage
   useEffect(() => {
    const loadPreferences = async () => {
        try {
            const savedBackgroundColor = await AsyncStorage.getItem('@backgroundColor');
            const savedCuadricula = await AsyncStorage.getItem('@cuadricula');

            if (savedBackgroundColor !== null) {
                // Encuentra la clave del color guardado para establecerlo en el estado
                const colorKey = Object.keys(colores).find(key => colores[key] === savedBackgroundColor);
                setSelectedCurrency(colorKey || 'Negro');
            }

            if (savedCuadricula !== null) {
                // Encuentra la clave de la cuadrícula guardada para establecerlo en el estado
                const cuadriculaKey = Object.keys(cuadriculas).find(key => cuadriculas[key] === savedCuadricula);
                setSelectedCurrencycu(cuadriculaKey || 'x4');
            }
        } catch (e) {
            // Error al cargar las preferencias
        }
    };

    loadPreferences();
}, []);


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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.boton} onPress={() => setModalVisible(true)}>
            <Text style={styles.botonText}>Acerca De..</Text>
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
        borderBottomWidth: 2, // Grosor de la línea
        alignSelf: 'stretch', // Hace que la línea se extienda en el ancho disponible
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end', // Asegura que el botón esté al final del contenedor
      alignItems:'center',
      width: '100%', // Ocupa todo el ancho de la pantalla
      marginBottom:15,
    },
    boton: {
      width: '80%', // Hace que el TouchableOpacity ocupe todo el ancho de la pantalla
      backgroundColor: '#ffc83d', // Fondo del botón
      padding: 10, // Espaciado interno del botón
      borderRadius: 5, // Bordes redondeados del botón
    },
    botonText: {
      fontSize: 20,
      color: 'black',
      textAlign: 'center', // Centra el texto dentro del botón
    },
  });
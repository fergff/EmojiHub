import { useState } from 'react';
import React from "react";
import { View, TextInput, Button, Text, StyleSheet, FlatList ,Image,TouchableOpacity} from 'react-native';
import CurrencyComboBox from '../components/CurrencyComboBox';

const currencies = {
  "smileys-and-people": [
    "body", "cat-face", "clothing", "creature-face", "emotion", "face-negative", "face-neutral", "face-positive", "face-role", "face-sick", "family", "monkey-face", "person", "person-activity", "person-gesture", "person-role", "skin-tone"
  ],
  "animals-and-nature": [
    "animal-amphibian", "animal-bird", "animal-bug", "animal-mammal", "animal-marine", "animal-reptile", "plant-flower", "plant-other"
  ],
  "food-and-drink": [
    "dishware", "drink", "food-asian", "food-fruit", "food-prepared", "food-sweet", "food-vegetable"
  ],
  "travel-and-places": [
    "travel-and-places"
  ],
  "activities": [
    "activities"
  ],
  "objects": [
    "objects"
  ],
  "symbols": [
    "symbols"
  ],
  "flags": [
    "flags"
  ],
}

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Maneja la selección de la categoría principal
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Resetea la subcategoría al cambiar la categoría
  };

  // Maneja la selección de la subcategoría
  const handleSelectSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };


    return (
        <View style={styles.container}>
            <View style={styles.containerportada}>
            <Image source={require('../assets/logo.png')} style={{ height:50,width:250,}} />
            </View>
            <View style={styles.flex}>
              <Text style={styles.blanco}>Categoria: {selectedCategory ? selectedCategory : 'Ninguna'}</Text>
             <Text style={styles.blanco}>Grupo: {selectedSubCategory ? selectedSubCategory : 'Ninguno'}</Text>
            </View>
      
      <View style={styles.flexx}>
        <CurrencyComboBox 
            currencies={Object.keys(currencies)} 
            onSelectCurrency={handleSelectCategory} 
          />
        {/* Siempre mostrado, pero desactivado si no hay categoría seleccionada */}
        <CurrencyComboBox 
          currencies={selectedCategory ? currencies[selectedCategory] : []} 
          onSelectCurrency={handleSelectSubCategory} 
          enabled={!!selectedCategory} // Desactiva el combobox si no hay categoría seleccionada
        />
      </View>
            <View style={styles.linea} />
            <View style={styles.goalsContainer}>
              <Text style={{ fontSize: 80 }} >
              &#127956;
              </Text>
              <Text style={{ fontSize: 30,  color:'white'}} >
                {selectedCategory}
                {selectedCategory ? 'lleno' : 'Vaciooo'}
              </Text>
              <Text style={{ fontSize: 30 ,color:'white'}} >
                {selectedSubCategory}
              </Text>
            </View>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#0d1017",
      flex: 1,
      paddingTop: 50,
      
    },
    containerportada:{
        backgroundColor: "#0d1017",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10, // Nota que 'border-radius' se convierte a 'borderRadius'
        borderWidth: 3, // 'border' se divide en varias propiedades: 'borderWidth', 'borderStyle' y 'borderColor'
        borderColor: "#ffc83d",
        borderStyle: "solid", // Esta línea es opcional en React Native, ya que el estilo sólido es el predeterminado
        marginBottom:10,
      },
    goalsContainer: {
      paddingTop:10,
      flex: 5,
    },
    blanco:{
      color:'white',
    },
    flex: {
      flexDirection: 'row', // Alinea elementos horizontalmente
      justifyContent: 'space-around', // Distribuye espacio entre elementos
    },
    flexx: {
      flex: 1,
      flexDirection: 'row', // Alinea elementos horizontalmente
      justifyContent: 'space-around', // Distribuye espacio entre elementos
    },
    linea: {
      borderBottomColor: '#ffc83d', // Color de la línea
      borderBottomWidth: 1, // Grosor de la línea
      alignSelf: 'stretch', // Hace que la línea se extienda en el ancho disponible
    },
    buttonContainer: {
      alignItems: 'flex-end', // Alinea el botón a la derecha
      marginRight: 15,       // Margen derecho para separar el botón del borde de la pantalla
    },
    button: {
      backgroundColor: '#e3771d', // Color de fondo del botón
      paddingHorizontal: 12,      // Padding horizontal para controlar el ancho del botón
      paddingVertical: 6,         // Padding vertical para controlar la altura del botón
      borderRadius: 10,           // Redondea las esquinas del botón
    },
    buttonText: {
      color: 'white', // Color del texto
      fontSize: 16,   // Tamaño del texto
      fontWeight: 'bold', // Negrita para el texto
    },
    masImg: {
      width: 40,
      height: 40,
    },
  });

import React, { useEffect } from 'react';
import { View, StyleSheet, Button, Modal, Text, BackHandler, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Creditos({ visible, onCancel }) {
  

  useEffect(() => {

    const backAction = () => {
      if (visible) {
        onCancel(); // Cierra el modal
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [visible, onCancel]);

  
  return (
    <>
     
    <Modal
      visible={visible}
      animationType='slide'
      transparent={true} // Esto permite que el fondo fuera del modal sea transparente
      onRequestClose={onCancel} // Maneja el botón de atrás en Android
    >
      <TouchableOpacity style={styles.modalOverlay} onPress={onCancel} activeOpacity={1}>
        
          <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
            <View>
              <Text style={styles.estilonombre}>Fernando Guioooo</Text>
              <View style={styles.linea} />
              <Text style={styles.descripcion}>Actor mexicano conocido por su papel en la película "Los Tres Mosqueteros".</Text>
            </View>
          
          
            <View style={styles.container}>
              <Text style={styles.estilonombre}>Alejandro Martin</Text>
              <View style={styles.linea} />
              <Text style={styles.descripcion}>Actor mexicano conocido por su papel en la película "Los Tres Mosqueteros".</Text>
            </View>
          
          
            <View style={styles.container}>
              <Text style={styles.estilonombre}>David Hernández</Text>
              <View style={styles.linea} />
              <Text style={styles.descripcion}>Actor mexicano conocido por su papel en la película "Los Tres Mosqueteros".</Text>
            </View>

         


          <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onCancel}>
                <Feather name="arrow-left" style={styles.botonatras} />
              </TouchableOpacity>
              <Text style={[styles.descripcion]}>Version: v 1.0</Text>
          </View>
          
          </View>
        
      </TouchableOpacity>
    </Modal>
  </> 
  )
}



const styles = new StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%', // Ancho del modal
    height:'70%',
    backgroundColor: 'black', // Fondo del modal
    padding: 20, // Espaciado interno del modal
    borderRadius: 15, // Bordes redondeados del modal
    borderColor:'#ffc83d',
    borderWidth:3,
    alignItems: 'start',
    // Define aquí otros estilos que necesites para el contenido del modal
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row', // Cambia la dirección del eje principal a horizontal
    justifyContent: 'space-between', // Distribuye el espacio uniformemente entre los botones
    alignItems: 'flex-end', // Alinea los botones hacia el final (parte inferior) del contenedor
    padding: 3, // Mantiene los botones alejados de los bordes de la pantalla
  },
  linea: {
    borderBottomColor: '#ffc83d', // Color de la línea
    borderBottomWidth: 2, // Grosor de la línea
    alignSelf: 'stretch', // Hace que la línea se extienda en el ancho disponible
  },
  estilonombre:{
    color:'white',
    fontWeight: 'bold',
    fontStyle:'italic',
    fontSize: 20,
  },
  descripcion:{
    padding: 10,
    color:'white',
    fontSize: 15,
  },
  botonatras:{
    color:'#ffc83d',
    fontSize: 50,
  }

});
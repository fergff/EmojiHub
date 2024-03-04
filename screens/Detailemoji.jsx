import React, { useEffect } from 'react';
import { View, StyleSheet, Button, Modal, Text, BackHandler, TouchableOpacity,Clipboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';



export default function Detailemoji({ visible, onCancel,emojiInfo }) {
  

  const convertHTMLToEmoji = (unicode) => {
    if (!unicode || !Array.isArray(unicode) || unicode.length === 0) {
      return ''; // Si no hay códigos Unicode disponibles, retornar una cadena vacía
    }

    const unicodeStr = unicode[0]; // Tomar el primer código Unicode disponible
    const codePoint = parseInt(unicodeStr.replace("U+", ""), 16); // Convertir el código Unicode a un número entero

    if (isNaN(codePoint)) {
      return ''; // Si el código Unicode no es válido, retornar una cadena vacía
    }

    return String.fromCodePoint(codePoint); // Convertir el código Unicode a un emoji
  };

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

  const copyEmojiToClipboard = (emoji) => {
    Clipboard.setString(emoji);
  };


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
          {emojiInfo && (
            <View style={styles.contentcenter} >
              <TouchableOpacity onPress={() => copyEmojiToClipboard(convertHTMLToEmoji(emojiInfo.unicode))}>
                <Text style={styles.estiloemoji}>{convertHTMLToEmoji(emojiInfo.unicode)}</Text>
              </TouchableOpacity>
              <Text style={styles.estilonombre}>Nombre: {emojiInfo.name}</Text>
            </View>
          )}

         
              <TouchableOpacity onPress={onCancel}>
                <FontAwesome5 name="arrow-left" style={styles.botonatras}  />
              </TouchableOpacity>
          
          
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente
  },
  modalContent: {
    width: '70%', // Ancho del modal
    height:'40%',
    backgroundColor: 'black', // Fondo del modal
    padding: 20, // Espaciado interno del modal
    borderRadius: 15, // Bordes redondeados del modal
    borderColor:'#ffc83d',
    borderWidth:3,
    alignItems: 'start',
    // Define aquí otros estilos que necesites para el contenido del modal
  },
  contentcenter:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  linea: {
    borderBottomColor: '#ffc83d', // Color de la línea
    borderBottomWidth: 2, // Grosor de la línea
    alignSelf: 'stretch', // Hace que la línea se extienda en el ancho disponible
  },
  estilonombre:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom:20,
  },
  estiloemoji:{
    fontSize: 80,
    paddingBottom:20,
  },
  botonatras:{
    color:'#ffc83d',
    fontSize: 50,
  }

});
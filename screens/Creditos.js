import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image ,Text} from 'react-native';




export default function GoalInput({ onNewGoal, visible, onCancel }) {
 
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>


        <View style={styles.fullWidthContainer}>
          <Text style={styles.fullWidthText}>El fernannnnnn</Text>
         
        </View>
        
        <View style={styles.buttonContainer}>

          <View style={styles.button}>
            <Button
              color="#e3771d"
              title='Cancel'
              onPress={() => onCancel()}
            />
          </View>


        </View>

      </View>
    </Modal>
    
  )
}
// Componente App

function calcularCambio(amount, fromCurrency, toCurrency) {
  // Verifica que both monedas existan en el objeto currencies
  if (currencies[fromCurrency] && currencies[toCurrency]) {
    const fromRate = currencies[fromCurrency].exchangeRate;
    const toRate = currencies[toCurrency].exchangeRate;

    // Calcula el monto en la moneda destino
    const amountInToCurrency = (amount / fromRate) * toRate;

    return parseFloat(amountInToCurrency.toFixed(1));
  } else {
    // Si alguna de las monedas no existe, retorna un mensaje de error o null
    console.error("Una o ambas monedas no son válidas.");
    return null; // O maneja este caso como prefieras
  }
}


const styles = new StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    alignItems: 'center',
    backgroundColor: "#fffee1"
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    marginLeft:10,
    marginRight:10,
    width: '40%'
  },
  goalImg: {
    width: 120,
    height: 120,
    margin: 20
  },
  CurrencyComboBox: {
    width: '100%',
  },
  fullWidthContainer: {
    paddingTop:10,
    width: '80%', // Esto hace que el contenedor ocupe el 100% del ancho
    alignItems: 'center', // Centra los elementos horizontalmente
    paddingHorizontal: 10, // Añade un poco de espacio a los lados si lo necesitas
  },
  fullWidthText: {
    width: '100%', // Asegura que el texto también ocupe el 100%
    textAlign: 'left', // Centra el texto si es necesario
  },

});

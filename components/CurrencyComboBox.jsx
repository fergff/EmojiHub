import React, { useState } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const CurrencyComboBox = ({ currencies, onSelectCurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };

  const placeholder = {
    label: 'Seleccione', // Texto que quieres mostrar
    value: null, // Valor asociado a la selección por defecto
  };

  return (
    <View style={styles.comboBox}>
      <RNPickerSelect
        onValueChange={(value) => onSelectCurrency(value)}
        items={currencies.map((currency) => ({
          label: currency,
          value: currency,
        }))}
        placeholder={placeholder} // Añade esto para configurar el valor por defecto
        // Estilos y otras props como antes
      />
    </View>
  );
};


const styles = StyleSheet.create({
  comboBox: {
    fontSize:20,
    backgroundColor: '#ffc83d',
    borderRadius: 10, // Bordes redondeados
    width: '47%', // O el ancho específico que necesites
    height:60,
    overflow: 'hidden', // Asegura que el contenido interno no sobresalga
    margin:5,
  },
  // Puedes necesitar ajustar el estilo del Picker según la plataforma
});
export default CurrencyComboBox;

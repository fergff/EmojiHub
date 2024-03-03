import React, { useState } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const CurrencyComboBoxSettings = ({ currencies, onSelectCurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCurrencyChange = (currency) => {
    // Ignora el cambio si el valor es null (Seleccionar)
    if (currency === null) return;

    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };

  const placeholder = {
    label: 'Seleccione', // Texto que quieres mostrar
    value: null, // Valor asociado a la selección por defecto
    color: 'black',
  };

  return (
    <View style={styles.comboBox}>
    <RNPickerSelect
        onValueChange={handleCurrencyChange}
        items={currencies.map((currency) => ({
          label: currency,
          value: currency,
        }))}
        placeholder={placeholder}
        value={selectedCurrency}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  comboBox: {
    fontSize:20,
    backgroundColor: '#ffc83d',
    borderRadius: 10, // Bordes redondeados
    width: '80%', // O el ancho específico que necesites
    height:60,
    overflow: 'hidden', // Asegura que el contenido interno no sobresalga
    margin:5,
  },
});


export default CurrencyComboBoxSettings;

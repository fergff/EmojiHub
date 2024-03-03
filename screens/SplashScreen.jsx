import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet ,ImageBackground,Image} from 'react-native';
import fondoPantalla from '../assets/fondo2.jpg';

export default function SplashScreen() {
  return (

    <ImageBackground source={fondoPantalla} style={styles.imagenFondo}>
        <View style={styles.container}>
            <View style={styles.cardContainer}> 
                <Image source={require('../assets/logo.png')} style={{ height:50,width:250,}} />
                <Text style={styles.text}>Cargando...</Text>
                <ActivityIndicator size="large"  color="#ffc83d"/>
            </View>
        </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
text: {
    fontSize: 20,
    marginTop:10,
    marginBottom: 20,
    color:'white',
},
imagenFondo: {
    width: '100%',
    height: '100%',
},
cardContainer: {
    backgroundColor: 'black',
    borderColor:"#ffc83d",
    borderWidth:2,
    borderRadius: 10,
    paddingHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '35%',
},
});
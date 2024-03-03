import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './MyTabs';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000); // pantalla de carga de 4 segundos
    }, []);

    if (isLoading) {
      return <SplashScreen />;
    }

  <StatusBar style='light' />
  return (
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  );
}



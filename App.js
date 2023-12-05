import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './src/reducers/store';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require('./assets/fonts/Sora-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {

    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#FF007F" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </Provider>

  );
}

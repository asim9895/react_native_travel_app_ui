import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Details from './screens/Details';
import AppLoading from 'expo-app-loading';
import {
  Metrophobic_400Regular,
  useFonts,
} from '@expo-google-fonts/metrophobic';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { CinzelDecorative_700Bold } from '@expo-google-fonts/cinzel-decorative';
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Metrophobic_400Regular,
    Roboto_700Bold,
    Nunito_400Regular,
    CinzelDecorative_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='OnBoarding' component={Onboarding} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

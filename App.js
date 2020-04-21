import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import Home from './Home';
import Nexts from './Nextsc';
import Registration from './assets/Registration';


export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="View" component={Nexts}/>
        <Stack.Screen name="Registration" component={Registration}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


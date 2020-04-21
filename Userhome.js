import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, Button } from 'react-native-elements';


export default function Userhome({ navigation }) {
  const Tabs = createBottomTabNavigator()
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Button title="Back.." onPress={()=>navigation.navigate('Home')}/>
    </View>
  );
}


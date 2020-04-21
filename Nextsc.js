import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Userhome from './Userhome';
import PlaceOrder from './PlaceOrder';
import Track from './Track';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Nexts({ navigation }) {
  
  const Tabs = createBottomTabNavigator()
  return (
    <Tabs.Navigator tabBarOptions={{showLabel:false}}>
      <Tabs.Screen name="Userhome" component={Userhome} options={{tabBarIcon:()=>{
        return <TouchableOpacity><Icon name="person" size={40} color="#615e5e"/></TouchableOpacity>
      }}}/>
      <Tabs.Screen name="PlaceOrder" component={PlaceOrder} options={{tabBarIcon:()=>{
        return <TouchableOpacity><Icon name="local-shipping" size={40} color="#615e5e"/></TouchableOpacity>
      }}}/>
      <Tabs.Screen name="Track" component={Track} options={{tabBarIcon:()=>{
        return <TouchableOpacity><Icon name="map" size={40} color="#615e5e"/></TouchableOpacity>
      }}}/>
    </Tabs.Navigator>
  );
}


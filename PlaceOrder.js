import React from 'react';
import { StyleSheet, Text, View,Image, TextInput } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native-elements";

export default function PlaceOrder() {
  const Tabs = createBottomTabNavigator()
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"white"}}>
      <Image source={require('./assets/kiy.jpg')} style={{width:"100%",height:"20%"}}/>
      <TextInput placeholder="Name" style={{width:"100%",padding:10,borderWidth:1.0,paddingRight:5,borderRadius:5,borderColor:"#d6d5d4",marginTop:5}}/>
      <View style={{flexDirection:"row",marginTop:10}}>
           <View style={{flex:2}}>
           <TextInput placeholder="Address" style={{padding:10,paddingRight:5,width:"96%",borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}}/>
           </View>
           <View style={{flex:1.5}}>
           <TextInput placeholder="Contact" style={{padding:10,paddingRight:10,width:"100%",borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}}/>
             </View>
         </View>
      <TextInput placeholder="Package Description" style={{width:"100%",paddingRight:5,padding:10,borderWidth:1.0,paddingRight:5,borderRadius:5,marginTop:10,borderColor:"#d6d5d4"}} multiline = {true}/>
      <View style={{marginTop:10,width:"100%"}}>
        <Button title="Submit"/>
        <View style={{marginTop:10,backgroundColor:"#eee",width:"100%",padding:5,borderRadius:10}}>
          <Text style={{fontSize:15}}>NB: Details to be filled out should be that of the Recepient of the Package and not you the User making the request.</Text>
      </View>
      </View>
    </View>
  );
}


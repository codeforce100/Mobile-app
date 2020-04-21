import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from "react-native-elements";


export default function Home({ navigation }) {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"white"}}>
      <Image source={require('./assets/skynet.png')} style={{width:"95%",height:"25%",marginBottom:20}}/>
      <TextInput placeholder="Email" style={{padding:10,width:"95%",borderWidth:1.5,borderColor:"#d6d5d4",borderRadius:5}}/>
      <TextInput placeholder="Password" style={{padding:10,width:"95%",borderWidth:1.5,borderColor:"#d6d5d4",marginTop:20,borderRadius:5}} secureTextEntry={true}/>
      <View style={{width:"95%",marginTop:30,marginBottom:10}}>
          <Button title="Login" onPress={()=>navigation.navigate('View')}/>
      </View>
      <View style={{alignSelf:"flex-end",marginTop:10,marginRight:10}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Registration')}>
          <Text >Don't have an Account? SignUp</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}


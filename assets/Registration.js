import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button,Avatar } from "react-native-elements";


export default function Registration({ navigation }) {

  //State for input Text....Begining
  const[firstname,setfirst] = useState('')
  const[lastname,setlast] = useState('')
  const[email,setmail] = useState('')
  const[phone,setphone] = useState('')
  const[username,setuser] = useState('')
  const[password,setpass] = useState('')
//...........................End
  return (
       <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:8,backgroundColor:"white"}}>
         <Avatar rounded={true} icon={{name:"person",size:150,color:"#333131"}} size="xlarge" containerStyle={{alignSelf:"center"}} overlayContainerStyle={{backgroundColor:"white"}}/>
         <View style={{flexDirection:"row",marginTop:20}}>
           <View style={{flex:1}}>
           <TextInput placeholder="Firstname" style={{padding:10,width:"95%",borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}} onChangeText={firstname=>setfirst(firstname)}/>
           </View>
           <View style={{flex:1}}>
           <TextInput placeholder="Lastname" style={{padding:10,width:"95%",borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}} onChangeText={lastname=>setlast(lastname)}/>
             </View>
         </View>
         <View style={{flexDirection:"row",marginTop:10}}>
           <View style={{flex:2}}>
           <TextInput placeholder="Email" style={{padding:10,width:"95%",borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}} keyboardType="email-address" onChangeText={email=>setmail(email)}/>
           </View>
           <View style={{flex:1}}>
           <TextInput placeholder="Contact" style={{padding:10,width:"95%",borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}} keyboardType="numeric" onChangeText={phone=>setphone(phone)}/>
             </View>
         </View>
         <View style={{alignSelf:"flex-start",marginTop:10,width:"100%"}}>
         <TextInput placeholder="Username" style={{padding:10,borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}} onChangeText={username=>setuser(username)}/>
         </View>
         <View style={{alignSelf:"flex-start",marginTop:10,width:"100%"}}>
         <TextInput placeholder="Password" style={{padding:10,borderWidth:1.0,borderColor:"#d6d5d4",borderRadius:5,fontSize:15}} secureTextEntry={true} onChangeText={password=>setpass(password)}/>
         </View>
           <View style={{marginTop:15,width:"100%"}}>
             <Button title="Join" onPress={()=>{alert(firstname+','+lastname+','+email+','+phone+','+username+','+password)
            navigation.navigate('Home')}}/>
           </View>
         </View>
       
  );
}


import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';


export default function Trackinfo(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Avatar rounded={true} icon={{name:"person",color:"black"}} size="large" containerStyle={{alignSelf:"center"}}/>
        <Text style={{marginTop:15,fontSize:18}}>Delivery guy : David</Text>
        <Text style={{marginTop:10,fontSize:18}}>Estimated arrivial time : 3 minutes</Text>
        <Text style={{marginTop:10,fontSize:18}}>Estimated Speed : 23km/h</Text>
        <View style={{width:"100%",marginTop:20}}>
          <Button title="Center Location" type="clear"/>
        </View>
      </View>
    
    )
}
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapView from 'react-native-maps';
import { Avatar } from 'react-native-elements';


export default function Track() {
  const [cords,setcorde] = useState([])
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((location)=>{
      const Data ={
        Long : location.coords.longitude,
        Lati : location.coords.latitude,
        Speed : location.coords.speed,
        Time : location.timestamp
      }
      setcorde(Data)
    })
  })
  return (
    <View style={{height:"100%",flex:1}}>
      <MapView style={{flex:1,justifyContent:"center",alignItems:"center"}} initialRegion={{
        latitude: 5.5322923 ,
        longitude: -0.4884842,
        latitudeDelta : 0.0922,
        longitudeDelta: 0.0421
      }} showsUserLocation={true} onRegionChange={(region)=>{
        region.longitude = cords.Long,
        region.latitude = cords.Lati,
        region.latitudeDelta = 0.0922,
        region.longitudeDelta = 0.0421
      }} showsBuildings={true} showsScale={true} showsMyLocationButton={true}>
      </MapView>
      <View style={{flex:0.38,padding:10,backgroundColor:"white"}}>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:25,borderBottomWidth:2.0}}>Tracking Status</Text>
        <View style={{flexDirection:"row",height:"60%",marginTop:20,backgroundColor:"#eee",borderRadius:10,padding:10}}>
          <View style={{flex:0.8,justifyContent:"center"}}>
            <Avatar size="large" icon={{name:"person",size:75,color:"black"}} containerStyle={{alignSelf:"center"}} overlayContainerStyle={{backgroundColor:"#eee"}}/>
          </View>
          <View style={{flex:2,justifyContent:"center",padding:8}}>
            <Text style={{textAlign:"left",fontWeight:"bold",fontSize:18,marginBottom:5}}>Drivername : Abdullah-Ahmid </Text>
            <Text style={{textAlign:"left",fontWeight:"bold",fontSize:18,marginBottom:5}}>Arrivial : 5 mintues </Text>
            <Text style={{textAlign:"left",fontWeight:"bold",fontSize:18}}>Driver Speed : 30km/h</Text>
          </View>
        </View>
      </View>
      </View>  
  );
}


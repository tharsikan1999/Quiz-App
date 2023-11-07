
import * as React from "react";
import { View, Text,SafeAreaView,TouchableOpacity,Image,ScrollView,TextInput } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

import AboutImg from '../../assets/About.png'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function AboutScreen({ navigation }) {
  const DrawerOpener = () => {
    navigation.toggleDrawer();
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e7edf9'}}>
        <ScrollView style={{flex:1,paddingLeft:2,paddingTop:35}} >
        <View style={{position:'relative',justifyContent:'center',alignItems:'center',height:50,flexDirection:'row'}}>
              <TouchableOpacity onPress={DrawerOpener}
               style={{borderColor:"#E0E0FF",borderRadius:5,borderWidth:2,position:'absolute',left:5,width:50,alignItems:'center',justifyContent:'center',}} >
              <Ionicons  style={{fontSize:38,}} name="menu"></Ionicons>
              </TouchableOpacity>
               <Text style={{fontSize:19,fontWeight:'700'}}>About Us</Text> 
              
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Image style={{height:300,width:300}} source={AboutImg}/>
        </View>
        
        
        </ScrollView>
      </SafeAreaView>
  );
}


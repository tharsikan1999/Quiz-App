import * as React from "react";
import { View, Text,SafeAreaView,TouchableOpacity,Image,ScrollView,TextInput } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

import UserImg from '../../assets/girl.png'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function ContactScreen({ navigation }) {
  const DrawerOpener = () => {
    navigation.toggleDrawer();
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e7edf9'}}>
        <ScrollView style={{flex:1,paddingTop:28,paddingLeft:2}} >
        <View style={{position:'relative',justifyContent:'center',alignItems:'center',height:50,flexDirection:'row'}}>
              <TouchableOpacity onPress={DrawerOpener}
               style={{borderColor:"#E0E0FF",borderRadius:5,borderWidth:2,position:'absolute',left:5,width:50,alignItems:'center',justifyContent:'center',}} >
              <Ionicons  style={{fontSize:38,}} name="menu"></Ionicons>
              </TouchableOpacity>
               <Text style={{fontSize:19,fontWeight:'700'}}>Contact Us</Text> 
              
        </View>
        <View style={{backgroundColor:'#fff',paddingLeft:10,marginLeft:8,marginRight:8,borderRadius:15,paddingBottom:10,marginTop:10}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons  style={{fontSize:18,color:'#7167f5'}} name="call"></Ionicons>
            <Text style={{fontSize:16,fontWeight:500,marginLeft:10}} >Phone</Text>
          </View>
          <View style={{marginTop:10,paddingLeft:25}}>
            <Text style={{fontSize:15,fontWeight:400,marginLeft:10}} >Mobile : (+94) 771234567</Text>
            <Text style={{fontSize:15,fontWeight:400,marginLeft:10}} >Hotline : (+94) 771234567</Text>

          </View>

        </View>
        <View style={{backgroundColor:'#fff',paddingLeft:10,paddingTop:10,marginLeft:8,marginRight:8,borderRadius:15,paddingBottom:10,marginTop:10}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons  style={{fontSize:18,color:'#7167f5'}} name="mail-open"></Ionicons>
            <Text style={{fontSize:16,fontWeight:500,marginLeft:10}} >Email</Text>
          </View>
          <View style={{marginTop:10,paddingLeft:25}}>
            <Text style={{fontSize:15,fontWeight:400,marginLeft:10}} >info@gmail.com</Text>
            <Text style={{fontSize:15,fontWeight:400,marginLeft:10}} >example@itum.lk</Text>

          </View>

        </View>
        <View style={{backgroundColor:'#fff',paddingLeft:10,paddingTop:10,marginLeft:8,marginRight:8,borderRadius:15,paddingBottom:10,marginTop:10}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons  style={{fontSize:18,color:'#7167f5'}} name="home"></Ionicons>
            <Text style={{fontSize:16,fontWeight:500,marginLeft:10}} >Address</Text>
          </View>
          <View style={{marginTop:10,paddingLeft:25}}>
            <Text style={{fontSize:15,fontWeight:400,marginLeft:10}} >ITUM </Text>
            <Text style={{fontSize:15,fontWeight:400,marginLeft:10}} >Homagama</Text>

          </View>

        </View>
        <View style={{padding:8}}>
          <Text style={{fontSize:18,fontWeight:600}}>Get in Touch</Text>
          <TextInput style={{marginTop:10,borderRadius:5,height:45,backgroundColor:'#fff',paddingLeft:10,fontSize:16}}
           placeholder="Name"/>
            <TextInput style={{marginTop:10,borderRadius:5,height:45,backgroundColor:'#fff',paddingLeft:10,fontSize:16}}
           placeholder="Email"/>
           <TextInput style={{marginTop:10,borderRadius:5,height:60,backgroundColor:'#fff',paddingLeft:10,fontSize:16}}
           placeholder="Message"/>
        
           <TouchableOpacity onPress={()=>navigation.navigate('Home')}
                   style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:'100%',borderRadius:6,marginTop:10}}>
                  <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Submit</Text>
                </TouchableOpacity>
           
        </View>
        
        </ScrollView>
      </SafeAreaView>
  );
}


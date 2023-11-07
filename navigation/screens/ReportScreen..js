import * as React from "react";
import { View, Text,SafeAreaView,TouchableOpacity,Image,ScrollView,TextInput } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

import Bug from '../../assets/bug.png'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function ReportScreen({ navigation }) {
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
               <Text style={{fontSize:19,fontWeight:'700'}}>Report Us</Text> 
              
        </View>
       
      
        <View style={{padding:8,marginTop:5}}>
          <View style={{width:"100%",justifyContent:'center',alignContent:'center',flexDirection:'row',}}>
          <Image style={{height:250,width:250,marginLeft:-30}} source={Bug}/>
          </View>
          
          <TextInput style={{marginTop:20,borderRadius:5,height:45,backgroundColor:'#fff',paddingLeft:10,fontSize:16}}
           placeholder="Name"/>
            <TextInput style={{marginTop:10,borderRadius:5,height:45,backgroundColor:'#fff',paddingLeft:10,fontSize:16}}
           placeholder="Email"/>
           <TextInput style={{marginTop:10,borderRadius:5,height:100,backgroundColor:'#fff',paddingLeft:10,fontSize:16}}
           placeholder="Write your Feedback Here"/>
        
           <TouchableOpacity onPress={()=>navigation.navigate('Home')}
                   style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:'100%',borderRadius:6,marginTop:15}}>
                  <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Report</Text>
                </TouchableOpacity>
           
        </View>
        
        </ScrollView>
      </SafeAreaView>
  );
}


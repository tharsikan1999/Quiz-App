import * as React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import UserImg from '../../assets/girl.png'

import { createDrawerNavigator } from '@react-navigation/drawer';

import EditSettings from './EditSettings';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import ReportScreen from './ReportScreen.';
import LogoutScreen from './LogoutScreen';

function HomePage({ navigation }) {
  const DrawerOpener = () => {
    navigation.toggleDrawer();
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e7edf9'}}>
        <ScrollView style={{flex:1,paddingTop:38,paddingLeft:2}} >
        <View style={{position:'relative',justifyContent:'center',alignItems:'center',height:50,flexDirection:'row'}}>
              <TouchableOpacity onPress={DrawerOpener}
               style={{borderColor:"#E0E0FF",borderRadius:5,borderWidth:2,position:'absolute',left:5,width:50,alignItems:'center',justifyContent:'center',}} >
              <Ionicons  style={{fontSize:38,}} name="menu"></Ionicons>
              </TouchableOpacity>
               <Text style={{fontSize:19,fontWeight:'700'}}>Welcome Back</Text> 
              <TouchableOpacity style={{height:45,width:45,borderRadius:50,position:'absolute',right:10}}>
              <Image style={{height:45,width:45,borderRadius:50,position:'absolute'}} source={UserImg}/>
              </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  
  return (
    
      <Drawer.Navigator >
        <Drawer.Screen
          name="Home"
          component={HomePage}
          options={{
            drawerLabel: 'Home',
            headerShown:false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            
            headerStyle: {
              backgroundColor: '#e7edf9',
            },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight:'500' 
            },
          }}
        />
        <Drawer.Screen
          name="About Us"
          component={AboutScreen}
          options={{
            drawerLabel: 'About',
            headerShown:false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }}
        />
        
        <Drawer.Screen
          name="Contact Us"
          component={ContactScreen}
          options={{
            drawerLabel: 'Contact',
            headerShown:false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="call" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Edit"
          component={EditSettings}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
            headerShown:false
          }}
        />
        <Drawer.Screen
          name="Report"
          component={ReportScreen}
          options={{
            drawerLabel: 'Report',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bug" size={size} color={color} />
            ),
            headerShown:false
          }}
        />
       <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
          options={{
            drawerLabel: 'Logout',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-out" size={size} color={color} />
            ),
            headerShown:false
          }}
        />
        
      </Drawer.Navigator>
   
  );
}

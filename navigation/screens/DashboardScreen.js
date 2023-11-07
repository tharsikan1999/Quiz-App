import React from 'react'
import { Text,SafeAreaView,View,TouchableOpacity,Image,ScrollView,TextInput } from 'react-native'
import { Ionicons,fon } from 'react-native-vector-icons';
import DefaultImage from ".././screens/man.png";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import  { Gesture } from 'react-native-gesture-handler';
import NavigationContainer from '@react-navigation/native';
import 'react-native-gesture-handler';







function DashboardScreen({navigation}) {


  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text
      onPress={() => navigation.navigate("Home")}
      style={{ fontSize: 26, fontWeight: "bold" }}
    >
      Dashboard Screen
    </Text>
  </View>              
     
  )
}

export default DashboardScreen
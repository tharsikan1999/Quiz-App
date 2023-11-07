

import DefaultImage from ".././screens/man.png";


import React from 'react'
import { Text,View,Image,SafeAreaView,TouchableOpacity } from 'react-native'
import { Ionicons } from 'react-native-vector-icons';




function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'#e7edf9'}}>
      <View style={{height:50,position:"absolute",top:40,width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F0FAFF',paddingLeft:7,paddingRight:8}}>
      
        <Text style={{fontSize:20,fontWeight:'500'}}>Personal Profile</Text>
        
      </View>

      <View  style={{marginTop:120,flexDirection:'row',paddingLeft:20}}>
        <View>
        <Image style={{height:100,width:100,borderRadius:50}} source={DefaultImage}/>
        </View>
        <View style={{marginLeft:40,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'500',marginBottom:10}} >Full Name</Text>
          <Text style={{fontSize:16,fontWeight:'500',color:'#808080',marginBottom:10}}>@Username</Text>
        </View>
      </View>
      <View style={{marginTop:40}}>
        <View style={{flexDirection:'row',paddingLeft:50}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons style={{fontSize:30,color:'#3552F8'}} name="mail"></Ionicons>
          </View>
          <View style={{marginLeft:25}}>
            <Text style={{fontSize:16,fontWeight:'400',marginBottom:10,marginTop:15}}>Email</Text>
            <Text style={{fontSize:16,fontWeight:'400',marginBottom:10}}>example@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={{marginTop:20}}>
        <View style={{flexDirection:'row',paddingLeft:50}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Ionicons style={{fontSize:30,color:'#B835F8'}} name="call"></Ionicons>
          </View>
          <View style={{marginLeft:25}}>
            <Text style={{fontSize:16,fontWeight:'400',marginBottom:10,marginTop:5}}>Phone No</Text>
            <Text style={{fontSize:16,fontWeight:'400',marginBottom:10}}>+94771234567</Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity onPress={()=>navigation.navigate('LogoutScreen')}
         style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:"100%",marginTop:10,position:'absolute',bottom:1}}>
          <Text style={{color:'#fff',fontSize:18,fontWeight:'600'}}>Logout</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default ProfileScreen
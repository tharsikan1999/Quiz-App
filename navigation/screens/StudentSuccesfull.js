import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import okimg from '../../assets/okimg.png'
import { useNavigation } from '@react-navigation/native'


function StudentSuccesfull() {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#e7edf9',paddingBottom:70}}>
        <Image source={okimg} style={{height:300,width:300}}/>
        <Text style={{fontSize:24,fontWeight:'600',color:'#030303'}}>Account Created</Text>
        <Text style={{fontSize:16,fontWeight:'500',color:"#808080" ,marginTop:10}}>Your Account has been created</Text>
        <Text style={{fontSize:16,fontWeight:'500',color:"#808080",marginTop:3,marginBottom:20}}>Successfully</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('TabNavigator')}
         style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:300,borderRadius:6,marginTop:10}}>
          <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Go To Dashboard</Text>
        </TouchableOpacity>


    </SafeAreaView>
  )
}

export default StudentSuccesfull
import React from 'react'
import { Text,View,Image,TouchableOpacity,SafeAreaView } from 'react-native'
import Mainimg from '../assets/drugimgone.png'
import { useNavigation } from '@react-navigation/native'


function WelcomeScreen() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#e7edf9',position:'relative'}}>
        <Image source={Mainimg} style={{height:300,width:400}}/>
        <Text style={{fontSize:26,marginTop:30,fontWeight:'700',fontFamily:'Roboto'}}>Start Your learning Journey</Text>
        <Text style={{fontSize:26,marginTop:5,fontWeight:'700',fontFamily:'Roboto'}}>with does of fun!</Text>
        <Text style={{fontSize:18,fontWeight:'500',color:"#808080" ,marginTop:10,fontFamily:'Roboto',marginBottom:150}}> Your Curiosty & Enjoable</Text>
        <View style={{width:'100%',alignItems:'center',position:'absolute',bottom:15}}>
          
          <TouchableOpacity  onPress={() => navigation.navigate("Registration")}
             style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:300,borderRadius:6,marginTop:10,marginBottom:10}}>
          <Text style={{color:'#fff',fontSize:16.5,fontWeight:'600'}}>Teacher</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("studentRegistrationScreen")}
             style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:300,borderRadius:6,marginTop:10,marginBottom:80}}>
          <Text style={{color:'#fff',fontSize:16.5,fontWeight:'600'}}>Student</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen
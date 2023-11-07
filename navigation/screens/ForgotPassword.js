import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View,Text,ScrollView,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

function ForgotPassword() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={style.forgotSafearea} >
            <View style={{position : 'absolute',top : 50,width:'100%'}}>
            <View style={style.forgotBoxOne} >
            <TouchableOpacity style={style.forgotArrowicon} onPress={() => navigation.navigate("Login")}>
            <Ionicons style={{fontSize:28}} name="arrow-back-outline"></Ionicons>
            </TouchableOpacity>
            
                <Text style={{fontSize : 20,fontWeight : '600',color : '#2f3030'}}>Forgot Password</Text>
            </View>
            </View>
            <View style={style.ForgotboxTwo}>
                <Text style={{fontSize:18,fontWeight:'500',color:'#2f3030',marginBottom:15,marginTop:40}}>Reset Email Passwrod</Text>
                <TextInput  style={style.ForgotTextinput} placeholder='Enter Your Email Address' />
                <TouchableOpacity style={style.Forgotbutton}>
                    <Text style={{fontSize:18,fontWeight:'600',color:'#fff'}}>Send</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontSize:16,fontWeight:'600',marginRight:6}}>Back To?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text 
                     style={{fontSize:17,fontWeight:'600',color:'#7167f5'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default ForgotPassword


const style=StyleSheet.create(
    {
        forgotBoxOne : {
            backgroundColor : '#fff',
            height : 55,
            flexDirection : 'row',
            justifyContent : 'center',
            alignItems : 'center',
            position : 'relative'
        },
        forgotSafearea : {
            flex : 1,
            backgroundColor : '#e7edf9',
            justifyContent : 'center',
            position : 'relative',
            
        },
        forgotArrowicon : {
            position : 'absolute',
            left : 15,
            fontSize : 25,
            fontWeight : '600'
            
        },
        ForgotboxTwo : {
            width : '100%',
            alignItems : 'center'
            
        }
        ,
        ForgotTextinput : {
            height : 50,
            borderColor : '#7167f5',
            borderWidth : 1,
            width : '80%',
            paddingLeft : 13,
            fontSize : 16,
            fontWeight : '500',
            marginBottom : 15 ,
            borderRadius : 5
        },

        Forgotbutton : {
            height : 50,
            backgroundColor:'#7167f5',
            width : '80%',
            marginBottom : 15 ,
            borderRadius : 5,
            justifyContent :'center',
            alignItems : 'center',
            marginTop : 7
        }
    }
)
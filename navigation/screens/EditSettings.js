import React from 'react'
import { Text,SafeAreaView,View,TouchableOpacity,Image,ScrollView,TextInput } from 'react-native'
import { Ionicons } from 'react-native-vector-icons';
import DefaultImage from ".././screens/man.png";
import { useNavigation } from '@react-navigation/native';



function EditSettings() {

    const navigation = useNavigation();

    const DrawerOpener = () => {
     return navigation.toggleDrawer();
    }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#e7edf9'}}>
        <ScrollView style={{flex:1,paddingTop:30,paddingLeft:10}} >
            <View style={{position:'relative',justifyContent:'center',alignItems:'center',height:50}}>
              <TouchableOpacity onPress={DrawerOpener}
               style={{borderColor:"#E0E0FF",borderRadius:5,borderWidth:2,position:'absolute',left:5,width:50,alignItems:'center',justifyContent:'center',}} >
              <Ionicons  style={{fontSize:38,}} name="menu"></Ionicons>
              </TouchableOpacity>
              <Text style={{fontSize:20,fontWeight:'700'}}>Settings</Text>
            </View>
            <View style={{alignItems:'center',paddingTop:50,paddingRight:10}}>
                <Image source={DefaultImage} style={{height:100,width:100,borderRadius:50}}/>
                <Text style={{fontSize:22,fontWeight:'700',marginTop:10}}>Edit Profile</Text>

                <TextInput placeholder='Your Name' style={{marginTop:10,borderRadius:5,height:50,backgroundColor:'#fff',width:'100%',paddingLeft:10,fontSize:16,marginTop:30}}/>
                <TextInput placeholder='example@gmail.com'  style={{marginTop:10,borderRadius:5,height:50,backgroundColor:'#fff',width:'100%',paddingLeft:10,fontSize:16,marginTop:20}}/>
                <TextInput placeholder='+94771234567'  style={{marginTop:10,borderRadius:5,height:50,backgroundColor:'#fff',width:'100%',paddingLeft:10,fontSize:16,marginTop:20}}/>

                <TouchableOpacity onPress={()=>navigation.navigate('Home')}
                   style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:'100%',borderRadius:6,marginTop:20}}>
                  <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Save Changes</Text>
                </TouchableOpacity>
                
                
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default EditSettings





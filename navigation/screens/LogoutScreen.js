
import * as React from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import LogoutImg from '../../assets/logout.png'

function LogoutScreen({ navigation }) {
  const handleLogout = () => {
  
    navigation.navigate('WelcomeScreen'); 
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{height:300,width:300}} source={LogoutImg}/>
      <Text style={{fontSize:18,fontWeight:400,color:'#444',marginBottom:20}}>Are you sure you want to log out?</Text>
      <TouchableOpacity onPress={handleLogout}
                   style={{height:50,backgroundColor:'#7167f5',alignItems:'center',justifyContent:'center',width:'70%',borderRadius:6,marginTop:10}}>
                  <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>Logout</Text>
    </TouchableOpacity>
    </View>
  );
}

export default LogoutScreen;

import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Image } from "react-native";


import Mainimg from '../../assets/imglog.png'
import { useState } from "react";


const StudentLogin = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    role:"student",
    indexNo: '',
    password: '',
    
  });

  const handleInputChange = (key, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:'#e7edf9'
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image source={Mainimg} style={{height:330,width:350}}/>
        </View>

        <View style={{ paddingBottom: 20, marginTop: 0 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>Login</Text>
        </View>

         <View style={{ marginTop: 20 }}>
        <Text>{JSON.stringify(formValues, null, 2)}</Text>
      </View> 

        {/* <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            alignItems : 'center'
          }}
        >
          <MaterialIcons
            name="alternate-email"
            style={{ marginRight: 5 }}
            color="#666"
            size={20}
          />
          <TextInput
            placeholder="Email ID"
            style={{ flex: 1, paddingBottom: 0 }}
            keyboardType="email-address"
          />
        </View> */}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            alignItems : 'center',
            marginTop:15
          }}
        >
          <MaterialIcons
            name="people"
            style={{ marginRight: 5 }}
            color="#666"
            size={20}
          />
         <TextInput
        placeholder="Index-No"
        style={{ flex: 1, paddingBottom: 0 }}
        onChangeText={(text) => handleInputChange("indexNo", text)}
      />
        </View>

        <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        alignItems: 'center',
      }}
    >
      <Ionicons
        name="ios-lock-closed-outline"
        style={{ marginRight: 5 }}
        color="#666"
        size={20}
      />
      <TextInput
        placeholder="Password"
        style={{ flex: 1, paddingBottom: 0 }}
        onChangeText={(text) => handleInputChange("password", text)}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={{ padding: 8 }}
      >
        <Ionicons
          name={showPassword ? 'ios-eye-off-outline' : 'ios-eye-outline'}
          color="#666"
          size={20}
        />
      </TouchableOpacity>
      
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={{ color: "#7167f5", fontWeight: "600",marginTop:-15,marginBottom:10,position:"absolute",right:10 }}>Forgot?</Text>
      </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('TabNavigator')}
          style={{
            backgroundColor: "#7167f5",
            height : 60,
            borderRadius: 15,
            justifyContent:'center',
            alignItems:'center',marginTop:20

          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          
          <Text style={{fontSize:14.3,fontWeight:'500',color:'#444'}}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("studentRegistrationScreen")}>
            <Text style={{ color: "#7167f5", fontWeight: "700" ,fontSize:15,marginTop:1  }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentLogin;

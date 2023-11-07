import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginImage from "../../assets/login2.svg";

import Mainimg from '../../assets/imglog.png'


const RegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor : '#e7edf9'
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
        <Image source={Mainimg} style={{height:220,width:300,overflow:'hidden'}}/>
        </View>

        <View style={{ paddingBottom: 20, marginTop: 0 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>Register</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            alignItems : 'center'
          }}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Name" style={{ flex: 1, paddingBottom: 0 }} />
        </View>

        <View
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
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            alignItems : 'center'
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
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            alignItems : 'center'
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            style={{ marginRight: 5 }}
            color="#666"
            size={20}
          />
          <TextInput
            placeholder="Confirm Password"
            style={{ flex: 1, paddingBottom: 0 }}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={() =>navigation.navigate('Succesfull')}
          style={{
            backgroundColor: "#7167f5",
            height : 60,
            borderRadius: 15,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 15,
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
            Register
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
          <Text style={{fontSize:14.5,fontWeight:'500',color:'#444'}}>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} >
            <Text style={{ color: "#7167f5", fontWeight: "700",fontSize:16,marginTop:-1 }}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

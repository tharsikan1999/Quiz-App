import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Mainimg from '../../assets/imglog.png'
import { useState } from "react";
import RNPickerSelect from 'react-native-picker-select'; 
import { StyleSheet } from "react-native";



const StudentRegistrationScreen = ({ navigation }) => {
  const [formValues, setFormValues] = useState({
    role:"student",
    name: '',
    indexNo: '',
    password: '',
    email: '',
    selectedField: null,
  });

  const handleInputChange = (key, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleValueChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      selectedField: value,
    }));
  };

  const placeholder = {
    label: 'Select your field',
    value: null,
    color: '#9EA0A4',
  };


  const [showPassword, setShowPassword] = useState(false);

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

        <View style={{ paddingBottom: 20, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>Register</Text>
        </View>
        <View style={{ marginTop: 20 }}>
        <Text>{JSON.stringify(formValues, null, 2)}</Text>
      </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
            alignItems : 'center',
            marginTop:7
          }}
        >
          <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
        placeholder="Name"
        style={{ flex: 1, paddingBottom: 0 }}
        onChangeText={(text) => handleInputChange("name", text)}
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
        <View style={styles.container}>
      <Ionicons
        name="book"
        style={styles.icon}
        color="#666"
        size={20}
      />
      <RNPickerSelect
        placeholder={placeholder}
        onValueChange={handleValueChange}
        items={[
          { label: 'Information Technology', value: 'it' },
          { label: 'Civil', value: 'civil' },
          { label: 'Mechanical', value: 'mechanical' },
          { label: 'Electrical', value: 'electrical' },
          { label: 'Polimer', value: 'polimer' },
          { label: 'Marine', value: 'marine' },
        ]}
        style={pickerSelectStyles}
        value={formValues.selectedField}
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
          <MaterialIcons
            name="alternate-email"
            style={{ marginRight: 5 }}
            color="#666"
            size={20}
          />
          <TextInput
        placeholder="Email-Id"
        style={{ flex: 1, paddingBottom: 0}}
        onChangeText={(text) => handleInputChange("email", text)}
        keyboardType="email-address"
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


        <TouchableOpacity
          onPress={() =>navigation.navigate('Succesfull')}
         
          style={{
            backgroundColor: "#7167f5",
            height : 60,
            borderRadius: 15,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 15,
            marginTop:5
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
          <TouchableOpacity onPress={() => navigation.navigate("StudentLogin")} >
            <Text style={{ color: "#7167f5", fontWeight: "700",fontSize:16,marginTop:-1 }}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default StudentRegistrationScreen;

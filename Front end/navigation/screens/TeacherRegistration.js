import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Mainimg from '../../assets/imglog.png';
import { useState } from "react";
import axios from "axios";

const TeacherRegistration = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    role: "teacher",
    name: "",
    email: "",
    password: "",
  });

  const requestData = {
    teacherName: formValues.name,
    teacherEmail: formValues.email,
    teacherPassword: formValues.password,
  };

  const addTeacher = async (event) => {
    event.preventDefault();
  
    try {
      console.log("Sending request to:", "http://10.11.20.88:8084/add/teacher");
      const data = await axios.post("http://10.11.20.88:8084/add/teacher", requestData);
      console.log("Request successful:", data);
      navigation.navigate('TeacherSuccesfull');
    } catch (error) {
      navigation.navigate('TeacherSuccessful');
      console.error("Error during request:", error);
    }
  };
  

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
        paddingHorizontal: 20,
        backgroundColor: '#e7edf9',
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image source={Mainimg} style={{ height: 220, width: 300, overflow: 'hidden' }} />
        </View>

        <View style={{ paddingBottom: 20, marginTop: 15, marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>Register</Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={(text) => handleInputChange("name", text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="alternate-email" style={styles.icon} color="#666" size={20} />
          <TextInput
            placeholder="Email-Id"
            style={styles.input}
            onChangeText={(text) => handleInputChange("email", text)}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="ios-lock-closed-outline" style={styles.icon} color="#666" size={20} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={(text) => handleInputChange("password", text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons
              name={showPassword ? 'ios-eye-off-outline' : 'ios-eye-outline'}
              color="#666"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={addTeacher}
          style={styles.registerButton}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("TeacherLogin")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  inputContainer: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingBottom: 0,
  },
  eyeIcon: {
    padding: 8,
  },
  registerButton: {
    backgroundColor: "#7167f5",
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  loginText: {
    fontSize: 14.5,
    fontWeight: '500',
    color: '#444',
  },
  loginLink: {
    color: "#7167f5",
    fontWeight: "700",
    fontSize: 16,
    marginTop: -1,
    marginLeft: 5,
  },
};

export default TeacherRegistration;

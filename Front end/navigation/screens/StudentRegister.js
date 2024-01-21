import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";
import axios from "axios";

import Mainimg from "../../assets/imglog.png";

const StudentRegister = ({ navigation }) => {
  const [formValues, setFormValues] = useState({
    role: "student",
    name: "",
    indexNo: "",
    password: "",
    email: "",
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
    label: "Select your field",
    value: null,
    color: "#9EA0A4",
  };

  const [showPassword, setShowPassword] = useState(false);

  const requestData = {
    userName : formValues.name,
    indexNo : formValues.indexNo,
    field : formValues.selectedField,
    userEmail : formValues.email,
    userPassword : formValues.password
  }



       async function addusers(event) {
        event.preventDefault();
        try {
          const data = await axios.post("http://10.11.20.88:8084/add/user", requestData);
          navigation.navigate("StudentSuccesfull");
        } catch (error) {
          console.error("Registration error", error);
        }
      }
      

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#e7edf9",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image source={Mainimg} style={{ height: 220, width: 300, overflow: "hidden" }} />
        </View>

        <View style={{ paddingBottom: 20, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26, color: "#333" }}>Register</Text>
        </View>
       {/*  <View style={{ marginTop: 20 }}>
          <Text>{JSON.stringify(formValues, null, 2)}</Text>
        </View>
 */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={(text) => handleInputChange("name", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="people" style={styles.icon} color="#666" size={20} />
          <TextInput
            placeholder="Index-No"
            style={styles.input}
            onChangeText={(text) => handleInputChange("indexNo", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="book" style={styles.icon} color="#666" size={20} />
          <Text style={styles.labels}>Select Your Field</Text>
          <RNPickerSelect
            placeholder={placeholder}
            onValueChange={handleValueChange}
            items={[
              { label: "Information Technology", value: "it" },
              { label: "Civil", value: "civil" },
              { label: "Mechanical", value: "mechanical" },
              { label: "Electrical", value: "electrical" },
              { label: "Polimer", value: "polimer" },
              { label: "Marine", value: "marine" },
            ]}
            style={pickerSelectStyles}
            value={formValues.selectedField}
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
              name={showPassword ? "ios-eye-off-outline" : "ios-eye-outline"}
              color="#666"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={addusers}
          style={{
            backgroundColor: "#7167f5",
            height: 60,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
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
          <Text style={{ fontSize: 14.5, fontWeight: "500", color: "#444" }}>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("StudentLogin")}>
            <Text style={{ color: "#7167f5", fontWeight: "700", fontSize: 16, marginTop: -1 }}>
              {" "}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: "center",
    marginTop: 7,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingBottom: 0,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  labels: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  eyeIcon: {
    padding: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});

export default StudentRegister;

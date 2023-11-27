import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

function DashboardScreen() {
  const [inputValue, setInputValue] = useState({
    fname: '',
    email: "",
    password: "",
    indexNo: "",
  });

  const handleInputChange = (key, value) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform any additional logic or actions here
    console.log("Form Values:", inputValue);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 }}>
      
    </View>
  );
}

export default DashboardScreen;

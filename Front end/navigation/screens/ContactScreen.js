import * as React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

import UserImg from '../../assets/girl.png';

export default function ContactScreen({ navigation }) {
  const DrawerOpener = () => {
    navigation.toggleDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={DrawerOpener} style={styles.menuIcon}>
            <Ionicons style={styles.menuIcon} name="menu" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Contact Us</Text>
        </View>

        <View style={styles.infoContainer}>
          {renderInfoItem("Phone", [
            { text: "Mobile: (+94) 771234567" },
            { text: "Hotline: (+94) 771234567" },
          ])}
          {renderInfoItem("Email", [
            { text: "info@gmail.com" },
            { text: "example@itum.lk" },
          ])}
          {renderInfoItem("Address", [
            { text: "ITUM" },
            { text: "Homagama" },
          ])}
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Get in Touch</Text>
          {renderInput("Name")}
          {renderInput("Email")}
          {renderInput("Message", true)}

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const renderInfoItem = (title, details) => (
  <View style={styles.infoItemContainer}>
    <View style={styles.infoHeader}>
      <Ionicons style={styles.infoIcon} name={getInfoIcon(title)} />
      <Text style={styles.infoTitle}>{title}</Text>
    </View>
    {details.map((item, index) => (
      <Text key={index} style={styles.infoText}>{item.text}</Text>
    ))}
  </View>
);

const renderInput = (placeholder, multiline = false) => (
  <TextInput
    style={multiline ? styles.multilineInput : styles.input}
    placeholder={placeholder}
    multiline={multiline}
  />
);

const getInfoIcon = (title) => {
  switch (title) {
    case "Phone":
      return "call";
    case "Email":
      return "mail-open";
    case "Address":
      return "home";
    default:
      return "information-circle";
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7edf9',
    paddingTop:30
  },
  scrollView: {
    flex: 1,
    paddingTop: 28,
    paddingLeft: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#7167f5',
  },
  menuIcon: {
    fontSize: 38,
    color: '#fff',
    position: 'absolute',
    left: 5,
    top:3
  },
  headerText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#fff',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 8,
    borderRadius: 15,
    marginBottom: 10,
  },
  infoItemContainer: {
    marginBottom: 15,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 18,
    color: '#7167f5',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 25,
    color: '#555',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 15,
    paddingBottom: 10,
    marginTop: 10,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    marginTop: 10,
    borderRadius: 5,
    height: 50,
    backgroundColor: '#f5f5f5',
    paddingLeft: 20,
    fontSize: 16,
    color: '#333',
  },
  multilineInput: {
    marginTop: 10,
    borderRadius: 5,
    height: 100,
    backgroundColor: '#f5f5f5',
    paddingLeft: 20,
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    height: 50,
    backgroundColor: '#7167f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

function TeacherForgotPassword() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("TeacherLogin")}>
          <Ionicons style={styles.backIcon} name="arrow-back-outline" />
        </TouchableOpacity>
        <Text style={styles.title}>Forgot Password</Text>

        <View style={styles.content}>
          <Text style={styles.subtitle}>Reset Email Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Enter Your Email Address'
            placeholderTextColor="#ccc"
          />

        <View style={styles.contact}>
          <Text style={styles.subTitle}>PhoneNumber</Text>
          <TextInput
            style={styles.textinput}
            placeholder='Enter Your PhoneNumber'
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>Back To?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("TeacherLogin")}>
              <Text style={styles.signInLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

export default TeacherForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7edf9',
  },
  card: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
    height: '50%', 
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  backIcon: {
    fontSize: 25,
    color: '#7167f5',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7167f5',
    marginTop: 20,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2f3030',
    marginBottom: 15,
    marginTop:15
  },
  textInput: {
    height: 50,
    borderColor: '#7167f5',
    borderWidth: 1,
    width: '100%',
    paddingLeft: 13,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    height: 50,
    backgroundColor: '#7167f5',
    width: '100%',
    marginBottom: 15,
    marginTop:10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 6,
    color: '#2f3030',
  },
  signInLink: {
    fontSize: 17,
    fontWeight: '600',
    color: '#7167f5',
  },
  contact:{
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
  },
  subTitle:{
    fontSize: 18,
    fontWeight: '600',
    color: '#2f3030',
    marginBottom: 15,
    marginTop:5,
  },
  textinput:{
    height: 50,
    borderColor: '#7167f5',
    borderWidth: 1,
    width: '100%',
    paddingLeft: 13,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  }
});

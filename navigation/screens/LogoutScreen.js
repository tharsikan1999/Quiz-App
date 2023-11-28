import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LogoutImg from '../../assets/logout.png';

function LogoutScreen({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={LogoutImg} />
      <Text style={styles.text}>Are you sure you want to log out?</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.cancelButton}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
    marginBottom: 20,
  },
  logoutButton: {
    height: 50,
    backgroundColor: '#7167f5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    borderRadius: 6,
    marginTop: 10,
  },
  cancelButton: {
    height: 50,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LogoutScreen;

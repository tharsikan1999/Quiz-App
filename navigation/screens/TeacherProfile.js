import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import DefaultImage from "../../assets/man.png";

function TeacherProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Teacher Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={DefaultImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.fullName}>Full Name</Text>
          <Text style={styles.username}>@Username</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Ionicons style={styles.icon} name="mail" />
          <View>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailText}>example@gmail.com</Text>
          </View>
        </View>
        
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('LogoutScreen')}
        style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7edf9',
    marginTop:50
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7167f5',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: 20,
  },
  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
    color: '#808080',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
    color: '#7167f5',
    marginRight: 20,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: '#2c3e50',
  },
  detailText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#808080',
  },
  logoutButton: {
    height: 50,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default TeacherProfile;

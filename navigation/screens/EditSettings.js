import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import DefaultImage from "../../assets/man.png";
import { useNavigation } from '@react-navigation/native';

function EditSettings() {
  const navigation = useNavigation();

  const DrawerOpener = () => {
    return navigation.toggleDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={DrawerOpener} style={styles.menuIcon}>
            <Ionicons style={styles.menuIcon} name="menu" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={DefaultImage} style={styles.image} />
            <Text style={styles.profileText}>Edit Profile</Text>
          </View>
          <TextInput placeholder="Your Name" style={styles.input} />
          <TextInput placeholder="example@gmail.com" style={styles.input} />
          <TextInput placeholder="+94771234567" style={styles.input} />

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7edf9',
    paddingTop:30,
  },
  scrollView: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#7167f5',
  },
  menuIcon: {
    fontSize: 30,
    color: '#fff',
    position: 'absolute',
    left: 5,
    top:4
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingRight: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileText: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
  },
  input: {
    marginTop: 20,
    borderRadius: 8,
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 16,
    color: '#2c3e50',
    width: '90%',
  },
  saveButton: {
    height: 50,
    backgroundColor: '#7167f5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditSettings;

import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from "react-native";
import { Ionicons } from 'react-native-vector-icons';
import Bug from '../../assets/bug.png';

export default function ReportScreen({ navigation }) {
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
          <Text style={styles.headerText}>Report Us</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={Bug} />
          </View>

          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.feedbackInput} placeholder="Write your Feedback Here" multiline={true} />

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.reportButton}>
            <Text style={styles.reportButtonText}>Report</Text>
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
    fontSize: 30,
    color: '#fff',
    position: 'absolute',
    left: 5,
    top:3
  },
  headerText: {
    fontSize: 19,
    fontWeight: '700',
    marginLeft: 10,
    color: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 8,
    marginTop: 5,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 250,
    width: 250,
    marginLeft: -30,
  },
  input: {
    marginTop: 20,
    borderRadius: 8,
    height: 45,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 16,
    color: '#2c3e50',
    width: '90%',
  },
  feedbackInput: {
    marginTop: 20,
    borderRadius: 8,
    height: 100,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 16,
    color: '#2c3e50',
    width: '90%',
    textAlignVertical: 'top',
  },
  reportButton: {
    height: 50,
    backgroundColor: '#7167f5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 10,
    marginTop: 15,
  },
  reportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

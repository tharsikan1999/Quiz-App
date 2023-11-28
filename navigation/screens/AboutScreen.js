import * as React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

import AboutImg from '../../assets/About.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7edf9',
    paddingTop: 55,
    paddingLeft:5
  },
  headerContainer: {
    lexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#7167f5',
  },
  menuButton: {
    borderRadius: 5,
    position: 'absolute',
    left: 5,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 38,
    color:"#fff"
  },
  headerText: {
    fontSize: 19,
    fontWeight: '700',
    color:"#fff"

  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  aboutImage: {
    height: 300,
    width: 300,
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
  },
});

export default function AboutScreen({ navigation }) {
  const DrawerOpener = () => {
    navigation.toggleDrawer();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={DrawerOpener} style={styles.menuButton}>
            <Ionicons style={styles.menuIcon} name="menu" />
          </TouchableOpacity>
          <Text style={styles.headerText}>About Us</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.aboutImage} source={AboutImg} />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Welcome to our app! We are dedicated to providing you with the best experience and functionality.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor risus non accumsan feugiat.
            Curabitur euismod velit et lorem tristique fermentum. Integer dignissim feugiat eros, nec pharetra turpis fermentum ac.
            Vestibulum a diam a libero vulputate cursus sit amet at dui. Quisque in metus eu lorem sodales eleifend.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import * as React from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import UserImg from '../../assets/girl.png';

import { createDrawerNavigator } from '@react-navigation/drawer';

import EditSettings from './EditSettings';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import ReportScreen from './ReportScreen.';
import LogoutScreen from './LogoutScreen';


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: '#7167f5',
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuIcon: {
    fontSize: 30,
    color: '#fff',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

function HomePage({ navigation }) {
  const DrawerOpener = () => {
    navigation.toggleDrawer();
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e7edf9' }}>
      <ScrollView style={{ flex: 1, paddingTop: 50, }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={DrawerOpener}>
            <Ionicons name="menu" style={styles.menuIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Welcome Back</Text>
          <Image style={styles.userImage} source={UserImg} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function TeacherHome() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#f0f4f8',
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: '#7167f5',
        inactiveTintColor: '#2c3e50',
        labelStyle: {
          fontSize: 18,
          fontWeight: '500',
          marginLeft: -10,
        },
        itemStyle: {
          marginVertical: 10,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          drawerLabel: 'Home',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
       <Drawer.Screen
          name="About Us"
          component={AboutScreen}
          options={{
            drawerLabel: 'About',
            headerShown:false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }}
        />
        
        <Drawer.Screen
          name="Contact Us"
          component={ContactScreen}
          options={{
            drawerLabel: 'Contact',
            headerShown:false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="call" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Edit"
          component={EditSettings}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
            headerShown:false
          }}
        />
        <Drawer.Screen
          name="Report"
          component={ReportScreen}
          options={{
            drawerLabel: 'Report',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bug" size={size} color={color} />
            ),
            headerShown:false
          }}
        />
       <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
          options={{
            drawerLabel: 'Logout',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-out" size={size} color={color} />
            ),
            headerShown:false
          }}
        />
    </Drawer.Navigator>
  );
}



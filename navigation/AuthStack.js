import * as React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../navigation/screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import Mainimg from '../assets/img.png'
import ForgotPassword from "./screens/ForgotPassword";
import DashboardScreen from './screens/DashboardScreen';
import Succesfull from "./screens/Succesfull";
import WelcomeScreen from "./WelcomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditSettings from "./screens/EditSettings";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import LogoutScreen from "./screens/LogoutScreen";
import studentRegistrationScreen from "./screens/StudentRegistrationScreen"
import StudentLogin from "./screens/StudentLogin";




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const TabNavigator = () => (
  <Tab.Navigator
  initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Dashboard') {
          iconName = focused ? 'apps' : 'apps-outline';
        }

        const iconColor = focused ? '#7167f5' : 'gray';

        return <Ionicons name={iconName} size={size} color={iconColor} />;
      },
      tabBarLabel: () => null, 
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const Main = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={Mainimg} style={{height:400,width:400}}/>
      </View>

      <View>
        <Text style={{  fontSize: 20, marginTop: 20,marginBottom:13,fontWeight:'600' }}>
        Teenage Drug Addiction Tracker
        </Text>
        <Text style={{fontSize:16,fontWeight:'500',color:"#808080" ,marginTop:5,marginBottom:10,marginLeft:23}} >
        Track and Manage Your Progress
        </Text>
        <Text>
          
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("WelcomeScreen")}
        style={{
          backgroundColor: "#7167f5",
          padding: 20,
          width: "90%",
          borderRadius: 15,
          flexDirection: "row",
          justifyContent:'center',
          alignItems:'center',
          marginBottom: 40,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
        Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const AuthStack = () => {
  return (
     <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        component={Main}
        name="Main"
        options={{ headerShown: false }}
      />

     <Stack.Screen
      component={TabNavigator}
      name="TabNavigator"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      <Stack.Screen
      component={HomeScreen}
      name="HomeScreen"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
       <Stack.Screen
      component={WelcomeScreen}
      name="WelcomeScreen"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      
      
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RegistrationScreen}
        name="Registration"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={StudentLogin}
        name="StudentLogin"
        options={{ headerShown: false }}
      />
      <Stack.Screen
      component={studentRegistrationScreen}
      name="studentRegistrationScreen"
      options={{
        headerShown: false,
        
      }}
      />


      <Stack.Screen
      component={ForgotPassword}
      name="Forgot"
      options={{headerShown:false}}
      />

      <Stack.Screen
      component={DashboardScreen}
      name="dashboard"
      options={{headerShown:false}}
      />

      <Stack.Screen
      component={Succesfull}
      name="Succesfull"
      options={{headerShown:false}}
      />
      
      <Stack.Screen
      component={ProfileScreen}
      name="ProfileScreen"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      <Stack.Screen
      component={EditSettings}
      name="EditSettings"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      <Stack.Screen
      component={LogoutScreen}
      name="LogoutScreen"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      
    </Stack.Navigator>
     </NavigationContainer>
  );
};


export default AuthStack;
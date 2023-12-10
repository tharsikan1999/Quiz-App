import * as React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeacherLogin from "./screens/TeacherLogin";
import TeacherRegistration from "./screens/TeacherRegistration";
import Mainimg from '../assets/img.png'
import StudentForgotPassword from "./screens/StudentForgotPassword";
import StudentDashboard from './screens/StudentDashboard';
import StudentSuccesfull from "./screens/StudentSuccesfull";
import WelcomeScreen from "./WelcomeScreen";
import StudentProfile from "./screens/StudentProfile";
import EditSettings from "./screens/EditSettings";
import { NavigationContainer } from "@react-navigation/native";
import StudentHome from "./screens/StudentHome";
import LogoutScreen from "./screens/LogoutScreen";
import StudentLogin from "./screens/StudentLogin";
import StudentRegister from "./screens/StudentRegister";
import MainQuiz from "./screens/MainQuiz";
import TeacherSuccesfull from "./screens/TeacherSuccesfull";
import TeacherHome from "./screens/TeacherHome";
import TeacherProfile from "./screens/TeacherProfile";
import TeacherDashboard from "./screens/TeacherDashboard";
import TeacherForgotPassword from "./screens/TeacherForgotPassword";



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
    <Tab.Screen name="Home" component={StudentHome} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={StudentProfile} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const TeacherTabNavigator = () => (
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
    <Tab.Screen name="Home" component={TeacherHome} options={{ headerShown: false }} />
    <Tab.Screen name="Dashboard" component={TeacherDashboard} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={TeacherProfile} options={{ headerShown: false }} />
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
      component={TeacherTabNavigator}
      name="TeacherTabNavigator"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      <Stack.Screen
      component={TeacherForgotPassword}
      name="TeacherForgotPassword"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      <Stack.Screen
      component={StudentHome}
      name="StudentHome"
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
      component={StudentRegister}
      name="StudentRegister"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
       <Stack.Screen
      component={MainQuiz}
      name="MainQuiz"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />

     <Stack.Screen
      component={TeacherSuccesfull}
      name="TeacherSuccesfull"
      options={{
        headerShown: false,
        animationTypeForReplace: 'pop', 
      }}
      />
      
      <Stack.Screen
        component={TeacherLogin}
        name="TeacherLogin"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={TeacherRegistration}
        name="TeacherRegistration"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={StudentLogin}
        name="StudentLogin"
        options={{ headerShown: false }}
      />
      


      <Stack.Screen
      component={StudentForgotPassword}
      name="StudentForgotPassword"
      options={{headerShown:false}}
      />

      <Stack.Screen
      component={StudentDashboard}
      name="StudentDashboard"
      options={{headerShown:false}}
      />

      <Stack.Screen
      component={StudentSuccesfull}
      name="StudentSuccesfull"
      options={{headerShown:false}}
      />
      
      <Stack.Screen
      component={StudentProfile}
      name="StudentProfile"
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
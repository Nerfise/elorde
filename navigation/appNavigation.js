import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import useAuth from '../hooks/useAuth';
import { AboutUsScreen, ContactScreen, ReservationScreen, SettingsScreen } from "../screens/BottomTabNav";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, MaterialIcons, EvilIcons, FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

export default function AppNavigation() {
  const {user} = useAuth();
  if(user){
     return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={HomeScreen}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                  <View style={{alignItems: "center", justifyContent: "center"}}>
              <Entypo name="home" size={30} color={focused ? "red": "#111"} />
              </View>
              )
            }
          }}
        />
        <Tab.Screen 
        name="About us" 
        component={AboutUsScreen}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                  <View style={{alignItems: "center", justifyContent: "center"}}>
              <FontAwesome5 name="user-friends" size={24} color={focused ? "red": "#111"} />
              </View>
              )
            }
          }}
        />
        <Tab.Screen 
        name="Conatct" 
        component={ContactScreen}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                  <View style={{alignItems: "center", justifyContent: "center"}}>
                <AntDesign name="contacts" size={24} color={focused ? "red": "#111"} />
              </View>
              )
            }
          }}
        />
        <Tab.Screen 
        name="Reservation" 
        component={ReservationScreen}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                  <View style={{alignItems: "center", justifyContent: "center"}}>
              <EvilIcons name="calendar" size={40} color={focused ? "red": "#111"} />
              </View>
              )
            }
          }}
        />
        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                  <View style={{alignItems: "center", justifyContent: "center"}}>
              <MaterialIcons name="settings" size={30} color={focused ? "red": "#111"} />
              </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
  }else{
     return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  }
}
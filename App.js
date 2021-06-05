import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import  Home  from './screens/Home'
import  Tabs  from './screens/Tabs'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import DrawerNavigator from './containers/DrawerMenu/DrawerScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     {/* <Stack.Navigator
      screenOptions = {{
        headerShown:false
      }}
      
    >    
        <Stack.Screen name="Home" component={Tabs} /> 
      </Stack.Navigator> */}
      
        <DrawerNavigator>
          screenOptions = {{
            headerShown: false
          }}

        </DrawerNavigator>
    </NavigationContainer>
  )
}
export default App;
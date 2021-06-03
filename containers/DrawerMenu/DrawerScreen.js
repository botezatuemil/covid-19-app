import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Profile from './Profile'
import TabNavigator from '../../screens/Tabs'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

const MenuButton = ({navigation}) => (
    <Stack.Navigator>  
        <Stack.Screen name={"Tabs"} component={TabNavigator}
            options={{
                headerShown:false
            }}
        />            
    </Stack.Navigator> 
)
            


const DrawerScreen = ({navigation}) => {
    return  ( 
        <Drawer.Navigator>   
            <Drawer.Screen name="Menu" component={MenuButton}/> 
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>   
    )
}

export default DrawerScreen
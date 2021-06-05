import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import TabNavigator from '../../screens/Tabs'
import {DrawerContent} from './DrawerContent'


const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

import Profile from './Profile'
import Share from './Share'
import About from './About'
import Settings from './Settings'

const MenuButton = ({navigation}) => (
    <Stack.Navigator>  
        <Stack.Screen name={"Tabs"} component={TabNavigator}
            options={{
                headerShown:false
            }}
        />            
    </Stack.Navigator> 
)
            


const DrawerScreen = () => {
    return  ( 
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>   
            <Drawer.Screen name="Menu" component={MenuButton}/> 
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Share" component={Share}/>
            <Drawer.Screen name="About" component={About}/>
            <Drawer.Screen name="Settings" component={Settings}/>
        </Drawer.Navigator>   
    )
}

export default DrawerScreen
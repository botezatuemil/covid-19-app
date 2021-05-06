import React, {useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import  Home  from './Home'
import  Local  from './Local'
import  Global  from './Global'
import  Map  from './Map'
import Svg, {
    Path
} from 'react-native-svg'
import { TouchableHighlight } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, onPress}) => {
    
    var isSelected = accessibilityState.selected
    
    if (isSelected) {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 0
                    }}
                >
                    <View style={{flex: 1, backgroundColor: 'white'}}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox='0 0 75 61'
                    >
                       <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'white'}
                        />

                    </Svg>
                    <View style={{flex: 1, backgroundColor: 'white'}}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top:-22.5,
                        justifyContent:'center',
                        alignItems:'center',
                        width: 50,
                        height: 50,
                        borderRadius:25,
                        backgroundColor: '#293077',
                        ...styles.shadow 
                    }}

                    onPress={onPress}
                    //tintColor='white'
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent:'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50, 
                    backgroundColor: 'white'
                }}
                activeOpacity={1}
                
                onPress={onPress}
                //tintColor='white'
            >
                {children} 
            </TouchableOpacity>
        )
    }

}

const Tabs = () => {
    const [check, setCheck] = React.useState(true);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            //activeColor='green'
            //inactiveColor='green'
            barStyle={{ borderTopLeftRadius: 80, borderTopRightRadius: 80}}
            tabBarOptions={{
                showLabel: false,
                //activeTintColor: 'red',
                style: {
                    borderTopWidth: 0,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor:'transparent',
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                
                options={{
                    
                    //tabBarLabel:() => {return null},
                    tabBarIcon: ({focused, activeTintColor}) => {
                        return (
                            
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode='contain'                   
                                style={{width: 27, height: 27, tintColor: focused ? 'white' : '#4F4F4F'}}
                                
                            />
                            /* tintColor: check ? 'white' : '#4F4F4F' */
                            /* onPress={() => setCheck(!check) */
                            
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Global"
                component={Global}
                options={{
                    //tabBarLabel:() => {return null},
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../assets/icons/global.png')}
                                resizeMode='contain'
                                style={{width: 27, height: 27, tintColor: focused ? 'white' : '#4F4F4F'}}
                                
                            />
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Local"
                component={Local}
                options={{
                    //tabBarLabel:() => {return null},
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../assets/icons/local2.png')}
                                resizeMode='contain'
                                style={{width: 27, height: 27, tintColor: focused ? 'white' : '#4F4F4F'}}
                                
                            />
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    //tabBarLabel:() => {return null},
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={require('../assets/icons/local.png')}
                                resizeMode='contain'
                                style={{width: 27, height: 27, tintColor: focused ? 'white' : '#4F4F4F'}}
                                
                            />
                        )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({   
    shadow: {
        shadowColor: '#293077',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default Tabs
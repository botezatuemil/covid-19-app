import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Text, Button, TouchableHighlight, Share } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import {
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';

import {
    OpenSans_400Regular
} from '@expo-google-fonts/open-sans'


export function DrawerContent(props) {

    let inputValue = "Share with friends"
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)
    const ShareMessage = () => {
        Share.share({message: inputValue})
        .then((result) => console.log(result))
        .catch((errorMsg) => console.log(errorMsg))
    }

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    let [fontsLoaded, error] = useFonts ({
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Nunito_400Regular,
        OpenSans_400Regular,
    })
    
    if (!fontsLoaded) {
        return <AppLoading/>
    }
    return (
        <View style={{}}>
            <Drawer.Section {...props}>
                <View>
                    <Image
                        source={require('../../assets/icons/coronaSplash.png')}
                        style={{
                            top: -22,
                            resizeMode:'contain',
                            width: 280,
                            height: 200,
                        }}
                    />

                    <Text
                        style={{
                            top: -20,
                            textAlign:'center',
                            fontFamily: 'Nunito_700Bold',
                            fontSize: 15,
                            color: '#736F6F',
                        }}
                    >
                        Hello!
                    </Text>
                    
                    <Text
                        style={{
                            top: -20,
                            textAlign:'center',
                            fontFamily: 'Nunito_700Bold',
                            fontSize: 18,
                        }}
                    >
                        Botezatu Emil
                    </Text>

                </View>
            </Drawer.Section>

            <Drawer.Section style={{top : 50}}>
                <Drawer.Item
                    icon={require('../../assets/icons/person_outline.png')}
                    label='Profile'
                    onPress={() => {props.navigation.navigate('Profile')}}
                >
                </Drawer.Item>

                <Drawer.Item
                    icon={require('../../assets/icons/share.png')}
                    label='Share'
                    onPress={ShareMessage}
                >
                  
                </Drawer.Item>

                <Drawer.Item
                    icon={require('../../assets/icons/info_outline.png')}
                    label='About'
                    onPress={() => {props.navigation.navigate('About')}}
                >
                  
                </Drawer.Item>

                <Drawer.Item
                    icon={require('../../assets/icons/help_outline.png')}
                    label='COVID-19 Info Center'
                    onPress={() => {props.navigation.navigate('About')}}
                >
                  
                </Drawer.Item> 

                <Drawer.Item>

                </Drawer.Item>

            </Drawer.Section>
            
            <Drawer.Section style={{top : 50}}>
                <Drawer.Item
                        icon={require('../../assets/icons/settings.png')}
                        label='Settings'
                        onPress={() => {props.navigation.navigate('Settings')}}
                    >
                </Drawer.Item>
            </Drawer.Section>

            <Drawer.Section style={{top : 50}}>
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={{flexDirection: 'row', paddingVertical: 12}}>
                        <View pointerEvents='none'>
                            <Switch style={{marginLeft: 15,}} value={isDarkTheme} color='#75E8F0'/>
                        </View>
                        <Text style={{fontFamily: 'Nunito_700Bold', color: '#575656', marginLeft: 12}}>Dark Theme</Text>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
            

            <Drawer.Section style={{top : 195, borderTopWidth: 1, borderTopColor: '#f4f4f4', borderBottomWidth: 0}}>
                <Drawer.Item
                        icon={require('../../assets/icons/open_in_new.png')}
                        label='Log out'
                        onPress={() => {props.navigation.navigate('About')}}
                    >
                </Drawer.Item>
            </Drawer.Section>
        </View>
    )
}
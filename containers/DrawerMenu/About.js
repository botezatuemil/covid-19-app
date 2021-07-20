import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';

import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Tabs from '../../screens/Tabs'

function Header(props) {
    return (
        <TouchableOpacity onPress={() => props.navigate(Tabs)}>
            <Image
                source={require('../../assets/icons/backButton.png')}
                style={{
                    resizeMode: 'contain',
                    width: '13%',
                    height: '13%',
                    top: 50,
                    marginLeft: 10
                }}
            />
            <Text
                style={{
                    color:'white',
                    top: 25,
                    marginLeft: 60,
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 18,
                }}
            >
                Home
            </Text>
        </TouchableOpacity>
    )
}

function Body() {
    return (
        <View>
            <Image
                source={require('../../assets/icons/iconAbout.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: 45,
                    height: 45,
                    marginLeft: 80,
                }}
            />

            <Text
                style={{
                    fontFamily: 'Nunito_700Bold',
                    color: 'white',
                    marginLeft: 150,
                    fontSize: 20,
                    top: 8,
                }}
            >
                COVID-19 APP
            </Text>

            <Text
                
                style={{
                    color:'white',
                    textAlign: 'center',
                    fontFamily: 'Nunito_400Regular',
                    top: 50,
                }}
            >
                This app was made by me, student at {'\n'} 
                Transilvania University of Brasov. {'\n'}
                I created this app to learn more about {'\n'}
                React Native and Python and also to {'\n'}
                bring all of the Covid statistics in one {'\n'}
                place. You can find more info for this {'\n'}
                app in my github profile
            </Text>
        </View>
    )
}

function Footer() {
    return (
        <View 
            style={{
                top: 50,
            }}
        >

                <Text
                    style={{
                        fontFamily: 'Nunito_700Bold',
                        color: 'white',
                        top: 90,
                        marginLeft: 60,
                        fontSize: 20,
                    }}
                >
                    Contacts
                </Text>

                <Image
                    source={require('../../assets/icons/FacebookLogo.png')}
                    style={{
                        position: 'absolute',
                        width: 26,
                        height: 26,
                        top: 140,
                        marginLeft: 60,
                    }}
                />
                
                <Text  onPress={ ()=>{ Linking.openURL('https://www.facebook.com/emil.botezatu.3/')}}
                    style={{
                        fontFamily: 'Nunito_700Bold',
                        color: 'white',
                        top: 112,
                        marginLeft: 100,
                        fontSize: 14,
                    }}
                >
                    Botezatu Emil
                </Text>
                
                <Image
                    source={require('../../assets/icons/InstagramLogo.png')}
                    style={{
                        position: 'absolute',
                        width: 26,
                        height: 26,
                        top: 180,
                        marginLeft: 60,
                    }}
                />
            
                <Text  onPress={ ()=>{ Linking.openURL('https://www.instagram.com/emilbotezatu/')}}
                    style={{
                        fontFamily: 'Nunito_700Bold',
                        color: 'white',
                        top: 130,
                        marginLeft: 100,
                        fontSize: 14,
                    }}
                >
                    emilbotezatu
                </Text>

                <Image
                    source={require('../../assets/icons/LinkedinLogo.png')}
                    style={{
                        position: 'absolute',
                        width: 26,
                        height: 26,
                        top: 220,
                        marginLeft: 60,
                    }}
                />
            
                <Text onPress={ ()=>{ Linking.openURL('https://www.linkedin.com/in/emil-botezatu-20a936194/')}}
                    style={{
                        fontFamily: 'Nunito_700Bold',
                        color: 'white',
                        top: 148,
                        marginLeft: 100,
                        fontSize: 14,
                    }}
                >
                    Botezatu Emil
                </Text>

            
            <Text
                style={{
                    color: 'white',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 20,
                    top: 180,
                    marginLeft: 60,
                }}
            >
                Developer
            </Text>
            
            <Image
                source={require('../../assets/icons/GithubLogo.png')}
                    style={{
                        position: 'absolute',
                        width: 26,
                        height: 26,
                        top: 320,
                        marginLeft: 60,
                }}
            />
            
            <Text onPress={ ()=>{ Linking.openURL('https://github.com/noSpaghettiCode')}}
                style={{
                    fontFamily: 'Nunito_700Bold',
                    color: 'white',
                    top: 195,
                    marginLeft: 100,
                    fontSize: 14,
                }}
            >
                noSpaghettiCode
            </Text>

        </View>
        
    )
}

const About = () =>  {

    const navigation = useNavigation();

    let [fontsLoaded, error] = useFonts ({
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Nunito_400Regular
    })
    
    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
       <View
        style={{
            flex: 1,
            backgroundColor: '#0D0D0D'
        }}
       >
           {Header(navigation)}
           {Body()}
           {Footer()}
       </View>
    )
}

export default About
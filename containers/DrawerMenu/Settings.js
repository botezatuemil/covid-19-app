import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, SwitchComponent } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';

import { useNavigation } from '@react-navigation/native';
import Tabs from '../../screens/Tabs'


function Header(props) {
    return (
        <TouchableOpacity onPress={() => props.navigate(Tabs)}>
            <Image
                source={require('../../assets/icons/backButton.png')}
                style={{
                    tintColor: '#F4B381',
                    resizeMode: 'contain',
                    width: '13%',
                    height: '13%',
                    top: 53,
                    marginLeft: 20
                }}
            />
            <Text
                style={{
                    color:'#F4B381',
                    top: 25,
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 24,
                    textAlign: 'center'
                }}
            >
                Settings
            </Text>
        </TouchableOpacity>
    )
}

const Account = (props) => {
    return (
        <View>
            <Image
                source={require('../../assets/icons/account.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    marginLeft: 40,
                    top: 5
                }}
            />

            <Text
                style={{
                    color:'#F4B381',
                    top: 0,
                    fontFamily: 'Nunito_700Bold',
                    marginLeft: 80,
                    fontSize: 18,
                }}
            >
                Account
            </Text>

            <Text
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 20,
                    marginLeft: 40,
                }}
            >
                Show account details
            </Text>
            
            
            <SwitchToggle
                switchOn={props.on1}
                onPress={() => props.setOn1(!props.on1)}
                circleColorOff='#C4C4C4'
                circleColorOn='white'
                backgroundColorOn='#F4B381'
                backgroundColorOff='#707070'
                containerStyle={{
                    width: 44,
                    height: 26,
                    borderRadius: 25,
                    padding: 3,
                    marginLeft: 320,
                    top:-4
                  }}
                circleStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                }}
                
            />
            
            <Text
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 20,
                    marginLeft: 40,
                }}
            >
                Show your health status
            </Text>
            
            
            <SwitchToggle
                switchOn={props.on2}
                onPress={() => props.setOn2(!props.on2)}
                circleColorOff='#C4C4C4'
                circleColorOn='white'
                backgroundColorOn='#F4B381'
                backgroundColorOff='#707070'
                containerStyle={{
                    width: 44,
                    height: 26,
                    borderRadius: 25,
                    padding: 3,
                    marginLeft: 320,
                    top:-4
                  }}
                circleStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                }}
                
            />

            <Text   
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 20,
                    marginLeft: 40,
                }}
            >
                Edit account
            </Text>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/icons/backButton.png')}
                    style={{
                        tintColor: '#F4B381',
                        resizeMode: 'contain',
                        width: 18,
                        height: 18,
                        marginLeft: 320,
                        transform:[{rotate: '180deg'}]
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const Notifications = (props) => {
    return (
        <View
            style={{
                top: 50,
            }}
        >
            <Image
                source={require('../../assets/icons/notifications.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    marginLeft: 40,
                    top: 5
                }}
            />

            <Text
                style={{
                    color:'#F4B381',
                    top: 0,
                    fontFamily: 'Nunito_700Bold',
                    marginLeft: 80,
                    fontSize: 18,
                }}
            >
                Notifications
            </Text>

            <Text
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 20,
                    marginLeft: 40,
                }}
            >
                General notifications
            </Text>
            
            
            <SwitchToggle
                switchOn={props.on3}
                onPress={() => props.setOn3(!props.on3)}
                circleColorOff='#C4C4C4'
                circleColorOn='white'
                backgroundColorOn='#F4B381'
                backgroundColorOff='#707070'
                containerStyle={{
                    width: 44,
                    height: 26,
                    borderRadius: 25,
                    padding: 3,
                    marginLeft: 320,
                    top:-4
                  }}
                circleStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                }}
                
            />
            
            <Text
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 20,
                    marginLeft: 40,
                }}
            >
                Notify when data change
            </Text>
            
            
            <SwitchToggle
                switchOn={props.on4}
                onPress={() => props.setOn4(!props.on4)}
                circleColorOff='#C4C4C4'
                circleColorOn='white'
                backgroundColorOn='#F4B381'
                backgroundColorOff='#707070'
                containerStyle={{
                    width: 44,
                    height: 26,
                    borderRadius: 25,
                    padding: 3,
                    marginLeft: 320,
                    top:-4
                  }}
                circleStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                }}
                
            />

        </View>
    )
}

function More() {
    return (
        <View 
            style={{
                top: 100,
            }}
        >
            <Image
                source={require('../../assets/icons/more.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    marginLeft: 40,
                    top: 5
                }}
            />

            <Text
                style={{
                    color:'#F4B381',
                    top: 0,
                    fontFamily: 'Nunito_700Bold',
                    marginLeft: 80,
                    fontSize: 18,
                }}
            >
                More
            </Text>
            
            <Image
                source={require('../../assets/icons/bug.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    marginLeft: 40,
                    top: 50
                }}
            />

            <Text
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 20,
                    marginLeft: 80,
                }}
            >
                Report a bug
            </Text>
          
            <Image
                source={require('../../assets/icons/star.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    marginLeft: 40,
                    top: 95
                }}
            />

            <Text
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 40,
                    marginLeft: 80,
                }}
            >
                Rate me
            </Text>
            
            
            <Image
                source={require('../../assets/icons/langugage.png')}
                style={{
                    position: 'absolute',
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    marginLeft: 40,
                    top: 140
                }}
            />

            <Text   
                style={{
                    color: '#707070',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 16,
                    top: 60,
                    marginLeft: 80,
                }}
            >
                Language
            </Text>

        </View>
    )
}
const Settings = () =>  {

    const navigation = useNavigation();
    const [on1, setOn1] = useState(true);
    const [on2, setOn2] = useState(false);
    const [on3, setOn3] = useState(true);
    const [on4, setOn4] = useState(true);
    

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
            <Account 
                on1={on1} setOn1={setOn1}
                on2={on2} setOn2={setOn2}
               
            />

            <Notifications
                on3={on3} setOn3={setOn3}
                on4={on4} setOn4={setOn4}
            />

            {More()}
        </View>
        
    )
}

export default Settings
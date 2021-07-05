import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';


function Header() {
    return (
        <View>
            <Image
                source={require('../../assets/icons/infobackground.png')}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height / 3.5,
                }}
            />
        </View>
    )
}

function Title() {
    return (
        <View>
            <Text
                style={{
                    color: 'white',
                    fontSize: 10,
                    fontFamily: 'Nunito_400Regular',
                    top: 20,
                    marginLeft: 40,
                }}
            >
                Provided by Facebook
            </Text>

            <View>
                <Image
                    source={require('../../assets/icons/FacebookLogo.png')}
                    style={{
                        height: 15,
                        width: 15,
                        marginLeft: 160,
                        top: 5
                    }}
                />

                <Image
                    source={require('../../assets/icons/InstagramLogo.png')}
                    style={{
                        position: 'absolute',
                        height: 15,
                        width: 15,
                        marginLeft: 180,
                        top: 5,
                    }}
                />

                <Image
                    source={require('../../assets/icons/WhatsappLogo.png')}
                    style={{
                        position: 'absolute',
                        height: 15,
                        width: 15,
                        marginLeft: 200,
                        top: 5,
                    }}
                />
                
                <Text
                    style={{
                        color: 'white',
                        fontSize: 22,
                        fontFamily: 'Nunito_700Bold',
                        marginLeft: 40,
                        top: 20,
                    }}
                >
                    Covid-19{'\n'}
                    Information Center
                </Text>
            </View>

        </View>   
    )
}

function Information() {
    return (
        <View>
            <View>
            <Image
                source={require('../../assets/icons/info1.png')}
                style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    marginLeft: 35,
                    top: 50,
                }}
            />

            <Text
                style={{
                    color:'white',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 12,
                    marginLeft: 100,
                    top: 45
                }}
            >
                COVID-19 vaccines were developed quickly and {'\n'} 
                effectively while maintaining the heighest safety {'\n'} 
                standard possible
            </Text>
            </View>

            <View>
            <Image
                source={require('../../assets/icons/info2.png')}
                style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    marginLeft: 35,
                    top: 70,
                }}
            />

            <Text
                style={{
                    color:'white',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 12,
                    marginLeft: 100,
                    top: 75
                }}
            >
                Vaccines are thourughly tested for safety before{'\n'}
                they’re made available to the public{'\n'}
            </Text>
            </View>

            <View>
            <Image
                source={require('../../assets/icons/info3.png')}
                style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    marginLeft: 35,
                    top: 90,
                }}
            />

            <Text
                style={{
                    color:'white',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 12,
                    marginLeft: 100,
                    top: 105
                }}
            >
                COVID-19 vaccines can’t give you COVID-19
            </Text>
            </View>

            <View>
            <Image
                source={require('../../assets/icons/info4.png')}
                style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    marginLeft: 35,
                    top: 145,
                }}
            />

            <Text
                style={{
                    color:'white',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 12,
                    marginLeft: 100,
                    top: 142
                }}
            >
                You won’t be able to make a COVID-19 vacccine {'\n'}
                at home. Vaccine development is complicated, {'\n'}
                technical process that can’t be done at home

            </Text>
            </View>

            <View>
            <Image
                source={require('../../assets/icons/info5.png')}
                style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    marginLeft: 35,
                    top: 168,
                }}
            />

            <Text
                style={{
                    color:'white',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 12,
                    marginLeft: 100,
                    top: 165
                }}
            >
                Vaccine trials involve a diverse range of volunteers {'\n'}
                This helps ensure the vaccine is safe and effective {'\n'}
                for everyone
            </Text>
            </View>

            <View>
            <Image
                source={require('../../assets/icons/info6.png')}
                style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    marginLeft: 35,
                    top: 190,
                }}
            />

            <Text
                style={{
                    color:'white',
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 12,
                    marginLeft: 100,
                    top: 195
                }}
            >
                COVID-19 vaccine trials are following safety and {'\n'}
                ethical standards
            </Text>
            </View>
        </View>
    )    
}

const InformationCenter = () => {

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
            {Header()}
            {Title()}
            {Information()}
        </View>
       
    )
}

export default InformationCenter
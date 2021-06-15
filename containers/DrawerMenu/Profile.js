import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback } from 'react-native'

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';

import { Dimensions } from 'react-native'

function Header() {


    return (
        <TouchableOpacity>
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
                Profile
            </Text>
        </TouchableOpacity>
    )
}

function BodyCard1() {

    return (
        <View>
            <View style={{position:'absolute'}}>
                <Image
                    source={require('../../assets/icons/backgroundProfile.png')}
                    style={{
                        top: -50,
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height / 5,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                />
            </View>

            <View
                style={{
                    position: 'absolute',
                    backgroundColor: '#2D2C2C',
                    width: 410,
                    height: 180,
                    top: 118,
                    borderBottomLeftRadius: 40,
                }}
            >
            </View>

            <View>
                <Text 
                    style={{
                        position: 'absolute',
                        color: 'white',
                        fontFamily: 'Nunito_700Bold',
                        top: 140,
                        fontSize: 15,
                        marginLeft: 50,
                    }}
                >
                    Name
                </Text>

                <Text
                    style={{
                        color:'white',
                        fontSize: 20,
                        fontFamily: 'Nunito_700Bold',
                        top: 160,
                        marginLeft: 50,

                    }}
                >
                    Botezatu Emil
                </Text>

                <Text 
                    style={{
                        position: 'absolute',
                        color: 'white',
                        fontFamily: 'Nunito_700Bold',
                        top: 210,
                        fontSize: 15,
                        marginLeft: 50,
                    }}
                >
                    EMAIL address
                </Text>

                <Text
                    style={{
                        color:'white',
                        fontSize: 20,
                        fontFamily: 'Nunito_700Bold',
                        top: 200,
                        marginLeft: 50,

                    }}
                >
                    btzemil@gmail.com
                </Text>

            </View>
        </View>
    )
}

function BodyCard2() {

    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#2D2C2C',
                width: 410,
                height: 180,
                top: 472,
                borderRadius: 40,
            }}
        >
        
            <View >
                <Image
                   source={require('../../assets/icons/profile.png')}
                   style={{
                       width: 23,
                       height: 23,
                       marginLeft: 50,
                       top: 10
                   }}
                />
                <TextInput
                    placeholder={'Gender'}
                    placeholderTextColor={'#707070'}
                    selectionColor={'white'}
                    color={'white'}
                    fontFamily={'Nunito_700Bold'}
                    style={{
                        top: -14,
                        marginLeft: 90,
                       fontFamily: 'Nunito_700Bold'
                    }}
                
                >
                    
                </TextInput>

                <View
                    style={{
                        backgroundColor: '#C4C4C4',
                        top: -10,
                        width: 320,
                        height: 0.5,
                        borderRadius: 1,
                        alignSelf: 'center'
                    }}
                >

                </View>
            </View>

            <View >
                <Image
                   source={require('../../assets/icons/height.png')}
                   style={{
                       width: 23,
                       height: 23,
                       marginLeft: 50,
                       top: 5
                   }}
                />
                <TextInput
                    placeholder={'Height'}
                    placeholderTextColor={'#707070'}
                    selectionColor={'white'}
                    color={'white'}
                    fontFamily={'Nunito_700Bold'}
                    style={{
                        top: -18,
                        marginLeft: 90,
                       fontFamily: 'Nunito_700Bold'
                    }}
                
                >
                    
                </TextInput>

                <View
                    style={{
                        backgroundColor: '#C4C4C4',
                        top: -13,
                        width: 320,
                        height: 0.5,
                        borderRadius: 1,
                        alignSelf: 'center'
                    }}
                >

                </View>
            </View>
            
            <View >
                <Image
                   source={require('../../assets/icons/weight.png')}
                   style={{
                       width: 23,
                       height: 23,
                       marginLeft: 50,
                       top: 2
                   }}
                />
                <TextInput
                    placeholder={'Weight'}
                    placeholderTextColor={'#707070'}
                    selectionColor={'white'}
                    color={'white'}
                    fontFamily={'Nunito_700Bold'}
                    style={{
                        top: -22,
                        marginLeft: 90,
                       fontFamily: 'Nunito_700Bold'
                    }}
                
                >
                    
                </TextInput>

                <View
                    style={{
                        backgroundColor: '#C4C4C4',
                        top: -16,
                        width: 320,
                        height: 0.5,
                        borderRadius: 1,
                        alignSelf: 'center'
                    }}
                >

                </View>
            </View>

            <View >
                <Image
                   source={require('../../assets/icons/birthday.png')}
                   style={{
                       width: 23,
                       height: 23,
                       marginLeft: 50,
                       top: -5
                   }}
                />
                <TextInput
                    placeholder={'Birthday'}
                    placeholderTextColor={'#707070'}
                    selectionColor={'white'}
                    color={'white'}
                    fontFamily={'Nunito_700Bold'}
                    style={{
                        top: -30,
                        marginLeft: 90,
                       fontFamily: 'Nunito_700Bold'
                    }}
                
                >
                    
                </TextInput>

            </View>

            
            
        </View>
    )
}

const BodyCard3 = (props) => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#2D2C2C',
                width: 410,
                height: 180,
                bottom:0,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
            }}
        >
            <Text
                style={{
                    fontFamily: 'Nunito_700Bold',
                    color: 'white',
                    fontSize: 20,
                    top: 20,
                    marginLeft: 50,
                }}
            >
                Activity level
            </Text>

            <TouchableWithoutFeedback onPress={() => props.setActivity1(!props.activity1)}> 
                <Image
                    source={props.activity1 ? require('../../assets/icons/activityState1Outline.png') : require('../../assets/icons/activityState1.png')}
                    style={{
                        position: 'absolute',
                        width: 50,
                        height: 50,
                        top: 70,
                        marginLeft: 65,
                    }}
                />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => props.setActivity2(!props.activity2)}> 
                <Image
                    source={props.activity2 ? require('../../assets/icons/activityState2Outline.png') : require('../../assets/icons/activityState2.png')}
                    style={{
                        position: 'absolute',
                        width: 50,
                        height: 50,
                        top: 70,
                        marginLeft: 140,
                    }}
                />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => props.setActivity3(!props.activity3)}> 
                <Image
                    source={props.activity3 ? require('../../assets/icons/activityState3Outline.png') : require('../../assets/icons/activityState3.png')}
                    style={{
                        position: 'absolute',
                        width: 50,
                        height: 50,
                        top: 70,
                        marginLeft: 215,
                    }}
                />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => props.setActivity4(!props.activity4)}> 
                <Image
                    source={props.activity4 ? require('../../assets/icons/activityState4Outline.png') : require('../../assets/icons/activityState4.png')}
                    style={{
                        position: 'absolute',
                        width: 50,
                        height: 50,
                        top: 70,
                        marginLeft: 290,
                    }}
                />
            </TouchableWithoutFeedback>

            <Text 
                style={{
                    fontFamily: 'Nunito_700Bold',
                    fontSize: 20,
                    top: 100,
                    textAlign: 'center',
                    color: '#00F87A'
                }}
            >
                Active
            </Text>
        </View>
    )
}

const Profile = ({navigation}) =>  {

    const [activity1, setActivity1] = React.useState(false)
    const [activity2, setActivity2] = React.useState(false)
    const [activity3, setActivity3] = React.useState(false)
    const [activity4, setActivity4] = React.useState(false)


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
                backgroundColor: '#181818'
            }}
        >
            {Header()}
            {BodyCard1()}
            {BodyCard2()}
            <BodyCard3 
                setActivity1={setActivity1} 
                activity1={activity1} 

                setActivity2={setActivity2} 
                activity2={activity2}

                setActivity3={setActivity3} 
                activity3={activity3}

                setActivity4={setActivity4} 
                activity4={activity4}
            />
        </View>
    )
}

export default Profile
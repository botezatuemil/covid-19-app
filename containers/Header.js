import React from 'react';
import {View, Image, TouchableOpacity, Text } from 'react-native';

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';

import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator();
import { createStackNavigator} from '@react-navigation/stack';

const Header = (props) => {

  let [fontsLoaded, error] = useFonts ({
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }
    return (
      <View style={{
        backgroundColor: props.backgroundColor, 
        height: '32%', 
        width: '100%', 
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,      
      }}    
      >
        
        <TouchableOpacity >
          <Image
            source={require('../assets/icons/hamburgerMenu2.png')}
            style={{
              top: 50,
              marginLeft: 250,
              width: '40%',
              height: '40%',    
              resizeMode: 'contain'
            }}  
        /> 
            </TouchableOpacity> 
        <Text style={{
          position: 'absolute',
          top: 45,
          marginLeft: 40,
          fontSize: 25,
          fontFamily: 'Nunito_700Bold',
          color: 'white',

        }}>
          CORONAVIRUS
        </Text>

        <Text style={{
          position: 'absolute',
          top: 85,
          marginLeft: 40,
          fontFamily: 'Nunito_400Regular',
          color: 'white',
        }}>
          SARS-CoV-2 (COVID-19)
        </Text>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{
              textAlignVertical: "center",
              top: 80,
              fontSize: 24,
              fontFamily: 'Nunito_700Bold',
              color: '#75E8F0',
            }}>
          
            {props.header}
          </Text>
        </View>
      </View> 
    )
}
export default Header
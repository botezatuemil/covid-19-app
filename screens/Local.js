import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import Header from '../containers/Header'
import CovidData from '../containers/LocalData'

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

const Local = () => {

    const [data, setData] = React.useState(CovidData)
    
    function renderData() { 

        const renderItem = ({item}) => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              top: 200,
            }}
          >
            <View style={{
              height: 70,
              width: 360,
              backgroundColor: item.backgroundColor,
              borderRadius: 15,
              marginBottom: 15,
            }}
            >
          
              <Text 
                style={{
                  marginTop: 18,
                  marginLeft: 40,
                  color: item.textColor,
                  position: 'absolute',
                  fontSize: 22,
                  fontFamily: 'Nunito_700Bold'
                }}
                
              >
                {item.judet}
              </Text>
    
              <Text
                  style={{
                    marginTop: 18,
                    marginLeft: 260,
                    color: item.textColor,
                    fontSize: 22,
                    fontFamily: 'Nunito_700Bold'
                  }}
                >
                {item.numberCases}
              </Text>
    
            </View>
          </TouchableOpacity>
        )
    
        return (
          <FlatList
              data={data}
              numColumns={1}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 300 }}
            />
        )
    }

    let [fontsLoaded, error] = useFonts ({
      Nunito_700Bold,
      Nunito_800ExtraBold
    })

    if (!fontsLoaded) {
      return <AppLoading/>
    }

    return (
        <SafeAreaView style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F2F5FC'
          }}
        >
           
            <Header backgroundColor='#293077'/>
            <Image
                source={require('../assets/icons/incidentaZile.png')}
                style={{
                    position: 'absolute',
                    top: 40,
                    width: '70%',
                    height: '70%',
                    resizeMode: 'contain'
                }}
            />
            {renderData()}
        </SafeAreaView>
    )
}

export default Local
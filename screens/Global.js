import React, {useState} from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import CovidData from '../containers/GlobalData';
import Header from '../containers/Header'

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

const Global = () => {
    const [data, setData] = React.useState(CovidData)
    
    function renderData() { 

        const renderItem = ({item}) => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              top: 30,
            }}
          >
            <View style={{
              height: 180,
              width: 350,
              backgroundColor: item.backgroundColor,
              borderRadius: 30,
              marginBottom: 30,
              
            }}
            >
          
              <Text 
                style={{
                  marginTop: 20,
                  marginLeft: 40,
                  color: item.textColor,
                  position: 'absolute',
                  fontSize: 22,
                  fontFamily: 'Nunito_800ExtraBold'
                }}
                
              >
                {item.country}
                
              </Text>
    
              <Text
                  style={{
                    position: 'absolute',
                    marginTop: 70,
                    marginLeft: 40,
                    color: item.textColor,
                    fontSize: 14,
                    fontFamily: 'Nunito_700Bold'
                  }}
                >
                Total cazuri: {item.cazuriTotale}
              </Text>
                  
              <Text
                  style={{
                    position: 'absolute',
                    marginTop: 100,
                    marginLeft: 40,
                    color: item.textColor,                  
                    fontSize: 14,
                    fontFamily: 'Nunito_700Bold'
                  }}
                >
                Total decese: {item.decese}
              </Text>

              <Text
                  style={{
                    position: 'absolute',
                    marginTop: 130,
                    marginLeft: 40,
                    color: item.textColor,
                    fontSize: 14,
                    fontFamily: 'Nunito_700Bold'
                  }}
                >
                Total vindecati: {item.vindecati}
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
              contentContainerStyle={{ paddingBottom: 250 }}
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
            {/* <Image
                source={require('../assets/icons/incidentaZile.png')}
                style={{
                    position: 'absolute',
                    top: 40,
                    width: '70%',
                    height: '70%',
                    resizeMode: 'contain'
                }}
            /> */}
            {renderData()}
        </SafeAreaView>
    )
}

export default Global

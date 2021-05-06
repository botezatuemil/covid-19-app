import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import CovidData from '../containers/GeneralData';
import Header from '../containers/Header'
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

//const Stack = createStackNavigator();
// const spawn = require('child_process').spawn;

// (async function() {
// const pythonProccess = spawn('python3', ['C:\\Emil\\Proiecte\\Python\\Proiecte_Python\\Automation\\Covid-19\\covid19.py'])

// pythonProccess.stdout.on('data', (data) => {

//   mystr = data.toString();
//   myjson = JSON.parse(mystr);
//   global.link = myjson
//   console.log(myjson);
// })
// });


const Home = ({navigation}) => {
 
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
          height:120,
          width: 310,
          backgroundColor: item.backgroundColor,
          borderRadius: 30,
          marginBottom: 30,
          
        }}
        >
      
          <Text 
            style={{
              marginTop: 24,
              marginLeft: 170,
              color: item.textColor,
              position: 'absolute',
              fontFamily: 'Nunito_700Bold'
            }}
            
          >
            {item.description}
          </Text>

          <Text
              style={{
                marginTop: 20,
                marginLeft: 20,
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
          contentContainerStyle={{ paddingBottom: 140 }}
          style={{    
          }}
        />
    )
  }
  
  let [fontsLoaded, error] = useFonts ({
    Nunito_700Bold,
  })
  if (!fontsLoaded) {
    return <AppLoading/>
  }
    return (   
     
      <SafeAreaView style={{
          flex: 1, 
          backgroundColor: '#f2f5fc',  
          alignItems: 'center',
          justifyContent: 'center' 
        }}
      >
        <Header backgroundColor='#293077' header='STAY HOME, STAY SAFE'/>
        {renderData()}  
      </SafeAreaView>  
    )
}

export default Home
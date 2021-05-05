import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import Header from '../containers/Header'
import CovidData from '../containers/LocalData'

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
                  marginTop: 20,
                  marginLeft: 40,
                  color: item.textColor,
                  fontWeight: '500',
                  position: 'absolute',
                  fontSize: 22
                  //fontFamily: 'Roboto'
                }}
                
              >
                {item.judet}
              </Text>
    
              <Text
                  style={{
                    marginTop: 20,
                    marginLeft: 260,
                    color: item.textColor,
                    fontWeight: '500',
                    fontSize: 22
                    //fontFamily: 'roboto'
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
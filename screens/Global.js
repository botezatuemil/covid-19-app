import React, {useState} from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import CovidData from '../containers/GlobalData';
import Header from '../containers/Header'

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
                  fontWeight: '700',
                  position: 'absolute',
                  fontSize: 22
                  //fontFamily: 'Roboto'
                }}
                
              >
                {item.country}
                
              </Text>
    
              <Text
                  style={{
                    position: 'absolute',
                    marginTop: 80,
                    marginLeft: 40,
                    color: item.textColor,
                    fontWeight: '700',
                    fontSize: 14
                    //fontFamily: 'roboto'
                  }}
                >
                Total cazuri: {item.cazuriTotale}
              </Text>
                  
              <Text
                  style={{
                    position: 'absolute',
                    marginTop: 110,
                    marginLeft: 40,
                    color: item.textColor,
                    fontWeight: '700',
                    fontSize: 14
                    //fontFamily: 'roboto'
                  }}
                >
                Total decese: {item.decese}
              </Text>

              <Text
                  style={{
                    position: 'absolute',
                    marginTop: 140,
                    marginLeft: 40,
                    color: item.textColor,
                    fontWeight: '700',
                    fontSize: 14
                    //fontFamily: 'roboto'
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

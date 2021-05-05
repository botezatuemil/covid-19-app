import React from 'react';
import {View, Image, TouchableOpacity } from 'react-native';


const Header = (props) => {
    return (
      <View style={{
        backgroundColor: props.backgroundColor, 
        height: '32%', 
        width: '100%', 
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,      
      }}    
      >
        <TouchableOpacity style={{marginLeft: 340}}>
          <Image
            source={require('../assets/icons/hamburgerMenu2.png')}
            style={{
            top: 35,
            width: '50%',
            height: '50%',
            resizeMode: 'contain'
          }}  
        /> 
        </TouchableOpacity> 
  
        <View style={{marginLeft: 45, position: 'absolute'}}>
          <Image
            source={require('../assets/icons/CoronaText.png')}
            style={{
              top: -20,
              width: 300,
              height: 300,
              resizeMode: 'contain'
            }}
          />
        </View>
      </View> 
    )
}
export default Header
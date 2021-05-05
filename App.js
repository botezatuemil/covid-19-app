import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import  Home  from './screens/Home'
import  Tabs  from './screens/Tabs'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableHighlight } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

// const DetailsScreen = () => {
//   return (
//     <View style={{
//         flex: 1,
//         //position: 'absolute', 
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Text>Details Screen</Text>
//     </View>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
        screenOptions = {{
          headerShown : false
          
        }}
      >
        
        <Stack.Screen name="Home" component={Tabs} /> 
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
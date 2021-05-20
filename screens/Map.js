import React from 'react';
import { View, Text, Dimensions, Image, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';

import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';

const Map = () => {
    
    state = {
        markers: [], 
        coordinates:  [
            {name : 'Spitalul Județean de Urgență', latitude: 45.648675410857834, longitude: 25.620545065944185, image: require('../assets/images/m1.jpg'), top: 15},
            {name : 'Spitalul Militar de Urgență Regina Maria', latitude: 45.64759539220101, longitude: 25.600085176980542, image: require('../assets/images/m2.jpg'), top: 7},
            {name : 'Spitalul de Boli Infecțioase', latitude: 45.659114519156255, longitude: 25.597853579193224, image: require('../assets/images/m3.jpg'), top: 15},
            {name : 'Spitalul Județean de Urgență Brașov Secția Oncologie', latitude: 45.65308527165374, longitude: 25.59763900248291, image: require('../assets/images/m4.jpg'), top: 7},
            {name : 'Spitalul MedLife Brasov', latitude: 45.66582935978916, longitude: 25.61273168421435, image: require('../assets/images/m5.png'), top: 15},
            {name : 'Ambulatoriul Spitalului Sfântul Constantin', latitude: 45.65131068183795, longitude: 25.605988646135778, image: require('../assets/images/m6.jpg'), top: 10},
            {name : 'Spitalul Sf. Constantin', latitude: 45.608437927699555, longitude: 25.653676130240544, image: require('../assets/images/m7.jpg'), top: 15},
            {name : 'Spitalul de Psihiatrie și Neurologie', latitude: 45.63835787323758, longitude: 25.584945314898473, image: require('../assets/images/m8.jpg'), top: 7},
            {name : 'Spitalul Astra', latitude: 45.65119886571463, longitude: 25.617346396991188, image: require('../assets/images/m9.jpg'), top: 15},
            {name : 'Spitalul Clinic de Copii', latitude: 45.65791821205075, longitude: 25.586962334809986, image: require('../assets/images/m10.jpg'), top: 15},
            {name : 'Spitalul Tractorul', latitude: 45.66705087492553, longitude: 25.607052830016123, image: require('../assets/images/m11.jpg'), top: 15},
            {name : 'Mârzescu Hospital', latitude: 45.65359959348493, longitude: 25.59624271453838, image: require('../assets/images/m12.jpg'), top: 15},
            {name : 'Spitalul Clinic de Obstetrică Ginecologie', latitude: 45.643759517688544, longitude: 25.58508472570615, image: require('../assets/images/m13.jpg'), top: 7},
            {name : 'Railway General Hospital Brasov', latitude: 45.64987976798102, longitude: 25.605684089896794, image: require('../assets/images/m14.jpg'), top: 15},
            {name : 'Spitalul Clinicco', latitude: 45.66007869917163, longitude: 25.58559970981091, image: require('../assets/images/m15.jpg'), top: 15},
            {name : 'Spitalul de Pneumoftiziologie', latitude: 45.64483961044746, longitude: 25.573068429928274, image: require('../assets/images/m16.jpg'), top: 15},
            {name : 'Hospital for Psychiatry and Neurology', latitude: 45.64891977293856, longitude: 25.592294503172877, image: require('../assets/images/m17.jpg'), top: 7},
            {name : 'Spitalul Vitalmed', latitude: 45.650599753465166, longitude: 25.588002968966485, image: require('../assets/images/m18.jpg'), top: 15},
            {name : 'Rețeaua de sănătate REGINA MARIA', latitude: 45.653239621057615, longitude: 25.60585575126505, image: require('../assets/images/m19.png'), top: 7},
            {name : 'Centrul de Diagnostic și Tratament Oncologic', latitude: 45.658039061529294, longitude: 25.575815011820357, image: require('../assets/images/m20.jpg'), top: 7},
        ]
    }

    function renderSearchBar() {
        return (
        <SafeAreaView>
            <View>
                <Image
                    source={require('../assets/icons/SearchBar.png')}
                    style={{ 
                       // position: 'absolute',
                        resizeMode: 'contain',
                        width: '80%',
                        height: '80%',
                        top: -120,
                        marginLeft: 20,
                    }}
                />
            </View>

            <View 
                style={{
                    position: 'absolute', 
                    marginLeft: 70,
                    top: 65,
                
                }}
            >
                <TextInput
                    placeholder='Search...'
                    placeholderTextColor='#828282'
                />
            </View>  
          
        </SafeAreaView>
        )
    }


    onCarouselItemChange = (index) => {
        let location = state.coordinates[index];
        _map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        })
        state.markers[index].showCallout()
    }

    onMarkerPressed = (location, index) => {
        _map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        })
        _carousel.snapToItem(index)
    }

    renderCarouselItem = ({item}) => 
        <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            height: 201,
            width: 245,
            borderRadius: 36,
            //padding: 24,
        }}
        > 
            <Image 
                source={item.image}
                style={{
                    height: 145,
                    width: 245,
                    borderTopLeftRadius: 36,
                    borderTopRightRadius: 36,
                }}
            >
            </Image>
            
            <Text style={{
                textAlign: 'center',
                alignSelf: 'center',
                top: item.top,
                fontFamily: 'Nunito_700Bold'
            }}>
                {item.name}
            </Text>
        </View>
    
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
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }}
        >
           
            <MapView
                provider={PROVIDER_GOOGLE}
                ref={map => _map = map}
                showsUserLocation={true}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                region={{
                    latitude: 45.6427,
                    longitude: 25.5887,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035
                }}
        >
            {
                state.coordinates.map((marker, index) => (
                    <Marker
                        key={marker.name}
                        ref={ref => state.markers[index] = ref}
                        onPress={() => onMarkerPressed(marker, index)}
                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}} 
                        name={marker.name}
                    >
                        <Callout>
                            <Text>{marker.name}</Text>
                        </Callout>
                    </Marker>
                ))
            }
        </MapView>
        {renderSearchBar()}
       

        <Carousel
            ref={(c) => { _carousel = c; }}
            data={state.coordinates}
            renderItem={renderCarouselItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={260}
            removeClippedSubviews={false}
            containerCustomStyle={{
                position: 'absolute',
                bottom: 0,
                marginBottom: 70,
            }}
            onSnapToItem={(index) => onCarouselItemChange(index)}
        />

       
       
        
       </View>
    )
}

export default Map
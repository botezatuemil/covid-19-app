import React from 'react'
import {View, Text} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'

const Map = () => {
    
    state = {
        coordinates:    [
            {name : 'Spitalul Clinic Judetean de Urgenta', latitude: 45.648675410857834, longitude: 25.620545065944185},
            {name : 'Spitalul Militar de Urgență Regina Maria', latitude: 45.64759539220101, longitude: 25.600085176980542},
            {name : 'Spitalul de Boli Infectioase', latitude: 45.659114519156255, longitude: 25.597853579193224},
            {name : 'Spitalul Clinic Județean de Urgență Brașov - Secția Oncologie', latitude: 45.65308527165374, longitude: 25.59763900248291},
            {name : 'Spitalul MedLife Brasov', latitude: 45.66582935978916, longitude: 25.61273168421435},
            {name : 'Ambulatoriul Spitalului Sfântul Constantin', latitude: 45.65131068183795, longitude: 25.605988646135778},
            {name : 'Spitalul Sf. Constantin', latitude: 45.608437927699555, longitude: 25.653676130240544},
            {name : 'Spitalul de Psihiatrie și Neurologie', latitude: 45.63835787323758, longitude: 25.584945314898473},
            {name : 'Spitalul Judetean de Urgenta', latitude: 45.648675410857834, longitude: 25.620545065944185},
            {name : 'Spitalul Astra', latitude: 45.65119886571463, longitude: 25.617346396991188},
            {name : 'Spitalul Clinic de Copii', latitude: 45.65791821205075, longitude: 25.586962334809986},
            {name : 'Spitalul Tractorul', latitude: 45.66705087492553, longitude: 25.607052830016123},
            {name : 'Mârzescu Hospital', latitude: 45.65359959348493, longitude: 25.59624271453838},
            {name : 'Spitalul Clinic de Obstetrică Ginecologie Doctor Ioan Aurel Sbârcea', latitude: 45.643759517688544, longitude: 25.58508472570615},
            {name : 'Railway General Hospital Brasov', latitude: 45.64987976798102, longitude: 25.605684089896794},
            {name : 'Spitalul Clinicco', latitude: 45.66007869917163, longitude: 25.58559970981091},
            {name : 'Spitalul de Pneumoftiziologie', latitude: 45.64483961044746, longitude: 25.573068429928274},
            {name : 'Hospital for Psychiatry and Neurology', latitude: 45.64891977293856, longitude: 25.592294503172877},
            {name : 'Spitalul Vitalmed', latitude: 45.650599753465166, longitude: 25.588002968966485},
            {name : 'Reteaua de sanatate REGINA MARIA', latitude: 45.653239621057615, longitude: 25.60585575126505},
            {name : 'Centrul de Diagnostic și Tratament Oncologic', latitude: 45.658039061529294, longitude: 25.575815011820357},
        ]
    }

    return (

       <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            style={{
                height: '100%',

            }}
            region={{
                latitude: 45.6427,
                longitude: 25.5887,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035
            }}
       >
           {
               state.coordinates.map(marker => (
                   <Marker
                        key={marker.name}
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
    )
}

export default Map
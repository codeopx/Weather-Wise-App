import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ImageBackground, StatusBar} from 'react-native'
import {Feather} from '@expo/vector-icons'
import IconText from "../components/IconText";
import moment from "moment/moment";


const City = ({weatherData}) => { 
    const {SafeAreaView,
           image,
           cityName,
           countryName,
           cityText,
           populationWrapper,
           populationText,
           riseSetWrapper,
           riseSetText,
           rowLayout} = styles


           const {name, country, population, sunrise, sunset} = weatherData
    return(
        <View style={SafeAreaView}>
        <ImageBackground 
        source={require('../../assets/city-background.jpg')} style={image}>

        <Text style={[cityName,cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper,rowLayout]}>
        <IconText iconName={'user'} 
          iconColor={'red'} 
          bodyText={`Population: ${population}`} 
          bodyTextStyles={populationText} 
        />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
           <IconText iconName={'sunrise'}
             iconColor={'white'} 
             bodyText={moment(sunrise).format('h:mm:ss a')} 
             bodyTextStyles={riseSetText}    
            />

           <IconText iconName={'sunset'} 
            iconColor={'white'} 
            bodyText={moment(sunset).format('h:mm:ss a')} 
            bodyTextStyles={riseSetText}   
           />
        </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.55,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})

export default City

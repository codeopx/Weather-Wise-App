import React from "react"
import { View, 
         Text, 
         StyleSheet, 
         FlatList, 
         StatusBar, 
         ImageBackground, 
        } from "react-native"
import {Feather} from '@expo/vector-icons'
import ListItem from "../components/ListItem"




const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => (
       <ListItem 
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max}        
        />
    )
    const {SafeAreaView, image } = styles
    return(
        <View style={SafeAreaView}>
        <ImageBackground 
        source={require('../../assets/upcoming-background.jpg')} 
        style={image}
        >
        <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
        />
        </ImageBackground>

        </View>

    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#434d67',    
    },
    image: {
        flex: 1,
    }
})

export default UpcomingWeather
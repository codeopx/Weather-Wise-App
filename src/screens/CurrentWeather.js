import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";


const CurrentWeather = ({weatherData}) => {
  const { SafeAreaView,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    messsge } = styles

  const {
    main: {temp, feels_like, temp_max, temp_min}, 
    weather
  } = weatherData

  const weatherCondition = weather[0].main
  return (
    <View style={[
      SafeAreaView, 
      {backgroundColor: WeatherType[weatherCondition].backgroundColor}
    ]}
    >
      <View style={container}>
        <Feather 
        name={WeatherType[weatherCondition].icon} 
        size={170} 
        color="white" 
        />

        <Text style={tempStyles}>{`${temp}° `}</Text>

        <Text style={feels}>{`Feels like ${feels_like}° `}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low:  ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={weather[0].description}
        messageTwo={WeatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={messsge}
      />
    </View>

  )
}



const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    color: 'white',
    fontSize: 30,
  },
  highLow: {
    color: 'white',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    color: 'white',
  },
  messsge: {
    fontSize: 30,
    color: 'white',
  }
})

export default CurrentWeather
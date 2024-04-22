import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';

const DetailsScreen = () =>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Details Screen</Text>
        </View>
    )
}
export default DetailsScreen;

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
    }
  });
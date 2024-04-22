import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Home Screen</Text>
            <Button 
            style={style.buttonStyle} 
            icon={() => (
                <Image
                    source={require('../assets/hand-sign.png')}
                    style={{width:25, height:25, borderRadius: 10}}
                />
            )}
            mode='contained' 
            onPress={()=>navigation.navigate('detail')}
            labelStyle={style.buttonStyle}
            buttonColor='pink'
            >
            Go to details
            </Button>
        </View>
    )
}
export default HomeScreen;

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    },
    buttonStyle:{
        fontWeight: "bold",
        color: "black"
    }
  });
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import { Icon } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const MyBottomTabNavigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='home' component={HomeScreen} 
            options={{
                title:'Home',
                tabBarIcon:({color}) => <Icon source={"home"} color='black' size={30} {...color}/>
            }}
            />
            <Tab.Screen name='detail' component={DetailsScreen}
            options={{
                title:'Detail',
                tabBarIcon:({color}) => <Icon source={"star"} color='black' size={30} {...color}/>
            }}
            />
        </Tab.Navigator>
    )
}
export default MyBottomTabNavigator;

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import CustomDrawerNavigation from '../components/CustomDrawerNavigation';
const Drawer = createDrawerNavigator();

const MyDrawer = () =>{
    return(
        <Drawer.Navigator
            initialRouteName='home'
            drawerContent={(props)=> <CustomDrawerNavigation {...props}/>}
        >
            <Drawer.Screen name='home' component={HomeScreen}
            options={{
                title:'Home'
            }}/>
            <Drawer.Screen name='detail' component={DetailsScreen} 
            options={{
                title:'Detail'
            }}
            />
        </Drawer.Navigator>
    )
}

export default MyDrawer;
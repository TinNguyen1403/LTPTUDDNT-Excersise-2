import { View } from 'react-native';
import { Drawer } from 'react-native-paper';

const CustomDrawerNavigation =({navigation})=>{
    return(
        <Drawer.Section style={{paddingTop: 40}}>
            <Drawer.Item
                label="Home"
                icon={"home"}
                onPress={()=> navigation.navigate("home")}
            />
            <Drawer.Item
                label="Detail"
                icon={"email"}
                onPress={()=> navigation.navigate("detail")}
            />
        </Drawer.Section>
    )
}
export default CustomDrawerNavigation;
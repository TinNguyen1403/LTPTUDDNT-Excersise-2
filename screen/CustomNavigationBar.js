import React from 'react'
import {getHeaderTitle} from '@react-navigation/elements'
import { Appbar, Menu } from 'react-native-paper';
const CustomNavigationBar=({
    navigation,
    route,
    options,
    back,
}) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const title = getHeaderTitle(options, route.name);
    return(
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack}/> : null}
            <Appbar.Content title={title}/> 
            {!back?(
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                        icon ="dots-vertical"
                        onPress={openMenu}
                        />
                    }>
                    <Menu.Item
                        onPress={()=>{
                            console.log("Option 1 was pressed")
                        }}
                        title="Home"
                    />
                    <Menu.Item
                        onPress={()=>{
                            navigation.navigate("detail")
                        }}
                        title="Details"
                    />
                    <Menu.Item
                        onPress={()=>{
                            console.log("Option 3 was pressed")
                        }}
                        title="Option 3"
                        disabled
                    />
                </Menu>
            ) : null}
        </Appbar.Header>
    )
}
export default CustomNavigationBar;
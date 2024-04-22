import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import MyStack from "./routers/MyStack";
import MyDrawer from "./routers/MyDrawer";
import MyBottomTabNavigator from "./routers/MyBottomTabNavigator";

export default function App(){
  return(
    <NavigationContainer>
      <PaperProvider>
        <MyStack/>
      </PaperProvider>
    </NavigationContainer>
  );
}
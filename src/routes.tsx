import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "./pages/HomeScreen"
import QuoteScreen from "./pages/QuoteScreen"

const Tab = createBottomTabNavigator()


const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Quote" component={QuoteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
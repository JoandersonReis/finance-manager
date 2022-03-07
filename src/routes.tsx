import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome"

import HomeScreen from "./pages/HomeScreen"
import QuoteScreen from "./pages/QuoteScreen"
import { COLORS } from "./config"

const Tab = createBottomTabNavigator()


const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: COLORS.background,
          tabBarInactiveBackgroundColor: COLORS.background,
          tabBarStyle: {
            borderTopColor: COLORS.darkGray,
          },
          tabBarItemStyle: {
          }
        }}
        >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarItemStyle: {
              borderRightColor: COLORS.darkGray,
              borderRightWidth: 0.5
            },
            tabBarIcon: ({focused, color, size}) => {
              return <Icon name="home" color={focused? COLORS.primary:color} size={size} />
            }
          }}
        />
        <Tab.Screen 
          name="Quote" 
          component={QuoteScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <Icon name="bitcoin" color={focused? COLORS.primary:color} size={size} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
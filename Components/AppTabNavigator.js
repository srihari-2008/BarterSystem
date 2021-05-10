import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs"
import HomeScreen from "../screens/HomeScreen"
import ExchangeScreen from "../screens/ExchangeScreen"

export const AppTabNavigator=createBottomTabNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarIcon:<Image
            source={require("../assets/Bartering.jpg")} style={{width:20,height:20}}
            />,
            tabBarLabel:"HomeScreen"
        }
    },

    ExchangeScreen:{
        screen:ExchangeScreen,
        navigationOptions:{
            tabBarIcon:<Image
            source={require("../assets/Bartering2.jpg")} style={{width:20,height:20}}
            />,
            tabBarLabel:"ExchangeScreen"
        }
    }

})
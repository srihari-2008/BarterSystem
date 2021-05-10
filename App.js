import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./Screens/WelcomeScreen"
import HomeScreen from "./Screens/HomeScreen"
import ExchangeScreen from "./Screens/ExchangeScreen"
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {AppTabNavigator} from "./Components/AppTabNavigator"
import {AppDrawerNavigator} from "./Components/AppDrawerNavigator"


export default class App extends React.Component{
  render(){
      return(    
          <View>
            <AppContainer/>
          </View>
      )
  }
}

const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})


const AppContainer =  createAppContainer(SwitchNavigator);
 
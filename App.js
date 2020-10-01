import React from 'react'
import {View,Text} from 'react-native'

import profileScreen from './Screens/ProfileScreen'
import DetailsScreen from './Screens/DetailsScreen'
import HomeScreen from './Screens/HomeScreen'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()

const App=()=>{
  return(
    <NavigationContainer>
      <AppStack.Navigator/>      
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Navigator />
    </NavigationContainer>
  )
}
export default App 
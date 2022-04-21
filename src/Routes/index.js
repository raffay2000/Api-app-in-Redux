import React from 'react'
import Home from '../Screens/Home'
import Posts from '../Screens/Posts'
import Comments from '../Screens/Comments';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const index = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default index
// const styles = StyleSheet.create({})
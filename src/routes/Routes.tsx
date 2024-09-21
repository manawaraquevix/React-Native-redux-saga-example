import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import SecondScreen from '../screens/SecondScreen';

const MyStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <MyStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <MyStack.Screen name="Home" component={Home} />

      <MyStack.Screen name="SecondScreen" component={SecondScreen} />
    </MyStack.Navigator>
  );
};

export default Routes;

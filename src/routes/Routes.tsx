import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { Icon } from '@rneui/themed';

// import styles from './styles';

// Containers
import Home from '../screens/home/Home';
import SecondScreen from '../screens/SecondScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
// import DrawerContent from '../components/DrawerContent';

const MyStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <MyStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <MyStack.Screen name="Home" component={Home} />

      <MyStack.Screen name="CustomModule" component={SecondScreen} />
    </MyStack.Navigator>
  );
};

export default Routes;

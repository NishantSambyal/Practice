import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from './Counter';
import ListView from './ListView';
import Login from './Login';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator name="loginStack">
        <Stack.Screen name="List" component={ListView} />

        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{title: 'Counter appliation'}}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

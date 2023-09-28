// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TP14 from './screens/TP14';
import TP13 from './screens/TP13';
import TP12 from './screens/TP12';
import TP11 from './screens/TP11';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TP11" component={TP11} />
        <Stack.Screen name="TP12" component={TP12} />
        <Stack.Screen name="TP13" component={TP13} />
        <Stack.Screen name="TP14" component={TP14} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

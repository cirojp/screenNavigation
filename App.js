import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';


import { createDrawerNavigator } from '@react-navigation/drawer';


// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="SecondScreen" component={SecondScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HomeScreen'>
      <Drawer.Screen name='HomeScreen' component={HomeScreen}/>
      <Drawer.Screen name='SecondScreen' component={SecondScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

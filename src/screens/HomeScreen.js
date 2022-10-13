import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import React from 'react';



export default function HomeScreen({ navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text >Home Screen</Text>
          <Button title="go to 2nd"
            onPress={() => navigation.navigate('SecondScreen', {
                num: 12,
                param: 'Esto me lo paso home',
              })} />
        </View>
      );
  }
  

import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import React from 'react';


export default function SecondScreen({ route , navigation}) {
    const [numero, setNumero] = React.useState(0);
    const { nro, param } = route.params;
    React.useEffect(() => {
      const aux = navigation.addListener('focus', () => {
          setNumero(numero => numero+1)
      });
      return aux;
}, [navigation]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text >Second Screen</Text>
          <Text > {numero} </Text>
          <Button title="go to Home"
            onPress={() => navigation.goBack()} />
        </View>
      );
  }
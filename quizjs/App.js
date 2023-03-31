import * as React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'#1d1d1d'}
        translucent={false}
        networkActivityIndicatorVisible={true}
        animated={true}
        showHideTransition={'slide'}
      />
      <Routes />
    </NavigationContainer>
  );
}

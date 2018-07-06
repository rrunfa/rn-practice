import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import CurrencyListScreen from './screens/CurrencyListScreen';
import ExchangeListScreen from './screens/ExchangeListScreen';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  CurrencyList: { screen: CurrencyListScreen },
  ExchangeList: { screen: ExchangeListScreen },
});

export default App;

AppRegistry.registerComponent('rn2', () => App);

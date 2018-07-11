import React from 'react';
import { AppRegistry } from 'react-native';
import CurrencyListScreen from './screens/CurrencyListScreen';
import ExchangeListScreen from './screens/ExchangeListScreen';
import PersonsListScreen from './screens/PersonsListScreen';
import PersonInfoScreen from './screens/PersonInfoScreen';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  CurrencyList: { screen: CurrencyListScreen },
  ExchangeList: { screen: ExchangeListScreen },
  PersonsList: { screen: PersonsListScreen },
  PersonInfo: { screen: PersonInfoScreen },
});

export default App;

AppRegistry.registerComponent('rn2', () => App);

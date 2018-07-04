import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppFooterContainer from './containers/AppFooterContainer';
import AppContentContainer from './containers/AppContentContainer';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {MODES} from './constants';
import {Container} from 'native-base';


const initialState = {
	mode: MODES.ARTICELS
};
const store = createStore(reducers, initialState);

const styles = StyleSheet.create({

});

const App = () => (
	<Provider store={store}>
		<Container>
			<AppContentContainer/>
			<AppFooterContainer/>
		</Container>
	</Provider>
);

export default App;
import React from 'react';
import {MODES} from '../constants';
import PropTypes from 'prop-types';
import {Content} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

function renderContent(mode) {
    if (mode === MODES.ARTICLES) {
        return <View><Text>ARTICLES</Text></View>;
    } else {
        return <View><Text>PODCASTS</Text></View>;
    }
}

const AppContent = ({mode = MODES.ARTICLES}) => (
    <Content contentContainerStyle={styles.container}>
        <View style={styles.content}>
            {renderContent(mode)}
        </View>
    </Content>
);

const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },
    content: {
        backgroundColor: 'red'
    }
});

export default AppContent;
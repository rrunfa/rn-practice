import React from 'react';
import { StyleSheet, View } from 'react-native';
import PersonInfo from '../components/PersonInfo';

class PersonsListScreen extends React.Component {

    constructor() {
        super()
        
    }

    static navigationOptions = {
        title: 'Person Info',
    };

    render() {
        const { navigation } = this.props;
        let person = navigation.getParam('person', '');
        return (
            <View style={styles.container}>
                <PersonInfo person={person}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PersonsListScreen;
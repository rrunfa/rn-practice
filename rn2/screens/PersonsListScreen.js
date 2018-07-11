import React from 'react';
import { StyleSheet, View } from 'react-native';
import PersonsList from '../components/PersonsList';

class PersonsListScreen extends React.Component {

    constructor() {
        super()
        
    }

    static navigationOptions = {
        title: 'Persons List',
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container} >
                <PersonsList onPressItem={(person) => {
                    navigation.navigate('PersonInfo', { person: person })
                }}/>
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

import React from 'react';
import CurrencyList from '../components/CurrencyList';
import { StyleSheet, View } from 'react-native';

class CurrencyListScreen extends React.Component {

    constructor() {
        super()
        
    }

    static navigationOptions = {
      title: 'Select to exchange',
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <CurrencyList onPressItem={(currencyName) => {
                    navigation.navigate('ExchangeList', { currencyName: currencyName })
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

export default CurrencyListScreen;
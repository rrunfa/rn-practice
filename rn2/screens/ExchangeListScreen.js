
import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import CurrencyService from '../services/CurrencyService';

class ExchangeListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Exchange rates for: ' + navigation.getParam('currencyName', ''),
        };
    };

    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        currency = navigation.getParam('currencyName', '');

        currencyService = new CurrencyService();
        currencyService.getExchangeRatesForCurrency(currency).then(json => {

            data = [];
            for (const [key, value] of Object.entries(json)) {
                data.push({
                    key: key,
                    currencyData: value
                });
            }

            this.setState(previousState => {
                return { 
                    data: data,
                    isLoading: false
                };
            });
        });
    }

    renderList() {
        if (this.state.isLoading) {
            return <ActivityIndicator style={styles.activityIndicator} size="large" color="#000" />
        } else {
            return <FlatList
            style={styles.list}
            data={this.state.data}
            renderItem={({item}) => 
                <Text style={styles.item}>Name: {item.key} Rate: {item.currencyData.rate}</Text>
            }
            />
        }
    }

    render() {
        const { navigation } = this.props;
        currency = navigation.getParam('currencyName', '');
        return (
            <View style={styles.container}>
                { this.renderList() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    list: {
    
    },
    activityIndicator: {
        paddingTop: 100
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

export default ExchangeListScreen;




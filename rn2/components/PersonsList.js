import React from 'react';
import { StyleSheet, ListView, Text, TouchableOpacity, View } from 'react-native';

import Database from '../services/Database';
import Auth from '../services/Auth';

class PersonsList extends React.Component {
    constructor() {
        super();

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            peopleDataSource: ds,
            loading: false
        }

        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);
    }

    componentDidMount() {
        Database.listenPersons((persons) => {
            this.setState({
                peopleDataSource: this.state.peopleDataSource.cloneWithRows(persons),
                loading: false
            });
        });

        Auth.signup('test@gmail.com', '123456');
    }

    pressRow(item) {
        this.props.onPressItem(item);
    }

    renderRow(item) {
        return (
            <TouchableOpacity onPress={() => {
                this.pressRow(item);
            }}>
                <View style={styles.li}>
                    <Text style={styles.liText}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView 
                    dataSource={this.state.peopleDataSource}
                    renderRow={this.renderRow}
                    enableEmptySections
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    li: {
        height: 60
    },
    liText: {
        fontSize: 20
    }
});

export default PersonsList;
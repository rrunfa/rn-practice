import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class PersonsList extends React.Component {
    
    constructor() {
        super();

        this.state = {
            data: []
        };

        this.renderPerson1.bind(this);
    }

    componentDidMount() {
        let person = this.props.person;
        let data = Object.getOwnPropertyNames(person).map(key => {
            let name = key.charAt(0).toUpperCase() + key.slice(1); 
            return {
                name: name,
                value: person[key],
                key: name
            }
        });

        this.setState({
            data: data
        });
    }

    renderPerson(person) {
        return (
            <View style={styles.card}>
                <Text style={styles.item}>Name: {person['name']}</Text>
                <Text style={styles.item}>Age: {person.age}</Text>
            </View>
        );
    }

    renderPerson1() {
        return <FlatList
            data={this.state.data}
            renderItem={({item}) =>
            <View style={{height: 50}}>
                <Text style={styles.item}>{item.name}: {item.value}</Text>
            </View>
            }
        />
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderPerson1()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    card: {
        backgroundColor: 'blue',
        paddingLeft: 50
    },
    item: {
        fontSize: 20,
        paddingLeft: 30
    }
});

export default PersonsList;
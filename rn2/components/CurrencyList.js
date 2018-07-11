import React from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native';

const CurrencyList = (props) => (
    <FlatList
        data={[
            {key: 'USD'},
            {key: 'RUB'},
            {key: 'EUR'},
            {key: 'Persons'},
        ]}
        renderItem={({item}) =>
            <TouchableOpacity onPress={() => {
                props.onPressItem(item.key);
            }}>
                <View>
                    <Text style={styles.item}>{item.key}</Text>
                </View>
            </TouchableOpacity>
        }
    />
);

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default CurrencyList;
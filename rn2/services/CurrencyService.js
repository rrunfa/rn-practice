import React from 'react';

class CurrencyService {
    getExchangeRatesForCurrency(currency) {
        return fetch('http://www.floatrates.com/daily/' + currency + '.json')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;

        })
        .catch((error) =>{
            console.error(error);
        });
    }
}

export default CurrencyService;
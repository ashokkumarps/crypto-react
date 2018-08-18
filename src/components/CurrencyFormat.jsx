import React from 'react';
import numeral from 'numeral';
const css = require('./CryptoCcyList.css');

const CurrencyFormat = (props) => {
    const { currency, price } = props;
    const data = price['price_'+currency.toLowerCase()];
    return (
            <div className={css.cryptoPrice}>{`${currency} ${numeral(data).format('0,0.00')}`}</div>
    )
}

CurrencyFormat.defaultProps = {
    currency: '',
    price: {}
}

export default CurrencyFormat;
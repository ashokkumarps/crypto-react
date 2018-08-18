import React from 'react';
const css = require('./CryptoCcyList.css');

const CurrencyList = (props) => {
    const { selectHandler } = props;
    const currencies = ['SGD', 'USD', 'GBP', 'AUD', 'VND'];
    return (
        <div className={css.cryptoCurrencyCodeList}>
            <select onChange={selectHandler}>
                {currencies.map((currency) => (<option>{currency}</option>))}
            </select>
        </div>
    )
}

CurrencyList.defaultProps = {
    selectHandler: () => {}
}
export default CurrencyList;
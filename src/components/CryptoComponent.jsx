import React from 'react';
import CurrencyFormat from './CurrencyFormat';
const css = require('./CryptoCcyList.css');


const CryptoComponent = (props) => {
    const {content, currency} = props;
    let classes;
    if(content.percent_change_24h > 0) {
        classes = `${css.cryptoChange} ${css.positivePercentage}`;
    } else {
        classes = `${css.cryptoChange} ${css.negativePercentage}`;
    }

    return (
        <div className={css.cryptoRow}>
            <div className={css.cryptoName}>{content.name}</div>
            <CurrencyFormat currency={currency} price={content}/>
            <div className={classes}>{`${content.percent_change_24h}%`}</div>
        </div>
    )
}

CryptoComponent.defaultProps = {
    content: {},
    currency: ''
}

export default CryptoComponent;
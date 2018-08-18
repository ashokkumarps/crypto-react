import { getCryptoData } from '../api/api';

export default function getData(currency) {
    return (dispatch, getState) => {
        getCryptoData(currency).then((response) => {
            dispatch({
                type: 'CURRENCY_CHANGE',
                data: {data: response, currency: currency}
            })
        })
    }
}
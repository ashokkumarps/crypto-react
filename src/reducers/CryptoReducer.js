const getInitialState = () => {
    return {
        data: {},
        currency: "SGD"
    };
}

const CryptoReducer = (state, action) => {
    state = state || getInitialState();
    if(action.type === 'CURRENCY_CHANGE') {
        const newState = Object.assign({}, state, {
            data: action.data.data,
            currency: action.data.currency
        });
        return newState;
    }
    return state;
}

export default CryptoReducer;
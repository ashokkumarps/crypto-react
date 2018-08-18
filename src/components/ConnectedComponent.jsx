import React from 'react';
import { connect } from 'react-redux';
import CryptoCcyList from './CryptoCcyList';
import getData from '../actions/actions';

const mapStateToProps = (state= {}) => {
    return {
        data: state.data,
        currency: state.currency
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectedHandler: (currency) => {
            dispatch(getData(currency))
        }
    }
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(CryptoCcyList)

export default ConnectedComponent
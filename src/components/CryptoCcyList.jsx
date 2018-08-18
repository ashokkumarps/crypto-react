import React from 'react';
import {getCryptoData} from '../api/api';
import CryptoComponent from './CryptoComponent';
import CurrencyList from './CurrencyList';

class CryptoCcyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            currency: ""
        };
    }

    componentDidMount() {
       getCryptoData("SGD").then((res) => {
            this.setState({
                data: res,
                currency: "SGD"
            })
        });
    }

    selectHandler(event) {
        const currency = event.currentTarget.value;
        this.props.selectedHandler(currency);
    }

    render() {
        const dataArray = Object.keys(this.props.data).length ? this.props.data : this.state.data;
        const currency = this.props.currency ? this.props.currency : this.state.currency;
        return (
            <div>
                <CurrencyList selectHandler={this.selectHandler.bind(this)}/>
                {dataArray.length > 0 ? dataArray.map((data) => (<CryptoComponent content={data} currency={currency}/>)): <CryptoComponent />}
            </div>
        );
    }
}

CryptoCcyList.defaultProps = {
    data: {},
    currency: "",
    selectedHandler: () => {}
}
export default CryptoCcyList;

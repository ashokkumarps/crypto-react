import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store';

import ConnectedComponent from './components/ConnectedComponent';

function initialise() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<Provider store={store}><ConnectedComponent /></Provider>, app);
}

initialise();
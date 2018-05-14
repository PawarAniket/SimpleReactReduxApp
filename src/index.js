import React from 'react';
import ReactDOM from 'react-dom';
import './Route/styles/route.css';
import Routing from '../src/Route/components/Routing';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './reducers';

let store = createStore(appReducer);

ReactDOM.render(
    // wrapping our App component inside Provider
    <Provider store={store}>
        <Routing/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

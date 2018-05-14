import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './reducers';

let store = createStore(appReducer);

ReactDOM.render(
    // wrapping our App component inside Provider
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

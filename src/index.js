import React from 'react';
import ReactDOM from 'react-dom';
import './Route/styles/route.css';
import Routing from '../src/Route/components/Routing';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './reducers';

let store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

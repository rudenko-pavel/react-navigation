import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import './index.scss'; 

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector("#root")
);
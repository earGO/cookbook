import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'materialize-css';
import 'material-icons';
import App from "./containers/App/App";
import { getRecipes, naviReducer } from "./containers/App/reducers";

const rootReducer = combineReducers({getRecipes,naviReducer});

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
import { naviReducer,userReduser,todosReduser,remindersReduser } from "./containers/App/reducers";
import { getOneRecipe,getCurrentRecipe } from "./containers/Recipe/reducers";
import { getActualDayReducer } from "./containers/Home/reducers";

const rootReducer = combineReducers({naviReducer,userReduser,todosReduser,remindersReduser,getOneRecipe,getCurrentRecipe,getActualDayReducer});

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

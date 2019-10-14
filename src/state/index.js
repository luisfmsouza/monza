import { createStore, compose } from "redux";
import { install } from "redux-loop";

import reducer from "./reducer";
import initialState from "./initialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, initialState, composeEnhancers(install()));

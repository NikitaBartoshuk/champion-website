import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {shopReducer} from "./reducers/shopReducer";
import {blogReducer} from './reducers/blogReducer'
import {defaultState} from "./reducers/shopReducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    shop: shopReducer,
})



export const store = createStore(rootReducer, applyMiddleware(thunk))
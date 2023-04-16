import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {shopReducer} from "./reducers/shopReducer";
import {blogReducer} from './reducers/blogReducer'
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    shop: shopReducer,
    user: userReducer,
})



export const store = createStore(rootReducer, applyMiddleware(thunk))
import { combineReducers, createStore } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
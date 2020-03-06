import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";

import firebase from "./../firebase/firebase";

import rootReducer from "./reducers/rootReducer";

// Load state to local storage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
    }
};

const persistedState = loadFromLocalStorage();

// Creating store
const middleware = applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(reduxFirestore(firebase), middleware));

// Save state to local storage
const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {
        console.log(error);
    }
};

store.subscribe(() => saveToLocalStorage(store.getState()));

// props for ReactReduxFirebaseProvider
export const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
};

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    attachAuthIsReady: true
};

export default store;

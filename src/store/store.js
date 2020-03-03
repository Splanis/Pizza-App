import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";

import firebase from "./../firebase/firebase";

import rootReducer from "./reducers/rootReducer";

const middleware = applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(reduxFirestore(firebase), middleware));

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

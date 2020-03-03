import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import { authReducer } from "./authReducer";
import { storesReducer } from "./storesReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    stores: storesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    cart: cartReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;

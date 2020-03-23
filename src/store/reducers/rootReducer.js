import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    cart: cartReducer
});

export default rootReducer;

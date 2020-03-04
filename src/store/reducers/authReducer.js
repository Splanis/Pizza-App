import * as actions from "../actions/actionTypes";

const initialState = {
    authError: null,
    loading: false
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.AUTH_SUCCES:
            return { ...state, authError: null };
        case actions.AUTH_FAILED:
            return { ...state, authError: payload };
        default:
            return state;
    }
};

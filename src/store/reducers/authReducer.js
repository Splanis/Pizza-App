import * as actions from "../actions/actionTypes";

const initialState = {
    authError: null,
    auth_token: null,
    profile: null
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.AUTH_SUCCESS:
            return { ...state, profile: payload.userProfile, auth_token: payload.auth_token, authError: null };
        case actions.AUTH_FAILED:
            return { ...state, authError: payload };
        case actions.LOGOUT:
            return { authError: null, auth_token: null, profile: null };
        default:
            return state;
    }
};

import * as actions from "../actions/actionTypes";

const initialState = {
    menuItems: [],
    loading: false,
    error: false
};

export const menuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.FETCH_STARTED:
            return { ...state, loading: true };
        case actions.FETCH_SUCCESS:
            return { ...state, menuItems: payload.menu, loading: false };
        case actions.FETCH_FAIL:
            return { ...state, error: true, loading: false };
        default:
            return state;
    }
};

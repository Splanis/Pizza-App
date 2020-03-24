import * as actions from "../actions/actionTypes";

export const fetchMenuAction = () => async dispatch => {
    try {
        dispatch({ type: actions.FETCH_STARTED });
        const response = await fetch("api/menu");
        const menu = await response.json();
        dispatch({ type: actions.FETCH_SUCCESS, payload: { menu } });
    } catch (error) {
        dispatch({ type: actions.FETCH_FAIL, payload: error });
    }
};

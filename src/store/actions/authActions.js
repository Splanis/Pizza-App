import * as actions from "../actions/actionTypes";

export const loginAction = credentials => async (dispatch, getState) => {
    try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const response = await fetch("api/user/login", {
            method: "POST",
            headers,
            body: JSON.stringify(credentials)
        });

        const data = await response.json();
        const auth_token = response.headers.get("auth_token");

        if (!auth_token) dispatch({ type: actions.AUTH_FAILED, payload: data });

        dispatch({ type: actions.AUTH_SUCCESS, payload: { userProfile: data.userProfile, auth_token } });
    } catch (error) {
        dispatch({ type: actions.AUTH_FAILED, payload: error.code });
    }
};

export const registerAction = credentials => async (dispatch, getState) => {
    try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const response = await fetch("api/user/register", {
            method: "POST",
            headers,
            body: JSON.stringify(credentials)
        });

        const data = await response.json();
        const auth_token = response.headers.get("auth_token");

        dispatch({ type: actions.AUTH_SUCCESS, payload: { userProfile: data.userProfile, auth_token } });
    } catch (error) {
        dispatch({ type: actions.AUTH_FAILED, payload: error.code });
    }
};

export const logoutAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: actions.LOGOUT });
    } catch (error) {
        console.log(error);
    }
};

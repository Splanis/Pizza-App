import * as actions from "../actions/actionTypes";

export const signInAction = ({ email, password }) => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch({ type: actions.AUTH_SUCCES });
    } catch (error) {
        dispatch({ type: actions.AUTH_FAILED, payload: error.code });
    }
};

export const signUpAction = credentials => async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
        await firestore
            .collection("users")
            .doc(response.user.uid)
            .set({
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                address: credentials.address,
                postal_code: credentials.postal_code,
                city: credentials.city,
                phone: credentials.phone
            });
        dispatch({ type: actions.AUTH_SUCCES });
    } catch (error) {
        dispatch({ type: actions.AUTH_FAILED, payload: error.code });
    }
};

export const signOutAction = () => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    try {
        await firebase.auth().signOut();
    } catch (error) {
        console.log(error);
    }
};

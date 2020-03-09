import * as actions from "../actions/actionTypes";

export const addToCartAction = ({ id, name, photo, ingredients, price }) => async (dispatch, getState) => {
    dispatch({ type: actions.ADD_TO_CART, item: { id, name, photo, ingredients, price } });
};

export const removeFromCartAction = id => async (dispatch, getState) => {
    dispatch({ type: actions.REMOVE_FROM_CARD, item: id });
};

export const incrementQuantityAction = id => async (dispatch, getState) => {
    dispatch({ type: actions.INCREMENT_QUANTITY, item: id });
};

export const decrementQuantityAction = id => async (dispatch, getState) => {
    dispatch({ type: actions.DECREMENT_QUANTITY, item: id });
};

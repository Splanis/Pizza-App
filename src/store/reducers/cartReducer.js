import * as actions from "../actions/actionTypes";

const initialState = { cartItems: [], totalCost: 0, quantity: 0, comments: "" };

export const cartReducer = (state = initialState, { type, item, comments }) => {
    let current_item;
    switch (type) {
        case actions.ADD_TO_CART:
            current_item = state.cartItems.find(product => product.id === item.id);
            if (current_item) {
                current_item.quantity++;
                return {
                    ...state,
                    quantity: state.cartItems.reduce((a, b) => a + b.quantity, 0),
                    totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, 0)
                };
            }
            state.cartItems = [...state.cartItems, { ...item, quantity: 1 }];
            return {
                ...state,
                quantity: state.cartItems.reduce((a, b) => a + b.quantity, 0),
                totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, 0)
            };
        case actions.REMOVE_FROM_CARD:
            state.cartItems = state.cartItems.filter(product => product.id !== item);
            return {
                ...state,
                quantity: state.cartItems.reduce((a, b) => a + b.quantity, 0),
                totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, 0)
            };
        case actions.INCREMENT_QUANTITY:
            state.cartItems.find(x => x.id === item).quantity++;
            return {
                ...state,
                quantity: state.cartItems.reduce((a, b) => a + b.quantity, 0),
                totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, 0)
            };
        case actions.DECREMENT_QUANTITY:
            current_item = state.cartItems.find(product => product.id === item);
            current_item.quantity--;
            if (current_item.quantity === 0) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(product => {
                        return product.id !== item;
                    }),
                    quantity: state.cartItems.reduce((a, b) => a + b.quantity, 0),
                    totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, 0)
                };
            }
            return {
                ...state,
                quantity: state.cartItems.reduce((a, b) => a + b.quantity, 0),
                totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, 0)
            };
        case actions.ADD_COMMENTS:
            return { ...state, comments: comments };
        default:
            return state;
    }
};

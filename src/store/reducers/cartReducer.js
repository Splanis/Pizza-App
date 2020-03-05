import * as actions from "../actions/actionTypes";

const initialState = { cartItems: [], totalCost: 0, quantity: 0 };

export const cartReducer = (state = initialState, { type, item }) => {
    switch (type) {
        case actions.ADD_TO_CART:
            if (state.cartItems.find(product => product.id === item.id)) {
                state.cartItems.find(product => product.id === item.id).quantity++;
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
                cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                quantity: state.cartItems.reduce((a, b) => a + b.quantity, 1),
                totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, Number(item.price))
            };
        case actions.REMOVE_FROM_CARD:
            return state;
        case actions.INCREMENT_QUANTITY:
            state.cartItems.find(x => x.id === item).quantity++;
            return {
                ...state,
                quantity: state.cartItems.reduce((a, b) => a + b.quantity, 0),
                totalCost: state.cartItems.reduce((a, b) => a + Number(b.price) * b.quantity, 0)
            };
        case actions.DECREMENT_QUANTITY:
            state.cartItems.find(x => x.id === item).quantity--;
            if (state.cartItems.find(x => x.id === item).quantity === 0) {
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
        default:
            return state;
    }
};

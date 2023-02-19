import data from '../data.json';

const products = Object.keys(data.products).map(key => ({id: key, ...data.products[key]}));

const INITIAL_STATE = {cart: [], products, discount: 0};

function rootReducer(state=INITIAL_STATE, action) {
    let payload = action.payload;
    switch (action.type) {
        case 'ADD_CART':
            return {cart: payload, products, discount: state.discount};
        case 'REMOVE_CART':
            return {cart: payload, products, discount: state.discount};
        case 'ADD_COUNT':
            return {cart: payload, products, discount: state.discount};
        case 'SUB_COUNT':
            return {cart: payload, products, discount: state.discount};
        case 'DISCOUNT':
            return {...state, discount: action.discount};
        default:
            return state;
    }
}

export default rootReducer;
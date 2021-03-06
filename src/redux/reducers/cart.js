import { TOGGLE_ITEM_IN_CART } from '../action-types'

const initialState = {
    cart: []
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_CART: {

            const updatedCart = state.cart.filter((el) => el.id !== action.payload.id)


            if (updatedCart.length === state.cart.length) {
                updatedCart.push(action.payload)

            }
            return { ...state, cart: updatedCart }
        }
        default: {
            return state
        }
    }
}

export default cart;
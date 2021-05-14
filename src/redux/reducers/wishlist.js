import { TOGGLE_ITEM_IN_WISHLIST } from '../action-types';


const initialState = {
    wishlist: []
};

const wishlist = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_WISHLIST: {

            const updetedWishlist = state.wishlist.filter((el) => el.id !== action.payload.id)


            if (updetedWishlist.length === state.wishlist.length) {
                updetedWishlist.push(action.payload)

            }

            return { ...state, wishlist: updetedWishlist }
        }
        default: {
            return state
        }
    }
}

export default wishlist;
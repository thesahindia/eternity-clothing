const INITIAL_STATE = {
    isCartHidden: true,
    cartItems: [],
}
 const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "TOGGLE_CART_HIDDEN":
        return {
            ...state,
            isCartHidden: !state.isCartHidden
        }
        case "ADD_ITEM":
            return {
                ...state, cartItems: [...state.cartItems, action.payload]
            }
        default :
        return state
    }
}
export default cartReducer
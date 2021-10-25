import {createSelector} from "reselect"

const selectCart = (state) => state.cart;

const selectCartItems = createSelector(
    [selectCart], 
    (cart) => {
       return cart.cartItems
    }
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        if (cartItems.length) {
            return cartItems
              .map(({ quantity }) =>  quantity)
              .reduce((acc, currnt) => acc + currnt);
          }
          return 0;
    }
)


export const selectCartItemsSubTotal = createSelector(
    [selectCartItems], 
    (cartItems) => {
        if (cartItems.length) {
            return cartItems
              .map(
                ({ price, quantity }) =>
                  (price.whole + "." + price.fraction) * quantity
              )
              .reduce((acc, currnt) => acc + currnt)
              .toFixed(2);
          }
    }
)
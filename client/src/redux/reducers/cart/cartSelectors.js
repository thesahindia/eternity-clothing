import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectIsCartHidden = createSelector([selectCart], (cart) => {
  return cart.isCartHidden;
});

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    if (cartItems.length) {
      return cartItems
        .map(({ quantity }) => quantity)
        .reduce((acc, currnt) => acc + currnt);
    }
    return 0;
  }
);

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
);
export const selectCartItemsDiscount = createSelector(
  [selectCartItemsSubTotal],
  (subTotal) => {
    return subTotal < 333 ? ((30 / 100) * subTotal).toFixed(2) : 100;
  }
);

export const selectCartItemsDeliveryCharges = createSelector(
  [selectCartItemsSubTotal],
  (subTotal) => {
    return subTotal > 300 ? 0 : 5;
  }
);

export const selectAmountToPay = createSelector(
  [
    selectCartItemsSubTotal,
    selectCartItemsDiscount,
    selectCartItemsDeliveryCharges,
  ],
  (subTotal, discount, deliveryCharges) => {
    return (subTotal - discount + deliveryCharges).toFixed(2);
  }
);

export const selectSavedAmount =
  createSelector([selectCartItemsDiscount, selectCartItemsDeliveryCharges], (discount, deliveryCharges) => {
    return (discount - deliveryCharges).toFixed(2);
  });

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};

export const toggleCartHidden = () => {
  return {
    type: "TOGGLE_CART_HIDDEN",
  };
};

export const addToCart = (productDetails) => {
  return {
    type: "ADD_ITEM",
    payload: productDetails
  }
}


export const decreaseCartItemQuantity = (id) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: id
  }
}

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id
  }
}
export const addItemToCart = (cartItems, cartItemToAdd) => {

  const existingItem =  cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if(existingItem) {
      return cartItems.map(cartItem => {
          return cartItem.id === cartItemToAdd.id && cartItem.quantity<10? {...cartItem, quantity: cartItem.quantity + 1}: cartItem
      })
  }
return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const decreaseItemQuantity = (cartItems, id) => {
  const existingItem = cartItems.find(cartItem=>cartItem.id===id)
  if(existingItem.quantity===1) {
    return cartItems.filter(cartItem=> cartItem.id!==id)
  }
  return cartItems.map(cartItem=> cartItem.id===id? {...cartItem, quantity: cartItem.quantity-1}: cartItem)
}

import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../customButton/CustomButton";
import "./cartDropdown.scss";
const CartDropdown = () => {
  const { isCartHidden, cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div
      style={{ visibility: isCartHidden ? " " : "hidden" }}
      className="cart-dropdown"
    >
      {cartItems.length ? (
        <div className="cart-items">
            {cartItems.map((cartItem) => console.log(cartItem))}
          <CustomButton btn="secondary" width="100%">
            Checkout Now
          </CustomButton>
        </div>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </div>
  );
};
export default CartDropdown;

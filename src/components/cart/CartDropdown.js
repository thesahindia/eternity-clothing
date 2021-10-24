import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../customButton/CustomButton";
import { ReactComponent as CheckoutIcon } from "../../assets/images/checkout.svg";
import { ReactComponent as SadFace } from "../../assets/images/sadFace.svg";

import "./cartDropdown.scss";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const { isCartHidden, cartItems } = useSelector((state) => state.cart);

  const totalPrice = () => {
    if (cartItems.length) {
      return cartItems
        .map(
          ({ price, quantity }) =>
            (price.whole + "." + price.fraction) * quantity
        )
        .reduce((acc, currnt) => acc + currnt)
        .toFixed(2);
    }
  };

  return (
    <div
      style={{ visibility: isCartHidden ? "hidden" : ""}}
      className="cart-dropdown"
    >
      {cartItems.length ? (
        <div>
          <div className="head">
            <span className="left">Shopping Cart</span>
            <span className="right">Price</span>
          </div>
          <div className="cart-items">
            {cartItems.map(({ id, img, ...otherProps }) => (
              <CartItem key={id} img={img[0]} {...otherProps} />
            ))}
            <hr className="cart-hr" />
            <div className="bottom">
              <span className="total">Total:</span>
              <span className="symbol">$</span>
              <span className="price">{totalPrice()}</span>
            </div>
            <CustomButton
              btn="secondary"
              width="100%"
              height="45px"
              fontSize="large"
            >
              <i style={{ padding: "4px 4px 0 0" }}>
                <CheckoutIcon />
              </i>
              Checkout Now
            </CustomButton>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <i className="sad-face">
            <SadFace />
          </i>
        </div>
      )}
    </div>
  );
};
export default CartDropdown;

import React from "react";
import { ReactComponent as ShoppingBag } from "../../assets/images/bag.svg";
import "./cartIcon.scss";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/actions";

const CartIcon = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingBag />
      <span className="item-count"></span>
    </div>
  );
};
export default CartIcon;
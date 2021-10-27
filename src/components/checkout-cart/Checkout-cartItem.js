import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCartItemQuantity, removeFromCart } from "../../redux/actions";
import "./checkout-cartItem.scss";
import {ReactComponent as BinIcon} from "../../assets/images/bin.svg"

export default function CheckoutCartItem(cartItem) {
  const {
    id,
    name,
    img,
    price,
    selectedSize,
    quantity,
  } = cartItem
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(addToCart(cartItem));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseCartItemQuantity(id))
  }
  const remove = () => {
    dispatch(removeFromCart(id))
  }
  return (
    <div>
      <div className="item_container">
        <div
          className="img"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + `images/${img.url}`
            })`,
          }}
        ></div>
        <div className="item_info">
          <div className="info_head">
            <div className="name">{name}</div>
            <div className="price">
              <span className="symbol">$</span>
              <span className="whole">{price.whole}</span>
              <span className="fraction">{price.fraction}</span>
            </div>
          </div>

          <div className="qty">
            Qty:
            <div style={{ marginLeft: "6px" }} onClick={decreaseQuantity}>&#10094;</div>
            <span className="qty_val">{quantity}</span>
            <div onClick={increaseQuantity}>&#10095;</div>
          </div>
          <div className="size">
            Size: <span style={{ color: "grey" }}>{selectedSize}</span>
          </div>
          <div className="remove" onClick={remove}><BinIcon /></div>
        </div>
      </div>
    </div>
  );
}

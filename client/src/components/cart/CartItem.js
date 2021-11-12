import React from "react";
import "./cartItem.scss";
export default function CartItem({ name, img, price, selectedSize, quantity }) {
  return (
    <div>
      <div className="container">
        <div
          className="img"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + `/images/${img.url}`
            })`,
          }}
        ></div>
        <div className="item-info">
          <div className="info-head">
            <div className="name">{name}</div>
            <div className="price">
              <span className="symbol">$</span>
              <span className="whole">{price.whole}</span>
              <span className="fraction">{price.fraction}</span>
            </div>
          </div>
          <div className="qty">
            Qty: <span style={{ color: "grey" }}>{quantity}</span>
          </div>
          <div className="size">
            Size: <span style={{ color: "grey" }}>{selectedSize}</span>
          </div>
        </div>
      </div>
      <hr className="cart-hr" />
    </div>
  );
}

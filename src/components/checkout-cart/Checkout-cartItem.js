import React from 'react'
import "./checkout-cartItem.scss"

export default function CheckoutCartItem({ name, img, price, selectedSize, quantity }) {
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
        >
        </div>
        <div className="item_info">
          <div className="info_head">
            <div className="name">{name}</div>
            <div className="price">  <span className="symbol">$</span>
            <span className="whole">{price.whole}</span>
            <span className="fraction">{price.fraction}</span></div>
          </div>
  
          <div className="qty">Qty:
          <div style={{marginLeft: "6px"}}>&#10094;</div><span className="qty_val">{quantity}</span><div>&#10095;</div></div>
          <div className="size">Size: <span style={{color:"grey"}}>{selectedSize}</span></div>
  
        </div>
      </div>
      </div>
    );
  }
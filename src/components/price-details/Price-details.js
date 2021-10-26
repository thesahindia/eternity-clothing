import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemsCount,
  selectCartItemsSubTotal,
} from "../../redux/reducers/cart/cartSelectors";
import "./price-details.scss";
export default function PriceDetails() {
  const { itemsCount, totalPrice } = useSelector(
    createStructuredSelector({
      itemsCount: selectCartItemsCount,
      totalPrice: selectCartItemsSubTotal,
    })
  );

  const discount = ((30 / 100) * totalPrice).toFixed(2);
  const deliveryCharges = totalPrice>300? 0: 5 ;
  const totalAmount = (totalPrice - discount + deliveryCharges).toFixed(2);
  const savedAmount = (discount - deliveryCharges).toFixed(2);

  return (
    <div className="price-details">
      <div className="head">PRICE DETAILS</div>
      <div className="price-detail-container">
        <div className="price row">
          <span>
            Price({itemsCount} {itemsCount < 2 ? "Item" : "Items"})
          </span>
          <span className="grey">${totalPrice}</span>
        </div>
        <div className="discount row">
          <span>Discount</span>
          <span style={{ color: "#ffb039" }}>
            - ${discount}
          </span>
        </div>
        <div className="delivery row">
          <span>Delivery Charges</span>
          <span className="grey">${deliveryCharges}</span>
        </div>
        <div className="total row">
          <span>Total Amount</span>
          <span className="grey">${totalAmount}</span>
        </div>
        <div className="saved-amount">
            {savedAmount>0? <span>You will save ${savedAmount} on this order</span>: null}
          
        </div>
      </div>
    </div>
  );
}

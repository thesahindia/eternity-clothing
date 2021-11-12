import "./price-details.scss";

export default function PriceDetails({itemsCount, subtotal, discount, deliveryCharges, amountToPay, savedAmount}) {

  return (
    <div className="price-details">
      <div className="head">PRICE DETAILS</div>
      <div className="price-detail-container">
        <div className="price row">
          <span>
            Price({itemsCount} {itemsCount < 2 ? "Item" : "Items"})
          </span>
          <span className="grey"> &#36;{subtotal}</span>
        </div>
        <div className="discount row">
          <span>Discount</span>
          <span style={{ color: "#ffb139" }}>- &#36;{discount}</span>
        </div>
        <div className="delivery row">
          <span>Delivery Charges</span>
          <span className="grey"> &#36;{deliveryCharges}</span>
        </div>
        <div className="total row">
          <span>Total Amount</span>
          <span className="grey"> &#36;{amountToPay}</span>
        </div>
        <div className="saved-amount">
          {savedAmount > 0 && 
            <span>You will save &#36;{savedAmount} on this order</span>
          }
        </div>
      </div>
      <div className="card-info">
            *Please use the following card for test payment*
            <br />
            4242 4242 4242 4242 - Exp: 11/26 - CVC: 123
          </div>
    </div>
   
  );
}

import "./checkoutCart.scss";
import CheckoutCartItem from "../../components/checkout-cart/Checkout-cartItem";
import StripeCheckoutButton from "../stripeButton/StripeButton";

export default function CheckoutCart({cartItems, amountToPay}) {
  return (
    <div className="main-container">
      <div>
        <div className="head">
          <span className="left">Shopping Cart</span>
          <span className="right">Price</span>
        </div>
        <div className="cart-items">
          {cartItems.map(({ id, img, ...otherProps }) => (
            <CheckoutCartItem key={id} id={id} img={img[0]} {...otherProps} />
          ))}
        </div>
        <div className="btn">
          <StripeCheckoutButton amountToPay={amountToPay} />
        </div>
      </div>
    </div>
  );
}

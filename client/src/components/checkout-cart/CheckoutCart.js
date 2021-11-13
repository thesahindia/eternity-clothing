import "./checkoutCart.scss";
import CheckoutCartItem from "../../components/checkout-cart/Checkout-cartItem";
import StripeCheckoutButton from "../stripeButton/StripeButton";
import Modal from "../modal/Modal";
import SuccessMsg from "../paymentMsg/SuccessMsg";
import { useState } from "react";
import FailedMsg from "../paymentMsg/FailedMsg";

export default function CheckoutCart({ cartItems, amountToPay }) {
  const [modalType, setModalType] = useState("");
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
          <StripeCheckoutButton
            openModal={setModalType}
            amountToPay={amountToPay}
          />
        </div>
      </div>
      <Modal open={modalType} onClose={() => setModalType("")}>
        {modalType === "success" ? (
          <SuccessMsg />
        ) : (
          <FailedMsg openModal={setModalType} />
        )}
      </Modal>
    </div>
  );
}

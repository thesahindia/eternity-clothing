import { useSelector } from "react-redux";
import "./checkoutPage.scss";
import CheckoutCart from "../../components/checkout-cart/CheckoutCart";
import PriceDetails from "../../components/price-details/Price-details";
import { ReactComponent as SadFace } from "../../assets/images/sadFace.svg";

export default function CheckoutPage() {
const {cartItems} = useSelector(state=> state.cart)

  return <div className="checkout-page">
    {cartItems.length? (
      <>
      <CheckoutCart />
    <PriceDetails />
    </>
    ): (
      <div className="empty_cart">
        <h1>Your Cart is Empty</h1>
        <i><SadFace/></i>
      </div>
    )}
    
  </div>;
}

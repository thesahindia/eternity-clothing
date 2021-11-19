import { useSelector } from "react-redux";
import "./checkoutPage.scss";
import CheckoutCart from "../../components/checkout-cart/CheckoutCart";
import PriceDetails from "../../components/price-details/Price-details";
import { ReactComponent as SadFace } from "../../assets/images/sadFace.svg";
import {
  selectAmountToPay,
  selectCartItems,
  selectCartItemsCount,
  selectCartItemsDeliveryCharges,
  selectCartItemsDiscount,
  selectCartItemsSubTotal,
  selectSavedAmount,
} from "../../redux/reducers/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { useEffect } from "react";
import aos from "aos";

export default function CheckoutPage() {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);

  const {
    cartItems,
    itemsCount,
    subtotal,
    discount,
    deliveryCharges,
    amountToPay,
    savedAmount,
  } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      itemsCount: selectCartItemsCount,
      subtotal: selectCartItemsSubTotal,
      discount: selectCartItemsDiscount,
      deliveryCharges: selectCartItemsDeliveryCharges,
      amountToPay: selectAmountToPay,
      savedAmount: selectSavedAmount,
    })
  );
  return (
    <div className="checkout-page">
      {itemsCount ? (
        <>
          <div data-aos="fade-right" className="checkout-left">
            <CheckoutCart cartItems={cartItems} amountToPay={amountToPay} />
          </div>
          <div data-aos="fade-left" className="checkout-right">
            <PriceDetails
              itemsCount={itemsCount}
              subtotal={subtotal}
              discount={discount}
              deliveryCharges={deliveryCharges}
              amountToPay={amountToPay}
              savedAmount={savedAmount}
            />
          </div>
        </>
      ) : (
        <div className="empty_cart">
          <h1>Your Cart is Empty</h1>
          <i>
            <SadFace />
          </i>
        </div>
      )}
    </div>
  );
}

import { useSelector } from "react-redux";
import CustomButton from "../../components/customButton/CustomButton";
import {
  selectCartItems,
  selectCartItemsSubTotal,
} from "../../redux/reducers/cart/cartSelectors";
import "./checkoutCart.scss";
import { createStructuredSelector } from "reselect";
import CheckoutCartItem from "../../components/checkout-cart/Checkout-cartItem";
import { ReactComponent as PackageIcon } from "../../assets/images/package.svg";

export default function CheckoutCart() {
  const { cartItems, totalPrice } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      totalPrice: selectCartItemsSubTotal,
    })
  );

  return (
    <div className="main-container">
        <div>
          <div className="head">
            <span className="left">Shopping Cart</span>
            <span className="right">Price</span>
          </div>
          <div className="cart-items">
            {cartItems.map(({ id, img, ...otherProps }) => (
              <CheckoutCartItem key={id} img={img[0]} {...otherProps} />
            ))}
          </div>
          <div className="btn">
              <CustomButton
                btn="secondary"
                width="200px"
                height="45px"
                fontSize="large"
              >
                <i style={{ padding: "1px 8px 0 0" }}>
                    <PackageIcon />
                </i>
                Order Now
              </CustomButton>
            </div>
        </div>
    </div>
  );
}
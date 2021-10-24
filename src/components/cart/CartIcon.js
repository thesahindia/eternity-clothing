import { ReactComponent as ShoppingBag } from "../../assets/images/bag.svg";
import "./cartIcon.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/actions";

const CartIcon = () => {
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);

  const cartItemCount = () => {
    if (cartItems.length) {
      return cartItems
        .map(({ quantity }) => quantity)
        .reduce((acc, currnt) => acc + currnt);
    }
    return 0;
  };
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCartHidden());
  };
  
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingBag />
      <span className="item-count">{cartItemCount()}</span>
    </div>
  );
};
export default CartIcon;

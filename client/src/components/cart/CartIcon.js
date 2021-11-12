import "./cartIcon.scss";
import { ReactComponent as CartLogo } from "../../assets/images/cart2.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/actions";
import { selectCartItemsCount } from "../../redux/reducers/cart/cartSelectors";

const CartIcon = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <CartLogo /> cart
      <span className="item-count">{selectCartItemsCount(state)}</span>
    </div>
  );
};
export default CartIcon;

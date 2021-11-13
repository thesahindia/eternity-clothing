import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Hr } from "../../assets/images/hr.svg";
import { auth } from "../../firebase-utils/firebase";
import { useSelector } from "react-redux";
import CartIcon from "../cart/CartIcon";
import CartDropdown from "../cart/CartDropdown";

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
        <span className="logo-txt">Eternity Clothing</span>
        <span className="logo-hr">
          <Hr />
        </span>
      </Link>
      <div className="options">
        <Link to="/" className="option">
          Home
        </Link>
        <div
          onClick={() =>
            window.scroll({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="option"
        >
          Contact us
        </div>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link to="/signin" className="option">
            SignIn
          </Link>
        )}
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

export default Header;

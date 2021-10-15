import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { auth } from "../../firebase-utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="" className="option">
          temp
        </Link>
        <Link to="" className="option">
          temp
        </Link>

        {currentUser? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link to="/auth" className="option">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

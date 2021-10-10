import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;

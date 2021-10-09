import React from "react";
import "./productCard.scss";
import { ReactComponent as CartLogo } from "../../assets/images/cart.svg";
import { ReactComponent as FavLogo } from "../../assets/images/fav.svg";
import { ReactComponent as ViewLogo } from "../../assets/images/view.svg";

const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div className="item">
      <div className="container">
        <div className="logo-container">
          <div className="logo" id="cartLogo">
            <CartLogo />
          </div>
          <div className="logo" id="viewLogo">
            <ViewLogo />
          </div>
          <div className="logo" id="favLogo">
            <FavLogo />
          </div>
        </div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="description">
          some description about the product...
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

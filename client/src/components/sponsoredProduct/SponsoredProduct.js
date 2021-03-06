import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/reducers/collection/collection.selectors";
import CustomButton from "../customButton/CustomButton";
import { withRouter } from "react-router";
import "./sponsoredProduct.scss";

const SponsoredProduct = ({ history }) => {
  const state = useSelector((state) => state);
  const { products } = selectCollection("sponsored")(state);
  const product = products[Math.floor(Math.random() * 4)];
  const handleClick = () => {
    history.push(`/product/${product.id}`);
  };
  return (
    <div className="parant-container">
      <div className="product-container">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="circle four"></div>
        <div className="circle five"></div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + `/images/${product.img[0].url}`
            })`,
          }}
        ></div>
        <div className="product-details">
          <div className="name">{product.name}</div>
          <div className="price">&#36;{product.price.whole}.{product.price.fraction}</div>
          <div>
            <CustomButton
              btn="primary"
              height={32}
              fontSize="small"
              onClick={handleClick}
            >
              Buy Now
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="txt">Sponsored</div>
    </div>
  );
};

export default withRouter(SponsoredProduct);

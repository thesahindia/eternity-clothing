import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/reducers/collection/collection.selectors";
import CustomButton from "../customButton/CustomButton";
import "./sponsoredProduct.scss";

export default function SponsoredProduct() {
  const state = useSelector((state) => state);
  const { products } = selectCollection("sponsored")(state);
  const product = products[Math.floor(Math.random() * 4)];

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
          <div className="name">Levi's Men's Casual Light Shirt </div>
          <div className="price">$34.99</div>
          <div>
            <CustomButton btn="primary" height={32} fontSize="small">
              Buy Now
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="txt">Sponsored</div>
    </div>
  );
}

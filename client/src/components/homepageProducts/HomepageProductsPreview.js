import React from "react";
import ProductSlider from "../productSlider/ProductSlider";
import "./homepageProductsPreview.scss";
const HomepageProductsPreview = ({ title, items }) => {

  return (
    <div className="products-preview">
      <div className="heading">
        <h1>{title}</h1>
        <div className="hr"></div>
      </div>
      <ProductSlider products={items} />
    </div>
  );
};

export default HomepageProductsPreview;

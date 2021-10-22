import React from "react";
import ProductCard from "../productCard/ProductCard";
import "./homepageProductsPreview.scss";
const HomepageProductsPreview = ({ title, items }) => {
  return (
    <div className="products-preview">
      <div className="heading">
        <h1>{title}</h1>
        <div className="hr"></div>
        </div>
        

      <div className="preview">
        {items
          .map(({ id, ...otherItemProps }) => (
            <ProductCard key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default HomepageProductsPreview;

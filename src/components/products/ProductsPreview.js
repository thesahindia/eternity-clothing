import React from "react";
import ProductCard from "./ProductCard";
import "./ProductsPreview.scss";
const ProductsPreview = ({ title, items }) => {
  return (
    <div className="products-preview">
      <div className="preview">
        {items
          .filter((item, inx) => inx < 5)
          .map(({ id, ...otherItemProps }) => (
            <ProductCard key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPreview;

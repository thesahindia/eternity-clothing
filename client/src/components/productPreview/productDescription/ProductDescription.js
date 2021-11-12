import React from "react";
import "./productDescription.scss"
export default function ProductDescription({ children }) {
  return (
    <div className="product-description">
      <div className="description-heading">Product Description</div>
      <div className="description-text">{children}</div>
    </div>
  );
}

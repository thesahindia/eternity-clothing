import React, { useEffect } from "react";
import "./productDescription.scss"
import aos from "aos";
export default function ProductDescription({ children }) {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-right" className="product-description">
      <div className="description-heading">Product Description</div>
      <div className="description-text">{children}</div>
    </div>
  );
}

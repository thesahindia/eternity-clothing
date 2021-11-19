import aos from "aos";
import React, { useEffect} from "react";
import ProductSlider from "../productSlider/ProductSlider";
import "./homepageProductsPreview.scss";
const HomepageProductsPreview = ({ title, items }) => {
useEffect(() => {
  aos.init({
    duration: 1000,
  });
}, []);
  return (
    <div data-aos="fade-up" className="products-preview">
      <div className="heading">
        <h1>{title}</h1>
        <div className="hr"></div>
      </div>
      <ProductSlider products={items} />
    </div>
  );
};

export default HomepageProductsPreview;

import React, { useEffect, useRef } from "react";
import ProductCard from "../productCard/ProductCard";
import "./productSlider.scss";

export default function ProductSlider({ products }) {
  const ref = useRef();
  useEffect(() => {
    const slider = ref.current;
    const interval = Math.random() * 500 + 3000;
    let autoSlide = setInterval(slideLeft, interval);
    slider.onmouseover = () => clearInterval(autoSlide);
    slider.onmouseout = () => (autoSlide = setInterval(slideLeft, interval));
    return () => clearInterval(autoSlide);
  }, []);

  const slideLeft = () => {
    const slider = ref.current;
    slider.scrollLeft -= 285;
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth;
    }
  };

  const slideRight = () => {
    const slider = ref.current;
    slider.scrollLeft += 285;
    if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
      slider.scrollLeft = 0;
    }
  };

  return (
    <div className="product-slider-container">
      <span className="slider-button left" onClick={slideLeft}>
        &#10094;
      </span>
      <span className="slider-button right" onClick={slideRight}>
        &#10095;
      </span>
      <div className="wrapper">
        <div ref={ref} className="product-slider">
          {products.map(({ id, ...otherItemProps }) => (
            <ProductCard key={id} id={id} {...otherItemProps} />
          ))}
        </div>
      </div>
    </div>
  );
}

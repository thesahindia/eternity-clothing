import React from "react";
import CustomButton from "../customButton/CustomButton"
import "./newsletter.scss";
import background from "../../assets/images/background.jpg"
export default function Newsletter() {
  return <div className="newsletter-container" style={{backgroundImage:`url(${background})`}}>
    <div className="newsletter">
      <div className="newsletter-text">
        <div className="heading">Get Discount <span className="highlight">50%</span> off</div>
        <div className="meta-description">Sign up to our newsletter and get 50% off on your next purchase and more exciting offers.</div>
      </div>
      <input className="newsletter-input" placeholder="Enter your email"/>
      <CustomButton btn="secondary" width="140px" height="48px" fontSize="18px" >Subscribe</CustomButton>
    </div>
  </div>;
}

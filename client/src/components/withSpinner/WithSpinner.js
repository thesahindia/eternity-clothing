import React, { useEffect, useState } from "react";
import "./withSpinner.scss";

export default function WithSpinner(WrappedComponent) {
  const Spinner = ({ isLoading, ...otherProps }) => {
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return isLoading ? (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
}

import React from "react";
import Products from "../../components/products/Products";
import Directory from "../../components/directory/Directory";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Directory />
      <div style={{ padding: "0 7.5px 0" }}>
        <Products />
      </div>
    </div>
  );
};

export default HomePage;

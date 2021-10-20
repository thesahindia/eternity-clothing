import React from "react";
import HomepageProducts from "../../components/homepageProducts/HomepageProducts";
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
        <HomepageProducts />
      </div>
    </div>
  );
};

export default HomePage;

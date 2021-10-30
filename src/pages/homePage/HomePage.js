import React from "react";
import HomepageProducts from "../../components/homepageProducts/HomepageProducts";
import Directory from "../../components/directory/Directory";
import CollectionGallary from "../../components/collection-gallary/CollectionGallary";

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
      <CollectionGallary />
    </div>
  );
};

export default HomePage;

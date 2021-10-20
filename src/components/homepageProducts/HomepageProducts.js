import React, { useState } from "react";
import PRODUCTS_DATA from "./productsData";
import HomepageProductsPreview from "./HomepageProductsPreview";

const HomepageProducts = () => {
  const [ProductsData, setProductsData] = useState(PRODUCTS_DATA);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {ProductsData.map(({ id, ...otherData }) => {
        return <HomepageProductsPreview key={id} {...otherData} />;
      })}
    </div>
  );
};

export default HomepageProducts;

import React, { useState } from "react";
import PRODUCTS_DATA from "./productsData";
import ProductsPreview from "./ProductsPreview";

const Products = () => {
  const [ProductsData, setProductsData] = useState(PRODUCTS_DATA);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(204 218 234 / 80%)",
      }}
    >
      {ProductsData.map(({ id, ...otherData }) => {
        return <ProductsPreview key={id} {...otherData} />;
      })}
    </div>
  );
};

export default Products;

import React from "react";
import HomepageProducts from "../../components/homepageProducts/HomepageProducts";
import Directory from "../../components/directory/Directory";
import CollectionGallary from "../../components/collection-gallary/CollectionGallary";
import BannerSlider from "../../components/bannerSlider/BannerSlider";
import OfferHeader from "../../components/offerHeader/OfferHeader";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <OfferHeader>Get 25% Off On All Your Orders Above $300/- & Free Delivery</OfferHeader>
      <BannerSlider />
      <Directory />
      <div style={{ padding: "0 7.5px 0" }}>
        <HomepageProducts />
      </div>
      <CollectionGallary />
    </div>
  );
};

export default HomePage;

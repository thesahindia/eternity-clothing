import React, { useEffect } from "react";
import HomepageProducts from "../../components/homepageProducts/HomepageProducts";
import Directory from "../../components/directory/Directory";
import CollectionGallary from "../../components/collection-gallary/CollectionGallary";
import BannerSlider from "../../components/bannerSlider/BannerSlider";
import OfferHeader from "../../components/offerHeader/OfferHeader";
import { ReactComponent as TruckIcon } from "../../assets/images/truck.svg";
import Newsletter from "../../components/newsletter/Newsletter";
import aos from "aos";

const HomePage = () => {
  useEffect(() => {
    aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <OfferHeader>
        Get 25% Off On All Your Orders Above $300/- & Free Delivery
        <TruckIcon />
      </OfferHeader>
      <div data-aos="zoom-in">
        <BannerSlider />
      </div>
      <div data-aos="fade">
        <Directory />
      </div>
      <div style={{ padding: "0 7.5px 0" }}>
        <HomepageProducts />
      </div>
      <div data-aos="fade-right">
        <CollectionGallary />
      </div>
      <div data-aos="slide-up">
        <Newsletter />
      </div>
    </div>
  );
};

export default HomePage;

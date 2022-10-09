import React from "react";
import Banner from "../components/Banner/Banner";
import CustomerFeedbacks from "../components/Banner/CustomerFeedbacks";
import Footer from "../components/Banner/Footer";
import OurServiceSections from "../components/Banner/OurServiceSections";
import RecomendedProducts from "../components/Banner/RecomendedProducts";
import SubscribeSeciton from "../components/Banner/SubscribeSeciton";

const HomePage = () => {
  return (
    <>
      <Banner />
      <RecomendedProducts />
      <OurServiceSections />
      <CustomerFeedbacks />
      <SubscribeSeciton />
      <Footer />
    </>
  );
};

export default HomePage;

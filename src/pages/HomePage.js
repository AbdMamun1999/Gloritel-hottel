import React from "react";
import Banner from "../components/Banner/Banner";
import CustomerFeedbacks from "../components/Banner/CustomerFeedbacks";
import OurServiceSections from "../components/Banner/OurServiceSections";

const HomePage = () => {
  return (
    <>
      <Banner />
      <OurServiceSections />
      <CustomerFeedbacks />
    </>
  );
};

export default HomePage;

import React from "react";
import Billboard from "../../components/Billboard/Billboard";
import CompanyService from "../../components/Services/CompanyServices.jsx"
import BestSellingItems from "../../components/Item/BestSellingItem.jsx"
import LimitedOffer from "../../components/Offer/LimitedOffer.jsx"
import ItemsListing from "../../components/Item/ItemListing.jsx"
import Categories from "../../components/Item/Categories.jsx"
import CustomerReviews from "../../components/Review/CostomerReviews.jsx";
import LatestPosts from "../../components/Posts/LatestPosts.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FooterBottom from "../../components/Footer/FooterBottom.jsx";


function Home() {
  return (
    <div className="App">
    
      <Billboard/>
      <CompanyService/>
      <BestSellingItems/>
      <LimitedOffer/>
      <ItemsListing/>
      <Categories/>
      <CustomerReviews/>
      <LatestPosts/>
      <Footer/>
      <FooterBottom/>
      
    </div>
  );
}

export default Home;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";

import AllProducts from "./componants/pages/innerpages.js/AllProducts";
import HomePage from "./componants/pages/HomePage";
import { ThemeProvider } from "./componants/common/ThemeContext";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import PrivacyPolicy from "./componants/pages/innerpages.js/PrivacyPolicy";
import TermsandConditions from "./componants/pages/innerpages.js/TermsandConditions";
import RefundPolicy from "./componants/pages/innerpages.js/RefundPolicy";
import ShippingPolicy from "./componants/pages/innerpages.js/ShippingPolicy";
import ContactUs from "./componants/pages/ContactUs";
import AboutUs from "./componants/pages/AboutUs";
import CabBookingApp from "./componants/pages/innerpages.js/cab booking app/CabBookingApp";
import EcommerceSingleVendorHomepage from "./componants/pages/innerpages.js/EcommerceSingleVendor/EcommerceSingleVendorHomepage";
import EcommerceMultiVendorHomepage from "./componants/pages/innerpages.js/EcommerceMultiVendor/EcommerceMultiVendorHomepage";
import ContactHomepage from "./componants/pages/innerpages.js/contact page/ContactPage";
import CareerHomepage from "./componants/pages/innerpages.js/career page/CareerHomepage";
import PortfolioHomepage from "./componants/pages/innerpages.js/portfolio page/PortofolioHomepage";
import Blog from "./componants/pages/innerpages.js/Blog";
import FoodBookingHomepage from "./componants/pages/innerpages.js/Foof Booking/FoodBookingHomepage";
import Hostelpage from "./componants/pages/innerpages.js/pg and hostel management/Hostelpage";
import RealEstateHomePage from "./componants/pages/innerpages.js/RealEstate/RealEstateHomePage";
import OrganicaHomePage from "./componants/pages/innerpages.js/organica/OrganicaHomePage";

import RealEstateCRMHomepage from "./componants/pages/innerpages.js/RealEstateCRM/RealEstateCRMHomepage";
import EducationCRMHomepage from "./componants/pages/innerpages.js/EducationCRM/EducationCRMHomepage";
import MatrimonyHomepage from "./componants/pages/innerpages.js/MatrimonyCRM/MatrimonyHomepage";
import ListingHomepage from "./componants/pages/innerpages.js/ListingPlatform/ListingHomepage";
import LMSHomepage from "./componants/pages/innerpages.js/LMSPlatform/LMSHomepage";
import HotelHomepage from "./componants/pages/innerpages.js/HotelBooking/HotelHomepage";
import ChatbotHomepage from "./componants/pages/innerpages.js/AIChatbot/ChatbotHomepage";
import HRMHomepage from "./componants/pages/innerpages.js/HRMSoftware/HRMHomepage";

function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections/all-products" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsandConditions />}
            />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cab-booking-app" element={<CabBookingApp />} />
            <Route path="/ecommerce-single-vendor" element={<EcommerceSingleVendorHomepage />} />
            <Route path="/ecommerce-multi-vendor" element={<EcommerceMultiVendorHomepage />} />

            <Route path="/contact" element={<ContactHomepage />} />
            <Route path="/career" element={<CareerHomepage />} />
            <Route path="/company-portfolio" element={<PortfolioHomepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/food-booking" element={<FoodBookingHomepage />} />
            <Route path="/resort-booking-management" element={<Hostelpage />} />

            {/* abhilash */}

            <Route path="/real-estate-portal" element={<RealEstateHomePage />} />
            <Route path="/real-estate-crm" element={<RealEstateCRMHomepage />} />
            <Route path="/education-crm" element={<EducationCRMHomepage />} />
            <Route path="/matrimony-crm" element={<MatrimonyHomepage />} />
            <Route path="/listing-platform" element={<ListingHomepage />} />
            <Route path="/lms-platform" element={<LMSHomepage />} />
            <Route path="/hotel-booking" element={<HotelHomepage />} />
            <Route path="/ai-chatbot" element={<ChatbotHomepage />} />
            <Route path="/hrm-software" element={<HRMHomepage />} />
            <Route path="/organica" element={<OrganicaHomePage />} />

          </Routes>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

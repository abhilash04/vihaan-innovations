// src/App.js
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";

// Standard Static Imports
import { ThemeProvider } from "./componants/common/ThemeContext";
import LoadingFallback from "./componants/common/LoadingFallback";
import ScrollToTop from "./componants/common/ScrollToTop";
import DynamicSeo from "./DynamicSeo";

// Data Imports
import {
  seoTrainingData, semTrainingData, smmTrainingData, emailMarketingTrainingData, contentMarketingTrainingData,
  webDevReactTrainingData, javaTrainingData, pythonTrainingData, mobileAppTrainingData, softwareTestingTrainingData,
  graphicDesigningTrainingData, twoDAnimationTrainingData, threeDAnimationTrainingData,
  motionGraphicsTrainingData, videoEditingTrainingData, explainerVideoTrainingData,
} from "./componants/pages/innerpages.js/training/TrainingDataTemplate";

import {
  uiUxServiceData,
  logoDesignServiceData,
  graphicDesignServiceData,
  webDesignDevServiceData,
  mobileAppDevFullServiceData,
  customAppDevFullServiceData,
  cloudDevFullServiceData,
  devopsFullServiceData,
  dataScienceFullServiceData,
  ecommerceDevServiceData,
  aiMlFullServiceData,
  seoFullServiceData,
  smmFullServiceData,
  semFullServiceData,
  videoMarketingFullServiceData,
  emailMarketingFullServiceData,
  contentMarketingFullServiceData,
  localSeoFullServiceData,
  influencerAffiliateFullServiceData,
  twoDAnimationServiceData,
  threeDAnimationServiceData,
  motionGraphicsServiceData,
  videoEditingServiceData,
  explainerVideoServiceData,
  whiteboardAnimationServiceData
} from "./componants/pages/innerpages.js/serviceinnerpages/ServiceDataTemplate";

import { allLocations, slugify } from "./componants/pages/innerpages.js/LocationPageLayout/locationData";
import AnimationVideoServices from "./componants/pages/innerpages.js/AnimationVideoServices/AnimationVideoServices";

// Lazy Loaded Page Components
const HomePage = lazy(() => import("./componants/pages/HomePage"));
const AllProducts = lazy(() => import("./componants/pages/innerpages.js/AllProducts"));
const Login = lazy(() => import("./Authentication/Login"));
const Register = lazy(() => import("./Authentication/Register"));
const LegalCenter = lazy(() => import("./componants/pages/innerpages.js/LegalCenter"));
const ShippingPolicy = lazy(() => import("./componants/pages/innerpages.js/ShippingPolicy"));
const ContactUs = lazy(() => import("./componants/pages/ContactUs"));
const AboutUsHomePage = lazy(() => import("./componants/aboutus/AboutUsHomePage"));
const TrainingPage = lazy(() => import("./componants/pages/innerpages.js/training/training pages layout/TrainingPage"));
const CabBookingApp = lazy(() => import("./componants/pages/innerpages.js/cab booking app/CabBookingApp"));
const EcommerceSingleVendorHomepage = lazy(() => import("./componants/pages/innerpages.js/EcommerceSingleVendor/EcommerceSingleVendorHomepage"));
const EcommerceMultiVendorHomepage = lazy(() => import("./componants/pages/innerpages.js/EcommerceMultiVendor/EcommerceMultiVendorHomepage"));
const CareerHomepage = lazy(() => import("./componants/pages/innerpages.js/career page/CareerHomepage"));
const PortfolioHomepage = lazy(() => import("./componants/pages/innerpages.js/portfolio page/PortofolioHomepage"));
const Blog = lazy(() => import("./componants/pages/innerpages.js/Blog"));
const FoodBookingHomepage = lazy(() => import("./componants/pages/innerpages.js/Foof Booking/FoodBookingHomepage"));
const ResortLandingPage = lazy(() => import("./componants/pages/innerpages.js/ResortBooking/ResortLandingPage"));
const PortalLandingPage = lazy(() => import("./componants/pages/innerpages.js/RealEstatePortal/PortalLandingPage"));
const RealEstateCRMHomepage = lazy(() => import("./componants/pages/innerpages.js/RealEstateCRM/RealEstateCRMHomepage"));
const EducationCRMHomepage = lazy(() => import("./componants/pages/innerpages.js/EducationCRM/EducationCRMHomepage"));
const MatrimonyHomepage = lazy(() => import("./componants/pages/innerpages.js/MatrimonyCRM/MatrimonyHomepage"));
const ListingHomepage = lazy(() => import("./componants/pages/innerpages.js/ListingPlatform/ListingHomepage"));
const LMSHomepage = lazy(() => import("./componants/pages/innerpages.js/LMSPlatform/LMSHomepage"));
const HotelHomepage = lazy(() => import("./componants/pages/innerpages.js/HotelBooking/HotelHomepage"));
const ChatbotHomepage = lazy(() => import("./componants/pages/innerpages.js/AIChatbot/ChatbotHomepage"));
const HRMHomepage = lazy(() => import("./componants/pages/innerpages.js/HRMSoftware/HRMHomepage"));
const HMSHomepage = lazy(() => import("./componants/pages/innerpages.js/HospitalManagement/HMSHomepage"));
const MaintenanceSupportPage = lazy(() => import("./componants/pages/innerpages.js/maintenance/MaintenanceSupportPage"));
const ServicesDevelopment = lazy(() => import("./componants/pages/innerpages.js/AnimationAndServicesDevelopment/ServicesDevelopment"));
const ServicePage = lazy(() => import("./componants/pages/innerpages.js/serviceinnerpages/service pages layout/ServicePage"));
const ServiceDetails = lazy(() => import("./componants/pages/innerpages.js/serviceinnerpages/service pages layout/ServiceDetails"));
const LocationPageLayout = lazy(() => import("./componants/pages/innerpages.js/LocationPageLayout/LocationPageLayout"));
const DigitalMarketing = lazy(() => import("./componants/pages/innerpages.js/DigitalMarketing/DigitalMarketing"));
const SoftwareDevelopmentHub = lazy(() => import("./componants/pages/innerpages.js/SoftwareDevelopmentHub/SoftwareDevelopmentHub"));

function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Router>
          <ScrollToTop />
          <DynamicSeo />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/collections/all-products" element={<AllProducts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about-us" element={<AboutUsHomePage />} />
              <Route path="/career" element={<CareerHomepage />} />
              <Route path="/company-portfolio" element={<PortfolioHomepage />} />
              <Route path="/articles" element={<Blog />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<LegalCenter />} />
              <Route path="/terms-and-conditions" element={<LegalCenter />} />
              <Route path="/refund-policy" element={<LegalCenter />} />
              <Route path="/cancellation-policy" element={<LegalCenter />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />

              {/* Ready Products */}
              <Route path="/ready-products/ecommerce-single-vendor" element={<EcommerceSingleVendorHomepage />} />
              <Route path="/ready-products/ecommerce-multi-vendor" element={<EcommerceMultiVendorHomepage />} />
              <Route path="/ready-products/food-booking" element={<FoodBookingHomepage />} />
              <Route path="/ready-products/resort-booking-management" element={<ResortLandingPage />} />
              <Route path="/ready-products/listing-platform" element={<ListingHomepage />} />
              <Route path="/ready-products/real-estate-portal" element={<PortalLandingPage />} />
              <Route path="/ready-products/real-estate-crm" element={<RealEstateCRMHomepage />} />
              <Route path="/ready-products/education-crm" element={<EducationCRMHomepage />} />
              <Route path="/ready-products/matrimony-crm" element={<MatrimonyHomepage />} />
              <Route path="/ready-products/hrm-software" element={<HRMHomepage />} />
              <Route path="/ready-products/hospital-management-system" element={<HMSHomepage />} />
              <Route path="/ready-products/lms-platform" element={<LMSHomepage />} />
              <Route path="/ready-products/hotel-booking" element={<HotelHomepage />} />
              <Route path="/ready-products/ai-chatbot" element={<ChatbotHomepage />} />
              <Route path="/ready-products/cab-booking-app" element={<CabBookingApp />} />

              {/* Services */}
              <Route path="/services/web-development" element={<ServicesDevelopment />} />
              <Route path="/services/software-development" element={<SoftwareDevelopmentHub />} />
              <Route path="/services/ui-ux-design" element={<ServicePage serviceData={uiUxServiceData} />} />
              <Route path="/services/web-designing" element={<ServicePage serviceData={webDesignDevServiceData} />} />
              <Route path="/services/mobile-app-development" element={<ServicePage serviceData={mobileAppDevFullServiceData} />} />
              <Route path="/services/custom-software-development" element={<ServicePage serviceData={customAppDevFullServiceData} />} />
              <Route path="/services/cloud-computing" element={<ServicePage serviceData={cloudDevFullServiceData} />} />
              <Route path="/services/devops-and-automation" element={<ServicePage serviceData={devopsFullServiceData} />} />
              <Route path="/services/data-science-big-data" element={<ServicePage serviceData={dataScienceFullServiceData} />} />
              <Route path="/services/ecommerce-software-development" element={<ServicePage serviceData={ecommerceDevServiceData} />} />
              <Route path="/services/ai-ml-automation" element={<ServicePage serviceData={aiMlFullServiceData} />} />
              <Route path="/services/maintenance-and-support" element={<MaintenanceSupportPage />} />

              {/* Digital Marketing Services */}
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/seo" element={<ServicePage serviceData={seoFullServiceData} />} />
              <Route path="/services/social-media-marketing" element={<ServicePage serviceData={smmFullServiceData} />} />
              <Route path="/services/sem" element={<ServicePage serviceData={semFullServiceData} />} />
              <Route path="/services/video-marketing" element={<ServicePage serviceData={videoMarketingFullServiceData} />} />
              <Route path="/services/email-marketing" element={<ServicePage serviceData={emailMarketingFullServiceData} />} />
              <Route path="/services/content-marketing" element={<ServicePage serviceData={contentMarketingFullServiceData} />} />
              <Route path="/services/google-my-business" element={<ServicePage serviceData={localSeoFullServiceData} />} />
              <Route path="/services/influencer-affiliate-marketing" element={<ServicePage serviceData={influencerAffiliateFullServiceData} />} />

              {/* Animation and Video Services  */}
              <Route path="/services/logo-designing" element={<ServicePage serviceData={logoDesignServiceData} />} />
              <Route path="/services/graphic-designing" element={<ServicePage serviceData={graphicDesignServiceData} />} />
              <Route path="/services/2d-animation" element={<ServicePage serviceData={twoDAnimationServiceData} />} />
              <Route path="/services/3d-animation" element={<ServicePage serviceData={threeDAnimationServiceData} />} />
              <Route path="/services/explainer-videos" element={<ServicePage serviceData={explainerVideoServiceData} />} />
              <Route path="/services/motion-graphics-animation" element={<ServicePage serviceData={motionGraphicsServiceData} />} />
              <Route path="/services/video-editing-and-vfx" element={<ServicePage serviceData={videoEditingServiceData} />} />
              <Route path="/services/whiteboard-animation" element={<ServicePage serviceData={whiteboardAnimationServiceData} />} />
              <Route path="/services/animation-and-video-services" element={<AnimationVideoServices />} />

              {/* Training */}
              <Route path="/training/seo" element={<TrainingPage trainingData={seoTrainingData} />} />
              <Route path="/training/sem-google-ads" element={<TrainingPage trainingData={semTrainingData} />} />
              <Route path="/training/social-media-marketing" element={<TrainingPage trainingData={smmTrainingData} />} />
              <Route path="/training/email-marketing" element={<TrainingPage trainingData={emailMarketingTrainingData} />} />
              <Route path="/training/content-marketing" element={<TrainingPage trainingData={contentMarketingTrainingData} />} />
              <Route path="/training/web-designing-react" element={<TrainingPage trainingData={webDevReactTrainingData} />} />
              <Route path="/training/java" element={<TrainingPage trainingData={javaTrainingData} />} />
              <Route path="/training/python" element={<TrainingPage trainingData={pythonTrainingData} />} />
              <Route path="/training/android-and-ios" element={<TrainingPage trainingData={mobileAppTrainingData} />} />
              <Route path="/training/manual-and-automation-testing" element={<TrainingPage trainingData={softwareTestingTrainingData} />} />
              <Route path="/training/graphic-designing" element={<TrainingPage trainingData={graphicDesigningTrainingData} />} />
              <Route path="/training/2d-animation" element={<TrainingPage trainingData={twoDAnimationTrainingData} />} />
              <Route path="/training/3d-animation" element={<TrainingPage trainingData={threeDAnimationTrainingData} />} />
              <Route path="/training/motion-graphics" element={<TrainingPage trainingData={motionGraphicsTrainingData} />} />
              <Route path="/training/video-editing-and-vfx" element={<TrainingPage trainingData={videoEditingTrainingData} />} />
              <Route path="/training/explainer-videos" element={<TrainingPage trainingData={explainerVideoTrainingData} />} />

              {/* Dynamic Services Overview Details */}
              <Route path="/services/:title" element={<ServiceDetails />} />

              {allLocations.map((loc) => (
                <React.Fragment key={loc}>
                  <Route
                    key={`website-${loc}`}
                    path={`/services/website-development-services-in-${slugify(loc)}`}
                    element={<LocationPageLayout />}
                  />
                  <Route
                    key={`marketing-${loc}`}
                    path={`/services/digital-marketing-services-in-${slugify(loc)}`}
                    element={<LocationPageLayout />}
                  />
                  <Route
                    key={`animation-${loc}`}
                    path={`/services/animation-and-video-services-in-${slugify(loc)}`}
                    element={<LocationPageLayout />}
                  />
                </React.Fragment>
              ))}
            </Routes>
          </Suspense>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
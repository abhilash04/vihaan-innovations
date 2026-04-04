// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";

import AllProducts from "./componants/pages/innerpages.js/AllProducts";
import HomePage from "./componants/pages/HomePage";
import { ThemeProvider } from "./componants/common/ThemeContext";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import LegalCenter from "./componants/pages/innerpages.js/LegalCenter";
import ShippingPolicy from "./componants/pages/innerpages.js/ShippingPolicy";
import ContactUs from "./componants/pages/ContactUs";
import AboutUsHomePage from "./componants/aboutus/AboutUsHomePage";
import TrainingPage from "./componants/pages/innerpages.js/training/training pages layout/TrainingPage";
import {
  fullStackTrainingData,
  seoTrainingData, semTrainingData, smmTrainingData, emailMarketingTrainingData, contentMarketingTrainingData,
  webDevReactTrainingData, javaTrainingData, pythonTrainingData, mobileAppTrainingData, softwareTestingTrainingData,
  graphicDesigningTrainingData, twoDAnimationTrainingData, threeDAnimationTrainingData,
  motionGraphicsTrainingData, videoEditingTrainingData, explainerVideoTrainingData,
} from "./componants/pages/innerpages.js/training/TrainingDataTemplate";
import CabBookingApp from "./componants/pages/innerpages.js/cab booking app/CabBookingApp";
import EcommerceSingleVendorHomepage from "./componants/pages/innerpages.js/EcommerceSingleVendor/EcommerceSingleVendorHomepage";
import EcommerceMultiVendorHomepage from "./componants/pages/innerpages.js/EcommerceMultiVendor/EcommerceMultiVendorHomepage";
import ContactHomepage from "./componants/pages/innerpages.js/contact page/ContactPage";
import CareerHomepage from "./componants/pages/innerpages.js/career page/CareerHomepage";
import PortfolioHomepage from "./componants/pages/innerpages.js/portfolio page/PortofolioHomepage";
import Blog from "./componants/pages/innerpages.js/Blog";
import FoodBookingHomepage from "./componants/pages/innerpages.js/Foof Booking/FoodBookingHomepage";
import ResortLandingPage from "./componants/pages/innerpages.js/ResortBooking/ResortLandingPage";
import PortalLandingPage from "./componants/pages/innerpages.js/RealEstatePortal/PortalLandingPage";
import OrganicaHomePage from "./componants/pages/innerpages.js/organica/OrganicaHomePage";

import RealEstateCRMHomepage from "./componants/pages/innerpages.js/RealEstateCRM/RealEstateCRMHomepage";
import EducationCRMHomepage from "./componants/pages/innerpages.js/EducationCRM/EducationCRMHomepage";
import MatrimonyHomepage from "./componants/pages/innerpages.js/MatrimonyCRM/MatrimonyHomepage";
import ListingHomepage from "./componants/pages/innerpages.js/ListingPlatform/ListingHomepage";
import LMSHomepage from "./componants/pages/innerpages.js/LMSPlatform/LMSHomepage";
import HotelHomepage from "./componants/pages/innerpages.js/HotelBooking/HotelHomepage";
import ChatbotHomepage from "./componants/pages/innerpages.js/AIChatbot/ChatbotHomepage";
import HRMHomepage from "./componants/pages/innerpages.js/HRMSoftware/HRMHomepage";
import HMSHomepage from "./componants/pages/innerpages.js/HospitalManagement/HMSHomepage";
import MaintenanceSupportPage from "./componants/pages/innerpages.js/maintenance/MaintenanceSupportPage";
import {
  uiUxServiceData,
  digitalMarketingServiceData,
  blockchainDevServiceData,
  cyberSecurityServiceData,
  iotDevServiceData,
  gameDevServiceData,
  contentWritingServiceData,
  appMaintenanceServiceData,
  webMaintenanceServiceData,
  softwareMaintenanceServiceData,
  databaseManagementServiceData,
  apiDevelopmentServiceData,
  paymentGatewayIntegrationServiceData,
  thirdPartyIntegrationServiceData,
  migrationServicesServiceData,
  testingQualityAssuranceServiceData,
  contentManagementSystemServiceData,
  openSourceDevelopmentServiceData,
  shopifyDevelopmentServiceData,
  magentoDevelopmentServiceData,
  woocommerceDevelopmentServiceData,
  drupalDevelopmentServiceData,
  joomlaDevelopmentServiceData,
  wordpressDevelopmentServiceData,
  laravelDevelopmentServiceData,
  symfonyDevelopmentServiceData,
  djangoDevelopmentServiceData,
  flaskDevelopmentServiceData,
  nodejsDevelopmentServiceData,
  reactjsDevelopmentServiceData,
  angularjsDevelopmentServiceData,
  vuejsDevelopmentServiceData,
  reactNativeDevelopmentServiceData,
  flutterDevelopmentServiceData,
  nativeAndroidDevelopmentServiceData,
  nativeIosDevelopmentServiceData,
  crossPlatformDevelopmentServiceData,
  progressiveWebAppsServiceData,
  webApplicationDevelopmentServiceData,
  softwareDevelopmentServiceData,
  enterpriseSoftwareDevelopmentServiceData,
  webDesignServiceData,
  logoDesignServiceData,
  graphicDesignServiceData,
  brandingIdentityServiceData,
  marketingCollateralServiceData,
  packagingDesignServiceData,
  infographicDesignServiceData,
  presentationDesignServiceData,
  emailTemplateDesignServiceData,
  landingPageDesignServiceData,
  webDesignDevServiceData,
  mobileAppDevFullServiceData,
  customAppDevFullServiceData,
  cloudDevFullServiceData,
  devopsFullServiceData,
  dataScienceFullServiceData,
  ecommerceFullServiceData,
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
  crmDevServiceData,
  erpDevServiceData,
  saasDevelopmentServiceData,
  twoDAnimationServiceData,
  threeDAnimationServiceData,
  motionGraphicsServiceData,
  videoEditingServiceData,
  explainerVideoServiceData,
  whiteboardAnimationServiceData
} from "./componants/pages/innerpages.js/serviceinnerpages/ServiceDataTemplate";
import ServicePage from "./componants/pages/innerpages.js/serviceinnerpages/service pages layout/ServicePage";
import ServiceDetails from "./componants/pages/innerpages.js/serviceinnerpages/service pages layout/ServiceDetails";
import DynamicSeo from "./DynamicSeo";
import ScrollToTop from "./componants/common/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Router>
          <ScrollToTop />
          <DynamicSeo />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections/all-products" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy-policy" element={<LegalCenter />} />
            <Route path="/terms-and-conditions" element={<LegalCenter />} />
            <Route path="/refund-policy" element={<LegalCenter />} />
            <Route path="/cancellation-policy" element={<LegalCenter />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/about-us" element={<AboutUsHomePage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/training" element={<TrainingPage trainingData={fullStackTrainingData} />} />
            {/* Digital Marketing Training */}
            <Route path="/seo-training" element={<TrainingPage trainingData={seoTrainingData} />} />
            <Route path="/sem-google-ads-training" element={<TrainingPage trainingData={semTrainingData} />} />
            <Route path="/social-media-marketing-training" element={<TrainingPage trainingData={smmTrainingData} />} />
            <Route path="/email-marketing-training" element={<TrainingPage trainingData={emailMarketingTrainingData} />} />
            <Route path="/content-marketing-training" element={<TrainingPage trainingData={contentMarketingTrainingData} />} />
            {/* Software Training */}
            <Route path="/web-design-react-training" element={<TrainingPage trainingData={webDevReactTrainingData} />} />
            <Route path="/java-training" element={<TrainingPage trainingData={javaTrainingData} />} />
            <Route path="/python-training" element={<TrainingPage trainingData={pythonTrainingData} />} />
            <Route path="/mobile-app-training" element={<TrainingPage trainingData={mobileAppTrainingData} />} />
            <Route path="/software-testing-training" element={<TrainingPage trainingData={softwareTestingTrainingData} />} />
            {/* Animation Training */}
            <Route path="/graphic-designing-training" element={<TrainingPage trainingData={graphicDesigningTrainingData} />} />
            <Route path="/2d-animation-training" element={<TrainingPage trainingData={twoDAnimationTrainingData} />} />
            <Route path="/3d-animation-training" element={<TrainingPage trainingData={threeDAnimationTrainingData} />} />
            <Route path="/motion-graphics-training" element={<TrainingPage trainingData={motionGraphicsTrainingData} />} />
            <Route path="/video-editing-vfx-training" element={<TrainingPage trainingData={videoEditingTrainingData} />} />
            <Route path="/explainer-videos-training" element={<TrainingPage trainingData={explainerVideoTrainingData} />} />
            <Route path="/cab-booking-app" element={<CabBookingApp />} />
            <Route path="/ecommerce-single-vendor" element={<EcommerceSingleVendorHomepage />} />
            <Route path="/ecommerce-multi-vendor" element={<EcommerceMultiVendorHomepage />} />

            <Route path="/contact" element={<ContactHomepage />} />
            <Route path="/career" element={<CareerHomepage />} />
            <Route path="/company-portfolio" element={<PortfolioHomepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/food-booking" element={<FoodBookingHomepage />} />
            <Route path="/resort-booking-management" element={<ResortLandingPage />} />

            {/* abhilash */}

            <Route path="/real-estate-portal" element={<PortalLandingPage />} />
            <Route path="/real-estate-crm" element={<RealEstateCRMHomepage />} />
            <Route path="/education-crm" element={<EducationCRMHomepage />} />
            <Route path="/matrimony-crm" element={<MatrimonyHomepage />} />
            <Route path="/listing-platform" element={<ListingHomepage />} />
            <Route path="/lms-platform" element={<LMSHomepage />} />
            <Route path="/hotel-booking" element={<HotelHomepage />} />
            <Route path="/ai-chatbot" element={<ChatbotHomepage />} />
            <Route path="/hrm-software" element={<HRMHomepage />} />
            <Route path="/hospital-management-system" element={<HMSHomepage />} />
            <Route path="/organica" element={<OrganicaHomePage />} />

            {/* Vihaan Services */}

            <Route path="/ui-ux-design" element={<ServicePage serviceData={uiUxServiceData} />} />
            <Route path="/web-development" element={<ServicePage serviceData={webDesignDevServiceData} />} />
            <Route path="/digital-marketing" element={<ServicePage serviceData={digitalMarketingServiceData} />} />
            <Route path="/mobile-app-development" element={<ServicePage serviceData={mobileAppDevFullServiceData} />} />
            <Route path="/ecommerce-development" element={<ServicePage serviceData={ecommerceDevServiceData} />} />
            <Route path="/crm-development" element={<ServicePage serviceData={crmDevServiceData} />} />
            <Route path="/erp-development" element={<ServicePage serviceData={erpDevServiceData} />} />
            <Route path="/blockchain-development" element={<ServicePage serviceData={blockchainDevServiceData} />} />
            <Route path="/ai-ml-development" element={<ServicePage serviceData={aiMlFullServiceData} />} />
            <Route path="/cloud-computing" element={<ServicePage serviceData={cloudDevFullServiceData} />} />
            <Route path="/cyber-security" element={<ServicePage serviceData={cyberSecurityServiceData} />} />
            <Route path="/data-analytics" element={<ServicePage serviceData={dataScienceFullServiceData} />} />
            <Route path="/iot-development" element={<ServicePage serviceData={iotDevServiceData} />} />
            <Route path="/game-development" element={<ServicePage serviceData={gameDevServiceData} />} />
            <Route path="/content-writing" element={<ServicePage serviceData={contentWritingServiceData} />} />
            <Route path="/seo-services" element={<ServicePage serviceData={seoFullServiceData} />} />
            <Route path="/off-page-seo" element={<ServiceDetails title="OFF-Page SEO" />} />
            <Route path="/social-media-marketing" element={<ServicePage serviceData={smmFullServiceData} />} />
            <Route path="/sem-services" element={<ServicePage serviceData={semFullServiceData} />} />
            <Route path="/email-marketing" element={<ServicePage serviceData={emailMarketingFullServiceData} />} />
            <Route path="/content-marketing" element={<ServicePage serviceData={contentMarketingFullServiceData} />} />
            <Route path="/google-my-business" element={<ServicePage serviceData={localSeoFullServiceData} />} />
            <Route path="/influencer-affiliate-marketing" element={<ServicePage serviceData={influencerAffiliateFullServiceData} />} />
            <Route path="/video-marketing" element={<ServicePage serviceData={videoMarketingFullServiceData} />} />
            <Route path="/app-maintenance" element={<ServicePage serviceData={appMaintenanceServiceData} />} />
            <Route path="/web-maintenance" element={<ServicePage serviceData={webMaintenanceServiceData} />} />
            <Route path="/software-maintenance" element={<ServicePage serviceData={softwareMaintenanceServiceData} />} />
            <Route path="/database-management" element={<ServicePage serviceData={databaseManagementServiceData} />} />
            <Route path="/api-development" element={<ServicePage serviceData={apiDevelopmentServiceData} />} />
            <Route path="/payment-gateway-integration" element={<ServicePage serviceData={paymentGatewayIntegrationServiceData} />} />
            <Route path="/third-party-integration" element={<ServicePage serviceData={thirdPartyIntegrationServiceData} />} />
            <Route path="/migration-services" element={<ServicePage serviceData={migrationServicesServiceData} />} />
            <Route path="/testing-quality-assurance" element={<ServicePage serviceData={testingQualityAssuranceServiceData} />} />
            <Route path="/devops-services" element={<ServicePage serviceData={devopsFullServiceData} />} />
            <Route path="/content-management-system" element={<ServicePage serviceData={contentManagementSystemServiceData} />} />
            <Route path="/open-source-development" element={<ServicePage serviceData={openSourceDevelopmentServiceData} />} />
            <Route path="/shopify-development" element={<ServicePage serviceData={shopifyDevelopmentServiceData} />} />
            <Route path="/magento-development" element={<ServicePage serviceData={magentoDevelopmentServiceData} />} />
            <Route path="/woocommerce-development" element={<ServicePage serviceData={woocommerceDevelopmentServiceData} />} />
            <Route path="/drupal-development" element={<ServicePage serviceData={drupalDevelopmentServiceData} />} />
            <Route path="/joomla-development" element={<ServicePage serviceData={joomlaDevelopmentServiceData} />} />
            <Route path="/wordpress-development" element={<ServicePage serviceData={wordpressDevelopmentServiceData} />} />
            <Route path="/laravel-development" element={<ServicePage serviceData={laravelDevelopmentServiceData} />} />
            <Route path="/symfony-development" element={<ServicePage serviceData={symfonyDevelopmentServiceData} />} />
            <Route path="/django-development" element={<ServicePage serviceData={djangoDevelopmentServiceData} />} />
            <Route path="/flask-development" element={<ServicePage serviceData={flaskDevelopmentServiceData} />} />
            <Route path="/nodejs-development" element={<ServicePage serviceData={nodejsDevelopmentServiceData} />} />
            <Route path="/reactjs-development" element={<ServicePage serviceData={reactjsDevelopmentServiceData} />} />
            <Route path="/angularjs-development" element={<ServicePage serviceData={angularjsDevelopmentServiceData} />} />
            <Route path="/vuejs-development" element={<ServicePage serviceData={vuejsDevelopmentServiceData} />} />
            <Route path="/react-native-development" element={<ServicePage serviceData={reactNativeDevelopmentServiceData} />} />
            <Route path="/flutter-development" element={<ServicePage serviceData={flutterDevelopmentServiceData} />} />
            <Route path="/native-android-development" element={<ServicePage serviceData={nativeAndroidDevelopmentServiceData} />} />
            <Route path="/native-ios-development" element={<ServicePage serviceData={nativeIosDevelopmentServiceData} />} />
            <Route path="/cross-platform-development" element={<ServicePage serviceData={crossPlatformDevelopmentServiceData} />} />
            <Route path="/progressive-web-apps" element={<ServicePage serviceData={progressiveWebAppsServiceData} />} />
            <Route path="/web-application-development" element={<ServicePage serviceData={webApplicationDevelopmentServiceData} />} />
            <Route path="/software-development" element={<ServicePage serviceData={softwareDevelopmentServiceData} />} />
            <Route path="/custom-software-development" element={<ServicePage serviceData={customAppDevFullServiceData} />} />
            <Route path="/saas-development" element={<ServicePage serviceData={saasDevelopmentServiceData} />} />
            <Route path="/ecommerce-software-development" element={<ServicePage serviceData={ecommerceDevServiceData} />} />
            <Route path="/web-design" element={<ServicePage serviceData={webDesignServiceData} />} />
            <Route path="/logo-design" element={<ServicePage serviceData={logoDesignServiceData} />} />
            <Route path="/graphic-design" element={<ServicePage serviceData={graphicDesignServiceData} />} />
            <Route path="/2d-animation" element={<ServicePage serviceData={twoDAnimationServiceData} />} />
            <Route path="/3d-animation" element={<ServicePage serviceData={threeDAnimationServiceData} />} />
            <Route path="/motion-graphics" element={<ServicePage serviceData={motionGraphicsServiceData} />} />
            <Route path="/video-editing-vfx" element={<ServicePage serviceData={videoEditingServiceData} />} />
            <Route path="/explainer-videos" element={<ServicePage serviceData={explainerVideoServiceData} />} />
            <Route path="/whiteboard-animation" element={<ServicePage serviceData={whiteboardAnimationServiceData} />} />
            <Route path="/branding-identity" element={<ServicePage serviceData={brandingIdentityServiceData} />} />
            <Route path="/marketing-collateral" element={<ServicePage serviceData={marketingCollateralServiceData} />} />
            <Route path="/packaging-design" element={<ServicePage serviceData={packagingDesignServiceData} />} />
            <Route path="/infographic-design" element={<ServicePage serviceData={infographicDesignServiceData} />} />
            <Route path="/presentation-design" element={<ServicePage serviceData={presentationDesignServiceData} />} />
            <Route path="/email-template-design" element={<ServicePage serviceData={emailTemplateDesignServiceData} />} />
            <Route path="/landing-page-design" element={<ServicePage serviceData={landingPageDesignServiceData} />} />
            <Route path="/maintenance-&-support" element={<MaintenanceSupportPage />} />
            
            {/* Dynamic Services Overview Details */}
            <Route path="/service-details/:title" element={<ServiceDetails />} />
          </Routes>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

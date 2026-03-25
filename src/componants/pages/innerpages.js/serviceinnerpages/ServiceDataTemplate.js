import React from 'react';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarsIcon from "@mui/icons-material/Stars";
import GppGoodIcon from "@mui/icons-material/GppGood";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedIcon from "@mui/icons-material/Verified";

/**
 * ServiceDataTemplate
 * 
 * This file serves as your single source of truth for all service page content.
 * Instead of duplicating folders for different services, you can create new data objects
 * here (e.g., `webDevServiceData`, `digitalMarketingServiceData`) and pass them 
 * to the `<ServicePage serviceData={...} />` component in your routes.
 */

export const uiUxServiceData = {
  hero: {
    title: "UI/UX Design Services in Bangalore",
    subtitle: "Crafting Intuitive User Experiences that Drive Engagement.",
    badgeText: "Transform Your User Journey!",
    buttonText: "Get a Free Consultation",
    features: [
      { icon: BusinessCenterIcon, text: "User-Centered Design" },
      { icon: BusinessCenterIcon, text: "Interactive Prototypes" },
      { icon: BusinessCenterIcon, text: "Data-Driven UX Strategy" },
      { icon: BusinessCenterIcon, text: "Responsive Mobile UI" },
      { icon: BusinessCenterIcon, text: "Usability Testing" },
      { icon: BusinessCenterIcon, text: "Wireframing & Mockups" },
    ]
  },

  overview: {
    subtitle: "OUR EXPERTISE",
    title: "Comprehensive Design Services",
    description: "We merge visual aesthetics with functional psychology to deliver interfaces that convert.",
    list: [
      { title: "Mobile UI Design", icon: BusinessCenterIcon, count: "5 Services", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "Intuitive mobile interfaces for iOS and Android." },
      { title: "Web Platform UX", icon: BusinessCenterIcon, count: "8 Services", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "Complex dashboard and SaaS platform design." },
      { title: "Design Systems", icon: BusinessCenterIcon, count: "4 Services", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Scalable component libraries and guidelines." },
      { title: "Design Systems", icon: BusinessCenterIcon, count: "4 Services", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Scalable component libraries and guidelines." },

    ]
  },

  detailed: {
    subtitle: "DESIGN SERVICES",
    title: "End-to-End Design Solutions",
    description: "From conceptualization to high-fidelity implementation, we cover it all.",
    services: [
      {
        title: "UI/UX Services",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "UX Research", desc: "Understanding user behavior and creating detailed user personas to inform design decisions.", icon: <BusinessCenterIcon /> },
          { title: "Wireframing", desc: "Low-fidelity layouts to map out the application's structure and user flow.", icon: <BusinessCenterIcon /> },
          { title: "Prototyping", desc: "Interactive prototypes to test features before writing any code.", icon: <BusinessCenterIcon /> },
          { title: "Wireframing", desc: "Low-fidelity layouts to map out the application's structure and user flow.", icon: <BusinessCenterIcon /> },
          { title: "Prototyping", desc: "Interactive prototypes to test features before writing any code.", icon: <BusinessCenterIcon /> },

        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY OUR DESIGN TEAM",
    title: "Why Top Brands Trust Our UI/UX Expertise",
    description: "We don't just make it look pretty. We engineer the user flow to maximize your business KPIs.",
    stats: [
      { value: "400+", label: "Design Projects" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "12+", label: "Awards Won" },
    ],
    reasons: [
      { title: "User-Centric Approach", icon: BusinessCenterIcon, desc: "Every design decision is backed by user research and data.", color: "#2563eb", number: "01" },
      { title: "Iterative Prototyping", icon: BusinessCenterIcon, desc: "We test and refine designs continuously for optimal results.", color: "#06b6d4", number: "02" },
      { title: "Seamless Handoff", icon: BusinessCenterIcon, desc: "Pixel-perfect designs delivered with complete documentation.", color: "#4f46e5", number: "03" },
      { title: "Conversion Focused", icon: BusinessCenterIcon, desc: "Interfaces designed specifically to increase your bottom line.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR DESIGN PROCESS",
    title: "How We Craft Perfection",
    processSteps: [
      { number: "01", title: "Discovery", desc: "Understanding domain goals and user needs.", checks: ["User Personas", "Journey Mapping"], position: "above" },
      { number: "02", title: "Wireframing", desc: "Visualizing layout structures and information architecture.", checks: ["Low-fi mockups", "Information Architecture"], position: "below" },
      { number: "03", title: "UI Design", desc: "Applying visual styles, typography, and precise spacing.", checks: ["High-fi mockups", "Design System"], position: "above" },
      { number: "04", title: "Prototyping", desc: "Creating interactive flows to test the experience.", checks: ["Interactive flows", "Micro-interactions"], position: "below" },
      { number: "05", title: "Testing", desc: "Validating the design with real users and adjusting.", checks: ["Usability testing", "A/B testing"], position: "above" },
      { number: "06", title: "Handoff", desc: "Delivering assets to developers for implementation.", checks: ["Zeplin/Figma delivery", "Asset export"], position: "below" }
    ]
  },

  industry: {
    subtitle: "INDUSTRIES WE SERVE",
    title: "Exceptional UI/UX Across Sectors",
    industries: {
      0: {
        title: "Healthcare UI",
        desc: "Designing intuitive patient portals and complex medical dashboards.",
        desc1: "Focusing on accessibility and clear information hierarchy for critical datasets.",
        checks: ["EHR Systems", "Telemedicine Apps", "Patient Dashboards", "EHR Systemss", "Telemedicine Apps", "Patient Dashboards"],
        cards: [
          { title: "Telehealth App", desc: "Simple interface for elderly patients to consult doctors online." },
          { title: "Medical Record Dashboard", desc: "High-density data visualization for medical professionals." },
          { title: "Telehealth App", desc: "Simple interface for elderly patients to consult doctors online." },
          { title: "Medical Record Dashboard", desc: "High-density data visualization for medical professionals." }

        ]
      },
      1: {
        title: "Healthcare UI",
        desc: "Designing intuitive patient portals and complex medical dashboards.",
        desc1: "Focusing on accessibility and clear information hierarchy for critical datasets.",
        checks: ["EHR Systems", "Telemedicine Apps", "Patient Dashboards", "EHR Systemss", "Telemedicine Apps", "Patient Dashboards"],
        cards: [
          { title: "Telehealth App", desc: "Simple interface for elderly patients to consult doctors online." },
          { title: "Medical Record Dashboard", desc: "High-density data visualization for medical professionals." }
        ]
      },
      2: {
        title: "Healthcare UI",
        desc: "Designing intuitive patient portals and complex medical dashboards.",
        desc1: "Focusing on accessibility and clear information hierarchy for critical datasets.",
        checks: ["EHR Systems", "Telemedicine Apps", "Patient Dashboards", "EHR Systemss", "Telemedicine Apps", "Patient Dashboards"],
        cards: [
          { title: "Telehealth App", desc: "Simple interface for elderly patients to consult doctors online." },
          { title: "Medical Record Dashboard", desc: "High-density data visualization for medical professionals." }
        ]
      },
    },
    tabs: [
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Recognized for Excellence & Quality",
    list: [
      { title: "Top IT Company", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "High Performer", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Cert", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Best Workculture", body: "HR Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top App Developer", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "DESIGN TOOLS",
    title: "Our UI/UX Toolchain",
    description: "Leveraging the industry's best software to deliver pixel-perfect designs.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Figma", "Sketch", "Adobe XD", "Framer", "InVision", "Zeplin", "Principle"] },
      { row: 2, direction: "right", speed: "28s", items: ["Webflow", "Illustrator", "Photoshop", "After Effects", "Miro", "Balsamiq"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT LOVE",
    title: "What Our Design Clients Say",
    rating: "5.0/5",
    reviews: "300+",
    list: [
      { name: "Sarah Jenkins", role: "Product Owner", text: "They completely transformed our app interface. Engagement went up 45%!", initial: "S", color: "#2563eb" },
      { name: "Michael Chen", role: "Startup Founder", text: "Incredible attention to detail. The handoff was exactly what my developers needed.", initial: "M", color: "#10b981" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Build a Winning<br />Product Design?
      </>
    ),
    description: (
      <>
        Let's map out your next big digital experience.<br />
        Book a free 45-minute discovery call with our Lead Designer.
      </>
    ),
    buttonText: "Hire UX Designers",
    brandText: "Vihaan Design Labs"
  }
};

export const webDevelopmentServiceData = {
  hero: {
    title: "UI/UX Design Services in Bangalore",
    subtitle: "Crafting Intuitive User Experiences that Drive Engagement.",
    badgeText: "Transform Your User Journey!",
    buttonText: "Get a Free Consultation",
    features: [
      { icon: BusinessCenterIcon, text: "User-Centered Design" },
      { icon: BusinessCenterIcon, text: "Interactive Prototypes" },
      { icon: BusinessCenterIcon, text: "Data-Driven UX Strategy" },
      { icon: BusinessCenterIcon, text: "Responsive Mobile UI" },
      { icon: BusinessCenterIcon, text: "Usability Testing" },
      { icon: BusinessCenterIcon, text: "Wireframing & Mockups" },
    ]
  },

  overview: {
    subtitle: "OUR EXPERTISE",
    title: "Comprehensive Design Services",
    description: "We merge visual aesthetics with functional psychology to deliver interfaces that convert.",
    list: [
      { title: "Mobile UI Design", icon: BusinessCenterIcon, count: "5 Services", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "Intuitive mobile interfaces for iOS and Android." },
      { title: "Web Platform UX", icon: BusinessCenterIcon, count: "8 Services", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "Complex dashboard and SaaS platform design." },
      { title: "Design Systems", icon: BusinessCenterIcon, count: "4 Services", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Scalable component libraries and guidelines." },
    ]
  },

  detailed: {
    subtitle: "DESIGN SERVICES",
    title: "End-to-End Design Solutions",
    description: "From conceptualization to high-fidelity implementation, we cover it all.",
    services: [
      {
        title: "UI/UX Services",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "UX Research", desc: "Understanding user behavior and creating detailed user personas to inform design decisions.", icon: <BusinessCenterIcon /> },
          { title: "Wireframing", desc: "Low-fidelity layouts to map out the application's structure and user flow.", icon: <BusinessCenterIcon /> },
          { title: "Prototyping", desc: "Interactive prototypes to test features before writing any code.", icon: <BusinessCenterIcon /> },
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY OUR DESIGN TEAM",
    title: "Why Top Brands Trust Our UI/UX Expertise",
    description: "We don't just make it look pretty. We engineer the user flow to maximize your business KPIs.",
    stats: [
      { value: "400+", label: "Design Projects" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "12+", label: "Awards Won" },
    ],
    reasons: [
      { title: "User-Centric Approach", icon: BusinessCenterIcon, desc: "Every design decision is backed by user research and data.", color: "#2563eb", number: "01" },
      { title: "Iterative Prototyping", icon: BusinessCenterIcon, desc: "We test and refine designs continuously for optimal results.", color: "#06b6d4", number: "02" },
      { title: "Seamless Handoff", icon: BusinessCenterIcon, desc: "Pixel-perfect designs delivered with complete documentation.", color: "#4f46e5", number: "03" },
      { title: "Conversion Focused", icon: BusinessCenterIcon, desc: "Interfaces designed specifically to increase your bottom line.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR DESIGN PROCESS",
    title: "How We Craft Perfection",
    processSteps: [
      { number: "01", title: "Discovery", desc: "Understanding domain goals and user needs.", checks: ["User Personas", "Journey Mapping"], position: "above" },
      { number: "02", title: "Wireframing", desc: "Visualizing layout structures and information architecture.", checks: ["Low-fi mockups", "Information Architecture"], position: "below" },
      { number: "03", title: "UI Design", desc: "Applying visual styles, typography, and precise spacing.", checks: ["High-fi mockups", "Design System"], position: "above" },
      { number: "04", title: "Prototyping", desc: "Creating interactive flows to test the experience.", checks: ["Interactive flows", "Micro-interactions"], position: "below" },
      { number: "05", title: "Testing", desc: "Validating the design with real users and adjusting.", checks: ["Usability testing", "A/B testing"], position: "above" },
      { number: "06", title: "Handoff", desc: "Delivering assets to developers for implementation.", checks: ["Zeplin/Figma delivery", "Asset export"], position: "below" }
    ]
  },

  industry: {
    subtitle: "INDUSTRIES WE SERVE",
    title: "Exceptional UI/UX Across Sectors",
    industries: {
      0: {
        title: "Healthcare UI",
        desc: "Designing intuitive patient portals and complex medical dashboards.",
        desc1: "Focusing on accessibility and clear information hierarchy for critical datasets.",
        checks: ["EHR Systems", "Telemedicine Apps", "Patient Dashboards", "EHR Systemss", "Telemedicine Apps", "Patient Dashboards"],
        cards: [
          { title: "Telehealth App", desc: "Simple interface for elderly patients to consult doctors online." },
          { title: "Medical Record Dashboard", desc: "High-density data visualization for medical professionals." }
        ]
      },

      1: {
        title: "Healthcare UI",
        desc: "Designing intuitive patient portals and complex medical dashboards.",
        desc1: "Focusing on accessibility and clear information hierarchy for critical datasets.",
        checks: ["EHR Systems", "Telemedicine Apps", "Patient Dashboards", "EHR Systemss", "Telemedicine Apps", "Patient Dashboards"],
        cards: [
          { title: "Telehealth App", desc: "Simple interface for elderly patients to consult doctors online." },
          { title: "Medical Record Dashboard", desc: "High-density data visualization for medical professionals." }
        ]
      },

      2: {
        title: "Healthcare UI",
        desc: "Designing intuitive patient portals and complex medical dashboards.",
        desc1: "Focusing on accessibility and clear information hierarchy for critical datasets.",
        checks: ["EHR Systems", "Telemedicine Apps", "Patient Dashboards", "EHR Systemss", "Telemedicine Apps", "Patient Dashboards"],
        cards: [
          { title: "Telehealth App", desc: "Simple interface for elderly patients to consult doctors online." },
          { title: "Medical Record Dashboard", desc: "High-density data visualization for medical professionals." }
        ]
      },
    },
    tabs: [
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Recognized for Design Excellence",
    list: [
      { title: "Best UI Design", body: "CSS Design Awards", year: "2024", icon: BusinessCenterIcon, color: "#2563eb" },
      { title: "Top Agency", body: "Clutch", year: "2023", icon: BusinessCenterIcon, color: "#06b6d4" },
      { title: "UX Innovation", body: "Awwwards", year: "2024", icon: BusinessCenterIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "DESIGN TOOLS",
    title: "Our UI/UX Toolchain",
    description: "Leveraging the industry's best software to deliver pixel-perfect designs.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Figma", "Sketch", "Adobe XD", "Framer", "InVision", "Zeplin", "Principle"] },
      { row: 2, direction: "right", speed: "28s", items: ["Webflow", "Illustrator", "Photoshop", "After Effects", "Miro", "Balsamiq"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT LOVE",
    title: "What Our Design Clients Say",
    rating: "5.0/5",
    reviews: "300+",
    list: [
      { name: "Sarah Jenkins", role: "Product Owner", text: "They completely transformed our app interface. Engagement went up 45%!", initial: "S", color: "#2563eb" },
      { name: "Michael Chen", role: "Startup Founder", text: "Incredible attention to detail. The handoff was exactly what my developers needed.", initial: "M", color: "#10b981" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Build a Winning<br />Product Design?
      </>
    ),
    description: (
      <>
        Let's map out your next big digital experience.<br />
        Book a free 45-minute discovery call with our Lead Designer.
      </>
    ),
    buttonText: "Hire UX Designers",
    brandText: "Vihaan Design Labs"
  }
};


export const webDevServiceData = {};
export const digitalMarketingServiceData = {};
export const mobileAppDevServiceData = {};
export const ecommerceDevServiceData = {};
export const crmDevServiceData = {};
export const erpDevServiceData = {};
export const blockchainDevServiceData = {};
export const aiMlDevServiceData = {};
export const cloudComputingServiceData = {};
export const cyberSecurityServiceData = {};
export const dataAnalyticsServiceData = {};
export const iotDevServiceData = {};
export const gameDevServiceData = {};
export const contentWritingServiceData = {};
export const seoServicesServiceData = {};
export const socialMediaMarketingServiceData = {};
export const ppcAdvertisingServiceData = {};
export const emailMarketingServiceData = {};
export const contentMarketingServiceData = {};
export const affiliateMarketingServiceData = {};
export const influencerMarketingServiceData = {};
export const videoMarketingServiceData = {};
export const appMaintenanceServiceData = {};
export const webMaintenanceServiceData = {};
export const softwareMaintenanceServiceData = {};
export const databaseManagementServiceData = {};
export const apiDevelopmentServiceData = {};
export const paymentGatewayIntegrationServiceData = {};
export const thirdPartyIntegrationServiceData = {};
export const migrationServicesServiceData = {};
export const testingQualityAssuranceServiceData = {};
export const devopsServicesServiceData = {};
export const contentManagementSystemServiceData = {};
export const openSourceDevelopmentServiceData = {};
export const shopifyDevelopmentServiceData = {};
export const magentoDevelopmentServiceData = {};
export const woocommerceDevelopmentServiceData = {};
export const drupalDevelopmentServiceData = {};
export const joomlaDevelopmentServiceData = {};
export const wordpressDevelopmentServiceData = {};
export const laravelDevelopmentServiceData = {};
export const symfonyDevelopmentServiceData = {};
export const djangoDevelopmentServiceData = {};
export const flaskDevelopmentServiceData = {};
export const nodejsDevelopmentServiceData = {};
export const reactjsDevelopmentServiceData = {};
export const angularjsDevelopmentServiceData = {};
export const vuejsDevelopmentServiceData = {};
export const reactNativeDevelopmentServiceData = {};
export const flutterDevelopmentServiceData = {};
export const nativeAndroidDevelopmentServiceData = {};
export const nativeIosDevelopmentServiceData = {};
export const crossPlatformDevelopmentServiceData = {};
export const progressiveWebAppsServiceData = {};
export const webApplicationDevelopmentServiceData = {};
export const softwareDevelopmentServiceData = {};
export const customSoftwareDevelopmentServiceData = {};
export const saasDevelopmentServiceData = {};
export const enterpriseSoftwareDevelopmentServiceData = {};
export const webDesignServiceData = {};
export const logoDesignServiceData = {};
export const graphicDesignServiceData = {};
export const brandingIdentityServiceData = {};
export const marketingCollateralServiceData = {};
export const packagingDesignServiceData = {};
export const infographicDesignServiceData = {};
export const presentationDesignServiceData = {};
export const emailTemplateDesignServiceData = {};
export const landingPageDesignServiceData = {};
export const uiUxDesignServiceData = {};

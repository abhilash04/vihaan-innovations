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
    title: "UI/UX Design Agency for Modern Digital Experiences",
    subtitle: "As a leading UI UX design agency, we create seamless, engaging designs for apps, websites, and dashboards that enhance user experience and drive business growth.",
    badgeText: "Design Experiences That Users Love & Businesses Grow With 🚀",
    buttonText: "Get Free Consultation",
    features: [
      { icon: BusinessCenterIcon, text: "User-Centered Design Approach" },
      { icon: BusinessCenterIcon, text: "Fast & Responsive UI Design" },
      { icon: BusinessCenterIcon, text: "Data-Driven UX Strategies" },
      { icon: BusinessCenterIcon, text: "Mobile App & Web UI Expertise" },
      { icon: BusinessCenterIcon, text: "Usability Testing & Optimization" },
      { icon: BusinessCenterIcon, text: "Modern, Scalable Design Systems" },
    ]
  },

  overview: {
    subtitle: "FEATURES THAT TRANSFORM DIGITAL EXPERIENCES",
    title: "Key UI/UX Design Capabilities",
    description: "Our design features ensure seamless usability, modern visuals, and data-driven strategies that enhance engagement and conversions.",
    list: [
      { title: "User-Centered Design", icon: BusinessCenterIcon, count: "4 Services", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "Designs focused on real user needs and behavior." },
      { title: "Responsive & Adaptive Layouts", icon: BusinessCenterIcon, count: "4 Services", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "Interfaces optimized for all devices and screen sizes." },
      { title: "Wireframing & Prototyping", icon: BusinessCenterIcon, count: "4 Services", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Visualize and test ideas before development." },
      { title: "Design Systems & UI Consistency", icon: BusinessCenterIcon, count: "4 Services", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "Scalable and consistent designs aligned with your brand." },
    ]
  },

  detailed: {
    subtitle: "We Think Big and Craft Exceptional User Experiences",
    title: "UI/UX Design Services for Business Growth",
    description: "Our UI UX design services create intuitive, visually appealing, and highly engaging interfaces for web and mobile apps. We help brands deliver seamless experiences that delight users and boost conversions.",
    services: [
      {
        title: "SERVICE OFFERINGS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Engaging Web Experiences", desc: "Transform your website or web app into a seamless, user-friendly platform. Intuitive navigation, accessible design, and visually striking layouts ensure visitors stay longer and interact more.", icon: <BusinessCenterIcon /> },
          { title: "Intuitive Mobile Interfaces", desc: "Deliver mobile apps that users love. Responsive designs, smooth interactions, and optimized usability make every tap and swipe effortless.", icon: <BusinessCenterIcon /> },
          { title: "Smart Dashboards & SaaS Solutions", desc: "Turn complex data into actionable insights. Our dashboards and SaaS platforms prioritize clarity, usability, and efficient workflows to boost productivity.", icon: <BusinessCenterIcon /> },
          { title: "Seamless E-Commerce & Marketplace Journeys", desc: "Increase conversions with shopping experiences that feel natural. From intuitive product flows to streamlined checkout and fully responsive layouts.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY VIHAAN",
    title: "Why Leading Businesses Choose Our UI UX Design Agency",
    description: "As a results-driven UI UX design agency, we build user-focused digital experiences with strong design systems, seamless user journeys, and scalable solutions that help businesses grow faster.",
    stats: [
      { value: "500+", label: "Projects Delivered" },
      { value: "150+", label: "Happy Clients" },
      { value: "10+", label: "Years of Experience" },
    ],
    reasons: [
      { title: "Expert Design Team", icon: BusinessCenterIcon, desc: "Our UI UX design agency is powered by 100+ experienced designers and strategists who craft intuitive, scalable, and high-performing user experiences.", color: "#2563eb", number: "01" },
      { title: "On-Time Delivery", icon: BusinessCenterIcon, desc: "We follow agile workflows and structured design processes to ensure every UI/UX project is delivered on time without compromising quality.", color: "#06b6d4", number: "02" },
      { title: "Cutting-Edge Design Approach", icon: BusinessCenterIcon, desc: "We leverage modern design tools, user research, and data-driven strategies to create impactful digital experiences.", color: "#4f46e5", number: "03" },
      { title: "24/7 Support", icon: BusinessCenterIcon, desc: "We provide continuous support, usability improvements, and design enhancements to ensure your product stays ahead in user experience.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "HOW WE WORK",
    title: "UI/UX Design Workflow",
    description: "As a leading UI UX design agency and trusted UI UX web design company, we follow a structured, user-centric approach to deliver intuitive, engaging, and high-performing digital products.",
    processSteps: [
      { number: "01", title: "Research & Discovery", desc: "Understand user needs, business goals, and market trends to build a strong foundation.", checks: ["User research & stakeholder interviews", "Competitor and market analysis", "Define goals, personas, and pain points"], position: "above" },
      { number: "02", title: "Information Architecture", desc: "Structure content and features for intuitive navigation and seamless user flow.", checks: ["Sitemap creation and content hierarchy", "User journey mapping", "Wireflow and navigation planning"], position: "below" },
      { number: "03", title: "Wireframing", desc: "Create low-fidelity layouts to visualize structure and functionality early.", checks: ["Sketching basic layouts and screens", "Focus on usability and flow", "Quick iterations and feedback loops"], position: "above" },
      { number: "04", title: "UI Design", desc: "Design visually appealing and brand-aligned interfaces for better engagement.", checks: ["Color, typography, and visual elements", "High-fidelity mockups", "Consistent design systems"], position: "below" },
      { number: "05", title: "Prototyping & Testing", desc: "Validate designs through interactive prototypes and real user feedback.", checks: ["Clickable prototypes for user testing", "Usability testing and improvements", "Identify and fix user experience issues"], position: "above" },
      { number: "06", title: "Development Handoff & Support", desc: "Ensure smooth transition from design to development with ongoing support.", checks: ["Design specs and asset delivery", "Developer collaboration", "Post-launch optimization and updates"], position: "below" }
    ]
  },

  industry: {
    subtitle: "INDUSTRY EXPERTISE",
    title: "Delivering UI/UX Excellence Across Key Industries",
    description: "As a leading UI UX design agency, we deliver industry-specific digital experiences that enhance usability, improve customer journeys, and drive business growth across multiple sectors.",
    industries: {
      0: {
        title: "E-Commerce Sector",
        desc: "Creating user-friendly shopping experiences with smooth navigation, fast performance, and high conversion rates.",
        desc1: "We design conversion-focused eCommerce platforms with seamless navigation, intuitive product discovery, and optimized checkout experiences.",
        checks: ["Product Listing UI", "Shopping Cart & Checkout UX", "User Dashboard", "Payment Flow Optimization"],
        cards: [
          { title: "Product Listing", desc: "Clean and intuitive product browsing with smart filters and sorting for better user experience." },
          { title: "Cart & Checkout", desc: "Streamlined checkout flows reducing friction and improving conversion rates." },
          { title: "User Dashboard", desc: "Personalized dashboards for orders, tracking, and account management." },
          { title: "Payment Experience", desc: "Secure and smooth payment UI ensuring fast and hassle-free transactions." }
        ]
      },
      1: {
        title: "Food Ordering & Delivery",
        desc: "Designing intuitive food delivery apps with quick ordering flows, clear menus, and seamless user interactions.",
        desc1: "Our UI UX design services for food ordering apps ensure fast, engaging, and easy-to-use interfaces that enhance customer satisfaction.",
        checks: ["Online Food Ordering UI", "Restaurant Listings", "Real-Time Order Tracking", "Payment & Checkout UX"],
        cards: [
          { title: "Menu Browsing", desc: "Easy-to-navigate food menus with categories, images, and quick selection options." },
          { title: "Order Flow", desc: "Simplified ordering process with minimal steps for faster checkout." },
          { title: "Live Order Tracking", desc: "Real-time tracking interface with clear updates and delivery status." },
          { title: "Payment Integration", desc: "Quick and secure payment UX for smooth and reliable transactions." }
        ]
      },
      2: {
        title: "Real Estate Sector",
        desc: "Building visually engaging and easy-to-navigate property platforms that improve user engagement and lead generation.",
        desc1: "We craft modern real estate platforms with advanced search, interactive listings, and user-friendly property exploration.",
        checks: ["Property Listing UI", "Advanced Search Filters", "Agent Dashboards", "Booking & Enquiry UX"],
        cards: [
          { title: "Property Listings", desc: "Attractive property displays with images, details, and pricing clarity." },
          { title: "Advanced Search", desc: "Smart filters and location-based search for easy property discovery." },
          { title: "Agent Dashboard", desc: "Efficient dashboards for agents to manage listings and inquiries." },
          { title: "Booking & Enquiry", desc: "Simple and user-friendly enquiry and booking experience." }
        ]
      },
    },
    tabs: [
      { label: "E-Commerce", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Food Delivery", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
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
    subtitle: "Technologies We Master",
    title: "Modern Tech Stack for Cutting-Edge UI/UX Design",
    description: "As a UI/UX Design Agency, we create simple, user-friendly, and responsive designs",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer", "React", "Next.js", "Vue.js", "Angular"] },
      { row: 2, direction: "right", speed: "28s", items: ["Flutter / React Native", "Swift / Kotlin", "Tailwind CSS / Material UI", "Node.js", "Python", "Django", "Laravel", "AWS", "Google Cloud", "Azure", "Docker"] },
    ]
  },

  testimonials: {
    subtitle: "What Our Clients Say About Us",
    title: "Client Reviews on Our UI/UX Design Services",
    rating: "4.9/5",
    reviews: "500+",
    list: [
      { name: "Rahul Sharma", text: "Vihaan delivered our custom CRM ahead of schedule. Their UI UX design services and attention to detail ensured a seamless user experience.", initial: "R", color: "#2563eb" },
      { name: "Amit Patel", text: "The DevOps transition set up by Vihaan cut our cloud costs by 35% with zero downtime. Exceptional UI UX app development execution.", initial: "A", color: "#10b981" },
      { name: "Suresh Menon", text: "Our e-commerce portal handles high loads effortlessly. The intuitive user flows from this UI UX design agency boosted conversions significantly.", initial: "S", color: "#8b5cf6" },
      { name: "Vikram Das", text: "The security audit and continuous monitoring solved critical vulnerabilities. Highly reliable UI UX design services supporting our operations.", initial: "V", color: "#f59e0b" },
      { name: "Priya Rao", text: "Stunning dashboard designs! The user flows feel extremely fluid, keeping engagement rates high. Outstanding UI UX app development.", initial: "P", color: "#ec4899" },
      { name: "Nikhil Verma", text: "Their UI UX design agency transformed our food ordering app with engaging interfaces and smooth ordering flows. Customers love it!", initial: "N", color: "#06b6d4" },
      { name: "Anjali Mehta", text: "The real estate platform’s search and booking flows are seamless thanks to Vihaan’s UI UX design services. Leads increased immediately.", initial: "A", color: "#2563eb" },
      { name: "Rohan Kapoor", text: "Vihaan’s UI UX app development team delivered a mobile app that feels premium and intuitive. User retention has improved drastically.", initial: "R", color: "#10b981" },
      { name: "Sneha Iyer", text: "Interactive LMS portals with virtual classrooms designed by this UI UX design agency have enhanced learning experiences for our students.", initial: "S", color: "#8b5cf6" },
      { name: "Karthik Rao", text: "Their UI UX design services for our healthcare dashboard are precise and user-friendly. Patient data management is now seamless.", initial: "K", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Transform Your Business<br />With Technology?
      </>
    ),
    description: (
      <>
        Partner with our UI UX Design Agency to build intuitive, scalable digital experiences. Book a free discovery call today.
      </>
    ),
    buttonText: "Get Started Today",
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
      { name: "Sarah Jenkins", text: "They completely transformed our app interface. Engagement went up 45%!", initial: "S", color: "#2563eb" },
      { name: "Michael Chen", text: "Incredible attention to detail. The handoff was exactly what my developers needed.", initial: "M", color: "#10b981" },
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

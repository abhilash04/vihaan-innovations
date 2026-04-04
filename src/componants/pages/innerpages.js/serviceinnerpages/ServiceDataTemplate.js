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


// ── Helper: generate standard service data quickly ──
const S = (title, sub, overview, services, techItems, industries, ctaTitle) => ({
  hero: {
    title,
    subtitle: sub,
    badgeText: "Grow Your Business Online! 🚀",
    buttonText: "Get Free Consultation",
    features: [
      { icon: BusinessCenterIcon, text: "Client-Location Development" },
      { icon: BusinessCenterIcon, text: "Reliable Support Team" },
      { icon: BusinessCenterIcon, text: "On-Time Project Deliveries" },
      { icon: BusinessCenterIcon, text: "Responsive for All Devices" },
      { icon: BusinessCenterIcon, text: "Premium Quality" },
      { icon: BusinessCenterIcon, text: "Expert Development Team" },
    ],
  },
  overview: {
    subtitle: "FEATURES & CAPABILITIES",
    title: `Key ${overview} Capabilities`,
    description: `Our ${overview} services help businesses scale faster with proven strategies and modern technology.`,
    list: [
      { title: "Custom Solutions", icon: BusinessCenterIcon, count: "5 Services", color: "#2563eb", gradient: "linear-gradient(135deg,#2563eb,#4f46e5)", description: "Tailored to your exact business needs." },
      { title: "Scalable Architecture", icon: BusinessCenterIcon, count: "4 Services", color: "#06b6d4", gradient: "linear-gradient(135deg,#06b6d4,#0891b2)", description: "Built to grow as you grow." },
      { title: "Expert Team", icon: BusinessCenterIcon, count: "3 Services", color: "#8b5cf6", gradient: "linear-gradient(135deg,#8b5cf6,#7c3aed)", description: "100+ experienced professionals." },
      { title: "24/7 Support", icon: BusinessCenterIcon, count: "4 Services", color: "#10b981", gradient: "linear-gradient(135deg,#10b981,#059669)", description: "Round-the-clock maintenance and help." },
    ],
  },
  detailed: {
    subtitle: `We Think Big and Deliver Exceptional ${overview}`,
    title: `${overview} Services for Business Growth`,
    description: `Our ${overview} services are designed to help businesses build, scale, and succeed in the digital landscape.`,
    services: [
      {
        title: "SERVICE OFFERINGS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: services.map((s, i) => ({ title: s[0], desc: s[1], icon: <BusinessCenterIcon /> })),
      },
    ],
  },
  whyChooseUs: {
    subtitle: "WHY VIHAAN",
    title: `Why Leading Businesses Choose Our ${overview} Services`,
    description: `We deliver results-driven ${overview} solutions with a focus on quality, speed and long-term value.`,
    stats: [
      { value: "500+", label: "Projects Delivered" },
      { value: "150+", label: "Happy Clients" },
      { value: "10+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Expert Team", icon: BusinessCenterIcon, desc: "100+ experienced professionals dedicated to your success.", color: "#2563eb", number: "01" },
      { title: "On-Time Delivery", icon: BusinessCenterIcon, desc: "Agile workflows ensure deadlines are always met.", color: "#06b6d4", number: "02" },
      { title: "Modern Approach", icon: BusinessCenterIcon, desc: "We use the latest tools and best practices.", color: "#4f46e5", number: "03" },
      { title: "24/7 Support", icon: BusinessCenterIcon, desc: "Always available for questions and improvements.", color: "#10b981", number: "04" },
    ],
  },
  process: {
    subtitle: "HOW WE WORK",
    title: `Our ${overview} Workflow`,
    description: `A structured, proven process ensures every ${overview} project is delivered with quality and precision.`,
    processSteps: [
      { number: "01", title: "Discovery & Planning", desc: "Understand goals, audience, and requirements.", checks: ["Requirement gathering", "Competitor analysis", "Project roadmap"], position: "above" },
      { number: "02", title: "Strategy & Design", desc: "Create a detailed plan and visual blueprint.", checks: ["Architecture design", "UI/UX wireframes", "Tech stack selection"], position: "below" },
      { number: "03", title: "Development", desc: "Build with best coding practices and performance in mind.", checks: ["Agile sprints", "Code reviews", "Quality assurance"], position: "above" },
      { number: "04", title: "Testing & QA", desc: "Rigorous testing to ensure everything works.", checks: ["Functional testing", "Performance testing", "Bug fixing"], position: "below" },
      { number: "05", title: "Launch", desc: "Deploy to production with zero downtime.", checks: ["Staging environment", "CI/CD pipeline", "Live deployment"], position: "above" },
      { number: "06", title: "Support & Growth", desc: "Ongoing maintenance and continuous improvements.", checks: ["24/7 monitoring", "Updates & patches", "Feature upgrades"], position: "below" },
    ],
  },
  industry: {
    subtitle: "INDUSTRY EXPERTISE",
    title: `Delivering ${overview} Excellence Across Key Industries`,
    description: `We serve diverse industries with tailored ${overview} solutions that drive real business outcomes.`,
    industries: {
      0: { title: industries[0][0], desc: industries[0][1], desc1: industries[0][2], checks: industries[0][3], cards: industries[0][4] },
      1: { title: industries[1][0], desc: industries[1][1], desc1: industries[1][2], checks: industries[1][3], cards: industries[1][4] },
      2: { title: industries[2][0], desc: industries[2][1], desc1: industries[2][2], checks: industries[2][3], cards: industries[2][4] },
    },
    tabs: [
      { label: industries[0][0], icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: industries[1][0], icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: industries[2][0], icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ],
  },
  awards: {
    title: "Recognized for Excellence & Quality",
    list: [
      { title: "Top IT Company", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "High Performer", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Cert", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Best Workculture", body: "HR Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Developer", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ],
  },
  techStack: {
    subtitle: "Technologies We Master",
    title: `Modern Tech Stack for ${overview}`,
    description: `We use industry-leading technologies to deliver world-class ${overview} solutions.`,
    rows: [
      { row: 1, direction: "left", speed: "25s", items: techItems[0] },
      { row: 2, direction: "right", speed: "28s", items: techItems[1] },
    ],
  },
  testimonials: {
    subtitle: "What Our Clients Say",
    title: `Client Reviews on Our ${overview} Services`,
    rating: "4.9/5",
    reviews: "500+",
    list: [
      { name: "Rahul Sharma", text: `Vihaan's ${overview} services helped us launch faster and scale confidently. Absolutely top-notch team!`, initial: "R", color: "#2563eb" },
      { name: "Priya Rao", text: "The quality of delivery was outstanding. Their team understood our vision perfectly.", initial: "P", color: "#10b981" },
      { name: "Karthik Das", text: "Professional, responsive, and technically excellent. Highly recommend Vihaan Innovations.", initial: "K", color: "#8b5cf6" },
      { name: "Sneha Menon", text: "Great communication throughout the project. Delivered on time and within budget.", initial: "S", color: "#f59e0b" },
    ],
  },
  cta: {
    title: ctaTitle,
    description: `Let's build something great together. Book a free discovery call with our ${overview} experts today.`,
    buttonText: "Get Started Today",
    brandText: "Vihaan Innovations",
  },
});

// Reusable industry blocks
const ecomInd = ["E-Commerce", "Scalable, conversion-focused online stores.", "We build high-performance eCommerce platforms with seamless UX.", ["Product Catalogue", "Cart & Checkout", "Order Management", "Payment Gateway"], [{ title: "Product Listings", desc: "Intuitive browsing with filters and smart search." }, { title: "Checkout UX", desc: "Streamlined checkout to reduce cart abandonment." }, { title: "Order Tracking", desc: "Real-time updates and notifications for customers." }, { title: "Payment Integration", desc: "Secure multi-gateway payment support." }]];
const healthInd = ["Healthcare", "Secure, compliant digital health solutions.", "We deliver HIPAA-compliant platforms for hospitals, clinics and patients.", ["Patient Portals", "Appointment Booking", "EHR Integration", "Telemedicine"], [{ title: "Patient Portal", desc: "Secure access to health records and appointments." }, { title: "Telemedicine", desc: "Video consultations and online prescriptions." }, { title: "EHR System", desc: "Integrated electronic health record management." }, { title: "Analytics", desc: "Data-driven insights for better patient care." }]];
const realEstateInd = ["Real Estate", "Modern property platforms that generate leads.", "We build property listing, CRM and booking platforms for real estate.", ["Property Listings", "Advanced Search", "Lead Management", "Booking System"], [{ title: "Property Listings", desc: "Rich media listings with advanced filter and map search." }, { title: "Lead CRM", desc: "Track and manage buyer and seller leads efficiently." }, { title: "Virtual Tours", desc: "3D walkthroughs and video tours for remote buyers." }, { title: "Booking System", desc: "Online property visit scheduling and confirmation." }]];
const eduInd = ["Education", "E-learning and LMS platforms for modern learners.", "We build engaging online learning portals and student management systems.", ["Course Mgmt", "Live Classes", "Student Dashboard", "Assessments"], [{ title: "Course Management", desc: "Create and manage courses, modules and content." }, { title: "Live Classes", desc: "Integrated video classes with recordings." }, { title: "Assessments", desc: "Quizzes, assignments and auto-grading." }, { title: "Certificates", desc: "Automated certificate generation and delivery." }]];
const finInd = ["Finance & Fintech", "Secure fintech and banking solutions.", "We deliver PCI-DSS compliant payment systems and financial dashboards.", ["Payment Gateway", "Digital Wallets", "Reporting", "KYC/AML"], [{ title: "Payment System", desc: "Multi-currency and multi-gateway payment processing." }, { title: "Digital Wallet", desc: "Mobile wallets with instant transfers." }, { title: "KYC/AML", desc: "Automated verification and compliance workflows." }, { title: "Analytics", desc: "Financial dashboards with real-time insights." }]];
const retailInd = ["Retail", "Omnichannel retail solutions.", "We connect in-store and digital commerce for seamless customer journeys.", ["POS Integration", "Inventory Mgmt", "Loyalty Programs", "Analytics"], [{ title: "POS Integration", desc: "Unified online and in-store sales management." }, { title: "Inventory", desc: "Real-time stock tracking across all channels." }, { title: "Loyalty Program", desc: "Points, rewards and referral programs." }, { title: "Analytics", desc: "Customer and sales data dashboards." }]];
const logisticsInd = ["Logistics", "Smart supply chain and logistics solutions.", "We help logistics companies optimize routes, tracking and delivery management.", ["Fleet Tracking", "Route Optimization", "Delivery Management", "Analytics"], [{ title: "Fleet Tracking", desc: "Real-time GPS tracking for all vehicles." }, { title: "Route Optimization", desc: "AI-powered routes to cut fuel costs." }, { title: "Delivery Mgmt", desc: "End-to-end shipment and delivery tracking." }, { title: "Analytics", desc: "KPI dashboards for operations teams." }]];

// ── Main Service Exports ──
export const webDevServiceData = S(
  "Web Design & Development Services in Bangalore",
  "Delivering Premium Websites at Affordable Price. Custom, Responsive, and Scalable Web Solutions.",
  "Web Development",
  [
    ["Custom Website Development", "Fully bespoke websites built from scratch to match your exact brand identity and business goals."],
    ["E-Commerce Development", "Scalable online stores with seamless checkout, payment integration, and inventory management."],
    ["CMS Development", "WordPress, Shopify, and custom CMS solutions that your team can manage without technical knowledge."],
    ["Landing Page Design", "High-conversion landing pages designed to capture leads and drive sales campaigns."],
  ],
  [
    ["React.js", "Next.js", "Vue.js", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    ["Node.js", "PHP", "Laravel", "MySQL", "MongoDB", "PostgreSQL", "AWS", "Docker"],
  ],
  [ecomInd, healthInd, realEstateInd],
  "Ready to Build Your Dream Website?"
);

export const digitalMarketingServiceData = S(
  "Digital Marketing Services in Bangalore",
  "Data-Driven Digital Marketing That Grows Your Business. SEO, PPC, Social Media & Content Marketing.",
  "Digital Marketing",
  [
    ["Search Engine Optimization (SEO)", "Rank higher on Google with proven on-page and off-page SEO strategies."],
    ["Pay-Per-Click Advertising", "Run profitable Google and social media ad campaigns with measurable ROI."],
    ["Social Media Marketing", "Build brand awareness and engage audiences across Instagram, Facebook and LinkedIn."],
    ["Content Marketing", "Create compelling content that attracts, engages and converts your target audience."],
  ],
  [
    ["Google Analytics", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Canva", "Meta Ads"],
    ["Google Ads", "Facebook Ads", "LinkedIn Ads", "WordPress", "Shopify", "Hootsuite", "Buffer"],
  ],
  [ecomInd, retailInd, realEstateInd],
  "Ready to Grow Your Business Online?"
);

export const mobileAppDevServiceData = S(
  "Mobile App Development Services in Bangalore",
  "Build Powerful iOS & Android Apps That Users Love. Native and Cross-Platform Solutions.",
  "Mobile App Development",
  [
    ["iOS App Development", "Native Swift apps built for performance and seamless Apple ecosystem integration."],
    ["Android App Development", "Native Kotlin apps optimized for all Android devices and screen sizes."],
    ["React Native Development", "Cross-platform apps from a single codebase with native-like performance."],
    ["Flutter Development", "Beautiful, fast apps for iOS and Android using Google's Flutter framework."],
  ],
  [
    ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Redux"],
    ["Node.js", "MongoDB", "AWS", "Google Cloud", "Stripe", "Push Notifications", "CI/CD"],
  ],
  [ecomInd, healthInd, eduInd],
  "Ready to Launch Your Mobile App?"
);

export const customSoftwareDevelopmentServiceData = S(
  "Custom Software Development Services in Bangalore",
  "Enterprise-Grade Custom Software Built to Your Exact Specifications.",
  "Custom Software Development",
  [
    ["Enterprise Application Development", "Large-scale software solutions for complex business workflows and processes."],
    ["SaaS Product Development", "Multi-tenant cloud-based software products built to scale globally."],
    ["Legacy System Modernization", "Upgrade outdated systems to modern, cloud-ready architectures."],
    ["API & Integration Development", "Connect your systems with third-party tools via robust REST and GraphQL APIs."],
  ],
  [
    ["React", "Angular", "Node.js", "Python", "Java", "Spring Boot", ".NET", "PHP"],
    ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis"],
  ],
  [finInd, healthInd, logisticsInd],
  "Ready to Build Custom Software?"
);

export const cloudComputingServiceData = S(
  "Cloud Computing Services in Bangalore",
  "Scale Your Business with Reliable, Secure and Cost-Effective Cloud Solutions.",
  "Cloud Computing",
  [
    ["Cloud Migration", "Seamlessly move your workloads to AWS, Azure, or Google Cloud with zero downtime."],
    ["Cloud Architecture Design", "Design scalable, resilient cloud infrastructures tailored to your needs."],
    ["Managed Cloud Services", "24/7 monitoring, optimization, and management of your cloud environment."],
    ["Serverless Development", "Build and deploy functions-as-a-service for cost-efficient, auto-scaling backends."],
  ],
  [
    ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Helm"],
    ["Lambda", "EC2", "S3", "RDS", "CloudFront", "Load Balancer", "VPC", "IAM"],
  ],
  [finInd, healthInd, retailInd],
  "Ready to Move to the Cloud?"
);

export const devopsServicesServiceData = S(
  "DevOps Services in Bangalore",
  "Accelerate Delivery with CI/CD Pipelines, Infrastructure Automation & Cloud DevOps.",
  "DevOps",
  [
    ["CI/CD Pipeline Setup", "Automate build, test and deployment pipelines for faster, safer releases."],
    ["Infrastructure as Code", "Manage infrastructure with Terraform, Ansible and CloudFormation."],
    ["Container Orchestration", "Deploy and manage microservices with Docker and Kubernetes."],
    ["Monitoring & Observability", "Full-stack monitoring with Prometheus, Grafana, and ELK Stack."],
  ],
  [
    ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes", "Terraform", "Ansible"],
    ["AWS", "Azure", "Prometheus", "Grafana", "ELK Stack", "Nginx", "Vault", "Harbor"],
  ],
  [finInd, logisticsInd, retailInd],
  "Ready to Accelerate Your Delivery?"
);

export const dataAnalyticsServiceData = S(
  "Data Analytics & Big Data Services in Bangalore",
  "Turn Raw Data into Actionable Business Insights with Advanced Analytics.",
  "Data Analytics",
  [
    ["Business Intelligence", "Custom dashboards and reports that make data accessible to every stakeholder."],
    ["Big Data Engineering", "Build data lakes and pipelines to process and analyze massive datasets."],
    ["Predictive Analytics", "Machine learning models that forecast trends and business outcomes."],
    ["Data Visualization", "Interactive charts, graphs and dashboards using Power BI, Tableau and D3.js."],
  ],
  [
    ["Python", "R", "SQL", "Spark", "Hadoop", "Kafka", "Airflow", "dbt"],
    ["Power BI", "Tableau", "Looker", "BigQuery", "Snowflake", "AWS Redshift", "Databricks"],
  ],
  [finInd, healthInd, retailInd],
  "Ready to Unlock Your Data's Potential?"
);

export const aiMlDevServiceData = S(
  "AI / ML & Automation Services in Bangalore",
  "Leverage Artificial Intelligence to Automate, Predict and Innovate.",
  "AI / ML Development",
  [
    ["Machine Learning Models", "Custom ML models for classification, regression, and recommendation."],
    ["Natural Language Processing", "Chatbots, text analytics, sentiment analysis and document extraction."],
    ["Computer Vision", "Image recognition, object detection, and video analytics solutions."],
    ["AI Automation", "RPA and intelligent process automation to eliminate manual workflows."],
  ],
  [
    ["Python", "TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "Hugging Face", "LangChain"],
    ["OpenAI", "AWS SageMaker", "Azure ML", "MLflow", "FastAPI", "Kafka", "Spark MLlib"],
  ],
  [healthInd, finInd, retailInd],
  "Ready to Build AI-Powered Solutions?"
);

export const softwareMaintenanceServiceData = S(
  "Software Maintenance & Support Services in Bangalore",
  "Keep Your Software Secure, Up-to-Date and Running at Peak Performance.",
  "Software Maintenance",
  [
    ["Bug Fixing & Patches", "Rapid identification and resolution of bugs, errors, and performance issues."],
    ["Feature Enhancements", "Add new features and improve existing functionality to meet evolving needs."],
    ["Security Updates", "Regular security patches and vulnerability assessments to protect your systems."],
    ["Performance Optimization", "Code refactoring, database tuning, and infrastructure upgrades for speed."],
  ],
  [
    ["React", "Angular", "Node.js", "Python", "Java", ".NET", "PHP", "Laravel"],
    ["AWS", "Docker", "MySQL", "MongoDB", "Redis", "Nginx", "CI/CD", "Sentry"],
  ],
  [ecomInd, healthInd, finInd],
  "Ready to Keep Your Software Running Perfectly?"
);

export const seoServicesServiceData = S(
  "SEO Services in Bangalore — Rank #1 on Google",
  "Drive Organic Traffic and Rank Higher with Proven SEO Strategies.",
  "SEO",
  [
    ["On-Page SEO", "Optimize meta tags, headings, content, and internal linking for better rankings."],
    ["OFF-Page SEO", "Build authority, credibility, and trust with high-quality backlinks and brand mentions."],
    ["Off-Page SEO & Link Building", "Build high-authority backlinks to improve domain authority and rankings."],
    ["Local SEO", "Dominate local search results with Google My Business optimization and local citations."],
  ],
  [
    ["Google Search Console", "Ahrefs", "SEMrush", "Moz", "Screaming Frog", "Yoast SEO"],
    ["Google Analytics", "GTM", "PageSpeed Insights", "Ubersuggest", "BrightLocal", "Majestic"],
  ],
  [ecomInd, retailInd, realEstateInd],
  "Ready to Rank #1 on Google?"
);

export const socialMediaMarketingServiceData = S(
  "Social Media Marketing Services in Bangalore",
  "Build Your Brand, Grow Your Audience and Drive Sales on Social Media.",
  "Social Media Marketing",
  [
    ["Social Media Strategy", "Data-driven social media plans tailored to your brand goals and audience."],
    ["Content Creation & Management", "Eye-catching posts, reels, stories and campaigns managed consistently."],
    ["Paid Social Advertising", "Targeted Facebook, Instagram and LinkedIn ad campaigns with measurable ROI."],
    ["Influencer Marketing", "Connect with the right influencers to amplify your brand reach and credibility."],
  ],
  [
    ["Meta Business Suite", "Canva", "Hootsuite", "Buffer", "Later", "Sprout Social"],
    ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "TikTok Ads", "Google Analytics", "Mailchimp"],
  ],
  [ecomInd, retailInd, eduInd],
  "Ready to Dominate Social Media?"
);

export const ppcAdvertisingServiceData = S(
  "PPC Advertising & Google Ads Services in Bangalore",
  "Run Profitable Pay-Per-Click Campaigns That Deliver Measurable ROI.",
  "PPC Advertising",
  [
    ["Google Search Ads", "Capture high-intent buyers actively searching for your products and services."],
    ["Display & Remarketing Ads", "Stay top of mind with visually compelling ads across the Google Display Network."],
    ["Shopping Campaigns", "Showcase your products directly in Google search results with Shopping Ads."],
    ["YouTube Advertising", "Reach audiences on YouTube with skippable and non-skippable video ads."],
  ],
  [
    ["Google Ads", "Google Analytics", "Google Tag Manager", "SEMrush", "SpyFu"],
    ["Facebook Ads", "LinkedIn Ads", "Microsoft Ads", "Canva", "Unbounce", "Hotjar"],
  ],
  [ecomInd, retailInd, realEstateInd],
  "Ready to Run Profitable Ad Campaigns?"
);

export const videoMarketingServiceData = S(
  "Video Marketing Services in Bangalore",
  "Tell Your Brand Story Through Compelling Videos That Convert.",
  "Video Marketing",
  [
    ["Brand Video Production", "Professional brand videos that communicate your value proposition powerfully."],
    ["Explainer Videos", "Animated and live-action explainers that simplify complex products and services."],
    ["YouTube Marketing", "Channel optimization, video SEO and YouTube ad campaigns for maximum reach."],
    ["Social Media Video Content", "Short-form videos, reels and stories optimized for each social platform."],
  ],
  [
    ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Canva"],
    ["YouTube Studio", "Loom", "Wistia", "Vimeo", "OBS Studio", "Powtoon", "Animaker"],
  ],
  [ecomInd, eduInd, retailInd],
  "Ready to Tell Your Story Through Video?"
);

export const emailMarketingServiceData = S(
  "Email Marketing Services in Bangalore",
  "Build Relationships and Drive Revenue with High-Converting Email Campaigns.",
  "Email Marketing",
  [
    ["Email Campaign Strategy", "Data-driven email plans aligned with your sales funnel and business goals."],
    ["Template Design", "Professional, mobile-responsive email templates that match your brand identity."],
    ["Marketing Automation", "Drip campaigns, welcome sequences and behavioral trigger emails."],
    ["List Management & Segmentation", "Clean, segment and grow your email list for higher open and click rates."],
  ],
  [
    ["Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign", "Sendinblue", "Constant Contact"],
    ["Google Analytics", "Litmus", "Canva", "Zapier", "Salesforce", "WordPress"],
  ],
  [ecomInd, eduInd, finInd],
  "Ready to Scale with Email Marketing?"
);

export const contentMarketingServiceData = S(
  "Content Marketing Services in Bangalore",
  "Attract, Engage and Convert Your Audience with Strategic Content.",
  "Content Marketing",
  [
    ["Content Strategy", "Research-backed content plans aligned with your SEO goals and buyer journey."],
    ["Blog & Article Writing", "SEO-optimized long-form content that ranks and drives organic traffic."],
    ["Social Media Content", "Platform-specific content calendars for consistent brand presence."],
    ["Infographics & Visual Content", "Engaging visual content that simplifies complex ideas and boosts shares."],
  ],
  [
    ["WordPress", "HubSpot", "SEMrush", "Ahrefs", "BuzzSumo", "Grammarly", "Canva"],
    ["Google Analytics", "Notion", "Trello", "Mailchimp", "Buffer", "Hootsuite"],
  ],
  [ecomInd, eduInd, retailInd],
  "Ready to Grow with Content Marketing?"
);

export const influencerMarketingServiceData = S(
  "Influencer Marketing Services in Bangalore",
  "Amplify Your Brand with the Power of Authentic Influencer Partnerships.",
  "Influencer Marketing",
  [
    ["Influencer Discovery & Outreach", "Find and connect with the right influencers for your brand niche."],
    ["Campaign Management", "End-to-end influencer campaign execution from brief to post-campaign report."],
    ["Micro-Influencer Campaigns", "High-engagement campaigns with trusted niche influencers."],
    ["Performance Tracking", "Real-time analytics on reach, engagement, and campaign ROI."],
  ],
  [
    ["Instagram", "YouTube", "TikTok", "LinkedIn", "Twitter/X", "Facebook"],
    ["Upfluence", "AspireIQ", "Heepsy", "Canva", "Google Analytics", "Hootsuite"],
  ],
  [ecomInd, retailInd, eduInd],
  "Ready to Grow with Influencer Marketing?"
);

export const graphicDesignServiceData = {
  hero: {
    title: "Professional Graphic Design Company",
    subtitle: "A graphic design company delivering creative and visually compelling designs that enhance your brand identity.",
    badgeText: "🚀 Creative Visuals That Tell Your Brand Story!",
    buttonText: "Get Started Now",
    features: [
      { icon: BusinessCenterIcon, text: "Location-Based Development" },
      { icon: BusinessCenterIcon, text: "Trusted Support Team" },
      { icon: BusinessCenterIcon, text: "On-Time Delivery" },
      { icon: BusinessCenterIcon, text: "Compatible Across All Devices" },
      { icon: BusinessCenterIcon, text: "High-Quality Work" },
      { icon: BusinessCenterIcon, text: "Experienced Development Team" },
    ]
  },

  overview: {
    subtitle: "What We Provide",
    title: "Graphic Design Solutions",
    description: "We provide innovative graphic design services, including logo creation, branding, social media visuals, and marketing materials to make your business stand out.",
    list: [
      { title: "Logo & Brand Design", icon: BusinessCenterIcon, count: "Brand First", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "Create unique logos and a strong brand identity." },
      { title: "Social Media Creatives", icon: BusinessCenterIcon, count: "Engaging Content", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "Design engaging posts and ads to attract your audience." },
      { title: "Marketing Materials", icon: BusinessCenterIcon, count: "Professional Print", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Create professional flyers, brochures, and posters." },
      { title: "Website & UI Graphics", icon: BusinessCenterIcon, count: "Modern Visuals", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "Design modern website visuals, banners, and UI elements." },
    ]
  },

  detailed: {
    subtitle: "OUR SERVICES",
    title: "Branding Designs for Memorable Identity",
    description: "We create impactful Branding Designs that help build a strong and memorable brand identity.",
    services: [
      {
        title: "DESIGN OFFERINGS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Brand Identity Design", desc: "Creating unique logos, color schemes, and brand guidelines.", icon: <BusinessCenterIcon /> },
          { title: "Print & Digital Design", desc: "Crafting flyers, business cards, social media posts, and banners.", icon: <BusinessCenterIcon /> },
          { title: "Illustration & Custom Graphics", desc: "Providing custom illustrations and unique graphic elements.", icon: <BusinessCenterIcon /> },
          { title: "UI/UX Visuals", desc: "Designing visual layouts and icons for websites and apps.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY CHOOSE VIHAAN",
    title: "The Best Graphic Design Company for Your Business",
    description: "As a professional graphic design company, we focus on delivering high-quality and creative designs that help your business grow.",
    stats: [
      { value: "500+", label: "Designs Created" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "10+", label: "Expert Designers" },
    ],
    reasons: [
      { title: "Creative & Unique Designs", icon: BusinessCenterIcon, desc: "We provide original designs tailored to your brand.", color: "#2563eb", number: "01" },
      { title: "Experienced Designers", icon: BusinessCenterIcon, desc: "Our team has years of expertise in visual storytelling.", color: "#06b6d4", number: "02" },
      { title: "Quick Turnaround Time", icon: BusinessCenterIcon, desc: "We deliver high-quality work within deadlines.", color: "#4f46e5", number: "03" },
      { title: "Affordable Pricing", icon: BusinessCenterIcon, desc: "Get premium design services at competitive rates.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "Our Design Process",
    title: "How We Create Stunning Designs",
    description: "We follow a step-by-step graphic design process to ensure the best results for your brand.",
    processSteps: [
      { number: "01", title: "Project Understanding", desc: "We discuss your design requirements and goals.", checks: ["Client Brief", "Concept Discussion", "Goal Setting"], position: "above" },
      { number: "02", title: "Research & Brainstorming", desc: "We research market trends and brainstorm creative ideas.", checks: ["Market Research", "Moodboard Creation", "Idea Generation"], position: "below" },
      { number: "03", title: "Sketching & Conceptualization", desc: "We create initial sketches and concepts for your design.", checks: ["Rough Sketches", "Drafting Concepts", "Refining Ideas"], position: "above" },
      { number: "04", title: "Actual Design & Refinement", desc: "We develop the final design using modern tools.", checks: ["Digital Designing", "Color & Typography", "Detailed Refinement"], position: "below" },
      { number: "05", title: "Client Feedback & Revisions", desc: "We share the design for your review and make necessary changes.", checks: ["Review Session", "Iterative Changes", "Final Tweaks"], position: "above" },
      { number: "06", title: "Final Delivery", desc: "We deliver the high-quality final files in required formats.", checks: ["File Preparation", "Quality Check", "Transfer Assets"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Industry Expertise",
    title: "Custom Designs for Every Business Sector",
    description: "We provide specialized graphic design services tailored to the unique needs of different industries.",
    industries: {
      0: {
        title: "Real Estate CRM",
        desc: "Designing professional brochures, flyers, and digital ads to showcase real estate properties and services effectively.",
        desc1: "Creating visually appealing marketing materials that attract potential buyers and investors.",
        checks: ["Property Flyers", "Digital Ads", "Zonal Maps", "Brochure Design"],
        cards: [
          { title: "Marketing Kits", desc: "Complete sets of property marketing materials." },
          { title: "Virtual Displays", desc: "Visual assets for online property showcases." },
          { title: "Social Ads", desc: "Eye-catching ads for real estate social media campaigns." },
          { title: "Site Maps", desc: "Clean and detailed site maps for property layouts." }
        ]
      },
      1: {
        title: "Ecommerce Single Vendor",
        desc: "Creating high-converting product graphics, banners, and promotional materials for online stores.",
        desc1: "Designing visual elements that enhance the shopping experience and boost sales.",
        checks: ["Product Banners", "Social Media Posts", "Discount Flyers", "Icon Sets"],
        cards: [
          { title: "Home Banners", desc: "Attention-grabbing hero banners for online stores." },
          { title: "Product Graphics", desc: "Visuals that highlight product features beautifully." },
          { title: "Promo Ads", desc: "Creative ads for seasonal sales and offers." },
          { title: "Social Graphics", desc: "Consistent branding across social commerce channels." }
        ]
      },
      2: {
        title: "Resort Booking & Management",
        desc: "Designing elegant brochures, visual menus, and social media content for the hospitality and travel industry.",
        desc1: "Creating visuals that convey luxury, comfort, and memorable experiences.",
        checks: ["Resort Brochures", "Digital Menu Cards", "Travel Creatives", "Logo Refresh"],
        cards: [
          { title: "Experience Guides", desc: "Brochures that showcase resort amenities and activities." },
          { title: "Visual Menus", desc: "Elegant digital and print menus for resort dining." },
          { title: "Holiday Ads", desc: "Social media ads for holiday packages and stays." },
          { title: "Brand Assets", desc: "Stationery and branding materials for resort use." }
        ]
      },
    },
    tabs: [
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Ecommerce", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hospitality", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Recognized for Creative Excellence",
    list: [
      { title: "Design Excellence", body: "Awwwards", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Top Creative Agency", body: "Clutch", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Brand Innovation", body: "Behance", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Quality Certified", body: "ISO 9001", year: "2025", icon: GppGoodIcon, color: "#10b981" },
    ]
  },

  techStack: {
    subtitle: "Creative Expertise",
    title: "Modern Design Tools We Use",
    description: "We use professional graphic design tools to create high-quality visuals for our clients.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Photoshop", "Illustrator", "Figma", "Indesign"] },
      { row: 2, direction: "right", speed: "28s", items: ["After Effects", "CorelDraw", "Sketch", "Canva Pro"] },
    ]
  },

  testimonials: {
    subtitle: "Client Feedback",
    title: "What Our Clients Say",
    rating: "4.9/5",
    reviews: "500+",
    list: [
      { name: "Suresh Rao", text: "The graphic design team at Vihaan is incredibly creative. They revamped our brand identity with a modern and professional touch.", initial: "S", color: "#2563eb" },
      { name: "Meera Nair", text: "Exceptional marketing materials! The brochures and social media posts they designed helped us increase our customer engagement significantly.", initial: "M", color: "#10b981" },
      { name: "Karthik Hegde", text: "Fast delivery and amazing creativity. They understood our requirements perfectly and delivered a logo that we absolutely love.", initial: "K", color: "#8b5cf6" },
      { name: "Priya Sharma", text: "Their UI/UX visuals for our mobile app are stunning. The design consistency and attention to detail are remarkable.", initial: "P", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Take the Next Step with Our<br />Professional Graphic Design Services
      </>
    ),
    description: "Let’s create visuals that elevate your brand and engage your audience.",
    buttonText: "Request a Free Quote",
    brandText: "Vihaan Creative Studio"
  }
};

export const twoDAnimationServiceData = {
  hero: {
    title: "Professional 2D Animation Company",
    subtitle: "A 2D animation company creating engaging storytelling and high-quality character animations for your brand.",
    badgeText: "🎬 Bring Your Ideas to Life with 2D Magic!",
    buttonText: "Start Your Animation",
    features: [
      { icon: BusinessCenterIcon, text: "Storyboarding & Scripting" },
      { icon: BusinessCenterIcon, text: "Character Design" },
      { icon: BusinessCenterIcon, text: "Smooth Motion Graphics" },
      { icon: BusinessCenterIcon, text: "Voiceover & Audio Sync" },
      { icon: BusinessCenterIcon, text: "High-Resolution Output" },
      { icon: BusinessCenterIcon, text: "Creative Storytelling" },
    ]
  },

  overview: {
    subtitle: "Expert 2D Solutions",
    title: "Engaging 2D Animations",
    description: "We provide professional 2D animation services, including explainer videos, character animation, and marketing content.",
    list: [
      { title: "Explainer Videos", icon: BusinessCenterIcon, count: "Educational", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "Simplify complex ideas with 2D explainer videos." },
      { title: "Character Design", icon: BusinessCenterIcon, count: "Unique Styles", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "Develop unique characters that resonate with your brand." },
      { title: "Whiteboard Animation", icon: BusinessCenterIcon, count: "Visual Teaching", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Creative whiteboard videos for training and education." },
      { title: "Ad Campaigns", icon: BusinessCenterIcon, count: "Promotional", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "Boost sales with engaging 2D animation ads." },
    ]
  },

  detailed: {
    subtitle: "OUR EXPERTISE",
    title: "Comprehensive 2D Animation Services",
    description: "Our 2D animation services combine creativity and technology to deliver impactful visual content.",
    services: [
      {
        title: "ANIMATION TYPES",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Explainer Video Production", desc: "Creating detailed 2D videos to explain products or services.", icon: <BusinessCenterIcon /> },
          { title: "Character Animation", desc: "Animating characters for storytelling and brand engagement.", icon: <BusinessCenterIcon /> },
          { title: "Corporate Presentations", desc: "Adding animation to corporate decks for better impact.", icon: <BusinessCenterIcon /> },
          { title: "Educational Content", desc: "Designing animated tutorials and lessons for learning.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY VIHAAN",
    title: "Leading 2D Animation Agency",
    description: "We are a top 2D animation company focused on delivering creative storytelling that converts.",
    stats: [
      { value: "300+", label: "Videos Delivered" },
      { value: "95%", label: "Retention Rate" },
      { value: "8+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Custom Art Styles", icon: BusinessCenterIcon, desc: "We create visuals that match your specific brand voice.", color: "#2563eb", number: "01" },
      { title: "Professional Scripts", icon: BusinessCenterIcon, desc: "Engaging scripts that keep your audience hooked.", color: "#06b6d4", number: "02" },
      { title: "Fluid Motion", icon: BusinessCenterIcon, desc: "Smooth and frame-perfect animation quality.", color: "#4f46e5", number: "03" },
      { title: "End-to-End Production", icon: BusinessCenterIcon, desc: "From concept to final render, we handle everything.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "Animation Workflow",
    title: "From Script to Screen",
    description: "Our structured 2D animation process ensures clarity and high production value.",
    processSteps: [
      { number: "01", title: "Script Writing", desc: "Creating a compelling script for your message.", checks: ["Narrative Flow", "Tone Setting", "Clear CTA"], position: "above" },
      { number: "02", title: "Storyboarding", desc: "Planning visuals frame by frame for better clarity.", checks: ["Visual Layout", "Scene Sequence", "Timing"], position: "below" },
      { number: "03", title: "Asset Design", desc: "Designing characters, backgrounds, and elements.", checks: ["Character Creation", "Environment Art", "Styling"], position: "above" },
      { number: "04", title: "Animation Phase", desc: "Bringing the designs to life with motion.", checks: ["Keyframing", "Motion Paths", "Rigging"], position: "below" },
      { number: "05", title: "Audio & Effects", desc: "Adding voiceover, sound effects, and background music.", checks: ["VO Recording", "Sound Design", "Audio Mix"], position: "above" },
      { number: "06", title: "Final Export", desc: "Rendering the final video in your preferred format.", checks: ["Mastering", "Format Conversion", "Delivery"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Target Sectors",
    title: "2D Animation for Impactful Growth",
    description: "We tailor our 2D animations to meet the specific requirements of various business sectors.",
    industries: {
      0: {
        title: "EdTech & Learning",
        desc: "Creating animated lessons and tutorials that make learning fun and easy to understand.",
        desc1: "Simplifying complex subjects through visual storytelling and engaging characters.",
        checks: ["Visual Tutorials", "K-12 Content", "Corporate Training", "Language Learning"],
        cards: [
          { title: "LMS Videos", desc: "Standardized educational videos for online platforms." },
          { title: "Conceptual Clips", desc: "Short animations explaining scientific or technical ideas." },
          { title: "Interactive Lessons", desc: "Visual assets for gamified learning experiences." },
          { title: "Safety Modules", desc: "Animated safety guidelines for various workplaces." }
        ]
      },
      1: {
        title: "Health & Pharma",
        desc: "Designing animations that explain medical procedures, drug mechanisms, and healthcare tips.",
        desc1: "Building trust and clarity through simplified medical visualizations.",
        checks: ["Patient Education", "Drug Explainers", "Surgical Visuals", "Health Awareness"],
        cards: [
          { title: "Procedure Overviews", desc: "Simplified views of complex medical treatments." },
          { title: "Safety Protocol", desc: "Animated guides for hospital staff and patients." },
          { title: "Product Features", desc: "Visualizing how medical devices work." },
          { title: "Symptom Guides", desc: "Easy-to-follow health awareness videos." }
        ]
      },
      2: {
        title: "Corporate & SaaS",
        desc: "Delivering professional explainer videos that highlight SaaS product features and benefits.",
        desc1: "Increasing user adoption through clear and engaging software walkthroughs.",
        checks: ["Product Demos", "Feature Updates", "Onboarding Videos", "Sales Pitches"],
        cards: [
          { title: "Feature Reveals", desc: "Dynamic animations showcasing new app functions." },
          { title: "User Onboarding", desc: "Step-by-step guides for new platform users." },
          { title: "Brand Stories", desc: "Animated narratives reflecting corporate values." },
          { title: "Investor Pitch", desc: "Engaging visuals for business presentations." }
        ]
      },
    },
    tabs: [
      { label: "Education", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Corporate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Award-Winning Animation House",
    list: [
      { title: "Best Explainer", body: "Vimeo", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Animation Excellence", body: "Clutch", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Storytelling Award", body: "Design Week", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Creative Choice", body: "Behance", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Software Stack",
    title: "Tools for Fluid 2D Motion",
    description: "We use advanced software to deliver high-fidelity 2D animations.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Adobe Animate", "After Effects", "Toon Boom Harmony"] },
      { row: 2, direction: "right", speed: "28s", items: ["Moho Pro", "Storyboard Pro", "Affinity Designer", "Audition"] },
    ]
  },

  testimonials: {
    subtitle: "Client Voice",
    title: "Satisfied Animation Clients",
    rating: "4.9/5",
    reviews: "450+",
    list: [
      { name: "Anil Kapoor", text: "The explainer video Vihaan created for our app is fantastic. It simplified our message and increased signups by 40%!", initial: "A", color: "#2563eb" },
      { name: "Sarah John", text: "Beautiful character designs and smooth animation. They handled our children's story series with great care and creativity.", initial: "S", color: "#10b981" },
      { name: "Rajesh V", text: "Professional team with great timing. The storyboard was detailed and the final render surpassed our expectations.", initial: "R", color: "#8b5cf6" },
      { name: "Emma Watson", text: "Our corporate onboarding animation is a huge hit! It's engaging, clear, and perfectly matches our brand aesthetics.", initial: "E", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Create Your 2D Story with a<br />Professional Animation Company?
      </>
    ),
    description: "Let’s build animations that resonate with your audience and grow your business.",
    buttonText: "Get a Custom Quote",
    brandText: "Vihaan 2D Studio"
  }
};

export const threeDAnimationServiceData = {
  hero: {
    title: "Leading 3D Animation Company",
    subtitle: "A 3D animation company providing high-end 3D modeling, lighting, and realistic animations for various industries.",
    badgeText: "🧤 Experience Realism with 3D Excellence!",
    buttonText: "Book a Demo",
    features: [
      { icon: BusinessCenterIcon, text: "High-Poly Modeling" },
      { icon: BusinessCenterIcon, text: "Realistic Texturing" },
      { icon: BusinessCenterIcon, text: "Cinematic Lighting" },
      { icon: BusinessCenterIcon, text: "Advanced Character Rigging" },
      { icon: BusinessCenterIcon, text: "Architectural Walkthroughs" },
      { icon: BusinessCenterIcon, text: "Product Visualizations" },
    ]
  },

  overview: {
    subtitle: "3D Visual Solutions",
    title: "Advanced 3D Animation",
    description: "We provide professional 3D animation services, including architectural rendering, product modeling, and cinematic videos.",
    list: [
      { title: "Product Modeling", icon: BusinessCenterIcon, count: "Hyper-Realistic", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "Visualizing products with 360-degree 3D detail." },
      { title: "ArchViz Walkthroughs", icon: BusinessCenterIcon, count: "Virtual Tours", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "Immersive architectural walkthroughs for real estate." },
      { title: "Industrial Renders", icon: BusinessCenterIcon, count: "Precision Work", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Visualizing machines and technical processes in 3D." },
      { title: "Character CGI", icon: BusinessCenterIcon, count: "Life-Like", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "Creating realistic 3D characters for media and gaming." },
    ]
  },

  detailed: {
    subtitle: "PRECISION & ART",
    title: "Specialized 3D Design Services",
    description: "Our 3D animation services deliver high-quality visuals that offer a depth and realism impossible in 2D.",
    services: [
      {
        title: "3D CAPABILITIES",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Architectural Rendering", desc: "Creating realistic 3D interiors and exteriors.", icon: <BusinessCenterIcon /> },
          { title: "Product Visualization", desc: "Showcasing products with photorealistic 3D renders.", icon: <BusinessCenterIcon /> },
          { title: "Character 3D Animation", desc: "Modeling and animating realistic characters.", icon: <BusinessCenterIcon /> },
          { title: "Industrial Modeling", desc: "Visualizing complex machinery and engineering models.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY VIHAAN",
    title: "VFX & 3D Animation Specialists",
    description: "As a premier 3D animation company, we bring unmatched technical depth and artistic vision to every project.",
    stats: [
      { value: "200+", label: "3D Projects" },
      { value: "50+", label: "Brand Partners" },
      { value: "12+", label: "CGI Artists" },
    ],
    reasons: [
      { title: "Photorealistic Quality", icon: BusinessCenterIcon, desc: "Renders that look exactly like the real thing.", color: "#2563eb", number: "01" },
      { title: "Cutting-Edge Rendering", icon: BusinessCenterIcon, desc: "Using high-end render farms for speed and quality.", color: "#06b6d4", number: "02" },
      { title: "Technical Accuracy", icon: BusinessCenterIcon, desc: "Precise dimensions and material properties.", color: "#4f46e5", number: "03" },
      { title: "Cinematic Aesthetics", icon: BusinessCenterIcon, desc: "Lighting and camera work that feels like a movie.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "3D Pipeline",
    title: "Our Detailed 3D Workflow",
    description: "We follow a complex but efficient 3D production pipeline for superior results.",
    processSteps: [
      { number: "01", title: "3D Modeling", desc: "Building the geometric structure of objects.", checks: ["Topology Check", "Scaling", "Refining Meshes"], position: "above" },
      { number: "02", title: "Texturing & UV", desc: "Applying realistic materials and surface details.", checks: ["UV Mapping", "PBR Textures", "Shaders"], position: "below" },
      { number: "03", title: "Rigging & Setup", desc: "Adding bones and controls for animation.", checks: ["Skeleton Setup", "Skinning", "Controller Logic"], position: "above" },
      { number: "04", title: "Animation & Keyframing", desc: "Creating motion and physical behaviors.", checks: ["Physics Sim", "Motion Capture", "Refinement"], position: "below" },
      { number: "05", title: "Lighting & Rendering", desc: "Adding lights and generating final frames.", checks: ["Global Illumination", "Ray Tracing", "Multi-pass Render"], position: "above" },
      { number: "06", title: "Post-Processing", desc: "Color grading and final compositing.", checks: ["Color Correction", "FX Layers", "Final Cut"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Core Industries",
    title: "3D Solutions for Market Leaders",
    description: "Our 3D animation services are highly utilized across industries requiring high-fidelity visualization.",
    industries: {
      0: {
        title: "Real Estate & Arch",
        desc: "Transforming floor plans into photorealistic virtual tours and stunning marketing renders.",
        desc1: "Helping buyers visualize their future homes with immersive 3D walkthroughs.",
        checks: ["Virtual Tours", "Interior Design", "Exterior Renders", "Floor Plan 3D"],
        cards: [
          { title: "Unit Showcases", desc: "Detailed 3D views of individual apartment units." },
          { title: "Landspace Renders", desc: "Aerial views of resort and complex layouts." },
          { title: "Day/Night Renders", desc: "Visualizing properties under different lighting conditions." },
          { title: "Flythrough Clips", desc: "Cinematic drone-like videos of large developments." }
        ]
      },
      1: {
        title: "Consumer Goods",
        desc: "Creating hyper-realistic product animations for advertisements and ecommerce platforms.",
        desc1: "Showcasing every angle and detail of your product in stunning high-definition.",
        checks: ["360 Views", "Exploded Views", "Usage Demos", "Unboxing Sim"],
        cards: [
          { title: "Material Detail", desc: "Highlighting premium textures and build quality." },
          { title: "Mechanism Sim", desc: "Showing internal parts and how they work." },
          { title: "Commercial Ads", desc: "Stylized 3D renders for social media and TV." },
          { title: "Interactive Models", desc: "Embeddable 3D models for website product pages." }
        ]
      },
      2: {
        title: "Automotive & Eng",
        desc: "Visualizing vehicles and industrial components with extreme precision and realism.",
        desc1: "Providing engineering-grade visualizations for technical presentations and marketing.",
        checks: ["Car Walkarounds", "Engine Sim", "Assembly Vids", "Aerodynamics Sim"],
        cards: [
          { title: "Exterior Renders", desc: "Realistic lighting on car paints and curvatures." },
          { title: "Interior Details", desc: "Showcasing cockpit tech and upholstery textures." },
          { title: "Process Flows", desc: "Visualizing how machines operate internally." },
          { title: "Safety Testing", desc: "Simulated impact and safety feature animations." }
        ]
      },
    },
    tabs: [
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Product Design", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Automotive", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Global 3D Recognition",
    list: [
      { title: "Best CGI", body: "3D World", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Product Visual", body: "Clutch", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Innovation Award", body: "AutoDesk", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top VFX House", body: "GoodFirms", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "3D Ecosystem",
    title: "High-End 3D Technologies",
    description: "We use the industry's best software to deliver photorealistic 3D content.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Blender", "3ds Max", "Maya", "Cinema 4D"] },
      { row: 2, direction: "right", speed: "28s", items: ["ZBrush", "Substance Painter", "V-Ray", "Unreal Engine"] },
    ]
  },

  testimonials: {
    subtitle: "Success Stories",
    title: "What Our 3D Clients Say",
    rating: "5.0/5",
    reviews: "320+",
    list: [
      { name: "John Doe", text: "The 3D walkthrough they created for our luxury villas is breathtaking. It helped us close 30% of our units before construction!", initial: "J", color: "#2563eb" },
      { name: "David L", text: "Photorealistic product renders. Truly amazing work on the textures and lighting. Our customers love the 3D viewers.", initial: "D", color: "#10b981" },
      { name: "Sanjay M", text: "Technically perfect industrial animation. They understood the mechanics of our machinery and visualized it flawlessly.", initial: "S", color: "#8b5cf6" },
      { name: "Anna K", text: "High-end cinematic quality. Vihaan's 3D team is world-class. They brought our brand mascot to life with incredible detail.", initial: "A", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Experience 3D Realism with a<br />Professional 3D Animation Company?
      </>
    ),
    description: "Let’s create immersive 3D experiences that elevate your brand to the next dimension.",
    buttonText: "Request a Proposal",
    brandText: "Vihaan 3D Studios"
  }
};

export const motionGraphicsServiceData = {
  hero: {
    title: "Expert Motion Graphics Agency",
    subtitle: "A motion graphics agency delivering high-energy visual effects and dynamic animations for social media and marketing.",
    badgeText: "⚡ Dynamic Motion for Maximum Engagement!",
    buttonText: "Elevate Your Content",
    features: [
      { icon: BusinessCenterIcon, text: "Typography Animation" },
      { icon: BusinessCenterIcon, text: "Logo Animation" },
      { icon: BusinessCenterIcon, text: "Infographic Motion" },
      { icon: BusinessCenterIcon, text: "UI/UX Motion Design" },
      { icon: BusinessCenterIcon, text: "Kinetic Typography" },
      { icon: BusinessCenterIcon, text: "Seamless Transitions" },
    ]
  },

  overview: {
    subtitle: "Motion Design",
    title: "Modern Motion Graphics",
    description: "We provide high-impact motion graphics services for social media ads, corporate videos, and UI interactions.",
    list: [
      { title: "Animated Logos", icon: BusinessCenterIcon, count: "Brand Impact", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "Make your brand memorable with animated logomarks." },
      { title: "Kinetic Type", icon: BusinessCenterIcon, count: "Bold Message", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "Typography that moves to capture attention instantly." },
      { title: "Infographic Motion", icon: BusinessCenterIcon, count: "Data Viz", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "Transforming boring data into engaging visual stories." },
      { title: "UI Animations", icon: BusinessCenterIcon, count: "UX Flow", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "Adding life to app and website user interactions." },
    ]
  },

  detailed: {
    subtitle: "STYLE & MOTION",
    title: "Creative Motion Graphics Services",
    description: "Our motion graphics agency blends graphic design with animation to communicate ideas dynamically.",
    services: [
      {
        title: "MOTION TYPES",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Animated Logo Design", desc: "Creating unique and memorable logo reveals.", icon: <BusinessCenterIcon /> },
          { title: "Promotional Ad Clips", desc: "High-energy motion graphics for digital marketing.", icon: <BusinessCenterIcon /> },
          { title: "Animated Infographics", desc: "Turning data and statistics into visual narratives.", icon: <BusinessCenterIcon /> },
          { title: "Social Media Stings", desc: "Short, punchy animations for social platforms.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY VIHAAN",
    title: "The Perfect Motion Design Partner",
    description: "As a specialized motion graphics agency, we focus on aesthetic consistency and high-speed delivery.",
    stats: [
      { value: "1000+", label: "Assets Delivered" },
      { value: "4.9/5", label: "Client Rating" },
      { value: "24h", label: "Turnaround" },
    ],
    reasons: [
      { title: "Trend-Setting Visuals", icon: BusinessCenterIcon, desc: "Modern styles that keep your brand ahead of the curve.", color: "#2563eb", number: "01" },
      { title: "Micro-Animation Focus", icon: BusinessCenterIcon, desc: "Details that improve UX and brand perception.", color: "#06b6d4", number: "02" },
      { title: "Optimized for Mobile", icon: BusinessCenterIcon, desc: "Designs that look great on any social feed.", color: "#4f46e5", number: "03" },
      { title: "Dynamic Brand Identity", icon: BusinessCenterIcon, desc: "Motion that reflects your corporate personality.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "Creative Workflow",
    title: "How We Move Your Brand",
    description: "Our motion graphics process is designed for speed, creativity, and precision.",
    processSteps: [
      { number: "01", title: "Visual Styleboard", desc: "Defining the colors, shapes, and motion style.", checks: ["Style Exploration", "Art Direction", "Palettes"], position: "above" },
      { number: "02", title: "Design Phase", desc: "Creating the static graphics before adding motion.", checks: ["Vector Design", "Layout", "Typography"], position: "below" },
      { number: "03", title: "Motion Sketching", desc: "Blocking out the basic movements and flows.", checks: ["Timing", "Transitions", "Pacing"], position: "above" },
      { number: "04", title: "Full Animation", desc: "Polishing the motion with ease and curves.", checks: ["Refined Motion", "Secondary FX", "Lottie Export"], position: "below" },
      { number: "05", title: "Final Review", desc: "Ensuring the loop and motion are perfect.", checks: ["Quality QC", "Brand Check", "Ease Flow"], position: "above" },
      { number: "06", title: "Asset Delivery", desc: "Exporting in MP4, GIF, or JSON/Lottie formats.", checks: ["Format Check", "Compression", "Delivery"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Industry Use Cases",
    title: "Motion for Every Digital Touchpoint",
    description: "Our motion graphics agency supports diverse marketing needs across industries.",
    industries: {
      0: {
        title: "Social Media Marketing",
        desc: "Creating attention-grabbing short-form animations for Instagram, TikTok, and YouTube.",
        desc1: "Increasing stop-rate and engagement through dynamic visual storytelling.",
        checks: ["Reel Intros", "Sales Overlays", "Sticker Packs", "Logo Stings"],
        cards: [
          { title: "Reel Hooks", desc: "High-energy intros to keep viewers watching." },
          { title: "Call-to-Action", desc: "Animated buttons and swipes to drive clicks." },
          { title: "Event Promos", desc: "Short clips for webinars and live events." },
          { title: "Brand Stickers", desc: "Custom GIF stickers for stories and chats." }
        ]
      },
      1: {
        title: "SaaS & Product UI",
        desc: "Enhancing user experience with micro-interactions and animated product explainers.",
        desc1: "Making software feel more intuitive and modern through thoughtful motion.",
        checks: ["Icon Motion", "Loading States", "Success Feedbacks", "Workflow Previews"],
        cards: [
          { title: "Lottie Assets", desc: "Lightweight animations for apps and websites." },
          { title: "App Walkthroughs", desc: "Highlighting key features with smooth motion." },
          { title: "Onboarding Flow", desc: "Animated guides for a better user journey." },
          { title: "Dashboard Visuals", desc: "Dynamic charts and data point reveals." }
        ]
      },
      2: {
        title: "Corporate Identity",
        desc: "Animating corporate logos and presentations for a modern and professional feel.",
        desc1: "Bringing life to corporate communications and brand guidelines.",
        checks: ["Logo Reveals", "Email Signatures", "Intro/Outros", "Webinar Graphics"],
        cards: [
          { title: "Premium Ident", desc: "High-end logo reveals for video content." },
          { title: "Pitch Decks", desc: "Animated slides for professional presentations." },
          { title: "Lower Thirds", desc: "Branded title graphics for interviews and videos." },
          { title: "Virtual Backgrounds", desc: "Subtle animated backgrounds for meetings." }
        ]
      },
    },
    tabs: [
      { label: "Social", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "SaaS", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Corporate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Motion Graphics Awards",
    list: [
      { title: "Social Motion", body: "Shorty Awards", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Top Motion House", body: "Clutch", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Best Brand Ident", body: "Behance", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Innovation Award", body: "Adobe Max", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Motion Tools",
    title: "Industry Standard Software",
    description: "We use professional tools to create smooth and high-quality motion design.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["After Effects", "LottieFiles", "Premiere Pro"] },
      { row: 2, direction: "right", speed: "28s", items: ["Illustrator", "Photoshop", "Cinema 4D (Lite)", "Figma"] },
    ]
  },

  testimonials: {
    subtitle: "Client Love",
    title: "Motion Results from Clients",
    rating: "4.9/5",
    reviews: "600+",
    list: [
      { name: "Pankaj S", text: "Vihaan's motion design team transformed our social media ads. The click-through rate increased by 25% since we started using their animations!", initial: "P", color: "#2563eb" },
      { name: "Linda G", text: "Fast, creative, and professional. Their logo animation adds so much value to our video content. Highly recommended!", initial: "L", color: "#10b981" },
      { name: "Samir K", text: "Amazing infographic video. They made complex data look beautiful and easy to understand. Perfect for our investor presentation.", initial: "S", color: "#8b5cf6" },
      { name: "Elena R", text: "Modern and sleek motion graphics. They understood our minimalist brand aesthetic and delivered exactly what we needed.", initial: "E", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Move Your Audience with a<br />Leading Motion Graphics Agency?
      </>
    ),
    description: "Let’s create dynamic motion graphics that capture attention and drive results for your brand.",
    buttonText: "Get Started Now",
    brandText: "Vihaan Motion Studios"
  }
};

export const videoEditingServiceData = {
  hero: {
    title: "Video Editing Services and VFX Solutions for High-Quality Visual Content",
    subtitle: "We provide video editing services and VFX services to create professional videos that engage your audience and improve your brand presence.",
    badgeText: "Turn your raw footage into powerful videos. 🎬",
    buttonText: "Start Video Editing",
    features: [
      { icon: BusinessCenterIcon, text: "Video editing services" },
      { icon: BusinessCenterIcon, text: "Video editing & VFX" },
      { icon: BusinessCenterIcon, text: "Professional video production" },
      { icon: BusinessCenterIcon, text: "Creative visual effects" },
      { icon: BusinessCenterIcon, text: "Social media video editing" },
      { icon: BusinessCenterIcon, text: "High-quality output" },
    ]
  },

  overview: {
    subtitle: "COMPLETE SOLUTIONS",
    title: "Complete Video Editing Services for Business Growth",
    description: "As a video editing services provider, we create high-quality videos with smooth editing and creative VFX effects.",
    list: [
      { title: "Video Editing", icon: BusinessCenterIcon, count: "Pro Quality", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We edit videos for professional quality output." },
      { title: "VFX Services", icon: BusinessCenterIcon, count: "Visual Impact", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We add visual effects to improve video impact." },
      { title: "Social Media Videos", icon: BusinessCenterIcon, count: "Platform Ready", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create videos for platforms and ads." },
      { title: "Corporate Editing", icon: BusinessCenterIcon, count: "Business Use", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We edit videos for business use." },
    ]
  },

  detailed: {
    subtitle: "END-TO-END",
    title: "End-to-End Video Editing and VFX Services from Start to Finish",
    description: "Our video editing as a service covers editing, effects, and final delivery for better results.",
    services: [
      {
        title: "EDITORIAL WORKFLOW",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Footage Review", desc: "We analyse your raw video content.", icon: <BusinessCenterIcon /> },
          { title: "Editing Planning", desc: "We plan the video structure.", icon: <BusinessCenterIcon /> },
          { title: "Editing & Effects", desc: "We edit and add VFX.", icon: <BusinessCenterIcon /> },
          { title: "Final Output Delivery", desc: "We deliver high-quality video.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY CHOOSE US",
    title: "Why Choose Our Video Editing & VFX Services",
    description: "We focus on delivering video editing services that are creative, professional, and engaging.",
    stats: [
      { value: "150+", label: "Video Projects Delivered" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Professional Editing", icon: BusinessCenterIcon, desc: "We create clean and smooth videos.", color: "#2563eb", number: "01" },
      { title: "Creative Effects", icon: BusinessCenterIcon, desc: "We add engaging visual effects.", color: "#06b6d4", number: "02" },
      { title: "High Quality Output", icon: BusinessCenterIcon, desc: "We ensure top video quality.", color: "#4f46e5", number: "03" },
      { title: "Fast Delivery", icon: BusinessCenterIcon, desc: "We complete projects on time.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR PROCESS",
    title: "Our Video Editing Services Process for Quality Output",
    description: "We follow a structured process to deliver professional video editing and VFX services.",
    processSteps: [
      { number: "01", title: "Requirement Analysis", desc: "We understand your video needs.", checks: ["Define goals", "Identify audience", "Plan content"], position: "above" },
      { number: "02", title: "Footage Review", desc: "We check raw content.", checks: ["Analyze clips", "Select scenes", "Plan flow"], position: "below" },
      { number: "03", title: "Editing Process", desc: "We edit video content.", checks: ["Cut and trim", "Add transitions", "Adjust timing"], position: "above" },
      { number: "04", title: "VFX Integration", desc: "We add visual effects.", checks: ["Add animations", "Apply effects", "Enhance visuals"], position: "below" },
      { number: "05", title: "Review & Feedback", desc: "We improve the video.", checks: ["Client feedback", "Corrections", "Final edits"], position: "above" },
      { number: "06", title: "Final Delivery", desc: "We deliver the final video.", checks: ["Export formats", "Optimize quality", "Ready to publish"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Video Editing & VFX Expertise",
    title: "Video Editing and VFX Solutions for Different Business Platforms",
    description: "We provide video editing services and VFX solutions for different business platforms to create high-quality videos that improve engagement and brand visibility.",
    industries: {
      0: {
        title: "REAL ESTATE PORTAL",
        desc: "We create professional video content for real estate platforms to showcase properties clearly.",
        desc1: "Our video editing and VFX services help attract buyers and improve engagement.",
        checks: ["Property Showcase Videos", "Video Editing Services", "VFX Enhancements", "Promotional Videos"],
        cards: [
          { title: "Property Showcase", desc: "We create videos to highlight property features and attract buyers." },
          { title: "Editing Services", desc: "We edit videos to ensure smooth flow and professional quality." },
          { title: "VFX Enhancements", desc: "We add visual effects to improve video impact and presentation." },
          { title: "Promotional Videos", desc: "We design videos to promote properties and increase engagement." }
        ]
      },
      1: {
        title: "CAB BOOKING APP",
        desc: "We create video content for cab booking apps to explain features and improve user understanding.",
        desc1: "Our video editing services help increase app installs and engagement.",
        checks: ["App Promo Videos", "Feature Demo Videos", "Video Editing Services", "VFX Effects"],
        cards: [
          { title: "App Promo Videos", desc: "We create videos to promote your app and attract new users." },
          { title: "Feature Demo Videos", desc: "We explain app features clearly through engaging videos." },
          { title: "Editing Services", desc: "We edit videos for smooth and professional output." },
          { title: "VFX Effects", desc: "We add visual effects to enhance video quality and engagement." }
        ]
      },
      2: {
        title: "HOTEL BOOKING",
        desc: "We create video content for hotel booking platforms to showcase services and offers clearly.",
        desc1: "Our video editing and VFX services help increase bookings and improve customer engagement.",
        checks: ["Hotel Promo Videos", "Booking Showcase Videos", "Video Editing Services", "VFX Enhancements"],
        cards: [
          { title: "Hotel Promo Videos", desc: "We create videos to promote hotel services and attract customers." },
          { title: "Booking Showcase", desc: "We highlight booking experience and features through videos." },
          { title: "Editing Services", desc: "We edit videos to ensure high-quality and smooth output." },
          { title: "VFX Enhancements", desc: "We add effects to improve video appeal and engagement." }
        ]
      },
    },
    tabs: [
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Cab Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hotel Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Post-Production Recognition",
    list: [
      { title: "Best Editing", body: "AICP", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "VFX Excellence", body: "VES Cert", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Sound Design", body: "MPSE", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Creative Post", body: "Clutch", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Video Editing and VFX Services",
    title: "Professional Post-Tools",
    description: "We use advanced tools to deliver professional video editing services and VFX services.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve"] },
      { row: 2, direction: "right", speed: "28s", items: ["Final Cut Pro", "Blender", "Adobe Photoshop"] },
    ]
  },

  testimonials: {
    subtitle: "What They Say",
    title: "What Clients Say About Our Video Editing Services",
    rating: "4.9/5",
    reviews: "350+",
    list: [
      { name: "Ramesh", text: "Sharp editing and professional finish.", initial: "R", color: "#2563eb", role: "Video Editor" },
      { name: "Suresh", text: "Smooth cuts and impressive visual effects.", initial: "S", color: "#10b981", role: "VFX Artist" },
      { name: "Kiran", text: "Creative transitions and engaging output.", initial: "K", color: "#8b5cf6", role: "Content Creator" },
      { name: "Amit", text: "Excellent VFX and clean video quality.", initial: "A", color: "#f59e0b", role: "Motion Designer" },
      { name: "Vikram", text: "Great colour grading and editing style.", initial: "V", color: "#ec4899", role: "Video Specialist" },
      { name: "Anita", text: "Professional editing with quick delivery.", initial: "A", color: "#06b6d4", role: "Post Production Artist" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Create Professional Videos with<br />Video Editing & VFX Services?
      </>
    ),
    description: "Let’s transform your footage into engaging videos with our video editing services.",
    buttonText: "Start Your Video Project",
    brandText: "Vihaan Post Studios"
  }
};

export const explainerVideoServiceData = {
  hero: {
    title: "Explainer Video Production Company for Clear and Engaging Business Videos",
    subtitle: "We create explainer videos that help you explain your product or service clearly and attract your audience.",
    badgeText: "Explain your ideas in a simple and engaging way. 🎥",
    buttonText: "Create Explainer Video",
    features: [
      { icon: BusinessCenterIcon, text: "Explainer videos" },
      { icon: BusinessCenterIcon, text: "Explainer video company" },
      { icon: BusinessCenterIcon, text: "Explainer video production company" },
      { icon: BusinessCenterIcon, text: "Explainer video builder" },
      { icon: BusinessCenterIcon, text: "Business explainer videos" },
      { icon: BusinessCenterIcon, text: "Creative storytelling videos" },
    ]
  },

  overview: {
    subtitle: "EXPLAINER EXPERTISE",
    title: "Complete Explainer Video Services for Business Growth",
    description: "As an explainer video production company, we create videos that help businesses communicate clearly and increase engagement.",
    list: [
      { title: "Product Explainers", icon: BusinessCenterIcon, count: "Clear Features", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We explain your product features simply." },
      { title: "Service Explainers", icon: BusinessCenterIcon, count: "Showcase Value", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We showcase your services clearly." },
      { title: "Animated Explainers", icon: BusinessCenterIcon, count: "Engaging Visuals", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create engaging animated videos." },
      { title: "Custom Video", icon: BusinessCenterIcon, count: "Tailored Needs", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We build videos based on your needs." },
    ]
  },

  detailed: {
    subtitle: "END-TO-END",
    title: "End-to-End Explainer Video Production from Idea to Delivery",
    description: "Our explainer video builder process covers scripting, animation, and final delivery for better results.",
    services: [
      {
        title: "PRODUCTION FLOW",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Concept Planning", desc: "We understand your idea.", icon: <BusinessCenterIcon /> },
          { title: "Script Writing", desc: "We create simple content.", icon: <BusinessCenterIcon /> },
          { title: "Design & Animation", desc: "We build engaging visuals.", icon: <BusinessCenterIcon /> },
          { title: "Final Delivery", desc: "We deliver ready-to-use videos.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY OUR COMPANY",
    title: "Why Choose Our Explainer Video Company",
    description: "We focus on creating explainer videos that are simple, clear, and engaging.",
    stats: [
      { value: "120+", label: "Videos Delivered" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Clear Communication", icon: BusinessCenterIcon, desc: "We simplify complex ideas.", color: "#2563eb", number: "01" },
      { title: "Creative Design", icon: BusinessCenterIcon, desc: "We create engaging visuals.", color: "#06b6d4", number: "02" },
      { title: "High Quality Output", icon: BusinessCenterIcon, desc: "We deliver professional videos.", color: "#4f46e5", number: "03" },
      { title: "Custom Solutions", icon: BusinessCenterIcon, desc: "We tailor videos to your needs.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR PROCESS",
    title: "Our Explainer Video Production Process for Better Results",
    description: "As an explainer video production company, we follow a structured process to deliver high-quality explainer videos.",
    processSteps: [
      { number: "01", title: "Requirement Analysis", desc: "We understand your needs.", checks: ["Define goals", "Identify audience", "Plan concept"], position: "above" },
      { number: "02", title: "Script Writing", desc: "We create simple scripts.", checks: ["Clear messaging", "Easy language", "Structured flow"], position: "below" },
      { number: "03", title: "Storyboarding", desc: "We plan visuals.", checks: ["Scene design", "Layout planning", "Flow structure"], position: "above" },
      { number: "04", title: "Animation Creation", desc: "We build videos.", checks: ["Design visuals", "Add animation", "Apply effects"], position: "below" },
      { number: "05", title: "Review & Feedback", desc: "We improve content.", checks: ["Client feedback", "Edits", "Final changes"], position: "above" },
      { number: "06", title: "Final Delivery", desc: "We deliver output.", checks: ["Export video", "Optimize quality", "Ready to use"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Explainer Video Expertise",
    title: "Explainer Video Solutions for Different Business Platforms",
    description: "We create explainer videos for different business platforms to explain services clearly, improve understanding, and increase engagement.",
    industries: {
      0: {
        title: "HOSPITAL MANAGEMENT",
        desc: "We create explainer videos for hospital management systems to explain services and processes clearly.",
        desc1: "Our videos help improve patient understanding and build trust in healthcare services.",
        checks: ["Healthcare Explainers", "Service Explanation", "Patient Awareness", "Process Explanation"],
        cards: [
          { title: "Healthcare Explainers", desc: "We create videos to explain hospital services simply." },
          { title: "Service Explanation", desc: "We showcase medical services for better understanding." },
          { title: "Patient Awareness", desc: "We create videos to educate patients and build trust." },
          { title: "Marketing Videos", desc: "We design videos to promote healthcare services effectively." }
        ]
      },
      1: {
        title: "EDUCATION CRM",
        desc: "We create explainer videos for education CRM platforms to explain courses and features clearly.",
        desc1: "Our videos help attract students and improve engagement with learning platforms.",
        checks: ["Course Explainers", "Feature Explanation", "Student Awareness", "Platform Demo"],
        cards: [
          { title: "Course Explainers", desc: "We create videos to explain courses and attract students." },
          { title: "Feature Explanation", desc: "We highlight key platform features for better understanding." },
          { title: "Platform Demo", desc: "We showcase system usage and functionality clearly." },
          { title: "Marketing Videos", desc: "We design videos to promote courses and increase enrollments." }
        ]
      },
      2: {
        title: "HOTEL BOOKING",
        desc: "We create explainer videos for hotel booking platforms to explain services and booking processes clearly.",
        desc1: "Our videos help increase bookings and improve customer understanding.",
        checks: ["Booking Explainers", "Service Explanation", "Offer Promotion", "Customer Awareness"],
        cards: [
          { title: "Booking Explainers", desc: "We create videos to explain the booking process simply." },
          { title: "Service Explanation", desc: "We showcase hotel services clearly to attract customers." },
          { title: "Offer Promotion", desc: "We highlight deals and offers to increase bookings." },
          { title: "Customer Engagement", desc: "We create videos to improve trust and interaction." }
        ]
      },
    },
    tabs: [
      { label: "Healthcare", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Education", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hotel Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Explainer Video Recognition",
    list: [
      { title: "Best Explainer", body: "Telly", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Visual Story", body: "W3 Awards", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Creative Animation", body: "Vega", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Effective Comm", body: "Clutch", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Explainer Video Production",
    title: "Explainer Suite",
    description: "We use modern tools to deliver high-quality explainer videos.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Adobe After Effects", "Adobe Illustrator", "Vyond"] },
      { row: 2, direction: "right", speed: "28s", items: ["Animaker", "Blender", "Canva"] },
    ]
  },

  testimonials: {
    subtitle: "Client Love",
    title: "What Clients Say About Our Explainer Video Company",
    rating: "4.9/5",
    reviews: "420+",
    list: [
      { name: "Ramesh", text: "Made our concept easy to understand.", initial: "R", color: "#2563eb", role: "Product Manager" },
      { name: "Suresh", text: "Clear visuals and engaging storytelling.", initial: "S", color: "#10b981", role: "Marketing Manager" },
      { name: "Kiran", text: "Helped us present our idea effectively.", initial: "K", color: "#8b5cf6", role: "Startup Founder" },
      { name: "Amit", text: "Very simple and easy to follow videos.", initial: "A", color: "#f59e0b", role: "Business Owner" },
      { name: "Vikram", text: "Improved our product communication.", initial: "V", color: "#ec4899", role: "Brand Manager" },
      { name: "Anita", text: "Creative storytelling with great clarity.", initial: "A", color: "#06b6d4", role: "Content Strategist" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Create Engaging Explainer Videos<br />for Your Business?
      </>
    ),
    description: "Let’s build powerful explainer videos with our explainer video production company.",
    buttonText: "Create Your Explainer Video",
    brandText: "Vihaan Explainer Studios"
  }
};

export const whiteboardAnimationServiceData = {
  hero: {
    title: "Whiteboard Animation Services to Explain Ideas in a Simple and Creative Way",
    subtitle: "We provide whiteboard animation services to create engaging videos that explain your ideas clearly and attract your audience.",
    badgeText: "Explain your ideas with simple whiteboard videos. ✍️",
    buttonText: "Create Whiteboard Video",
    features: [
      { icon: BusinessCenterIcon, text: "Whiteboard animation services" },
      { icon: BusinessCenterIcon, text: "Best whiteboard animation services" },
      { icon: BusinessCenterIcon, text: "Whiteboard animation AI" },
      { icon: BusinessCenterIcon, text: "Explainer whiteboard videos" },
      { icon: BusinessCenterIcon, text: "Business storytelling videos" },
      { icon: BusinessCenterIcon, text: "Creative animation content" },
    ]
  },

  overview: {
    subtitle: "WHITEBOARD QUALITY",
    title: "Complete Whiteboard Animation Services for Business Growth",
    description: "We create whiteboard animation videos that help businesses communicate ideas clearly and improve audience engagement.",
    list: [
      { title: "Explainer Whiteboard", icon: BusinessCenterIcon, count: "Product/Service", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We make product and service explainer videos." },
      { title: "Educational Videos", icon: BusinessCenterIcon, count: "Learning/Training", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We design videos for learning and training." },
      { title: "Marketing Videos", icon: BusinessCenterIcon, count: "Promotional", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create promotional whiteboard videos." },
      { title: "Custom Animation", icon: BusinessCenterIcon, count: "Tailored Content", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We build videos based on your needs." },
    ]
  },

  detailed: {
    subtitle: "CONCEPT TO DELIVERY",
    title: "End-to-End Whiteboard Animation Services from Concept to Delivery",
    description: "Our whiteboard animation services cover script, design, and animation for better results.",
    services: [
      {
        title: "WHITEBOARD FLOW",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Concept Planning", desc: "We understand your idea.", icon: <BusinessCenterIcon /> },
          { title: "Script Writing", desc: "We create simple content.", icon: <BusinessCenterIcon /> },
          { title: "Storyboard Design", desc: "We plan visuals.", icon: <BusinessCenterIcon /> },
          { title: "Animation & Delivery", desc: "We create and deliver videos.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY BEST SERVICES",
    title: "Why Choose Our Best Whiteboard Animation Services",
    description: "We focus on creating whiteboard animation videos that are simple, clear, and engaging.",
    stats: [
      { value: "100+", label: "Videos Delivered" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Simple Explanation", icon: BusinessCenterIcon, desc: "We explain ideas clearly.", color: "#2563eb", number: "01" },
      { title: "Creative Visuals", icon: BusinessCenterIcon, desc: "We create engaging animations.", color: "#06b6d4", number: "02" },
      { title: "High Quality Output", icon: BusinessCenterIcon, desc: "We deliver professional videos.", color: "#4f46e5", number: "03" },
      { title: "Custom Solutions", icon: BusinessCenterIcon, desc: "We tailor videos for your business.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR WORKFLOW",
    title: "Our Whiteboard Animation Services Process for Clear Communication",
    description: "We follow a structured process to deliver best whiteboard animation services that explain ideas effectively.",
    processSteps: [
      { number: "01", title: "Requirement Analysis", desc: "We understand your needs.", checks: ["Define goals", "Identify audience", "Plan concept"], position: "above" },
      { number: "02", title: "Script Writing", desc: "We create simple scripts.", checks: ["Clear messaging", "Easy language", "Structured flow"], position: "below" },
      { number: "03", title: "Storyboarding", desc: "We design visuals.", checks: ["Scene planning", "Layout design", "Flow structure"], position: "above" },
      { number: "04", title: "Animation Creation", desc: "We build animations.", checks: ["Draw visuals", "Add motion", "Apply effects"], position: "below" },
      { number: "05", title: "Review & Feedback", desc: "We refine videos.", checks: ["Client feedback", "Edits", "Improvements"], position: "above" },
      { number: "06", title: "Final Delivery", desc: "We deliver output.", checks: ["Export video", "Optimize quality", "Ready to use"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Whiteboard Expertise",
    title: "Whiteboard Animation Solutions for Different Business Platforms",
    description: "We create whiteboard animation videos for different business models to explain services clearly, improve engagement, and attract customers.",
    industries: {
      0: {
        title: "REAL ESTATE PORTAL",
        desc: "We create whiteboard animation videos for real estate platforms to explain property services clearly.",
        desc1: "Our videos help attract buyers, improve engagement, and build trust.",
        checks: ["Property Explainers", "Service Explanation", "Buyer Awareness", "Storytelling Content"],
        cards: [
          { title: "Property Explainers", desc: "We create videos to explain property listings and services clearly." },
          { title: "Service Explanation", desc: "We showcase real estate services in a simple way." },
          { title: "Marketing Videos", desc: "We design videos to promote properties and attract buyers." },
          { title: "Engagement Videos", desc: "We create content to improve audience interest and trust." }
        ]
      },
      1: {
        title: "CAB BOOKING APP",
        desc: "We create whiteboard animation videos for cab booking apps to explain features and usage clearly.",
        desc1: "Our videos help increase app installs and improve user understanding.",
        checks: ["App Explainer Videos", "Feature Explanation", "User Guide Videos", "Promotional Videos"],
        cards: [
          { title: "App Explainer", desc: "We explain app usage and features in a simple and clear way." },
          { title: "Feature Explanation", desc: "We highlight key features to improve user understanding." },
          { title: "Promotional Videos", desc: "We create videos to attract users and increase installs." },
          { title: "User Engagement", desc: "We design videos to keep users interested and active." }
        ]
      },
      2: {
        title: "HOTEL BOOKING",
        desc: "We create whiteboard animation videos for hotel booking platforms to explain services and offers clearly.",
        desc1: "Our videos help increase bookings and improve customer engagement.",
        checks: ["Booking Explainers", "Offer Promotion", "Service Explanation", "Customer Awareness"],
        cards: [
          { title: "Booking Explainer", desc: "We create videos to explain booking process and services clearly." },
          { title: "Offer Promotion", desc: "We design videos to highlight deals and attract customers." },
          { title: "Service Explanation", desc: "We showcase hotel services in a simple and engaging way." },
          { title: "Customer Engagement", desc: "We create videos to improve trust and user interaction." }
        ]
      },
    },
    tabs: [
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Cab Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hotel Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Storytelling Recognition",
    list: [
      { title: "Best Whiteboard", body: "Animation Mag", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "High Engagement", body: "W3 Awards", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Clear Messaging", body: "Clutch", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Education Award", body: "EdTech", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Whiteboard Animation Services",
    title: "Whiteboard Tools",
    description: "We use advanced tools to create high-quality whiteboard animation videos.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["VideoScribe", "Doodly", "Vyond"] },
      { row: 2, direction: "right", speed: "28s", items: ["Adobe After Effects", "Animaker", "Canva"] },
    ]
  },

  testimonials: {
    subtitle: "Client Stories",
    title: "What Clients Say About Our Explainer Video Company",
    rating: "4.9/5",
    reviews: "380+",
    list: [
      { name: "Ramesh Kumar", text: "Very clear and easy to understand videos. Perfect for our audience.", initial: "R", color: "#2563eb", role: "Marketing Manager" },
      { name: "Anjali Sharma", text: "Whiteboard animation makes it easier for our service step-by-step explanation.", initial: "A", color: "#10b981", role: "Product Owner" },
      { name: "Vikram Reddy", text: "Simple visuals but very powerful message delivery.", initial: "V", color: "#8b5cf6", role: "Business Head" },
      { name: "Sneha Patel", text: "The concept was easily understand by the customers once they watch the video.", initial: "S", color: "#f59e0b", role: "Customer Success Manager" },
      { name: "Arjun Mehta", text: "Great storytelling and smooth animation. Really impressed with the output.", initial: "A", color: "#ec4899", role: "Startup Founder" },
      { name: "Kiran Verma", text: "The video made our complex idea very easy to gain.", initial: "K", color: "#06b6d4", role: "Operations Manager" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Create Simple and Engaging<br />Whiteboard Animation Videos?
      </>
    ),
    description: "Let’s create clear videos with our whiteboard animation services.",
    buttonText: "Start Your Whiteboard Animation",
    brandText: "Vihaan Sketch Studios"
  }
};

export const webMaintenanceServiceData = {};
export const databaseManagementServiceData = {};
export const apiDevelopmentServiceData = {};
export const paymentGatewayIntegrationServiceData = {};
export const thirdPartyIntegrationServiceData = {};
export const migrationServicesServiceData = {};
export const testingQualityAssuranceServiceData = {};
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
export const saasDevelopmentServiceData = {};
export const enterpriseSoftwareDevelopmentServiceData = {};
export const webDesignServiceData = {};
export const brandingIdentityServiceData = {};
export const marketingCollateralServiceData = {};
export const packagingDesignServiceData = {};
export const infographicDesignServiceData = {};
export const presentationDesignServiceData = {};
export const emailTemplateDesignServiceData = {};
export const landingPageDesignServiceData = {};
export const uiUxDesignServiceData = {};

export const logoDesignServiceData = {
  hero: {
    title: "Logo Design Services to Build a Strong and Professional Brand Identity",
    subtitle: "We provide logo design services to create unique and memorable logos that represent your business clearly.",
    badgeText: "Develop a logo that encapsulates your brand perfectly. ✨",
    buttonText: "Design Your Logo",
    features: [
      { icon: BusinessCenterIcon, text: "Logo designing company" },
      { icon: BusinessCenterIcon, text: "Logo design agency" },
      { icon: BusinessCenterIcon, text: "Logo design services company" },
      { icon: BusinessCenterIcon, text: "Online logo design services" },
      { icon: BusinessCenterIcon, text: "Creative brand identity" },
      { icon: BusinessCenterIcon, text: "Custom logo designs" },
    ]
  },

  overview: {
    subtitle: "LOGO EXPERTISE",
    title: "Complete Logo Design Services for Business Branding",
    description: "As a logo design agency, we create professional logos that improve brand identity and visibility.",
    list: [
      { title: "Custom Logo Design", icon: BusinessCenterIcon, count: "Tailored Needs", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We create logos based on your business needs." },
      { title: "Brand Identity Design", icon: BusinessCenterIcon, count: "Visual Presence", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We build strong brand visuals." },
      { title: "Modern Logo Design", icon: BusinessCenterIcon, count: "Clean Style", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We design clean and modern logos." },
      { title: "Rebranding Services", icon: BusinessCenterIcon, count: "Better Impact", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We redesign logos for better impact." },
    ]
  },

  detailed: {
    subtitle: "CONCEPT TO DELIVERY",
    title: "End-to-End Logo Design Services from Concept to Final Delivery",
    description: "Our online logo design services cover idea creation, design, and final delivery for better results.",
    services: [
      {
        title: "DESIGN FLOW",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your brand.", icon: <BusinessCenterIcon /> },
          { title: "Concept Design", desc: "We create logo ideas.", icon: <BusinessCenterIcon /> },
          { title: "Design Creation", desc: "We develop final logo.", icon: <BusinessCenterIcon /> },
          { title: "Final Delivery", desc: "We deliver logo files.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY OUR AGENCY",
    title: "Why Choose Us As Your Logo Design Services Company",
    description: "Towards simple, creative, and effective logo design services.",
    stats: [
      { value: "200+", label: "Logos Designed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Creative Designs", icon: BusinessCenterIcon, desc: "We create unique logos.", color: "#2563eb", number: "01" },
      { title: "Brand Focused", icon: BusinessCenterIcon, desc: "We align with your business identity.", color: "#06b6d4", number: "02" },
      { title: "High Quality Output", icon: BusinessCenterIcon, desc: "We deliver professional designs.", color: "#4f46e5", number: "03" },
      { title: "Custom Solutions", icon: BusinessCenterIcon, desc: "We tailor logos for your brand.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR PROCESS",
    title: "Our Logo Design Services Process for Strong Branding",
    description: "As a logo design agency, we follow a structured process to deliver high-quality logo design services.",
    processSteps: [
      { number: "01", title: "Requirement Analysis", desc: "We understand your brand.", checks: ["Identify business goals", "Understand audience", "Define style"], position: "above" },
      { number: "02", title: "Research & Inspiration", desc: "We explore design ideas.", checks: ["Study competitors", "Analyze trends", "Collect references"], position: "below" },
      { number: "03", title: "Concept Creation", desc: "We create logo concepts.", checks: ["Sketch ideas", "Design variations", "Select styles"], position: "above" },
      { number: "04", title: "Design Finalization", desc: "We finalize logo design.", checks: ["Refine concepts", "Add colors", "Improve design"], position: "below" },
      { number: "05", title: "Review & Feedback", desc: "We improve based on feedback.", checks: ["Client review", "Edits", "Final approval"], position: "above" },
      { number: "06", title: "Final Delivery", desc: "We deliver final files.", checks: ["Provide formats", "High resolution", "Ready to use"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Logo Design Expertise",
    title: "Logo Design Solutions for Different Business Platforms",
    description: "We provide logo design services for different business platforms to create unique brand identities and improve brand recognition.",
    industries: {
      0: {
        title: "FOOD BOOKING",
        desc: "We design logos for food booking platforms that represent your brand and attract customers.",
        desc1: "Our logo design services focus on creating strong and memorable brand identity.",
        checks: ["Restaurant Brand Logo", "Food App Logo Design", "Creative Logo Concepts", "Brand Identity Design", "Modern Logo Design", "Custom Logo Solutions"],
        cards: [
          { title: "Restaurant Logo Design", desc: "We create logos that represent your food brand and attract customers." },
          { title: "App Logo Design", desc: "We design logos suitable for mobile apps and platforms." },
          { title: "Creative Logo Concepts", desc: "We develop unique concepts to match your business identity." },
          { title: "Brand Identity Design", desc: "We create logos in an effort to reinforce the overall presence of your brand." }
        ]
      },
      1: {
        title: "REAL ESTATE PORTAL",
        desc: "We design logos for real estate platforms to create a strong and professional brand image.",
        desc1: "Our logos help build trust and improve brand visibility in the market.",
        checks: ["Real Estate Logo Design", "Property Brand Identity", "Modern Logo Concepts", "Business Logo Design", "Custom Logo Solutions", "Brand Recognition Design"],
        cards: [
          { title: "Real Estate Logo Design", desc: "We create logos that represent property and real estate businesses clearly." },
          { title: "Brand Identity Design", desc: "We build logos that improve brand trust and recognition." },
          { title: "Creative Logo Concepts", desc: "We design unique logos based on your business style." },
          { title: "Professional Logo Design", desc: "We deliver clean and modern logos for your platform." }
        ]
      },
      2: {
        title: "MATRIMONY",
        desc: "We design logos for matrimony platforms to create a unique and emotional brand identity.",
        desc1: "Our logos help attract users and build trust through strong visual branding.",
        checks: ["Matrimony Brand Logo", "Emotional Brand Identity", "Creative Logo Concepts", "Modern Logo Design", "Custom Logo Solutions", "Brand Recognition"],
        cards: [
          { title: "Matrimony Logo Design", desc: "We create logos that reflect trust and relationships." },
          { title: "Brand Identity Design", desc: "We build logos that connect with your audience emotionally." },
          { title: "Creative Logo Concepts", desc: "We design unique logos based on your platform theme." },
          { title: "Professional Logo Design", desc: "We deliver clean and attractive logos for your brand." }
        ]
      },
    },
    tabs: [
      { label: "Food Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Matrimony", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Brand Recognition",
    list: [
      { title: "Best Identity", body: "Indigo", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Visual Design", body: "Graphis", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Creative Logo", body: "MUSE", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Agency of Year", body: "Clutch", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Logo Design Services",
    title: "Logo Suite",
    description: "We use modern tools to deliver high-quality logo design services.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Adobe Illustrator", "Adobe Photoshop", "Figma"] },
      { row: 2, direction: "right", speed: "28s", items: ["CorelDRAW", "Canva", "Inkscape"] },
    ]
  },

  testimonials: {
    subtitle: "Client Love",
    title: "What Clients Say About Our Logo Design Agency",
    rating: "4.9/5",
    reviews: "350+",
    list: [
      { name: "Rohit Sharma", text: "Very simple and easy to understand design process.", initial: "R", color: "#2563eb", role: "Business Owner" },
      { name: "Ananya Reddy", text: "Great logo that perfectly represents our services.", initial: "A", color: "#10b981", role: "Marketing Manager" },
      { name: "Karthik Verma", text: "Creative and professional work. Loved the final design.", initial: "K", color: "#8b5cf6", role: "Startup Founder" },
      { name: "Pooja Mehta", text: "They understood our brand and delivered exactly what we needed.", initial: "P", color: "#f59e0b", role: "Brand Manager" },
      { name: "Arjun Singh", text: "These designs are clean, yet they bear a modern reference.", initial: "A", color: "#ec4899", role: "Product Manager" },
      { name: "Neha Kapoor", text: "Very smooth process and quick delivery.", initial: "N", color: "#06b6d4", role: "Operations Manager" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Create a Unique Logo<br />for Your Business?
      </>
    ),
    description: "Let’s design a strong brand identity with our logo design services.",
    buttonText: "Create Your Logo Now",
    brandText: "Vihaan Design Studios"
  }
};
export const ecommerceDevServiceData = {
  hero: {
    title: "Ecommerce Website Development Services to Build Powerful Online Stores",
    subtitle: "We create user-friendly ecommerce websites using ecommerce website development services that help you sell products and grow your business online.",
    badgeText: "Start selling online with a strong ecommerce website. 🛒",
    buttonText: "Build Your Ecommerce Store",
    features: [
      { icon: BusinessCenterIcon, text: "Ecommerce website development" },
      { icon: BusinessCenterIcon, text: "Custom ecommerce website design" },
      { icon: BusinessCenterIcon, text: "Secure payment integration" },
      { icon: BusinessCenterIcon, text: "Product management system" },
      { icon: BusinessCenterIcon, text: "Mobile-friendly ecommerce website" },
      { icon: BusinessCenterIcon, text: "Performance optimization" },
    ]
  },

  overview: {
    subtitle: "ECOMMERCE QUALITY",
    title: "Complete Ecommerce Services for Online Business Growth",
    description: "We provide ecommerce services to build, manage, and grow your ecommerce website with better performance and user experience.",
    list: [
      { title: "Ecommerce Website Design", icon: BusinessCenterIcon, count: "Modern UI", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We design modern and user-friendly ecommerce websites." },
      { title: "Store Development", icon: BusinessCenterIcon, count: "Scalable Platform", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We build secure and scalable ecommerce platforms." },
      { title: "Payment Integration", icon: BusinessCenterIcon, count: "Secure Checkout", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We integrate safe payment systems." },
      { title: "Store Management", icon: BusinessCenterIcon, count: "Order Handling", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We help manage products and orders." },
    ]
  },

  detailed: {
    subtitle: "ECOMMERCE SOLUTIONS",
    title: "End-to-End Ecommerce Website Development Solutions from Idea to Launch",
    description: "Our ecommerce website development services cover everything from planning to launch for better results.",
    services: [
      {
        title: "DEVELOPMENT FLOW",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your ecommerce needs.", icon: <BusinessCenterIcon /> },
          { title: "Design & Planning", desc: "We create store layouts and structure.", icon: <BusinessCenterIcon /> },
          { title: "Development", desc: "We build your ecommerce website.", icon: <BusinessCenterIcon /> },
          { title: "Testing & Launch", desc: "We ensure quality and launch smoothly.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY OUR SERVICES",
    title: "Why Choose Our Ecommerce Website Development Services",
    description: "We focus on building ecommerce websites that are simple, secure, and designed to increase sales.",
    stats: [
      { value: "100+", label: "Ecommerce Websites Delivered" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "User-Friendly Design", icon: BusinessCenterIcon, desc: "We create easy-to-use online stores.", color: "#2563eb", number: "01" },
      { title: "Secure Transactions", icon: BusinessCenterIcon, desc: "We ensure safe payment systems.", color: "#06b6d4", number: "02" },
      { title: "Scalable Solutions", icon: BusinessCenterIcon, desc: "We build stores that grow with your business.", color: "#4f46e5", number: "03" },
      { title: "Performance Focused", icon: BusinessCenterIcon, desc: "We optimize speed and usability.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR PROCESS",
    title: "Our Ecommerce Website Development Process for Online Success",
    description: "We follow a structured process to deliver ecommerce website development services that improve user experience and sales.",
    processSteps: [
      { number: "01", title: "Requirement Analysis", desc: "We understand your ecommerce business.", checks: ["Identify products", "Define goals", "Understand users"], position: "above" },
      { number: "02", title: "Store Planning", desc: "We plan your ecommerce website structure.", checks: ["Create layouts", "Plan categories", "Define features"], position: "below" },
      { number: "03", title: "Design & Development", desc: "We build your ecommerce website.", checks: ["UI/UX design", "Frontend development", "Backend setup"], position: "above" },
      { number: "04", title: "Payment Integration", desc: "We integrate payment systems.", checks: ["Add payment gateways", "Ensure security", "Test transactions"], position: "below" },
      { number: "05", title: "Testing & Launch", desc: "We ensure quality and launch.", checks: ["Test functionality", "Fix bugs", "Go live"], position: "above" },
      { number: "06", title: "Maintenance & Growth", desc: "We support your ecommerce services.", checks: ["Update products", "Improve performance", "Add new features"], position: "below" }
    ]
  },

  industry: {
    subtitle: "Industries We Serve",
    title: "E-Commerce for Key Industries",
    description: "We provide ecommerce website development services for different business platforms to create unique brand identities and improve brand recognition.",
    industries: {
      0: {
        title: "FOOD ORDERING",
        desc: "We develop e-commerce-enabled food ordering platforms with seamless browsing, quick checkout, and real-time order management.",
        desc1: "Creating fast and engaging food ordering systems with smooth user experience and high conversions.",
        checks: ["Menu Listings", "Order & Checkout", "User Dashboard", "Payment Integration"],
        cards: [
          { title: "Menu Browsing", desc: "Easy-to-use menus with categories and images." },
          { title: "Order Flow", desc: "Quick and simple ordering process." },
          { title: "User Dashboard", desc: "Manage orders and preferences easily." },
          { title: "Payment Experience", desc: "Secure and fast transactions." }
        ]
      },
      1: {
        title: "REAL ESTATE",
        desc: "We create e-commerce-enabled real estate platforms for property listings, bookings, and secure transactions.",
        desc1: "Building scalable property platforms with smooth navigation and lead generation.",
        checks: ["Property Listings", "Advanced Search", "User Dashboard", "Booking & Payments"],
        cards: [
          { title: "Property Listings", desc: "Clear and detailed property displays." },
          { title: "Advanced Search", desc: "Smart filters for easy discovery." },
          { title: "User Dashboard", desc: "Manage properties and inquiries." },
          { title: "Booking System", desc: "Simple and secure booking experience." }
        ]
      },
      2: {
        title: "EDUCATION",
        desc: "We develop e-commerce-enabled education platforms for course sales, subscriptions, and digital learning experiences.",
        desc1: "Creating scalable learning platforms with seamless purchase and engagement features.",
        checks: ["Course Listings", "Student Dashboard", "Subscription Plans", "Payment Integration"],
        cards: [
          { title: "Course Catalog", desc: "Structured course listings with pricing." },
          { title: "Student Dashboard", desc: "Track progress and enrolled courses." },
          { title: "Subscription System", desc: "Flexible learning plans and access." },
          { title: "Payment Integration", desc: "Secure and smooth transactions." }
        ]
      },
    },
    tabs: [
      { label: "Food Ordering", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Education", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Ecommerce Recognition",
    list: [
      { title: "Best Plarform", body: "Shopify", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Excellence", body: "W3 Awards", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "Top Developer", body: "Clutch", year: "2025", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Innovation", body: "Vega", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Ecommerce Website Development Services",
    title: "Ecommerce Suite",
    description: "We use modern platforms and tools to build and manage ecommerce websites effectively.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Shopify", "WooCommerce", "Magento"] },
      { row: 2, direction: "right", speed: "28s", items: ["Razorpay / Stripe", "React JS", "Node.js"] },
    ]
  },

  testimonials: {
    subtitle: "Client Love",
    title: "What Clients Say About Our Ecommerce Services",
    rating: "4.9/5",
    reviews: "480+",
    list: [
      { name: "Arjun Khanna", text: "Vihaan delivered our e-commerce platform ahead of schedule. The solution aligned perfectly with our business needs and performs flawlessly.", initial: "A", color: "#2563eb", role: "CEO, ShopNova" },
      { name: "Rohit Mehra", text: "Their e-commerce development approach helped us streamline operations and improve sales. The platform is fast, secure, and highly reliable.", initial: "R", color: "#10b981", role: "Director, CartSphere" },
      { name: "Karan Malhotra", text: "Our e-commerce system now handles high traffic effortlessly. The scalability and performance improvements are outstanding.", initial: "K", color: "#8b5cf6", role: "Founder, BuySmart" },
      { name: "Aditya Kapoor", text: "The platform solved critical performance challenges. Their team ensured high speed, security, and seamless user experience.", initial: "A", color: "#f59e0b", role: "CTO, CommerceAxis" },
      { name: "Neha Sharma", text: "The dashboards and workflows are extremely intuitive. Managing products and orders has become much easier.", initial: "N", color: "#ec4899", role: "Product Manager, QuickCart" },
      { name: "Vivek Jain", text: "Vihaan built a scalable e-commerce solution tailored to our needs. Automation and smart features saved us significant time.", initial: "V", color: "#06b6d4", role: "Founder, CartBridge" },
      { name: "Pooja Nair", text: "Our online platform is seamless and efficient. The features helped us improve customer engagement and conversions.", initial: "P", color: "#8b5cf6", role: "CTO, RealtyCart" },
      { name: "Aman Verma", text: "The system performs flawlessly even during peak traffic. Their e-commerce development expertise is truly impressive.", initial: "A", color: "#2563eb", role: "CEO, MegaStore" },
      { name: "Sneha Kapoor", text: "Our platform is now highly scalable and user-friendly. The development improved overall customer experience.", initial: "S", color: "#10b981", role: "Product Head, EduCart" },
      { name: "Sandeep Gupta", text: "The e-commerce system is secure, reliable, and easy to manage. Handling large product inventories is now seamless.", initial: "S", color: "#8b5cf6", role: "Director, HealthMart Solutions" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Launch Your Ecommerce Website<br />and Start Selling Online?
      </>
    ),
    description: "Let’s build a powerful ecommerce website using our ecommerce website development services.",
    buttonText: "Launch Your Online Store",
    brandText: "Vihaan Ecommerce Labs"
  }
};
export const crmDevServiceData = {};
export const erpDevServiceData = {};
export const blockchainDevServiceData = {};
export const cyberSecurityServiceData = {};
export const iotDevServiceData = {};
export const gameDevServiceData = {};
export const contentWritingServiceData = {};
export const affiliateMarketingServiceData = {};
export const appMaintenanceServiceData = {};

export const webDesignDevServiceData = {
  hero: {
    title: "Web Design and Development Services to Build Modern and Responsive Websites",
    subtitle: "We create user-friendly and responsive websites using web design and development services that help your business grow online.",
    badgeText: "Build a strong online presence with a modern website. 🚀",
    buttonText: "Start Your Website",
    features: [
      { icon: BusinessCenterIcon, text: "Custom website design" },
      { icon: BusinessCenterIcon, text: "Web development services" },
      { icon: BusinessCenterIcon, text: "Responsive web designing" },
      { icon: BusinessCenterIcon, text: "UI/UX friendly layouts" },
      { icon: BusinessCenterIcon, text: "Website performance optimization" },
      { icon: BusinessCenterIcon, text: "Ongoing support" },
    ]
  },

  overview: {
    subtitle: "WEB DEVELOPMENT AGENCY",
    title: "Complete Web Development Services for Business Growth",
    description: "As a web development agency, we provide web design and development solutions that improve user experience and performance.",
    list: [
      { title: "Website Design", icon: BusinessCenterIcon, count: "Modern & User-Friendly", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We create modern and user-friendly designs." },
      { title: "Frontend Development", icon: BusinessCenterIcon, count: "Interactive Layouts", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We build responsive and interactive layouts." },
      { title: "Backend Development", icon: BusinessCenterIcon, count: "Scalable Systems", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We develop strong and scalable systems." },
      { title: "Website Optimization", icon: BusinessCenterIcon, count: "Speed & Performance", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We improve speed and performance." },
    ]
  },

  detailed: {
    subtitle: "IDEA TO LAUNCH",
    title: "End-to-End Web Design and Development Solutions from Idea to Launch",
    description: "Our web development services cover everything from planning to deployment for better results.",
    services: [
      {
        title: "END-TO-END SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your business needs.", icon: <BusinessCenterIcon /> },
          { title: "Design Planning", desc: "We create UI/UX designs.", icon: <BusinessCenterIcon /> },
          { title: "Development", desc: "We build your website.", icon: <BusinessCenterIcon /> },
          { title: "Testing & Launch", desc: "We ensure quality and launch smoothly.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY CHOOSE OUR SERVICES",
    title: "Why Choose Our Web Design and Development Services",
    description: "We focus on creating websites that are simple, fast, and effective for business growth.",
    stats: [
      { value: "200+", label: "Websites Developed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Modern Design", icon: BusinessCenterIcon, desc: "We create clean and attractive designs that reflect your brand identity.", color: "#2563eb", number: "01" },
      { title: "Responsive Layout", icon: BusinessCenterIcon, desc: "We ensure mobile-friendly websites that work perfectly on all screen sizes.", color: "#06b6d4", number: "02" },
      { title: "Performance Focused", icon: BusinessCenterIcon, desc: "We optimize speed and usability to keep your visitors engaged.", color: "#4f46e5", number: "03" },
      { title: "Scalable Solutions", icon: BusinessCenterIcon, desc: "We build future-ready websites that can grow along with your business.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "OUR STRUCTURED PROCESS",
    title: "Our Web Design and Development Process for Better Results",
    description: "As a web development agency, we follow a structured process to deliver high-quality web development services.",
    processSteps: [
      { number: "01", title: "Requirement Gathering", desc: "We understand your website needs.", checks: ["Identify goals", "Define features", "Understand audience"], position: "above" },
      { number: "02", title: "UI/UX Design", desc: "We design user-friendly layouts.", checks: ["Create wireframes", "Design interfaces", "Improve user experience"], position: "below" },
      { number: "03", title: "Development", desc: "We build your website.", checks: ["Frontend coding", "Backend development", "Integrations"], position: "above" },
      { number: "04", title: "Testing", desc: "We ensure quality and performance.", checks: ["Check responsiveness", "Fix bugs", "Improve speed"], position: "below" },
      { number: "05", title: "Deployment", desc: "We launch your website.", checks: ["Hosting setup", "Domain configuration", "Go live"], position: "above" },
      { number: "06", title: "Support & Maintenance", desc: "We provide ongoing support.", checks: ["Regular updates", "Performance monitoring", "Issue fixing"], position: "below" }
    ]
  },

  industry: {
    subtitle: "INDUSTRY EXPERTISE",
    title: "Expert Web Design Across Industries",
    description: "We provide specialized web development services tailored to the unique needs of different business sectors.",
    industries: {
      0: {
        title: "Listing Site",
        desc: "We build scalable listing websites with seamless navigation, advanced search, and user-friendly interfaces for better discovery and lead generation.",
        desc1: "Creating intuitive listing platforms with smooth navigation, fast performance, and optimized user journeys.",
        checks: ["Business & Service Listings", "Advanced Search & Filters", "User Dashboard", "Lead & Inquiry Management"],
        cards: [
          { title: "Listings Display", desc: "Clean and structured listing layouts for easy browsing." },
          { title: "Advanced Filters", desc: "Smart filters and sorting for quick and relevant search results." },
          { title: "User Dashboard", desc: "Personalized dashboards to manage listings and activity." },
          { title: "Lead Management", desc: "Integrated inquiry system to capture and convert leads." }
        ]
      },
      1: {
        title: "Education",
        desc: "Our web design and development services for education platforms focus on delivering engaging, structured, and user-friendly learning experiences.",
        desc1: "Designing modern education platforms with intuitive interfaces and seamless learning journeys.",
        checks: ["Course Listings", "Student & Admin Dashboard", "Enrollment & Payment Flow", "Learning Management System"],
        cards: [
          { title: "Course Browsing", desc: "Well-organized course listings with categories and filters." },
          { title: "Student Dashboard", desc: "Interactive dashboards for tracking courses and progress." },
          { title: "Enrollment Flow", desc: "Simple and smooth admission and enrollment process." },
          { title: "Learning Experience", desc: "User-friendly interfaces for lessons, quizzes, and content." }
        ]
      },
      2: {
        title: "Matrimony",
        desc: "We develop secure and scalable matrimony websites with personalized matchmaking features and smooth user experiences.",
        desc1: "Building engaging matrimony platforms with privacy-focused design and easy navigation.",
        checks: ["Profile Creation & Matching", "Advanced Search Preferences", "Chat & Communication", "Subscription & Payment Integration"],
        cards: [
          { title: "Profile Management", desc: "Detailed profiles with preferences and personal information." },
          { title: "Matchmaking System", desc: "Smart search and recommendations for better matches." },
          { title: "Communication Flow", desc: "Secure chat and interaction features for users." },
          { title: "Subscription System", desc: "Flexible plans with smooth and secure payment integration." }
        ]
      },
    },
    tabs: [
      { label: "Listing Site", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Education", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Matrimony", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Recognized for Excellence & Quality",
    list: [
      { title: "Top Web Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "High Performer", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Cert", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Best Tech Stack", body: "Clutch", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Developer", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Web Design and Development Services",
    title: "Modern Tools and Technologies",
    description: "We use modern tools and technologies to deliver high-quality web development services.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["HTML5", "CSS3", "JavaScript", "React JS", "Node.js", "Figma"] },
      { row: 2, direction: "right", speed: "28s", items: ["GitHub", "VS Code", "Java", "Python", "Spring Boot"] },
    ]
  },

  testimonials: {
    subtitle: "WHAT CLIENTS SAY",
    title: "What Clients Say About Our Web Development Agency",
    rating: "4.9/5",
    reviews: "1.2k+",
    list: [
      { name: "Rahul Sharma", text: "Vihaan delivered a high-performance website ahead of schedule. Their web design and development expertise ensured a seamless user experience across all devices.", initial: "R", color: "#2563eb" },
      { name: "Amit Patel", text: "Our website speed and performance improved drastically after working with Vihaan. Their development team optimized everything perfectly with zero downtime.", initial: "A", color: "#10b981" },
      { name: "Suresh Menon", text: "The e-commerce website built by Vihaan handles heavy traffic effortlessly. The design is clean, fast, and conversion-focused.", initial: "S", color: "#8b5cf6" },
      { name: "Vikram Das", text: "Their web development team delivered a secure and scalable platform. The user interface is intuitive and aligns perfectly with our business goals.", initial: "V", color: "#f59e0b" },
      { name: "Priya Rao", text: "Stunning website design! The layouts are modern, responsive, and keep users engaged throughout their journey.", initial: "P", color: "#ec4899" },
      { name: "Nikhil Verma", text: "Vihaan transformed our food ordering website with smooth navigation and fast loading speed. Customer engagement has significantly improved.", initial: "N", color: "#06b6d4" },
      { name: "Anjali Mehta", text: "The real estate website’s search and booking experience is seamless. Their web design services helped us generate more qualified leads.", initial: "A", color: "#2b3d5b" },
      { name: "Rohan Kapoor", text: "The website feels premium and performs flawlessly. Their web development team focused on both design and performance.", initial: "R", color: "#10b981" },
      { name: "Sneha Iyer", text: "Our LMS website is now interactive and user-friendly. The development quality and UI clarity are exceptional.", initial: "S", color: "#8b5cf6" },
      { name: "Karthik Rao", text: "Their web design and development services helped us build a reliable healthcare platform with excellent usability.", initial: "K", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Build Your Website with a<br />Web Development Agency?
      </>
    ),
    description: "Let’s create a modern website using our web design and development services.",
    buttonText: "Build Your Website Now",
    brandText: "Vihaan Web Solutions"
  }
};

export const mobileAppDevFullServiceData = {
  hero: {
    title: "Mobile Apps Development Services to Build Scalable and User-Friendly Applications",
    subtitle: "We create high-performance mobile applications using app development services that help your business reach more users.",
    badgeText: "Reach your customers with powerful mobile apps. 🚀",
    buttonText: "Start Your App Development",
    features: [
      { icon: BusinessCenterIcon, text: "Mobile apps development" },
      { icon: BusinessCenterIcon, text: "App development services" },
      { icon: BusinessCenterIcon, text: "Android and iOS apps" },
      { icon: BusinessCenterIcon, text: "User-friendly app design" },
      { icon: BusinessCenterIcon, text: "App performance optimization" },
      { icon: BusinessCenterIcon, text: "Ongoing support" },
    ]
  },

  overview: {
    subtitle: "APP DEVELOPMENT SOFTWARE COMPANIES",
    title: "Complete App Development Services for Business Growth",
    description: "As one of the app development software companies, we build mobile apps that are scalable, secure, and easy to use.",
    list: [
      { title: "Android App Development", icon: BusinessCenterIcon, count: "Android Platforms", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We build apps for Android platforms." },
      { title: "iOS App Development", icon: BusinessCenterIcon, count: "iOS Development", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We develop apps as an ios development company." },
      { title: "Cross-Platform Apps", icon: BusinessCenterIcon, count: "Multiple Platforms", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create apps that work on multiple platforms." },
      { title: "App Maintenance", icon: BusinessCenterIcon, count: "Regular Support", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We support and update apps regularly." },
    ]
  },

  detailed: {
    subtitle: "IDEA TO LAUNCH",
    title: "End-to-End Mobile Apps Development Solutions from Idea to Launch",
    description: "Our app development services cover planning, development, testing, and deployment for better results.",
    services: [
      {
        title: "END-TO-END SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your app needs.", icon: <BusinessCenterIcon /> },
          { title: "UI/UX Design", desc: "We design user-friendly app interfaces.", icon: <BusinessCenterIcon /> },
          { title: "Development", desc: "We build your mobile app.", icon: <BusinessCenterIcon /> },
          { title: "Testing & Launch", desc: "We ensure quality and launch smoothly.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY CHOOSE OUR SERVICES",
    title: "Why Choose Our Mobile Apps Development Services",
    description: "We focus on building mobile apps that are simple, scalable, and high-performing.",
    stats: [
      { value: "150+", label: "Apps Developed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "User-Friendly Design", icon: BusinessCenterIcon, desc: "We create easy-to-use apps that enhance customer engagement.", color: "#2563eb", number: "01" },
      { title: "High Performance", icon: BusinessCenterIcon, desc: "We ensure smooth app performance with optimized code.", color: "#06b6d4", number: "02" },
      { title: "Secure Applications", icon: BusinessCenterIcon, desc: "We build safe and reliable apps with advanced security measures.", color: "#4f46e5", number: "03" },
      { title: "Scalable Solutions", icon: BusinessCenterIcon, desc: "We develop future-ready apps that can handle your business growth.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "STRUCTURED APPROACH",
    title: "Our Mobile Apps Development Process for Better Performance",
    description: "As an app development services provider, we follow a structured approach to build high-quality mobile apps.",
    processSteps: [
      { number: "01", title: "Requirement Gathering", desc: "We understand your app idea.", checks: ["Define goals", "Identify features", "Understand users"], position: "above" },
      { number: "02", title: "UI/UX Design", desc: "We design app interfaces.", checks: ["Create wireframes", "Design screens", "Improve usability"], position: "below" },
      { number: "03", title: "Development", desc: "We build your application.", checks: ["Android development", "iOS development", "Backend integration"], position: "above" },
      { number: "04", title: "Testing", desc: "We ensure app quality.", checks: ["Bug fixing", "Performance testing", "Security checks"], position: "below" },
      { number: "05", title: "Deployment", desc: "We launch your app.", checks: ["App store submission", "Configuration", "Go live"], position: "above" },
      { number: "06", title: "Maintenance & Support", desc: "We support your app.", checks: ["Regular updates", "Performance monitoring", "Issue resolution"], position: "below" }
    ]
  },

  industry: {
    subtitle: "INDUSTRY-FOCUSED",
    title: "Industry-Focused Mobile App Development",
    description: "We provide specialized mobile app development services tailored to the unique needs of different business sectors.",
    industries: {
      0: {
        title: "HRM Software",
        desc: "We develop powerful HRM mobile apps that streamline workforce management, improve employee engagement, and automate HR processes.",
        desc1: "Building efficient HRM apps with intuitive dashboards, automation features, and seamless user experience.",
        checks: ["Employee Management", "Attendance & Leave Tracking", "Payroll Integration", "Performance Management"],
        cards: [
          { title: "Employee Dashboard", desc: "Centralized dashboard for managing employee data and activities." },
          { title: "Attendance Tracking", desc: "Real-time attendance and leave management system." },
          { title: "Payroll System", desc: "Automated payroll processing with accurate calculations." },
          { title: "Performance Management", desc: "Tools to track and evaluate employee performance efficiently." }
        ]
      },
      1: {
        title: "Hospital Management",
        desc: "Our mobile app development services for healthcare focus on delivering secure, reliable, and user-friendly hospital management solutions.",
        desc1: "Designing healthcare apps with seamless workflows, secure data handling, and efficient patient management systems.",
        checks: ["Patient Management", "Appointment Scheduling", "Doctor Dashboard", "Billing & Reports"],
        cards: [
          { title: "Patient Records", desc: "Easy access to patient history, reports, and medical data." },
          { title: "Appointment Booking", desc: "Simple scheduling system for patients and doctors." },
          { title: "Doctor Dashboard", desc: "Efficient interface for managing appointments and patient data." },
          { title: "Billing System", desc: "Accurate billing and reporting with secure transactions." }
        ]
      },
      2: {
        title: "Cab Booking",
        desc: "We build fast and scalable cab booking apps with real-time tracking, smooth booking flows, and reliable performance.",
        desc1: "Creating intuitive cab booking apps with quick ride requests, live tracking, and seamless user experience.",
        checks: ["Ride Booking Interface", "Real-Time GPS Tracking", "Driver & User Apps", "Payment Integration"],
        cards: [
          { title: "Ride Booking", desc: "Simple and fast ride booking with minimal steps." },
          { title: "Live Tracking", desc: "Real-time GPS tracking with accurate location updates." },
          { title: "Driver Dashboard", desc: "Dedicated interface for drivers to manage rides and earnings." },
          { title: "Payment System", desc: "Secure and smooth payment options for hassle-free transactions." }
        ]
      },
    },
    tabs: [
      { label: "HRM Software", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hospital Management", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Cab Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Recognized for Excellence & Quality",
    list: [
      { title: "Top App Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "High Performer", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Cert", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Best Mobile UX", body: "App Design Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Developer", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Mobile App Development Services",
    title: "Modern Technologies",
    description: "We use modern technologies to deliver high-quality mobile apps development solutions.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Flutter", "React Native", "Kotlin", "Swift"] },
      { row: 2, direction: "right", speed: "28s", items: ["Firebase", "Android Studio", "Xcode", "Node.js", "MySQL", "Docker"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT TRUST",
    title: "What Clients Say About Our App Development Services",
    rating: "4.9/5",
    reviews: "950+",
    list: [
      { name: "Arjun Mehta", text: "Vihaan delivered our custom mobile app ahead of schedule. Their mobile app development expertise ensured smooth performance and a seamless user experience.", initial: "A", color: "#2563eb" },
      { name: "Rohit Agarwal", text: "The mobile app built by Vihaan optimized our operations and reduced costs significantly. Flawless execution with zero downtime.", initial: "R", color: "#10b981" },
      { name: "Kunal Shah", text: "Our e-commerce mobile app handles high traffic effortlessly. The intuitive user flows boosted our conversions.", initial: "K", color: "#8b5cf6" },
      { name: "Aditya Nair", text: "Their secure and scalable mobile app development solved critical issues. The app performance and reliability are outstanding.", initial: "A", color: "#f59e0b" },
      { name: "Neha Kapoor", text: "Stunning app design! The user experience is smooth, fast, and keeps engagement levels high.", initial: "N", color: "#ec4899" },
      { name: "Varun Malhotra", text: "Vihaan transformed our food delivery app with seamless navigation and quick ordering flows. Customers love the experience.", initial: "V", color: "#06b6d4" },
      { name: "Pooja Iyer", text: "The real estate mobile app is intuitive and fast. Search and booking flows are seamless, increasing our leads.", initial: "P", color: "#2563eb" },
      { name: "Manish Verma", text: "The app feels premium and performs flawlessly. User retention has improved significantly after launch.", initial: "M", color: "#10b981" },
      { name: "Ritika Sharma", text: "Our LMS mobile app is interactive and user-friendly. It has greatly enhanced the learning experience.", initial: "R", color: "#8b5cf6" },
      { name: "Sandeep Reddy", text: "Their mobile app development services delivered a reliable healthcare app with excellent usability and performance.", initial: "S", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Build Your App with Expert<br />App Development Services?
      </>
    ),
    description: "Let’s create a powerful mobile application that helps your business grow.",
    buttonText: "Launch Your App Today",
    brandText: "Vihaan Mobile Solutions"
  }
};

export const customAppDevFullServiceData = {
  hero: {
    title: "Custom Application Development Services to Build Scalable Business Solutions",
    subtitle: "We create tailored software using custom application development services that match your business needs and improve efficiency.",
    badgeText: "Build software that fits your business perfectly. 💻",
    buttonText: "Start Your Custom Project",
    features: [
      { icon: BusinessCenterIcon, text: "Custom application development" },
      { icon: BusinessCenterIcon, text: "Business-focused solutions" },
      { icon: BusinessCenterIcon, text: "Scalable applications" },
      { icon: BusinessCenterIcon, text: "Secure and reliable systems" },
      { icon: BusinessCenterIcon, text: "Integration with existing tools" },
      { icon: BusinessCenterIcon, text: "Ongoing support" },
    ]
  },

  overview: {
    subtitle: "CUSTOM APPLICATION DEVELOPMENT AGENCY",
    title: "Complete Custom Application Development Services for Business Growth",
    description: "As a custom application development agency, we deliver solutions that improve performance and simplify operations.",
    list: [
      { title: "Business Applications", icon: BusinessCenterIcon, count: "Tailored Apps", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We develop apps based on your business needs." },
      { title: "System Integration", icon: BusinessCenterIcon, count: "Tool Connectivity", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We connect your tools and systems." },
      { title: "Custom Dashboards", icon: BusinessCenterIcon, count: "Better Control", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create dashboards for better control." },
      { title: "Application Support", icon: BusinessCenterIcon, count: "Maintenance", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We maintain and improve applications." },
    ]
  },

  detailed: {
    subtitle: "IDEA TO EXECUTION",
    title: "End-to-End Custom Application Development Solutions from Idea to Execution",
    description: "Our custom application development services cover planning, development, and optimization for better results.",
    services: [
      {
        title: "END-TO-END SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your business needs.", icon: <BusinessCenterIcon /> },
          { title: "Solution Design", desc: "We design system architecture.", icon: <BusinessCenterIcon /> },
          { title: "Development", desc: "We build custom applications.", icon: <BusinessCenterIcon /> },
          { title: "Testing & Deployment", desc: "We ensure quality and launch smoothly.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY CHOOSE OUR AGENCY",
    title: "Why Choose Our Custom Application Development Agency",
    description: "We focus on delivering custom application development solutions that are simple, scalable, and efficient.",
    stats: [
      { value: "120+", label: "Applications Delivered" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Tailored Solutions", icon: BusinessCenterIcon, desc: "We build software based on your needs.", color: "#2563eb", number: "01" },
      { title: "Scalable Systems", icon: BusinessCenterIcon, desc: "We create future-ready applications.", color: "#06b6d4", number: "02" },
      { title: "Secure Development", icon: BusinessCenterIcon, desc: "We ensure data security.", color: "#4f46e5", number: "03" },
      { title: "Business Focused", icon: BusinessCenterIcon, desc: "We align solutions with your goals.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "STRUCTURED PROCESS",
    title: "Our Custom Application Development Process for Efficient Solutions",
    description: "As a custom application development agency, we follow a structured process to deliver reliable custom application development services.",
    processSteps: [
      { number: "01", title: "Requirement Gathering", desc: "We understand your requirements.", checks: ["Identify goals", "Define features", "Understand workflows"], position: "above" },
      { number: "02", title: "Solution Design", desc: "We design system architecture.", checks: ["Plan structure", "Define modules", "Create workflows"], position: "below" },
      { number: "03", title: "Development", desc: "We build your application.", checks: ["Backend development", "Frontend development", "Integrations"], position: "above" },
      { number: "04", title: "Testing", desc: "We ensure application quality.", checks: ["Bug testing", "Performance testing", "Security checks"], position: "below" },
      { number: "05", title: "Deployment", desc: "We launch your solution.", checks: ["Server setup", "Configuration", "Go live"], position: "above" },
      { number: "06", title: "Maintenance & Support", desc: "We provide ongoing support.", checks: ["Updates", "Monitoring", "Improvements"], position: "below" }
    ]
  },

  industry: {
    subtitle: "INDUSTRY-FOCUSED",
    title: "Industry-Focused Custom Development",
    description: "We provide specialized custom development services tailored to the unique needs of different business sectors.",
    industries: {
      0: {
        title: "LMS (Learning Management System)",
        desc: "We develop scalable LMS applications with interactive learning experiences, structured content delivery, and seamless user management.",
        desc1: "Building powerful LMS platforms with intuitive interfaces, automation, and engaging learning experiences.",
        checks: ["Course Management System", "Student & Admin Dashboards", "Progress Tracking", "Assessment & Certification"],
        cards: [
          { title: "Course Management", desc: "Easily create, manage, and organize courses with structured content." },
          { title: "Student Dashboard", desc: "Interactive dashboards to track progress and performance." },
          { title: "Assessment System", desc: "Integrated quizzes, tests, and certification modules." },
          { title: "Learning Experience", desc: "User-friendly UI for video lessons and interactive content." }
        ]
      },
      1: {
        title: "Hotel Booking",
        desc: "We create custom hotel booking applications with real-time availability, seamless booking flows, and secure payment integration.",
        desc1: "Designing fast and reliable booking platforms with smooth user journeys and high conversion rates.",
        checks: ["Room Listings & Availability", "Booking & Reservation System", "User Dashboard", "Payment Integration"],
        cards: [
          { title: "Room Listings", desc: "Detailed room displays with images, pricing, and amenities." },
          { title: "Booking Flow", desc: "Simple and quick reservation process with minimal steps." },
          { title: "User Dashboard", desc: "Manage bookings, history, and preferences easily." },
          { title: "Payment System", desc: "Secure and smooth payment experience for hassle-free transactions." }
        ]
      },
      2: {
        title: "AI Chatbot",
        desc: "We build intelligent AI chatbot applications that automate customer interactions, improve response time, and enhance user engagement.",
        desc1: "Creating smart chatbot applications that deliver real-time responses and personalized user experiences.",
        checks: ["Conversational AI Interface", "Multi-Platform Integration", "Automated Responses", "Analytics & Insights"],
        cards: [
          { title: "Chat Interface", desc: "Interactive and user-friendly conversational UI." },
          { title: "Automation Engine", desc: "Automated responses for handling queries efficiently." },
          { title: "Multi-Platform Support", desc: "Integration with websites, apps, and messaging platforms." },
          { title: "Analytics Dashboard", desc: "Track conversations, performance, and user behavior insights." }
        ]
      },
    },
    tabs: [
      { label: "LMS", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hotel Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "AI Chatbot", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Recognized for Excellence & Quality",
    list: [
      { title: "Top Custom Dev", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "High Performer", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Cert", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Product Excellence", body: "Dev Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Agency", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Custom Application Development Services",
    title: "Modern Technologies",
    description: "We use modern technologies to deliver scalable custom application development solutions.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Java / Spring Boot", "Node.js", "React JS", "Angular"] },
      { row: 2, direction: "right", speed: "28s", items: ["MySQL / PostgreSQL", "MongoDB", "Docker", "AWS", "Kubernetes"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT TRUST",
    title: "What Clients Say About Our Custom Application Development Agency",
    rating: "4.9/5",
    reviews: "820+",
    list: [
      { name: "Arjun Mehta", text: "Vihaan delivered our custom application ahead of schedule. The solution was perfectly aligned with our business requirements and performs flawlessly.", initial: "A", color: "#2563eb" },
      { name: "Rohit Agarwal", text: "Their custom development approach helped us streamline operations and reduce costs. The application is fast, secure, and highly reliable.", initial: "R", color: "#10b981" },
      { name: "Kunal Shah", text: "Our custom e-commerce solution handles heavy traffic with ease. The performance and user experience have significantly improved our conversions.", initial: "K", color: "#8b5cf6" },
      { name: "Aditya Nair", text: "The custom-built platform solved critical scalability challenges. Their development team ensured top-notch security and performance.", initial: "A", color: "#f59e0b" },
      { name: "Neha Kapoor", text: "The dashboards and workflows are extremely intuitive. The custom application has improved efficiency and user engagement.", initial: "N", color: "#ec4899" },
      { name: "Varun Malhotra", text: "Vihaan developed a tailored application that perfectly fits our business model. The automation features saved us a lot of time and effort.", initial: "V", color: "#06b6d4" },
      { name: "Pooja Iyer", text: "Our real estate application is seamless and efficient. The custom features helped us generate more leads and improve operations.", initial: "P", color: "#2563eb" },
      { name: "Manish Verma", text: "The application feels premium and performs without any issues. Their custom development expertise is truly impressive.", initial: "M", color: "#10b981" },
      { name: "Ritika Sharma", text: "Our LMS platform is now highly interactive and scalable. The custom application development improved the overall learning experience.", initial: "R", color: "#8b5cf6" },
      { name: "Sandeep Reddy", text: "The healthcare application built by Vihaan is secure, reliable, and easy to use. Managing patient data is now seamless.", initial: "S", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Build Custom Software<br />for Your Business?
      </>
    ),
    description: "Let’s create tailored solutions with our custom application development services.",
    buttonText: "Start Your Custom Solution",
    brandText: "Vihaan Custom Solutions"
  }
};

export const cloudDevFullServiceData = {
  hero: {
    title: "Cloud Based Development Services to Build Scalable and Flexible Applications",
    subtitle: "We create secure and scalable solutions using cloud based development services that help your business grow faster and work efficiently.",
    badgeText: "Move your business to the cloud with confidence. ☁️",
    buttonText: "Start Cloud Development",
    features: [
      { icon: BusinessCenterIcon, text: "Cloud based development" },
      { icon: BusinessCenterIcon, text: "Cloud based software development" },
      { icon: BusinessCenterIcon, text: "Scalable cloud solutions" },
      { icon: BusinessCenterIcon, text: "Secure cloud infrastructure" },
      { icon: BusinessCenterIcon, text: "Cloud migration services" },
      { icon: BusinessCenterIcon, text: "Performance optimization" },
    ]
  },

  overview: {
    subtitle: "COMPLETE CLOUD SOLUTIONS",
    title: "Complete Cloud Based Development Services for Business Growth",
    description: "We provide cloud based development solutions that improve flexibility, scalability, and performance for your applications.",
    list: [
      { title: "Cloud App Development", icon: BusinessCenterIcon, count: "Cloud Native", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We build applications on cloud platforms." },
      { title: "Cloud Migration", icon: BusinessCenterIcon, count: "System Move", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We move your existing systems to the cloud." },
      { title: "Cloud Integration", icon: BusinessCenterIcon, count: "Connect Tools", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We connect your applications and services." },
      { title: "Cloud Maintenance", icon: BusinessCenterIcon, count: "24/7 Support", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We manage and support cloud systems." },
    ]
  },

  detailed: {
    subtitle: "END-TO-END CLOUD",
    title: "End-to-End Cloud Based Software Development Solutions",
    description: "Our cloud based development services cover planning, deployment, and optimization for better results.",
    services: [
      {
        title: "CLOUD SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your cloud needs.", icon: <BusinessCenterIcon /> },
          { title: "Architecture Design", desc: "We design cloud infrastructure.", icon: <BusinessCenterIcon /> },
          { title: "Development & Migration", desc: "We build and migrate applications.", icon: <BusinessCenterIcon /> },
          { title: "Monitoring & Optimization", desc: "We improve performance continuously.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY CLOUD WITH US",
    title: "Why Choose Our Cloud Based Development Services",
    description: "We focus on delivering cloud based software development solutions that are secure, scalable, and efficient.",
    stats: [
      { value: "100+", label: "Cloud Projects" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Scalable Solutions", icon: BusinessCenterIcon, desc: "We build flexible cloud systems.", color: "#2563eb", number: "01" },
      { title: "Secure Infrastructure", icon: BusinessCenterIcon, desc: "We ensure data safety.", color: "#06b6d4", number: "02" },
      { title: "High Performance", icon: BusinessCenterIcon, desc: "We optimize speed and efficiency.", color: "#4f46e5", number: "03" },
      { title: "Cost Effective", icon: BusinessCenterIcon, desc: "We reduce operational costs.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "CLOUD WORKFLOW",
    title: "Our Cloud Based Development Services Process for Better Performance",
    description: "We follow a structured process to deliver reliable cloud based development and cloud based software development solutions.",
    processSteps: [
      { number: "01", title: "Requirement Analysis", desc: "We understand your cloud needs.", checks: ["Identify goals", "Analyze current systems", "Define requirements"], position: "above" },
      { number: "02", title: "Architecture Design", desc: "We design cloud infrastructure.", checks: ["Choose cloud platform", "Define architecture", "Plan scalability"], position: "below" },
      { number: "03", title: "Development & Migration", desc: "We build and move applications.", checks: ["Develop cloud apps", "Migrate data", "Integrate systems"], position: "above" },
      { number: "04", title: "Testing", desc: "We ensure system quality.", checks: ["Performance testing", "Security testing", "Bug fixing"], position: "below" },
      { number: "05", title: "Deployment", desc: "We launch cloud solutions.", checks: ["Configure servers", "Deploy applications", "Go live"], position: "above" },
      { number: "06", title: "Monitoring & Optimization", desc: "We improve cloud performance.", checks: ["Monitor usage", "Optimize resources", "Improve efficiency"], position: "below" }
    ]
  },

  industry: {
    subtitle: "CLOUD ACROSS INDUSTRIES",
    title: "Cloud Solutions Across Industries",
    description: "As a leading cloud-based development company, we deliver scalable, secure, and high-performance cloud solutions across multiple sectors.",
    industries: {
      0: {
        title: "E-Commerce",
        desc: "We build cloud-powered eCommerce platforms with high scalability, seamless performance, and optimized user journeys for better conversions.",
        desc1: "Creating fast, scalable, and reliable eCommerce platforms with smooth navigation and high availability.",
        checks: ["Product Catalog Management", "Cart & Checkout System", "User Accounts & Dashboards", "Payment Gateway Integration"],
        cards: [
          { title: "Product Listing", desc: "Optimized product displays with filters and smart categorization." },
          { title: "Cart & Checkout", desc: "Frictionless checkout process with cloud-backed performance." },
          { title: "User Dashboard", desc: "Centralized dashboards for orders, tracking, and account management." },
          { title: "Payment Experience", desc: "Secure and fast cloud-based payment processing." }
        ]
      },
      1: {
        title: "Food Booking",
        desc: "Our cloud-based development services for food booking platforms ensure real-time performance, smooth ordering flows, and reliable scalability.",
        desc1: "Designing scalable food platforms with fast ordering, real-time updates, and seamless user experience.",
        checks: ["Online Food Ordering System", "Restaurant Listings", "Real-Time Order Tracking", "Payment Integration"],
        cards: [
          { title: "Menu Browsing", desc: "Easy-to-navigate menus with categories and quick selections." },
          { title: "Order Flow", desc: "Simplified ordering system for faster checkout." },
          { title: "Live Order Tracking", desc: "Real-time tracking powered by cloud infrastructure." },
          { title: "Payment Integration", desc: "Secure and reliable cloud-based payment systems." }
        ]
      },
      2: {
        title: "Resort Booking",
        desc: "We develop cloud-based resort booking systems with real-time availability, seamless booking flows, and high performance.",
        desc1: "Building reliable booking platforms with smooth user journeys and scalable infrastructure.",
        checks: ["Room & Resort Listings", "Availability Management", "Booking & Reservation System", "Secure Payment Integration"],
        cards: [
          { title: "Resort Listings", desc: "Detailed listings with images, pricing, and amenities." },
          { title: "Availability System", desc: "Real-time room availability and instant updates." },
          { title: "Booking Flow", desc: "Quick and user-friendly reservation process." },
          { title: "Payment System", desc: "Secure and seamless payment experience for users." }
        ]
      },
    },
    tabs: [
      { label: "E-Commerce", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Food Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Resort Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Cloud Excellence & Innovation",
    list: [
      { title: "Top Cloud Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Cloud Innovator", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 27001 Cert", body: "Security Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Migration Award", body: "Cloud Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "AWS Partner", body: "Certification", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Cloud Based Development Services",
    title: "Cloud Infrastructure",
    description: "We use leading cloud platforms and tools to deliver reliable cloud based software development solutions.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Heroku"] },
      { row: 2, direction: "right", speed: "28s", items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Cloudflare", "Jenkins"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT TRUST",
    title: "What Clients Say About Our Cloud Based Development Services",
    rating: "4.9/5",
    reviews: "750+",
    list: [
      { name: "Vikash Singh", text: "Vihaan delivered our cloud-based application ahead of schedule. The solution was perfectly aligned with our business requirements and performs flawlessly.", initial: "V", color: "#2563eb" },
      { name: "Deepak Jain", text: "Their cloud development approach helped us streamline operations and reduce infrastructure costs. The application is fast, secure, and highly reliable.", initial: "D", color: "#10b981" },
      { name: "Harsh Gupta", text: "Our cloud-based e-commerce solution handles high traffic with ease. The scalability and performance have significantly improved our conversions.", initial: "H", color: "#8b5cf6" },
      { name: "Rakesh Iyer", text: "The cloud platform solved critical scalability challenges. Their team ensured top-notch security, uptime, and performance.", initial: "R", color: "#f59e0b" },
      { name: "Pallavi Desai", text: "The dashboards and workflows are extremely intuitive. The cloud-based application has improved efficiency and user engagement.", initial: "P", color: "#ec4899" },
      { name: "Ankit Sharma", text: "Vihaan developed a scalable cloud solution that perfectly fits our business model. Automation and flexibility saved us time and effort.", initial: "A", color: "#06b6d4" },
      { name: "Meera Nair", text: "Our real estate cloud application is seamless and efficient. The features helped us generate more leads and improve operations.", initial: "M", color: "#2563eb" },
      { name: "Siddharth Malhotra", text: "The application feels premium and performs without any issues. Their cloud development expertise is truly impressive.", initial: "S", color: "#10b981" },
      { name: "Kavya Reddy", text: "Our LMS cloud platform is highly interactive and scalable. The development improved the overall learning experience.", initial: "K", color: "#8b5cf6" },
      { name: "Naveen Kumar", text: "The healthcare cloud application is secure, reliable, and easy to use. Managing patient data is now seamless.", initial: "N", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Move Your Business<br />to the Cloud?
      </>
    ),
    description: "Let’s build scalable solutions with our cloud based development services.",
    buttonText: "Start Your Cloud Journey",
    brandText: "Vihaan Cloud Solutions"
  }
};

export const devopsFullServiceData = {
  hero: {
    title: "DevOps Services Company for Faster Development and Reliable Deployment",
    subtitle: "We help you improve development speed and system reliability using DevOps services and automation solutions.",
    badgeText: "Improve your development process and deliver faster. ⚙️",
    buttonText: "Start DevOps Implementation",
    features: [
      { icon: BusinessCenterIcon, text: "DevOps services company support" },
      { icon: BusinessCenterIcon, text: "DevOps automation services" },
      { icon: BusinessCenterIcon, text: "Continuous integration and delivery" },
      { icon: BusinessCenterIcon, text: "Infrastructure automation" },
      { icon: BusinessCenterIcon, text: "Monitoring and performance" },
      { icon: BusinessCenterIcon, text: "Faster deployment cycles" },
    ]
  },

  overview: {
    subtitle: "DEVOPS DEVELOPMENT COMPANY",
    title: "Complete DevOps Services for Business Efficiency",
    description: "As a DevOps development company, we provide solutions that improve collaboration, automation, and delivery speed.",
    list: [
      { title: "CI/CD Setup", icon: BusinessCenterIcon, count: "Pipeline Automation", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We implement continuous integration and delivery pipelines." },
      { title: "Infrastructure Automation", icon: BusinessCenterIcon, count: "Efficiency Boost", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We automate infrastructure for better efficiency." },
      { title: "Monitoring & Logging", icon: BusinessCenterIcon, count: "System Health", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We track system performance and issues." },
      { title: "Cloud DevOps", icon: BusinessCenterIcon, count: "Cloud Management", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We manage DevOps on cloud platforms." },
    ]
  },

  detailed: {
    subtitle: "FASTER DELIVERY",
    title: "End-to-End DevOps Services Company Solutions for Faster Delivery",
    description: "Our DevOps automation services cover planning, implementation, and optimization for better performance.",
    services: [
      {
        title: "DEVOPS SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Assessment", desc: "We analyze your current system.", icon: <BusinessCenterIcon /> },
          { title: "Planning", desc: "We design DevOps strategies.", icon: <BusinessCenterIcon /> },
          { title: "Implementation", desc: "We set up tools and pipelines.", icon: <BusinessCenterIcon /> },
          { title: "Optimization", desc: "We improve system performance.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY DEVOPS WITH US",
    title: "Why Choose Our DevOps Services Company for Better Performance",
    description: "We focus on delivering DevOps automation services that improve speed, reliability, and efficiency.",
    stats: [
      { value: "100+", label: "DevOps Projects" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Automation Focused", icon: BusinessCenterIcon, desc: "We reduce manual work with automation.", color: "#2563eb", number: "01" },
      { title: "Faster Delivery", icon: BusinessCenterIcon, desc: "We speed up deployment cycles.", color: "#06b6d4", number: "02" },
      { title: "Reliable Systems", icon: BusinessCenterIcon, desc: "We improve system stability.", color: "#4f46e5", number: "03" },
      { title: "Continuous Improvement", icon: BusinessCenterIcon, desc: "We optimize performance regularly.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "CONTINUOUS DELIVERY",
    title: "Our DevOps Services Company Process for Continuous Delivery",
    description: "As a DevOps development company, we follow a structured process to deliver efficient DevOps automation services.",
    processSteps: [
      { number: "01", title: "System Assessment", desc: "We analyze your current setup.", checks: ["Identify gaps", "Review workflows", "Understand needs"], position: "above" },
      { number: "02", title: "Strategy Planning", desc: "We plan DevOps implementation.", checks: ["Define pipelines", "Choose tools", "Set goals"], position: "below" },
      { number: "03", title: "Automation Setup", desc: "We implement automation solutions.", checks: ["CI/CD pipelines", "Infrastructure automation", "Deployment setup"], position: "above" },
      { number: "04", title: "Integration", desc: "We integrate tools and systems.", checks: ["Connect tools", "Improve workflows", "Ensure compatibility"], position: "below" },
      { number: "05", title: "Monitoring", desc: "We track system performance.", checks: ["Monitor logs", "Identify issues", "Improve uptime"], position: "above" },
      { number: "06", title: "Optimization", desc: "We improve DevOps services continuously.", checks: ["Enhance performance", "Reduce errors", "Improve delivery"], position: "below" }
    ]
  },

  industry: {
    subtitle: "DEVOPS ACROSS INDUSTRIES",
    title: "DevOps Solutions Across Industries",
    description: "As a leading DevOps services company, we deliver industry-specific infrastructure solutions that enhance scalability and automate workflows.",
    industries: {
      0: {
        title: "Real Estate",
        desc: "We implement DevOps solutions for real estate platforms to ensure high availability, fast performance, and seamless property management systems.",
        desc1: "Optimizing real estate systems with automated deployments, improved uptime, and reliable performance.",
        checks: ["Property Platform Deployment", "Scalable Infrastructure", "Continuous Monitoring", "Secure Data Management"],
        cards: [
          { title: "Platform Stability", desc: "Highly available infrastructure for uninterrupted user experience." },
          { title: "Scalable Systems", desc: "Handle growing property listings and user traffic easily." },
          { title: "Monitoring & Alerts", desc: "Real-time monitoring with instant issue detection." },
          { title: "Data Security", desc: "Secure handling of property and user data." }
        ]
      },
      1: {
        title: "Listing Site",
        desc: "Our DevOps services for listing platforms ensure smooth deployments, high scalability, and optimized performance for better user engagement.",
        desc1: "Building scalable listing platforms with automated workflows and seamless performance.",
        checks: ["CI/CD Pipelines", "Auto Scaling Infrastructure", "Performance Optimization", "Cloud Deployment"],
        cards: [
          { title: "Auto Scaling", desc: "Dynamically scale resources based on traffic demand." },
          { title: "Fast Deployment", desc: "Continuous integration and delivery for quick updates." },
          { title: "Performance Optimization", desc: "Ensure fast loading and smooth browsing experience." },
          { title: "System Reliability", desc: "Minimize downtime with robust DevOps practices." }
        ]
      },
      2: {
        title: "Education CRM",
        desc: "We deliver DevOps solutions for education CRM platforms to improve system efficiency, automate processes, and ensure seamless user experience.",
        desc1: "Enhancing education platforms with scalable infrastructure, automation, and reliable system performance.",
        checks: ["CRM Deployment Automation", "Data Management Systems", "Continuous Integration", "Performance Monitoring"],
        cards: [
          { title: "CRM Automation", desc: "Automate workflows for student and admin processes." },
          { title: "System Monitoring", desc: "Track system performance and resolve issues proactively." },
          { title: "Scalable Infrastructure", desc: "Support growing student data and platform usage." },
          { title: "Secure Data Handling", desc: "Ensure protection of sensitive student information." }
        ]
      },
    },
    tabs: [
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Listing Site", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Education CRM", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "DevOps Excellence & Quality",
    list: [
      { title: "Top DevOps Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Automation Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 27001 Certified", body: "Security Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Deployment Award", body: "Tech Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Specialist", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for DevOps Automation Services",
    title: "Automation Tools",
    description: "We use modern tools to deliver reliable DevOps services and automation solutions.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"] },
      { row: 2, direction: "right", speed: "28s", items: ["Docker", "Kubernetes", "Ansible", "Terraform", "Prometheus", "Grafana"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT TRUST",
    title: "What Clients Say About Our DevOps Services Company",
    rating: "4.9/5",
    reviews: "680+",
    list: [
      { name: "Arvind Kumar", text: "Vihaan delivered our DevOps implementation ahead of schedule. The solution perfectly aligned with our infrastructure needs and performs flawlessly.", initial: "A", color: "#2563eb" },
      { name: "Nitin Bansal", text: "Their DevOps approach helped us streamline deployments and reduce infrastructure costs. The system is fast, secure, and highly reliable.", initial: "N", color: "#10b981" },
      { name: "Gaurav Sharma", text: "Our cloud infrastructure now handles high traffic effortlessly. The scalability and performance improvements are remarkable.", initial: "G", color: "#8b5cf6" },
      { name: "Sanjay Nair", text: "The DevOps strategy solved critical scalability and deployment challenges. Their team ensured top-notch security and uptime.", initial: "S", color: "#f59e0b" },
      { name: "Ritika Deshmukh", text: "The CI/CD pipelines and workflows are extremely efficient. Our release cycles are now faster and more reliable.", initial: "R", color: "#ec4899" },
      { name: "Karan Mehta", text: "Vihaan built a scalable DevOps pipeline tailored to our business. Automation has saved us significant time and effort.", initial: "K", color: "#06b6d4" },
      { name: "Divya Iyer", text: "Our infrastructure is now seamless and efficient. DevOps practices helped us improve performance and system reliability.", initial: "D", color: "#2563eb" },
      { name: "Aakash Verma", text: "The system performs flawlessly with zero downtime. Their DevOps expertise is truly impressive.", initial: "A", color: "#10b981" },
      { name: "Shreya Kapoor", text: "Our platform is now highly scalable and stable. Continuous integration and deployment improved our delivery speed.", initial: "S", color: "#8b5cf6" },
      { name: "Praveen Reddy", text: "The healthcare system is now secure, reliable, and easy to manage. DevOps implementation made operations seamless.", initial: "P", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Improve Your Workflow<br />with DevOps Services?
      </>
    ),
    description: "Let’s implement DevOps automation services to speed up your development and deployment.",
    buttonText: "Optimize Your DevOps Now",
    brandText: "Vihaan DevOps Solutions"
  }
};

export const dataScienceFullServiceData = {
  hero: {
    title: "Data Science and Big Data Analytics Services for Better Business Decisions",
    subtitle: "We help you understand your data using data science and big data analytics services that provide useful insights for your business growth.",
    badgeText: "Turn your data into actionable insights. 📊",
    buttonText: "Start Data Analytics",
    features: [
      { icon: BusinessCenterIcon, text: "Data science and big data analytics" },
      { icon: BusinessCenterIcon, text: "Big data analytics services" },
      { icon: BusinessCenterIcon, text: "Data visualization solutions" },
      { icon: BusinessCenterIcon, text: "Predictive analytics models" },
      { icon: BusinessCenterIcon, text: "Business intelligence tools" },
      { icon: BusinessCenterIcon, text: "Data-driven growth strategies" },
    ]
  },

  overview: {
    subtitle: "DATA ANALYTICS AGENCY",
    title: "Complete Data Science and Big Data Services for Growth",
    description: "As a data science agency, we help you analyze large sets of data to improve business performance and decision-making.",
    list: [
      { title: "Data Analysis", icon: BusinessCenterIcon, count: "Smart Insights", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We analyze your data to find patterns and trends." },
      { title: "Big Data Solutions", icon: BusinessCenterIcon, count: "Large Scale", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We manage and process large amounts of data." },
      { title: "Predictive Modeling", icon: BusinessCenterIcon, count: "Future Trends", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We build models to predict future outcomes." },
      { title: "Data Visualization", icon: BusinessCenterIcon, count: "Clear Charts", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We create easy-to-understand charts and reports." },
    ]
  },

  detailed: {
    subtitle: "SMART DATA",
    title: "End-to-End Data Science and Big Data Analytics Solutions",
    description: "Our big data analytics services cover data gathering, analysis, and reporting for better results.",
    services: [
      {
        title: "ANALYTICS SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Data Collection", desc: "We gather data from various sources.", icon: <BusinessCenterIcon /> },
          { title: "Data Processing", desc: "We clean and prepare your data.", icon: <BusinessCenterIcon /> },
          { title: "Smart Analysis", desc: "We find useful insights in data.", icon: <BusinessCenterIcon /> },
          { title: "Reporting", desc: "We provide easy-to-read reports.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY DATA WITH US",
    title: "Why Choose Our Data Science and Big Data Analytics Services",
    description: "We focus on delivering big data analytics services that are simple, scalable, and provide real value to your business.",
    stats: [
      { value: "500TB+", label: "Data Processed" },
      { value: "95%", label: "Accuracy Rate" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Expert Analysis", icon: BusinessCenterIcon, desc: "We find hidden patterns in your data.", color: "#2563eb", number: "01" },
      { title: "Fast Processing", icon: BusinessCenterIcon, desc: "We process big data quickly.", color: "#06b6d4", number: "02" },
      { title: "Clear Insights", icon: BusinessCenterIcon, desc: "We provide easy-to-understand results.", color: "#4f46e5", number: "03" },
      { title: "Smart Decisions", icon: BusinessCenterIcon, desc: "We help you make better business moves.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "DATA WORKFLOW",
    title: "Our Data Science and Big Data Analytics Process for Better Results",
    description: "As a data science agency, we follow a structured process to deliver reliable data science and big data analytics services.",
    processSteps: [
      { number: "01", title: "Data Gathering", desc: "We collect data from multiple sources.", checks: ["Database connection", "Data extraction", "API integration"], position: "above" },
      { number: "02", title: "Data Cleaning", desc: "We prepare data for analysis.", checks: ["Remove errors", "Format data", "Ensure quality"], position: "below" },
      { number: "03", title: "Advanced Analysis", desc: "We find patterns and trends.", checks: ["Statistical analysis", "Data mining", "Trend spotting"], position: "above" },
      { number: "04", title: "Predictive Modeling", desc: "We build models for future trends.", checks: ["AI algorithms", "Pattern prediction", "Model testing"], position: "below" },
      { number: "05", title: "Visualization", desc: "We create clear reports and charts.", checks: ["Dashboard setup", "Graphic reports", "Data stories"], position: "above" },
      { number: "06", title: "Insight Delivery", desc: "We provide actionable business insights.", checks: ["Final report", "Business advice", "Continuous monitoring"], position: "below" }
    ]
  },

  industry: {
    subtitle: "DATA ACROSS INDUSTRIES",
    title: "Data Solutions Across Industries",
    description: "As a premier data science agency, we deliver tailored big data analytics services that drive innovation and efficiency in diverse sectors.",
    industries: {
      0: {
        title: "Matrimony",
        desc: "We leverage data science and big data analytics for matrimony platforms to improve matchmaking accuracy and user engagement through smart algorithms.",
        desc1: "Enhancing matchmaking platforms with predictive analytics, personality matching, and behavioral insights.",
        checks: ["Matchmaking Algorithms", "User Behavior Analysis", "Preference Prediction", "Engagement Optimization"],
        cards: [
          { title: "Smart Matchmaking", desc: "AI-driven algorithms for highly accurate property matches." },
          { title: "User Insights", desc: "Understand user preferences and improve service delivery." },
          { title: "Churn Prediction", desc: "Identify users likely to leave and improve retention." },
          { title: "Personalized Content", desc: "Tailor experiences based on user search and interaction history." }
        ]
      },
      1: {
        title: "HRM Software",
        desc: "Our data analytics services for HRM software provide deep insights into employee performance, retention, and workforce planning.",
        desc1: "Optimizing human resource management with data-driven performance tracking and predictive hiring models.",
        checks: ["Performance Analytics", "Employee Retention Models", "Workforce Planning", "Hiring Insights"],
        cards: [
          { title: "Performance Metrics", desc: "Track and analyze employee performance with clear data points." },
          { title: "Retention Analysis", desc: "Predict employee turnover and implement retention strategies." },
          { title: "Smart Hiring", desc: "Use data to identify the best candidates and improve hiring quality." },
          { title: "Resource Allocation", desc: "Optimize workforce distribution based on project needs." }
        ]
      },
      2: {
        title: "Hospital Management",
        desc: "We deliver data science solutions for hospital management to improve patient outcomes, optimize resource allocation, and enhance operational efficiency.",
        desc1: "Transforming healthcare with predictive patient analytics and streamlined hospital operations.",
        checks: ["Patient Outcome Prediction", "Resource Optimization", "Healthcare Data Analysis", "Operational Insights"],
        cards: [
          { title: "Patient Insights", desc: "Analyze patient data to improve treatment and care quality." },
          { title: "Resource Management", desc: "Optimize hospital resources including beds, staff, and equipment." },
          { title: "Efficiency Tracking", desc: "Improve hospital operations with data-driven workflow analysis." },
          { title: "Secure Analytics", desc: "Ensure patient data privacy while extracting valuable insights." }
        ]
      },
    },
    tabs: [
      { label: "Matrimony", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "HRM Software", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hospital Management", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Data Excellence & Innovation",
    list: [
      { title: "Top AI Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Analytics Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 27001 Certified", body: "Data Security", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Insight Award", body: "Data Summit", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Partner", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Big Data Analytics Services",
    title: "Analytics Technologies",
    description: "We use modern tools to deliver reliable data science and big data analytics services.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Python", "R Language", "Tableau", "Power BI", "Apache Spark"] },
      { row: 2, direction: "right", speed: "28s", items: ["Hadoop", "TensorFlow", "Pandas", "Scikit-Learn", "HBase", "Cassandra"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT TRUST",
    title: "What Clients Say About Our Data Science Agency",
    rating: "4.9/5",
    reviews: "560+",
    list: [
      { name: "Sanjay Gupta", text: "Vihaan provided insights that transformed our business strategy. Their big data analytics services are truly world-class.", initial: "S", color: "#2563eb" },
      { name: "Anjali Verma", text: "The predictive models helped us anticipate market trends accurately. Their data science expertise is impressive.", initial: "A", color: "#10b981" },
      { name: "Rahul Sharma", text: "Their data visualization dashboards are incredibly clear and useful for our daily operations. Decision making is now much faster.", initial: "R", color: "#8b5cf6" },
      { name: "Preeti Nair", text: "The analysis of our customer data revealed hidden patterns we never noticed. Our marketing ROI has since improved significantly.", initial: "P", color: "#f59e0b" },
      { name: "Amitabh Shah", text: "Vihaan's team handled our big data challenges with ease. The scalability and speed of their solutions are remarkable.", initial: "A", color: "#ec4899" },
      { name: "Megha Rao", text: "The data-driven insights allowed us to optimize our supply chain efficiently. We've seen a noticeable reduction in costs.", initial: "M", color: "#06b6d4" },
      { name: "Rajiv Malhotra", text: "Professional, knowledgeable, and reliable. Their big data analytics services have been a game-changer for our platform.", initial: "R", color: "#2563eb" },
      { name: "Nisha Kapoor", text: "The predictive hiring model significantly improved our recruitment quality. Their data science solutions are very effective.", initial: "N", color: "#10b981" },
      { name: "Kunal Jain", text: "Our hospital management system is now much more efficient thanks to their resource optimization analysis.", initial: "K", color: "#8b5cf6" },
      { name: "Swati Reddy", text: "The matrimony matching algorithm is now more accurate, leading to better user satisfaction. Great work by the data science team.", initial: "S", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Unlock Your Business<br />Data with Analytics?
      </>
    ),
    description: "Let’s turn your data into smart insights with our big data analytics services.",
    buttonText: "Get Your Data Analysis now",
    brandText: "Vihaan Data Insights"
  }
};

export const ecommerceFullServiceData = {
  hero: {
    title: "Ecommerce Website Development Services to Build High-Conversion Online Stores",
    subtitle: "We create secure and scalable online stores using ecommerce website development services that help your business sell more and grow online.",
    badgeText: "Build an online store that drives sales and growth. 🛒",
    buttonText: "Start Your Online Store",
    features: [
      { icon: BusinessCenterIcon, text: "Ecommerce website development" },
      { icon: BusinessCenterIcon, text: "Online store development services" },
      { icon: BusinessCenterIcon, text: "Custom ecommerce solutions" },
      { icon: BusinessCenterIcon, text: "Secure payment integration" },
      { icon: BusinessCenterIcon, text: "User-friendly shopping experience" },
      { icon: BusinessCenterIcon, text: "Ongoing support and maintenance" },
    ]
  },

  overview: {
    subtitle: "ECOMMERCE DEVELOPMENT AGENCY",
    title: "Complete Ecommerce Development Services for Business Growth",
    description: "As an ecommerce website development agency, we provide solutions that improve user experience and increase online sales.",
    list: [
      { title: "Custom Store Design", icon: BusinessCenterIcon, count: "Unique Looks", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We create modern and attractive online stores." },
      { title: "Shopping Cart Dev", icon: BusinessCenterIcon, count: "Smooth Buying", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We build easy-to-use shopping cart systems." },
      { title: "Payment Integration", icon: BusinessCenterIcon, count: "Secure Paying", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We connect secure payment methods to your store." },
      { title: "Store Maintenance", icon: BusinessCenterIcon, count: "Always Open", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We support and update your store regularly." },
    ]
  },

  detailed: {
    subtitle: "SELL ONLINE",
    title: "End-to-End Ecommerce Website Development Solutions",
    description: "Our ecommerce development services cover planning, design, and development for better results.",
    services: [
      {
        title: "ECOMMERCE SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your selling needs.", icon: <BusinessCenterIcon /> },
          { title: "Store Design", desc: "We create attractive store layouts.", icon: <BusinessCenterIcon /> },
          { title: "Development", desc: "We build your online store.", icon: <BusinessCenterIcon /> },
          { title: "Launch & Support", desc: "We launch your store and provide help.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY ECOMMERCE WITH US",
    title: "Why Choose Our Ecommerce Website Development Agency",
    description: "We focus on delivering ecommerce website development solutions that are simple, scalable, and secure.",
    stats: [
      { value: "200+", label: "Stores Launched" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "User-Friendly Design", icon: BusinessCenterIcon, desc: "We make shopping easy for your users.", color: "#2563eb", number: "01" },
      { title: "Scalable Platforms", icon: BusinessCenterIcon, desc: "We build stores that grow with you.", color: "#06b6d4", number: "02" },
      { title: "Secure Checkout", icon: BusinessCenterIcon, desc: "We ensure safe and reliable payments.", color: "#4f46e5", number: "03" },
      { title: "Business Growth", icon: BusinessCenterIcon, desc: "We help you reach more customers.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "SALES WORKFLOW",
    title: "Our Ecommerce Website Development Process for Efficient Sales",
    description: "As an ecommerce website development agency, we follow a structured process to deliver reliable ecommerce development services.",
    processSteps: [
      { number: "01", title: "Requirement Gathering", desc: "We understand your product and goals.", checks: ["Identify target audience", "Define store features", "Understand business model"], position: "above" },
      { number: "02", title: "UX/UI Design", desc: "We design a high-converting store.", checks: ["Plan user journey", "Create wireframes", "Design visuals"], position: "below" },
      { number: "03", title: "Store Development", desc: "We build your ecommerce platform.", checks: ["Backend development", "Frontend implementation", "Integrations"], position: "above" },
      { number: "04", title: "Integration & Testing", desc: "We ensure everything works smoothly.", checks: ["Payment gateway setup", "Security checks", "Bug testing"], position: "below" },
      { number: "05", title: "Launch", desc: "We go live with your online store.", checks: ["Final configuration", "Server setup", "Official launch"], position: "above" },
      { number: "06", title: "Optimization & Support", desc: "We help you grow your store.", checks: ["Monitor performance", "Ongoing maintenance", "Improvements based on data"], position: "below" }
    ]
  },

  industry: {
    subtitle: "ECOMMERCE ACROSS INDUSTRIES",
    title: "Ecommerce Solutions Across Industries",
    description: "As a premier ecommerce website development agency, we deliver tailored online store solutions that drive sales and improve user experiences in diverse sectors.",
    industries: {
      0: {
        title: "Food Ordering",
        desc: "We build ecommerce platforms for food ordering with real-time performance, smooth ordering flows, and high scalability for better user experiences.",
        desc1: "Designing fast-loading food platforms with seamless navigation and reliable performance.",
        checks: ["Online Menu Management", "Order Tracking System", "User Dashboards", "Secure Payment Gateway"],
        cards: [
          { title: "Menu Discovery", desc: "Easy-to-use menu browsing with filters and categories." },
          { title: "Ordering Flow", desc: "Simplified ordering process for faster user checkout." },
          { title: "Order Tracking", desc: "Real-time updates to keep customers informed." },
          { title: "Payment Integration", desc: "Highly secure and reliable food ordering payments." }
        ]
      },
      1: {
        title: "Real Estate",
        desc: "Our ecommerce website development services for real estate platforms ensure high availability, fast performance, and seamless property management.",
        desc1: "Building scalable real estate platforms with automated workflows and reliable performance.",
        checks: ["Property Listing System", "User Engagement Tools", "Search & Filter Analytics", "Payment Integration Options"],
        cards: [
          { title: "Property Showcase", desc: "Attractive listings that convert visitors into leads." },
          { title: "Smart Filters", desc: "Advanced searches to help users find what they need." },
          { title: "Lead Management", desc: "Integrated tools to handle and track user inquiries." },
          { title: "Secure Transactions", desc: "Safe handling of bookings and payments." }
        ]
      },
      2: {
        title: "Education",
        desc: "We deliver ecommerce solutions for education platforms to improve system efficiency, automate course sales, and ensure seamless student experiences.",
        desc1: "Enhancing education platforms with reliable infrastructure, automation, and powerful performance.",
        checks: ["Course Enrollment System", "Data Management Tools", "Student Dashboards", "Secure Payment Integration"],
        cards: [
          { title: "Course Sales", desc: "Streamlined enrollment process for improved conversions." },
          { title: "User Monitoring", desc: "Track student engagement and platform performance." },
          { title: "Scalable Learning", desc: "Support growing student numbers and course data." },
          { title: "Stable Integration", desc: "Seamless connection with LMS and payment gateways." }
        ]
      },
    },
    tabs: [
      { label: "Food Ordering", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Real Estate", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Education", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Ecommerce Excellence & Conversion",
    list: [
      { title: "Top Ecom Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Conversion Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "UX/UI Design", body: "Design Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Shopify Partner", body: "Ecommerce", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Ecommerce Website Development Services",
    title: "Modern Online Stores",
    description: "We use modern platforms and tools to deliver reliable ecommerce website development and online store development services.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Shopify", "Magento", "WooCommerce", "BigCommerce"] },
      { row: 2, direction: "right", speed: "28s", items: ["React JS", "Node.js", "MySQL", "Stripe", "PayPal", "Cloudflare"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT TRUST",
    title: "What Clients Say About Our Ecommerce Website Development Agency",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Rahul Soni", text: "Vihaan delivered our ecommerce store ahead of schedule. The solution was perfectly aligned with our business requirements and performs flawlessly.", initial: "R", color: "#2563eb" },
      { name: "Suresh Patel", text: "Their ecommerce development approach helped us increase our online sales significantly. The website is fast, secure, and highly reliable.", initial: "S", color: "#10b981" },
      { name: "Anita Rao", text: "Our online store handles heavy festive traffic without any issues. The user experience and conversion rate have improved greatly.", initial: "A", color: "#8b5cf6" },
      { name: "Vikas Malhotra", text: "The custom features built by Vihaan solved critical payment and shipping challenges. Their development team ensured top-notch security.", initial: "V", color: "#f59e0b" },
      { name: "Priya Sharma", text: "The store dashboard and management system are extremely intuitive. Managing products and orders is now very easy.", initial: "P", color: "#ec4899" },
      { name: "Aditya Hegde", text: "Vihaan developed a tailored ecommerce solution that perfectly fits our brand. Automation features saved us a lot of time.", initial: "A", color: "#06b6d4" },
      { name: "Nikita Jain", text: "Our real estate lead platform is seamless and efficient. Ecommerce features helped us generate more reliable inquiries.", initial: "N", color: "#2563eb" },
      { name: "Sameer Verma", text: "The online store feels premium and performs flawlessly. Their ecommerce expertise is truly impressive.", initial: "S", color: "#10b981" },
      { name: "Kavita Reddy", text: "Our educational course platform is now highly interactive and profitable. The development improved the overall student enrollment experience.", initial: "K", color: "#8b5cf6" },
      { name: "Ravi Teja", text: "The food ordering system built by Vihaan is fast, reliable, and user-friendly. Managing deliveries and payments is now seamless.", initial: "R", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Build a High-Conversion<br />Online Store?
      </>
    ),
    description: "Let’s create tailored ecommerce solutions with our ecommerce website development services.",
    buttonText: "Start My Ecommerce Project",
    brandText: "Vihaan Ecommerce Solutions"
  }
};

export const aiMlFullServiceData = {
  hero: {
    title: "AI & ML Development Services to Build Intelligent and Automated Business Solutions",
    subtitle: "We create smart software using AI & ML development services that help your business automate tasks and make better decisions.",
    badgeText: "Transform your business with intelligent AI solutions. 🤖",
    buttonText: "Start AI Development",
    features: [
      { icon: BusinessCenterIcon, text: "AI & ML development services" },
      { icon: BusinessCenterIcon, text: "Artificial Intelligence solutions" },
      { icon: BusinessCenterIcon, text: "Machine Learning models" },
      { icon: BusinessCenterIcon, text: "Automated business processes" },
      { icon: BusinessCenterIcon, text: "Smart data analysis" },
      { icon: BusinessCenterIcon, text: "Custom AI applications" },
    ]
  },

  overview: {
    subtitle: "AI DEVELOPMENT AGENCY",
    title: "Complete AI & ML Development Services for Business Growth",
    description: "As an AI development agency, we provide solutions that improve efficiency, automation, and smart decision-making.",
    list: [
      { title: "AI Application Dev", icon: BusinessCenterIcon, count: "Smart Apps", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We build applications powered by AI." },
      { title: "ML Model Training", icon: BusinessCenterIcon, count: "Smart Models", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We train models to learn from your data." },
      { title: "Natural Language", icon: BusinessCenterIcon, count: "Text Analysis", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create systems that understand language." },
      { title: "AI Support", icon: BusinessCenterIcon, count: "Smart Help", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We provide ongoing support for AI systems." },
    ]
  },

  detailed: {
    subtitle: "SMART AUTOMATION",
    title: "End-to-End AI & ML Development Solutions from Idea to Execution",
    description: "Our AI & ML development services cover planning, development, and optimization for better results.",
    services: [
      {
        title: "AI SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Requirement Analysis", desc: "We understand your AI needs.", icon: <BusinessCenterIcon /> },
          { title: "Model Design", desc: "We design AI and ML models.", icon: <BusinessCenterIcon /> },
          { title: "Development", desc: "We build smart AI solutions.", icon: <BusinessCenterIcon /> },
          { title: "Launch & Support", desc: "We launch and improve AI systems.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY AI WITH US",
    title: "Why Choose Our AI & ML Development Agency",
    description: "We focus on delivering AI & ML development solutions that are smart, scalable, and efficient.",
    stats: [
      { value: "50+", label: "AI Models Built" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Advanced AI", icon: BusinessCenterIcon, desc: "We use the latest AI technologies.", color: "#2563eb", number: "01" },
      { title: "Smart Automation", icon: BusinessCenterIcon, desc: "We automate complex business tasks.", color: "#06b6d4", number: "02" },
      { title: "Data Driven", icon: BusinessCenterIcon, desc: "We make decisions based on smart data.", color: "#4f46e5", number: "03" },
      { title: "Scalable Systems", icon: BusinessCenterIcon, desc: "We build AI solutions that grow.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "SMART WORKFLOW",
    title: "Our AI & ML Development Process for Better Performance",
    description: "As an AI development agency, we follow a structured process to deliver reliable AI & ML development services.",
    processSteps: [
      { number: "01", title: "Problem Identification", desc: "We find areas where AI can help.", checks: ["Analyze business flow", "Identify AI goals", "Define success metrics"], position: "above" },
      { number: "02", title: "Data Preparation", desc: "We clean and prepare your data.", checks: ["Data gathering", "Data cleaning", "Feature engineering"], position: "below" },
      { number: "03", title: "Model Development", desc: "We train smart ML models.", checks: ["Algorithm selection", "Model training", "Performance testing"], position: "above" },
      { number: "04", title: "AI Integration", desc: "We connect AI to your platform.", checks: ["API integration", "Backend setup", "System testing"], position: "below" },
      { number: "05", title: "Deployment", desc: "We launch your AI solution.", checks: ["Cloud setup", "Official release", "User training"], position: "above" },
      { number: "06", title: "Improvement", desc: "We improve AI systems regularly.", checks: ["Monitor results", "Retrain models", "Enhance performance"], position: "below" }
    ]
  },

  industry: {
    subtitle: "AI ACROSS INDUSTRIES",
    title: "AI Solutions Across Industries",
    description: "As a premier AI development agency, we deliver tailored machine learning and artificial intelligence solutions that transform operations across diverse sectors.",
    industries: {
      0: {
        title: "Cab Booking",
        desc: "We build AI-powered cab booking applications with real-time route optimization, demand prediction, and automated pricing for better efficiency.",
        desc1: "Designing smart transit platforms with predictive analytics and seamless user experiences.",
        checks: ["Route Optimization AI", "Demand Forecasting", "Automated Pricing Models", "User Personalization"],
        cards: [
          { title: "Smart Routes", desc: "AI-driven route planning for faster and cheaper trips." },
          { title: "Demand Prediction", desc: "Predict high-demand areas to optimize driver distribution." },
          { title: "Dynamic Pricing", desc: "Automated pricing based on real-time traffic and demand." },
          { title: "Personalized Offers", desc: "Tailor user experiences with smart recommendations." }
        ]
      },
      1: {
        title: "E-Commerce",
        desc: "Our AI solutions for eCommerce platforms provide deep insights into user behavior, personalized product recommendations, and automated customer support.",
        desc1: "Enhancing online stores with AI-driven personalization and automated shopping experiences.",
        checks: ["Recommendation Engine", "Visual Search Tools", "Inventory Forecasting", "Churn Analysis"],
        cards: [
          { title: "Smart Recs", desc: "Personalized product suggestions that increase sales." },
          { title: "Visual Search", desc: "Let users find products using images and smart AI." },
          { title: "Inventory Prediction", desc: "Predict stock needs to avoid overstock or shortages." },
          { title: "Customer Analysis", desc: "Understand shopper behavior to improve marketing ROI." }
        ]
      },
      2: {
        title: "LMS (Learning Management System)",
        desc: "We deliver ML-powered LMS platforms that offer personalized learning paths, automated grading, and smart student performance tracking.",
        desc1: "Transforming education with adaptive learning experiences and automated administrative tasks.",
        checks: ["Adaptive Learning Paths", "Automated Grading", "Performance Prediction", "Smart Content Curation"],
        cards: [
          { title: "Adaptive Learning", desc: "Tailor educational content to each student's pace and style." },
          { title: "Automated Grading", desc: "AI-powered assessment systems for faster feedback." },
          { title: "Smart Dashboards", desc: "Track student progress with predictive performance insights." },
          { title: "Content Analysis", desc: "Automatically organize and recommend relevant learning materials." }
        ]
      },
    },
    tabs: [
      { label: "Cab Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "E-Commerce", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "LMS", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "AI Excellence & Innovation",
    list: [
      { title: "Top ML Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Innovation Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 27001 Certified", body: "Data Security", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Smart Tech Award", body: "AI Summit", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top AI Specialist", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for AI & ML Development Services",
    title: "Intelligent Technologies",
    description: "We use modern AI and ML frameworks to deliver reliable and automated business solutions.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV"] },
      { row: 2, direction: "right", speed: "28s", items: ["Scikit-Learn", "NLTK", "Hadoop", "Pandas", "AWS SageMaker", "Google Vertex AI"] },
    ]
  },

  testimonials: {
    subtitle: "CLIENT TRUST",
    title: "What Clients Say About Our AI & ML Development Agency",
    rating: "4.9/5",
    reviews: "480+",
    list: [
      { name: "Rahul Deshmukh", text: "Vihaan delivered our AI solution ahead of schedule. The machine learning models are incredibly accurate and have helped automate our complex workflows.", initial: "R", color: "#2563eb" },
      { name: "Sanya Gupta", text: "Their AI development approach helped us improve decision-making speed significantly. The system is fast, secure, and highly reliable.", initial: "S", color: "#10b981" },
      { name: "Aditya Hegde", text: "Our smart recommendation engine increased our e-commerce sales by 30%. Their AI expertise is truly world-class.", initial: "A", color: "#8b5cf6" },
      { name: "Nitin Bansal", text: "The demand forecasting model solved critical inventory challenges. Their development team ensured top-notch performance and accuracy.", initial: "N", color: "#f59e0b" },
      { name: "Ritika Rao", text: "The NLP systems and automated chatbots are extremely intuitive and have improved our customer engagement levels.", initial: "R", color: "#ec4899" },
      { name: "Karan Iyer", text: "Vihaan developed a tailored ML application that perfectly fits our ride-sharing business. Automation has saved us a lot of effort.", initial: "K", color: "#06b6d4" },
      { name: "Divya Reddy", text: "Our educational platform is now adaptive and smart. AI features helped us improve student retention and performance.", initial: "D", color: "#2563eb" },
      { name: "Aakash Mehta", text: "The AI system feels premium and performs flawlessly. Their machine learning expertise is truly impressive.", initial: "A", color: "#10b981" },
      { name: "Megha Sharma", text: "Our data analysis is now fully automated and much more accurate. Smart insights are now just a click away.", initial: "M", color: "#8b5cf6" },
      { name: "Praveen Kumar", text: "The healthcare AI model is secure, reliable, and provides highly accurate diagnostic insights. A great partner for AI development.", initial: "P", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Automate Your Business<br />with AI Solutions?
      </>
    ),
    description: "Let’s create intelligent systems with our AI & ML development services.",
    buttonText: "Start My AI Journey",
    brandText: "Vihaan AI Solutions"
  }
};

export const seoFullServiceData = {
  hero: {
    title: "SEO Optimization Company for Better Rankings and Website Growth",
    subtitle: "We help your website rank higher, attract the right audience, and grow your business with our search engine optimization services.",
    badgeText: "To increase organic traffic through enhanced visibility. 📈",
    buttonText: "Get Free SEO Consultation",
    features: [
      { icon: BusinessCenterIcon, text: "Complete SEO audit and fixes" },
      { icon: BusinessCenterIcon, text: "Keyword research and planning" },
      { icon: BusinessCenterIcon, text: "On-page and OFF-page SEO" },
      { icon: BusinessCenterIcon, text: "Content optimization" },
      { icon: BusinessCenterIcon, text: "SEO consulting services" },
      { icon: BusinessCenterIcon, text: "Performance tracking" },
    ]
  },

  overview: {
    subtitle: "SEO OPTIMIZATION COMPANY",
    title: "Complete Search Engine Optimization Services for Business Growth",
    description: "As a search engine optimization services company, we provide solutions that improve rankings and drive real traffic.",
    list: [
      { title: "On-Page SEO", icon: BusinessCenterIcon, count: "Content Optimization", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We optimize your website content for better rankings." },
      { title: "OFF-Page SEO", icon: BusinessCenterIcon, count: "Authority Boost", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We build authority through strategic backlinking." },
      { title: "Keyword Research", icon: BusinessCenterIcon, count: "Smart Targeting", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We find the right keywords for your business." },
      { title: "SEO Consulting", icon: BusinessCenterIcon, count: "Long-Term Growth", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We guide your strategy for long-term growth." },
    ]
  },

  detailed: {
    subtitle: "STRATEGY TO RESULTS",
    title: "End-to-End SEO Optimization Company Solutions",
    description: "As a search engine optimization services agency, we handle everything from planning to execution for better performance.",
    services: [
      {
        title: "SEO SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Website Analysis", desc: "We analyze your website to find improvements.", icon: <BusinessCenterIcon /> },
          { title: "Strategy Planning", desc: "We create a clear SEO roadmap.", icon: <BusinessCenterIcon /> },
          { title: "Implementation", desc: "We apply SEO techniques effectively.", icon: <BusinessCenterIcon /> },
          { title: "Performance Monitoring", desc: "We track and improve results continuously.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY SEO WITH US",
    title: "Why Choose Our SEO Optimization Company",
    description: "We focus on delivering real results using simple and effective search engine optimization services.",
    stats: [
      { value: "300+", label: "Projects Completed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Result-Focused Work", icon: BusinessCenterIcon, desc: "We focus on improving rankings and traffic.", color: "#2563eb", number: "01" },
      { title: "Data-Driven Strategy", icon: BusinessCenterIcon, desc: "We use insights to improve performance.", color: "#06b6d4", number: "02" },
      { title: "Ongoing Support", icon: BusinessCenterIcon, desc: "We support you throughout the process.", color: "#4f46e5", number: "03" },
      { title: "Long-Term Growth", icon: BusinessCenterIcon, desc: "We build sustainable SEO results.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "SEO WORKFLOW",
    title: "Our SEO Optimization Company Process for Better Rankings",
    description: "As a search engine optimization services company, we follow a step-by-step process to improve visibility and performance.",
    processSteps: [
      { number: "01", title: "Website Analysis", desc: "We review your website to find issues and opportunities.", checks: ["Check performance", "Identify SEO errors", "Analyze rankings"], position: "above" },
      { number: "02", title: "Keyword Research", desc: "To increase organic traffic through enhanced visibility.", checks: ["Target relevant keywords", "Study competitors", "Focus on user intent"], position: "below" },
      { number: "03", title: "On-Page Optimization", desc: "We improve your website content and structure.", checks: ["Optimize meta tags", "Improve content", "Fix internal links"], position: "above" },
      { number: "04", title: "OFF-Page SEO", desc: "We build authority and trust.", checks: ["Build backlinks", "Guest posting", "Brand mentions"], position: "below" },
      { number: "05", title: "Content Improvement", desc: "We enhance your content quality.", checks: ["Add SEO content", "Improve readability", "Update pages"], position: "above" },
      { number: "06", title: "Tracking & Reporting", desc: "We monitor performance regularly.", checks: ["Track rankings", "Analyze traffic", "Provide reports"], position: "below" }
    ]
  },

  industry: {
    subtitle: "SEO EXPERTISE",
    title: "SEO Solutions Across Different Business Models",
    description: "As a premier SEO services provider, we deliver tailored search engine optimization solutions that drive rankings and improve organic reach in diverse sectors.",
    industries: {
      0: {
        title: "Ecommerce Single Vendor",
        desc: "We help single vendor ecommerce websites improve rankings and attract more buyers with targeted SEO strategies and product optimization.",
        desc1: "Designing high-visibility stores with optimized product pages and reliable performance.",
        checks: ["Product Page SEO", "Category Page Optimization", "Keyword Targeting", "OFF-Page SEO Improvements", "Conversion Optimization", "Performance Tracking"],
        cards: [
          { title: "Product SEO", desc: "We optimize product pages to rank higher and attract more customers." },
          { title: "Category Page SEO", desc: "We improve category pages to increase visibility and navigation." },
          { title: "OFF-Page SEO Fixes", desc: "We build high-quality backlinks and brand presence for better rankings." },
          { title: "Conversion Optimization", desc: "We improve user experience to increase sales and reduce drop-offs." }
        ]
      },
      1: {
        title: "Ecommerce Multi Vendor",
        desc: "Our SEO strategies for multi-vendor platforms ensure high visibility for products and sellers, focusing on category growth and traffic increase.",
        desc1: "Building scalable platform visibility with optimized seller pages and reliable performance.",
        checks: ["Multi Vendor SEO Strategy", "Seller Page Optimization", "Category SEO Optimization", "Platform Structure Optimization", "Keyword Targeting", "Traffic Growth Strategy"],
        cards: [
          { title: "Category SEO", desc: "We optimize category pages to improve visibility and bring more traffic." },
          { title: "Seller Page SEO", desc: "We improve seller pages to help vendors gain visibility and attract buyers." },
          { title: "Platform SEO Structure", desc: "We organize website structure to improve indexing and performance." },
          { title: "Traffic Growth", desc: "We apply strategies to increase organic traffic and improve conversions." }
        ]
      },
      2: {
        title: "Food Booking",
        desc: "We help food booking platforms improve local search rankings, attracting more nearby customers and increasing order conversions.",
        desc1: "Enhancing local reach with optimized Google Business profiles and mobile-ready experiences.",
        checks: ["Local SEO Optimization", "Restaurant Page SEO", "Keyword Targeting", "Google Business Optimization", "Mobile SEO", "Conversion Optimization"],
        cards: [
          { title: "Local SEO", desc: "We improve local search rankings to attract nearby customers and increase orders." },
          { title: "Restaurant Page SEO", desc: "We optimize restaurant listings to improve visibility and user engagement." },
          { title: "Google Business", desc: "We enhance your profile to improve presence in local search and maps." },
          { title: "Mobile SEO", desc: "We optimize mobile experience to ensure smooth browsing and conversions." }
        ]
      },
    },
    tabs: [
      { label: "Ecommerce Single Vendor", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Ecommerce Multi Vendor", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Food Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "SEO Excellence & Rankings",
    list: [
      { title: "Top SEO Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Growth Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Search Excellence", body: "Search Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top SEM Specialist", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use as an SEO Services Provider",
    title: "Advanced SEO Tools",
    description: "We use advanced tools to deliver effective search engine optimization services agency results.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Google Search Console", "Google Analytics", "SEMrush", "Ahrefs"] },
      { row: 2, direction: "right", speed: "28s", items: ["Screaming Frog", "Ubersuggest", "Moz", "Surfer SEO", "Yoast SEO"] },
    ]
  },

  testimonials: {
    subtitle: "SEO RESULTS",
    title: "What Clients Say About Our SEO Optimization Company",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Rahul Mehta", text: "Vihaan delivered our SEO strategy ahead of schedule. Our website rankings improved significantly within a short time.", initial: "R", color: "#2563eb" },
      { name: "Ankit Verma", text: "Their SEO approach helped us increase organic traffic and generate quality leads. The results are consistent and measurable.", initial: "A", color: "#10b981" },
      { name: "Karan Sharma", text: "Our website now ranks on the first page for multiple keywords. The growth in traffic and conversions is outstanding.", initial: "K", color: "#8b5cf6" },
      { name: "Priya Kapoor", text: "Their SEO strategies improved our visibility and brand presence. The team ensured long-term growth and stability.", initial: "P", color: "#f59e0b" },
      { name: "Rohit Bansal", text: "The technical SEO improvements made our website faster and more user-friendly. Performance has improved drastically.", initial: "R", color: "#ec4899" },
      { name: "Neha Reddy", text: "Vihaan built a strong SEO foundation for our business. We are now seeing consistent growth in search rankings.", initial: "N", color: "#06b6d4" },
      { name: "Vikas Jain", text: "Our organic traffic has doubled within months. Their SEO expertise and execution are truly impressive.", initial: "V", color: "#2563eb" },
      { name: "Sneha Gupta", text: "The content and on-page SEO strategies helped us attract the right audience. Conversions have increased significantly.", initial: "S", color: "#10b981" },
      { name: "Aman Khanna", text: "The results speak for themselves. Our rankings, traffic, and leads have all improved with their SEO services.", initial: "A", color: "#8b5cf6" },
      { name: "Pooja Nair", text: "Their SEO services are reliable and result-driven. Our business visibility has improved across all search engines.", initial: "P", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Want to Improve Your Rankings with a<br />Trusted SEO Optimization Company?
      </>
    ),
    description: "Start your journey with our search engine optimization services and grow your website traffic.",
    buttonText: "Get Your Free SEO Audit",
    brandText: "Vihaan SEO Solutions"
  }
};

export const smmFullServiceData = {
  hero: {
    title: "Social Media Marketing Agency to Grow Your Brand and Engagement",
    subtitle: "We help you build your brand and connect with your audience through effective social media marketing services.",
    badgeText: "Build your presence and grow your audience. 📱",
    buttonText: "Start Social Media Growth",
    features: [
      { icon: BusinessCenterIcon, text: "Social media strategy and planning" },
      { icon: BusinessCenterIcon, text: "Content creation and posting" },
      { icon: BusinessCenterIcon, text: "Social media marketing services" },
      { icon: BusinessCenterIcon, text: "Paid ads management" },
      { icon: BusinessCenterIcon, text: "Audience engagement" },
      { icon: BusinessCenterIcon, text: "Performance tracking" },
    ]
  },

  overview: {
    subtitle: "SOCIAL MEDIA EXPERTS",
    title: "Social Media Strategy for the Modern Business",
    description: "As a social media marketing services company, we create and manage campaigns that improve engagement and visibility.",
    list: [
      { title: "Content Creation", icon: BusinessCenterIcon, count: "Engaging Posts", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We create simple and engaging posts for your audience." },
      { title: "Account Mgmt", icon: BusinessCenterIcon, count: "Regular Posts", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We manage your social media platforms regularly." },
      { title: "Paid Advertising", icon: BusinessCenterIcon, count: "Targeted Ads", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We run ads to reach more people and generate leads." },
      { title: "Strategy Planning", icon: BusinessCenterIcon, count: "Growth Path", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We build the right plan for your social growth." },
    ]
  },

  detailed: {
    subtitle: "END-TO-END SOCIAL",
    title: "End-to-End Social Media Marketing Agency Solutions",
    description: "Social media marketing agency website solutions to plan, execute, and enhance performance.",
    services: [
      {
        title: "SMM SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Audience Research", desc: "We understand your target audience.", icon: <BusinessCenterIcon /> },
          { title: "Content Planning", desc: "We create a content calendar.", icon: <BusinessCenterIcon /> },
          { title: "Execution", desc: "We manage posts and campaigns.", icon: <BusinessCenterIcon /> },
          { title: "Performance Tracking", desc: "We improve results continuously.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY SMM WITH US",
    title: "Why Choose Our Social Media Marketing Solutions",
    description: "We focus on building your brand and improving engagement with simple strategies.",
    stats: [
      { value: "300+", label: "Campaigns Managed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Creative Content", icon: BusinessCenterIcon, desc: "We create content that connects with users.", color: "#2563eb", number: "01" },
      { title: "Consistent Growth", icon: BusinessCenterIcon, desc: "We focus on steady improvement.", color: "#06b6d4", number: "02" },
      { title: "Audience Engagement", icon: BusinessCenterIcon, desc: "We build strong connections.", color: "#4f46e5", number: "03" },
      { title: "Result-Oriented Work", icon: BusinessCenterIcon, desc: "We aim for real business growth.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "SMM WORKFLOW",
    title: "Our Social Media Marketing Agency Process for Brand Growth",
    description: "As a social media marketing services company, we follow a structured process to improve engagement and reach.",
    processSteps: [
      { number: "01", title: "Business Understanding", desc: "We understand your brand and goals.", checks: ["Identify audience", "Define brand voice", "Set goals"], position: "above" },
      { number: "02", title: "Strategy Planning", desc: "We create a clear marketing plan.", checks: ["Choose platforms", "Plan content", "Schedule posts"], position: "below" },
      { number: "03", title: "Content Creation", desc: "We design engaging content.", checks: ["Create visuals", "Write captions", "Maintain consistency"], position: "above" },
      { number: "04", title: "Campaign Execution", desc: "We run social media marketing services.", checks: ["Publish content", "Run ads", "Manage accounts"], position: "below" },
      { number: "05", title: "Engagement", desc: "We connect with your audience.", checks: ["Reply to comments", "Manage messages", "Build trust"], position: "above" },
      { number: "06", title: "Performance Tracking", desc: "We improve results continuously.", checks: ["Track engagement", "Analyze data", "Optimize campaigns"], position: "below" }
    ]
  },

  industry: {
    subtitle: "SOCIAL MEDIA EXPERTISE",
    title: "Social Media Marketing Solutions for Different Platforms",
    description: "As a leading social media marketing agency, we deliver tailored SMM strategies that drive engagement and improve brand awareness across diverse sectors.",
    industries: {
      0: {
        title: "Resort Booking",
        desc: "We help resort and hotel businesses grow their visibility through social media marketing, focusing on increasing bookings and brand awareness.",
        desc1: "Designing visual storytelling experiences with targeted booking ads and reliable engagement.",
        checks: ["Social Media Campaigns", "Visual Content Creation", "Booking Promotion Ads", "Audience Targeting", "Engagement Management", "Performance Tracking"],
        cards: [
          { title: "Resort Campaigns", desc: "We create targeted campaigns to promote your resort and attract bookings." },
          { title: "Content Creation", desc: "We design visuals that showcase your property and services effectively." },
          { title: "Paid Ads", desc: "We run ads to reach potential customers and increase direct bookings." },
          { title: "Engagement", desc: "We manage comments and messages to build trust with your audience." }
        ]
      },
      1: {
        title: "Listing Site",
        desc: "Our marketing strategies for listing platforms focus on traffic growth and user engagement, increasing platform visibility through social media.",
        desc1: "Building platform awareness with targeted promotions and reliable marketing performance.",
        checks: ["Platform Promotions", "Traffic Generation", "Content Marketing", "Audience Targeting", "Platform Awareness", "Engagement Strategy"],
        cards: [
          { title: "Platform Promotion", desc: "We promote your listing platform to reach more users and increase traffic." },
          { title: "Content Marketing", desc: "We create engaging content to highlight listings and attract users." },
          { title: "Audience Targeting", desc: "We target the right users to improve engagement and conversions." },
          { title: "Traffic Strategy", desc: "We focus on increasing visits and user activity on your platform." }
        ]
      },
      2: {
        title: "Real Estate Portal",
        desc: "We help real estate businesses attract buyers and sellers through social media marketing, focusing on lead generation and brand visibility.",
        desc1: "Enhancing property reach with optimized ad campaigns and reliable lead generation.",
        checks: ["Real Estate Promotions", "Lead Generation", "Property Ads", "Audience Targeting", "Brand Awareness", "Engagement Management"],
        cards: [
          { title: "Property Ads", desc: "We run ads to promote properties and attract potential buyers." },
          { title: "Lead Generation", desc: "We create campaigns to generate quality leads for your business." },
          { title: "Content Creation", desc: "We design posts to showcase properties and services effectively." },
          { title: "Audience Engagement", desc: "We interact with users to build trust and improve conversions." }
        ]
      },
    },
    tabs: [
      { label: "Resort Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Listing Site", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Real Estate Portal", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "SMM Excellence & Engagement",
    list: [
      { title: "Top SMM Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Engagement Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Social Excellence", body: "Media Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Social Specialist", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Utilize for Social Media Marketing Services",
    title: "Modern SMM Tools",
    description: "We use modern tools to manage campaigns and improve social media marketing solutions.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Meta Business Suite", "Hootsuite", "Buffer", "Sprout Social"] },
      { row: 2, direction: "right", speed: "28s", items: ["Canva", "Later", "Loomly", "Brandwatch", "SocialPilot"] },
    ]
  },

  testimonials: {
    subtitle: "SOCIAL RESULTS",
    title: "What Clients Say About Our Social Media Marketing Agency",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Rohan Malhotra", text: "Vihaan delivered our SMM strategy ahead of schedule. Our brand engagement and reach improved significantly.", initial: "R", color: "#2563eb" },
      { name: "Amit Sharma", text: "Their social media marketing approach helped us grow our audience and generate quality leads. The results are consistent and impactful.", initial: "A", color: "#10b981" },
      { name: "Kunal Verma", text: "Our social media pages now see high engagement and steady follower growth. The campaign performance is outstanding.", initial: "K", color: "#8b5cf6" },
      { name: "Neha Kapoor", text: "Their SMM strategies improved our brand visibility across platforms. The team ensured creative and result-driven campaigns.", initial: "N", color: "#f59e0b" },
      { name: "Ritika Mehta", text: "The content strategy and ad campaigns are highly effective. Our engagement and conversions have improved drastically.", initial: "R", color: "#ec4899" },
      { name: "Saurabh Jain", text: "Vihaan built a powerful social media presence for our brand. We are now reaching the right audience consistently.", initial: "S", color: "#06b6d4" },
      { name: "Pooja Reddy", text: "Our campaigns are now more targeted and impactful. Social media performance has improved across all channels.", initial: "P", color: "#2563eb" },
      { name: "Nikhil Gupta", text: "The system performs flawlessly with consistent engagement growth. Their SMM expertise is truly impressive.", initial: "N", color: "#10b981" },
      { name: "Sneha Iyer", text: "Our brand is now more visible and engaging. Social media strategies improved our overall marketing performance.", initial: "S", color: "#8b5cf6" },
      { name: "Arjun Bansal", text: "Their SMM services are reliable and creative. Our reach, engagement, and conversions have all improved significantly.", initial: "A", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Are You Ready to Grow With A<br />Social Media Marketing Agency?
      </>
    ),
    description: "Promote your brand and take advantage of our social media marketing services to reach a broader range all over the internet.",
    buttonText: "Boost Your Social Presence",
    brandText: "Vihaan Social Media Solutions"
  }
};

export const semFullServiceData = {
  hero: {
    title: "Search Engine Marketing Services for Fast Traffic and Quality Leads",
    subtitle: "We help you get instant visibility and generate leads through targeted search engine marketing services and paid campaigns.",
    badgeText: "Get quick results and increase your conversions. 💰",
    buttonText: "Start Running Ads",
    features: [
      { icon: BusinessCenterIcon, text: "Google Ads campaign setup" },
      { icon: BusinessCenterIcon, text: "Paid search marketing services" },
      { icon: BusinessCenterIcon, text: "Keyword targeting" },
      { icon: BusinessCenterIcon, text: "Ad copy creation" },
      { icon: BusinessCenterIcon, text: "Budget optimization" },
      { icon: BusinessCenterIcon, text: "Conversion tracking" },
    ]
  },

  overview: {
    subtitle: "SEM SERVICES COMPANY",
    title: "Complete Search Engine Marketing Services for Business Growth",
    description: "As a sem services company, we create and manage campaigns that drive traffic and improve conversions.",
    list: [
      { title: "Google Ads Setup", icon: BusinessCenterIcon, count: "Target Audience", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We would form a campaign to meet the target audience." },
      { title: "Ad Management", icon: BusinessCenterIcon, count: "Regular Optimization", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We manage and optimize ads regularly." },
      { title: "Keyword Targeting", icon: BusinessCenterIcon, count: "Better Results", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We choose keywords for better results." },
      { title: "Performance Tracking", icon: BusinessCenterIcon, count: "Improved Outcome", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We track and improve campaign performance." },
    ]
  },

  detailed: {
    subtitle: "END-TO-END SEM",
    title: "End-to-End Search Engine Marketing Agency Solutions",
    description: "Our search engine marketing agency handles planning, execution, and optimization to deliver better results.",
    services: [
      {
        title: "SEM SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Market Research", desc: "We analyze your audience and competitors.", icon: <BusinessCenterIcon /> },
          { title: "Campaign Planning", desc: "We create a structured ad strategy.", icon: <BusinessCenterIcon /> },
          { title: "Execution", desc: "We launch and manage campaigns.", icon: <BusinessCenterIcon /> },
          { title: "Optimization", desc: "We improve performance continuously.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY SEM WITH US",
    title: "Why Choose Our Search Engine Marketing Services",
    description: "We focus on delivering better ROI using simple and effective search engine marketing solutions.",
    stats: [
      { value: "300+", label: "Campaigns Managed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Targeted Ads", icon: BusinessCenterIcon, desc: "We reach the right audience.", color: "#2563eb", number: "01" },
      { title: "Budget Control", icon: BusinessCenterIcon, desc: "We optimize spending.", color: "#06b6d4", number: "02" },
      { title: "Quick Results", icon: BusinessCenterIcon, desc: "We generate faster traffic.", color: "#4f46e5", number: "03" },
      { title: "Performance Focused", icon: BusinessCenterIcon, desc: "We improve campaigns continuously.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "SEM WORKFLOW",
    title: "Our Search Engine Marketing Services Process",
    description: "As a sem services company, we follow a clear process to manage and improve paid search marketing services.",
    processSteps: [
      { number: "01", title: "Goal Setting", desc: "We define campaign goals clearly.", checks: ["Identify audience", "Set budget", "Define objectives"], position: "above" },
      { number: "02", title: "Keyword Research", desc: "We select high-performing keywords.", checks: ["Analyze competitors", "Focus on conversions", "Target intent"], position: "below" },
      { number: "03", title: "Campaign Setup", desc: "We create structured campaigns.", checks: ["Set ad groups", "Configure targeting", "Launch campaigns"], position: "above" },
      { number: "04", title: "Ad Creation", desc: "We design effective ads.", checks: ["Write ad copy", "Add extensions", "Improve click rate"], position: "below" },
      { number: "05", title: "Monitoring", desc: "We track performance daily.", checks: ["Analyze clicks", "Track conversions", "Adjust bids"], position: "above" },
      { number: "06", title: "Optimization", desc: "We improve campaign results.", checks: ["Increase ROI", "Reduce cost", "Improve conversions"], position: "below" }
    ]
  },

  industry: {
    subtitle: "SEM EXPERTISE",
    title: "Search Engine Marketing Solutions for Business Platforms",
    description: "As a premier SEM services company, we deliver tailored paid search marketing solutions that drive traffic and improve conversions in diverse sectors.",
    industries: {
      0: {
        title: "Real Estate CRM",
        desc: "We help real estate CRM platforms generate leads through targeted search engine marketing services, focusing on attracting buyers and sellers.",
        desc1: "Designing high-conversion funnels with optimized Google Ads and reliable performance tracking.",
        checks: ["Google Ads Campaigns", "Lead Generation Ads", "CRM Funnel Optimization", "Keyword Targeting", "Landing Page Optimization", "Conversion Tracking"],
        cards: [
          { title: "Lead Generation", desc: "We create paid campaigns to attract high-quality leads for real estate." },
          { title: "Google Ads", desc: "We manage ads to improve visibility and bring targeted traffic to your CRM." },
          { title: "Landing Page", desc: "We optimize landing pages to improve conversions and reduce bounce rates." },
          { title: "Tracking", desc: "We track performance to improve campaign results and ROI." }
        ]
      },
      1: {
        title: "Education CRM",
        desc: "Our SEM strategies for education platforms focus on increasing enrollments and improving visibility through targeted course promotion ads.",
        desc1: "Building student acquisition funnels with optimized course ads and reliable performance.",
        checks: ["Student Lead Generation", "Google Ads for Courses", "Keyword Targeting", "Campaign Optimization", "Landing Page Ads", "Performance Tracking"],
        cards: [
          { title: "Student Leads", desc: "We create ads to attract students for courses and programs." },
          { title: "Course Promotion", desc: "We promote courses using targeted search engine marketing services." },
          { title: "Page Optimization", desc: "We improve pages to increase student sign-ups and conversions." },
          { title: "Campaign Tracking", desc: "We monitor campaigns and improve results continuously." }
        ]
      },
      2: {
        title: "Matrimony",
        desc: "We help matrimony platforms increase user registrations through paid search campaigns, focusing on visibility, engagement, and user growth.",
        desc1: "Enhancing user acquisition with optimized registration flows and reliable paid search marketing.",
        checks: ["User Acquisition Campaigns", "Paid Search Services", "Keyword Targeting", "Registration Optimization", "Audience Targeting", "Performance Tracking"],
        cards: [
          { title: "User Acquisition", desc: "We run campaigns to increase registrations and user sign-ups." },
          { title: "Paid Search Ads", desc: "We use paid search marketing services to improve platform visibility." },
          { title: "Sign-up Optimization", desc: "We optimize sign-up flow to increase conversions." },
          { title: "Performance Opt", desc: "We track and improve campaigns for better results." }
        ]
      },
    },
    tabs: [
      { label: "Real Estate CRM", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Education CRM", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Matrimony", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "SEM Excellence & Leads",
    list: [
      { title: "Top SEM Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Lead Gen Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Ad Excellence", body: "Ad Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top PPC Specialist", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Search Engine Marketing Services",
    title: "Advanced SEM Tools",
    description: "We use powerful tools to manage and improve search engine marketing solutions effectively.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Google Ads Manager", "Google Keyword Planner", "Google Analytics"] },
      { row: 2, direction: "right", speed: "28s", items: ["SEMrush", "SpyFu", "Optmyzr", "WordStream", "AdEspresso"] },
    ]
  },

  testimonials: {
    subtitle: "SEM RESULTS",
    title: "What Clients Say About Our SEM Services Company",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Aditya Mehra", text: "Vihaan delivered our SEM campaigns ahead of schedule. Our ad performance and ROI improved significantly.", initial: "A", color: "#2563eb" },
      { name: "Rohit Kapoor", text: "Their SEM strategy helped us generate high-quality leads and maximize conversions. The campaigns are highly effective.", initial: "R", color: "#10b981" },
      { name: "Vikas Sharma", text: "Our paid campaigns now deliver consistent results. Traffic, leads, and conversions have increased remarkably.", initial: "V", color: "#8b5cf6" },
      { name: "Neha Verma", text: "Their SEM approach improved our online visibility and ad reach. The team ensured optimized and result-driven campaigns.", initial: "N", color: "#f59e0b" },
      { name: "Kunal Bansal", text: "The campaign management and optimization are excellent. Our cost per lead has reduced significantly.", initial: "K", color: "#ec4899" },
      { name: "Pooja Mehta", text: "Vihaan built a powerful SEM strategy tailored to our goals. We are now seeing strong and measurable growth.", initial: "P", color: "#06b6d4" },
      { name: "Aman Gupta", text: "Our ads perform flawlessly across platforms. Their SEM expertise is truly impressive.", initial: "A", color: "#2563eb" },
      { name: "Sneha Kapoor", text: "The targeting and ad creatives are highly effective. Engagement and conversions have improved drastically.", initial: "S", color: "#10b981" },
      { name: "Nitin Reddy", text: "Our campaigns are now scalable and profitable. SEM implementation improved overall performance.", initial: "N", color: "#8b5cf6" },
      { name: "Kavya Iyer", text: "Their SEM services are reliable and data-driven. Our business visibility and ROI have improved significantly.", initial: "K", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Want More Leads with Search Engine<br />Marketing Services?
      </>
    ),
    description: "Let’s run targeted campaigns and grow your business with our paid search marketing services.",
    buttonText: "Launch Your Ad Campaign",
    brandText: "Vihaan SEM Solutions"
  }
};

export const videoMarketingFullServiceData = {
  hero: {
    title: "Video Marketing Agency to Create Engaging Content and Promote Your Brand",
    subtitle: "We help you connect with your audience and grow your business using creative video marketing services.",
    badgeText: "Attract attention and grow your brand with videos. 🎬",
    buttonText: "Start Video Marketing",
    features: [
      { icon: BusinessCenterIcon, text: "Video marketing services" },
      { icon: BusinessCenterIcon, text: "Product and promo videos" },
      { icon: BusinessCenterIcon, text: "Social media video content" },
      { icon: BusinessCenterIcon, text: "Script writing and editing" },
      { icon: BusinessCenterIcon, text: "YouTube marketing" },
      { icon: BusinessCenterIcon, text: "Brand storytelling" },
    ]
  },

  overview: {
    subtitle: "VIDEO CONTENT EXPERTS",
    title: "Complete Video Marketing Services for Business Growth",
    description: "As a video marketing company, we create videos that improve engagement and promote your brand effectively.",
    list: [
      { title: "Promotional Videos", icon: BusinessCenterIcon, count: "Business Growth", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We produce business videos." },
      { title: "Product Videos", icon: BusinessCenterIcon, count: "Feature Highlight", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We highlight your products clearly." },
      { title: "Social Media Videos", icon: BusinessCenterIcon, count: "High Engagement", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create short and engaging videos." },
      { title: "Video Editing", icon: BusinessCenterIcon, count: "Premium Quality", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We improve video quality and flow." },
    ]
  },

  detailed: {
    subtitle: "IDEA TO DELIVERY",
    title: "End-to-End Video Marketing Agency Solutions",
    description: "Our video content marketing services cover planning, creation, and delivery to achieve better results.",
    services: [
      {
        title: "VIDEO SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Idea Planning", desc: "We plan video concepts based on your goals.", icon: <BusinessCenterIcon /> },
          { title: "Script Creation", desc: "We create simple and clear scripts.", icon: <BusinessCenterIcon /> },
          { title: "Production", desc: "We develop video content.", icon: <BusinessCenterIcon /> },
          { title: "Delivery & Publishing", desc: "We deliver and share videos.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY VIDEO WITH US",
    title: "Why Choose Our Video Marketing Services",
    description: "We focus on creating simple and engaging videos that connect with your audience and support growth.",
    stats: [
      { value: "200+", label: "Videos Created" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Creative Ideas", icon: BusinessCenterIcon, desc: "We create attention-grabbing videos.", color: "#2563eb", number: "01" },
      { title: "Simple Messaging", icon: BusinessCenterIcon, desc: "We keep content clear and easy.", color: "#06b6d4", number: "02" },
      { title: "Engaging Content", icon: BusinessCenterIcon, desc: "We focus on user engagement.", color: "#4f46e5", number: "03" },
      { title: "Result-Oriented", icon: BusinessCenterIcon, desc: "We support business goals with video.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "VIDEO WORKFLOW",
    title: "Our Video Marketing Agency Process",
    description: "As a video marketing company, we follow a structured process to deliver high-quality video marketing services.",
    processSteps: [
      { number: "01", title: "Idea Planning", desc: "We plan video concepts clearly.", checks: ["Understand audience", "Define goals", "Choose format"], position: "above" },
      { number: "02", title: "Script Writing", desc: "We create simple scripts.", checks: ["Clear messaging", "Easy language", "Brand tone"], position: "below" },
      { number: "03", title: "Production", desc: "We create video content.", checks: ["Record or design", "Use visuals", "Maintain quality"], position: "above" },
      { number: "04", title: "Editing", desc: "We improve video quality.", checks: ["Add effects", "Improve sound", "Smooth transitions"], position: "below" },
      { number: "05", title: "Publishing", desc: "We share videos on platforms.", checks: ["Upload content", "Optimize titles", "Add descriptions"], position: "above" },
      { number: "06", title: "Tracking", desc: "We improve video marketing services.", checks: ["Track views", "Analyze engagement", "Optimize content"], position: "below" }
    ]
  },

  industry: {
    subtitle: "VIDEO EXPERTISE",
    title: "Video Marketing Solutions for Business Platforms",
    description: "As a premier video marketing agency, we deliver tailored video content solutions that transform how you connect with your audience across diverse sectors.",
    industries: {
      0: {
        title: "HRM Software",
        desc: "We create video marketing strategies to showcase HRM software features and benefits clearly, helping businesses understand your product.",
        desc1: "Designing smart product demos with clear feature highlights and reliable engagement.",
        checks: ["Product Demo Videos", "Feature Explanation", "Social Media Video", "Promotional Videos", "Brand Awareness", "Engagement Campaigns"],
        cards: [
          { title: "Product Demos", desc: "We create videos to explain your HRM software features clearly." },
          { title: "Feature Highlights", desc: "We showcase key features to help users understand your product." },
          { title: "Promotional Content", desc: "We create marketing videos to promote your software and attract users." },
          { title: "Engagement Videos", desc: "We design short videos for platforms to increase reach and engagement." }
        ]
      },
      1: {
        title: "Hospital Management",
        desc: "Our video content for hospital management systems helps promote services and healthcare solutions, building trust and patient engagement.",
        desc1: "Building healthcare trust with visual service explanations and reliable awareness content.",
        checks: ["Healthcare Promo", "Service Explanation", "Patient Awareness", "Social Media Videos", "Brand Trust Videos", "Engagement Campaigns"],
        cards: [
          { title: "Healthcare Promo", desc: "We create videos to promote hospital services and facilities effectively." },
          { title: "Service Explanation", desc: "We explain healthcare services clearly through engaging video content." },
          { title: "Patient Awareness", desc: "We create videos to educate patients and build trust with your brand." },
          { title: "Social Campaigns", desc: "We design videos to increase reach and engagement on social platforms." }
        ]
      },
      2: {
        title: "Cab Booking App",
        desc: "We create video marketing campaigns to promote cab booking apps, focusing on app usage, features, and user benefits to attract new users.",
        desc1: "Enhancing app growth with optimized feature demos and reliable brand awareness.",
        checks: ["App Promo Videos", "Feature Demonstration", "Social Media Ads", "User Experience Videos", "Brand Awareness", "Engagement Campaigns"],
        cards: [
          { title: "App Promotion", desc: "We create videos to promote your cab booking app and attract new users." },
          { title: "Feature Demos", desc: "We explain app features clearly to improve user understanding." },
          { title: "Short Ad Videos", desc: "We create short ad videos to increase installs and engagement." },
          { title: "UX Showcases", desc: "We showcase app usage to build trust and improve conversions." }
        ]
      },
    },
    tabs: [
      { label: "HRM Software", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hospital Management", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Cab Booking App", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Video Excellence & Creativity",
    list: [
      { title: "Top Video Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Creative Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Video Innovation", body: "Media Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Content Specialist", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Video Marketing Services",
    title: "Professional Editing Tools",
    description: "We use advanced tools to create and manage video content marketing services efficiently.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects"] },
      { row: 2, direction: "right", speed: "28s", items: ["DaVinci Resolve", "Canva Video Editor", "CapCut", "Loom", "Vimeo"] },
    ]
  },

  testimonials: {
    subtitle: "VIDEO RESULTS",
    title: "What Clients Say About Our Video Marketing Agency",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Arun Kumar", text: "Vihaan delivered our video marketing campaigns ahead of schedule. Our engagement and brand visibility improved significantly.", initial: "A", color: "#2563eb" },
      { name: "Suresh Nair", text: "Their video marketing strategy helped us connect with the right audience and boost conversions. The results are impressive.", initial: "S", color: "#10b981" },
      { name: "Karthik Reddy", text: "Our video campaigns now generate high engagement and reach. The performance and creativity are outstanding.", initial: "K", color: "#8b5cf6" },
      { name: "Praveen Iyer", text: "Their video content strategy improved our brand storytelling. The campaigns are creative, impactful, and result-driven.", initial: "P", color: "#f59e0b" },
      { name: "Lakshmi Narayanan", text: "The video ads and content are highly engaging. Our audience retention and conversions have improved drastically.", initial: "L", color: "#ec4899" },
      { name: "Vignesh Kumar", text: "Vihaan built a strong video marketing presence for our brand. We are now reaching a wider and more relevant audience.", initial: "V", color: "#06b6d4" },
      { name: "Divya Nair", text: "Our video campaigns are now more targeted and effective. Engagement across platforms has increased significantly.", initial: "D", color: "#2563eb" },
      { name: "Raghavendra Rao", text: "The campaigns perform flawlessly with consistent growth. Their video marketing expertise is truly impressive.", initial: "R", color: "#10b981" },
      { name: "Meena Krishnan", text: "Our brand is now more engaging and visually appealing. Video marketing improved our overall performance.", initial: "M", color: "#8b5cf6" },
      { name: "Sathish Babu", text: "Their video marketing services are creative and reliable. Our reach, engagement, and conversions have all improved.", initial: "S", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Promote Your Brand with a<br />Video Marketing Agency?
      </>
    ),
    description: "Let’s create engaging videos using our video marketing services to grow your business.",
    buttonText: "Create Your First Video Campaign",
    brandText: "Vihaan Video Solutions"
  }
};

export const emailMarketingFullServiceData = {
  hero: {
    title: "Email Marketing Services to Engage Customers and Improve Conversions",
    subtitle: "We help you connect with your audience directly using email marketing services and build strong relationships that drive results.",
    badgeText: "Stay connected with your customers and grow your business. 📧",
    buttonText: "Start Email Marketing",
    features: [
      { icon: BusinessCenterIcon, text: "Email campaign setup" },
      { icon: BusinessCenterIcon, text: "Business email marketing services" },
      { icon: BusinessCenterIcon, text: "Email list management" },
      { icon: BusinessCenterIcon, text: "Email design and content" },
      { icon: BusinessCenterIcon, text: "Automation and scheduling" },
      { icon: BusinessCenterIcon, text: "Performance tracking" },
    ]
  },

  overview: {
    subtitle: "EMAIL MARKETING EXPERTS",
    title: "Complete Email Marketing Services for Business Growth",
    description: "As an email marketing service provider, we create campaigns that improve engagement and deliver better results.",
    list: [
      { title: "Campaign Setup", icon: BusinessCenterIcon, count: "Direct Reach", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We create and launch email campaigns." },
      { title: "Email Design", icon: BusinessCenterIcon, count: "Engaging Visuals", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We design simple and engaging emails." },
      { title: "Automation", icon: BusinessCenterIcon, count: "Smart Workflows", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We create automated email workflows." },
      { title: "Performance Tracking", icon: BusinessCenterIcon, count: "Better Results", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We monitor and improve campaigns." },
    ]
  },

  detailed: {
    subtitle: "BETTER ENGAGEMENT",
    title: "End-to-End Email Marketing Solutions",
    description: "Our email marketing solutions cover planning, execution, and optimization to improve communication and conversions.",
    services: [
      {
        title: "EMAIL SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Audience Planning", desc: "We organize your email audience.", icon: <BusinessCenterIcon /> },
          { title: "Content Creation", desc: "We create engaging email content.", icon: <BusinessCenterIcon /> },
          { title: "Campaign Execution", desc: "We send and manage emails.", icon: <BusinessCenterIcon /> },
          { title: "Optimization", desc: "We improve campaign performance.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY EMAIL WITH US",
    title: "Why Choose Our Email Marketing Services",
    description: "We focus on delivering simple and effective business email marketing services that improve engagement and conversions.",
    stats: [
      { value: "250+", label: "Campaigns Managed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Targeted Emails", icon: BusinessCenterIcon, desc: "We send emails to the right audience.", color: "#2563eb", number: "01" },
      { title: "Better Engagement", icon: BusinessCenterIcon, desc: "We improve open and click rates.", color: "#06b6d4", number: "02" },
      { title: "Automation Support", icon: BusinessCenterIcon, desc: "We save time with automated emails.", color: "#4f46e5", number: "03" },
      { title: "Result-Oriented", icon: BusinessCenterIcon, desc: "We focus on conversions.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "EMAIL WORKFLOW",
    title: "Our Email Marketing Services Process",
    description: "As an email marketing service provider, we follow a structured process to deliver effective email marketing solutions.",
    processSteps: [
      { number: "01", title: "Audience Segmentation", desc: "We divide your audience for better targeting.", checks: ["Group users", "Identify interests", "Create lists"], position: "above" },
      { number: "02", title: "Campaign Planning", desc: "We plan business email marketing services.", checks: ["Define goals", "Select email types", "Schedule campaigns"], position: "below" },
      { number: "03", title: "Content Creation", desc: "We create email content.", checks: ["Write subject lines", "Create copy", "Design layout"], position: "above" },
      { number: "04", title: "Automation Setup", desc: "We automate email workflows.", checks: ["Welcome emails", "Follow-ups", "Trigger emails"], position: "below" },
      { number: "05", title: "Campaign Execution", desc: "We manage campaigns.", checks: ["Send emails", "Monitor delivery", "Ensure performance"], position: "above" },
      { number: "06", title: "Optimization", desc: "We improve email marketing solutions.", checks: ["Track opens", "Analyze clicks", "Improve results"], position: "below" }
    ]
  },

  industry: {
    subtitle: "EMAIL EXPERTISE",
    title: "Email Marketing Solutions for Business Platforms",
    description: "As a premier email marketing service provider, we deliver tailored business email marketing solutions that drive engagement and improve conversions across diverse sectors.",
    industries: {
      0: {
        title: "LMS Platforms",
        desc: "We help online learning platforms connect with students through targeted email marketing campaigns, focusing on course promotion and student retention.",
        desc1: "Designing educational journeys with optimized course emails and reliable engagement.",
        checks: ["Course Promotion", "Student Engagement", "Email Automation", "Newsletter Campaigns", "Lead Nurturing", "Performance Tracking"],
        cards: [
          { title: "Course Promotion", desc: "We create email campaigns to promote courses and increase enrollments." },
          { title: "Student Engagement", desc: "We design emails to keep students active and engaged with your platform." },
          { title: "Email Automation", desc: "We set up automated emails for onboarding, reminders, and follow-ups." },
          { title: "Newsletters", desc: "We create newsletters to share updates and valuable content regularly." }
        ]
      },
      1: {
        title: "Hotel Booking",
        desc: "Our email strategies for hotel booking platforms focus on increasing reservations through effective offers, reminders, and customer engagement.",
        desc1: "Building hospitality reach with optimized booking emails and reliable seasonal campaigns.",
        checks: ["Booking Promotion", "Offer & Discount", "Customer Retargeting", "Email Automation", "Seasonal Campaigns", "Performance Tracking"],
        cards: [
          { title: "Booking Promotion", desc: "We create campaigns to promote room bookings and special offers." },
          { title: "Offer & Discount", desc: "We design emails to attract customers with deals and promotions." },
          { title: "Customer Retargeting", desc: "We send follow-up emails to bring back potential customers." },
          { title: "Automation", desc: "We automate emails for confirmations, reminders, and updates." }
        ]
      },
      2: {
        title: "AI Chatbot",
        desc: "We help AI chatbot platforms engage users and promote services through email marketing, focusing on onboarding, engagement, and feature awareness.",
        desc1: "Enhancing user growth with optimized onboarding emails and reliable automation workflows.",
        checks: ["User Onboarding", "Feature Updates", "Engagement Emails", "Automation Workflows", "Lead Nurturing", "Performance Tracking"],
        cards: [
          { title: "User Onboarding", desc: "We create emails to guide users through chatbot setup and usage." },
          { title: "Feature Updates", desc: "We inform users about new features and improvements." },
          { title: "Engagement", desc: "We send emails to keep users active and engaged." },
          { title: "Workflows", desc: "We set up automated emails for better user communication." }
        ]
      },
    },
    tabs: [
      { label: "LMS Platforms", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Hotel Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "AI Chatbot", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Email Excellence & Delivery",
    list: [
      { title: "Top Email Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Inbound Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Inbox Excellence", body: "Email Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Automation Spec", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Email Marketing Services",
    title: "Modern Email Tools",
    description: "We use reliable tools to manage and deliver effective email marketing services.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Mailchimp", "Sendinblue", "HubSpot Email Marketing"] },
      { row: 2, direction: "right", speed: "28s", items: ["Zoho Campaigns", "ActiveCampaign", "ConvertKit", "MailerLite", "Klaviyo"] },
    ]
  },

  testimonials: {
    subtitle: "EMAIL RESULTS",
    title: "What Clients Say About Our Email Marketing service provider",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Aravind Subramanian", text: "Vihaan delivered our email marketing campaigns ahead of schedule. Our open rates and engagement improved significantly.", initial: "A", color: "#2563eb" },
      { name: "Srinivas Reddy", text: "Their email marketing strategy helped us reach the right audience and increase conversions. The results are impressive.", initial: "S", color: "#10b981" },
      { name: "Karthik Narayanan", text: "Our email campaigns now generate consistent engagement and traffic. The performance and targeting are outstanding.", initial: "K", color: "#8b5cf6" },
      { name: "Priya Nair", text: "Their email content strategy improved our communication and customer retention. The campaigns are effective and result-driven.", initial: "P", color: "#f59e0b" },
      { name: "Vijay Kumar", text: "The automation workflows are highly efficient. Our email campaigns are now faster and more impactful.", initial: "V", color: "#ec4899" },
      { name: "Anitha Krishnan", text: "Vihaan built a strong email marketing system for our business. We are now reaching customers more effectively.", initial: "A", color: "#06b6d4" },
      { name: "Ramesh Iyer", text: "Our email campaigns are now more targeted and successful. Engagement and conversions have increased significantly.", initial: "R", color: "#2563eb" },
      { name: "Divya Ramesh", text: "The campaigns perform flawlessly with consistent growth. Their email marketing expertise is truly impressive.", initial: "D", color: "#10b981" },
      { name: "Suresh Babu", text: "Our communication is now more streamlined and effective. Email marketing improved our overall performance.", initial: "S", color: "#8b5cf6" },
      { name: "Lakshmi Devi", text: "Their email marketing services are reliable and efficient. Our reach, engagement, and conversions have all improved.", initial: "L", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Want Better Results with Email<br />Marketing Services?
      </>
    ),
    description: "Let’s create email marketing solutions that connect with your audience and increase conversions.",
    buttonText: "Start Your Email Campaign",
    brandText: "Vihaan Email Solutions"
  }
};

export const contentMarketingFullServiceData = {
  hero: {
    title: "Content Marketing Services to Build Trust and Grow Your Audience",
    subtitle: "With simple and effective content marketing services, we will make it easy to attract and engage your audience.",
    badgeText: "Share valuable content and grow your audience. ✍️",
    buttonText: "Start Content Marketing",
    features: [
      { icon: BusinessCenterIcon, text: "Content marketing strategy" },
      { icon: BusinessCenterIcon, text: "Blog and article writing" },
      { icon: BusinessCenterIcon, text: "Website content creation" },
      { icon: BusinessCenterIcon, text: "Content marketing agency services" },
      { icon: BusinessCenterIcon, text: "SEO content optimization" },
      { icon: BusinessCenterIcon, text: "Performance tracking" },
    ]
  },

  overview: {
    subtitle: "CONTENT EXPERTS",
    title: "Complete Content Marketing Services for Business Growth",
    description: "As a content marketing company, we create and manage content that improves visibility and engagement.",
    list: [
      { title: "Blog Writing", icon: BusinessCenterIcon, count: "Informative Content", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We create informative and useful blog content." },
      { title: "Website Content", icon: BusinessCenterIcon, count: "Clear Messaging", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We write clear content for your website." },
      { title: "SEO Content", icon: BusinessCenterIcon, count: "Higher Rankings", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We optimize content for better rankings." },
      { title: "Content Strategy", icon: BusinessCenterIcon, count: "Growth Planning", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We plan content based on your goals." },
    ]
  },

  detailed: {
    subtitle: "PLANNING TO GROWTH",
    title: "End-to-End Content Marketing Agency Services",
    description: "Our content marketing service provider approach covers research, creation, and improvement for better results.",
    services: [
      {
        title: "CONTENT SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Research", desc: "We understand your audience and content needs.", icon: <BusinessCenterIcon /> },
          { title: "Planning", desc: "We create a clear content strategy.", icon: <BusinessCenterIcon /> },
          { title: "Content Creation", desc: "We develop useful content.", icon: <BusinessCenterIcon /> },
          { title: "Optimization", desc: "We improve performance over time.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY CONTENT WITH US",
    title: "Why Choose Our Content Marketing Services",
    description: "We focus on creating simple and valuable content that builds trust and drives engagement.",
    stats: [
      { value: "300+", label: "Content Projects" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Quality Content", icon: BusinessCenterIcon, desc: "We create clear and useful content.", color: "#2563eb", number: "01" },
      { title: "SEO Focused", icon: BusinessCenterIcon, desc: "We improve visibility with optimized content.", color: "#06b6d4", number: "02" },
      { title: "Consistent Delivery", icon: BusinessCenterIcon, desc: "We provide regular content updates.", color: "#4f46e5", number: "03" },
      { title: "Audience Engagement", icon: BusinessCenterIcon, desc: "We connect with your audience.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "CONTENT WORKFLOW",
    title: "Our Content Marketing Services Process",
    description: "As a content marketing company, we follow a structured process to deliver effective content marketing agency services.",
    processSteps: [
      { number: "01", title: "Research & Analysis", desc: "We understand your audience and content needs.", checks: ["Study audience behavior", "Analyze competitors", "Identify content gaps"], position: "above" },
      { number: "02", title: "Content Planning", desc: "We plan your content marketing services.", checks: ["Define topics", "Create calendar", "Align with goals"], position: "below" },
      { number: "03", title: "Content Creation", desc: "We create useful content.", checks: ["Write blogs", "Develop pages", "Maintain quality"], position: "above" },
      { number: "04", title: "SEO Optimization", desc: "We optimize content for search engines.", checks: ["Use keywords", "Improve structure", "Enhance readability"], position: "below" },
      { number: "05", title: "Publishing", desc: "We publish content consistently.", checks: ["Upload content", "Share on platforms", "Maintain schedule"], position: "above" },
      { number: "06", title: "Performance Improvement", desc: "We improve content marketing results.", checks: ["Track engagement", "Update content", "Improve performance"], position: "below" }
    ]
  },

  industry: {
    subtitle: "CONTENT EXPERTISE",
    title: "Content Marketing Solutions for Business Platforms",
    description: "As a premier content marketing company, we deliver tailored content marketing agency services that build trust and grow your audience across diverse sectors.",
    industries: {
      0: {
        title: "Ecommerce Single Vendor",
        desc: "We create content marketing strategies to improve product visibility and attract more buyers for your ecommerce website.",
        desc1: "Designing smart product stories with optimized content and reliable performance.",
        checks: ["Product Content", "Blog Content Strategy", "SEO Content Writing", "Category Page Content", "Content Optimization", "Performance Tracking"],
        cards: [
          { title: "Product Content", desc: "We create clear and engaging product content to attract customers." },
          { title: "Blog Strategy", desc: "We write blogs to increase traffic and improve search visibility." },
          { title: "SEO Optimization", desc: "We optimize content to rank better and reach the right audience." },
          { title: "Category Development", desc: "We create content for category pages to improve engagement." }
        ]
      },
      1: {
        title: "Resort Booking",
        desc: "Our content to promote resorts helps attract more bookings through online channels, focusing on storytelling and engagement.",
        desc1: "Building hospitality stories with visual content and reliable marketing strategies.",
        checks: ["Travel Blog Content", "Resort Promotion", "Website Content", "Social Media Content", "SEO Content Strategy", "Engagement Content"],
        cards: [
          { title: "Travel Blogs", desc: "We write blogs to attract travelers and improve online visibility." },
          { title: "Resort Promotion", desc: "We create content to highlight resort features and services." },
          { title: "Website Writing", desc: "We develop content that improves user experience and engagement." },
          { title: "Social Content", desc: "We create content for platforms to increase reach and bookings." }
        ]
      },
      2: {
        title: "Real Estate CRM",
        desc: "We help real estate businesses generate leads and attract property buyers through content marketing strategies focused on trust and visibility.",
        desc1: "Enhancing property trust with optimized blog content and reliable lead generation.",
        checks: ["Real Estate Blogs", "Property Content", "Lead Generation Content", "SEO Content Strategy", "Email Content", "Engagement Content"],
        cards: [
          { title: "Property Writing", desc: "We create content to showcase properties and attract buyers." },
          { title: "Real Estate Blogs", desc: "We write blogs to improve visibility and generate leads." },
          { title: "Lead Content", desc: "We develop content that helps capture and convert leads." },
          { title: "SEO Content", desc: "We optimize content to improve rankings and reach more users." }
        ]
      },
    },
    tabs: [
      { label: "Ecommerce Single Vendor", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Resort Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Real Estate CRM", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Content Excellence & Growth",
    list: [
      { title: "Top Content Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Storytelling Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Creative Excellence", body: "Content Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Strategy Spec", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Content Marketing Services",
    title: "Advanced Content Tools",
    description: "We use advanced tools to create, manage, and improve content marketing agency services.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Grammarly", "Surfer SEO", "SEMrush"] },
      { row: 2, direction: "right", speed: "28s", items: ["Google Docs", "Notion", "Yoast SEO", "BuzzSumo", "Canva"] },
    ]
  },

  testimonials: {
    subtitle: "CONTENT RESULTS",
    title: "What Clients Say About Our Content Marketing Company",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Harishankar Iyer", text: "Vihaan delivered our content marketing strategy ahead of schedule. Our organic reach and engagement improved significantly.", initial: "H", color: "#2563eb" },
      { name: "Prakash Reddy", text: "Their content marketing approach helped us attract the right audience and build strong brand authority. The results are impressive.", initial: "P", color: "#10b981" },
      { name: "Kiran Kumar", text: "Our content now generates consistent traffic and engagement. The quality and strategy are outstanding.", initial: "K", color: "#8b5cf6" },
      { name: "Anjali Nair", text: "Their content strategy improved our brand presence and audience connection. The campaigns are creative and result-driven.", initial: "A", color: "#f59e0b" },
      { name: "Venkatesh Rao", text: "The blogs and content workflows are highly effective. Our engagement and conversions have improved drastically.", initial: "V", color: "#ec4899" },
      { name: "Meera Krishnan", text: "Vihaan built a strong content foundation for our business. We are now seeing consistent growth in traffic and leads.", initial: "M", color: "#06b6d4" },
      { name: "Raghavan Pillai", text: "Our content performance has improved across all platforms. Their content marketing expertise is truly impressive.", initial: "R", color: "#2563eb" },
      { name: "Divya Subramanian", text: "The content strategy is well-planned and impactful. Our audience engagement has increased significantly.", initial: "D", color: "#10b981" },
      { name: "Sandeep Nair", text: "Our brand communication is now more effective. Content marketing improved our overall performance.", initial: "S", color: "#8b5cf6" },
      { name: "Lakshmi Narayan", text: "Their content marketing services are reliable and creative. Our reach, traffic, and conversions have all improved.", initial: "L", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Grow with Content<br />Marketing Services?
      </>
    ),
    description: "Let’s create valuable content with our content marketing agency services to attract and engage your audience.",
    buttonText: "Plan Your Content Strategy",
    brandText: "Vihaan Content Solutions"
  }
};

export const localSeoFullServiceData = {
  hero: {
    title: "Local SEO services to Increase visibilities and attract more customers",
    subtitle: "We help your business appear in local search results using local SEO services and improve reach with google my business services.",
    badgeText: "Boost your visibility and draw more customers. 📍",
    buttonText: "Start Local SEO",
    features: [
      { icon: BusinessCenterIcon, text: "Google my business services" },
      { icon: BusinessCenterIcon, text: "Google business profile optimization" },
      { icon: BusinessCenterIcon, text: "Local SEO services agency support" },
      { icon: BusinessCenterIcon, text: "Google maps SEO services" },
      { icon: BusinessCenterIcon, text: "Local keyword targeting" },
      { icon: BusinessCenterIcon, text: "Performance tracking" },
    ]
  },

  overview: {
    subtitle: "LOCAL SEO EXPERTS",
    title: "Complete Local SEO Services for Business Growth",
    description: "As a local seo agency, we improve your presence using google my business service and local search optimization.",
    list: [
      { title: "Profile Optimization", icon: BusinessCenterIcon, count: "Better Visibility", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "We improve your google business profile." },
      { title: "Local Listings", icon: BusinessCenterIcon, count: "Consistent Presence", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We manage your business listings." },
      { title: "Keyword Optimization", icon: BusinessCenterIcon, count: "Targeted Search", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We target local search keywords." },
      { title: "Review Management", icon: BusinessCenterIcon, count: "Improved Ratings", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We improve ratings and reviews." },
    ]
  },

  detailed: {
    subtitle: "BETTER LOCAL VISIBILITY",
    title: "End-to-End Local SEO Services",
    description: "Our local seo services agency approach covers setup, optimization, and improvement for better results.",
    services: [
      {
        title: "LOCAL SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Profile Setup", desc: "We set up your business profile.", icon: <BusinessCenterIcon /> },
          { title: "Optimization", desc: "We improve profile details.", icon: <BusinessCenterIcon /> },
          { title: "Listing Management", desc: "We manage directories.", icon: <BusinessCenterIcon /> },
          { title: "Performance Tracking", desc: "We monitor and improve results.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY LOCAL SEO",
    title: "Why Choose Our Local SEO Services for Better Reach",
    description: "We focus on improving your local presence and helping customers find your business easily.",
    stats: [
      { value: "200+", label: "Businesses Supported" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Better Visibility", icon: BusinessCenterIcon, desc: "We improve local rankings.", color: "#2563eb", number: "01" },
      { title: "More Customers", icon: BusinessCenterIcon, desc: "We attract nearby customers.", color: "#06b6d4", number: "02" },
      { title: "Consistent Updates", icon: BusinessCenterIcon, desc: "We keep your profile active.", color: "#4f46e5", number: "03" },
      { title: "Growth Focused", icon: BusinessCenterIcon, desc: "We aim for long-term growth.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "LOCAL SEO WORKFLOW",
    title: "Our Local SEO Services Process for Better Rankings",
    description: "As a local seo services agency, we follow a structured process using google my business services and maps SEO.",
    processSteps: [
      { number: "01", title: "Profile Audit", desc: "We review your business profile.", checks: ["Check accuracy", "Identify issues", "Improve details"], position: "above" },
      { number: "02", title: "GMB Optimization", desc: "We improve your google business profile optimization.", checks: ["Update information", "Add categories", "Optimize description"], position: "below" },
      { number: "03", title: "Keyword Targeting", desc: "We target relevant local keywords.", checks: ["Find local keywords", "Optimize content", "Improve rankings"], position: "above" },
      { number: "04", title: "Listing Management", desc: "We manage local listings.", checks: ["Add directories", "Maintain consistency", "Improve presence"], position: "below" },
      { number: "05", title: "Review Management", desc: "We improve customer reviews.", checks: ["Encourage reviews", "Respond to feedback", "Build trust"], position: "above" },
      { number: "06", title: "Tracking", desc: "We improve local seo services continuously.", checks: ["Track rankings", "Monitor traffic", "Improve performance"], position: "below" }
    ]
  },

  industry: {
    subtitle: "LOCAL SEO EXPERTISE",
    title: "GMB Optimization Solutions for Business Platforms",
    description: "As a premier local seo agency, we deliver tailored google business profile solutions that drive local rankings and improve customer reach across diverse sectors.",
    industries: {
      0: {
        title: "Ecommerce Multi Vendor",
        desc: "We help multi vendor ecommerce platforms improve local visibility using Google My Business optimization and local search strategies.",
        desc1: "Designing local platform reach with optimized profiles and reliable product visibility.",
        checks: ["Profile Setup", "Local SEO Optimization", "Product Visibility", "Keyword Optimization", "Reviews Management", "Performance Tracking"],
        cards: [
          { title: "Profile Setup", desc: "We create and optimize your business profile to improve local search reach." },
          { title: "Local SEO Opt", desc: "We optimize your platform to rank higher in local search results." },
          { title: "Reviews Mgmt", desc: "We manage and respond to reviews to build trust and improve rankings." },
          { title: "Product Visibility", desc: "We improve product listings to attract more local customers." }
        ]
      },
      1: {
        title: "Listing Site",
        desc: "Our Google My Business services for listing sites focus on improving local presence and attracting more users through targeted optimization.",
        desc1: "Building local platform awareness with optimized profiles and reliable keyword targeting.",
        checks: ["GMB Optimization", "Local Listing SEO", "Profile Management", "Keyword Targeting", "User Engagement", "Performance Tracking"],
        cards: [
          { title: "Profile Optimization", desc: "We optimize your GMB profile to improve visibility and attract local users." },
          { title: "Local Listing", desc: "We improve listings to rank better in local searches and maps." },
          { title: "Keyword Opt", desc: "We use targeted keywords to improve local search rankings." },
          { title: "Engagement", desc: "We manage posts and interactions to improve user engagement." }
        ]
      },
      2: {
        title: "Education CRM",
        desc: "We help education platforms improve local reach using Google My Business and local SEO strategies focused on inquiries and visibility.",
        desc1: "Enhancing student reach with optimized profiles and reliable reputation management.",
        checks: ["Profile Optimization", "Local SEO for Institutes", "Student Lead Gen", "Keyword Targeting", "Reviews & Ratings Mgmt", "Performance Tracking"],
        cards: [
          { title: "Profile Setup", desc: "We create and manage your business profile for better visibility and trust." },
          { title: "Local SEO", desc: "We optimize your platform to attract students searching locally." },
          { title: "Reputation Mgmt", desc: "We improve your online reputation with positive reviews and responses." },
          { title: "Lead Gen", desc: "We optimize your profile to increase inquiries and conversions." }
        ]
      },
    },
    tabs: [
      { label: "Ecommerce Multi Vendor", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Listing Site", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Education CRM", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Local SEO Excellence & Reach",
    list: [
      { title: "Top Local SEO Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Map Ads Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Local Visibility", body: "Search Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top GMB Specialist", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Local SEO Services",
    title: "Specialized Local SEO Tools",
    description: "We use specialized tools to improve google my business service and track local SEO performance.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Google Business Profile Mgr", "Google Maps Insights", "BrightLocal"] },
      { row: 2, direction: "right", speed: "28s", items: ["Whitespark", "Moz Local", "Yext", "LocalFalcon", "GeoRanker"] },
    ]
  },

  testimonials: {
    subtitle: "LOCAL RESULTS",
    title: "What Clients Say About Our Local SEO Agency",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Ravi Shankar", text: "Vihaan optimized our Google My Business profile ahead of schedule. Our local visibility and customer inquiries increased significantly.", initial: "R", color: "#2563eb" },
      { name: "Manoj Reddy", text: "Their local SEO strategy helped us rank higher in nearby searches. We are now getting more walk-ins and calls.", initial: "M", color: "#10b981" },
      { name: "Srinath Kumar", text: "Our business now appears in top local search results. The growth in leads and visibility is outstanding.", initial: "S", color: "#8b5cf6" },
      { name: "Anitha Iyer", text: "Their GMB optimization improved our presence on Google Maps. The results are consistent and impactful.", initial: "A", color: "#f59e0b" },
      { name: "Praveen Nair", text: "The improvements in our business profile increased engagement and customer trust. Performance has improved drastically.", initial: "P", color: "#ec4899" },
      { name: "Lakshman Rao", text: "Vihaan built a strong local SEO strategy for our business. We are now reaching more local customers effectively.", initial: "L", color: "#06b6d4" },
      { name: "Divakar Pillai", text: "Our local rankings improved significantly within weeks. Their expertise in GMB optimization is impressive.", initial: "D", color: "#2563eb" },
      { name: "Kavitha Ramesh", text: "The profile optimization and updates are highly effective. Our customer interactions have increased.", initial: "K", color: "#10b981" },
      { name: "Vijayalakshmi Krishnan", text: "Our business is now more visible on Google Maps. Local SEO improved our overall growth.", initial: "V", color: "#8b5cf6" },
      { name: "Suresh Narayanan", text: "Their local SEO services are reliable and result-driven. Our visibility, calls, and leads have all improved.", initial: "S", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Want More Customers with Local<br />SEO Services?
      </>
    ),
    description: "Let’s improve your google my business services and grow your local visibility.",
    buttonText: "Boost Your Local Presence",
    brandText: "Vihaan Local SEO Solutions"
  }
};

export const influencerAffiliateFullServiceData = {
  hero: {
    title: "Influencer Marketing Agency and Affiliate Marketing Services to Grow Your Brand",
    subtitle: "We help you expand your reach and increase sales using influencer marketing service and affiliate marketing services.",
    badgeText: "Reach new audiences and grow your business faster. 🚀",
    buttonText: "Start Marketing Campaign",
    features: [
      { icon: BusinessCenterIcon, text: "Influencer marketing agency support" },
      { icon: BusinessCenterIcon, text: "Influencer marketing service" },
      { icon: BusinessCenterIcon, text: "Affiliate marketing services" },
      { icon: BusinessCenterIcon, text: "Affiliate marketing consulting" },
      { icon: BusinessCenterIcon, text: "Campaign planning" },
      { icon: BusinessCenterIcon, text: "Performance tracking" },
    ]
  },

  overview: {
    subtitle: "PARTNERSHIP EXPERTS",
    title: "Complete Influencer Agency and Affiliate Marketing Services",
    description: "We provide influencer marketing agency solutions and affiliate marketing services to promote your brand and increase visibility.",
    list: [
      { title: "Influencer Campaigns", icon: BusinessCenterIcon, count: "Branded Content", color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)", description: "we pair branded content with the right influencers." },
      { title: "Affiliate Programs", icon: BusinessCenterIcon, count: "Managed Services", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", description: "We create and manage affiliate marketing services." },
      { title: "Campaign Mgmt", icon: BusinessCenterIcon, count: "Full Execution", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", description: "We handle full campaign execution." },
      { title: "Performance Tracking", icon: BusinessCenterIcon, count: "Improved ROI", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)", description: "We track and improve campaign results." },
    ]
  },

  detailed: {
    subtitle: "BETTER REACH",
    title: "End-to-End Influencer Marketing Agency Solutions",
    description: "Our influencer marketing service and affiliate marketing consulting approach covers planning, execution, and optimization.",
    services: [
      {
        title: "MARKETING SOLUTIONS",
        icon: <BusinessCenterIcon sx={{ fontSize: 24 }} />,
        count: "01",
        color: "#0087c9",
        cards: [
          { title: "Research & Selection", desc: "We identify the influencer or partner who might be the right one.", icon: <BusinessCenterIcon /> },
          { title: "Campaign Planning", desc: "We create a clear marketing strategy.", icon: <BusinessCenterIcon /> },
          { title: "Collaboration Setup", desc: "We manage partnerships.", icon: <BusinessCenterIcon /> },
          { title: "Execution & Tracking", desc: "We run and improve campaigns.", icon: <BusinessCenterIcon /> }
        ]
      }
    ]
  },

  whyChooseUs: {
    subtitle: "WHY PARTNERSHIPS",
    title: "Why Choose Our Influencer Marketing Agency",
    description: "We focus on building strong partnerships using influencer marketing service and affiliate marketing services.",
    stats: [
      { value: "150+", label: "Campaigns Managed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
    ],
    reasons: [
      { title: "Right Partnerships", icon: BusinessCenterIcon, desc: "We link you up with the perfect influencers.", color: "#2563eb", number: "01" },
      { title: "Better Reach", icon: BusinessCenterIcon, desc: "We expand your audience.", color: "#06b6d4", number: "02" },
      { title: "Performance Focused", icon: BusinessCenterIcon, desc: "We improve campaign results.", color: "#4f46e5", number: "03" },
      { title: "Growth Driven", icon: BusinessCenterIcon, desc: "We aim for better ROI.", color: "#10b981", number: "04" }
    ]
  },

  process: {
    subtitle: "PARTNERSHIP WORKFLOW",
    title: "Our Influencer Marketing Agency Process",
    description: "As an influencer marketing agency, we follow a structured process using influencer and affiliate marketing services.",
    processSteps: [
      { number: "01", title: "Research & Selection", desc: "We find suitable influencers and partners.", checks: ["Analyze audience", "Identify influencers", "Select best matches"], position: "above" },
      { number: "02", title: "Campaign Planning", desc: "We plan influencer marketing service campaigns.", checks: ["Define goals", "Set budgets", "Plan strategy"], position: "below" },
      { number: "03", title: "Collaboration Setup", desc: "We build partnerships.", checks: ["Connect with influencers", "Define deliverables", "Set timelines"], position: "above" },
      { number: "04", title: "Campaign Execution", desc: "We run affiliate marketing services.", checks: ["Launch campaigns", "Manage content", "Monitor progress"], position: "below" },
      { number: "05", title: "Performance Tracking", desc: "We track campaign results.", checks: ["Measure reach", "Analyze engagement", "Track conversions"], position: "above" },
      { number: "06", title: "Optimization & Growth", desc: "We improve affiliate marketing performance.", checks: ["Optimize campaigns", "Scale results", "Improve ROI"], position: "below" }
    ]
  },

  industry: {
    subtitle: "PARTNERSHIP EXPERTISE",
    title: "Influencer and Affiliate Solutions for Business Platforms",
    description: "As a premier influencer marketing agency, we deliver tailored affiliate marketing services that expand reach and increase sales across diverse sectors.",
    industries: {
      0: {
        title: "Food Booking",
        desc: "We help food booking platforms grow through influencer marketing and affiliate promotions, focusing on orders and visibility.",
        desc1: "Designing tasty collaborations with optimized influencer campaigns and reliable order growth.",
        checks: ["Influencer Promotions", "Affiliate Campaigns", "Food Blogger Collaborations", "Discount Campaigns", "Audience Targeting", "Performance Tracking"],
        cards: [
          { title: "Influencer Promo", desc: "We collaborate with food influencers to promote your platform and attract users." },
          { title: "Affiliate Promo", desc: "We create affiliate programs to drive traffic and increase orders." },
          { title: "Blogger Marketing", desc: "We partner with bloggers to showcase your services and reach a wider audience." },
          { title: "Tracking", desc: "We monitor campaigns and improve results for better ROI." }
        ]
      },
      1: {
        title: "Matrimony",
        desc: "Our influencer and affiliate strategies for matrimony platforms focus on trust building, engagement, and user acquisition.",
        desc1: "Building matrimonial trust with optimized collaborations and reliable user growth.",
        checks: ["Influencer Collaborations", "Affiliate Programs", "User Acquisition", "Social Promotions", "Audience Targeting", "Performance Tracking"],
        cards: [
          { title: "Influencer Collabs", desc: "We partner with influencers to promote your platform and increase sign-ups." },
          { title: "Affiliate Strategy", desc: "We create affiliate programs to bring more users and improve conversions." },
          { title: "Acquisition Strategy", desc: "We design campaigns to attract and convert new users." },
          { title: "Campaign Opt", desc: "We track and optimize campaigns for better results." }
        ]
      },
      2: {
        title: "Cab Booking App",
        desc: "We help cab booking apps grow through influencer marketing and affiliate campaigns, focusing on app installs and user engagement.",
        desc1: "Enhancing app reach with optimized influencer promotions and reliable referral programs.",
        checks: ["Influencer Promotions", "Affiliate Campaigns", "App Install Campaigns", "Referral Programs", "Audience Targeting", "Performance Tracking"],
        cards: [
          { title: "Influencer Promo", desc: "We collaborate with influencers to promote your app and increase downloads." },
          { title: "Affiliate Marketing", desc: "We create affiliate programs to drive installs and user growth." },
          { title: "Referral Programs", desc: "We design referral programs to increase user engagement and retention." },
          { title: "Growth Opt", desc: "We track and improve campaigns to increase installs and usage." }
        ]
      },
    },
    tabs: [
      { label: "Food Booking", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Matrimony", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
      { label: "Cab Booking App", icon: <BusinessCenterIcon sx={{ fontSize: 18 }} /> },
    ]
  },

  awards: {
    title: "Partnership Excellence & Reach",
    list: [
      { title: "Top Influencer Agency", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
      { title: "Affiliate Leader", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
      { title: "ISO 9001 Certified", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
      { title: "Partner Excellence", body: "Partner Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
      { title: "Top Affiliate Spec", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
    ]
  },

  techStack: {
    subtitle: "Tools We Use for Influencer Marketing Agency Campaigns",
    title: "Modern Partnership Tools",
    description: "We use tools to manage influencer marketing service and affiliate marketing services efficiently.",
    rows: [
      { row: 1, direction: "left", speed: "25s", items: ["Upfluence", "Aspire", "Heepsy"] },
      { row: 2, direction: "right", speed: "28s", items: ["TapInfluence", "ShareASale", "CJ Affiliate", "Impact.com", "PartnerStack"] },
    ]
  },

  testimonials: {
    subtitle: "PARTNER RESULTS",
    title: "What Clients Say About Our Influencer Marketing Agency",
    rating: "4.9/5",
    reviews: "910+",
    list: [
      { name: "Arvind Krishnan", text: "Vihaan delivered our affiliate and influencer marketing campaigns ahead of schedule. Our brand reach and partnerships improved significantly.", initial: "A", color: "#2563eb" },
      { name: "Suresh Reddy", text: "Their influencer marketing strategy helped us connect with the right audience. Engagement and conversions have increased noticeably.", initial: "S", color: "#10b981" },
      { name: "Karthik Iyer", text: "Our affiliate campaigns now generate consistent revenue. The tracking and performance are outstanding.", initial: "K", color: "#8b5cf6" },
      { name: "Divya Nair", text: "Their influencer collaborations improved our brand visibility. The campaigns are creative and result-driven.", initial: "D", color: "#f59e0b" },
      { name: "Venkatesh Kumar", text: "The campaign management and partnerships are highly effective. Our engagement and ROI have improved drastically.", initial: "V", color: "#ec4899" },
      { name: "Meera Subramanian", text: "Vihaan built a strong affiliate network for our business. We are now seeing consistent growth in sales and traffic.", initial: "M", color: "#06b6d4" },
      { name: "Raghavendra Rao", text: "Our influencer campaigns perform flawlessly. Their expertise in affiliate marketing is truly impressive.", initial: "R", color: "#2563eb" },
      { name: "Lakshmi Priya", text: "The campaigns are well-targeted and impactful. Our audience engagement has increased significantly.", initial: "L", color: "#10b981" },
      { name: "Sandeep Narayanan", text: "Our brand collaborations are now more effective. Affiliate marketing improved our overall performance.", initial: "S", color: "#8b5cf6" },
      { name: "Anand Pillai", text: "Their affiliate and influencer marketing services are reliable and creative. Our reach, engagement, and conversions have all improved.", initial: "A", color: "#f59e0b" },
    ]
  },

  cta: {
    title: (
      <>
        Ready to Grow with an Influencer<br />Marketing Agency?
      </>
    ),
    description: "Let’s build campaigns using influencer marketing service and affiliate marketing services to expand your reach.",
    buttonText: "Launch Your Campaign",
    brandText: "Vihaan Partnership Solutions"
  }
};


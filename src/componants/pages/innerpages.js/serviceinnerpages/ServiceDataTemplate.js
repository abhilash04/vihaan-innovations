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
    ["Search Engine Optimization (SEO)", "Rank higher on Google with proven on-page, off-page and technical SEO strategies."],
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
    ["Technical SEO", "Fix crawl errors, improve site speed, Core Web Vitals, and mobile optimization."],
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

export const graphicDesignServiceData = S(
  "Graphic Design Services in Bangalore",
  "Creative, Brand-Aligned Visual Designs That Make Your Business Stand Out.",
  "Graphic Design",
  [
    ["Brand Identity Design", "Logos, color palettes, typography and brand guidelines for a cohesive identity."],
    ["Marketing Collateral", "Brochures, flyers, banners and presentations that convert."],
    ["Social Media Graphics", "Platform-optimized posts, stories and ads designed to stop the scroll."],
    ["Print Design", "Business cards, packaging, and print-ready designs with precision."],
  ],
  [
    ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "CorelDraw", "InDesign"],
    ["Adobe XD", "After Effects", "Procreate", "Sketch", "Affinity Designer"],
  ],
  [ecomInd, retailInd, eduInd],
  "Ready to Elevate Your Brand Design?"
);

export const logoDesignServiceData = S(
  "Logo Design Services in Bangalore",
  "Memorable, Timeless Logo Designs That Define Your Brand Identity.",
  "Logo Design",
  [
    ["Brand Logo Design", "Custom, concept-driven logos that communicate your brand's personality and values."],
    ["Logo Refresh & Redesign", "Modernize outdated logos while preserving brand equity and recognition."],
    ["Logo Variations & Brand Kit", "Full logo family with light/dark, horizontal/stacked, and icon-only versions."],
    ["Icon & Monogram Design", "Distinctive lettermark and icon designs for app icons and avatars."],
  ],
  [
    ["Adobe Illustrator", "Figma", "Canva Pro", "CorelDraw", "Affinity Designer"],
    ["Adobe Photoshop", "Procreate", "Adobe XD", "Sketch"],
  ],
  [ecomInd, retailInd, eduInd],
  "Ready to Design Your Perfect Logo?"
);

// Remaining stub exports (not linked from header, kept for completeness)
export const ecommerceDevServiceData = {};
export const crmDevServiceData = {};
export const erpDevServiceData = {};
export const blockchainDevServiceData = {};
export const cyberSecurityServiceData = {};
export const iotDevServiceData = {};
export const gameDevServiceData = {};
export const contentWritingServiceData = {};
export const affiliateMarketingServiceData = {};
export const appMaintenanceServiceData = {};
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




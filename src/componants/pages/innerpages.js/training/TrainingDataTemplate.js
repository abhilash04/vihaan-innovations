import SchoolIcon from "@mui/icons-material/School";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LanguageIcon from "@mui/icons-material/Language";
import EngineeringIcon from "@mui/icons-material/Engineering";
import React from "react";

// ────────────────────────────────────────────────────
//  Full Stack Development Training Data
// ────────────────────────────────────────────────────
export const fullStackTrainingData = {
  hero: {
    title: "Full Stack Web Development Training in Bengaluru",
    subtitle: "Master real-world skills with live projects, expert mentors & guaranteed placement support.",
    badgeText: "🚀 New Batch Starting Monday — Limited Seats Available!",
    buttonText: "Book Your Seat",
    urgencyText: "Limited Slots: Next Batch Starts this Monday!",
    secondaryButtonText: "Get Brochure",
    formTitle: "Start Your Journey",
    formSubtitle: "Fill the form below and speak with our training advisor.",
    namePlaceholder: "Your Full Name",
    phonePlaceholder: "Phone Number",
    coursePlaceholder: "Select Desired Course",
    submitButtonText: "Apply for Early Seat",
    supportText: "Support: ",
    supportPhone: "+91 98765 43210",
    features: [
      { icon: SchoolIcon, text: "Expert Industry Instructors" },
      { icon: GroupsIcon, text: "Small Batch for Personalized Attention" },
      { icon: WorkIcon, text: "100% Placement Assistance" },
      { icon: LaptopMacIcon, text: "Live Projects & Hands-On Learning" },
      { icon: EmojiEventsIcon, text: "Industry-Recognized Certificate" },
      { icon: AccessTimeIcon, text: "Flexible Batch Timings" },
    ],
    courses: ["Full Stack Development", "UI/UX Design", "Digital Marketing", "Mobile App Development"],
  },

  about: {
    badge: "Specialized Full Stack Training",
    title: "Website Design & Development Program — Built for Results",
    description1: "Vihaan Innovations' Full Stack program is designed for ambitious learners — fresh graduates, career-switchers, and working professionals — who want to build real, deployable web applications and land a high-paying tech job within months.",
    description2: "Unlike generic online courses, our program combines structured classroom instruction with live client projects, weekly evaluations, and a dedicated placement cell. You don't just learn — you build, deploy, and present your work to real recruiters.",
    highlights: [
      "Expertly Designed, Industry-Aligned Curriculum",
      "Practical Learning with Real-World Scenarios",
      "Career Growth Roadmap with Mentorship Sessions",
      "Cutting-Edge Technologies & Tools Covered",
      "Personalized Guidance & 1-on-1 Doubt Sessions",
    ],
    stats: [
      { label: "Program Duration", value: "6 Months" },
      { label: "Batch Size", value: "Max 20 Students" },
      { label: "Mode of Training", value: "Online + Offline" },
      { label: "Projects", value: "5+ Live Projects" },
      { label: "Certification", value: "Industry Certificate" },
      { label: "EMI Available", value: "0% Interest Plans" },
    ],
  },

  courses: {
    badge: "Available Modules",
    title: "Master the Most In-Demand Skills",
    subtitle: "Choose the path that fits your career goals.",
    courses: [
      {
        id: 0, label: "Front-End Mastery",
        duration: "2 Months", mode: "Online / Offline", level: "Beginner to Advanced",
        skills: ["HTML5 & CSS3 Essentials", "JavaScript (ES6+) Core", "React.js Framework", "Bootstrap 5 & Tailwind", "Responsive Web Design", "Git & Version Control"],
      },
      {
        id: 1, label: "Back-End & APIs",
        duration: "2 Months", mode: "Online / Offline", level: "Intermediate",
        skills: ["Node.js & Express.js", "RESTful API Design", "JWT Authentication", "MongoDB & NoSQL", "SQL & Database Design", "Middleware & Security"],
      },
      {
        id: 2, label: "Full Stack Deployment",
        duration: "2 Months", mode: "Online / Offline", level: "Advanced",
        skills: ["MERN Stack Integration", "Cloud Deployment (AWS/Vercel)", "System Architecture", "Software Testing Basics", "Performance Optimization", "Live Capstone Project"],
      },
    ],
  },

  curriculum: {
    badge: "Course Roadmap",
    title: "Your Roadmap to Success.",
    subtitle: "A structured, progressive learning path designed to make you an industry expert.",
    roadmap: [
      { month: "Month 1", title: "Foundations", topics: ["HTML5 & CSS3 Mastery", "JavaScript Core Concepts", "Git Version Control", "Responsive Design Principles"] },
      { month: "Month 2", title: "Front-End Development", topics: ["React.js Fundamentals", "State & Props Management", "Component Architecture", "Bootstrap Integration"] },
      { month: "Month 3", title: "Back-End Basics", topics: ["Node.js & Express Setup", "REST API Design", "JWT Authentication", "Middleware & Error Handling"] },
      { month: "Month 4", title: "Database & Storage", topics: ["MySQL Relational Design", "MongoDB NoSQL Queries", "PostgreSQL Advanced", "Data Modeling & ORM"] },
      { month: "Month 5", title: "Full Stack Integration", topics: ["MERN Stack Project", "File Uploads & Cloud", "WebSocket Real-time", "Deployment Basics"] },
      { month: "Month 6", title: "Career & Capstone", topics: ["Live Capstone Project", "Resume & Portfolio Building", "Mock Interviews", "Placement Drive"] },
    ],
  },

  features: {
    badge: "Why Choose Us",
    title: "What Makes Us Different.",
    subtitle: "Everything we do is designed to accelerate your career, not just check a course box.",
    features: [
      { icon: <SchoolIcon fontSize="large" />, title: "Expert Instructors", desc: "Learn from industry professionals with 10+ years of real-world experience in top companies." },
      { icon: <LaptopMacIcon fontSize="large" />, title: "Hands-On Projects", desc: "Build 5+ real-world projects that go directly into your professional portfolio." },
      { icon: <WorkIcon fontSize="large" />, title: "100% Placement Support", desc: "Dedicated placement cell with 200+ hiring partners across India." },
      { icon: <GroupsIcon fontSize="large" />, title: "Small Batch Training", desc: "Small batches of 20 students for personalized attention and better interaction." },
      { icon: <MenuBookIcon fontSize="large" />, title: "Structured Curriculum", desc: "Week-by-week curriculum designed with input from industry leaders and companies." },
      { icon: <DataObjectIcon fontSize="large" />, title: "Lifetime LMS Access", desc: "Access all recorded sessions, notes and future updates forever at no extra cost." },
    ],
  },

  testimonials: {
    badge: "Alumni Success",
    title: "Join 1200+ Successful Alumni.",
    subtitle: "Hear what our alumni say about their experience at Vihaan Innovations.",
    testimonials: [
      { name: "Priya S.", role: "Full Stack Developer @ TCS", rating: 5, text: "Vihaan's training gave me confidence to switch careers. The hands-on projects and placement support were exceptional!" },
      { name: "Rahul M.", role: "UI Engineer @ Infosys", rating: 5, text: "Best investment I made. The instructors are very approachable, the curriculum is practical and up-to-date." },
      { name: "Sneha A.", role: "React Developer @ Startup", rating: 5, text: "I joined as a complete beginner and landed a job within 2 months of completing the course. Highly recommend!" },
      { name: "Kiran T.", role: "Backend Dev @ Wipro", rating: 4, text: "The Node.js and database modules were incredibly well-structured. I finally understand full-stack architecture end-to-end." },
    ],
  },

  cta: {
    title: "Ready to Become a Full Stack Developer?",
    subtitle: "Learn from the best. Build real projects. Get hired. Join 1200+ students who transformed their careers with Vihaan Innovations.",
    primaryButton: "Enroll Now →",
    secondaryButton: "Download Syllabus",
    footerText: "* New batch starting this Monday. Limited slots left.",
  },

  whoCanApply: {
    badge: "Eligibility",
    title: "Who Can Apply for the Course?",
    subtitle: "Our program is open to anyone with the drive to learn. No prior coding experience required — just ambition.",
    stats: [
      { num: 1200, label: "Alumni placed", suffix: "+" },
      { num: 200, label: "Hiring partners", suffix: "+" },
      { num: 500, label: "Projects built", suffix: "+" },
      { num: 100, label: "Placement assistance", suffix: "%" },
    ],
    audience: [
      { icon: <SchoolIcon sx={{ fontSize: 28 }} />, label: "Students & Freshers", text: "Final year students and fresh graduates looking to build a career in IT", accent: "#1a472a", bg: "#e8f0eb" },
      { icon: <EngineeringIcon sx={{ fontSize: 28 }} />, label: "IT Professionals", text: "Experienced IT professionals seeking a meaningful career change", accent: "#b45309", bg: "#fef3c7" },
      { icon: <DesktopMacIcon sx={{ fontSize: 28 }} />, label: "Aspiring Developers", text: "Self-learners and aspiring web developers ready to go professional", accent: "#1d4ed8", bg: "#dbeafe" },
      { icon: <CodeIcon sx={{ fontSize: 28 }} />, label: "Freelancers & Consultants", text: "Passionate programmers, freelancers and independent consultants", accent: "#6d28d9", bg: "#ede9fe" },
      { icon: <BusinessCenterIcon sx={{ fontSize: 28 }} />, label: "Business Owners", text: "Business owners and bloggers who want to build and manage their own web presence", accent: "#be185d", bg: "#fce7f3" },
      { icon: <LanguageIcon sx={{ fontSize: 28 }} />, label: "Programming Professionals", text: "Professionals already in tech who want to expand their full-stack capabilities", accent: "#0e7490", bg: "#cffafe" },
    ],
  },

  tools: [
    { name: "VS Code", color: "#007ACC" },
    { name: "Git / GitHub", color: "#F05032" },
    { name: "Postman", color: "#FF6C37" },
    { name: "Chrome DevTools", color: "#4285F4" },
    { name: "React DevTools", color: "#61DAFB" },
    { name: "Vercel / Netlify", color: "#000000" },
  ],
};

// Helper: build a standard training data object quickly
const makeTrainingData = ({ heroTitle, heroSubtitle, heroBadge, aboutTitle, about1, about2, duration, courseLabel, frontEnd, backEnd, database, tools, months, ctaTitle, audience, trainingTools }) => ({
  hero: {
    title: heroTitle,
    subtitle: heroSubtitle,
    badgeText: heroBadge || "🚀 New Batch Starting Monday — Limited Seats Available!",
    buttonText: "Book Your Seat",
    urgencyText: "Limited Slots: Next Batch Starts this Monday!",
    secondaryButtonText: "Get Brochure",
    formTitle: "Start Your Journey",
    formSubtitle: "Fill the form below and speak with our training advisor.",
    namePlaceholder: "Your Full Name",
    phonePlaceholder: "Phone Number",
    coursePlaceholder: "Select Desired Course",
    submitButtonText: "Apply for Early Seat",
    supportText: "Support: ",
    supportPhone: "+91 98765 43210",
    features: [
      { icon: SchoolIcon, text: "Expert Industry Instructors" },
      { icon: GroupsIcon, text: "Small Batch for Personalized Attention" },
      { icon: WorkIcon, text: "100% Placement Assistance" },
      { icon: LaptopMacIcon, text: "Live Projects & Hands-On Learning" },
      { icon: EmojiEventsIcon, text: "Industry-Recognized Certificate" },
      { icon: AccessTimeIcon, text: "Flexible Batch Timings" },
    ],
    courses: [courseLabel],
  },
  about: {
    badge: `Specialized ${courseLabel} Training`,
    title: aboutTitle,
    description1: about1,
    description2: about2 || "Our program combines structured classroom instruction with live projects, weekly evaluations, and a dedicated placement cell.",
    highlights: [
      "Expertly Designed, Industry-Aligned Curriculum",
      "Practical Learning with Real-World Scenarios",
      "Career Growth Roadmap with Mentorship Sessions",
      "Cutting-Edge Technologies & Tools Covered",
      "Personalized Guidance & 1-on-1 Doubt Sessions",
    ],
    stats: [
      { label: "Program Duration", value: duration },
      { label: "Batch Size", value: "Max 20 Students" },
      { label: "Mode of Training", value: "Online + Offline" },
      { label: "Projects", value: "5+ Live Projects" },
      { label: "Certification", value: "Industry Certificate" },
      { label: "EMI Available", value: "0% Interest Plans" },
    ],
  },
  courses: {
    badge: "Available Modules",
    title: "Master the Most In-Demand Skills",
    subtitle: "Choose the path that fits your career goals.",
    courses: [
      { id: 0, label: `${courseLabel} Fundamentals`, duration: duration, mode: "Online / Offline", level: "Beginner", skills: frontEnd },
      { id: 1, label: `Advanced ${courseLabel}`, duration: duration, mode: "Online / Offline", level: "Intermediate", skills: backEnd },
      { id: 2, label: `${courseLabel} Mastery & Projects`, duration: duration, mode: "Online / Offline", level: "Advanced", skills: database },
    ],
  },
  curriculum: {
    badge: "Course Roadmap",
    title: "Your Roadmap to Success.",
    subtitle: "A structured, progressive learning path designed to make you an industry expert.",
    roadmap: months,
  },
  features: {
    badge: "Why Choose Us",
    title: "What Makes Us Different.",
    subtitle: "Everything we do is designed to accelerate your career, not just check a course box.",
    features: [
      { icon: <SchoolIcon fontSize="large" />, title: "Expert Instructors", desc: "Learn from industry professionals with 10+ years of hands-on experience." },
      { icon: <LaptopMacIcon fontSize="large" />, title: "Hands-On Projects", desc: "Build 5+ real-world projects that go directly into your professional portfolio." },
      { icon: <WorkIcon fontSize="large" />, title: "100% Placement Support", desc: "Dedicated placement cell with 200+ hiring partners across India." },
      { icon: <GroupsIcon fontSize="large" />, title: "Small Batch Training", desc: "Small batches of 20 students for personalized attention." },
      { icon: <MenuBookIcon fontSize="large" />, title: "Structured Curriculum", desc: "Week-by-week curriculum designed with input from industry leaders." },
      { icon: <DataObjectIcon fontSize="large" />, title: "Lifetime LMS Access", desc: "Access all recorded sessions, notes and future updates forever." },
    ],
  },
  testimonials: {
    badge: "Alumni Success",
    title: "Join 1200+ Successful Alumni.",
    subtitle: "Hear what our alumni say about their experience at Vihaan Innovations.",
    testimonials: [
      { name: "Priya S.", role: `${courseLabel} Graduate @ TCS`, rating: 5, text: "Vihaan's training gave me confidence to switch careers. The hands-on projects and placement support were exceptional!" },
      { name: "Rahul M.", role: `${courseLabel} Graduate @ Infosys`, rating: 5, text: "Best investment I made. The instructors are very approachable, the curriculum is practical and up-to-date." },
      { name: "Sneha A.", role: `${courseLabel} @ Startup`, rating: 5, text: "I joined as a complete beginner and landed a job within 2 months of completing the course. Highly recommend!" },
    ],
  },
  cta: {
    title: ctaTitle || `Ready to Master ${courseLabel}?`,
    subtitle: "Learn from the best. Build real projects. Get hired. Join 1200+ students who transformed their careers with Vihaan Innovations.",
    primaryButton: "Enroll Now →",
    secondaryButton: "Download Syllabus",
    footerText: "* New batch starting this Monday. Limited slots left.",
  },
  whoCanApply: {
    badge: "Eligibility",
    title: "Who Can Apply for the Course?",
    subtitle: "Our program is open to anyone with the drive to learn. No prior coding experience required.",
    stats: [
      { num: 1200, label: "Alumni placed", suffix: "+" },
      { num: 200, label: "Hiring partners", suffix: "+" },
      { num: 500, label: "Projects built", suffix: "+" },
      { num: 100, label: "Placement assistance", suffix: "%" },
    ],
    audience: audience || [
      { icon: <SchoolIcon sx={{ fontSize: 28 }} />, label: "Students & Freshers", text: "Final year students and fresh graduates looking to build a career in SEO", accent: "#1a472a", bg: "#e8f0eb" },
      { icon: <EngineeringIcon sx={{ fontSize: 28 }} />, label: "Marketing Pros", text: "Traditional marketers looking to pivot to digital search marketing", accent: "#b45309", bg: "#fef3c7" },
      { icon: <DesktopMacIcon sx={{ fontSize: 28 }} />, label: "Aspiring SEOs", text: "Self-learners ready to master technical search analytics professionaly", accent: "#1d4ed8", bg: "#dbeafe" },
      { icon: <CodeIcon sx={{ fontSize: 28 }} />, label: "Freelancers", text: "Independent consultants who want to offer SEO as a core service", accent: "#6d28d9", bg: "#ede9fe" },
      { icon: <BusinessCenterIcon sx={{ fontSize: 28 }} />, label: "Business Owners", text: "Entrepreneurs who want to rank their own websites on Google", accent: "#be185d", bg: "#fce7f3" },
      { icon: <LanguageIcon sx={{ fontSize: 28 }} />, label: "Content Creators", text: "Bloggers and creators who want more organic traffic to their content", accent: "#0e7490", bg: "#cffafe" },
    ],
  },
  tools: trainingTools || [
    { name: "Google Search Console", color: "#4285F4" },
    { name: "Google Analytics 4", color: "#F4B400" },
    { name: "Ahrefs", color: "#007ACC" },
    { name: "SEMrush", color: "#FF642D" },
    { name: "Screaming Frog", color: "#4DB33D" },
    { name: "Moz Pro", color: "#00B4D8" },
    { name: "PageSpeed Insights", color: "#DB4437" },
    { name: "Canva / Figma", color: "#7D2AE8" },
  ],
});

// ── Digital Marketing Training ──
export const seoTrainingData = makeTrainingData({
  heroTitle: "SEO Training in Bengaluru — Rank #1 on Google",
  heroSubtitle: "Master Search Engine Optimization with live campaigns, keyword tools, and Google Analytics. Get certified and job-ready.",
  aboutTitle: "SEO Training Program — From Basics to Advanced",
  about1: "Our SEO Training covers everything from on-page optimization to technical SEO and link building. You'll work on live websites and measure real results.",
  duration: "2 Months", courseLabel: "SEO",
  frontEnd: ["Keyword Research", "On-Page SEO", "Meta Tags & Schema", "Content Optimization", "URL Structure", "Internal Linking"],
  backEnd: ["Technical SEO", "Backlink Building", "Domain Authority", "Google Search Console", "Site Speed", "Core Web Vitals"],
  database: ["Google Analytics", "SEMrush", "Ahrefs", "Moz", "Moz", "Moz",],
  tools: ["Google Search Console", "Ahrefs", "SEMrush", "Yoast SEO", "Screaming Frog"],
  months: [
    { month: "Week 1-2", title: "SEO Foundations", topics: ["How Search Engines Work", "Keyword Research Basics", "On-Page SEO", "Content Strategy"] },
    { month: "Week 3-4", title: "Technical SEO", topics: ["Site Architecture", "Core Web Vitals", "Schema Markup", "Mobile SEO"] },
    { month: "Week 5-6", title: "Off-Page & Link Building", topics: ["Backlink Strategy", "Guest Posting", "DA/PA Analysis", "Local SEO"] },
    { month: "Week 7-8", title: "Analytics & Reporting", topics: ["Google Analytics Setup", "Search Console Reports", "Rank Tracking", "SEO Audit"] },
    { month: "Week 7-8", title: "Analytics & Reporting", topics: ["Google Analytics Setup", "Search Console Reports", "Rank Tracking", "SEO Audit"] },
    { month: "Week 7-8", title: "Analytics & Reporting", topics: ["Google Analytics Setup", "Search Console Reports", "Rank Tracking", "SEO Audit"] },

  ],
  ctaTitle: "Ready to Rank #1 on Google?",
});

export const semTrainingData = makeTrainingData({
  heroTitle: "Google Ads (SEM) Training in Bengaluru",
  heroSubtitle: "Learn to run profitable Google Ads campaigns with live ad accounts, bidding strategies, and conversion optimization.",
  aboutTitle: "Google Ads Training — Real Campaigns, Real Results",
  about1: "Our SEM training covers Search, Display, Shopping, and YouTube Ads. You'll manage live budgets and optimize real campaigns.",
  duration: "2 Months", courseLabel: "SEM / Google Ads",
  frontEnd: ["Search Ads", "Display Network", "YouTube Ads", "Shopping Ads", "Keyword Match Types", "Ad Copywriting"],
  backEnd: ["Bidding Strategies", "Quality Score", "Conversion Tracking", "Remarketing", "Audience Targeting", "ROI Optimization"],
  database: ["Google Ads", "Google Analytics", "Google Merchant Center"],
  tools: ["Google Ads", "Google Analytics", "SEMrush", "Canva", "Google Tag Manager"],
  months: [
    { month: "Week 1-2", title: "Google Ads Basics", topics: ["Account Structure", "Campaign Types", "Keyword Targeting", "Ad Copy Writing"] },
    { month: "Week 3-4", title: "Advanced Campaigns", topics: ["Bidding Strategies", "Display & YouTube Ads", "Shopping Campaigns", "Remarketing"] },
    { month: "Week 5-6", title: "Conversion Optimization", topics: ["Conversion Tracking", "Landing Page Optimization", "A/B Testing", "Quality Score"] },
    { month: "Week 7-8", title: "Reporting & Strategy", topics: ["Performance Analysis", "Budget Management", "ROI Reporting", "Live Campaign Review"] },
  ],
  ctaTitle: "Ready to Master Google Ads?",
});

export const smmTrainingData = makeTrainingData({
  heroTitle: "Social Media Marketing Training in Bengaluru",
  heroSubtitle: "Learn to build brands on Instagram, Facebook, LinkedIn, and YouTube. Run live ad campaigns and grow real audiences.",
  aboutTitle: "Social Media Marketing Program — Build & Grow Brands Online",
  about1: "Our SMM training covers content strategy, paid social advertising, influencer marketing, and analytics. You'll manage real brand accounts.",
  duration: "2 Months", courseLabel: "Social Media Marketing",
  frontEnd: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Strategy", "YouTube Channel Growth", "Content Calendar", "Hashtag Strategy"],
  backEnd: ["Facebook Ads Manager", "Instagram Ads", "LinkedIn Ads", "Audience Targeting", "Retargeting", "Analytics & Reporting"],
  database: ["Facebook Ads", "Instagram Insights", "LinkedIn Analytics", "YouTube Studio"],
  tools: ["Canva", "Meta Business Suite", "Hootsuite", "Buffer", "Google Analytics"],
  months: [
    { month: "Week 1-2", title: "Platform Mastery", topics: ["Instagram Strategy", "Facebook Marketing", "LinkedIn for Business", "YouTube Growth"] },
    { month: "Week 3-4", title: "Content Creation", topics: ["Visual Content Design", "Copywriting for Social", "Reels & Short Videos", "Content Calendar"] },
    { month: "Week 5-6", title: "Paid Social Ads", topics: ["Facebook Ads Manager", "Instagram Campaigns", "LinkedIn Ads", "Audience Targeting"] },
    { month: "Week 7-8", title: "Analytics & Growth", topics: ["Insights & Reporting", "A/B Testing Ads", "Influencer Outreach", "Community Management"] },
  ],
  ctaTitle: "Ready to Master Social Media Marketing?",
});

export const emailMarketingTrainingData = makeTrainingData({
  heroTitle: "Email Marketing Training in Bengaluru",
  heroSubtitle: "Learn to build email lists, design campaigns, automate sequences, and measure ROI with industry-leading tools.",
  aboutTitle: "Email Marketing Program — Build & Convert Your Audience",
  about1: "Our Email Marketing training covers list building, campaign design, automation workflows, A/B testing, and deliverability best practices.",
  duration: "1 Month", courseLabel: "Email Marketing",
  frontEnd: ["List Building", "Email Design", "Subject Line Optimization", "Personalization", "Segmentation", "Campaign Scheduling"],
  backEnd: ["Automation Workflows", "Drip Campaigns", "A/B Testing", "Deliverability", "Spam Filters", "Analytics"],
  database: ["Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign"],
  tools: ["Mailchimp", "Canva", "Google Analytics", "ActiveCampaign", "HubSpot"],
  months: [
    { month: "Week 1", title: "Email Fundamentals", topics: ["List Building Strategies", "Email Design Principles", "Subject Lines & Preheaders", "CAN-SPAM Compliance"] },
    { month: "Week 2", title: "Campaign Creation", topics: ["Template Design", "Personalization & Segmentation", "Automation Workflows", "A/B Testing"] },
    { month: "Week 3", title: "Deliverability & Analytics", topics: ["Spam Score Management", "Open Rate Optimization", "Click-Through Rates", "ROI Measurement"] },
    { month: "Week 4", title: "Live Campaign", topics: ["Real Campaign Execution", "Drip Sequence Setup", "Analytics Review", "Optimization Strategy"] },
  ],
  ctaTitle: "Ready to Master Email Marketing?",
});

export const contentMarketingTrainingData = makeTrainingData({
  heroTitle: "Content Marketing Training in Bengaluru",
  heroSubtitle: "Master blogging, SEO writing, social media copy, and content strategy to attract and convert audiences organically.",
  aboutTitle: "Content Marketing Program — Write, Rank, and Convert",
  about1: "Our Content Marketing training teaches you how to create compelling content that ranks, engages, and converts. You'll build a real content portfolio.",
  duration: "2 Months", courseLabel: "Content Marketing",
  frontEnd: ["Blog Writing", "SEO Copywriting", "Social Media Copy", "Email Copy", "Landing Page Copy", "Headline Writing"],
  backEnd: ["Content Strategy", "Editorial Calendar", "Content Distribution", "Repurposing Content", "Audience Research", "Analytics"],
  database: ["Google Analytics", "SEMrush", "BuzzSumo", "Ahrefs"],
  tools: ["WordPress", "Canva", "Grammarly", "SEMrush", "Notion"],
  months: [
    { month: "Week 1-2", title: "Content Fundamentals", topics: ["Audience Research", "Content Strategy", "Blog Writing", "SEO Copywriting"] },
    { month: "Week 3-4", title: "Multi-Channel Content", topics: ["Social Media Copy", "Email Newsletters", "Video Scripts", "Infographic Content"] },
    { month: "Week 5-6", title: "Distribution & Promotion", topics: ["Content Distribution Channels", "Guest Blogging", "Social Shares", "Email Promotion"] },
    { month: "Week 7-8", title: "Analytics & Portfolio", topics: ["Content Analytics", "Performance Reporting", "Portfolio Building", "Freelance Strategy"] },
  ],
  ctaTitle: "Ready to Master Content Marketing?",
});

// ── Software Training ──
export const webDevReactTrainingData = makeTrainingData({
  heroTitle: "Web Design & Development (React) Training in Bengaluru",
  heroSubtitle: "Master HTML, CSS, JavaScript, and React.js with live projects. Build production-ready websites and get placed.",
  aboutTitle: "Web Development (React) Program — Build Real Apps",
  about1: "Our React training covers everything from foundations to advanced state management, API integration, and deployment. You'll ship real applications.",
  duration: "4 Months", courseLabel: "Web Design & Development (React)",
  frontEnd: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "React Router", "Redux Toolkit", "Tailwind / Bootstrap"],
  backEnd: ["REST API Consumption", "Axios & Fetch", "Authentication", "Environment Variables", "Deployment (Vercel/Netlify)", "Git Workflow"],
  database: ["Firebase", "MySQL", "MongoDB"],
  tools: ["VS Code", "Git / GitHub", "Vercel", "Postman", "Chrome DevTools"],
  months: [
    { month: "Month 1", title: "HTML, CSS & JS", topics: ["HTML5 Semantics", "CSS3 & Flexbox/Grid", "JavaScript Fundamentals", "DOM Manipulation"] },
    { month: "Month 2", title: "React Fundamentals", topics: ["React Components", "State & Props", "React Hooks", "React Router"] },
    { month: "Month 3", title: "Advanced React", topics: ["Redux Toolkit", "Context API", "API Integration", "Authentication"] },
    { month: "Month 4", title: "Projects & Placement", topics: ["Live Project Build", "Deployment", "Portfolio Review", "Mock Interviews"] },
  ],
  ctaTitle: "Ready to Master React Development?",
});

export const javaTrainingData = makeTrainingData({
  heroTitle: "Java Programming Training in Bengaluru",
  heroSubtitle: "Master Core Java, OOP, Spring Boot, and REST APIs. Build enterprise-grade applications and get placed in top companies.",
  aboutTitle: "Java Training Program — From Core to Spring Boot",
  about1: "Our Java training covers Core Java, JDBC, Spring Framework, Spring Boot, and Microservices. You'll build production-ready backend applications.",
  duration: "4 Months", courseLabel: "Java Training",
  frontEnd: ["Core Java", "OOP Concepts", "Collections", "Exception Handling", "Multithreading", "Java 8 Features"],
  backEnd: ["Spring Framework", "Spring Boot", "REST API Design", "JDBC & JPA", "Hibernate", "Microservices Basics"],
  database: ["MySQL", "PostgreSQL", "Hibernate ORM"],
  tools: ["IntelliJ IDEA", "Eclipse", "Maven / Gradle", "Postman", "Git / GitHub"],
  months: [
    { month: "Month 1", title: "Core Java", topics: ["OOP Principles", "Collections Framework", "Exception Handling", "Multithreading"] },
    { month: "Month 2", title: "Java Advanced", topics: ["Java 8 Streams & Lambdas", "JDBC", "Design Patterns", "File I/O"] },
    { month: "Month 3", title: "Spring Framework", topics: ["Spring Core & IoC", "Spring MVC", "Spring Data JPA", "Hibernate"] },
    { month: "Month 4", title: "Spring Boot & Projects", topics: ["Spring Boot REST APIs", "Microservices Intro", "Live Project", "Mock Interviews"] },
  ],
  ctaTitle: "Ready to Master Java Development?",
});

export const pythonTrainingData = makeTrainingData({
  heroTitle: "Python Programming Training in Bengaluru",
  heroSubtitle: "Learn Python from scratch — scripting, Django, data science, and automation. Get job-ready in 4 months.",
  aboutTitle: "Python Training Program — Scripting to Full Stack",
  about1: "Our Python training covers core Python, Django web framework, data science basics, and automation. You'll build real projects across multiple domains.",
  duration: "4 Months", courseLabel: "Python Training",
  frontEnd: ["Python Basics", "OOP in Python", "File Handling", "Web Scraping", "Flask Basics", "Django Templates"],
  backEnd: ["Django Framework", "Django REST Framework", "APIs", "Authentication", "Database ORM", "Automation Scripts"],
  database: ["SQLite", "PostgreSQL", "MySQL", "pandas & NumPy"],
  tools: ["PyCharm", "VS Code", "Jupyter Notebook", "Postman", "Git / GitHub"],
  months: [
    { month: "Month 1", title: "Python Fundamentals", topics: ["Syntax & Data Types", "Functions & Modules", "OOP Concepts", "File I/O"] },
    { month: "Month 2", title: "Web Development", topics: ["Flask Basics", "Django Setup", "Templates & Views", "Django ORM"] },
    { month: "Month 3", title: "REST APIs & Data", topics: ["Django REST Framework", "Authentication", "pandas Basics", "Automation Scripts"] },
    { month: "Month 4", title: "Projects & Career", topics: ["Live Django Project", "Data Science Intro", "Portfolio Building", "Mock Interviews"] },
  ],
  ctaTitle: "Ready to Master Python?",
});

export const mobileAppTrainingData = makeTrainingData({
  heroTitle: "Android & iOS App Development Training in Bengaluru",
  heroSubtitle: "Build cross-platform mobile apps with React Native. Publish to Google Play & App Store. Get placed in top companies.",
  aboutTitle: "Mobile App Development Program — React Native Focus",
  about1: "Our Android & iOS training covers React Native from scratch, including navigation, state management, Firebase, and app publishing workflows.",
  duration: "4 Months", courseLabel: "Android & iOS Training",
  frontEnd: ["React Native Setup", "JSX & Styling", "Navigation (React Navigation)", "State Management", "Animations", "UI Component Libraries"],
  backEnd: ["Firebase Auth", "Firestore Database", "REST API Integration", "Push Notifications", "App Storage", "Debugging & Testing"],
  database: ["Firebase Firestore", "SQLite", "AsyncStorage"],
  tools: ["Expo", "Android Studio", "Xcode", "VS Code", "Firebase Console"],
  months: [
    { month: "Month 1", title: "React Native Basics", topics: ["Setup & Expo CLI", "JSX Styling", "Core Components", "Navigation Basics"] },
    { month: "Month 2", title: "State & APIs", topics: ["Redux / Context API", "REST API Calls", "Async Storage", "Forms & Validation"] },
    { month: "Month 3", title: "Backend & Firebase", topics: ["Firebase Auth", "Firestore CRUD", "Push Notifications", "Image Uploads"] },
    { month: "Month 4", title: "Publish & Career", topics: ["App Store Submission", "Google Play Publishing", "Live App Project", "Mock Interviews"] },
  ],
  ctaTitle: "Ready to Build Mobile Apps?",
});

export const softwareTestingTrainingData = makeTrainingData({
  heroTitle: "Manual & Automation Testing Training in Bengaluru",
  heroSubtitle: "Master software testing with Selenium, JIRA, and Postman. Get certified as a QA Analyst and start your testing career.",
  aboutTitle: "Software Testing Program — Manual & Automation QA",
  about1: "Our testing training covers SDLC, test planning, manual testing, Selenium WebDriver, API testing with Postman, and CI/CD integration.",
  duration: "3 Months", courseLabel: "Manual & Automation Testing",
  frontEnd: ["SDLC & STLC", "Test Case Writing", "Functional Testing", "Regression Testing", "Bug Reporting", "Boundary Value Analysis"],
  backEnd: ["Selenium WebDriver", "Java for Selenium", "TestNG Framework", "API Testing with Postman", "CI/CD Integration", "Performance Testing Basics"],
  database: ["JIRA", "TestRail", "MySQL (query testing)"],
  tools: ["Selenium", "Postman", "JIRA", "TestNG", "Eclipse / IntelliJ"],
  months: [
    { month: "Month 1", title: "Manual Testing", topics: ["SDLC & STLC", "Test Case Design", "Bug Life Cycle", "JIRA Basics"] },
    { month: "Month 2", title: "Automation Basics", topics: ["Java for Testing", "Selenium WebDriver", "TestNG Annotations", "Page Object Model"] },
    { month: "Month 3", title: "Advanced & Projects", topics: ["API Testing with Postman", "CI/CD Pipeline Basics", "Live Project Testing", "Mock Interviews"] },
  ],
  ctaTitle: "Ready to Start Your QA Career?",
});

// ── Animation Training ──
export const graphicDesigningTrainingData = makeTrainingData({
  heroTitle: "Graphic Designing Training in Bengaluru",
  heroSubtitle: "Master Photoshop, Illustrator, and Canva to create stunning visuals. Build a professional portfolio and get hired.",
  aboutTitle: "Graphic Design Program — Visual Communication Mastery",
  about1: "Our Graphic Design training covers branding, logo design, social media creatives, print layouts, and UI assets using industry-standard Adobe tools.",
  duration: "2 Months", courseLabel: "Graphic Designing",
  frontEnd: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Typography Design", "Color Theory", "Logo Design"],
  backEnd: ["Brand Identity", "Print Design", "Social Media Creatives", "Mockup Design", "Portfolio Building", "Client Presentation"],
  database: ["Adobe Creative Cloud", "Canva Pro", "Font Awesome", "Unsplash"],
  tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "CorelDraw"],
  months: [
    { month: "Week 1-2", title: "Design Fundamentals", topics: ["Color Theory", "Typography", "Composition", "Adobe Photoshop Basics"] },
    { month: "Week 3-4", title: "Vector & Branding", topics: ["Adobe Illustrator", "Logo Design", "Brand Identity", "Iconography"] },
    { month: "Week 5-6", title: "Applied Design", topics: ["Social Media Creatives", "Print Design", "Packaging", "Mockup Presentation"] },
    { month: "Week 7-8", title: "Portfolio & Career", topics: ["Portfolio Building", "Freelancing Guide", "Client Communication", "Design Pricing"] },
  ],
  ctaTitle: "Ready to Become a Graphic Designer?",
});

export const twoDAnimationTrainingData = makeTrainingData({
  heroTitle: "2D Animation Training in Bengaluru",
  heroSubtitle: "Create stunning 2D characters, explainer videos, and motion graphics using Adobe Animate and After Effects.",
  aboutTitle: "2D Animation Program — From Storyboard to Screen",
  about1: "Our 2D Animation training covers frame-by-frame animation, rigging, character design, explainer video production, and motion graphics principles.",
  duration: "3 Months", courseLabel: "2D Animation",
  frontEnd: ["Adobe Animate", "Character Design", "Storyboarding", "Frame-by-Frame Animation", "Rigging Basics", "Lip Sync"],
  backEnd: ["After Effects", "Motion Graphics", "Compositing", "Sound Sync", "Exporting Formats", "Client Workflows"],
  database: ["Adobe Creative Cloud", "Lottie", "Motion Array"],
  tools: ["Adobe Animate", "Adobe After Effects", "Audition", "Premiere Pro", "Photoshop"],
  months: [
    { month: "Month 1", title: "Design & Storyboard", topics: ["Character Design", "Storyboarding", "Color & Style", "Adobe Animate Basics"] },
    { month: "Month 2", title: "Animation Principles", topics: ["12 Principles of Animation", "Rigging", "Frame-by-Frame", "Walk Cycles"] },
    { month: "Month 3", title: "Production & Export", topics: ["After Effects Basics", "Motion Graphics", "Sound Sync", "Final Project"] },
  ],
  ctaTitle: "Ready to Create 2D Animations?",
});

export const threeDAnimationTrainingData = makeTrainingData({
  heroTitle: "3D Animation Training in Bengaluru",
  heroSubtitle: "Learn Blender and Maya to model, rig, and animate 3D characters and environments for games, film, and advertising.",
  aboutTitle: "3D Animation Program — Modeling to Rendering",
  about1: "Our 3D Animation training covers 3D modeling, texturing, rigging, animation, lighting, and rendering using Blender and industry workflows.",
  duration: "4 Months", courseLabel: "3D Animation",
  frontEnd: ["Blender Basics", "3D Modeling", "Texturing & UV Mapping", "Lighting Setup", "Camera Work", "Character Design"],
  backEnd: ["Rigging & Skinning", "3D Animation Principles", "Rendering (Cycles/EEVEE)", "VFX Basics", "Game Asset Export", "Scene Composition"],
  database: ["Blender", "Substance Painter", "Unreal Engine Import"],
  tools: ["Blender", "Adobe Premiere Pro", "After Effects", "Substance Painter"],
  months: [
    { month: "Month 1", title: "3D Fundamentals", topics: ["Blender UI", "Basic Modeling", "Modifiers", "Topology Basics"] },
    { month: "Month 2", title: "Materials & Lighting", topics: ["Texturing & UV", "PBR Materials", "Lighting Setup", "HDRI Environments"] },
    { month: "Month 3", title: "Rigging & Animation", topics: ["Character Rigging", "Weight Painting", "Keyframe Animation", "Graph Editor"] },
    { month: "Month 4", title: "Rendering & Portfolio", topics: ["Cycles Rendering", "Compositing", "Final Animation Project", "Portfolio Presentation"] },
  ],
  ctaTitle: "Ready to Master 3D Animation?",
});

export const motionGraphicsTrainingData = makeTrainingData({
  heroTitle: "Motion Graphics Training in Bengaluru",
  heroSubtitle: "Create stunning animated logos, lower thirds, title sequences, and motion design using Adobe After Effects.",
  aboutTitle: "Motion Graphics Program — Animate Everything",
  about1: "Our Motion Graphics training covers After Effects from scratch, including keyframing, expressions, shape animations, and advanced compositing techniques.",
  duration: "2 Months", courseLabel: "Motion Graphics",
  frontEnd: ["After Effects Basics", "Keyframing", "Shape Layer Animation", "Text Animation", "Transitions", "Logo Animation"],
  backEnd: ["Expressions & Scripts", "Motion Blur", "Compositing", "3D Layers", "Plugin Workflows", "Export Settings"],
  database: ["Adobe Creative Cloud", "Motion Array", "Envato Elements"],
  tools: ["Adobe After Effects", "Premiere Pro", "Illustrator", "Photoshop", "Lottie"],
  months: [
    { month: "Week 1-2", title: "After Effects Basics", topics: ["Interface & Workflow", "Keyframes & Easing", "Shape Layers", "Text Animation"] },
    { month: "Week 3-4", title: "Advanced Motion", topics: ["Expressions Basics", "Motion Blur", "Logo Animation", "3D Layers"] },
    { month: "Week 5-6", title: "Compositing & FX", topics: ["Green Screen", "Particle Effects", "Track Mattes", "Plugin Workflows"] },
    { month: "Week 7-8", title: "Showreel & Career", topics: ["Client Projects", "Showreel Production", "Freelancing Tips", "Portfolio Review"] },
  ],
  ctaTitle: "Ready to Master Motion Graphics?",
});

export const videoEditingTrainingData = makeTrainingData({
  heroTitle: "Video Editing & VFX Training in Bengaluru",
  heroSubtitle: "Master Adobe Premiere Pro, After Effects VFX, and color grading. Become a professional video editor for films, YouTube, and brands.",
  aboutTitle: "Video Editing & VFX Program — Cut to Perfection",
  about1: "Our Video Editing training covers timeline editing, color grading, audio mixing, VFX compositing, and delivery for multiple platforms.",
  duration: "3 Months", courseLabel: "Video Editing & VFX",
  frontEnd: ["Adobe Premiere Pro", "Timeline Editing", "Cuts & Transitions", "Audio Sync", "Color Correction", "Titles & Graphics"],
  backEnd: ["After Effects VFX", "Color Grading (DaVinci)", "Green Screen Keying", "Sound Design", "Multi-cam Editing", "Export Workflows"],
  database: ["Adobe Creative Cloud", "DaVinci Resolve", "YouTube Studio"],
  tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Media Encoder"],
  months: [
    { month: "Month 1", title: "Premiere Pro Basics", topics: ["Import & Timeline", "Cuts & Transitions", "Audio Mixing", "Basic Color"] },
    { month: "Month 2", title: "Advanced Editing", topics: ["Multi-cam Editing", "Motion Titles", "Color Grading (LUTs)", "Storytelling Techniques"] },
    { month: "Month 3", title: "VFX & Delivery", topics: ["After Effects VFX", "Green Screen Keying", "DaVinci Resolve", "YouTube & Client Delivery"] },
  ],
  ctaTitle: "Ready to Master Video Editing?",
});

export const explainerVideoTrainingData = makeTrainingData({
  heroTitle: "Explainer Video Training in Bengaluru",
  heroSubtitle: "Create compelling explainer videos for startups, apps, and marketing campaigns using animation and screen recording tools.",
  aboutTitle: "Explainer Video Program — Script to Screen",
  about1: "Our Explainer Video training covers scriptwriting, voiceover, whiteboard animation, screen recording, and delivery for business clients.",
  duration: "2 Months", courseLabel: "Explainer Videos",
  frontEnd: ["Scriptwriting", "Storyboarding", "Whiteboard Animation", "Screen Recording", "Voiceover Recording", "Slide Animation"],
  backEnd: ["Video Production Workflow", "Sound Design", "Client Brief Management", "Brand Consistency", "Export Formats", "Delivery Packages"],
  database: ["Canva", "Adobe After Effects", "Powtoon", "Loom"],
  tools: ["Powtoon", "Adobe After Effects", "Camtasia", "Audition", "OBS Studio"],
  months: [
    { month: "Week 1-2", title: "Script & Story", topics: ["Scriptwriting for Video", "Storyboarding", "Voice & Tone", "Audience Research"] },
    { month: "Week 3-4", title: "Production", topics: ["Whiteboard Animation", "Screen Recording", "Voiceover Recording", "Music & SFX"] },
    { month: "Week 5-6", title: "Post-Production", topics: ["Editing & Sync", "Motion Text", "Color Correction", "Final Export"] },
    { month: "Week 7-8", title: "Client Projects", topics: ["Real Client Brief", "Revisions Workflow", "Delivery Standards", "Freelance Pricing"] },
  ],
  ctaTitle: "Ready to Create Explainer Videos?",
});

import { customWebDevLocationContent } from "./locationCustomContentDB";
import { customDigitalMarketingLocationContent } from "./locationDigitalMarketingContentDB";

// Detailed location groupings
export const bangaloreLocalities = [
  "Marathahalli", "Koramangala", "Indiranagar", "Electronic City", "Whitefield",
  "Jayanagar", "HSR Layout", "Rajajinagar", "JP Nagar", "Yelahanka",
  "Bannerghatta Road", "Rt Nagar", "Chickpete", "Vijayanagar", "Hebbal",
  "BTM Layout", "Malleshwaram", "Yeshwanthpur", "Kaggadasapura", "Bellandur"
];

export const majorIndianCities = [
  "Bangalore", "Mumbai", "Chennai", "Delhi", "Hyderabad", "Pune", "Ahmedabad",
  "Kolkata", "Lucknow", "Jaipur", "Indore", "Kochi", "Coimbatore", "Nagpur",
  "Ludhiana", "Agra", "Surat", "Madurai", "Vadodara", "Meerut",
  "Thiruvananthapuram", "Nashik", "Gurgaon", "Noida", "Chandigarh",
  "Visakhapatnam", "Bhopal", "Patna", "Ghaziabad"
];

export const globalCities = [
  "India (Asia)", "USA", "UK", "Canada", "Australia", "Germany", "UAE (Middle East)",
  "Singapore", "Japan", "Netherlands", "France", "Switzerland", "Sweden",
  "Norway", "South Korea", "Israel", "Ireland", "New Zealand", "South Africa", "Brazil"
];

export const serviceTypes = {
  WEBSITE_DEVELOPMENT: "Website Development Services",
  DIGITAL_MARKETING: "Digital Marketing Services",
  ANIMATION_VIDEO: "Animation & Video Services",
  SOFTWARE_DEVELOPMENT: "Software Development Services"
};

// --- SECTION DATA ---

export const softwareDevServices = [
  { icon: "💻", title: "Custom Software Solutions", desc: "Bespoke software tailored for your complex business requirements.", tags: ["Custom", "Scalable", "Robust"] },
  { icon: "⚙️", title: "Enterprise Application Development", desc: "Large scale applications designed to handle high transaction volumes securely.", tags: ["Enterprise", "B2B", "Secure"] },
  { icon: "🔄", title: "Software Integration & API", desc: "Seamless integraton mapping with existing platforms to eliminate data silos.", tags: ["REST API", "GraphQL", "Microservices"] },
  { icon: "☁️", title: "SaaS Development", desc: "End-to-end multi-tenant architecture to launch your Software as a Service.", tags: ["SaaS", "Cloud Native", "Subscription"] },
  { icon: "🛠️", title: "Legacy System Modernization", desc: "Upgrade and migrate your old architectures to modern tech stacks effortlessly.", tags: ["Migration", "Modernization", "Upgrade"] },
  { icon: "🛡️", title: "Software Testing & QA", desc: "Comprehensive manual and automated testing guaranteeing bug-free deployments.", tags: ["Jest", "Selenium", "QA"] }
];

export const webDevServices = [
  { icon: "🎨", title: "UI / UX Design", desc: "Human-centered design that converts. Wireframes, prototypes and pixel-perfect interfaces.", tags: ["Figma", "Prototyping", "User Research"] },
  { icon: "💻", title: "Web Design & Development", desc: "Responsive, SEO-ready websites built with modern stacks for the local market.", tags: ["React", "Next.js", "Node.js"] },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform iOS & Android apps that delight users and drive engagement.", tags: ["Flutter", "React Native", "Swift"] },
  { icon: "⚙️", title: "Custom Application Development", desc: "Bespoke software for your business workflows. Scalable, secure and maintainable.", tags: ["Python", "Java", "Microservices"] },
  { icon: "☁️", title: "Cloud-Based Development", desc: "Build, deploy and scale on AWS, Azure or GCP with cloud-native architecture.", tags: ["AWS", "Azure", "GCP", "K8s"] },
  { icon: "🛒", title: "Ecommerce Development", desc: "High-converting online stores with payment gateways and seamless checkout.", tags: ["Shopify", "Magento", "WooCommerce"] }
];

export const digitalMarketingServices = [
  { icon: "🔍", title: "Search Engine Optimization", desc: "Dominating search rankings in your locality through technical SEO and quality content.", tags: ["Keyword Research", "On-Page", "Backlinks"] },
  { icon: "📈", title: "Pay-Per-Click (PPC)", desc: "High-ROI ad campaigns on Google and Social Media to jumpstart your local traffic.", tags: ["Google Ads", "Retargeting", "Conversion Tracking"] },
  { icon: "📱", title: "Social Media Marketing", desc: "Building brand loyalty and community engagement across major social platforms.", tags: ["Instagram", "LinkedIn", "Facebook"] },
  { icon: "📧", title: "Email & Automation", desc: "Nurturing leads and retaining customers through personalized automated sequences.", tags: ["Mailchimp", "Klaviyo", "CRM"] },
  { icon: "✍️", title: "Content Marketing", desc: "Engaging storytelling that establishes your brand as an authority in your industry.", tags: ["Blogging", "Video Content", "Copywriting"] },
  { icon: "📊", title: "Performance Analytics", desc: "Data-driven insights to optimize every aspect of your digital marketing funnel.", tags: ["GA4", "GTM", "Data Studio"] }
];

export const animationVideoServices = [
  { icon: "🎬", title: "2D & 3D Animation", desc: "High-end character animation and visual storytelling for brands in the local market.", tags: ["Character Design", "Storyboarding", "CGI"] },
  { icon: "💎", title: "Motion Graphics", desc: "Sophisticated visual effects and typography-driven content that captures attention.", tags: ["After Effects", "Cinema 4D", "Brand Identity"] },
  { icon: "📺", title: "Explainer Videos", desc: "Simplifying complex concepts through engaging and conversion-focused video content.", tags: ["Scriptwriting", "Voiceover", "2D Motion"] },
  { icon: "🎥", title: "Video Production & Editing", desc: "Professional cinematic production and post-production for corporate and social media.", tags: ["Premiere Pro", "Color Grading", "Sound Design"] },
  { icon: "✨", title: "VFX & Compositing", desc: "Advanced visual effects and seamless integration for a premium cinematic feel.", tags: ["Nuke", "Houdini", "Green Screen"] },
  { icon: "📱", title: "Social Media Video Content", desc: "Short-form vertical video strategies designed for maximum engagement on TikTok and Reels.", tags: ["Reels", "Shorts", "Viral Content"] }
];

export const commonProcess = [
  { number: "01", title: "Strategy & Discovery", desc: "We deep dive into your business goals and local market dynamics." },
  { number: "02", title: "Planning & Design", desc: "Crafting the blueprint and visual identity of your digital solution." },
  { number: "03", title: "Agile Development", desc: "Building your project with precision through iterative development cycles." },
  { number: "04", title: "Testing & QA", desc: "Rigorous quality checks to ensure a bug-free, high-performance launch." },
  { number: "05", title: "Deployment & Growth", desc: "Launching your project and implementing growth-focused strategies." }
];

export const softwareDevTech = [
  { name: "Java & Spring Boot", icon: "☕" },
  { name: "C# & .NET Core", icon: "💎" },
  { name: "Python & FastAPI", icon: "🐍" },
  { name: "Go & Microservices", icon: "🐹" },
  { name: "AWS & Docker", icon: "☁️" },
  { name: "Redis & Kafka", icon: "⚡" }
];

export const webDevTech = [
  { name: "React & Next.js", icon: "⚛️" },
  { name: "Node.js & Express", icon: "🟢" },
  { name: "Python & Django", icon: "🐍" },
  { name: "AWS & Azure", icon: "☁️" },
  { name: "PostgreSQL & MongoDB", icon: "🗄️" },
  { name: "Docker & Kubernetes", icon: "🐳" }
];

export const digitalMarketingTech = [
  { name: "Google Analytics 4", icon: "📊" },
  { name: "Search Console", icon: "🔍" },
  { name: "SEMrush & Ahrefs", icon: "📈" },
  { name: "Meta Business Suite", icon: "📱" },
  { name: "HubSpot CRM", icon: "🤝" },
  { name: "Canva & Adobe CC", icon: "🎨" }
];

export const animationVideoTech = [
  { name: "Adobe After Effects", icon: "💎" },
  { name: "Cinema 4D & Blender", icon: "🌀" },
  { name: "Audodesk Maya", icon: "🦖" },
  { name: "Adobe Premiere Pro", icon: "🎬" },
  { name: "DaVinci Resolve", icon: "🎨" },
  { name: "Unreal Engine 5", icon: "🎮" }
];

export const industries = [
  { name: "Fintech", icon: "💰" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Edtech", icon: "🎓" },
  { name: "Retail", icon: "🛒" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Logistics", icon: "🚚" },
  { name: "Travel", icon: "✈️" },
  { name: "Media", icon: "🎬" }
];

// --- CONTENT GENERATOR ---

export const getContentForLocation = (location, serviceType, mode = "service", dynamicServiceName = "") => {
  const isWebDev = serviceType === serviceTypes.WEBSITE_DEVELOPMENT;
  const isDigitalMarketing = serviceType === serviceTypes.DIGITAL_MARKETING;
  const isAnimation = serviceType === serviceTypes.ANIMATION_VIDEO;
  const isSoftwareDev = serviceType === serviceTypes.SOFTWARE_DEVELOPMENT;
  const isTraining = mode === "training";
  const cleanLocation = location.replace(/ \(.*\)/, "");

  // Determine location group
  let locationGroup = "bangalore";
  if (majorIndianCities.includes(cleanLocation)) {
    locationGroup = "india";
  } else if (globalCities.some(city => city.includes(cleanLocation))) {
    locationGroup = "global";
  }

  // Dynamic Content Data specific to grouping
  const groupContent = {
    bangalore: {
      service: {
        intros: [
          `As a premier agency in ${cleanLocation}, we bring hyper-local digital expertise to Bangalore's fast-paced market.`,
          `Empower your ${cleanLocation}-based business with our cutting-edge tech solutions tailored for Bangalore's ecosystem.`,
          `From startups to enterprises in ${cleanLocation}, we deliver tech that drives Bangalore's digital transformation.`,
          `Operating locally in ${cleanLocation}, we understand exactly what it takes to succeed in Bangalore's competitive landscape.`,
          `We are proud to partner with businesses in ${cleanLocation}, delivering high-performance solutions right at your doorstep.`
        ],
        values: [
          `We focus on key performance indicators (KPIs) that matter to your ${cleanLocation} business—whether it's increased footfall, higher quality leads, or direct online sales.`,
          `Our strategies for ${cleanLocation} are built on a foundation of deep data analysis and localized Bangalore market insights.`,
          `By combining technical prowess with a deep understanding of the Bangalore ecosystem, we deliver results that last.`,
          `In the bustling market of ${cleanLocation}, a generic approach simply won't suffice; we provide bespoke strategies designed specifically for your target demographic.`,
          `Our local expertise in ${cleanLocation} coupled with our global standards makes us the ideal partner for your long-term digital growth.`
        ]
      },
      training: {
        intros: [
          `Launch your tech career in ${cleanLocation} with our industry-leading training right in the heart of Bangalore.`,
          `Master high-demand skills in ${cleanLocation} with practical, hands-on sessions tailored for Bangalore's IT hub.`,
          `Our ${cleanLocation} training center brings top-tier tech education directly to Bangalore's aspiring professionals.`,
          `Gain an edge in Bangalore's job market equipped with advanced certifications from our ${cleanLocation} campus.`,
          `Learn directly from industry experts in ${cleanLocation} to build a successful career in Bangalore's tech industry.`
        ],
        values: [
          `We focus on industry-relevant skills that matter in the Bangalore job market—ensuring you're project-ready from day one.`,
          `Our training programs in ${cleanLocation} are built on real-world case studies and live projects, giving you the edge in interviews.`,
          `By combining technical theory with deep practical experience in the Bangalore IT ecosystem, we build career-ready professionals.`,
          `In the competitive job market of ${cleanLocation}, generic learning isn't enough; we provide bespoke mentorship designed for your career goals.`,
          `Our local placement network in ${cleanLocation} coupled with global standards makes us the ideal career partner.`
        ]
      }
    },
    india: {
      service: {
        intros: [
          `Ready to scale your business in ${cleanLocation}? We provide world-class digital strategies built perfectly for the diverse Indian market.`,
          `We empower ambitious enterprises in ${cleanLocation} with robust tech infrastructures that drive pan-India growth and visibility.`,
          `Bring exceptional software and digital standards to ${cleanLocation} with our tailored, national-level marketing solutions.`,
          `As ${cleanLocation} continues accelerating as a premier destination for business, we provide the digital tools to keep you ahead.`,
          `Transforming the tech landscape across India, we deliver bespoke, innovative digital experiences exclusively for ${cleanLocation}.`
        ],
        values: [
          `We focus on key metrics that fuel your success in the dynamic ${cleanLocation} market, optimizing heavily for high ROI.`,
          `Our top-tier strategies for ${cleanLocation} rely on deep industry research and extensive Indian market insights.`,
          `Seamlessly combining technical prowess with a nuanced understanding of ${cleanLocation}'s economy, we ensure sustainable operations.`,
          `A generic approach won't work in ${cleanLocation}; we map out personalized strategies addressing India's rapidly evolving consumer base.`,
          `Scale steadily with our experienced team acting as your reliable technology and growth partner in ${cleanLocation}.`
        ]
      },
      training: {
        intros: [
          `Elevate your career in ${cleanLocation} with our nationally recognized, highly competitive technical certification programs.`,
          `Join a rapidly growing community of elite tech professionals in ${cleanLocation} backed by our comprehensive training courses.`,
          `Bringing premium quality tech education all the way to ${cleanLocation}, preparing you for top IT roles across India.`,
          `Completely transform your skill set in ${cleanLocation} with our expert-led, robust project-based training methodologies.`,
          `Our specialized educational programs in ${cleanLocation} are carefully designed to make you instantly industry-ready for India's top tech firms.`
        ],
        values: [
          `Acquire critical skill sets specifically aligned with what top recruiters and startups in the ${cleanLocation} job market demand.`,
          `Tackle complex national challenges through hands-on case studies built into our ${cleanLocation} curriculum.`,
          `Achieve mastery by combining proven fundamental theory with high-paced intensive learning directly in ${cleanLocation}.`,
          `Unlock personalized mentorship tracks in ${cleanLocation} that prepare you gracefully for high-stakes interviews.`,
          `A robust pan-India placement network effectively positions our ${cleanLocation} graduates directly into renowned tech firms.`
        ]
      }
    },
    global: {
      service: {
        intros: [
          `Delivering undeniable excellence to ${cleanLocation}, we build robust digital solutions designed specifically to meet rigorous international standards.`,
          `Dramatically empower your global operations in ${cleanLocation} with our world-class software development expertise and rapid scaling capability.`,
          `We partner seamlessly with international enterprises in ${cleanLocation} to provide scalable, high-quality, and reliable modern digital architectures.`,
          `Masterfully bridging the gap between diverse worldwide markets, our cutting-edge tech solutions for ${cleanLocation} are crafted for international success.`,
          `From cross-cultural UX design to massively resilient backends, we are excited to bring top-tier tech innovation directly to ${cleanLocation}.`
        ],
        values: [
          `Surpass expected international quality benchmarks in ${cleanLocation} through targeted optimizations that guarantee seamless customer adoption.`,
          `Leverage our profound global market insights to ensure your campaigns resonate meaningfully with the diverse audiences of ${cleanLocation}.`,
          `Implement deeply integrated digital ecosystems in ${cleanLocation} that perfectly balance top-tier performance with exceptional cross-border reliability.`,
          `Achieve localized success with globally competitive models specifically deployed for the demanding ${cleanLocation} market demographic.`,
          `Our dedicated international team gives your ${cleanLocation} business non-stop momentum with an uncompromising standard for digital growth.`
        ]
      },
      training: {
        intros: [
          `Achieve highly sought-after global certifications right in ${cleanLocation} with our rigorous, international standard tech training programs.`,
          `Carefully prepare to enter the worldwide job market confidently from ${cleanLocation} through our industry-expert-led remote and hybrid courses.`,
          `We are fiercely dedicated to bringing cutting-edge global tech education to ${cleanLocation}, dramatically bridging the international skills gap.`,
          `Connect directly with an international network of talented professionals through our premier technical training modules heavily focused on ${cleanLocation}.`,
          `Master exactly the same cutting-edge technologies that drive the world's most successful tech hubs, made available to you in ${cleanLocation}.`
        ],
        values: [
          `Stay globally competitive with our advanced ${cleanLocation} curriculum that seamlessly integrates the best tools currently trending globally.`,
          `Participate proactively in international level hackathons and real-time live projects via our comprehensive ${cleanLocation} training system.`,
          `We continuously bridge global standards down to the individual learner in ${cleanLocation}, ensuring completely future-proof technical profiles.`,
          `Unlock incredibly rewarding international career pathways as our ${cleanLocation} certifications act precisely as a recognized global passport.`,
          `Accelerate your growth exponentially via dedicated 1-on-1 mentorship with experts carefully selected from the leading top organizations around the world.`
        ]
      }
    }
  };

  const currentModeStr = isTraining ? "training" : "service";
  const { intros, values } = groupContent[locationGroup][currentModeStr];

  const randomIndex = cleanLocation.length % 5;
  const secondaryIndex = (cleanLocation.length + 2) % 5;

  const displayService = dynamicServiceName || serviceType;

  let title = "";
  if (isTraining) {
    if (isWebDev) title = `Advanced Software & ${displayService} Training in ${cleanLocation}`;
    else if (isDigitalMarketing) title = `Professional ${displayService} Training in ${cleanLocation}`;
    else if (isAnimation) title = `Master ${displayService} & VFX Training in ${cleanLocation}`;
  } else {
    if (isWebDev) title = `Premier ${displayService} in ${cleanLocation}`;
    else if (isDigitalMarketing) title = `Leading ${displayService} in ${cleanLocation}`;
    else if (isAnimation) title = `Top ${displayService} Production in ${cleanLocation}`;
  }

  const baseContent = {
    hero: {
      title,
      subtext: intros[randomIndex] + ` We specialize in ${isTraining ? "crafting educational pathways" : "crafting bespoke digital experiences"} that resonate with the ${locationGroup === "global" ? "global" : "local"} ${cleanLocation} ${isTraining ? "community" : "audience"} while adhering to premier standards.`,
      badge: `${cleanLocation}'s Choice for ${isTraining ? "Career" : "Digital"} Growth`
    },
    about: {
      title: `Why ${isTraining ? "Students" : "Businesses"} in ${cleanLocation} Choose Vihaan Innovations`,
      content: `${isTraining ? "" : "Operating in " + cleanLocation + " requires a partner who understands the distinct nuances. "}${values[randomIndex]} We don't just ${isTraining ? "teach tools" : "build systems"}; we engineer ${isTraining ? "career success" : "growth engines"}.`
    },
    seoContent: {
      heading: `${isTraining ? "Mastering Your Career" : "Scaling Your Business"} in ${cleanLocation}: The ${isTraining ? "Learning" : "Digital"} Advantage`,
      paragraphs: [
        `With the increasing ${isTraining ? "demand for skilled talent" : "digital penetration"} in ${cleanLocation}, ${isTraining ? "companies are actively looking for certified professionals" : "your target audience is searching for your services online"}. Our ${isTraining ? "professional training courses" : displayService.toLowerCase() + " solutions"} are designed to put you ${isTraining ? "ahead of the competition" : "right where your customers are"}.`,
        values[secondaryIndex],
        `Our approach is ${isTraining ? "mentorship-led" : "transparent"}, ROI-focused, and tailored to the unique challenges of the ${cleanLocation} market. We ensure ${isTraining ? "practical experience" : "zero plagiarism"} and human-centric ${isTraining ? "mentoring" : "content"} for better ${isTraining ? "career prospects" : "search rankings"}.`
      ]
    },
    services: isWebDev ? webDevServices : (isDigitalMarketing ? digitalMarketingServices : (isAnimation ? animationVideoServices : softwareDevServices)),
    process: commonProcess,
    techStack: isWebDev ? webDevTech : (isDigitalMarketing ? digitalMarketingTech : (isAnimation ? animationVideoTech : softwareDevTech)),
    industries: industries
  };

  if (isWebDev) {
    const customMatch = customWebDevLocationContent[cleanLocation.toLowerCase()];
    if (customMatch) {
      // Merge custom content with existing structures

      // Merge services with icons
      const customServicesCards = customMatch.services.cards.map((c, i) => {
        const baseService = webDevServices[i] || webDevServices[0];
        return {
          title: c.title,
          desc: c.desc,
          tags: baseService.tags,
          icon: baseService.icon
        };
      });

      // Process
      const customProcess = customMatch.process.steps.map((s, i) => {
        return {
          title: s.title,
          desc: s.desc
        };
      });

      return {
        ...baseContent,
        hero: {
          title: customMatch.hero.title,
          badge: customMatch.hero.badge,
          subtext: customMatch.hero.subtext
        },
        services: customServicesCards,
        customServicesHeaders: {
          title: customMatch.services.title
        },
        about: {
          title: customMatch.about.title,
          content: customMatch.about.description,
          features: customMatch.about.features,
          bullets: customMatch.about.bullets
        },
        seoContent: {
          heading: customMatch.seoContent.title,
          paragraphs: customMatch.seoContent.paragraphs,
          highlight: customMatch.seoContent.highlight,
          sidebar: customMatch.seoContent.sidebar
        },
        process: customProcess,
        customTestimonials: customMatch.testimonials
      };
    }
  } else if (isDigitalMarketing) {
    const customMatch = customDigitalMarketingLocationContent[cleanLocation.toLowerCase()];
    if (customMatch) {
      // Merge custom content with existing structures

      // Merge services with icons
      const customServicesCards = customMatch.services.cards.map((c, i) => {
        const baseService = digitalMarketingServices[i] || digitalMarketingServices[0];
        return {
          title: c.title,
          desc: c.desc,
          tags: baseService.tags,
          icon: baseService.icon
        };
      });

      // Process
      const customProcess = customMatch.process.steps.map((s, i) => {
        return {
          title: s.title,
          desc: s.desc
        };
      });

      return {
        ...baseContent,
        hero: {
          title: customMatch.hero.title,
          badge: customMatch.hero.badge,
          subtext: customMatch.hero.subtext,
          stats: customMatch.hero.stats
        },
        services: customServicesCards,
        customServicesHeaders: {
          title: customMatch.services.title,
          description: customMatch.services.description,
          badge: customMatch.services.badge
        },
        impact: customMatch.impact,
        about: {
          title: customMatch.about.title,
          content: customMatch.about.description,
          features: customMatch.about.features,
          bullets: customMatch.about.bullets,
          badge: customMatch.about.badge,
          checklist: customMatch.about.checklist
        },
        seoContent: {
          heading: customMatch.seoContent.title,
          paragraphs: customMatch.seoContent.paragraphs,
          highlight: customMatch.seoContent.highlight,
          sidebar: customMatch.seoContent.sidebar
        },
        process: {
          ...customMatch.process,
          steps: customProcess
        },
        techStack: customMatch.techStack,
        industries: customMatch.industries,
        customTestimonials: customMatch.testimonials
      };
    }
  }

  return baseContent;
};

export const allLocations = [
  ...bangaloreLocalities,
  ...majorIndianCities,
  ...globalCities
];

export const slugify = (text) =>
  text.toLowerCase()
    .replace(/ \(.*\)/, "") // Remove (Asia) etc
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")
    .replace(/-+/g, "-");

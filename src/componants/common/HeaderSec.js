import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Switch,
  Typography,
  Grid,
  styled,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
// import logo from "../../assets/vihaan-logo.png";
import logo from "../../assets/SN (1).894d8a0c22e4885edea1.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import img1 from "../../assets/img2.png"
import {
  ShoppingCart,
  Store,
  Utensils,
  BedDouble,
  LayoutGrid,
  Home,
  Building2,
  GraduationCap,
  HeartHandshake,
  Users2,
  Stethoscope,
  Car,
  BookOpen,
  Hotel,
  Bot,
  ArrowRight,
  Code2,
} from "lucide-react";

import {
  Palette,
  Layout,
  Smartphone,
  Code,
  Cloud,
  Workflow,
  Database,
  Boxes,
  LifeBuoy,
  Search,
  Share2,
  MonitorPlay,
  Mail,
  FileText,
  MapPin,
  Users,
  Image,
  Film,
  Video,
  Layers,
  PenTool,
  Edit3,
  Scissors,
  Type,
} from "lucide-react";

import {
  MonitorSmartphone,
  Laptop,
  Brain,
  BugPlay,
  Clapperboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubMenus, setMobileSubMenus] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileSubMenuToggle = (menuName) => {
    setMobileSubMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };
  const navigate = useNavigate();

  const menuItems = {
    // products: {
    //   "Own Products": [
    //     { label: "Ecommerce Single Vendor", href: "ecommerce-single-vendor" },
    //     { label: "Ecommerce Multi Vendor", href: "ecommerce-multi-vendor" },
    //     { label: "Food Booking", href: "food-booking" },
    //     { label: "Hostel Management", href: "hostel-management" },
    //     { label: "Listing Site", href: "listing-site" },
    //     { label: "Real Estate Portal", href: "real-estate-portal" },
    //     { label: "Real Estate CRM", href: "real-estate-crm" },
    //     { label: "Education CRM", href: "education-crm" },
    //   ],
    //   "Coming Soon(Under Development Stage)": [
    //     {
    //       label: "Matrimony (Coming Soon)",
    //       href: "matrimony",
    //     },
    //     {
    //       label: "HRM Software (Coming Soon)",
    //       href: "hrm-software",
    //     },
    //     {
    //       label: "Hospital Management (Coming Soon)",
    //       href: "hospital-management",
    //     },
    //     { label: "Cab Booking App (Coming Soon)", href: "cab-booking-app" },
    //     {
    //       label: "LMS (Learning Management System) (Coming Soon)",
    //       href: "learning-management-system",
    //     },
    //     { label: "Hotel Booking (Coming Soon)", href: "hotel-booking" },
    //     {
    //       label: "AI Chatbot / Support System (Coming Soon)",
    //       href: "ai-chatbot",
    //     },
    //   ],
    // },

    products: [
      {
        icon: ShoppingCart,
        title: "Ecommerce Single Vendor",
        description: "Single shop",
        href: "/ready-products/ecommerce-single-vendor",
        color: "#34D399", // green
      },
      {
        icon: Store,
        title: "Ecommerce Multi Vendor",
        description: "Multi shop",
        href: "/ready-products/ecommerce-multi-vendor",
        color: "#6366F1", // blue-violet
      },
      {
        icon: Utensils,
        title: "Food Booking",
        description: "Order food",
        href: "/ready-products/food-booking",
        color: "#F59E0B", // amber
      },
      {
        icon: BedDouble,
        title: "Resort Booking & Management",
        description: "Manage rooms",
        href: "/ready-products/resort-booking-management",
        color: "#06B6D4", // cyan
      },
      {
        icon: LayoutGrid,
        title: "Listing Site",
        description: "List items",
        href: "/ready-products/listing-platform",
        color: "#10B981", // teal
      },
      {
        icon: Home,
        title: "Real Estate Portal",
        description: "Buy & sell",
        href: "/ready-products/real-estate-portal",
        color: "#EF4444", // red
      },
      {
        icon: Building2,
        title: "Real Estate CRM",
        description: "Track leads",
        href: "/ready-products/real-estate-crm",
        color: "#8B5CF6", // violet
      },
      {
        icon: GraduationCap,
        title: "Education CRM",
        description: "School tools",
        href: "/ready-products/education-crm",
        color: "#3B82F6", // blue
      },
      {
        icon: HeartHandshake,
        title: "Matrimony",
        description: "Find match",
        href: "/ready-products/matrimony-crm",
        color: "#EC4899", // pink
      },
    ],

    products1: [
      {
        icon: Users2,
        title: "HRM Software",
        description: "Manage staff",
        href: "/ready-products/hrm-software",
        color: "#F97316",
      },
      {
        icon: Stethoscope,
        title: "Hospital Management",
        description: "Healthcare tool",
        href: "/ready-products/hospital-management-system",
        color: "#4ADE80", // lime
      },
      {
        icon: Car,
        title: "Cab Booking App",
        description: "Book ride",
        href: "/ready-products/cab-booking-app",
        color: "#0EA5E9", // sky
      },
      {
        icon: BookOpen,
        title: "LMS",
        description: "Online learning",
        href: "/ready-products/lms-platform",
        color: "#A855F7", // purple
      },
      {
        icon: Hotel,
        title: "Hotel Booking",
        description: "Book rooms",
        href: "/ready-products/hotel-booking",
        color: "#F43F5E", // rose
      },
      {
        icon: Bot,
        title: "AI Chatbot",
        description: "Smart support",
        href: "/ready-products/ai-chatbot",
        color: "#7C3AED", // deep purple
      },
    ],
    services: {
      "Development Services": [
        {
          label: "UI / UX Design",
          href: "/services/ui-ux-design",
          icon: Palette,
        },
        {
          label: "Web Designing & Development",
          href: "/services/web-designing",
          icon: Layout,
        },
        {
          label: "Mobile Apps Development",
          href: "/services/mobile-app-development",
          icon: Smartphone,
        },
        {
          label: "Custom Application Development",
          href: "/services/custom-software-development",
          icon: Code,
        },
        {
          label: "Cloud-Based Development",
          href: "/services/cloud-computing",
          icon: Cloud,
        },
        {
          label: "DevOps & Automation Development",
          href: "/services/devops-and-automation",
          icon: Workflow,
        },
        {
          label: "Data Science & Big Data Development",
          href: "/services/data-science-big-data",
          icon: Database,
        },
        {
          label: "Ecommerce Software Development",
          href: "/services/ecommerce-software-development",
          icon: Boxes,
        },
        {
          label: "AI / ML & Automation",
          href: "/services/ai-ml-automation",
          icon: Bot,
        },
        {
          label: "Maintenance & Support",
          href: "/services/maintenance-and-support",
          icon: LifeBuoy,
        },
      ],
      "Digital Marketing": [
        {
          label: "SEO (Search Engine Optimization)",
          href: "/services/seo",
          icon: Search,
        },
        {
          label: "Social Media Marketing (SMM)",
          href: "/services/social-media-marketing",
          icon: Share2,
        },
        {
          label: "Search Engine Marketing (SEM / Paid Ads)",
          href: "/services/sem",
          icon: MonitorPlay,
        },
        {
          label: "Video Marketing",
          href: "/services/video-marketing",
          icon: Film,
        },
        {
          label: "Email Marketing",
          href: "/services/email-marketing",
          icon: Mail,
        },
        {
          label: "Content Marketing",
          href: "/services/content-marketing",
          icon: FileText,
        },
        {
          label: "Google My Business (Local SEO)",
          href: "/services/google-my-business",
          icon: MapPin,
        },
        {
          label: "Affiliate & Influencer Marketing",
          href: "/services/influencer-affiliate-marketing",
          icon: Users,
        },
      ],
      "Animation & Video Services": [
        {
          label: "Logo Designing",
          href: "/services/logo-designing",
          icon: Type,
        },
        {
          label: "Graphic Designing",
          href: "/services/graphic-designing",
          icon: Image,
        },
        { label: "2D Animation", href: "/services/2d-animation", icon: Film },
        { label: "3D Animation", href: "/services/3d-animation", icon: Layers },
        {
          label: "Explainer Videos",
          href: "/services/explainer-videos",
          icon: Video,
        },
        {
          label: "Motion Graphics Animation",
          href: "/services/motion-graphics-animation",
          icon: PenTool,
        },
        {
          label: "Whiteboard Animation",
          href: "/services/whiteboard-animation",
          icon: Edit3,
        },
        {
          label: "Video Editing & VFX",
          href: "/services/video-editing-and-vfx",
          icon: Scissors,
        },

      ],
    },

    training: {
      "Digital Marketing Training": [
        { label: "SEO", href: "/training/seo", icon: Search },
        {
          label: "SEM (Google Ads)",
          href: "/training/sem-google-ads",
          icon: MonitorSmartphone,
        },
        {
          label: "Social Media Marketing",
          href: "/training/social-media-marketing",
          icon: Share2,
        },
        { label: "Email Marketing", href: "/training/email-marketing", icon: Mail },
        {
          label: "Content Marketing",
          href: "/training/content-marketing",
          icon: FileText,
        },
      ],
      "Software Training": [
        {
          label: "Web Designing & Development (React)",
          href: "/training/web-designing-react",
          icon: Code,
        },
        { label: "Java Training", href: "/training/java", icon: Laptop },
        { label: "Python Training", href: "/training/python", icon: Brain },
        {
          label: "Android & iOS Training",
          href: "/training/android-and-ios",
          icon: Smartphone,
        },
        {
          label: "Manual & Automation Testing",
          href: "/training/manual-and-automation-testing",
          icon: BugPlay,
        },
      ],
      "Animation Training": [
        {
          label: "Graphic Designing",
          href: "/training/graphic-designing",
          icon: Palette,
        },
        {
          label: "Explainer Videos",
          href: "/training/explainer-videos",
          icon: Clapperboard,
        },
        { label: "2D Animation", href: "/training/2d-animation", icon: Type },
        { label: "3D Animation", href: "/training/3d-animation", icon: Video },
        { label: "Motion Graphics", href: "/training/motion-graphics", icon: Film },
        {
          label: "Video Editing & VFX",
          href: "/training/video-editing-and-vfx",
          icon: Clapperboard,
        },
      ],
    },
    about: [
      { label: "About Us", href: "/about-us" },
      { label: "Career", href: "/career" },
    ],
  };

  const navButtonStyle = (menuName) => ({
    color: "#0a2233",
    fontWeight: 500,
    fontSize: "16px",
    fontFamily: "Poppins,sans-serif",
    textTransform: "capitalize",
    py: 4,
    whiteSpace: "nowrap",
    lineHeight: "48px",
    minWidth: "auto",
    backgroundColor: "transparent",
    transition: "border-top 0.2s ease",
    letterSpacing: "0.2px",
    textShadow: "0 0 0.9px currentColor",
  });

  const DropdownContainer = styled(Paper)(({ theme }) => ({
    position: "absolute",
    top: "100%",
    transform: "translateX(-40.5%)",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(0,0,0,0.1)",
    zIndex: 50,
    width: "1200px",
    maxWidth: "95vw",

    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "30px",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-3px",
      left: "46%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "3px",
      backgroundColor: "#673ab7",
    },
  }));

  const MenuItemCard = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "6px 32px",
    textDecoration: "none",
    borderRadius: "12px",
    transition: "all 0.2s ease",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#f8fafc",
      transform: "translateY(-2px)",
    },
  }));

  const IconContainer = styled(Box)(({ color }) => ({
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: `0 8px 25px ${color}30`,
  }));

  const RightPanel = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
  }));

  const BackgroundPattern = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "radial-gradient(circle at center, rgba(166, 230, 251, 0.76) 0%, transparent 70%)",
    borderRadius: "16px",
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "14px 28px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)",
    position: "relative",
    zIndex: 1,
    minWidth: "140px",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#1d4ed8",
      transform: "translateY(-3px)",
      boxShadow: "0 15px 35px rgba(37, 99, 235, 0.5)",
    },
  }));

  // Progress Bar
  const ProgressBar = () => (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        backgroundColor: "#2196F3",
        zIndex: 9999,
        transition: "width 0.3s ease",
        width: `${scrollProgress}%`,
      }}
    />
  );

  // Custom Switch Component
  const CustomSwitch = ({ checked, onChange }) => (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Switch
        checked={checked}
        onChange={onChange}
        sx={{
          width: 44,
          height: 24,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: "3px",
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: "#2196F3",
                opacity: 1,
                border: 0,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 18,
            height: 18,
          },
          "& .MuiSwitch-track": {
            borderRadius: 24,
            backgroundColor: "#ccc",
            opacity: 1,
            transition: "background-color 0.4s",
          },
        }}
      />
    </Box>
  );

  // Desktop Dropdown Components
  const ProductsDropdown = () => (
    <DropdownContainer>
      {/* Left Side - Menu Items */}
      <Box sx={{ padding: "12px 24px 12px 24px" }}>
        {/* Ready Products */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 1.5,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#E0E0E0", }} />
          <Typography
            variant="subtitle2"
            sx={{
              paddingX: 2,
              fontSize: "14px",
              fontWeight: 600,
              color: "#818181ff",
              whiteSpace: "nowrap",
            }}
          >
            Ready Products
          </Typography>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#E0E0E0" }} />
        </Box>
        {/* First Grid */}
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            padding: "0",
          }}
        >
          {menuItems.products.map((item, index) => (
            <Grid item key={index}>
              <MenuItemCard component="a" href={item.href}>
                <IconContainer color={item.color}>
                  <item.icon
                    size={20}
                    style={{ color: "white", strokeWidth: 2 }}
                  />
                </IconContainer>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#585B6F",
                      margin: "0 0 4px 0",
                      lineHeight: "15px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#64748b",
                      margin: 0,
                      fontWeight: "400",
                      lineHeight: "13px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </MenuItemCard>
            </Grid>
          ))}
        </Grid>

        {/* Coming Soon Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            marginTop: 1,
            marginBottom: 1.5,
          }}
        >
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#E0E0E0" }} />
          <Typography
            variant="subtitle2"
            sx={{
              paddingX: 2,
              fontSize: "14px",
              fontWeight: 600,
              color: "#818181ff",
              whiteSpace: "nowrap",
            }}
          >
            Coming Soon (Under Development Stage)
          </Typography>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#E0E0E0" }} />
        </Box>

        {/* Second Grid */}
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            padding: "0",
          }}
        >
          {menuItems.products1.map((item, index) => (
            <Grid item key={index}>
              <MenuItemCard component="a" href={item.href}>
                <IconContainer color={item.color}>
                  <item.icon
                    size={22}
                    style={{ color: "white", strokeWidth: 2 }}
                  />
                </IconContainer>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#585B6F",
                      margin: "0 0 4px 0",
                      lineHeight: "15px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#64748b",
                      margin: 0,
                      fontWeight: "400",
                      lineHeight: "13px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </MenuItemCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Right Side - Image and Call to Action */}
      <RightPanel>
        {/* Background Pattern */}
        <BackgroundPattern />

        {/* VR Image */}
        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
          <Box
            component="img"
            src={img1}
            alt="VR Technology Experience"
            sx={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Box>

        {/* Trustpilot Rating */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography
              sx={{
                color: "#22c55e",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              ★ Trustpilot
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              5.0
            </Typography>
            <Typography
              sx={{
                color: "#fbbf24",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              ★★★★★
            </Typography>
          </Box>
        </Box>

        {/* Contact Button */}
        <StyledButton>
          Contact Us
          <span style={{ fontSize: "18px", marginLeft: "4px" }}>→</span>
        </StyledButton>
      </RightPanel>
    </DropdownContainer>
  );

  const TrainingDropdown = () => (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        transform: "translateX(-62.5%)",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        border: "1px solid rgba(0,0,0,0.05)",
        zIndex: 50,
        width: "1200px",
        maxWidth: "80vw",
        padding: "16px",
        display: "flex",
        flexDirection: "column", // <-- changed so bottom block can sit below the row
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-3px",
          left: "67%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "3px",
          backgroundColor: "#673ab7",
        },
      }}
    >
      {/* ===== Row: Left column + Divider + Right columns (top only) ===== */}
      <Box sx={{ display: "flex", width: "100%" }}>
        {/* ===== Left Column (1st) ===== */}
        <Box sx={{ flex: 1, px: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: "1px solid #dadada", mb: 2, pb: 1 }}>
            <Typography sx={{ fontWeight: 700, color: "#050748", fontSize: "18px" }}>
              Digital Marketing Training
            </Typography>
            <Typography
              component="a"
              href="/training/digital-marketing-training"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: "#0EA5E9",
                px: 1.5,
                py: 0.5,
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: 'none',
                transition: "all 0.3s ease",
              }}
            >
              View All <ArrowRight size={14} />
            </Typography>
          </Box>

          {menuItems.training[Object.keys(menuItems.training)[0]].map(
            (item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 0",
                    color: "#050748",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "25px",
                  }}
                >
                  {Icon && <Icon size={16} strokeWidth={1.8} color="#007abf" />}
                  {item.label}
                </a>
              );
            }
          )}
        </Box>

        {/* Divider */}
        <Box sx={{ width: "1px", backgroundColor: "#E0E0E0", mx: 1 }} />

        {/* ===== Right Side (2nd + 3rd cols top part) ===== */}
        <Box sx={{ flex: 2, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            {Object.entries(menuItems.training)
              .slice(1) // only 2nd & 3rd cols
              .map(([category, items], colIndex, arr) => (
                <React.Fragment key={category}>
                  <Box sx={{ flex: 1, px: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: "1px solid #dadada", mb: 2, pb: 1 }}>
                      <Typography sx={{ fontWeight: 700, color: "#050748", fontSize: "18px" }}>
                        {category}
                      </Typography>
                      <Typography
                        component="a"
                        href={category === "Software Training" ? "/training/software-training" : "/training/animation-training"}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          color: "#0EA5E9",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "13px",
                          textDecoration: 'none',
                          transition: "all 0.3s ease",
                        }}
                      >
                        View All <ArrowRight size={14} />
                      </Typography>
                    </Box>

                    {items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={index}
                          href={item.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "6px 0",
                            color: "#050748",
                            textDecoration: "none",
                            fontSize: "15px",
                            fontWeight: 500,
                            lineHeight: "25px",
                          }}
                        >
                          {Icon && (
                            <Icon size={16} strokeWidth={1.8} color="#007abf" />
                          )}
                          {item.label}
                        </a>
                      );
                    })}
                  </Box>

                  {/* Divider between 2nd & 3rd */}
                  {colIndex < arr.length - 1 && (
                    <Box
                      sx={{
                        width: "1px",
                        backgroundColor: "#E0E0E0",
                        mx: 1,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
          </Box>
        </Box>
      </Box>

      {/* ===== Common Bottom Block spanning all columns ===== */}
      <Box sx={{ mt: 2, width: "100%" }}>
        <Box sx={{ height: "1px", backgroundColor: "#E0E0E0", mb: 2 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          {/* Left: Icon + Text */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                backgroundColor: "rgba(103, 58, 183, 0.1)",
                color: "#673ab7",
                flexShrink: 0,
              }}
            >
              <GraduationCap size={20} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#050748",
                  mb: 0.5,
                }}
              >
                Training Programs
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#666",
                  maxWidth: "280px",
                }}
              >
                Learn from experts with hands-on training
              </Typography>
            </Box>
          </Box>
          {/* Right: View All */}
          <Typography
            component="a"
            href="/training/software-training"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 1,
              color: "#0EA5E9",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              padding: "8px 16px",
              borderRadius: "10px",
              transition: "all 0.3s ease",
            }}
          >
            View All <ArrowRight size={14} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const ServicesDropdown = () => (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        transform: "translateX(-52.5%)",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        border: "1px solid rgba(0,0,0,0.05)",
        zIndex: 50,
        width: "1200px",
        maxWidth: "90vw",
        padding: "16px",
        display: "flex",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-3px",
          left: "56.5%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "3px",
          backgroundColor: "#673ab7",
        },
      }}
    >
      {/* ===== Left Column (1st column only) ===== */}
      <Box sx={{ flex: 1, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #dadada",
            margin: "0 0 16px",
            padding: "0 0 14px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "12px",
                backgroundColor: "#fff1f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e11d48", // Rose-600
              }}
            >
              <Code2 size={24} strokeWidth={2.5} />
            </Box> */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#050748",
                  lineHeight: 1.2,

                }}
              >
                Development Services
              </Typography>

            </Box>
          </Box>
          <Typography
            component="a"
            href="/services/web-development"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "#0EA5E9",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "13px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            View All <ArrowRight size={14} />
          </Typography>
        </Box>

        {menuItems.services[Object.keys(menuItems.services)[0]].map(
          (item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 0",
                  color: "#050748",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  lineHeight: "25px",
                }}
              >
                {Icon && <Icon size={16} strokeWidth={1.8} color="#0081c3" />}
                {item.label}
              </a>
            );
          }
        )}
      </Box>

      {/* Vertical Divider between col1 & col2 */}
      <Box
        sx={{
          width: "1px",
          backgroundColor: "#E0E0E0",
          mx: 1,
        }}
      />

      {/* ===== Right Side (2nd + 3rd columns + bottom block) ===== */}
      <Box sx={{ flex: 2, display: "flex", flexDirection: "column" }}>
        {/* Top two columns (2nd & 3rd) */}
        <Box sx={{ display: "flex" }}>
          {Object.entries(menuItems.services)
            .slice(1) // ✅ take only 2nd & 3rd columns
            .map(([category, items], colIndex, arr) => (
              <React.Fragment key={category}>
                <Box sx={{ flex: 1, px: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #dadada",
                      margin: "0 0 16px",
                      padding: "0 0 14px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#050748",
                        fontSize: "18px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      {category}
                    </Typography>
                    {(category === "Digital Marketing" || category === "Animation & Video Services") && (
                      <Typography
                        component="a"
                        href={category === "Digital Marketing" ? "/services/digital-marketing" : "/services/animation-and-video-services"}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "#0EA5E9",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "13px",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        View All <ArrowRight size={14} />
                      </Typography>
                    )}
                  </Box>

                  {items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 0",
                          color: "#050748",
                          textDecoration: "none",
                          fontSize: "15px",
                          fontWeight: 500,
                          lineHeight: "25px",
                        }}
                      >
                        {Icon && (
                          <Icon size={16} strokeWidth={1.8} color="#0081c3" />
                        )}
                        {item.label}
                      </a>
                    );
                  })}
                </Box>

                {/* Divider between 2nd & 3rd column */}
                {colIndex < arr.length - 1 && (
                  <Box
                    sx={{
                      width: "1px",
                      backgroundColor: "#E0E0E0",
                      mx: 1,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
        </Box>

        {/* ✅ Bottom Common Block (only under col2 & col3) */}
        <Box sx={{ mt: 2, px: 2 }}>
          <Box sx={{ height: "1px", backgroundColor: "#E0E0E0", mb: 2 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              gap: 2,
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  backgroundColor: "rgba(246, 56, 85, 0.1)",
                  color: "#f63855",
                  flexShrink: 0,
                }}
              >
                <Code2 size={20} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#050748",
                    mb: 0.5,
                  }}
                >
                  Software Development
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#666",
                    maxWidth: "280px",
                  }}
                >
                  Innovative, future-proof software solutions
                </Typography>
              </Box>
              <Typography
                component="a"
                href="/services/software-development"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#0EA5E9",
                  fontWeight: 700,
                  fontSize: "13px",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",

                }}
              >
                View All <ArrowRight size={14} strokeWidth={2.5} />
              </Typography>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );

  const AboutDropdown = () => (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: "white",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        border: "1px solid rgba(0,0,0,0.05)",
        zIndex: 50,
        minWidth: "220px",
        width: "200px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-3px",
          left: "25%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "3px",
          backgroundColor: "#673ab7",
        },
      }}
    >
      <Box sx={{ padding: "8px 0" }}>
        {menuItems.about.map((item, index) => (
          <a
            key={index}
            href={item.href}
            style={{
              display: "block",
              padding: "6px 16px",
              color: "#050748",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "25px",
              transition: "all 0.2s ease",
            }}
          >
            {item.label}
          </a>
        ))}
      </Box>
    </Box>
  );

  // Mobile Menu Components
  const MobileMenu = () => (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9998,
        }}
        onClick={handleMobileMenuToggle}
      />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "280px",
          backgroundColor: "#0b293c",
          zIndex: 9999,
          padding: "20px 0",
          paddingTop: "80px",
        }}
      >
        <IconButton
          onClick={handleMobileMenuToggle}
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>

        <List sx={{ padding: 0 }}>
          {/* Ready Products Mobile Menu */}
          <ListItem
            sx={{
              padding: 0,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "block",
            }}
          >
            <Button
              onClick={() => handleMobileSubMenuToggle("ready_products")}
              sx={{
                width: "100%",
                justifyContent: "space-between",
                color: "white",
                padding: "12px 20px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Ready Products
              {mobileSubMenus.ready_products ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            <Collapse in={mobileSubMenus.ready_products} timeout="auto" unmountOnExit>
              <List sx={{ backgroundColor: "rgba(255,255,255,0.03)", padding: 0, width: "100%" }}>
                {menuItems.products.map((item, index) => (
                  <ListItem
                    key={index}
                    component="a"
                    href={item.href}
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "16px",
                      padding: "10px 20px",
                      textDecoration: "none",
                      width: "100%",
                      borderBottom: "1px solid rgba(255,255,255,0.03)",
                    }}
                  >
                    <ListItemText primary={item.title || item.label} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </ListItem>

          {/* Coming Soon Mobile Menu */}
          <ListItem
            sx={{
              padding: 0,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "block",
            }}
          >
            <Button
              onClick={() => handleMobileSubMenuToggle("coming_soon")}
              sx={{
                width: "100%",
                justifyContent: "space-between",
                color: "white",
                padding: "12px 20px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Coming Soon
              {mobileSubMenus.coming_soon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            <Collapse in={mobileSubMenus.coming_soon} timeout="auto" unmountOnExit>
              <List sx={{ backgroundColor: "rgba(255,255,255,0.03)", padding: 0, width: "100%" }}>
                {menuItems.products1.map((item, index) => (
                  <ListItem
                    key={index}
                    component="a"
                    href={item.href}
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "16px",
                      padding: "10px 20px",
                      textDecoration: "none",
                      width: "100%",
                      borderBottom: "1px solid rgba(255,255,255,0.03)",
                    }}
                  >
                    <ListItemText primary={item.title || item.label} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </ListItem>

          {/* Services Category Dropdowns */}
          {Object.entries(menuItems.services).map(([category, items], i) => (
            <ListItem
              key={`service_${i}`}
              sx={{
                padding: 0,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "block",
              }}
            >
              <Button
                onClick={() => handleMobileSubMenuToggle(`service_${i}`)}
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  color: "white",
                  padding: "12px 20px",
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                {category}
                {mobileSubMenus[`service_${i}`] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Button>
              <Collapse in={mobileSubMenus[`service_${i}`]} timeout="auto" unmountOnExit>
                <List sx={{ backgroundColor: "rgba(255,255,255,0.03)", padding: 0, width: "100%" }}>
                  {items.map((item, index) => (
                    <ListItem
                      key={index}
                      component="a"
                      href={item.href}
                      sx={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", padding: "10px 24px", textDecoration: "none", width: "100%", borderBottom: "1px solid rgba(255,255,255,0.02)", "&:hover": { color: "#fff" } }}
                    >
                      <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "16px" }} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          ))}

          {/* Training Category Dropdowns */}
          {Object.entries(menuItems.training).map(([category, items], i) => (
            <ListItem
              key={`training_${i}`}
              sx={{
                padding: 0,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "block",
              }}
            >
              <Button
                onClick={() => handleMobileSubMenuToggle(`training_${i}`)}
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  color: "white",
                  padding: "12px 20px",
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                {category}
                {mobileSubMenus[`training_${i}`] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Button>
              <Collapse in={mobileSubMenus[`training_${i}`]} timeout="auto" unmountOnExit>
                <List sx={{ backgroundColor: "rgba(255,255,255,0.03)", padding: 0, width: "100%" }}>
                  {items.map((item, index) => (
                    <ListItem
                      key={index}
                      component="a"
                      href={item.href}
                      sx={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", padding: "10px 24px", textDecoration: "none", width: "100%", borderBottom: "1px solid rgba(255,255,255,0.02)", "&:hover": { color: "#fff" } }}
                    >
                      <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "16px" }} />
                    </ListItem>
                  ))}
                  {/* View All Button for Category Hub */}
                  <ListItem
                    component="a"
                    href={category === "Digital Marketing Training" ? "/training/digital-marketing-training" : category === "Software Training" ? "/training/software-training" : "/training/animation-training"}
                    sx={{
                      color: "#ffffff",
                      fontSize: "16px",
                      padding: "12px 24px",
                      textDecoration: "none",
                      width: "100%",
                      backgroundColor: "#0EA5E9",
                      fontWeight: 700,
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      "&:hover": { backgroundColor: "#0284c7" }
                    }}
                  >
                    <ListItemText primary={`View All ${category}`} primaryTypographyProps={{ fontSize: "16px", fontWeight: 700 }} />
                    <ArrowRight size={16} />
                  </ListItem>
                </List>
              </Collapse>
            </ListItem>
          ))}

          <ListItem
            component="a"
            href="#"
            sx={{
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              transition: "background-color 0.3s ease",
              padding: "12px 20px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <ListItemText primary="Portfolio" />
          </ListItem>

          {/* About Mobile Menu */}
          <ListItem
            sx={{
              padding: 0,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Button
              onClick={() => handleMobileSubMenuToggle("about")}
              sx={{
                width: "100%",
                justifyContent: "space-between",
                color: "white",
                padding: "12px 20px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              About
              {mobileSubMenus.about ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Button>
            <Collapse in={mobileSubMenus.about} timeout="auto" unmountOnExit>
              <List
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderLeft: "2px solid #2196F3",
                  marginLeft: "16px",
                  padding: 0,
                }}
              >
                {menuItems.about.map((item, index) => (
                  <ListItem
                    key={index}
                    component="a"
                    href={item.href}
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "16px",
                      padding: "8px 16px",
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </ListItem>

          <ListItem
            component="a"
            href="#"
            sx={{
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              transition: "background-color 0.3s ease",
              padding: "12px 20px",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <ListItemText primary="Blog" />
          </ListItem>

          {/* Mobile Dark Mode Switch */}
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              color: "white",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "12px 20px",
            }}
          >
            <CustomSwitch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <Typography>Dark Mode</Typography>
          </ListItem>

          {/* Mobile Contact Button */}
          <ListItem sx={{ padding: "16px", justifyContent: "center" }}>
            <Box
              component="a"
              href="/contact-us"
              aria-label="Contact us"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 16px",
                background: "linear-gradient(to right, #025170, #5699c1)",
                color: "#fff",
                fontWeight: 500,
                borderRadius: "25px",
                textDecoration: "none",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                // "&:hover": {
                //   backgroundColor: "#005efc",
                //   color: "white",
                // },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  zIndex: 1,
                  // textTransform: hovered ? "none" : "uppercase",
                  transition: "text-transform 0.3s ease",
                }}
              >
                {hovered ? "contact Us" : "Contact Us"}
              </Typography>

              {/* Icon Container */}
              <Box
                sx={{
                  position: "relative",
                  width: "30px",
                  height: "30px",
                  marginLeft: "10px",
                  overflow: "hidden",
                }}
              >
                {/* First Arrow (default state) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: hovered ? "-100%" : "0%",
                    left: 0,
                    opacity: hovered ? 0 : 1,
                    transform: "rotate(30deg)",
                    transition: "all 0.3s ease",
                    backgroundColor: "#00f0bd",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <ArrowUpwardIcon sx={{ fontSize: "18px", color: "#000" }} />
                </Box>

                {/* Second Arrow (on hover) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: hovered ? "0%" : "100%",
                    left: 0,
                    opacity: hovered ? 1 : 0,
                    transform: "rotate(30deg)",
                    transition: "all 0.3s ease",
                    backgroundColor: "#93e5d4ff",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <ArrowUpwardIcon sx={{ fontSize: "18px", color: "black" }} />
                </Box>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>
    </>
  );

  return (
    <Box>
      <ProgressBar />

      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: { xs: "auto", md: 0 },
          width: "100%",
          zIndex: 1100,
          // borderBottomColor:'#0d6efd',
          backgroundColor: "white",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
          boxShadow: "0px 0px 10px -1px #1b58b6",
          borderBottom: "1px solid rgba(7, 130, 134, 0.1)",
          height: scrolled ? "70px" : "90px",
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            mx: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {/* Logo Section */}
            <Grid item xs={4} md={3.5}>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Website Logo"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "90px", md: scrolled ? "160px" : "200px" },
                    height: "auto",
                    transition: "all 0.3s ease",
                  }}
                />
              </a>
            </Grid>

            {/* Navigation & Buttons */}
            <Grid item xs={8} md={8.5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "space-between", lg: "flex-end" },
                  gap: { xs: "0.5rem", lg: "2rem" },
                  width: "100%",
                }}
              >
                {/* Navigation Menu - Desktop Only */}
                <Box
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {/* Products Dropdown */}
                  <Box
                    sx={{ position: "relative" }}
                    onMouseEnter={() => setActiveDropdown("products")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Button
                      sx={{
                        ...navButtonStyle("products"),
                        "& .MuiButton-endIcon": {
                          marginLeft: "1px",
                        },
                      }}
                      endIcon={
                        activeDropdown === "products" ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                    >
                      Ready Products
                    </Button>
                    {activeDropdown === "products" && <ProductsDropdown />}
                  </Box>
                  {/* Services Dropdown */}
                  <Box
                    sx={{ position: "relative" }}
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Button
                      sx={{
                        ...navButtonStyle("services"),
                        "& .MuiButton-endIcon": {
                          marginLeft: "1px",
                        },
                      }}
                      endIcon={
                        activeDropdown === "services" ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                    >
                      Services
                    </Button>
                    {activeDropdown === "services" && <ServicesDropdown />}
                  </Box>

                  {/* Training Dropdown */}
                  <Box
                    sx={{ position: "relative" }}
                    onMouseEnter={() => setActiveDropdown("training")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Button
                      sx={{
                        ...navButtonStyle("training"),
                        "& .MuiButton-endIcon": {
                          marginLeft: "1px",
                        },
                      }}
                      endIcon={
                        activeDropdown === "training" ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                    >
                      Training
                    </Button>
                    {activeDropdown === "training" && <TrainingDropdown />}
                  </Box>

                  {/* Solutions Dropdown */}
                  <Box sx={{ position: "relative" }}>
                    <Button
                      sx={navButtonStyle("solutions")}
                      onClick={() => navigate("/company-portfolio")}
                    >
                      Portfolio
                    </Button>
                  </Box>

                  {/* About Dropdown */}
                  <Box
                    sx={{ position: "relative" }}
                    onMouseEnter={() => setActiveDropdown("about")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Button
                      sx={{
                        ...navButtonStyle("about"),
                        "& .MuiButton-endIcon": {
                          marginLeft: "1px",
                        },
                      }}
                      endIcon={
                        activeDropdown === "about" ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                    >
                      About Us
                    </Button>
                    {activeDropdown === "about" && <AboutDropdown />}
                  </Box>

                  {/* Blog */}
                  <Button
                    sx={navButtonStyle(null)}
                    onClick={() => navigate("/articles")}
                  >
                    Blog
                  </Button>

                  {/* <IconButton
                    sx={{
                      color: "#0a2233",
                      backgroundColor: "white",
                      ml: 1,
                      borderRadius: "50%",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "#f3f3f3",
                      },
                    }}
                  >
                    <SearchIcon />
                  </IconButton> */}
                </Box>



                {/* Contact Button */}
                <Box
                  component="a"
                  href="/contact-us"
                  aria-label="Contact us"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { xs: "6px 12px", md: "10px 16px" },
                    background: "linear-gradient(to right, #025170, #5699c1)",
                    color: "#fff",
                    fontWeight: 500,
                    borderRadius: "25px",
                    textDecoration: "none",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    // "&:hover": {
                    //   backgroundColor: "#005efc",
                    //   color: "white",
                    // },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      zIndex: 1,
                      // textTransform: hovered ? "none" : "uppercase",
                      transition: "text-transform 0.3s ease",
                    }}
                  >
                    {hovered ? "contact Us" : "Contact Us"}
                  </Typography>

                  {/* Icon Container */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                      overflow: "hidden",
                    }}
                  >
                    {/* First Arrow (default state) */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: hovered ? "-100%" : "0%",
                        left: 0,
                        opacity: hovered ? 0 : 1,
                        transform: "rotate(30deg)",
                        transition: "all 0.3s ease",
                        backgroundColor: "#ffffffff",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <ArrowUpwardIcon
                        sx={{ fontSize: "18px", color: "#000" }}
                      />
                    </Box>

                    {/* Second Arrow (on hover) */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: hovered ? "0%" : "100%",
                        left: 0,
                        opacity: hovered ? 1 : 0,
                        transform: "rotate(30deg)",
                        transition: "all 0.3s ease",
                        backgroundColor: "#e6f0f5ff",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <ArrowUpwardIcon
                        sx={{ fontSize: "18px", color: "black" }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Mobile Menu Icon */}
                <IconButton
                  onClick={handleMobileMenuToggle}
                  sx={{
                    color: "#0a2233",
                    display: { xs: "block", lg: "none" },
                    fontSize: "28px",
                    mr: { xs: 1, lg: 0 },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu />}
    </Box>
  );
};

export default Header;

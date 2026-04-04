import React from "react";
import { Box, Typography, Grid, Container, Paper } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CallMadeIcon from '@mui/icons-material/CallMade';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const categories = [
  {
    title: "Services Development",
    icon: CodeIcon,
    count: "10 Services",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb, #4f46e5)",
    description: "Web & Mobile App development with modern tech stacks.",
  },
  {
    title: "Digital Marketing",
    icon: AssessmentIcon,
    count: "8 Services",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    description: "Data-driven SEO, SMM, and Google ads strategies.",
  },
  {
    title: "Animation & Video",
    icon: VideoCameraBackIcon,
    count: "6 Services",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    description: "High-end 2D/3D explainer and promotional videos.",
  },
  {
    title: "Software Development",
    icon: SettingsSuggestIcon,
    count: "12 Services",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    description: "Custom enterprise CRM & ERP logic architectures.",
  },
];

const CategoryCard = styled(Paper)(({ theme, bordercolor }) => ({
  background: "#ffffff",
  border: "1px solid rgba(0, 0, 0, 0.04)",
  borderRadius: "20px",
  padding: "32px",
  textAlign: "left",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.04)`,
  },
}));

const IconBox = styled(Box)(({ gradient }) => ({
  width: "56px",
  height: "56px",
  borderRadius: "16px",
  background: gradient,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  marginBottom: "24px",
  transition: "all 0.3s ease",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
}));

const ServicesOverview = ({ data }) => {
  const navigate = useNavigate();
  const {
    subtitle = "WHAT WE OFFER",
    title = "Comprehensive Technology Services",
    description = "We empower businesses using advanced digital enablement from custom codes overlays to strategic marketing pillars.",
    list = categories
  } = data || {};

  const handleExplore = (serviceTitle) => {
    const slug = serviceTitle.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service-details/${slug}`);
  };

  return (
    <Box sx={{ bgcolor: "#f1f5f9", py: { xs: 6, md: 8 }, position: "relative" }}>
      <Container maxWidth="lg">
        {/* Heading Block */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 1.5 }}>
            <Box sx={{ width: "30px", height: "1.5px", bgcolor: "#0087c9" }} />
            <Typography sx={{ color: "#0087c9", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>
              {subtitle}
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "40px" }, fontFamily: "Urbanist, sans-serif", color: "#0a2233", mb: 2 }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "560px", mx: "auto", fontSize: "16px", lineHeight: 1.7 }}>
            {description}
          </Typography>
        </Box>

        {/* Categories Grid */}
        <Grid container spacing={3}>
          {list.map((cat, i) => {
            const SvgIcon = cat.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={i} mb={6}>
                <CategoryCard bordercolor={cat.color} onClick={() => handleExplore(cat.title)}>
                  <IconBox gradient={cat.gradient}>
                    <SvgIcon sx={{ fontSize: 28 }} />
                  </IconBox>
                  <Typography variant="h6" sx={{ color: "#0a2233", fontWeight: 800, mb: 1, fontSize: "19px", fontFamily: "Urbanist, sans-serif" }}>
                    {cat.title}
                  </Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, flexGrow: 1 }}>
                    {cat.description}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: "auto" }}>
                    <Box sx={{ bgcolor: "rgba(0, 135, 201, 0.08)", border: "1px solid rgba(0, 135, 201, 0.15)", px: 1.5, py: 0.5, borderRadius: "20px" }}>
                      <Typography sx={{ color: "#0087c9", fontSize: "11px", fontWeight: 700 }}>
                        {cat.count}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#0087c9", cursor: "pointer", "&:hover": { color: "#005885" } }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExplore(cat.title);
                      }}
                    >
                      <Typography sx={{ fontSize: "13px", fontWeight: 700 }}>Explore</Typography>
                      <CallMadeIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </Box>
                </CategoryCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesOverview;

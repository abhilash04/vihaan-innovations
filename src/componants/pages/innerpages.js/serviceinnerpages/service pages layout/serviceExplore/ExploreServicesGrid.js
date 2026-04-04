import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CallMadeIcon from '@mui/icons-material/CallMade';

const SectionWrapper = styled(Box)({
  paddingTop: "60px",
  paddingBottom: "20px",
  backgroundColor: "#ffffff",
  borderBottom: "1px solid #f1f5f9",
});

const ServiceCard = styled(motion.div)({
  height: "70%",
});

const CardInner = styled(Paper)({
  padding: "32px",
  borderRadius: "24px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  textAlign: "left",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  height: "100%", // Changed to 100% since we're adding more content
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.12)",
    transform: "translateY(-10px)",
    borderColor: "#2563eb",
    "& .icon-box": {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      transform: "rotateY(180deg)",
    }
  },
});

const IconBox = styled(Box)({
  width: "56px",
  height: "56px",
  borderRadius: "16px",
  backgroundColor: "rgba(37, 99, 235, 0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "28px",
  color: "#2563eb",
  transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
});

const ExploreServicesGrid = ({ data }) => {
  const navigate = useNavigate();
  const {
    subtitle = "What We Offer",
    title = "Complete SEO Services for Every Business Need.",
    description = "From technical foundations to content strategy — we cover every aspect of search engine optimisation.",
    list = []
  } = data || {};

  const handleExplore = (serviceTitle) => {
    const slug = serviceTitle.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service-details/${slug}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography sx={{ color: "#2563eb", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", mb: 1.5, fontFamily: "Inter, sans-serif" }}>
            {subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 2, fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px", fontSize: { xs: "26px", md: "38px" } }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#64748b", maxWidth: "600px", mx: "auto", fontSize: "18px", lineHeight: 1.6, fontWeight: 500 }}>
            {description}
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {list.map((service, i) => {
            const Icon = service.icon || TravelExploreIcon;
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <ServiceCard variants={itemVariants} onClick={() => handleExplore(service.title)}>
                  <CardInner>
                    <IconBox className="icon-box">
                      <Icon sx={{ fontSize: "28px" }} />
                    </IconBox>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 2, fontFamily: "Urbanist, sans-serif", fontSize: "20px", letterSpacing: "-0.5px" }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.7, mb: 3, fontWeight: 500 }}>
                      {service.desc}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#2563eb", mt: "auto", pt: 2 }}>
                      <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>Explore Details</Typography>
                      <CallMadeIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </CardInner>
                </ServiceCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ExploreServicesGrid;

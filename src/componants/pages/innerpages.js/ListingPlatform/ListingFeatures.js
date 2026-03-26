import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import EditNoteIcon from '@mui/icons-material/EditNote';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import StarRateIcon from '@mui/icons-material/StarRate';

const features = [
  { icon: <EditNoteIcon />, title: "Listing Submission", desc: "Easily allow users to submit listings with a smooth and guided process, optimized for top listing sites for business platforms.", color: "#3b82f6" },
  { icon: <VerifiedUserIcon />, title: "Listing Approval & Customizer", desc: "Admin-controlled approval system with flexible customization options to maintain quality and consistency.", color: "#8b5cf6" },
  { icon: <SearchIcon />, title: "Powerful Search", desc: "Advanced search functionality with filters, categories, and keyword-based results for better discovery.", color: "#a855f7" },
  { icon: <FindInPageIcon />, title: "Area & URL-Based Search", desc: "Location-based search and SEO-friendly URLs to improve visibility and navigation.", color: "#ec4899" },
  { icon: <DashboardIcon />, title: "User Dashboards", desc: "Interactive dashboards with insights, listing performance, and SEO data filters.", color: "#22c55e" },
  { icon: <QuestionAnswerIcon />, title: "Enquiry & Lead System", desc: "Built-in enquiry and lead management system to capture and convert user interest efficiently.", color: "#14b8a6" },
  { icon: <VerifiedUserIcon />, title: "Listing Moderation", desc: "Complete moderation tools to manage listings, prevent spam, and ensure platform quality.", color: "#0ea5e9" },
  { icon: <MonetizationOnIcon />, title: "Paid Listing Plans", desc: "Flexible monetization with paid listing plans, featured listings, and premium ranking options.", color: "#f59e0b" },
  { icon: <FindInPageIcon />, title: "SEO-Optimized Pages", desc: "Fully optimized pages designed to rank better and drive organic traffic to your listing platform.", color: "#84cc16" },
  { icon: <StarRateIcon />, title: "Review & Rating System", desc: "User reviews and ratings to build trust and improve engagement on your platform.", color: "#f97316" }
];

const FeatureCard = ({ icon, title, desc, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        pt: 4,
        borderRadius: "16px",
        bgcolor: "#ffffff",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
          borderColor: "rgba(0,0,0,0.12)"
        }
      }}
    >
      <Box
        sx={{
          color: color,
          mb: 2,
          "& > svg": { fontSize: 40 }
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "15px", mb: 1, lineHeight: 1.3 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#666", fontSize: "13px", lineHeight: 1.5 }}>
        {desc}
      </Typography>
    </Paper>
  </motion.div>
);

const ListingFeatures = () => {
  return (
    <Box sx={{ bgcolor: "#fafafa", py: 8 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
            Platform Capabilities
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Advanced Features That Power Top Listing Sites for Business
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", mb: 1, maxWidth: "700px", margin: "0 auto" }}>
            Explore powerful features and scalable architecture designed to build and manage top listing sites for business with high performance, better user experience, and maximum conversions.
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={3} rowSpacing={4} columnSpacing={3} mb={8}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <FeatureCard {...feature} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>

        {/* Footer CTA */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              px: { xs: 2, md: 5 },
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
              "&:hover": {
                bgcolor: "#1d4ed8",
                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
              },
            }}
          >
            Request Demo
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default ListingFeatures;

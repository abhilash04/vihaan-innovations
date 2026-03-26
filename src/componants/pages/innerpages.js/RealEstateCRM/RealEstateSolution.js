import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import MagnetOutlinedIcon from '@mui/icons-material/InsightsOutlined'; // Using Insights instead of magnet for now, or just an icon that works
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SolutionCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        bgcolor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 15px 35px rgba(0, 180, 216, 0.1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 25px 50px rgba(0, 180, 216, 0.2)",
          bgcolor: "#ffffff"
        }
      }}
    >
      <Box
        sx={{
          mb: 2,
          color: "#0B2046",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Icon sx={{ fontSize: 48, color: "#00B4D8" }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0B2046", fontSize: "18px" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const RealEstateSolution = () => {
  return (
    <Box sx={{ position: "relative", pb: 12, pt: 8, overflow: "hidden" }}>

      {/* Background shape */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #E0FBFC 0%, #00B4D8 100%)',
        opacity: 0.3,
        borderTopLeftRadius: "50% 10%",
        borderTopRightRadius: "50% 10%",
        zIndex: 0
      }} />

      {/* Decorative Arrow */}
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', mb: 4 }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownwardIcon sx={{ color: "#0B2046", fontSize: 40 }} />
        </motion.div>
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0B2046", fontWeight: 600, mb: 1, fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Our Solution
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", mb: 3, fontSize: { xs: "28px", md: "46px" }, lineHeight: 1.2 }}>
            Everything your real estate business requires, built into a single platform
          </Typography>
          <Typography sx={{ color: "#333", fontSize: "18px", lineHeight: 1.6 }}>
            From property listing management to post-sale documentation, our Real Estate CRM App Software India helps streamline every stage of your business process. We design and develop a complete solution that your real estate team can easily use to manage leads, clients, and transactions efficiently.
          </Typography>
        </Box>

        {/* 3x2 Grid */}
        <Grid
          container
          columnSpacing={3}
          rowSpacing={12}
          justifyContent="center"
          sx={{ maxWidth: "800px", mx: "auto" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <SolutionCard icon={DomainOutlinedIcon} title="Property Listings Management" delay={0.1} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SolutionCard icon={MagnetOutlinedIcon} title="Lead Generation & Distribution" delay={0.2} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SolutionCard icon={ShowChartOutlinedIcon} title="Real Estate Sales CRM" delay={0.3} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SolutionCard icon={EventAvailableOutlinedIcon} title="Site Visit Booking System" delay={0.4} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SolutionCard icon={DescriptionOutlinedIcon} title="Document & File Management" delay={0.5} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SolutionCard icon={InsertChartOutlinedIcon} title="Reports & Analytics Dashboard" delay={0.6} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default RealEstateSolution;

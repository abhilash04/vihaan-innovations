import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const StatBox = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Box sx={{ p: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ 
        color: "#ffffff", 
        mb: 2,
        "& > svg": { fontSize: 40, opacity: 0.8 } 
      }}>
        <Icon />
      </Box>
      <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "40px", md: "52px" }, lineHeight: 1, mb: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: "14px", lineHeight: 1.4, maxWidth: "150px", mx: "auto" }}>
        {label}
      </Typography>
    </Box>
  </motion.div>
);

const MatrimonyProvenImpact = () => {
  return (
    <Box sx={{ bgcolor: "#0B2046", py: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}> {/* Same navy blue as Privacy & Trust */}
      <Container maxWidth="lg">
        
        {/* The design just shows 4 stats in a row, no header */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={6} md={3}>
            <StatBox icon={SpeedIcon} value="70%+" label="Faster matching" delay={0.1} />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatBox icon={AccessTimeIcon} value="30+" label="Hours saved per week" delay={0.2} />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatBox icon={TrendingUpIcon} value="25%" label="Increase in conversion" delay={0.3} />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatBox icon={AnalyticsIcon} value="3-4" label="Months average launch" delay={0.4} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyProvenImpact;

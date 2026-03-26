import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import img from '../../../../assets/Five-step real estate CRM process.png'
const steps = [
  { num: "01", title: "Discovery", icon: <SearchIcon /> },
  { num: "02", title: "Design", icon: <DesignServicesIcon /> },
  { num: "03", title: "Development", icon: <CodeIcon /> },
  { num: "04", title: "Training & UAT", icon: <PeopleIcon /> },
  { num: "05", title: "Launch & Support", icon: <RocketLaunchIcon /> }
];

const RealEstateProcess = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#ffffff", position: "relative" }}>

      {/* Wave shape divider separating from previous section could go here if needed */}

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Left Text Side */}
          <Grid item xs={12} md={5.5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography sx={{ color: "#00B4D8", fontWeight: 600, mb: 2, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Our Process
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 3, fontSize: { xs: "26px", md: "48px" }, lineHeight: 1.1 }}>
                Clear Process for Real Estate CRM Development
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "18px", lineHeight: 1.6 }}>
                We follow a proven process to design and launch a customised Real Estate CRM System Software India quickly and efficiently. No confusion or guesswork — just a clear development strategy that aligns with your project timeline and business objectives.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Stepper Timeline */}
          <Grid item xs={12} md={6.5}>
            <Box sx={{ position: "relative", pl: { xs: 2, md: 8 } }}>

              <img src={img} alt="" style={{ width: "100%", height: "auto", borderRadius: '20px' }} />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default RealEstateProcess;

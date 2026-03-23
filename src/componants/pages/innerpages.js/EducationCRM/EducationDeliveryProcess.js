import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import img from "../../../../assets/Real estate sprint process infographic.png"
const steps = [
  { num: "01", title: "Discovery", icon: <SearchIcon /> },
  { num: "02", title: "Design", icon: <DesignServicesIcon /> },
  { num: "03", title: "Development", icon: <CodeIcon /> },
  { num: "04", title: "Training & UAT", icon: <PeopleIcon /> },
  { num: "05", title: "Launch & Support", icon: <RocketLaunchIcon /> }
];

const EducationDeliveryProcess = () => {
  return (
    <Box sx={{ bgcolor: "#e0fbfc", position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          {/* Left Text Side */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography sx={{ color: "#00B4D8", fontWeight: 700, mb: 2, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Our Process
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", mb: 3, fontSize: { xs: "36px", md: "48px" }, lineHeight: 1.1 }}>
                From brief to launch in a structured sprint
              </Typography>
              <Typography sx={{ color: "#444", fontSize: "18px", lineHeight: 1.6 }}>
                Describes exactly how a structured training system that deals exclusively to your teams handles standard real estate businesses.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Stepper Timeline */}
          <Grid item xs={12} md={7}>
            <Box sx={{ position: "relative", pl: { xs: 2, md: 8 } }}>

              <img src={img} alt="Real estate sprint process infographic" width={"100%"} height={"100%"} style={{ borderRadius: "16px" }} />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default EducationDeliveryProcess;

import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";
import img from '../../../../assets/edu-crm-tech-img.png'

const EducationBanner = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        // 1. Reduced minHeight from 100vh to 75vh to pull the section up
        minHeight: { xs: "auto", md: "75vh" },
        bgcolor: "#0B2046",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        // 2. Reduced top padding significantly (md: 0 to md: 4 keeps it from hitting the roof)
        pt: { xs: 6, md: 4 },
        pb: { xs: 12, md: 6 }
      }}
    >
      {/* Background Decorative Elements */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.8 }}>
        {/* 3. Moved the radial glow higher (top: -20% to top: -35%) */}
        <Box sx={{ position: "absolute", top: "-35%", right: "-10%", width: "70%", height: "70%", background: "radial-gradient(circle, rgba(0, 180, 216, 0.4) 0%, rgba(11, 32, 70, 0) 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "5%", right: "15%", width: "40%", height: "60%", background: "linear-gradient(135deg, rgba(0,180,216,0.2) 0%, rgba(144,224,239,0.1) 100%)", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(40px)" }}
        />
      </Box>

      {/* Wave SVG stay the same */}
      <Box sx={{ position: "absolute", bottom: -5, left: 0, width: "100%", zIndex: 1 }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,150 C320,50 420,-20 720,50 C1020,120 1120,50 1440,0 L1440,150 L0,150 Z" fill="#cbf3f0" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* 4. Reduced spacing from 6 to 4 to keep the Grid contents tighter */}
        <Grid container spacing={4} alignItems="center">

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Lowered y-offset for a tighter entry
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Internal margins shortened to pull content upward */}
              <Typography sx={{ color: "#00B4D8", fontWeight: 700, mb: 1, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
                EDUCATION CRM SOLUTIONS
              </Typography>

              <Typography variant="h1" sx={{ color: "#ffffff", fontWeight: 800, fontSize: { xs: "26px", md: "52px" }, lineHeight: 1.1, mb: 2 }}>
                Education CRM for Faster Admissions
              </Typography>

              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", lineHeight: 1.6, mb: 4, maxWidth: "500px" }}>
                We build smart education CRM systems that simplify admissions, automate follow-ups, and increase conversions.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 5 }}>
                <Button
                  variant="contained"
                  onClick={() => setOpenPopup(true)}
                  sx={{ bgcolor: "#00B4D8", color: "#fff", px: 4, py: 1.5, borderRadius: "30px", fontWeight: 700, textTransform: "none", "&:hover": { bgcolor: "#0096b4" } }}
                >
                  Get Free Demo
                </Button>
                {/* <Button variant="outlined" sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)", px: 4, py: 1.5, borderRadius: "30px", fontWeight: 600, textTransform: "none", "&:hover": { borderColor: "#fff" } }}>
                  Explore Education CRM Features
                </Button> */}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* 5. Added a slight negative top margin on desktop to pull the image up */}
            <Box sx={{ position: "relative", width: "100%", mt: { md: -4 }, ml: "auto", mr: { xs: "auto", md: 0 } }}>
              <img src={img} alt="Education CRM" style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: '20px' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default EducationBanner;

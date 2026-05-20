import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";
import ListAltIcon from '@mui/icons-material/ListAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import img from "../../../../assets/listingimage.png";
const StatRow = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
      <Box sx={{
        width: 32, height: 32, borderRadius: "50%",
        bgcolor: "rgba(34, 197, 94, 0.1)",
        display: "flex", justifyContent: "center", alignItems: "center",
        color: "#22c55e"
      }}>
        <Icon sx={{ fontSize: 18 }} />
      </Box>
      <Typography sx={{ color: "#444", fontSize: "15px", fontWeight: 600 }}>
        {text}
      </Typography>
    </Box>
  </motion.div>
);

const ListingBanner = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "60vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #f0fdf4 100%)", // Very light bluish-green to white
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 15, md: 5 },
        pb: { xs: 10, md: 5 }
      }}
    >
      {/* Decorative gradient blur in background */}
      <Box sx={{ position: "absolute", top: "10%", right: "10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%", filter: "blur(40px)", zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">

          {/* Left Text Area */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" sx={{ color: "#1a1a1a", fontWeight: 800, fontSize: { xs: "26px", md: "52px" }, lineHeight: 1.1, mb: 2 }}>
                India’s Fast Business & Product Listings
              </Typography>

              <Typography variant="h2" sx={{ color: "#16409aff", fontWeight: 700, fontSize: { xs: "18px", md: "20px" }, mb: 2 }}>
                Build scalable business listing website India solutions, product listing websites, CRMs, dashboards, and custom portals tailored for every industry.
              </Typography>

              <Typography sx={{ color: "#444", fontSize: "16px", lineHeight: 1.6, mb: 4, maxWidth: "550px" }}>
                We create powerful, user-friendly product listing websites that boost engagement, conversions, and growth for startups and enterprises.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  onClick={() => setOpenPopup(true)}
                  sx={{
                    bgcolor: "#2563eb", // Royal Blue from mock
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14px",
                    px: 4,
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
                  Get a Free Demo
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Floating Stats Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(255,255,255,1)",
                  maxWidth: "400px",
                  mx: "auto",
                  ml: { md: "auto" }
                }}
              >
                <img src={img} alt="Listing Platform Features"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>

        </Grid>
        <Box sx={{ mt: 5, display: "flex", flexDirection: "row", gap: 1, justifyContent: 'space-between' }}>
          <StatRow icon={CheckCircleOutlineIcon} text="100+ Projects Delivered" delay={0.2} />
          <StatRow icon={SpeedIcon} text="Scalable & Secure Solutions" delay={0.4} />
          <StatRow icon={ListAltIcon} text="Custom Built for Every Industry" delay={0.6} />
        </Box>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ListingBanner;

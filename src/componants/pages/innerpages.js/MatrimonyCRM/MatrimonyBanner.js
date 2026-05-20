import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";
import img from '../../../../assets/trusted-matrimony-app.png';

const MatrimonyBanner = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        bgcolor: "#0B1528",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",

        // ✅ FIXED SPACING
        py: { xs: 1, md: 0 }
      }}
    >
      {/* Background Effects */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box sx={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(circle, rgba(0,180,216,0.15), transparent)",
          borderRadius: "50%",
          filter: "blur(60px)"
        }} />

        <Box sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.5
        }} />
      </Box>

      {/* Bottom Gradient */}
      <Box sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "40px",
        background: "linear-gradient(180deg, transparent, rgba(224,247,250,0.2))",
        zIndex: 1
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography sx={{ color: "#00B4D8", fontWeight: 700, letterSpacing: 1.5, mb: 1.5, fontSize: "12px", textTransform: "uppercase" }}>
                TRUSTED MATCHMAKING TECHNOLOGY
              </Typography>
              <Typography variant="h1" sx={{ color: "#ffffff", fontWeight: 800, fontSize: { xs: "28px", md: "48px" }, lineHeight: 1.1, mb: 3 }}>
                Trusted <Box component="span" sx={{ color: "#00B4D8" }}>Matrimony App</Box> Development Company for Modern Matchmaking Platforms
              </Typography>

              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.6, mb: 5, maxWidth: "550px" }}>
                As an experienced matrimony app development company, we create modern matchmaking apps that help matrimony businesses manage profiles, connect matches, and grow their platform efficiently.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  onClick={() => setOpenPopup(true)}
                  sx={{
                    background: "linear-gradient(90deg, #00B4D8 0%, #0096b4 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14px",
                    px: 4,
                    py: 2,
                    borderRadius: "30px",
                    textTransform: "none",
                    boxShadow: "0 8px 20px rgba(0, 180, 216, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #0096b4 0%, #007a99 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 25px rgba(0, 180, 216, 0.4)",
                    },
                    transition: "all 0.3s"
                  }}
                >
                  Start Your Matrimony App
                </Button>

                {/* <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(0, 180, 216, 0.5)",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "14px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    bgcolor: "rgba(0, 180, 216, 0.1)",
                    "&:hover": {
                      borderColor: "#00B4D8",
                      bgcolor: "rgba(0, 180, 216, 0.2)",
                    }
                  }}
                >
                  View Features
                </Button> */}
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>
            <img
              src={img}
              alt="Matrimony App"
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </Grid>

        </Grid>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default MatrimonyBanner;
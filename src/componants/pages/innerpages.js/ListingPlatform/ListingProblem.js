import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";
import img from "../../../../assets/the-problem1.png"

const ListingProblem = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#242A38", py: isMobile ? 6 : 10, position: "relative", overflow: "hidden" }}> {/* Dark navy/grey from mock */}
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 4 : 8} alignItems="center">

          {/* Left Graphic Side */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", height: isMobile ? "250px" : "400px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

              {/* Background abstract shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', width: isMobile ? '200px' : '300px', height: isMobile ? '200px' : '300px', borderRadius: '50%', backgroundColor: '#ef4444', filter: 'blur(60px)', zIndex: 0 }}
              />

              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: '20px' }} />

            </Box>
          </Grid>

          {/* Right Text Side */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: isMobile ? "center" : "left" }}
            >
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: isMobile ? "1.75rem" : "2.8rem", mb: 2 }}>
                The Hidden Problems Behind Most Top Listing Sites
              </Typography>

              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", mb: 5, lineHeight: 1.6, maxWidth: isMobile ? "100%" : "500px", mx: isMobile ? "auto" : 0 }}>
                Many top listing sites look good on the surface but fail where it matters—performance, scalability, and revenue generation.
              </Typography>

              <Box component="ul" sx={{
                p: 0, m: 0, listStyle: "none", mb: 4,
                textAlign: "left",
                "& li": {
                  position: "relative",
                  paddingLeft: "30px",
                  marginBottom: "20px",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 500,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "8px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#ef4444" // Red bullet
                  }
                }
              }}>
                <li>Limited control with plugin-based systems</li>
                <li>Spam and duplicate listings reduce trust</li>
                <li>Poor mobile experience affects user engagement</li>
                <li>Manual monetization with no automation</li>
                <li>Lack of analytics and performance insights</li>
              </Box>

              <Button
                variant="contained"
                onClick={() => setOpenPopup(true)}
                sx={{
                  bgcolor: "#ef4444",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "15px",
                  px: isMobile ? 4 : 5,
                  py: 1.5,
                  borderRadius: "8px",
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(239, 68, 68, 0.3)",
                  "&:hover": {
                    bgcolor: "#dc2626",
                    boxShadow: "0 6px 20px rgba(239, 68, 68, 0.4)",
                  },
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ListingProblem;

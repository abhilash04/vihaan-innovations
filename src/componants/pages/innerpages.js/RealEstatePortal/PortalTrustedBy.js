import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";

const logos = [
  { name: "Zillow", img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Zillow_logo.svg" },
  { name: "Redfin", img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Redfin_logo.svg" },
  { name: "Trulia", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Trulia_logo.svg" },
  { name: "Realtor", img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Realtor.com_logo.svg" },
  { name: "LoopNet", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/LoopNet_logo.svg" },
  { name: "Compass", img: "https://upload.wikimedia.org/wikipedia/commons/0/07/Compass_logo_%28standard%29.svg" },
];

const PortalTrustedBy = () => {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "#0C1424", // Slightly lighter dark
        color: "#FFFFFF",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 1.5,
              }}
            >
              Trusted By Global{" "}
              <Box component="span" sx={{ color: "#3B82F6" }}>
                Real Estate Businesses
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "0.95rem",
              }}
            >
              Powering data-driven brokerage portals, enterprise multiple-listing
              services, and investment dashboards worldwide.
            </Typography>
          </motion.div>
        </Box>

        {/* Logo Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {logos.map((logo, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Box
                  sx={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    p: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Urbanist', sans-serif",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "1.1rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {logo.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Stats Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            pt: 6,
            gap: 4,
          }}
        >
          {[
            { value: "500+", label: "Portals Developed" },
            { value: "20M+", label: "Monthly Data Users" },
            { value: "100+", label: "Property Markets" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ textAlign: "center" }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#3B82F6", // Electric Blue
                  mb: 0.5,
                  textShadow: "0 0 20px rgba(59,130,246,0.15)",
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255, 255, 255, 0.5)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PortalTrustedBy;

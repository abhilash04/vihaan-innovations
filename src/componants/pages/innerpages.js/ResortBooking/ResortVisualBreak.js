import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Trees, Compass, Anchor, Ship } from "lucide-react";

const items = [
  { icon: <Trees size={32} />, title: "Eco Resorts", desc: "Green operations and sustainability tracking." },
  { icon: <Compass size={32} />, title: "Adventure Lodges", desc: "Activity bookings & gear inventory manager." },
  { icon: <Anchor size={32} />, title: "Marina Stays", desc: "Docking allocations and waterfront logistics." },
  { icon: <Ship size={32} />, title: "Island Escapes", desc: "Ferry syncs and isolated supply chain alerts." },
];

const ResortVisualBreak = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#F9F6F0", // Light Cream/Ivory
        color: "#0A111E", // Dark Navy Text
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              Tailored For Every Escape
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(10, 17, 30, 0.7)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Our architecture scales down to intimate retreats and expands to
              isolated island chain infrastructures alike.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    border: "2px solid rgba(212, 175, 55, 0.3)", // Gold outline
                    bgcolor: "transparent",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(212, 175, 55, 0.05)",
                      boxShadow: "0 10px 25px rgba(212,175,55,0.1)",
                    },
                  }}
                >
                  <Box sx={{ color: "#0A111E", mb: 2 }}>{item.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "rgba(10, 17, 30, 0.6)",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ResortVisualBreak;

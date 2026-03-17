import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { TrendingUp, Heart, Zap, Shield, HelpCircle } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp size={32} color="#D4AF37" />,
    title: "Increased Revenue",
    desc: "Maximize occupancy with intelligent booking yield management.",
    bullets: ["Dynamic pricing triggers", "Up-sell amenity workflows"],
    glow: "rgba(212, 175, 55, 0.15)",
  },
  {
    icon: <Heart size={32} color="#D4AF37" />,
    title: "Enhanced Guest Loyalty",
    desc: "Personalized experiences that drive five-star reviews.",
    bullets: ["Guest preference maps", "Loyalty discount hooks"],
    glow: "rgba(255, 105, 180, 0.1)",
  },
  {
    icon: <Zap size={32} color="#D4AF37" />,
    title: "Operational Efficiency",
    desc: "Free up staff that matter to focus on the guest experience.",
    bullets: ["Task auto-delegates", "Live stock check triggers"],
    glow: "rgba(0, 191, 255, 0.1)",
  },
];

const bottomBenefits = [
  {
    icon: <Shield size={32} color="#D4AF37" />,
    title: "Staff Transparency",
    desc: "No missed handovers or pending room clean notifications.",
    bullets: ["Shift audit reports", "Real-time task completion flags"],
    glow: "rgba(50, 205, 50, 0.1)",
  },
  {
    icon: <HelpCircle size={32} color="#D4AF37" />,
    title: "Data Intelligence",
    desc: "Make decisions backed by historical yield and performance graphs.",
    bullets: ["Yield variance visual", "Consolidated monthly analytics"],
    glow: "rgba(147, 112, 219, 0.1)",
  },
];

const ResortBenefits = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0",
      }}
    >
      <Container maxWidth="lg">
        {/* Intro */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
              The Business Advantage
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(245, 245, 240, 0.6)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Discover how next-gen automation translates to higher margins and
              exclusive guest satisfaction scores.
            </Typography>
          </motion.div>
        </Box>

        {/* Top Row - 3 Cards */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {benefits.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(245, 245, 240, 0.04)",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-20%",
                      left: "30%",
                      width: "150px",
                      height: "150px",
                      background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
                      zIndex: 0,
                    },
                    "&:hover": {
                      boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                      borderColor: "rgba(212, 175, 55, 0.3)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        mb: 1.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        color: "rgba(245, 245, 240, 0.7)",
                        mb: 2,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </Typography>
                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                      {item.bullets.map((bullet, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: "0.85rem",
                            color: "rgba(245, 245, 240, 0.5)",
                            mb: 0.8,
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          <Box sx={{ width: "4px", height: "4px", borderRadius: "50%", bgcolor: "#D4AF37" }} />
                          {bullet}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Row - 2 Cards Centered */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          {bottomBenefits.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(245, 245, 240, 0.04)",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-20%",
                      left: "30%",
                      width: "150px",
                      height: "150px",
                      background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
                      zIndex: 0,
                    },
                    "&:hover": {
                      boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                      borderColor: "rgba(212, 175, 55, 0.3)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        mb: 1.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Outfit', sans-serif",
                        color: "rgba(245, 245, 240, 0.7)",
                        mb: 2,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </Typography>
                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                      {item.bullets.map((bullet, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: "0.85rem",
                            color: "rgba(245, 245, 240, 0.5)",
                            mb: 0.8,
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          <Box sx={{ width: "4px", height: "4px", borderRadius: "50%", bgcolor: "#D4AF37" }} />
                          {bullet}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              fontFamily: "'Outfit', sans-serif",
              background: "linear-gradient(90deg, #D4AF37, #B08D28)",
              color: "#0A111E",
              px: 5,
              py: 1.8,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 10px 20px rgba(212,175,55,0.2)",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 15px 25px rgba(212,175,55,0.3)",
              },
            }}
          >
            Start Your Transformation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ResortBenefits;

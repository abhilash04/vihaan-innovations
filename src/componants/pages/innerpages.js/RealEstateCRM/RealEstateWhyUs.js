import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const WhyCard = ({ num, icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 4 }}>
      <Typography sx={{ color: "#b0b8c4", fontSize: "16px", fontWeight: 700, mr: 2, minWidth: "20px" }}>
        {num}
      </Typography>
      <Box sx={{
        width: 50, height: 50, borderRadius: "12px",
        bgcolor: "#f0f8ff", color: "#00B4D8",
        display: "flex", justifyContent: "center", alignItems: "center", mr: 2
      }}>
        <Icon sx={{ fontSize: 24 }} />
      </Box>
      <Box>
        <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", mt: 1.5 }}>
          {title}
        </Typography>
      </Box>
    </Box>
  </motion.div>
);

const RealEstateWhyUs = () => {
  return (
    <Box sx={{
      bgcolor: "#ffffff",
      py: 6,
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Background shape matching the mock design top wave from the bottom section */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30%',
        background: 'linear-gradient(0deg, #0c1b44 0%, rgba(255,255,255,0) 100%)',
        zIndex: 0,
        clipPath: "ellipse(150% 100% at 50% 100%)"
      }} />

      {/* Decorative Arrow */}
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', mb: 6 }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownwardIcon sx={{ color: "#00B4D8", fontSize: 40 }} />
        </motion.div>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>

        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "42px" }, mb: 2 }}>
            Why Vihaan Innovations
          </Typography>
          <Typography sx={{ color: "#555", fontSize: "20px", fontWeight: 600 }}>
            We don’t just provide software.<br />We deliver powerful Real Estate CRM System solutions that solve real estate business challenges.
          </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center">

          {/* Left Grid with 4 Features */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <WhyCard num="01" icon={MapsHomeWorkOutlinedIcon} title="Real Estate Domain Expertise" delay={0.1} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhyCard num="02" icon={HandymanOutlinedIcon} title="Custom, Not Cookie-Cutter" delay={0.2} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhyCard num="03" icon={HandshakeOutlinedIcon} title="End-to-End Ownership" delay={0.3} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhyCard num="04" icon={Diversity3OutlinedIcon} title="Post-Launch Partnership" delay={0.4} />
              </Grid>
            </Grid>
          </Grid>

          {/* Right Testimonial */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: "24px",
                  bgcolor: "#ffffff",
                  position: "relative",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.04)"
                }}
              >
                {/* Decorative Sparkles & Quotes */}
                <Box sx={{ position: "absolute", top: -20, left: 20, bgcolor: "#ffeaa7", width: 12, height: 12, transform: "rotate(45deg)" }} />
                <Box sx={{ position: "absolute", bottom: -15, right: 40, bgcolor: "#a8e6cf", width: 16, height: 16, borderRadius: "50%" }} />
                <Box sx={{ position: "absolute", top: 30, right: 40, opacity: 0.1, color: "#00B4D8" }}>
                  <FormatQuoteIcon sx={{ fontSize: 80 }} />
                </Box>

                <Typography sx={{ fontSize: "18px", color: "#333", lineHeight: 1.8, fontStyle: "italic", mb: 4, position: "relative", zIndex: 1 }}>
                  “Vihaan’s platform replaced the multiple tools we used earlier for product development. Our team now spends 80% of their time building and improving the product instead of managing scattered systems.”
                </Typography>

                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "16px" }}>
                    — Product Head,
                  </Typography>
                  <Typography sx={{ color: "#666", fontSize: "14px" }}>
                    VihaanInnovations, Bangalore
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default RealEstateWhyUs;

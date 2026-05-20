import React, { useState } from "react";
import { Box, Typography, Container, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";

const steps = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "We understand your resort and goals.",
    bullets: ["Research your brand", "Analyze competitors", "Plan booking flow"],
  },
  {
    num: "02",
    title: "Design",
    desc: "We create a beautiful and user-friendly design.",
    bullets: ["Modern layout", "Mobile-friendly design", "Smooth user experience"],
  },
  {
    num: "03",
    title: "Development",
    desc: "We build your website with smart features.",
    bullets: ["Booking system integration", "Secure payment setup", "Fast performance"],
  },
  {
    num: "04",
    title: "Testing",
    desc: "We make sure everything works perfectly.",
    bullets: ["Speed testing", "Device compatibility", "Booking system testing"],
  },
  {
    num: "05",
    title: "Launch & Growth",
    desc: "We help you grow after launch.",
    bullets: ["SEO setup", "Performance tracking", "Continuous improvements"],
  },
];

const ResortProcess = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        py: isMobile ? 6 : 8,
        bgcolor: "rgba(255, 255, 255, 0.01)", // Slightly lighter dark
        color: "#F5F5F0",
        position: "relative",
        borderTop: "1px solid rgba(245, 245, 240, 0.03)",
        borderBottom: "1px solid rgba(245, 245, 240, 0.03)",
        width: "100%",
        overflow: "hidden",
        mx: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? "2.2rem" : "2.5rem",
                mb: 2,
              }}
            >
              Our Resort Website Design Process
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(245, 245, 240, 0.6)",
                maxWidth: "800px",
                margin: "0 auto",
                fontSize: isMobile ? "1rem" : "1.2rem",
              }}
            >
              We follow a simple step-by-step process to build a website that brings you more bookings.
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline Desktop Layout */}
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            mx: "auto",
            mb: 6,
          }}
        >
          {/* Connecting Line Drawing on View */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "30px",
              left: "10%",
              height: "2px",
              background: "linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3))",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                px: 1,
              }}
            >
              {/* Circular Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    bgcolor: "#0A111E",
                    border: "2px solid #D4AF37",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px auto",
                    boxShadow: "0 0 15px rgba(212,175,55,0.2)",
                    position: "relative"
                  }}
                >
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#D4AF37", fontSize: "1.4rem" }}>
                    {step.num}
                  </Typography>
                </Box>
              </motion.div>

              {/* Node content dropped down */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.4 + 0.3 }}
              >
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 2, fontSize: "1.5rem" }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(245,245,240,0.7)", lineHeight: 1.5, mb: 2 }}>
                  {step.desc}
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none", textAlign: "left", pl: 2 }}>
                  {step.bullets.map((bullet, i) => (
                    <Box component="li" key={i} sx={{
                      fontSize: "1rem", color: "#dd690aff", mb: 0.8, fontFamily: "'Outfit', sans-serif"
                    }}>
                      • {bullet}
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Mobile Layout Stacks steps vertically */}
        <Box sx={{ display: isMobile ? "flex" : "none", flexDirection: "column", gap: 5, px: 3 }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ display: "flex", gap: "24px" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid #dd690aff", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#0A111E" }}>
                  <Typography sx={{ color: "#dd690aff", fontWeight: 700, fontSize: "1.1rem" }}>{step.num}</Typography>
                </Box>
                {index !== steps.length - 1 && <Box sx={{ flexGrow: 1, width: "2px", bgcolor: "#dd690aff", opacity: 0.3, my: 1 }} />}
              </Box>
              <Box sx={{ pt: 1, pb: 4 }}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 1, fontSize: "1.6rem" }}>{step.title}</Typography>
                <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(245,245,240,0.6)", mb: 2 }}>{step.desc}</Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none", textAlign: "left", pl: 1 }}>
                  {step.bullets.map((bullet, i) => (
                    <Box component="li" key={i} sx={{
                      fontSize: "0.95rem", color: "#D4AF37", mb: 0.5, fontFamily: "'Outfit', sans-serif"
                    }}>
                      • {bullet}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: "center", mt: 4, px: 2 }}>
          <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: isMobile ? "1.1rem" : "1.3rem", color: "rgba(245,245,240,0.8)", mb: 4 }}>
            Start building your resort website today and turn visitors into guests.
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpenPopup(true)}
            sx={{
              fontFamily: "'Outfit', sans-serif",
              background: "linear-gradient(90deg, #dd690aff, #B08D28)",
              color: "#0A111E",
              px: 6,
              py: 2,
              borderRadius: "40px",
              fontWeight: 700,
              textTransform: "none",
              fontSize: isMobile ? "0.95rem" : "1.1rem",
              boxShadow: "0 10px 20px rgba(212,175,55,0.2)",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 15px 25px rgba(212,175,55,0.3)",
              },
            }}
          >
            Start Your Resort Website Project
          </Button>
        </Box>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ResortProcess;

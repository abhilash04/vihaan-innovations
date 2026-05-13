import React, { useState } from "react";
import { Box, Typography, Container, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import PopUps from "../../../common/PopUps";

const faqs = [
  { q: "What is resort website design?", a: "It is a website made for resorts to show rooms, services, and allow online bookings." },
  { q: "Why do I need it?", a: "It helps attract more guests and allows easy online booking." },
  { q: "What is a resort management system?", a: "It is software that helps manage bookings, guests, payments, and operations." },
  { q: "How does it help?", a: "It automates tasks and reduces manual work." },
  { q: "Can I accept bookings online?", a: "Yes, guests can book rooms directly on your website." },
  { q: "Is it mobile-friendly?", a: "Yes, you can use it on mobile, tablet, or desktop." },
  { q: "Will it increase bookings?", a: "Yes, faster and easier booking improves occupancy." },
  { q: "Can it be customized?", a: "Yes, it can match your resort’s brand and style." },
  { q: "Is it secure?", a: "Yes, it uses secure systems to protect data." },
  { q: "How do I start?", a: "Contact us and we’ll build a custom solution for your resort." },
];

const ResortFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: isMobile ? 4 : 8,
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
                fontSize: isMobile ? "2.2rem" : "3rem",
                mb: 2,
              }}
            >
              Frequently Asked Questions
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
            </Typography>
          </motion.div>
        </Box>

        {/* Accordion List */}
        <Box sx={{ mb: 6 }}>
          {faqs.map((faq, index) => (
            <Box
              key={index}
              sx={{
                borderBottom: "1px solid rgba(245, 245, 240, 0.08)",
                bgcolor: index % 2 === 0 ? "rgba(245, 245, 240, 0.01)" : "transparent",
              }}
            >
              <Box
                onClick={() => toggleAccordion(index)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 3,
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.02)" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                >
                  {faq.q}
                </Typography>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: "#D4AF37" }}
                >
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </Box>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <Box sx={{ p: 3, pt: 0, color: "rgba(245, 245, 240, 0.7)", fontSize: "0.9rem", fontFamily: "'Outfit', sans-serif", lineHeight: 1.6 }}>
                      {faq.a}
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          ))}
        </Box>

        {/* Footer CTA Block Banner with Pulse Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              p: 6,
              borderRadius: "20px",
              bgcolor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(212, 175, 55, 0.2)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
              // Pulse keyframe border animation via MUI System styles
              animation: "glowPulse 3s infinite",
              "@keyframes glowPulse": {
                "0%": { boxShadow: "0 0 10px rgba(212, 175, 55, 0.1)" },
                "50%": { boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" },
                "100%": { boxShadow: "0 0 10px rgba(212, 175, 55, 0.1)" },
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? "1.6rem" : "2.5rem",
                mb: 1.5,
              }}
            >
              Ready to Build a Powerful Resort Website?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(245, 245, 240, 0.6)",
                maxWidth: "600px",
                margin: "0 auto 4px auto",
                fontSize: "0.95rem",
              }}
            >
              Improve your resort business with a smart website and management system.
            </Typography>
              <Button
                variant="contained"
                onClick={() => setOpenPopup(true)}
                endIcon={<ArrowRight size={18} />}
                sx={{
                  mt: 4,
                  fontFamily: "'Outfit', sans-serif",
                  bgcolor: "#D4AF37",
                  color: "#0A111E",
                  px: isMobile ? 3 : 5,
                  py: isMobile ? 1.5 : 1.8,
                  borderRadius: "30px",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  "&:hover": { bgcolor: "#E5C158" },
                }}
              >
              Get Your Resort Website Today
            </Button>
          </Box>
        </motion.div>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ResortFAQ;

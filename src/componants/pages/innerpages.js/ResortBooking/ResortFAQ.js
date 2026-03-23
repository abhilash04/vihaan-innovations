import React, { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What does the onboarding process look like?",
    a: "We start with a property audit layout to configure room grids, synchronize OTAs with dynamic keys, and map staff permissions dashboards in under 72 hours.",
  },
  {
    q: "Can it integrate with our existing accounting tool?",
    a: "Yes, our Secure hooks support deep exports to Tally, Quickbooks, and custom ERP files automatically with monthly audit locks.",
  },
  {
    q: "How does the housekeeping dispatch work?",
    a: "Ground staff receive instant push alerts on their digital dashboard cards detailing checklist priority and inventory stock clearance hooks.",
  },
  {
    q: "Is there support for multi-currency property lists?",
    a: "Absolutely. Multi-node setups accommodate global rate cards, automated tax lockboxes, and consolidated revenue graphs intuitively.",
  },
];

const ResortFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
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
              Everything you need to know about integrating our intelligent resort
              booking engine.
            </Typography>
          </motion.div>
        </Box>

        {/* Accordion List */}
        <Box sx={{ mb: 10 }}>
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
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 1.5,
              }}
            >
              Ready to Streamline Your Resort?
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
              Book a 15-minute consultation with our deployment specialist today.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                mt: 4,
                fontFamily: "'Outfit', sans-serif",
                bgcolor: "#D4AF37",
                color: "#0A111E",
                px: 5,
                py: 1.8,
                borderRadius: "30px",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#E5C158" },
              }}
            >
              Request 1:1 Live Demo
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ResortFAQ;

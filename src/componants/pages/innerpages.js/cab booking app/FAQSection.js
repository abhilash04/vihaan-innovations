import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import PopUps from "../../../common/PopUps";

const faqs = [
  {
    question: "What is a car booking management system?",
    answer: "A car booking management system is a digital platform that allows businesses to manage vehicle bookings, drivers, payments, and ride scheduling from one centralized dashboard.",
  },
  {
    question: "Can customers book rides online?",
    answer: "Yes. Customers can check vehicle availability and book rides instantly through a website or mobile app. The system sends instant booking confirmation notifications.",
  },
  {
    question: "Does the system support multiple vehicles and fleets?",
    answer: "Yes. You can manage multiple fleets, vehicle categories, and drivers from a single centralized dashboard with full visibility across your entire fleet.",
  },
  {
    question: "Can the platform integrate payment gateways?",
    answer: "Yes. Secure payment gateways can be integrated for online ride payments. The system also supports automated invoice generation and fare calculation.",
  },
  {
    question: "Is the system mobile friendly?",
    answer: "Yes. The platform is fully responsive and works seamlessly on desktops, tablets, and mobile devices for both customers and administrators.",
  },
  {
    question: "Can I customize the platform for my business?",
    answer: "Absolutely. The platform can be tailored to your specific business needs — including branding, booking workflows, pricing rules, and custom reports.",
  },
  {
    question: "Does it support driver dispatch and GPS tracking?",
    answer: "Yes. The system includes smart driver dispatch with GPS-based ride tracking, real-time status updates, and driver performance monitoring.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        background: "#f9f9f9", // Off-white contrast
        position: "relative",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#fd544e",
            fontWeight: 600,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "#1a1a1a", fontWeight: 800, mb: 2 }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#666", maxWidth: 600, mx: "auto", mb: 8 }}
        >
          Common questions about our car booking management system. Can't find your answer? Contact our team.
        </Typography>
      </motion.div>

      {/* Accordion List */}
      <Box sx={{ maxWidth: 800, mx: "auto", display: "flex", flexDirection: "column", gap: 1.5 }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Box
              key={index}
              sx={{
                background: "#ffffff", // White Accordion
                border: "1px solid",
                borderColor: isOpen ? "rgba(253, 84, 78, 0.2)" : "rgba(0,0,0,0.05)",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: isOpen ? "0 4px 15px rgba(0,0,0,0.03)" : "none",
                "&:hover": {
                  background: "#fdfdfd",
                  borderColor: isOpen ? "rgba(253, 84, 78, 0.3)" : "rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                onClick={() => toggleFAQ(index)}
                sx={{
                  p: 2.5,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: isOpen ? "#f78361" : "#1a1a1a",
                    fontWeight: 600,
                    fontSize: "16px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {faq.question}
                </Typography>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: "#fd544e" }}
                >
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </Box>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <Box sx={{ p: 2.5, pt: 0, borderTop: "1px solid rgba(0,0,0,0.03)" }}>
                      <Typography sx={{ color: "#555", fontSize: "14px", lineHeight: 1.6 }}>
                        {faq.answer}
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          );
        })}
      </Box>

      {/* CTA Block Below */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box
          sx={{
            maxWidth: 600,
            mx: "auto",
            mt: 8,
            p: 4,
            background: "#ffffff", // White CTA back
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: "20px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="h5" sx={{ color: "#1a1a1a", fontWeight: 800, mb: 1 }}>
            Ready to Launch Your Car Booking Platform?
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "14px", mb: 3 }}>
            Transform your transportation business with a modern car booking management system that simplifies bookings, manages drivers, and increases ride revenue.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => setOpenPopup(true)}
              sx={{
                background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
                color: "#fff",
                borderRadius: "24px",
                px: 3,
                py: 2,
                boxShadow: "0 4px 15px rgba(253, 84, 78, 0.3)",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Start Your Car Booking Platform
            </Button>
            {/* <Button
              variant="outlined"
              sx={{
                borderColor: "#fd544e",
                color: "#fd544e",
                borderRadius: "24px",
                px: 3,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { borderColor: "#f78361", color: "#f78361" },
              }}
            >
              View Platform Features
            </Button> */}
          </Box>
        </Box>
      </motion.div>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default FAQSection;

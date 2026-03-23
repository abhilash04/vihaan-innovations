import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a car on the app?",
    answer: "Simply open the app, enter your pickup and drop location, select dates, choose from available cars, and confirm with pay to book in seconds.",
  },
  {
    question: "What documents do I need to rent a car?",
    answer: "You will need a valid Driving License, Aadhar Card / Passport for ID proof, and a credit/debit card for insurance and security hold.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes! You can cancel or modify your booking from the 'My Bookings' tab up to 2 hours before the scheduled pickup for a full refund.",
  },
  {
    question: "Is there a security deposit required?",
    answer: "A fully refundable security deposit is placed as a hold on your card for premium vehicles, which is released 24 hours after completion.",
  },
  {
    question: "What happens if the car breaks down during my trip?",
    answer: "We offer 24/7 Roadside Assistance. Just use the 'Help' button in the app and our team will dispatch mechanics or a replacement car ASAP.",
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, our pricing is completely transparent. Fuel conditions, extra km charges, and GST are all shown clearly on the review screen before payment.",
  },
  {
    question: "Is the app available on both Android and iOS?",
    answer: "Yes, the app is available for download on both the Google Play Store and Apple App Store. Scan the QR at the bottom for quick install.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 4, md: 8 },
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
          Section 11
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
          Have questions? We have answers. Check out our most common queries below.
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
            Ready to hit the road?
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "14px", mb: 3 }}>
             Download our app and book your perfect drive today.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
                color: "#fff",
                borderRadius: "24px",
                px: 3,
                boxShadow: "0 4px 15px rgba(253, 84, 78, 0.3)",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Download App
            </Button>
            <Button
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
              Book Now
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default FAQSection;

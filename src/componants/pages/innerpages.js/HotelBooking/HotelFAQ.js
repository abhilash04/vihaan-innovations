import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { q: "Can I keep using OTAs while running my own booking engine?", a: "Absolutely. Your own booking engine runs alongside the OTAs. The channel manager syncs inventory across all, so you can gradually grow your direct channel without losing OTA visibility." },
  { q: "How long does it take to launch the platform?", a: "For a standard hotel with PMS + booking engine + channel manager, the typical timeline is 6–10 weeks depending on customization requirements and content readiness." },
  { q: "Do you support multiple properties under one account?", a: "Yes. We build multi-property dashboards for hotel groups and chains where a central admin can manage all properties, with individual logins per property manager." },
  { q: "Is the payment gateway included?", a: "We integrate Razorpay, Stripe, and PayU by default. Setup and configuration are included in the delivery scope." },
  { q: "Can guests do self check-in on mobile?", a: "Yes. With our digital check-in module, guests receive a link to submit documents, select rooms, and check in before arrival — saving front desk time significantly." },
  { q: "Will there be training for my staff?", a: "Yes. We provide role-based training for front desk, housekeeping managers, revenue managers, and admins as part of our onboarding sprint." },
];

const HotelFAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  return (
    <Box sx={{ bgcolor: "#f0faf8", py: 12 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>Frequently Asked Questions</Typography>
        </Box>
        {faqs.map((faq, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
            <Accordion expanded={expanded === `panel${i}`} onChange={(_, v) => setExpanded(v ? `panel${i}` : false)} elevation={0} disableGutters
              sx={{ mb: 2, bgcolor: "transparent", border: `1px solid ${expanded === `panel${i}` ? "#0f766e" : "rgba(0,0,0,0.09)"}`, borderRadius: "14px !important", overflow: "hidden", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#0f766e" }} />}
                sx={{ bgcolor: expanded === `panel${i}` ? "rgba(15,118,110,0.06)" : "#ffffff", px: 3, py: 1.5 }}>
                <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "15px" }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#f8fafc", px: 3, py: 3 }}>
                <Typography sx={{ color: "#475569", fontSize: "15px", lineHeight: 1.7 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default HotelFAQ;

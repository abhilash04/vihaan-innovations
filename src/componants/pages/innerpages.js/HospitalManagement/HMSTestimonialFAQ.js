import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const faqs = [
  { q: "Is the HMS ABDM compliant?", a: "Yes, our sandbox is ABDM (M1, M2, M3) certified, allowing seamless ABHA ID creation and records linking." },
  { q: "Can we integrate existing lab machines?", a: "Yes, our middleware integrates with HL7-compatible machines for automatic report syncing." },
  { q: "How long does implementation take?", a: "Generally 45-90 days depending on hospital bed sizing and data migration depth buffers correctly." }
];

const HMSTestimonialFAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: "#F8FAFC", py: 10, position: "relative" }}>
      <Container maxWidth="md">
        {/* Testimonial Section 13 */}
        <Box sx={{ mb: 10 }}>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", position: "relative", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <FormatQuoteIcon sx={{ position: "absolute", top: -20, left: 20, fontSize: 80, color: "rgba(13, 148, 136, 0.1)" }} />
              <Typography sx={{ fontWeight: 700, color: "#0B2046", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.6, mb: 3, fontStyle: "italic", position: "relative", zIndex: 2 }}>
                "Digitizing our 300-bed facility was a massive undertaking, but Vihaan's clinical interface made adoption seamless for our doctors. OPD wait times dropped by 45% on month one."
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 800, color: "#1E3A8A", fontSize: "14px" }}>Dr. Arpit Sharma</Typography>
                <Typography sx={{ color: "rgba(0,0,0,0.5)", fontSize: "11px", fontWeight: 600 }}>Medical Director, City Hospital Group</Typography>
              </Box>
            </Paper>
          </motion.div>
        </Box>

        {/* FAQ Section 14 */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0D9488", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>SUPPORT & FAQ</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "34px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
              <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "12px !important", color: "#0B2046", "&:before": { display: "none" }, boxShadow: "none" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#1E3A8A" }} />}>
                  <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2 }}>
                  <Typography sx={{ color: "rgba(0,0,0,0.6)", fontSize: "13px", lineHeight: 1.6 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HMSTestimonialFAQ;

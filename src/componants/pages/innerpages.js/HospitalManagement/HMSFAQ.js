import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';
import PopUps from "../../../common/PopUps";

const faqs = [
  { id: "panel1", q: "How long does typical hospital onboarding take?", a: "Most single-facility rollouts take 4-6 weeks, including data migration and staff hypercare onboarding support directly Index." },
  { id: "panel2", q: "Is the data syncing compliant with ABDM?", a: "Yes, our endpoints are fully ABDM aligned with safe digital locker consent tracking setups safe and flawless triggers." },
  { id: "panel3", q: "Can we use only specific modules (e.g., Pharmacy)?", a: "Absolutely. Our platform is modular dashboards, allowing you to scale up as budgets allow securely correctly triggers." }
];

const HMSFAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: "#F4F7FA", py: 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "26px", md: "34px" }, mb: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Frequently Asked Questions
          </Typography>
          <Box sx={{ width: 40, height: "3px", bgcolor: "#0A2D6E", mx: "auto", borderRadius: "1px" }} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 6 }}>
          {faqs.map((faq, i) => (
            <motion.div key={faq.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Accordion expanded={expanded === faq.id} onChange={handleChange(faq.id)} elevation={0} sx={{ p: 1, borderRadius: "12px", border: "1px solid rgba(0,0,0,0.03)", bgcolor: "#ffffff", transition: "all 0.3s", "&:before": { display: "none" }, "&.Mui-expanded": { borderLeft: "4px solid #0A2D6E", boxShadow: "0 10px 25px rgba(10,45,110,0.04)" } }}>
                <AccordionSummary expandIcon={<AddIcon sx={{ color: "#0A2D6E", transition: "all 0.3s", transform: expanded === faq.id ? "rotate(45deg)" : "none" }} />} sx={{ "& .MuiAccordionSummary-content": { m: 0 } }}>
                  <Typography sx={{ color: "#0B2046", fontWeight: 700, fontSize: "14px" }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography sx={{ color: "rgba(0,0,0,0.6)", fontSize: "13px", lineHeight: 1.5 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>

        {/* Bottom CTA Block */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", background: "linear-gradient(135deg, #0A2D6E 0%, #10B981 100%)", textAlign: "center", color: "#ffffff", boxShadow: "0 15px 35px rgba(10,45,110,0.15)" }}>
            <Typography variant="h4" sx={{ fontWeight: 800, fontSize: "20px", mb: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>Still have questions? Let's talk.</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", mb: 3 }}>Book a free 60-minute strategy call with our health consultants.</Typography>
            <Button
              variant="contained"
              onClick={() => setOpenPopup(true)}
              sx={{ bgcolor: "#ffffff", color: "#0A2D6E", fontWeight: 800, px: 3, py: 1.2, borderRadius: "25px", textTransform: "none", "&:hover": { bgcolor: "#f0f4f8" } }}
            >
              Book a Free Demo
            </Button>
          </Paper>
        </motion.div>

      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default HMSFAQ;

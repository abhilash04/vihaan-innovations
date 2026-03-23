import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { q: "Is the HRM data encrypted and secure?", a: "Absolutely. We implement enterprise-grade security protocols, including end-to-end encryption, regular data backups, and role-based access control to protect sensitive employee records." },
  { q: "Can we integrate biometric attendance devices?", a: "Yes, our system accommodates real-time API integrations and standard webhook callbacks to sync attendance from multiple biometric formats and brands directly." },
  { q: "How long does default system configuration take?", a: "Generally 3-4 weeks depending on customized module depths, employee database size, and scale of automated setups." }
];

const HRMFAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: "#ffffff", py: 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>SUPPORT & FAQ</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Fira Sans" }}>
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
              <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ bgcolor: "#F8FAFC", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "16px !important", color: "#1A202C", "&:before": { display: "none" }, boxShadow: "none" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#f97316" }} />}>
                  <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2 }}>
                  <Typography sx={{ color: "rgba(11, 32, 70, 0.7)", fontSize: "13px", lineHeight: 1.6 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HRMFAQ;

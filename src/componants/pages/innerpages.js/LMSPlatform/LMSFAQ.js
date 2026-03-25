import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { q: "Can students download videos for offline viewing?", a: "Yes, our mobile apps built through LMS Website Development support offline video downloads so learners can study without internet access." },
  { q: "Do you support regional and multiple languages?", a: "Yes, the platform supports multiple languages to provide a better learning experience for diverse users." },
  { q: "Can we migrate our existing courses?", a: "Yes, we help you easily transfer your existing courses and content to the new LMS platform." },
  { q: "Is the platform web-only?", a: "No, it works on web, mobile, and tablets for a seamless multi-device experience." },
  { q: "Do instructors get separate dashboards?", a: "Yes, instructors have dedicated dashboards to manage courses, students, and performance." },
  { q: "How is video content protected?", a: "We use secure streaming, encryption, and access controls to protect your content." },
  { q: "How do you handle content piracy?", a: "Advanced security features like DRM, watermarking, and restricted access help prevent piracy." },
  { q: "Can we white-label the platform completely?", a: "Yes, we provide fully white-labeled solutions with your branding, domain, and customisation." },
];

const LMSFAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>FAQ – Common Questions</Typography>
        </Box>
        {faqs.map((faq, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
            <Accordion expanded={expanded === `panel${i}`} onChange={(_, v) => setExpanded(v ? `panel${i}` : false)} elevation={0} disableGutters
              sx={{ mb: 2, bgcolor: "transparent", border: `1px solid ${expanded === `panel${i}` ? "#2563eb" : "#e2e8f0"}`, borderRadius: "12px !important", overflow: "hidden", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#2563eb" }} />}
                sx={{ bgcolor: expanded === `panel${i}` ? "rgba(37,99,235,0.06)" : "#ffffff", px: 3, py: 1.5 }}>
                <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "15px" }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#fafbff", px: 3, py: 3 }}>
                <Typography sx={{ color: "#475569", fontSize: "15px", lineHeight: 1.7 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default LMSFAQ;

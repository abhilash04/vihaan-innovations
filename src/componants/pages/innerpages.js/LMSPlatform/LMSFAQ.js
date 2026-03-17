import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { q: "Can students download videos for offline viewing?", a: "Yes, our mobile apps support offline video downloads for learners who want to study without internet access." },
  { q: "Do you support regional and multiple languages?", a: "Absolutely. Our LMS supports multi-language content, UI localization, and regional language course delivery." },
  { q: "Can we migrate our existing courses?", a: "Yes, we can import existing courses, user data, quiz content, and progress records from any existing platform." },
  { q: "Is the platform web-only?", a: "No. We deliver fully native iOS and Android mobile apps alongside the web platform, optimized for learning on the go." },
  { q: "Do instructors get separate dashboards?", a: "Yes. Instructors get a dedicated portal to manage courses, track student progress, conduct live classes, and view earnings." },
  { q: "How is video content protected?", a: "All video content is DRM protected, hosted on secure CDN (AWS/Cloudflare), with per-user streaming and no direct download URLs." },
  { q: "How do we handle content piracy?", a: "We implement watermarking, screenshot prevention on mobile apps, and DRM encryption to prevent unauthorized content distribution." },
  { q: "Can we white-label the platform completely?", a: "100%. You get your own branding, custom domain, app store listings under your name, and zero Vihaan watermarks anywhere." },
];

const LMSFAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 12 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>FAQ – Address Last-Mile Objections</Typography>
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

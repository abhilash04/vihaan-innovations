import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "Can you build community-specific filters like gotra or sub-caste?",
    answer: "Absolutely, it's one of our key customization capabilities. Our builds improve match ratios and we replicate complex architectures representing deep nuances and expertise in multi-community landscapes."
  },
  {
    question: "Mobile vs web and privacy computation processes?",
    answer: "Answers to multi-mobile and privacy. It balances seamless usability against strict moderation algorithms and access settings."
  },
  {
    question: "Privacy migration and community platforms?",
    answer: "We ensure full data security and GDPR compliance when handling sensitive user profiles, implementing robust encryption and tiered viewing rights."
  },
  {
    question: "Multi-language to max-regional-language?",
    answer: "Our platforms are built to support exhaustive localization, enabling regional language translation seamlessly for grassroots community reach."
  }
];

const MatrimonyFAQ = () => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: "#e3f2fd", py: 12 }}> {/* Light cyan matching the mock's FAQ section */}
      <Container maxWidth="md">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{ 
              fontWeight: 800, color: "#0B2046", fontSize: "28px", 
              display: "flex", alignItems: "center", gap: 1, 
              justifyContent: "center" 
            }}>
              <Box component="span" sx={{ 
                width: 32, height: 32, borderRadius: "50%", 
                border: "2px solid #0B2046", display: "flex", 
                alignItems: "center", justifyContent: "center", fontSize: "18px" 
              }}>14</Box>
              FAQ — Address Last-Mile Objections
            </Typography>
          </Box>
        </Box>

        {/* Accordions */}
        <Box>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Accordion 
                expanded={expanded === `panel${index}`} 
                onChange={handleChange(`panel${index}`)}
                elevation={0}
                disableGutters
                sx={{
                  mb: 2,
                  bgcolor: "transparent",
                  border: "1px solid rgba(0, 180, 216, 0.3)",
                  borderRadius: "12px !important",
                  overflow: "hidden",
                  "&:before": { display: "none" }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#0B2046" }} />}
                  sx={{
                    bgcolor: expanded === `panel${index}` ? "rgba(0, 180, 216, 0.1)" : "#ffffff",
                    borderBottom: expanded === `panel${index}` ? "1px solid rgba(0, 180, 216, 0.2)" : "none",
                    px: 3, py: 1.5,
                    transition: "background-color 0.3s"
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#0B2046", fontSize: "15px" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#F8FAFC", px: 3, py: 3 }}>
                  <Typography sx={{ color: "#444", fontSize: "15px", lineHeight: 1.6 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default MatrimonyFAQ;

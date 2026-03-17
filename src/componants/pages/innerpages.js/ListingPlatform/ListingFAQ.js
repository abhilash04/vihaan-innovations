import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { question: "How do our listing platforms answer?", answer: "We deliver fully custom listing platforms tailored to your vertical—whether job portals, real estate, classifieds, or niche directories. Our platforms include search, analytics, admin tools, and monetization from day one." },
  { question: "What does monetisation mean?", answer: "Monetization means you can earn through featured listings, banner ads, premium subscriptions, and pay-per-enquiry models. We integrate Stripe, Razorpay, and other gateways seamlessly." },
  { question: "What version is the famous platform?", answer: "Our platforms run on modern stacks (React, Node.js, or Next.js) with Elasticsearch for search and scalable cloud infrastructure to handle 1M+ listings without lag." },
  { question: "How remap platform revenue?", answer: "Through a dedicated admin revenue dashboard, you get real-time insights into revenue streams, subscriptions, ad performance, and lister conversions." },
  { question: "What can I cover remotely?", answer: "Fully remote operation is supported through our admin panel—approve listings, manage users, handle support tickets, run reports, and configure all monetization modules without touching any code." }
];

const ListingFAQ = () => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: "#f0f9ff", py: 12 }}> {/* Light blue from mock */}
      <Container maxWidth="md">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            FAQ
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Accordion-style drop-down answers for your questions.
          </Typography>
        </Box>

        {/* Accordions */}
        <Box>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                elevation={0}
                disableGutters
                sx={{
                  mb: 2,
                  bgcolor: "transparent",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: "12px !important",
                  overflow: "hidden",
                  "&:before": { display: "none" }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#3b82f6" }} />}
                  sx={{
                    bgcolor: expanded === `panel${index}` ? "rgba(59, 130, 246, 0.07)" : "#ffffff",
                    borderBottom: expanded === `panel${index}` ? "1px solid rgba(59, 130, 246, 0.15)" : "none",
                    px: 3, py: 1.5,
                    transition: "background-color 0.3s"
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#f8fafc", px: 3, py: 3 }}>
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

export default ListingFAQ;

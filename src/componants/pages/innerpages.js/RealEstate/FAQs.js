import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme, useMediaQuery } from "@mui/material";

const faqs = [
  {
    question: "What real estate software development solutions do you offer?",
    answer:
      "Mortgage Calculation, Condominium Management, Broker Management, Tenant Management, Real Estate CRM With MLS Integration, and Smart Home Automation are some of our real estate software development solutions.",
  },
  {
    question: "How much does it cost to build a custom real estate platform?",
    answer:
      "The cost of building a custom real estate platform is not definite since many factors can influence the pricing. Discuss your needs with our experts and get a rough cost estimation.",
  },
  {
    question: "What is the timeline for developing a real estate website?",
    answer:
      "There is no specific timeline for developing a real estate website since your requirements can significantly influence it. You name your requirements, and our experts will ensure the solution is ready soon.",
  },
  {
    question: "How can custom real estate software impact my lead generation?",
    answer:
      "Custom real estate software solutions can improve your lead generation process by creating lead opportunities, filtering buyers, and managing potential prospects throughout their journey. Such solutions can help you sort and filter your leads for better results with minimal effort.",
  },
  {
    question:
      "How will you ensure my data privacy and security within the real estate software?",
    answer:
      "Data privacy and security are among our significant priorities, and we use many advanced security measures, such as firewalls, cloud storage, and more, to ensure your data remains safe and private.",
  },
  {
    question:
      "Does the real estate app offer data and analytics on user behavior?",
    answer:
      "The real estate software will provide comprehensive reports on user behavior to help you make more informed decisions and choices.",
  },
  {
    question: "Why hire brainvire as a real estate software solutions partner?",
    answer:
      "Brainvire has years of experience in software development for real estate businesses. We understand your needs and are committed to ensuring our solution meets each need. Brainvire is the right choice for anyone looking for a reliable custom real estate software development company.",
  },
];

function FAQs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.default",
        py: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: isMobile ? "100%" : 700, // max width for FAQ content
          mx: "auto", // center content
          px: isMobile ? 2 : 4, // padding: 16px for mobile, 32px for desktop
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: isMobile ? 2 : 4,
          }}
        >
          Frequently Asked Questions (FAQs)
        </Typography>
        {faqs.map((faq, idx) => (
          <Accordion
            key={idx}
            sx={{
              mb: isMobile ? 1.5 : 2,
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              borderRadius: 2,
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls={`faq-${idx}-content`}
              id={`faq-${idx}-header`}
              sx={{
                minHeight: 48,
                py: isMobile ? 1 : 2,
              }}
            >
              <Typography variant={isMobile ? "body1" : "h6"}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQs;

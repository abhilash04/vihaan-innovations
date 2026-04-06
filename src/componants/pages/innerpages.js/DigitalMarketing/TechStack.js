import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

const tools = [
  "Google Analytics 4", "Meta Ads", "Google Ads", "HubSpot", "SEMrush", "Ahrefs", 
  "Mailchimp", "TikTok Ads", "LinkedIn Ads", "Hotjar", "Search Console", "Sprout Social",
  "Canva", "Moosend", "AWeber", "Screaming Frog", "Moz Pro", "SimilarWeb"
];

const TechStack = () => {
  return (
    <Box sx={{ py: 15, bgcolor: "#ffffff", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "32px", md: "42px" },
            fontWeight: 800,
            color: "#0f172a",
            textAlign: "center",
            mb: 8,
            fontFamily: "'Syne', sans-serif"
          }}
        >
          Powered by the Best in <br />
          <Box component="span" sx={{ color: "#2563eb" }}>Modern Marketing Tech.</Box>
        </Typography>

        <Stack spacing={4}>
          <Box sx={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: "40px", whiteSpace: "nowrap" }}
            >
              {[...tools, ...tools].map((tool, i) => (
                <Box
                  key={i}
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: "16px",
                    background: "#f8fafc",
                    border: "1px solid rgba(15, 23, 42, 0.05)",
                    color: "#475569",
                    fontSize: "18px",
                    fontWeight: 800,
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
                    "&:hover": { color: "#2563eb", borderColor: "#2563eb22" },
                    transition: "all 0.3s ease"
                  }}
                >
                  {tool}
                </Box>
              ))}
            </motion.div>
          </Box>
          
          <Box sx={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
             <motion.div
               animate={{ x: [-1000, 0] }}
               transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
               style={{ display: "flex", gap: "40px", whiteSpace: "nowrap" }}
             >
               {[...tools, ...tools].reverse().map((tool, i) => (
                 <Box
                   key={i}
                   sx={{
                     px: 4,
                     py: 2,
                     borderRadius: "16px",
                     background: "#ffffff",
                     border: "1px solid rgba(15, 23, 42, 0.05)",
                     color: "#64748b",
                     fontSize: "18px",
                     fontWeight: 800,
                     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
                     "&:hover": { color: "#f59e0b", borderColor: "#f59e0b22" },
                   }}
                 >
                   {tool}
                 </Box>
               ))}
             </motion.div>
           </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TechStack;

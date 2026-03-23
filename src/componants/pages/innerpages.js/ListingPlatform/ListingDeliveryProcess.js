import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { label: "Concept & Strategy", sub: "Discovery & requirement analysis" },
  { label: "UX/UI Design", sub: "Wireframes & prototyping" },
  { label: "Core Development", sub: "Frontend & Backend integration" },
  { label: "Testing & QA", sub: "Security, load, & bug testing" },
  { label: "Launch & Deployment", sub: "Server setup & going live" },
  { label: "Growth & Maintenance", sub: "Post-launch support & SEO" },
];

const ListingDeliveryProcess = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
            Concept to Launch
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            How We Build Your Business Listing Website India
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}>
            A transparent, milestone-driven development process from discovery to launch, ensuring we deliver a high-performance business listing website India on time and on budget.
          </Typography>
        </Box>

        {/* Horizontal stepper */}
        <Box sx={{ position: "relative", overflowX: "auto" }}>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            minWidth: "900px",
            position: "relative",
            px: 4
          }}>
            
            {/* Horizontal line connector */}
            <Box sx={{
              position: "absolute",
              top: "24px",
              left: "8%",
              right: "8%",
              height: "2px",
              bgcolor: "#3b82f6",
              zIndex: 1
            }} />

            {steps.map((step, index) => {
              const isFirst = index === 0;
              const isLast = index === steps.length - 1;
              return (
                <Box key={index} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.15 }}
                  >
                    <Box sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: "#3b82f6",
                      border: isFirst || isLast ? "3px solid #1d4ed8" : "3px solid #ffffff",
                      boxShadow: "0 0 0 3px #3b82f6, 0 4px 10px rgba(59, 130, 246, 0.3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                      zIndex: 2
                    }}>
                      <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "16px" }}>
                        {index + 1}
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    style={{ textAlign: "center" }}
                  >
                    <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "13px", mb: 1, lineHeight: 1.3, whiteSpace: "pre-line", textAlign: "center" }}>
                      {step.label}
                    </Typography>
                    {step.sub && (
                      <Typography sx={{ color: "#3b82f6", fontSize: "12px", fontWeight: 600, lineHeight: 1.3, textAlign: "center", mt: 0.5, px: 1 }}>
                        {step.sub}
                      </Typography>
                    )}
                  </motion.div>

                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Footer CTA */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "18px", mb: 2 }}>
            Build Your Platform Today
          </Typography>
          <Box
            component="button"
            sx={{
              bgcolor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              px: { xs: 4, md: 5 },
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
              "&:hover": {
                bgcolor: "#1d4ed8",
                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
              },
            }}
          >
            Get Free Proposal
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default ListingDeliveryProcess;

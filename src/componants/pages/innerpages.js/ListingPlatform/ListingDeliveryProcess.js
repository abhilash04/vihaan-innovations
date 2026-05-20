import React, { useState } from "react";
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import PopUps from "../../../common/PopUps";

const steps = [
  { label: "Concept & Strategy", sub: "Discovery & requirement analysis" },
  { label: "UX/UI Design", sub: "Wireframes & prototyping" },
  { label: "Core Development", sub: "Frontend & Backend integration" },
  { label: "Testing & QA", sub: "Security, load, & bug testing" },
  { label: "Launch & Deployment", sub: "Server setup & going live" },
  { label: "Growth & Maintenance", sub: "Post-launch support & SEO" },
];

const ListingDeliveryProcess = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#ffffff", py: isMobile ? 6 : 8 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: isMobile ? 6 : 10 }}>
          <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
            Concept to Launch
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: isMobile ? "1.75rem" : "2.25rem", mb: 2 }}>
            How We Build Your Business Listing Website India
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}>
            A transparent, milestone-driven development process from discovery to launch, ensuring we deliver a high-performance business listing website India on time and on budget.
          </Typography>
        </Box>

        {/* Horizontal stepper */}
        <Box sx={{ position: "relative", overflowX: isMobile ? "hidden" : "auto" }}>
          <Box sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "flex-start",
            minWidth: isMobile ? "100%" : "900px",
            position: "relative",
            px: isMobile ? 2 : 4,
            gap: isMobile ? 4 : 0
          }}>
            
            {/* Horizontal line connector (Desktop only) */}
            {!isMobile && (
              <Box sx={{
                position: "absolute",
                top: "24px",
                left: "8%",
                right: "8%",
                height: "2px",
                bgcolor: "#3b82f6",
                zIndex: 1
              }} />
            )}

            {/* Vertical line connector (Mobile only) */}
            {isMobile && (
              <Box sx={{
                position: "absolute",
                top: "24px",
                left: "42px",
                bottom: "24px",
                width: "2px",
                bgcolor: "#3b82f6",
                zIndex: 1
              }} />
            )}

            {steps.map((step, index) => {
              const isFirst = index === 0;
              const isLast = index === steps.length - 1;
              return (
                <Box key={index} sx={{ 
                  flex: 1, 
                  display: "flex", 
                  flexDirection: isMobile ? "row" : "column", 
                  alignItems: isMobile ? "center" : "center", 
                  position: "relative", 
                  zIndex: 2,
                  width: isMobile ? "100%" : "auto"
                }}>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.15 }}
                  >
                    <Box sx={{
                      width: isMobile ? 40 : 48,
                      height: isMobile ? 40 : 48,
                      borderRadius: "50%",
                      bgcolor: "#3b82f6",
                      border: isFirst || isLast ? "3px solid #1d4ed8" : "3px solid #ffffff",
                      boxShadow: "0 0 0 3px #3b82f6, 0 4px 10px rgba(59, 130, 246, 0.3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: isMobile ? 0 : 2,
                      mr: isMobile ? 3 : 0,
                      zIndex: 2
                    }}>
                      <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: isMobile ? "14px" : "16px" }}>
                        {index + 1}
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    style={{ textAlign: isMobile ? "left" : "center" }}
                  >
                    <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: isMobile ? "14px" : "13px", mb: 0.5, lineHeight: 1.3, whiteSpace: "pre-line" }}>
                      {step.label}
                    </Typography>
                    {step.sub && (
                      <Typography sx={{ color: "#3b82f6", fontSize: isMobile ? "12px" : "12px", fontWeight: 600, lineHeight: 1.3 }}>
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
        <Box sx={{ textAlign: "center", mt: isMobile ? 6 : 8 }}>
          <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "18px", mb: 2 }}>
            Build Your Platform Today
          </Typography>
          <Box
            component="button"
            onClick={() => setOpenPopup(true)}
            sx={{
              bgcolor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              px: isMobile ? 4 : 5,
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
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ListingDeliveryProcess;

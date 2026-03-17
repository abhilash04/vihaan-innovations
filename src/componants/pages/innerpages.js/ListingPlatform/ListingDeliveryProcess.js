import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  { label: "Discovery", sub: "Search speed\n(X% faster)" },
  { label: "Design", sub: "" },
  { label: "Development", sub: "" },
  { label: "Beta Testing", sub: "Conversion\n(5% increase)" },
  { label: "Launch &\nGrowth Support", sub: "Revenue\ngenerated (X%)" },
];

const ListingDeliveryProcess = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 14 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Delivery Process
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Given an achievement over a full-responsive timeline chart.
          </Typography>
        </Box>

        {/* Horizontal stepper */}
        <Box sx={{ position: "relative", overflowX: "auto" }}>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            minWidth: "700px",
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
                      <Typography sx={{ color: "#3b82f6", fontSize: "12px", fontWeight: 600, lineHeight: 1.3, whiteSpace: "pre-line", textAlign: "center" }}>
                        {step.sub}
                      </Typography>
                    )}
                  </motion.div>

                </Box>
              );
            })}
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default ListingDeliveryProcess;

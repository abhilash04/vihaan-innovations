import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Search, Calendar, CreditCard, Car } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Step 1 — Choose Your Car",
    description: "Browse available vehicles by type, brand, or price range",
  },
  {
    icon: Calendar,
    title: "Step 2 — Pick Date & Location",
    description: "Select pickup location, date, and time from the smart calendar",
  },
  {
    icon: CreditCard,
    title: "Step 3 — Confirm & Pay",
    description: "Review your booking and pay securely in seconds",
  },
  {
    icon: Car,
    title: "Step 4 — Drive Away",
    description: "Get your confirmation, pickup instructions, and enjoy the ride",
  },
];

const HowItWorks = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        background: "#ffffff", // Light background
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(45deg, rgba(0,0,0,0.01) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.01) 50%, rgba(0,0,0,0.01) 75%, transparent 75%, transparent)",
          backgroundSize: "10px 10px",
          pointerEvents: "none",
        },
      }}
    >
      {/* Heading with Reveal Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "transparent",
            background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
            WebkitBackgroundClip: "text",
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Section 3
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#1a1a1a", // Dark text
            fontWeight: 800,
            mb: 2,
          }}
        >
          How It Works
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#666", // Muted text
            maxWidth: 600,
            mx: "auto",
            mb: 10,
          }}
        >
          Get on the road in just 4 simple steps with our smart booking flow.
        </Typography>
      </motion.div>

      {/* Steps Flow Container */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 4 },
        }}
      >
        {/* Horizontal Connecting Line (Desktop) */}
        <Box
          sx={{
            position: "absolute",
            top: 40,
            left: "12.5%",
            width: "75%",
            height: "4px",
            background: "rgba(0,0,0,0.05)", // light connecting line back border
            display: { xs: "none", md: "block" },
            zIndex: 0,
          }}
        >
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #f78361 0%, #fd544e 100%)",
              boxShadow: "0 0 10px rgba(253, 84, 78, 0.3)",
            }}
          />
        </Box>

        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Staggered reveal
                type: "spring",
                stiffness: 100,
              }}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {/* Step Node / Circle */}
              <Box
                className="step-node"
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "rgba(0, 0, 0, 0.05)",
                  background: "#ffffff", // White base node
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1a1a1a",
                  fontWeight: 800,
                  fontSize: "24px",
                  mb: 3,
                  position: "relative",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(253, 84, 78, 0.15)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "28px",
                    background:
                      "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {index + 1}
                </Typography>
              </Box>

              {/* Icon dropdown animation on hover */}
              <motion.div
                whileHover={{ y: [0, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <StepIcon
                  size={32}
                  color="#fd544e"
                  style={{ marginBottom: 16 }}
                />
              </motion.div>

              <Typography
                variant="h6"
                sx={{
                  color: "#1a1a1a",
                  fontWeight: 700,
                  mb: 1,
                  fontSize: "18px",
                }}
              >
                {step.title}
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  maxWidth: "220px",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#222" },
                }}
              >
                {step.description}
              </Typography>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};

export default HowItWorks;

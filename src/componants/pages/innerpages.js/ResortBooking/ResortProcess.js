import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Onboarding",
    desc: "We configure your resort's digital map and room categories.",
    bullets: ["Floorplan sync", "Rates structure", "Staff allocation"],
  },
  {
    num: "2",
    title: "System Integration",
    desc: "Connect OTAs and payment gateways safely with our secure hooks.",
    bullets: ["API lockbox", "Live rate push", "Test booking verification"],
  },
  {
    num: "3",
    title: "Staff Training",
    desc: "Personalized onboarding for housekeeping, operations and desk staff.",
    bullets: ["Role dashboard map", "App setup for ground staff", "Simulation runs"],
  },
  {
    num: "4",
    title: "Double Check",
    desc: "Run end-to-end booking streams to verify channel syncs.",
    bullets: ["Stress test load", "Notification audit", "Analytics trigger"],
  },
  {
    num: "5",
    title: "Go-Live",
    desc: "Flip the switch and manage operations with 100% cloud precision.",
    bullets: ["Live ops support", "Hourly dashboard audit", "Growth reports"],
  },
];

const ResortProcess = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "rgba(255, 255, 255, 0.01)", // Slightly lighter dark
        color: "#F5F5F0",
        position: "relative",
        borderTop: "1px solid rgba(245, 245, 240, 0.03)",
        borderBottom: "1px solid rgba(245, 245, 240, 0.03)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              Our Deployment Process
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                color: "rgba(245, 245, 240, 0.6)",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "0.95rem",
              }}
            >
              A seamless 5-step onboarding timeline to get your resort operations
              fully automated with zero downtime.
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline Desktop Layout */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            mx: "auto",
            mb: 6,
          }}
        >
          {/* Connecting Line Drawing on View */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "88%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "24px",
              left: "6%",
              height: "2px",
              background: "linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3))",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                width: "160px",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Circular Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    bgcolor: "#0A111E",
                    border: "2px solid #D4AF37",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px auto",
                    boxShadow: "0 0 15px rgba(212,175,55,0.2)",
                  }}
                >
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#D4AF37" }}>
                    {step.num}
                  </Typography>
                </Box>
              </motion.div>

              {/* Node content dropped down */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.4 + 0.3 }}
              >
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 1, fontSize: "1rem" }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "rgba(245,245,240,0.5)", lineHeight: 1.4, mb: 1 }}>
                  {step.desc}
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none", textAlign: "left", pl: 1 }}>
                  {step.bullets.map((bullet, i) => (
                    <Box component="li" key={i} sx={{ fontSize: "0.65rem", color: "rgba(212,175,55,0.7)", mb: 0.4, fontFamily: "'Outfit', sans-serif" }}>
                      • {bullet}
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* Mobile Layout Stacks steps vertically */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 4 }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ display: "flex", gap: "16px" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid #D4AF37", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#0A111E" }}>
                  <Typography sx={{ color: "#D4AF37", fontWeight: 700 }}>{step.num}</Typography>
                </Box>
                {index !== steps.length - 1 && <Box sx={{ flexGrow: 1, width: "2px", bgcolor: "#D4AF37", opacity: 0.3, my: 1 }} />}
              </Box>
              <Box sx={{ pt: 1 }}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 0.5 }}>{step.title}</Typography>
                <Typography sx={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(245,245,240,0.6)", mb: 1 }}>{step.desc}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ResortProcess;

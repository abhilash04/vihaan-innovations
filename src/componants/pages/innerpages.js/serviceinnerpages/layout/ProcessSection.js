import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";

const drawPath = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.4); opacity: 0; }
  100% { transform: scale(1); opacity: 0; }
`;

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "Understanding domain goals mapping core system flows metrics.",
    checks: ["Requirement gathering", "User research", "Competitor analysis"],
    position: "above"
  },
  {
    number: "02",
    title: "Planning & Architecture",
    desc: "Visualising wireframes framing scalable database blueprints.",
    checks: ["Wireframing", "System architecture", "Tech stack selection"],
    position: "below"
  },
  {
    number: "03",
    title: "Design & Development",
    desc: "Sculpting visual assets styling UI piping backends securely.",
    checks: ["UI/UX Design", "Front-end dev", "Back-end integration"],
    position: "above"
  },
  {
    number: "04",
    title: "QA & Testing",
    desc: "Continuous integration running edge unit checks regression.",
    checks: ["Manual testing", "Automation QA", "Performance audit"],
    position: "below"
  },
  {
    number: "05",
    title: "Launch & Support",
    desc: "Deploying high uptime servers monitoring traffic speeds setup.",
    checks: ["Server setup", "Go-live support", "24/7 Monitoring"],
    position: "above"
  }
];

const NodeCircle = styled(Box)(({ theme }) => ({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontWeight: 800,
  fontSize: "20px",
  fontFamily: "Urbanist, sans-serif",
  position: "relative",
  zIndex: 2,
  cursor: "pointer",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "2px solid #06b6d4",
    animation: `${pulse} 2s infinite ease-out`,
  }
}));

const StepCard = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  borderRadius: "16px",
  padding: "24px",
  width: "280px",
  textAlign: "left",
  position: "relative",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    background: "rgba(255, 255, 255, 0.05)",
  },
}));

const ProcessSection = () => {
  return (
    <Box sx={{ bgcolor: "#0d1f35", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography sx={{ color: "#06b6d4", fontWeight: 600, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            HOW WE WORK
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", mb: 2 }}>
            Our Proven Delivery Process
          </Typography>
        </Box>

        {/* Desktop Timeline Section */}
        <Box sx={{ position: "relative", display: { xs: "none", md: "block" }, height: "500px", mt: 6 }}>

          {/* SVG Background Curve */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 500"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
          >
            <path
              d="M 50 250 Q 200 100, 350 250 T 650 250 T 950 250 T 1150 250"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="4"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{ animation: `${drawPath} 3s ease-in-out forwards` }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Nodes & Cards */}
          {steps.map((step, index) => {
            const xPos = 120 + index * 220; // Coordinates spacing
            // Curve approximation Y coords:
            // peak/trough is near center X coordinate delta Offset
            const isAbove = step.position === "above";
            const nodeY = 250; // SVG center Y static anchors
            const cardY = isAbove ? 30 : 290;

            return (
              <Box key={index} sx={{ position: "absolute", left: `${xPos}px`, top: `${nodeY}px`, transform: "translate(-50%, -50%)", zIndex: 1 }}>

                {/* Node Circle */}
                <NodeCircle>
                  {step.number}
                </NodeCircle>

                {/* Card Container */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: isAbove ? "-220px" : "80px", // Offset above/below node anchor
                  }}
                >
                  <StepCard>
                    <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 700, mb: 1, fontSize: "16px", fontFamily: "Urbanist, sans-serif" }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6, mb: 2 }}>
                      {step.desc}
                    </Typography>

                    {/* Checks list */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                      {step.checks.map((check, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CheckIcon sx={{ fontSize: 14, color: "#06b6d4" }} />
                          <Typography sx={{ fontSize: "12px", color: "#ffffff" }}>
                            {check}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </StepCard>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Mobile Stepper Breakdown */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 4 }}>
          {steps.map((step, index) => (
            <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <NodeCircle sx={{ width: "48px", height: "48px", fontSize: "16px" }}>
                {step.number}
              </NodeCircle>
              <StepCard sx={{ width: "100%" }}>
                <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 700, mb: 1, fontSize: "16px", fontFamily: "Urbanist, sans-serif" }}>
                  {step.title}
                </Typography>
                <Typography sx={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>
                  {step.desc}
                </Typography>
              </StepCard>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default ProcessSection;

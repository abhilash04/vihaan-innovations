import React from "react";
import { Box, Typography, Container, Paper, useTheme, useMediaQuery } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";

// const drawPath = keyframes`
//   0% { stroke-dashoffset: 1000; }
//   100% { stroke-dashoffset: 0; }
// `;

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
    title: "Launch & Deployment",
    desc: "Deploying stable builds scaling cloud infrastructure securely.",
    checks: ["Server setup", "Cloud migration", "Go-live support"],
    position: "above"
  },
  {
    number: "06",
    title: "Support & Maintenance",
    desc: "Monitoring traffic speeds patching updates scaling iteratively.",
    checks: ["24/7 Monitoring", "Performance tuning", "Feature updates"],
    position: "below"
  }
];

const NodeCircle = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #005885, #0087c9)",
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
  boxShadow: "0 8px 25px rgba(0, 88, 133, 0.25)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "2px solid #0087c9",
    animation: `${pulse} 2s infinite ease-out`,
  }
}));

const StepCard = styled(Paper)(({ theme }) => ({
  background: "#fff",
  border: "1px solid rgba(0, 0, 0, 0.03)",
  borderRadius: "16px",
  padding: "24px",
  width: "280px",
  height: "185px", /* <--- CHANGE DESKTOP CARD HEIGHT HERE */
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  position: "relative",
  transition: "all 0.3s ease",
  boxShadow: "none",
  "&:hover": {
    transform: "translateY(-5px)",
    background: "#f8fafc",
    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
  },
  [theme.breakpoints.down("md")]: {
    height: "130px", /* <--- CHANGE MOBILE CARD HEIGHT HERE */
    width: "100%",
    padding: "20px",
    justifyContent: "center",
  }
}));

const ProcessSection = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    subtitle = "HOW WE WORK",
    title = "Our Proven Delivery Process",
    processSteps = steps
  } = data || {};

  return (
    <Box sx={{ background: "linear-gradient(135deg, #fce7f3 0%, #e0f2fe 40%, #ccfbf1 100%)", py: isMobile ? 6 : 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0087c9", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            {subtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: isMobile ? "28px" : "40px", fontFamily: "Urbanist, sans-serif", color: "#0a2233", }}>
            {title}
          </Typography>
        </Box>

        {/* Desktop Timeline Section */}
        <Box sx={{ position: "relative", display: isMobile ? "none" : "block", height: "480px", mt: 3 }}>

          {/* SVG Background Curve */}
          {/* <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 500"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
          >
            <path
              d="M 100 250 Q 190 100, 280 250 T 460 250 T 640 250 T 820 250 T 1000 250"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="4"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{ animation: `${drawPath} 2.5s ease-in-out forwards` }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#005885" />
                <stop offset="100%" stopColor="#0087c9" />
              </linearGradient>
            </defs>
          </svg> */}

          {/* Nodes & Cards */}
          {processSteps.map((step, index) => {
            const xPos = 100 + index * 180; // Coordinates spacing
            const isAbove = step.position === "above";
            const nodeY = 250;

            return (
              <Box key={index} sx={{ position: "absolute", left: `${xPos}px`, top: `${nodeY}px`, transform: "translate(-50%, -50%)", zIndex: 1 }}>

                {/* Node Circle */}
                <NodeCircle>
                  {step.number}
                </NodeCircle>

                {/* Card Container */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: "-80%" }}
                  whileInView={{ opacity: 1, x: "-50%" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: isAbove ? "-240px" : "70px",
                  }}
                >
                  <StepCard>
                    <Typography variant="h6" sx={{ color: "#0a2233", fontWeight: 800, mb: 1, fontSize: "16px", fontFamily: "Urbanist, sans-serif" }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "#76859bff", fontSize: "14px", lineHeight: 1.6, mb: 2 }}>
                      {step.desc}
                    </Typography>

                    {/* Checks list */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                      {step?.checks?.map((check, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CheckIcon sx={{ fontSize: 14, color: "#0087c9" }} />
                          <Typography sx={{ fontSize: "12px", color: "#606d81ff" }}>
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
        <Box sx={{ display: isMobile ? "flex" : "none", flexDirection: "column", gap: 3 }}>
          {processSteps.map((step, index) => (
            <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <NodeCircle sx={{ width: "48px", height: "48px", fontSize: "16px" }}>
                {step.number}
              </NodeCircle>
              <StepCard sx={{ width: "100%" }}>
                <Typography variant="h6" sx={{ color: "#0a2233", fontWeight: 800, mb: 1, fontSize: "16px", fontFamily: "Urbanist, sans-serif" }}>
                  {step.title}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>
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

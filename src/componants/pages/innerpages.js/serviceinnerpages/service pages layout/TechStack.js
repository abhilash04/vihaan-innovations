import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import CodeIcon from "@mui/icons-material/Code";

const marqueeLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const marqueeRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const techData = [
  {
    row: 1,
    direction: "left",
    speed: "25s",
    items: ["React", "Next.js", "Vue.js", "Angular", "Flutter", "Swift", "Kotlin", "React Native", "TailwindCSS", "Material UI"],
  },
  {
    row: 2,
    direction: "right",
    speed: "28s",
    items: ["Node.js", "Python", "Django", "Laravel", "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "GraphQL"],
  },
];

const TickerContainer = styled(Box)(({ speed, direction }) => ({
  display: "flex",
  width: "max-content",
  animation: `${direction === "left" ? marqueeLeft : marqueeRight} ${speed} linear infinite`,
  "&:hover": {
    animationPlayState: "paused",
  },
}));

const TechPill = styled(Paper)(({ theme }) => ({
  background: "#ffffff",
  border: "1px solid rgba(0, 0, 0, 0.04)",
  borderRadius: "50px",
  padding: "12px 24px",
  margin: "0 12px",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  color: "#334155",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.015)",
  "&:hover": {
    background: "#ffffff",
    borderColor: "#0087c9",
    transform: "translateY(-3px)",
    boxShadow: "0 10px 25px rgba(0, 88, 133, 0.1)",
    color: "#0087c9",
  },
}));

const TechStack = ({ data }) => {
  const {
    subtitle = "TECH STACK",
    title = "Technologies We Master",
    description = "Leveraging absolute modern toolchains engineering robust backends setups scalable nodes frames.",
    rows = techData
  } = data || {};

  return (
    <Box sx={{ bgcolor: "#f8fafc", py: { xs: 6, md: 8 }, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0087c9", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            {subtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, fontFamily: "Urbanist, sans-serif", color: "#0a2233", mb: 2 }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "560px", mx: "auto", fontSize: "16px", lineHeight: 1.7 }}>
            {description}
          </Typography>
        </Box>

        {/* Tickers Rows */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, position: "relative" }}>
          {rows.map((row, index) => (
            <Box key={index} sx={{ overflow: "hidden", position: "relative" }}>
              <TickerContainer speed={row.speed} direction={row.direction}>
                {/* Double the array for seamless infinite scroll */}
                {[...row.items, ...row.items].map((item, i) => (
                  <TechPill key={i} elevation={0}>
                    <CodeIcon sx={{ fontSize: 16, color: "#0087c9" }} />
                    <Typography sx={{ fontSize: "14px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>
                      {item}
                    </Typography>
                  </TechPill>
                ))}
              </TickerContainer>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default TechStack;

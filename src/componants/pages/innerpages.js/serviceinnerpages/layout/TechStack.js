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
  {
    row: 3,
    direction: "left",
    speed: "32s",
    items: ["TensorFlow", "PyTorch", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Spark", "Solidity", "Web3.js", "Hadoop"],
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
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "50px",
  padding: "12px 24px",
  margin: "0 12px",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  color: "#ffffff",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.08)",
    borderColor: "#06b6d4",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(6, 182, 212, 0.15)",
  },
}));

const TechStack = () => {
  return (
    <Box sx={{ bgcolor: "#0a1628", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#06b6d4", fontWeight: 600, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            TECH STACK
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", mb: 2 }}>
            Technologies We Master
          </Typography>
          <Typography sx={{ color: "#94a3b8", maxWidth: "560px", mx: "auto", fontSize: "16px", lineHeight: 1.7 }}>
            Leveraging absolute modern toolchains engineering robust backends setups scalable nodes frames.
          </Typography>
        </Box>

        {/* Tickers Rows */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {techData.map((row, index) => (
            <Box key={index} sx={{ overflow: "hidden", position: "relative" }}>
              <TickerContainer speed={row.speed} direction={row.direction}>
                {/* Double the array for seamless infinite scroll */}
                {[...row.items, ...row.items].map((item, i) => (
                  <TechPill key={i}>
                    <CodeIcon sx={{ fontSize: 16, color: "#06b6d4" }} />
                    <Typography sx={{ fontSize: "14px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
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

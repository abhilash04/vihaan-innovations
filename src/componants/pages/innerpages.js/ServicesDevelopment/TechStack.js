import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, Layout, Cpu, Database,
  Cloud, Workflow, Boxes, Bot, LifeBuoy, Monitor
} from "lucide-react";

const TechStack = () => {
  // Mock icons for missing ones
  const Server = Monitor;
  const Brain = Bot;
  const Zap = LifeBuoy;
  const Search = Layout;
  const BarChart2 = Layout;

  const row1 = [
    { name: "React", icon: Globe },
    { name: "Next.js", icon: Layout },
    { name: "Vue.js", icon: Layout },
    { name: "Angular", icon: Layout },
    { name: "Flutter", icon: Smartphone },
    { name: "React Native", icon: Smartphone },
    { name: "Tailwind CSS", icon: Boxes },
    { name: "TypeScript", icon: Cpu },
  ];

  const row2 = [
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Brain },
    { name: "Django", icon: Database },
    { name: "Laravel", icon: Server },
    { name: "AWS", icon: Cloud },
    { name: "GCP", icon: Cloud },
    { name: "Azure", icon: Cloud },
    { name: "Docker", icon: Workflow },
    { name: "Kubernetes", icon: Workflow },
    { name: "GraphQL", icon: Database },
  ];

  const row3 = [
    { name: "TensorFlow", icon: Brain },
    { name: "PyTorch", icon: Brain },
    { name: "Pandas", icon: Database },
    { name: "Spark", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Redis", icon: Zap },
    { name: "Elasticsearch", icon: Search },
    { name: "Tableau", icon: BarChart2 },
  ];

  const TickerRow = ({ items, speed, direction = "left" }) => (
    <Box sx={{ overflow: "hidden", py: 2, position: "relative" }}>
      <motion.div
        animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        sx={{ display: "flex", gap: 3, whiteSpace: "nowrap" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <Box
            key={i}
            component={motion.div}
            whileHover={{ scale: 1.05, background: "#f8fafc", borderColor: "#06b6d4" }}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "100px",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              color: "#0f172a",
              fontSize: "14px",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
            }}
          >
            <item.icon size={18} color="#06b6d4" />
            {item.name}
          </Box>
        ))}
      </motion.div>
    </Box>
  );

  return (
    <Box id="tech-stack" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#f1f5f9", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ mb: 8, textAlign: "center" }}>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ color: "#06b6d4", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px", textTransform: "uppercase" }}>
            TECH STACK FOR WEBSITE DEVELOPMENT SERVICES
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
            Modern Tech Stack Powering Our Website Development Services
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "700px", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
            We leverage a diverse and modern technology stack for our website development services. This allows us to build robust, scalable, and future-proof digital products. Our website development services are backed by the latest industry standards.
          </Typography>
        </Stack>
      </Container>

      <Box sx={{ "& > :not(:last-child)": { mb: 2 } }}>
        <TickerRow items={row1} speed={28} direction="left" />
        <TickerRow items={row2} speed={22} direction="right" />
        <TickerRow items={row3} speed={32} direction="left" />
      </Box>
    </Box>
  );
};

export default TechStack;

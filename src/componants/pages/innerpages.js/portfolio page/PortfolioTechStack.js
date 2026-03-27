import React from "react";
import { Box, Typography, Container, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import TerminalIcon from "@mui/icons-material/Terminal";
import LayersIcon from "@mui/icons-material/Layers";

const technologies = [
  { name: "React", icon: <CodeIcon />, color: "#61dafb" },
  { name: "Node.js", icon: <StorageIcon />, color: "#68a063" },
  { name: "Python", icon: <TerminalIcon />, color: "#3776ab" },
  { name: "Next.js", icon: <LayersIcon />, color: "#000000" },
  { name: "TypeScript", icon: <CodeIcon />, color: "#3178c6" },
  { name: "JavaScript", icon: <JavascriptIcon />, color: "#f7df1e" },
  { name: "MongoDB", icon: <StorageIcon />, color: "#47a248" },
  { name: "PostgreSQL", icon: <SettingsEthernetIcon />, color: "#336791" },
  { name: "AWS", icon: <LayersIcon />, color: "#ff9900" },
  { name: "Docker", icon: <LayersIcon />, color: "#2496ed" },
];

const PortfolioTechStack = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              color: "#00b4d8",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Our Stack
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "40px" }, color: "#1e293b", mb: 2 }}
          >
            Technologies We Work With
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {technologies.map((tech, i) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2.4}
              key={i}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: "20px",
                  border: "1px solid #f1f5f9",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#00b4d8",
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0, 180, 216, 0.05)",
                  },
                }}
              >
                <Box sx={{ color: tech.color, mb: 1, "& svg": { fontSize: "40px" } }}>
                  {tech.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "14px" }}>
                  {tech.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioTechStack;

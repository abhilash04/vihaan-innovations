import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Bot, Brain, Cpu, MessageSquare, Eye, Zap, Sparkles, ArrowRight } from "lucide-react";

const AIIntelligence = () => {
  // Placeholder icon for RPA since Settings was reused in DevOps
  const Settings = Cpu;

  const features = [
    { title: "Custom AI for Website Development Services", icon: Brain, desc: "Bespoke AI solutions for complex challenges." },
    { title: "Natural Language Processing", icon: MessageSquare, desc: "Advanced text and speech understanding." },
    { title: "Computer Vision Systems", icon: Eye, desc: "Image and video analysis for real-time insights." },
    { title: "Robotic Process Automation", icon: Settings, desc: "Automate repetitive business tasks." },
    { title: "Predictive Analytics Engines", icon: Zap, desc: "Forecast trends with machine learning." },
    { title: "AI Chatbot & Virtual Assistants", icon: Bot, desc: "24/7 intelligent customer support integrated into our website development services." },
  ];

  const nodes = [
    { x: 100, y: 150 }, { x: 100, y: 250 }, { x: 100, y: 350 },
    { x: 300, y: 100 }, { x: 300, y: 200 }, { x: 300, y: 300 }, { x: 300, y: 400 },
    { x: 500, y: 150 }, { x: 500, y: 250 }, { x: 500, y: 350 },
  ];

  const connections = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 7; j++) {
      connections.push({ from: nodes[i], to: nodes[j] });
    }
  }
  for (let i = 3; i < 7; i++) {
    for (let j = 7; j < 10; j++) {
      connections.push({ from: nodes[i], to: nodes[j] });
    }
  }

  return (
    <Box
      id="ai-intelligence"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Intense Gradient Backgrounds */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "0%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "0%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Animated Noise/Grain Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          zIndex: 1,
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Stack spacing={4} alignItems="center" textAlign="center" sx={{ mb: 12 }}>


          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%", position: "relative", mb: 2 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 3,
                py: 1,
                borderRadius: "100px",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
              }}
            >
              <Sparkles size={16} color="#7c3aed" />
              <Typography sx={{
                background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 800,
                letterSpacing: "0.15em",
                fontSize: "12px",
                textTransform: "uppercase",
              }}>
                AI / ML & AUTOMATION
              </Typography>
            </Box>
            <Typography
              component="a"
              href="/ai-ml-development"
              sx={{
                position: "absolute",
                right: 0,
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#7c3aed",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" }
              }}
            >
              View All <ArrowRight size={14} />
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", md: "42px" },
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: "#0f172a",
              lineHeight: 1.1,
              maxWidth: "800px",
            }}
          >
            Intelligent Systems That <br />
            Think, Learn, and Act
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "700px", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
            We integrate advanced AI into our website development services to create self-learning, high-impact platforms. Our website development services leverage machine learning and neural networks to transform raw data into predictive intelligence, giving your business a competitive edge.
          </Typography>
        </Stack>

        {/* AI Brain Network Visual */}
        <Box
          sx={{
            width: "100%",
            height: "500px",
            position: "relative",
            mb: 15,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Hexagon Grid Pattern Background */}
          <Box sx={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(30deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(150deg, #fff 12%, transparent 12.5%, transparent 87%, #fff 87.5%, #fff), linear-gradient(60deg, #fff 25%, transparent 25.5%, transparent 75%, #fff 75%, #fff), linear-gradient(60deg, #fff 25%, transparent 25.5%, transparent 75%, #fff 75%, #fff)", backgroundSize: "80px 140px" }} />

          <svg width="600" height="500" viewBox="0 0 600 500" style={{ overflow: "visible" }}>
            <g>
              {connections.map((conn, i) => (
                <motion.line
                  key={i}
                  x1={conn.from.x}
                  y1={conn.from.y}
                  x2={conn.to.x}
                  y2={conn.to.y}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  viewport={{ once: true }}
                />
              ))}

              {/* Traveling light dots on lines */}
              {connections.slice(0, 15).map((conn, i) => (
                <motion.circle
                  key={`dot-${i}`}
                  r="1"
                  fill="#7c3aed"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    cx: [conn.from.x, conn.to.x],
                    cy: [conn.from.y, conn.to.y],
                  }}
                  transition={{
                    duration: 2 + i % 2,
                    repeat: Infinity,
                    repeatDelay: i % 3,
                    ease: "linear",
                  }}
                />
              ))}

              {nodes.map((node, i) => (
                <motion.circle
                  key={`node-${i}`}
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="#ffffff"
                  stroke={i % 2 === 0 ? "#7c3aed" : "#2563eb"}
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    whileInView: { delay: i * 0.1 },
                    animate: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                  }}
                  viewport={{ once: true }}
                  style={{ filter: `drop-shadow(0 0 10px ${i % 2 === 0 ? "#7c3aed50" : "#2563eb50"})` }}
                />
              ))}
            </g>
          </svg>
        </Box>

        {/* Premium Grid */}
        <Grid container spacing={3}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                sx={{
                  p: 5,
                  height: "70%",
                  borderRadius: "40px",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  "&:hover": {
                    borderColor: "#7c3aed",
                    transform: "translateY(-10px)",
                    boxShadow: "0 30px 60px -12px rgba(124, 58, 237, 0.15)",
                  },
                }}
              >
                <Box sx={{ width: 60, height: 60, borderRadius: "18px", bgcolor: "rgba(124, 58, 237, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", mb: 4, color: "#7c3aed" }}>
                  <feature.icon size={28} />
                </Box>
                <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 800, mb: 2, fontSize: "20px" }}>{feature.title}</Typography>
                <Typography sx={{ color: "#475569", fontSize: "15px", lineHeight: 1.7, fontWeight: 500 }}>{feature.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3} sx={{ mt: 10 }}>
          {["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "AWS SageMaker", "Python"].map((tech, i) => (
            <Stack key={i} direction="row" alignItems="center">
              <Typography sx={{ color: "#475569", fontSize: "14px", fontWeight: 700 }}>{tech}</Typography>
              {i < 6 && <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: "#cbd5e1", mx: 3 }} />}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default AIIntelligence;

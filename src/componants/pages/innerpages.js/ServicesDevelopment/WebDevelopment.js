import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Layout, Code2, Search, Database, Gauge, Smartphone, ArrowRight } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    { title: "Custom Website Design", icon: Layout, desc: "Bespoke designs tailored to your brand identity." },
    { title: "React / Next.js Development", icon: Code2, desc: "High-performance modern web applications." },
    { title: "SEO-Optimised Architecture", icon: Search, desc: "Built with search engine visibility in mind." },
    { title: "CMS Integration", icon: Database, desc: "Seamless content management solutions." },
    { title: "Performance Optimisation", icon: Gauge, desc: "Lightning-fast load times and smooth UX." },
    { title: "Responsive & Mobile-First", icon: Smartphone, desc: "Perfect experience on every device size." },
  ];

  const technologies = [
    "React", "Next.js", "Vue", "WordPress", "Webflow", "Node.js", "Tailwind CSS", "GraphQL"
  ];

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <Box
      id="web-dev"
      sx={{
        py: { xs: 10, md: 20 },
        bgcolor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        02
      </Typography>

      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 10 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%", position: "relative", mb: 2 }}>
            <Typography
              sx={{
                color: "#06b6d4",
                fontWeight: 800,
                letterSpacing: "0.2em",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              WEB DEVELOPMENT
            </Typography>
            <Typography
              component="a"
              href="/web-development"
              sx={{
                position: "absolute",
                right: 0,
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#06b6d4",
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
              fontSize: { xs: "36px", md: "52px" },
              fontWeight: 800,
              fontFamily: "'Syne', sans-serif",
              color: "#0f172a",
              maxWidth: "800px",
              lineHeight: 1.1,
            }}
          >
            Websites That Perform as <br />
            Good as They Look
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "600px", fontSize: "18px", fontWeight: 500 }}>
            We combine cutting-edge technology with world-class design to build web platforms that scale with your business goals.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={motion.div}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                sx={{
                  p: 5,
                  height: "70%",
                  background: "#ffffff",
                  borderRadius: "32px",
                  border: "1px solid rgba(15, 23, 42, 0.06)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  position: "relative",
                  zIndex: 1,
                  "&:hover": {
                    borderColor: "#06b6d4",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(6, 182, 212, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 4,
                    color: "#06b6d4",
                  }}
                >
                  <feature.icon size={28} />
                </Box>
                <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 800, mb: 2, fontSize: "20px" }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: "16px", lineHeight: 1.6, fontWeight: 500 }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Browser Mockup Showcase - Light Theme */}
        <Box
          component={motion.div}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{
            mt: 15,
            width: "100%",
            maxWidth: "1100px",
            mx: "auto",
            aspectRatio: "16/9",
            bgcolor: "#ffffff",
            borderRadius: "24px 24px 0 0",
            border: "12px solid #0f172a",
            borderBottom: "none",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 60px 100px -30px rgba(15, 23, 42, 0.2)",
          }}
        >
          {/* Browser Header */}
          <Box
            sx={{
              height: "50px",
              bgcolor: "#f8fafc",
              borderBottom: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              px: 3,
              gap: 1.5,
            }}
          >
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#febc2e" }} />
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28c840" }} />
            <Box sx={{ ml: 4, flex: 1, height: "26px", bgcolor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "6px", display: "flex", alignItems: "center", px: 2, color: "#94a3b8", fontSize: "12px" }}>
              vihaan.ai/enterprise-solutions
            </Box>
          </Box>

          {/* Browser Content Simulated */}
          <Box sx={{ p: 6, height: "100%", bgcolor: "#ffffff" }}>
            <Stack spacing={4}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box sx={{ width: 120, height: 24, bgcolor: "#f1f5f9", borderRadius: 1.5 }} />
                <Stack direction="row" spacing={3}>
                  <Box sx={{ width: 80, height: 12, bgcolor: "#f1f5f9", borderRadius: 1 }} />
                  <Box sx={{ width: 80, height: 12, bgcolor: "#06b6d415", borderRadius: 1 }} />
                </Stack>
              </Stack>

              <Box sx={{ height: "220px", width: "100%", background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", borderRadius: 6, border: "1px solid #e2e8f0", p: 5 }}>
                <Box sx={{ width: "45%", height: "40px", bgcolor: "#e2e8f0", borderRadius: 2, mb: 3 }} />
                <Box sx={{ width: "35%", height: "20px", bgcolor: "#f1f5f9", borderRadius: 1.5 }} />
              </Box>

              <Grid container spacing={4}>
                {[1, 2, 3].map((n) => (
                  <Grid item xs={4} key={n}>
                    <Box sx={{ height: "160px", width: "100%", bgcolor: "#ffffff", borderRadius: 5, border: "1px solid #f1f5f9", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }} />
                  </Grid>
                ))}
              </Grid>
            </Stack>

            {/* Animated Cursor */}
            <Box
              component={motion.div}
              animate={{
                x: [150, 500, 300, 150],
                y: [100, 300, 50, 100],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                color: "#0f172a",
                zIndex: 10,
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 24 24"
                sx={{ width: 28, height: 28, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
              >
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83c.18-.18.44-.26.69-.21l6.6 1.32c.46.09.82-.41.56-.79l-13-13.63a.49.49 0 0 0-.49-.24c-.02 0-.04.04-.04.04Z" fill="currentColor" stroke="white" strokeWidth="1" />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Tech Stack Ticker Row */}
        <Box sx={{ mt: 10, overflow: "hidden", position: "relative" }}>
          <Box
            component={motion.div}
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            sx={{ display: "flex", gap: 3, whiteSpace: "nowrap" }}
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <Box
                key={i}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "100px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 600,
                  backdropFilter: "blur(10px)",
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WebDevelopment;

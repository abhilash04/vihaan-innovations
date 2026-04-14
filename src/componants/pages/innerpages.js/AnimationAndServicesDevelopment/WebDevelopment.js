import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Layout, Code2, Search, Database, Gauge, Smartphone, ArrowRight } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    { title: "Custom Website Design", icon: Layout, desc: "Bespoke designs tailored to your brand identity." },
    { title: "React / Next.js Development", icon: Code2, desc: "High-performance modern web applications." },
    { title: "SEO-Optimised Architecture", icon: Search, desc: "Strategic website development services for maximum search visibility." },
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
        py: { xs: 8, md: 12 },
        bgcolor: "#0f172a", // Dark background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Blur Orbs */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
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
              href="/services/web-development"
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
              fontSize: { xs: "32px", md: "46px" },
              fontWeight: 900,
              fontFamily: "'Syne', sans-serif",
              color: "white",
              maxWidth: "850px",
              lineHeight: 1.1,
              mb: 3
            }}
          >
            Enterprise-Grade Web Development <br />
            Engineered for Scalable Growth
          </Typography>
          <Typography sx={{ color: "#94a3b8", maxWidth: "700px", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
            We engineer high-performance digital platforms that blend robust technical architecture with intuitive user journeys. Our focus is on building fast, secure, and scalable modern web applications.
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
                whileHover={{ y: -12, scale: 1.02 }}
                sx={{
                  p: 5,
                  height: "70%",
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  position: "relative",
                  zIndex: 1,
                  "&:hover": {
                    borderColor: "rgba(6, 182, 212, 0.4)",
                    background: "rgba(255, 255, 255, 0.05)",
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
                  },
                }}
              >
                <Box
                  sx={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(6, 182, 212, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 4,
                    color: "#06b6d4",
                    boxShadow: "0 8px 16px rgba(6, 182, 212, 0.2)"
                  }}
                >
                  <feature.icon size={28} />
                </Box>
                <Typography variant="h6" sx={{ color: "white", fontWeight: 800, mb: 2, fontSize: "20px" }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.6, fontWeight: 500 }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Browser Mockup Showcase - Premium Dark Theme */}
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
            bgcolor: "#1e293b",
            borderRadius: "24px 24px 0 0",
            border: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 60px 100px -30px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Browser Header */}
          <Box
            sx={{
              height: "50px",
              bgcolor: "#0f172a",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              px: 3,
              gap: 1.5,
            }}
          >
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ff5f57" }} />
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#febc2e" }} />
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#28c840" }} />
            <Box sx={{ ml: 4, flex: 1, height: "26px", bgcolor: "rgba(255,255,255,0.05)", borderRadius: "6px", display: "flex", alignItems: "center", px: 2, color: "#475569", fontSize: "11px", letterSpacing: 1 }}>
              vihaan.ai/enterprise-solutions
            </Box>
          </Box>

          {/* Browser Content Simulated */}
          <Box sx={{ p: 6, height: "100%", bgcolor: "#0f172a" }}>
            <Stack spacing={4}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box sx={{ width: 120, height: 24, bgcolor: "rgba(255,255,255,0.03)", borderRadius: 1.5 }} />
                <Stack direction="row" spacing={3}>
                  <Box sx={{ width: 80, height: 10, bgcolor: "rgba(255,255,255,0.03)", borderRadius: 1 }} />
                  <Box sx={{ width: 80, height: 10, bgcolor: "rgba(6, 182, 212, 0.1)", borderRadius: 1 }} />
                </Stack>
              </Stack>

              <Box sx={{ height: "220px", width: "100%", background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 100%)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.05)", p: 5 }}>
                <Box sx={{ width: "45%", height: "35px", bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, mb: 3 }} />
                <Box sx={{ width: "35%", height: "15px", bgcolor: "rgba(255,255,255,0.02)", borderRadius: 1.5 }} />
              </Box>

              <Grid container spacing={4}>
                {[1, 2, 3].map((n) => (
                  <Grid item xs={4} key={n}>
                    <Box sx={{ height: "140px", width: "100%", bgcolor: "rgba(255,255,255,0.01)", borderRadius: 5, border: "1px solid rgba(255,255,255,0.03)" }} />
                  </Grid>
                ))}
              </Grid>
            </Stack>

            {/* Animated Cursor */}
            <Box
              component={motion.div}
              animate={{
                x: [100, 450, 250, 100],
                y: [80, 250, 40, 80],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                color: "white",
                zIndex: 10,
              }}
            >
              <Box
                component="svg"
                viewBox="0 0 24 24"
                sx={{ width: 28, height: 28, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
              >
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83c.18-.18.44-.26.69-.21l6.6 1.32c.46.09.82-.41.56-.79l-13-13.63a.49.49 0 0 0-.49-.24c-.02 0-.04.04-.04.04Z" fill="currentColor" stroke="#0f172a" strokeWidth="1" />
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
                  background: "#f8fafc",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  color: "#64748b",
                  fontSize: "13px",
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

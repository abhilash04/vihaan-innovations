import React, { useState } from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const segments = [
  {
    title: "Residential",
    desc: "Deliver better experiences for home buyers and sellers with modern software solutions designed to simplify property sales, lead management, and customer engagement.",
    bullets: ["Gain valuable insights into property operations", "Track sales and acquisition data in real time", "Generate high-quality leads for better conversions"],
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Commercial",
    desc: "Optimize commercial property operations with advanced platforms that streamline leasing, property management, and business transactions.",
    bullets: ["Gain valuable insights into property operations", "Track sales and acquisition data in real time", "Generate high-quality leads for better conversions"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Industrial",
    desc: "Manage large-scale industrial property operations with powerful tools that handle logistics, asset tracking, and property workflows efficiently.",
    bullets: ["Gain valuable insights into property operations", "Track sales and acquisition data in real time", "Generate high-quality leads for better conversions"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Marketplace",
    desc: "Build scalable property marketplaces that showcase listings, attract buyers, and enable seamless property discovery with advanced search features.",
    bullets: ["Gain valuable insights into property operations", "Track sales and acquisition data in real time", "Generate high-quality leads for better conversions"],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
  },
];

const PortalSegments = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#F8F6F2", // Light Background
        color: "#1a1a1a", // Dark Text
        position: "relative",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px)", // Light grid
        backgroundSize: "100% 40px",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "2.8rem" },
                mb: 2,
                color: "#1a1a1a",
              }}
            >
              Different Real Estate Segments We Serve
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "#4a5568", // Muted dark text
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              We build powerful digital solutions for businesses across every segment of the real estate industry. Our platforms are designed to support operations, improve efficiency, and help real estate businesses grow with scalable technology.
            </Typography>
          </motion.div>
        </Box>

        {/* Tab Header Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            mb: 6,
            flexWrap: "wrap",
          }}
        >
          {segments.map((tab, index) => (
            <Button
              key={index}
              onClick={() => setActiveTab(index)}
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "none",
                color: activeTab === index ? "#FFFFFF" : "#4a5568",
                bgcolor: activeTab === index ? "#3B82F6" : "#f1f5f9", // Light BG for inactive
                px: 3,
                py: 1.2,
                borderRadius: "20px",
                transition: "all 0.3s ease",
                border: "1px solid",
                borderColor: activeTab === index ? "transparent" : "#e2e8f0",
                boxShadow: activeTab === index ? "0 4px 12px rgba(59, 130, 246, 0.3)" : "none",
                "&:hover": {
                  bgcolor: activeTab === index ? "#2563EB" : "#e2e8f0",
                },
              }}
            >
              {tab.title}
            </Button>
          ))}
        </Box>

        {/* Tab Content Display */}
        <Box sx={{ minHeight: "360px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Grid container spacing={5} alignItems="center">
                {/* Text Side */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: { md: 4 } }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        mb: 1.5,
                        color: "#1a1a1a",
                      }}
                    >
                      {segments[activeTab].title} Software
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#4a5568",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {segments[activeTab].desc}
                    </Typography>

                    {/* Bullet List */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                      {segments[activeTab].bullets.map((bullet, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          style={{ display: "flex", alignItems: "center", gap: 10 }}
                        >
                          <CheckCircle2 size={18} color="#10B981" />
                          <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#4a5568" }}>
                            {bullet}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </Grid>

                {/* Illustration/Image Side */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      height: "300px",
                      borderRadius: "16px",
                      position: "relative",
                      overflow: "hidden",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Box
                      component="img"
                      src={segments[activeTab].img}
                      alt={segments[activeTab].title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    {/* Gradient Overlay to blend into White Background */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to right, #ffffff 0%, transparent 40%)",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default PortalSegments;

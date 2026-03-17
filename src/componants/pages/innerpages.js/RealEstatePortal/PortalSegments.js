import React, { useState } from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const segments = [
  {
    title: "Residential",
    desc: "Scale accurate matching for single-family, condo, and luxury estate listing indices.",
    bullets: ["MLS Direct Synchronization", "3D Virtual walkthrough embeds", "Open house scheduler matrices"],
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Commercial",
    desc: "Enterprise spaces, offices, and retail park management grids.",
    bullets: ["Lease roll-up analytics", "CAM fee direct auditing", "Space availability triggers"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Industrial",
    desc: "Logistics hubs, warehouses, and factories supporting heavyweight asset tracking.",
    bullets: ["Loading dock allocations", "Ceiling height volume indices", "Power grid grid layouts"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Marketplace",
    desc: "Aggregators sourcing multi-broker feeds carrying global property caches.",
    bullets: ["Direct advertising matrices", "Bid transparent locks", "Multi-currency rate boxes"],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
  },
];

const PortalSegments = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#0C1424", // Lighter base Dark
        color: "#FFFFFF",
        position: "relative",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px)",
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
              }}
            >
              Segments We Serve
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Modular layouts adapting seamlessly across asset scopes correctly.
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
                color: activeTab === index ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                bgcolor: activeTab === index ? "#3B82F6" : "rgba(255,255,255,0.02)",
                px: 3,
                py: 1.2,
                borderRadius: "20px",
                transition: "all 0.3s ease",
                border: "1px solid",
                borderColor: activeTab === index ? "transparent" : "rgba(255,255,255,0.05)",
                "&:hover": {
                  bgcolor: activeTab === index ? "#2563EB" : "rgba(255,255,255,0.05)",
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
                      }}
                    >
                      {segments[activeTab].title} Software
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(255, 255, 255, 0.7)",
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
                          <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.8)" }}>
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
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
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
                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to right, #0C1424 0%, transparent 40%)",
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

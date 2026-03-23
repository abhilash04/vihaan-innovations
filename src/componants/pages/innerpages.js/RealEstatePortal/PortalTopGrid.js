import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Home, Compass, Key, Briefcase, FileText, Globe } from "lucide-react";

const solutions = [
  { icon: <Home size={28} />, title: "Residential", color: "#3B82F6", desc: "B2C portals facing buyers with deep sync hooks." },
  { icon: <Briefcase size={28} />, title: "Commercial", color: "#10B981", desc: "Lease rollup analytics supporting asset scale." },
  { icon: <Compass size={28} />, title: "Industrial Hubs", color: "#F59E0B", desc: "Logistics tracking mapping payload allocations." },
  { icon: <Key size={28} />, title: "Prop Management", color: "#EC4899", desc: "Rent collection pipelines audit direct triggers." },
  { icon: <FileText size={28} />, title: "Secure Data", color: "#8B5CF6", desc: "Deed locks securing compliance transparently." },
  { icon: <Globe size={28} />, title: "Marketplace GL", color: "#EF4444", desc: "Hyperlocal landing multiplier node indexes." },
];

const PortalTopGrid = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#081226", // Pure Dark Base
        color: "#FFFFFF",
        position: "relative",
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
                mb: 1.5,
              }}
            >
              Top Solutions Framework
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
              Contextual fighter brightens or gradient wash on hover supporting
              smooth matrix scaling correctly.
            </Typography>
          </motion.div>
        </Box>

        {/* Grid of Cards */}
        <Grid container spacing={4}>
          {solutions.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(25, 30, 43, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    borderTop: `4px solid ${item.color}`, // Colored top border
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    perspective: "1000px", // Enables 3D context
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-4px) rotateX(3deg) rotateY(3deg)",
                      bgcolor: "rgba(25, 30, 43, 0.8)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow: `0 15px 30px rgba(0,0,0,0.5), 0 0 20px ${item.color}15`,
                      "& .bg-gradient": { opacity: 0.05 },
                    },
                  }}
                >
                  {/* Subtle Gradient Wash on Hover hook */}
                  <Box
                    className="bg-gradient"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, ${item.color}, transparent)`,
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      zIndex: 0,
                    }}
                  />

                  <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                    <Box sx={{ color: item.color, mb: 2 }}>{item.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        flexGrow: 1,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortalTopGrid;

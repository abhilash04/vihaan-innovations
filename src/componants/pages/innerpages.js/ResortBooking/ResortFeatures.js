import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  BarChart2,
  Bell,
  CheckCircle,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <CalendarDays size={24} color="#D4AF37" />,
    title: "Smart Booking Engine",
    desc: "Automate room allocations and optimize occupancy with dynamic pricing algorithms.",
    bullets: ["Real-time availability", "Group bookings setup", "Dynamic rate cards"],
  },
  {
    icon: <Users size={24} color="#D4AF37" />,
    title: "Guest Relationship (CRM)",
    desc: "Single view guest profile to deliver personalized stays and manage loyalty programs.",
    bullets: ["Guest preferences tracking", "Stay history sync", "Automated email workflows"],
  },
  {
    icon: <Globe size={24} color="#D4AF37" />,
    title: "Multi-Channel Distribution",
    desc: "Sync with OTAs instantly with 0% overbooking risk and unified dashboard control.",
    bullets: ["Instant stock update", "Unified rate push", "OTA performance tracking"],
  },
  {
    icon: <BarChart2 size={24} color="#D4AF37" />,
    title: "Operations Dashboard",
    desc: "Monitor housekeeping, maintenance workflows, and audit reports on the go.",
    bullets: ["Staff routing triggers", "Task tracking board", "Consolidated P&L report"],
  },
  {
    icon: <Bell size={24} color="#D4AF37" />,
    title: "Housekeeping Control",
    desc: "Delegate tasks instantly with live status feedback from resort floor staff.",
    bullets: ["Inspection checklist", "Supply stock alert", "Room ready alerts"],
  },
  {
    icon: <CheckCircle size={24} color="#D4AF37" />,
    title: "Operations Audit",
    desc: "Generate smart compliance and audit reports with digital trails for every action.",
    bullets: ["Audit trail tracking", "Compliance checklists", "Activity sync checks"],
  },
];

const ResortFeatures = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#0A111E", // Dark Navy
        color: "#F5F5F0",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              Streamlined Resort Management
            </Typography>
            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                height: "4px",
                background: "#D4AF37",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
          </motion.div>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                    p: 4,
                    borderRadius: "16px",
                    height: "100%",
                    borderTop: "3px solid #D4AF37",
                    border: "1px solid rgba(245, 245, 240, 0.03)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(212, 175, 55, 0.4)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      bgcolor: "rgba(212, 175, 55, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(212, 175, 55, 0.2)",
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      mb: 1.5,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "rgba(245, 245, 240, 0.7)",
                      mb: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
                  </Typography>
                  <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                    {feature.bullets.map((bullet, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          fontSize: "0.85rem",
                          color: "rgba(245, 245, 240, 0.5)",
                          mb: 0.8,
                          fontFamily: "'Outfit', sans-serif",
                        }}
                      >
                        <Box
                          sx={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            bgcolor: "#D4AF37",
                          }}
                        />
                        {bullet}
                      </Box>
                    ))}
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

export default ResortFeatures;

import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DeskIcon from '@mui/icons-material/Desk';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BuildIcon from '@mui/icons-material/Build';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const tools = [
  { icon: CleaningServicesIcon, title: "Housekeeping Task Manager", desc: "Real-time room status, task assignment, completion tracking.", color: "#0f766e" },
  { icon: DeskIcon, title: "Front Desk & Check-in Kiosk", desc: "Digital check-in, key handover, passport scan integration.", color: "#d4a017" },
  { icon: RestaurantIcon, title: "F&B POS Integration", desc: "Restaurant POS synced with room folios and guest billing.", color: "#f97316" },
  { icon: BuildIcon, title: "Maintenance Request System", desc: "Guests or staff raise tickets; automated assignment and tracking.", color: "#7c3aed" },
  { icon: BadgeIcon, title: "Staff Scheduling & HR", desc: "Shift planning, attendance, and performance dashboards.", color: "#0ea5e9" },
  { icon: LocalParkingIcon, title: "Parking & Amenity Booking", desc: "Manage parking slots, spa, gym, and activity bookings.", color: "#16a34a" },
];

const HotelOperationsStaff = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 14 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Operations & Staff Tools</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Streamline Operations and Empower Back of House Staff
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#f8fafc", height: "100%", border: "1px solid rgba(0,0,0,0.06)", transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 12px 28px ${tool.color}20`, borderColor: `${tool.color}40`, bgcolor: "#ffffff" } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: "12px", bgcolor: `${tool.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: tool.color, flexShrink: 0 }}>
                      <Icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px" }}>{tool.title}</Typography>
                  </Box>
                  <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>{tool.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HotelOperationsStaff;

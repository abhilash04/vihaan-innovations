import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const modules = [
  { id: 0, label: "OPD & Appointment", title: "Outpatient Department", roles: ["Doctor", "Nurse", "Admin"], desc: "Manage consultations, slot bookings, and token counters smoothly.", features: ["Online Slot Booking", "Token Queue Display", "Doctor Roster Management", "Instant Prescription Upgrades"] },
  { id: 1, label: "IPD Management", title: "Inpatient Department", roles: ["Nurse", "Admin"], desc: "Efficient bed occupancy and ward allocation setups tracking dashboards correctly.", features: ["Bed Availability Dashboard", "Admission/Discharge Sync", "Nursing Duty Allocation", "Dietary & vitals charting"] },
  { id: 2, label: "EMR Digital Desk", title: "Electronic Medical Records", roles: ["Doctor"], desc: "Digital prescription pads and treatment histories securely centralized triggers.", features: ["SOAP Notes Template", "ICD-10 Code Search", "Lab Tests Advisory Trigger", "Patient Consent Vaults"] },
  { id: 3, label: "Pharmacy Billing", title: "Pharmacy & Billing", roles: ["Admin", "Cashier"], desc: "Automatic invoice generation linked to EMR prescriptions directly alerts.", features: ["Prescription Auto-Sync", "Barcoded Inventory Sale", "Expiry Alert Engine", "Discount Logic Settings"] }
];

const HMSModules = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, width: "100%", minHeight: "500px", position: "relative", overflow: "hidden" }}>
      {/* Left 30% charcoal panel */}
      <Box sx={{ width: { xs: "100%", md: "32%" }, bgcolor: "#1A1A2E", py: 8, px: { xs: 3, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 800, fontSize: "11px", mb: 2, letterSpacing: "1px" }}>MODULES</Typography>
        <Tabs orientation="vertical" value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ borderRight: 0, "& .MuiTabs-indicator": { display: "none" }, "& .MuiTab-root": { color: "rgba(255,255,255,0.6)", fontWeight: 700, fontSize: "14px", alignItems: "flex-start", textAlign: "left", px: 2, py: 1.8, borderRadius: "8px", mb: 1, transition: "all 0.3s", textTransform: "none", borderLeft: "4px solid transparent", "&.Mui-selected": { bgcolor: "rgba(255,255,255,0.04)", borderColor: "#1E3A8A", color: "#ffffff" }, "&:hover": { color: "#fff" } } }}>
          {modules.map((mod) => (
            <Tab key={mod.id} label={mod.label} />
          ))}
        </Tabs>
      </Box>

      {/* Right 70% white panel */}
      <Box sx={{ flex: 1, bgcolor: "#ffffff", py: 8, px: { xs: 3, md: 6 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }}>
            <Box sx={{ maxWidth: "600px" }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#0B2046", fontSize: "24px", mb: 1, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {modules[activeTab].title}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
                {modules[activeTab].roles.map((role, r) => (
                  <Box key={r} sx={{ px: 1.2, py: 0.5, borderRadius: "12px", bgcolor: r % 2 === 0 ? "rgba(16,185,129,0.1)" : "rgba(30,58,138,0.1)", color: r % 2 === 0 ? "#10B981" : "#1E3A8A" }}>
                    <Typography sx={{ fontSize: "10px", fontWeight: 800 }}>{role}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography sx={{ color: "#4A5568", fontSize: "14px", mb: 3 }}>
                {modules[activeTab].desc}
              </Typography>

              <List sx={{ mb: 4, p: 0 }}>
                {modules[activeTab].features.map((f, i) => (
                  <ListItem key={i} sx={{ p: 0, mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: "28px", color: "#10B981" }}>
                      <CheckCircleIcon sx={{ fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText primary={f} primaryTypographyProps={{ sx: { color: "#0B2046", fontSize: "13px", fontWeight: 700 } }} />
                  </ListItem>
                ))}
              </List>

              <Box component="img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Module Interface Mockup" sx={{ width: "100%", height: "auto", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }} />
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default HMSModules;

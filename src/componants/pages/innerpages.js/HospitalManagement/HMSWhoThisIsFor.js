import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScienceIcon from '@mui/icons-material/Science';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SpaIcon from '@mui/icons-material/Spa';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import MediationIcon from '@mui/icons-material/Mediation';

const facilities = [
  { icon: LocalHospitalIcon, label: "Multi-specialty Hospital", desc: "Manage admissions, EMRs, and staff efficiently." },
  { icon: HealthAndSafetyIcon, label: "Single & Multi-branch Clinic", desc: "Control multiple clinics from one dashboard." },
  { icon: ScienceIcon, label: "Diagnostic Lab", desc: "Automate reports and patient records." },
  { icon: HomeWorkIcon, label: "Nursing Home", desc: "Simplify daily care and operations." },
  { icon: LocalHospitalIcon, label: "Dental Clinic", desc: "Handle appointments and treatments." },
  { icon: SpaIcon, label: "Ayurveda Centre", desc: "Digitize and manage traditional care." },
  { icon: CorporateFareIcon, label: "Corporate Health Unit", desc: "Track employee health records easily." },
  { icon: MediationIcon, label: "Hospital Chain", desc: "Unify and scale multiple hospitals." }
];

const HMSWhoThisIsFor = () => {
  return (
    <Box sx={{ background: "#F0F4F8", py: 8, position: "relative", clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Built for{" "}
            <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
              Every
              <Box component="svg" viewBox="0 0 100 10" preserveAspectRatio="none" sx={{ position: "absolute", bottom: -2, left: 0, width: "100%", height: "4px", pointerEvents: "none" }}>
                <motion.path d="M0 5 Q 50 2 100 5" fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
              </Box>
            </Box>{" "}
            Healthcare Facility
          </Typography>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 700, fontSize: "16px", mb: 1 }}>Flexible Solutions for Hospitals, Clinics & Labs</Typography>
        </Box>

        <Grid container spacing={3} sx={{ px: 2 }} alignItems="stretch">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: "flex" }}>
                <motion.div style={{ width: "100%", display: "flex" }} initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", bgcolor: "#ffffff", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1.5, position: "relative", overflow: "hidden", transition: "all 0.3s ease", cursor: "pointer", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 12px 30px rgba(10,45,110,0.06)", "& .icon-circle": { bgcolor: "rgba(10,45,110,0.12)", color: "#0A2D6E" }, "&::after": { width: "100%" } }, "&::after": { content: '""', position: "absolute", bottom: 0, left: 0, width: "0", height: "4px", bgcolor: "#0A2D6E", transition: "width 0.3s ease" } }}>
                    <Box className="icon-circle" sx={{ width: 44, height: 44, borderRadius: "50%", bgcolor: "rgba(10,45,110,0.05)", display: "flex", justifyContent: "center", alignItems: "center", color: "#0A2D6E", transition: "all 0.3s" }}>
                      <Icon sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "15px" }}>{fac.label}</Typography>
                    <Typography sx={{ color: "#4A5568", fontSize: "12px", lineHeight: 1.5 }}>{fac.desc}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HMSWhoThisIsFor;

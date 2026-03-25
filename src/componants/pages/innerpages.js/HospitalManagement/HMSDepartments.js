import React from "react";
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const depts = [
  { icon: FavoriteIcon, title: "Cardiology", color: "#EF4444", desc: "Enhance cardiac care with hospital management software for real-time vitals tracking and accurate diagnostics.", features: ["Outpatient Triage", "ECG Syncing", "Vitals History"] },
  { icon: AccessibilityNewIcon, title: "Orthopaedics", color: "#3B82F6", desc: "Manage trauma care and recovery workflows efficiently using hospital management software built for precision and speed.", features: ["Joint Replacement", "Trauma Care", "Physio Desk"] },
  { icon: PregnantWomanIcon, title: "Gynaecology", color: "#EC4899", desc: "Simplify women’s healthcare services with hospital management software that ensures smooth tracking and care delivery.", features: ["Prenatal Checkups", "IVF Tracking", "Delivery Desk"] },
  { icon: ChildCareIcon, title: "Paediatrics", color: "#10B981", desc: "Deliver better child care with hospital management software that supports growth tracking and vaccination management.", features: ["Vaccination Logs", "Growth Charts", "Neonatal Care"] },
  { icon: CoronavirusIcon, title: "Oncology", color: "#8B5CF6", desc: "Optimize cancer care workflows with hospital management software for coordinated treatment and monitoring.", features: ["Chemo Schedules", "Tumor Boards", "Radiation Sync"] },
  { icon: VisibilityIcon, title: "Ophthalmology", color: "#06B6D4", desc: "Improve vision care services with hospital management software that manages diagnostics and treatment workflows.", features: ["Vision Testing", "LASIK Layouts", "Optical Store"] },
  { icon: CleanHandsIcon, title: "Dental Care", color: "#F59E0B", desc: "Streamline dental operations with hospital management software for efficient procedures and patient records.", features: ["Orthodontics", "Root Canal", "X-Ray Mount"] },
  { icon: PsychologyIcon, title: "Psychiatry", color: "#6366F1", desc: "Support mental health services with hospital management software for secure records and therapy tracking.", features: ["Counseling Stats", "Therapy Logs", "Medication Desk"] }
];

const flipVariants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: (i) => ({
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
  })
};

const HMSDepartments = () => {
  return (
    <Box sx={{ background: "#ffffff", py: 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "12px", mb: 1, letterSpacing: "1px" }}>DEPARTMENT COVERAGE</Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Powering Every Department with Hospital Management Software
          </Typography>
          <Typography sx={{ color: "#4A5568", fontSize: "15px", maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}>
            Our advanced hospital management software is designed to streamline operations across every department, ensuring seamless coordination, faster workflows, and better patient outcomes.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ px: 2, perspective: "1200px" }}>
          {depts.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={flipVariants}>
                  <Paper elevation={0} sx={{ p: 0, borderRadius: "16px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.04)", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", "&:hover": { transform: "translateY(-5px)", boxShadow: "0 12px 30px rgba(10,45,110,0.06)", "& .color-band": { height: "50px" }, "& .learn-more": { transform: "translateY(0)", opacity: 1 }, "& .icon-circle": { transform: "scale(1.1)" } } }}>
                    {/* Top colored band */}
                    <Box className="color-band" sx={{ height: "40px", bgcolor: dept.color, width: "100%", transition: "height 0.3s ease" }} />

                    <Box sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                      <Box className="icon-circle" sx={{ width: 44, height: 44, borderRadius: "12px", bgcolor: `${dept.color}15`, display: "flex", justifyContent: "center", alignItems: "center", color: dept.color, mt: -2, border: "2px solid #ffffff", mb: 1.5, transition: "all 0.3s ease" }}>
                        <Icon sx={{ fontSize: 22 }} />
                      </Box>

                      <Typography sx={{ color: "#0B2046", fontWeight: 800, fontSize: "15px", mb: 1 }}>{dept.title}</Typography>
                      <Typography sx={{ color: "#4A5568", fontSize: "11px", mb: 2, lineHeight: 1.4 }}>{dept.desc}</Typography>

                      <List sx={{ p: 0, mb: 2, width: "100%" }}>
                        {dept.features.map((f, k) => (
                          <ListItem key={k} sx={{ p: 0, mb: 0.5, justifyContent: "center" }}>
                            <ListItemIcon sx={{ minWidth: "16px", color: dept.color }}>
                              <FiberManualRecordIcon sx={{ fontSize: 6 }} />
                            </ListItemIcon>
                            <ListItemText primary={f} primaryTypographyProps={{ sx: { color: "rgba(0,0,0,0.5)", fontSize: "11px", textAlign: "left", fontWeight: 700 } }} />
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ mt: "auto", width: "100%" }}>
                        <Box className="learn-more" sx={{ display: "flex", alignItems: "center", gap: 0.5, justifyContent: "center", color: dept.color, cursor: "pointer", transform: "translateY(10px)", opacity: 0, transition: "all 0.3s ease" }}>
                          <Typography sx={{ fontSize: "11px", fontWeight: 800 }}>Learn More</Typography>
                          <ArrowRightAltIcon sx={{ fontSize: 16 }} />
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography sx={{ color: "#0A2D6E", fontWeight: 800, fontSize: "15px", fontStyle: "italic" }}>
            💡 One powerful hospital management software to unify every department, improve efficiency, and elevate patient care.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HMSDepartments;

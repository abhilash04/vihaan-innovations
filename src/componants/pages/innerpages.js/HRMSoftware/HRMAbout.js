import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import StorageIcon from '@mui/icons-material/Storage';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';

const hrmValues = [
  { icon: AutoFixHighIcon, title: "Automate HR Processes", color: "#f97316" },
  { icon: StorageIcon, title: "Improve Data Records", color: "#3b82f6" },
  { icon: PointOfSaleIcon, title: "Enhance Payroll Accuracy", color: "#10b981" },
  { icon: PeopleIcon, title: "Improve Workforce Mgmt", color: "#8b5cf6" },
  { icon: AssessmentIcon, title: "Insightful Reports", color: "#ec4899" },
];

const HRMAbout = () => (
  <Box sx={{ background: "#0c0411", py: 12, position: "relative", overflow: "hidden" }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8, px: 2 }}>
        <Typography sx={{ color: "#f97316", fontWeight: 700, fontSize: "13px", mb: 1, letterSpacing: "1px" }}>ABOUT HRM SOFTWARE</Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "28px", md: "36px" }, mb: 2, fontFamily: "Fira Sans" }}>
          What is Human Resource Management Software?
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "650px", mx: "auto", lineHeight: 1.6 }}>
          Human Resource Management (HRM) software is a digital solution designed to manage employee data, recruitment, payroll, and performance. It automates tasks, improves records accuracy, and enhances workforce efficiency in a unified platform.
        </Typography>
      </Box>

      <Typography sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 800, fontSize: "18px", textAlign: "center", mb: 4 }}>
        Benefits of Using HRM Systems
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ px: 2 }}>
        {hrmValues.map((val, i) => {
          const Icon = val.icon;
          return (
            <Grid item xs={6} sm={4} md={2.4} key={i}>
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", bgcolor: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.05)`, textAlign: "center", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.06)", borderColor: val.color, transform: "translateY(-4px)" } }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: "12px", bgcolor: `${val.color}15`, display: "flex", justifyContent: "center", alignItems: "center", color: val.color, mb: 1.5 }}>
                    <Icon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "12px", lineHeight: 1.3 }}>{val.title}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HRMAbout;

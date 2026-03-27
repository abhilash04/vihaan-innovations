import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

export default function WhyChooseUs() {
  const points = [
    { icon: <StorageOutlinedIcon />, title: "Scalable Architecture", desc: "Our codebases are built using modern frameworks designed to easily handle 10x user growth without friction." },
    { icon: <VerifiedUserOutlinedIcon />, title: "Enterprise Security", desc: "We implement rigorous security protocols, ensuring maximum data integrity and compliance." },
    { icon: <SpeedOutlinedIcon />, title: "Agile Delivery", desc: "Iterative sprints, transparent communication, and rapid prototyping guarantee on-time launches." },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box component={motion.div} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Typography sx={{ color: "#00b4d8", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", fontSize: "13px", mb: 2, fontFamily: "'Inter', sans-serif" }}>
                Why Partner With Us
              </Typography>
              <Typography variant="h2" sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: { xs: "32px", md: "40px" }, color: "#0f172a", mb: 3 }}>
                We Build for Longevity, Not Just Launch.
              </Typography>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", color: "#64748b", fontSize: "16px", lineHeight: 1.7 }}>
                Selecting a technology partner is a critical business decision. Vihan Innovations eliminates the technical risks associated with software development by deploying seasoned engineering practices out of the gate.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {points.map((p, i) => (
                <Box key={i} component={motion.div} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} sx={{ display: "flex", gap: 3 }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: "14px", background: "rgba(0, 180, 216, 0.05)", color: "#00b4d8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {React.cloneElement(p.icon, { sx: { fontSize: 28 } })}
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0f172a", mb: 0.5 }}>{p.title}</Typography>
                    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#64748b", lineHeight: 1.6 }}>{p.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

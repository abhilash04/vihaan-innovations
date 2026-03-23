import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CodeIcon from '@mui/icons-material/Code';
import SupportIcon from '@mui/icons-material/Support';

const reasons = [
  { icon: EmojiEventsIcon, num: "01", title: "Hospitality Complexity Experience", desc: "We've built platforms for 50+ properties (Your Brand, Domain, Data). No generic SaaS — every platform is built for your use case.", color: "#d4a017" },
  { icon: HandshakeIcon, num: "02", title: "Built for Hotel Hospitality", desc: "A dedicated tech partner for hotels vs a generic CRM or SaaS reseller. Full white-label delivery.", color: "#0f766e" },
  { icon: CodeIcon, num: "03", title: "Fast, Scalable Technology", desc: "Modern React, Node.js stack with Redis cache, CDN, and real-time sync. Scales from 1 to 1,000+ properties.", color: "#3b82f6" },
  { icon: SupportIcon, num: "04", title: "A Dedicated Onboarding Specialist will walk you with you", desc: "Post-launch support, content migration, training, and monthly growth reviews included.", color: "#7c3aed" },
];

const HotelWhyUs = () => (
  <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Why Vihaan Innovations</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" } }}>
          The Recommended Technology Partner for Hotels
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#f8fafc", height: "100%", border: "1px solid rgba(0,0,0,0.06)", transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 14px 35px ${r.color}20`, borderColor: r.color } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                    <Typography sx={{ fontWeight: 900, color: "rgba(0,0,0,0.08)", fontSize: "28px", lineHeight: 1 }}>{r.num}</Typography>
                    <Icon sx={{ color: r.color, fontSize: 28 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px", mb: 1.5 }}>{r.title}</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>{r.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HotelWhyUs;

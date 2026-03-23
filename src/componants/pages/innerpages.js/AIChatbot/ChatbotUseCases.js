import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const useCases = [
  { icon: HomeIcon, title: "Real Estate", desc: "Qualify leads, share property details, schedule site visits automatically.", color: "#06b6d4" },
  { icon: SchoolIcon, title: "Education", desc: "Answer admission queries, collect student details, share course info 24/7.", color: "#8b5cf6" },
  { icon: HotelIcon, title: "Hotel & Hospitality", desc: "Handle room enquiries, take bookings, answer guest FAQs.", color: "#f59e0b" },
  { icon: LocalHospitalIcon, title: "Healthcare", desc: "Book appointments, answer clinic FAQs, collect patient symptoms.", color: "#22c55e" },
  { icon: WorkIcon, title: "HR & Recruitment", desc: "Pre-screen candidates, answer job queries, schedule interviews.", color: "#ec4899" },
  { icon: AccountBalanceIcon, title: "Financial Services", desc: "Answer policy queries, collect loan applications, route to advisors.", color: "#f97316" },
];

const ChatbotUseCases = () => (
  <Box sx={{ background: "linear-gradient(180deg, #060d1a 0%, #0a1628 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: "30%", left: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "36px" }, mb: 2 }}>
          Who This Is For & Use Cases
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
          Our AI chatbots adapt to any industry, any usecase.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {useCases.map((uc, i) => {
          const Icon = uc.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.04)", border: `1px solid ${uc.color}30`, height: "100%", backdropFilter: "blur(10px)", transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.07)", borderColor: uc.color, transform: "translateY(-6px)", boxShadow: `0 14px 35px ${uc.color}20` } }}>
                  <Box sx={{ width: 54, height: 54, borderRadius: "14px", bgcolor: `${uc.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: uc.color, mb: 2.5, border: `1px solid ${uc.color}30` }}>
                    <Icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#ffffff", fontSize: "16px", mb: 1.5 }}>{uc.title}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.6 }}>{uc.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default ChatbotUseCases;

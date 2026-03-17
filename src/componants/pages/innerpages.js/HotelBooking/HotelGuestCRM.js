import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import CakeIcon from '@mui/icons-material/Cake';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const crmFeatures = [
  { icon: FavoriteIcon, title: "Guest Preference Tags", desc: "Remember food preferences, room types, pillow choices, and allergies.", color: "#ec4899" },
  { icon: EmailIcon, title: "Automated Email Journeys", desc: "Pre-arrival, post-stay, win-back, and review-request sequences.", color: "#0f766e" },
  { icon: WhatsAppIcon, title: "WhatsApp Guest Communication", desc: "Send booking confirmation, check-in links and offers via WhatsApp.", color: "#22c55e" },
  { icon: StarIcon, title: "Loyalty Points System", desc: "Award points for direct bookings, dining, and spa spend.", color: "#d4a017" },
  { icon: CakeIcon, title: "Birthday & Anniversary Offers", desc: "Auto-trigger special rate or complimentary package on special dates.", color: "#f97316" },
  { icon: LoyaltyIcon, title: "Repeat Guest Recognition", desc: "Flag VIP guests at check-in, auto-apply loyalty benefits.", color: "#7c3aed" },
];

const HotelGuestCRM = () => (
  <Box sx={{ bgcolor: "#f0faf8", py: 14 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Guest CRM & Loyalty</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" } }}>
          Build Repeat Guests and Foster Loyalty
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mt: 5 }}>
        {crmFeatures.map((f, i) => {
          const Icon = f.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "#ffffff", height: "100%", border: `1.5px solid ${f.color}20`, transition: "all 0.3s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 14px 35px ${f.color}25`, borderColor: f.color } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: "14px", bgcolor: `${f.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: f.color, flexShrink: 0 }}>
                      <Icon sx={{ fontSize: 26 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px" }}>{f.title}</Typography>
                  </Box>
                  <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}>{f.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default HotelGuestCRM;

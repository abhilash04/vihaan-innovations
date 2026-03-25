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
  { icon: FavoriteIcon, title: "Guest Profile & Tags", desc: "Save preferences like room type, food allergies, and special requests for personalized service.", color: "#ec4899" },
  { icon: EmailIcon, title: "Automated Email Campaigns", desc: "Set up automatic emails for booking confirmations, pre-arrival details, and post-stay reviews.", color: "#0f766e" },
  { icon: WhatsAppIcon, title: "Direct Guest Messaging", desc: "Communicate with guests seamlessly via WhatsApp and SMS integrations.", color: "#22c55e" },
  { icon: StarIcon, title: "Loyalty Programs", desc: "Reward repeat guests with points, exclusive discounts, and member-only pricing.", color: "#d4a017" },
  { icon: CakeIcon, title: "Special Occasion Offers", desc: "Automatically send special offers and packages for birthdays and anniversaries.", color: "#f97316" },
  { icon: LoyaltyIcon, title: "VIP Guest Tracking", desc: "Identify returning VIP guests at check-in to provide priority services and upgrades.", color: "#7c3aed" },
];

const HotelGuestCRM = () => (
  <Box sx={{ bgcolor: "#f0faf8", py: 8 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography sx={{ color: "#0f766e", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", mb: 1 }}>Guest CRM & Loyalty</Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
          Build Lasting Relationships with Repeat Guests
        </Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px", maxWidth: "700px", mx: "auto" }}>
          Our built-in CRM helps you store guest preferences, run loyalty programs, and automate communication to keep guests coming back.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mt: 5 }}>
        {crmFeatures.map((f, i) => {
          const Icon = f.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ height: "65%" }}>
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

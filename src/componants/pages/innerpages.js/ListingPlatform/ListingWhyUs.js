import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import OpenWithIcon from '@mui/icons-material/OpenWith';
import SearchIcon from '@mui/icons-material/Search';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PersonIcon from '@mui/icons-material/Person';

const differentiators = [
  { num: "01", icon: OpenWithIcon, title: "Scaling Expertise", desc: "Scaling entities across listing platforms specific to testing websites" },
  { num: "02", icon: SearchIcon, title: "SEO Foundation", desc: "SEO-first architecture with extensive qualities" },
  { num: "03", icon: AdminPanelSettingsIcon, title: "Admin Panel Focus", desc: "Admin panels designed for listing websites" },
  { num: "04", icon: ManageAccountsIcon, title: "Admin Panel Focus", desc: "Providing athlete users and platform customers" },
  { num: "05", icon: FiberSmartRecordIcon, title: "SEO Foundation", desc: "Providing excellent revenue for excellent customers" },
  { num: "06", icon: MonetizationOnIcon, title: "Flexible Monetization", desc: "Flexible search testing platform modules" },
];

const ListingWhyUs = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 14 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Why Vihaan Innovations
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Listing platforms specific to listing differences.
          </Typography>
        </Box>

        {/* 3x2 Grid Differentiators */}
        <Grid container spacing={3} sx={{ mb: 14 }}>
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  style={{ height: '100%' }}
                >
                  <Paper elevation={0} sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "16px",
                    bgcolor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                    "&:hover": { borderColor: "#3b82f6", boxShadow: "0 10px 30px rgba(59, 130, 246, 0.08)", transform: "translateY(-5px)" }
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      <Typography sx={{ fontWeight: 800, color: "rgba(0,0,0,0.1)", fontSize: "28px" }}>{item.num}</Typography>
                      <Icon sx={{ color: "#3b82f6", fontSize: 26 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "15px", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#666", fontSize: "14px", lineHeight: 1.5 }}>
                      {item.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Testimonial Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "24px", md: "30px" }, mb: 2 }}>
            Testimonial
          </Typography>
        </Box>

        {/* Big Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper elevation={0} sx={{
            p: 6,
            borderRadius: "24px",
            bgcolor: "#f0f9ff", // Very light blue
            border: "1px solid rgba(59, 130, 246, 0.2)",
            maxWidth: "750px",
            mx: "auto",
            position: "relative",
            overflow: "hidden"
          }}>
            <FormatQuoteIcon sx={{ position: "absolute", top: 20, left: 20, fontSize: 50, color: "rgba(59, 130, 246, 0.15)" }} />
            <FormatQuoteIcon sx={{ position: "absolute", bottom: 20, right: 20, fontSize: 50, color: "rgba(59, 130, 246, 0.15)", transform: "scaleX(-1)" }} />

            <Typography sx={{ fontWeight: 600, color: "#1a1a1a", fontSize: { xs: "18px", md: "20px" }, lineHeight: 1.6, textAlign: "center", mb: 5, position: "relative" }}>
              The best platform we've ever used. Vihaan helped us launch our real estate portal in just 3 months, with advanced search and monetization that we never thought was possible at this budget.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
              <Box sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PersonIcon sx={{ color: "#3b82f6", fontSize: 36, mt: 1 }} />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "15px" }}>Ramesh Kumar</Typography>
                <Typography sx={{ color: "#666", fontSize: "13px" }}>Listing Platform Owner</Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>

      </Container>
    </Box>
  );
};

export default ListingWhyUs;

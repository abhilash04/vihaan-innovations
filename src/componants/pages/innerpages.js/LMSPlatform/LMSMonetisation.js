import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DiscountIcon from '@mui/icons-material/Discount';

const strategies = [
  { icon: MonetizationOnIcon, title: "Course Pricing", desc: "Free, one-time, and fixed pricing per course or module.", color: "#f59e0b" },
  { icon: ReceiptLongIcon, title: "Subscription Plans", desc: "Monthly/Annual access to course bundles.", color: "#3b82f6" },
  { icon: LibraryBooksIcon, title: "Bundle Courses", desc: "Combine courses into bundled offerings for upsell.", color: "#22c55e" },
  { icon: DiscountIcon, title: "Coupon Codes", desc: "Promo codes, time-limited offers, and discount tiers.", color: "#ec4899" },
];

const paymentLogos = ["Razorpay", "PayU", "Stripe", "Affiliate Commission Tracking"];

const LMSMonetisation = () => (
  <Box sx={{ bgcolor: "#f8fafc", py: 14 }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>Monetisation & Revenue Features</Typography>
        <Typography sx={{ color: "#64748b", fontSize: "16px" }}>Monetization and revenue tools for every business model.</Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {strategies.map((s, i) => {
          const Icon = s.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "18px", bgcolor: "#ffffff", height: "100%", textAlign: "center", border: "1px solid #e2e8f0", transition: "all 0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 12px 30px ${s.color}25`, borderColor: s.color } }}>
                  <Box sx={{ width: 54, height: 54, borderRadius: "14px", bgcolor: `${s.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: s.color, mx: "auto", mb: 2 }}>
                    <Icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "15px", mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>{s.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
      {/* Payment logos row */}
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 3 }}>
        {paymentLogos.map((logo, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
            <Paper elevation={0} sx={{ px: 3, py: 2, borderRadius: "10px", bgcolor: "#ffffff", border: "1px solid #e2e8f0", fontWeight: 700, color: "#334155", fontSize: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              {logo}
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Container>
  </Box>
);

export default LMSMonetisation;

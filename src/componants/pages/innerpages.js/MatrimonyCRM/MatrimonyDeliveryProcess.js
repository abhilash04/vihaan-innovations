import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import UpdateIcon from '@mui/icons-material/Update';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

const DeliveryCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{

        borderRadius: "16px",
        bgcolor: "#ffffff",
        border: "1px solid rgba(0, 180, 216, 0.2)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        textAlign: "center",
        position: "relative",
        zIndex: 2,
        minHeight: "220px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 40px rgba(0,180,216,0.15)",
          borderColor: "rgba(0, 180, 216, 0.5)",
        }
      }}
    >
      <Box sx={{
        width: 76, height: 76, borderRadius: "50%",
        bgcolor: "rgba(4, 156, 187, 0.1)", color: "#039ebdff",
        display: "flex", justifyContent: "center", alignItems: "center",
        "& > svg": { fontSize: 38 },
      }}>
        <Icon />
      </Box>

      <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "17px", lineHeight: 1.3 }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const MatrimonyDeliveryProcess = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 6 }, position: "relative" }}> {/* Very light blue */}
      {/* Background linking horizontal lines removed from outer box */}
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box sx={{ display: "inline-block", mb: 2 }}>
            <Typography sx={{
              fontWeight: 800, color: "#0B2046", fontSize: { xs: "24px", md: "32px" },
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center"
            }}>
              Our Delivery Process for Matrimony Platform Development
            </Typography>
          </Box>
          <Typography sx={{ color: "#666", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
            As a professional matrimony web design company, we follow a structured process to build scalable and revenue-ready matrimony platforms.
          </Typography>
        </Box>

        {/* 4 Cards mimicking the monetization structure from the mock */}
        <Box sx={{ position: "relative", mb: 4 }}>
          {/* Background linking horizontal lines perfectly centered behind cards */}
          <Box sx={{ position: "absolute", top: "50%", left: "0%", right: "0%", transform: "translateY(-50%)", height: "2px", borderTop: "2px dashed rgba(0, 180, 216, 0.5)", zIndex: 1, display: { xs: 'none', md: 'block' } }} />

          <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <DeliveryCard title="Membership Setup" icon={AccountBalanceWalletIcon} delay={0.1} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <DeliveryCard title="Renewal Automation" icon={UpdateIcon} delay={0.2} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <DeliveryCard title="Payment Integration" icon={PriceCheckIcon} delay={0.3} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <DeliveryCard title="Revenue Dashboard" icon={InsertChartOutlinedIcon} delay={0.4} />
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default MatrimonyDeliveryProcess;

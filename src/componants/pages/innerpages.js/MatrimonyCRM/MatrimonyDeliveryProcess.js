import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import UpdateIcon from '@mui/icons-material/Update';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

const DeliveryCard = ({ icon: Icon, title, isTop = false, delay }) => (
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
        p: 3,
        borderRadius: "12px",
        bgcolor: "#ffffff",
        border: "1px solid rgba(0, 180, 216, 0.2)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        position: "relative",
        zIndex: 2,
        minHeight: "140px"
      }}
    >
      {isTop && (
        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", mb: 2, lineHeight: 1.2 }}>
          {title}
        </Typography>
      )}
      
      <Box sx={{ 
        width: 60, height: 60, borderRadius: "50%", 
        bgcolor: "rgba(0, 180, 216, 0.1)", color: "#00B4D8",
        display: "flex", justifyContent: "center", alignItems: "center",
        "& > svg": { fontSize: 32 },
        mb: isTop ? 0 : 2
      }}>
        <Icon />
      </Box>

      {!isTop && (
        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.2 }}>
          {title}
        </Typography>
      )}
    </Paper>
  </motion.div>
);

const MatrimonyDeliveryProcess = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 12, position: "relative" }}> {/* Very light blue */}
      
      {/* Background linking horizontal lines */}
      <Box sx={{ position: "absolute", top: "55%", left: "10%", right: "10%", height: "2px", borderTop: "2px dashed rgba(0, 180, 216, 0.3)", zIndex: 1, display: { xs: 'none', md: 'block' } }} />

      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{ 
              fontWeight: 800, color: "#0B2046", fontSize: "28px", 
              display: "flex", alignItems: "center", gap: 1, 
              justifyContent: "center" 
            }}>
              <Box component="span" sx={{ 
                width: 32, height: 32, borderRadius: "50%", 
                border: "2px solid #0B2046", display: "flex", 
                alignItems: "center", justifyContent: "center", fontSize: "18px" 
              }}>9</Box>
              Our Delivery Process
            </Typography>
          </Box>
        </Box>

        {/* 4 Cards mimicking the monetization structure from the mock */}
        <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <DeliveryCard isTop={true} title="Free vs. Premium tier configuration" icon={AccountBalanceWalletIcon} delay={0.1} />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <DeliveryCard isTop={true} title="Auto-expiry and renewal reminders" icon={UpdateIcon} delay={0.2} />
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <DeliveryCard isTop={false} title="Gateway integration: / PayU, Stripe" icon={PriceCheckIcon} delay={0.3} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <DeliveryCard isTop={false} title="Revenue dashboard" icon={InsertChartOutlinedIcon} delay={0.4} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyDeliveryProcess;

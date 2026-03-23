import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FacebookIcon from '@mui/icons-material/Facebook';
import BarChartIcon from '@mui/icons-material/BarChart';
import MessageIcon from '@mui/icons-material/Message';

const IntegrationNode = ({ icon: Icon, label, side, delay, subLabel }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px' }}
    >
      <Box sx={{ color: "#00B4D8", mb: 1, "& > svg": { fontSize: 36, filter: 'drop-shadow(0px 0px 5px rgba(0, 180, 216, 0.5))' } }}>
        <Icon />
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "12px", textAlign: "center", lineHeight: 1.2 }}>
        {label}
      </Typography>
      {subLabel && (
        <Typography sx={{ color: "#666", fontSize: "11px", textAlign: "center", mt: 0.5 }}>
          {subLabel}
        </Typography>
      )}
    </motion.div>
  );
};

const MatrimonyIntegrations = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="md">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{
              fontWeight: 800, color: "#0B2046", fontSize: "28px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center", mb: 2
            }}>
              Powerful Integrations for a Seamless Matrimony Platform
            </Typography>
          </Box>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
            Our solutions are designed to connect your platform with essential tools and services. These integrations help automate communication, manage payments, analyze user behavior, and improve the overall efficiency of your matrimony platform.
          </Typography>
        </Box>

        {/* Integration Hub Diagram */}
        <Box sx={{ position: "relative", py: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {/* Animated Connective Lines Layer */}
          <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, display: { xs: 'none', md: 'block' } }}>
            <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 180, 216, 0.1)" />
                  <stop offset="50%" stopColor="rgba(0, 180, 216, 0.8)" />
                  <stop offset="100%" stopColor="rgba(0, 180, 216, 0.1)" />
                </linearGradient>
              </defs>
              <g stroke="url(#lineColor)" strokeWidth="3" strokeDasharray="6 6" fill="none" opacity="0.6">
                <motion.path d="M 120 100 Q 400 50 400 200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
                <motion.path d="M 120 300 Q 400 350 400 200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
                <motion.path d="M 680 100 Q 400 50 400 200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
                <motion.path d="M 680 300 Q 400 350 400 200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
                <motion.line x1="150" y1="200" x2="650" y2="200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
              </g>
            </svg>
          </Box>

          {/* Left Column External Services */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 6, zIndex: 1, alignItems: "flex-end", flex: 1 }}>
            <IntegrationNode icon={WhatsAppIcon} label="WhatsApp Business" subLabel="" side="left" delay={0.2} />
            <IntegrationNode icon={ChatIcon} label="Payments" subLabel="" side="left" delay={0.3} />
            <IntegrationNode icon={MessageIcon} label="SMS Gateway Notifications" subLabel="" side="left" delay={0.4} />
          </Box>

          {/* Central CRM Hub */}
          <Box sx={{ zIndex: 2, mx: 4 }}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: 130, height: 130,
                  borderRadius: "24px",
                  bgcolor: "#00B4D8",
                  background: "linear-gradient(135deg, #00B4D8 0%, #0B2046 100%)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  boxShadow: "0 15px 35px rgba(0, 180, 216, 0.4)",
                  border: "4px solid rgba(255,255,255,0.8)",
                  p: 2,
                  textAlign: "center"
                }}
              >
                <AccountTreeIcon sx={{ color: "#ffffff", fontSize: 40, mb: 1 }} />
                <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "12px", lineHeight: 1.2 }}>
                  Matrimony<br />CRM Admin<br />System
                </Typography>
              </Paper>
            </motion.div>
          </Box>

          {/* Right Column External Services */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 6, zIndex: 1, alignItems: "flex-start", flex: 1 }}>
            <IntegrationNode icon={FacebookIcon} label="Social Login" subLabel="" side="right" delay={0.5} />
            <IntegrationNode icon={AutoAwesomeIcon} label="Astrology APIs" subLabel="" side="right" delay={0.6} />
            <IntegrationNode icon={BarChartIcon} label="Analytics" subLabel="" side="right" delay={0.7} />
          </Box>

        </Box>

      </Container>
    </Box>
  );
};

export default MatrimonyIntegrations;

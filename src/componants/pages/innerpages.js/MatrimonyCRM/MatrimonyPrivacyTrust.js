import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DialpadIcon from '@mui/icons-material/Dialpad';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BlockIcon from '@mui/icons-material/Block';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

const PrivacyCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: "12px",
        bgcolor: "#ffffff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ color: "#00B4D8", mb: 1, "& > svg": { fontSize: 36 } }}>
        <Icon />
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#0B2046", fontSize: "13px", lineHeight: 1.2 }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const topCards = [
  { icon: VerifiedUserIcon, title: "Tiered photo\nvisibility" },
  { icon: DialpadIcon, title: "Mobile number\nmasking until\nagreed" },
  { icon: FactCheckIcon, title: "Profile approval\nworkflow\nbefore live" },
  { icon: AdminPanelSettingsIcon, title: "Admin\nmoderation panel\nfor flagged" }
];

const bottomCards = [
  { icon: BlockIcon, title: "Report & block" },
  { icon: SupportAgentIcon, title: "Admin moderator\nqueue" },
  { icon: EnhancedEncryptionIcon, title: "Data encryption,\nGDPR-ready" }
];

const MatrimonyPrivacyTrust = () => {
  return (
    <Box sx={{ bgcolor: "#0B2046", py: 12 }}> {/* Deep navy background */}
      <Container maxWidth="md">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{ 
              fontWeight: 800, color: "#ffffff", fontSize: "28px", 
              display: "flex", alignItems: "center", gap: 1, 
              justifyContent: "center" 
            }}>
              <Box component="span" sx={{ 
                width: 32, height: 32, borderRadius: "50%", 
                border: "2px solid #ffffff", display: "flex", 
                alignItems: "center", justifyContent: "center", fontSize: "18px" 
              }}>7</Box>
              Privacy & Trust Architecture
            </Typography>
          </Box>
        </Box>

        {/* Central Content Box */}
        <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto" }}>
          
          {/* Crucially Important Section (Top Row) */}
          <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", p: 3, mb: 3 }}>
            <Typography sx={{ color: "#ffffff", textAlign: "center", fontWeight: 700, fontSize: "14px", mb: 3, textTransform: "uppercase", letterSpacing: "1px" }}>
              Crucially important
            </Typography>
            <Grid container spacing={2}>
              {topCards.map((card, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <PrivacyCard icon={card.icon} title={card.title} delay={index * 0.1} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Tiered Section (Bottom Row) */}
          <Box sx={{ display: "flex" }}>
            {/* Tiered Label */}
            <Box sx={{ 
              bgcolor: "rgba(0, 180, 216, 0.2)", 
              border: "1px solid rgba(0, 180, 216, 0.5)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px"
            }}>
              Tiered
            </Box>
            
            <Box sx={{ 
              flexGrow: 1, 
              bgcolor: "rgba(255,255,255,0.1)", 
              border: "1px solid rgba(255,255,255,0.1)", 
              borderLeft: "none",
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              p: 3
            }}>
              <Grid container spacing={2} justifyContent="flex-end">
                {bottomCards.map((card, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <PrivacyCard icon={card.icon} title={card.title} delay={0.4 + (index * 0.1)} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

        </Box>

      </Container>
    </Box>
  );
};

export default MatrimonyPrivacyTrust;

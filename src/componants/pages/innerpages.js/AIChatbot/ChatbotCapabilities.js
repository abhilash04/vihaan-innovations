import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import FilterListIcon from '@mui/icons-material/FilterList';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TranslateIcon from '@mui/icons-material/Translate';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const capabilities = [
  { icon: StorageIcon, title: "Trained on Your Business Data", desc: "The AI bot is trained using your website, product details, FAQs, pricing, and documents to give accurate responses.", color: "#06b6d4" },
  { icon: DevicesIcon, title: "Multi-channel Deployment", desc: "Deploy your AI bot across websites, Instagram DMs, Instagram Business, and mobile apps from one platform.", color: "#8b5cf6" },
  { icon: FilterListIcon, title: "Lead Capture & Qualification", desc: "Automatically collect user details like name, contact, requirements, and budget, and qualify leads instantly.", color: "#22c55e" },
  { icon: SupportAgentIcon, title: "Live Agent Handoff", desc: "Transfer complex conversations to human agents with full chat history and context.", color: "#f59e0b" },
  { icon: TranslateIcon, title: "Multilingual Support", desc: "Communicate with users in English, Hindi, and regional languages based on their preference.", color: "#ec4899" },
  { icon: IntegrationInstructionsIcon, title: "CRM & Tool Integration", desc: "Integrate with CRM systems, Google Sheets, email, and WhatsApp to sync leads and conversations in real time.", color: "#f97316" },
];

const ChatbotCapabilities = () => (
  <Box sx={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f35 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: "50%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "36px" }, mb: 2 }}>
          What We Build — Core Capabilities
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "600px", mx: "auto" }}>
          Everything you need to automate customer conversations with a powerful AI bot application.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.08)`, height: "100%", backdropFilter: "blur(10px)", transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.07)", borderColor: cap.color, boxShadow: `0 0 30px ${cap.color}20` } }}>
                  <Box sx={{ width: 54, height: 54, borderRadius: "14px", bgcolor: `${cap.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: cap.color, mb: 2.5, border: `1px solid ${cap.color}25` }}>
                    <Icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#ffffff", fontSize: "16px", mb: 1 }}>{cap.title}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.6 }}>{cap.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default ChatbotCapabilities;

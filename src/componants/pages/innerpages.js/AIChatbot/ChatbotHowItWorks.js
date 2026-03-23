import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const steps = [
  { num: "1", icon: MenuBookIcon, title: "We Learn Your Business", desc: "We gather your FAQs, product info, workflows, and tone of voice.", color: "#06b6d4" },
  { num: "2", icon: PrecisionManufacturingIcon, title: "We Train & Build the Bot", desc: "The AI is trained on your data and configured with conversation flows, lead forms, and escalation rules.", color: "#8b5cf6" },
  { num: "3", icon: RocketLaunchIcon, title: "We Deploy Across Channels", desc: "The bot goes live on your website widget, WhatsApp number, or app with your branding.", color: "#22c55e" },
  { num: "4", icon: LeaderboardIcon, title: "You Get Leads & Insights", desc: "Every conversation, lead captured, and unanswered query is visible in your dashboard — and the bot keeps getting smarter.", color: "#f59e0b" },
];

const ChatbotHowItWorks = () => (
  <Box sx={{ background: "linear-gradient(180deg, #0d1f35 0%, #060d1a 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", bottom: -100, left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "36px" }, mb: 2 }}>
          How It Works — Simple 4-Step Flow
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} style={{ height: "100%" }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", bgcolor: "rgba(255,255,255,0.04)", border: `1.5px solid ${step.color}30`, height: "100%", backdropFilter: "blur(10px)", position: "relative", transition: "all 0.3s", "&:hover": { bgcolor: "rgba(255,255,255,0.07)", borderColor: step.color, boxShadow: `0 0 40px ${step.color}20` } }}>
                  {/* Step number */}
                  <Box sx={{ position: "absolute", top: -14, left: 20, width: 28, height: 28, borderRadius: "8px", bgcolor: step.color, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: `0 4px 15px ${step.color}50` }}>
                    <Typography sx={{ color: "#000", fontWeight: 900, fontSize: "13px" }}>{step.num}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", pt: 1 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: "14px", bgcolor: `${step.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: step.color, mb: 3, border: `1px solid ${step.color}30` }}>
                      <Icon sx={{ fontSize: 26 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: "#ffffff", fontSize: "16px", mb: 1.5, lineHeight: 1.3 }}>Step {step.num} — {step.title}</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.6 }}>{step.desc}</Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default ChatbotHowItWorks;

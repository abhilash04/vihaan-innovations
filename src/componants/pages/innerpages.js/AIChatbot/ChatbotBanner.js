import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PopUps from "../../../common/PopUps";

const glowStyle = {
  position: "absolute", borderRadius: "50%",
  filter: "blur(80px)", zIndex: 0
};

const ChatbotBanner = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box sx={{
      background: "linear-gradient(135deg, #060d1a 0%, #0a1628 50%, #071225 100%)",
      position: "relative", overflow: "hidden",
      py: { xs: 6, md: 6 },
    }}>
      {/* Glowing orbs */}
      <Box sx={{ ...glowStyle, top: -80, left: -80, width: 400, height: 400, bgcolor: "rgba(6,182,212,0.12)" }} />
      <Box sx={{ ...glowStyle, top: "30%", right: "0%", width: 350, height: 350, bgcolor: "rgba(139,92,246,0.1)" }} />
      <Box sx={{ ...glowStyle, bottom: -100, left: "40%", width: 300, height: 300, bgcolor: "rgba(6,182,212,0.08)" }} />

      {/* Grid dot pattern */}
      <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(6,182,212,0.07) 1px, transparent 1px)", backgroundSize: "32px 32px", zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, bgcolor: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: "30px", px: 2.5, py: 1, mb: 4 }}>
                <SmartToyIcon sx={{ color: "#06b6d4", fontSize: 18 }} />
                <Typography sx={{ color: "#06b6d4", fontSize: "11px", fontWeight: 700 }}>AI-Powered Chatbots for Indian Businesses</Typography>
              </Box>
              <Typography variant="h1" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "48px" }, lineHeight: 1.1, mb: 3 }}>
                Your Business.<br />
                <Box component="span" sx={{ color: "#06b6d4", WebkitTextFillColor: "transparent", background: "linear-gradient(90deg, #06b6d4, #8b5cf6)", WebkitBackgroundClip: "text" }}>
                  Always Responding.
                </Box>
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.7, mb: 3, maxWidth: "480px" }}>
                As a leading AI Chatbot Development Company, we build custom AI chatbots for websites, WhatsApp, and mobile apps. These chatbots are trained on your business data to handle leads, customer support, bookings, and FAQs automatically—without manual effort.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                <Button
                  variant="contained"
                  onClick={() => setOpenPopup(true)}
                  sx={{
                    bgcolor: "#06b6d4",
                    color: "#ffffff",
                    fontWeight: 800,
                    px: 4,
                    py: 2,
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "15px",
                    boxShadow: "0 6px 25px rgba(6,182,212,0.4)",
                    "&:hover": {
                      bgcolor: "#0891b2",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 35px rgba(6,182,212,0.5)"
                    },
                    transition: "all 0.3s"
                  }}
                >
                  See a Live Demo
                </Button>
                {/* <Button variant="outlined" sx={{ borderColor: "rgba(6,182,212,0.5)", color: "#06b6d4", fontWeight: 700, px: 4, py: 1.6, borderRadius: "10px", textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "rgba(6,182,212,0.07)", borderColor: "#06b6d4" } }}>
                Explore Use Cases
              </Button> */}
              </Box>
              {/* Stat chips */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {[{ v: "80%", l: "Automated Queries", icon: TrendingUpIcon, c: "#06b6d4" }, { v: "3s", l: "Response Time", icon: AccessTimeIcon, c: "#8b5cf6" }, { v: "24/7", l: "Availability", icon: SmartToyIcon, c: "#22c55e" }].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Paper key={i} elevation={0} sx={{ px: 3, py: 1.5, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.05)", border: `1px solid ${s.c}40`, display: "flex", alignItems: "center", gap: 1.5, backdropFilter: "blur(10px)" }}>
                      <Icon sx={{ color: s.c, fontSize: 18 }} />
                      <Box>
                        <Typography sx={{ color: "#ffffff", fontWeight: 900, fontSize: "18px", lineHeight: 1 }}>{s.v}</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "11px" }}>{s.l}</Typography>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Phone mockup */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                {/* Phone frame */}
                <Box sx={{ position: "relative", width: "240px" }}>
                  <Paper elevation={0} sx={{ borderRadius: "36px", bgcolor: "#0d1b2a", border: "2px solid rgba(6,182,212,0.3)", boxShadow: "0 0 40px rgba(6,182,212,0.2), 0 0 80px rgba(6,182,212,0.08)", overflow: "hidden", p: 2 }}>
                    {/* Status bar */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5, px: 1 }}>
                      <Typography sx={{ color: "#06b6d4", fontSize: "10px", fontWeight: 700 }}>9:41</Typography>
                      <WhatsAppIcon sx={{ color: "#22c55e", fontSize: 14 }} />
                    </Box>
                    {/* Chat bubbles */}
                    {[
                      { msg: "Hi! I want to book a room", out: true },
                      { msg: "What dates are you planning?", out: false },
                      { msg: "[ Select Dates ]", out: true },
                      { msg: "Rooms available from ₹3,500/night\n\n[ Book Now ]  [ View Rooms ]  [ Talk to Agent ]", out: false },
                    ].map((chat, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: chat.out ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.3, duration: 0.4 }}>
                        <Box sx={{ display: "flex", justifyContent: chat.out ? "flex-end" : "flex-start", mb: 1.5 }}>
                          <Box sx={{ maxWidth: "80%", px: 2, py: 1.5, borderRadius: chat.out ? "18px 18px 4px 18px" : "18px 18px 18px 4px", bgcolor: chat.out ? "rgba(6,182,212,0.2)" : "rgba(255,255,255,0.08)", border: chat.out ? "1px solid rgba(6,182,212,0.3)" : "1px solid rgba(255,255,255,0.1)" }}>
                            <Typography sx={{ color: "#ffffff", fontSize: "11px", lineHeight: 1.4 }}>{chat.msg}</Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                    {/* Typing indicator */}
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <Box sx={{ display: "flex", gap: 0.5, px: 2, mt: 1 }}>
                        {[0, 0.2, 0.4].map((d, i) => (
                          <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: d }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#06b6d4" }} />
                          </motion.div>
                        ))}
                      </Box>
                    </motion.div>
                  </Paper>
                  {/* Floating WhatsApp badge */}
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: "absolute", top: "-14px", right: "-14px" }}>
                    <Paper sx={{ px: 2, py: 1, borderRadius: "12px", bgcolor: "#22c55e", color: "#fff", fontWeight: 800, fontSize: "12px", display: "flex", alignItems: "center", gap: 0.5 }}>
                      <WhatsAppIcon sx={{ fontSize: 14 }} /> WhatsApp Live
                    </Paper>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default ChatbotBanner;

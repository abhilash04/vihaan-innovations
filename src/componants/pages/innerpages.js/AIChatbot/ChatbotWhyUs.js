import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import BuildIcon from '@mui/icons-material/Build';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LanguageIcon from '@mui/icons-material/Language';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const reasons = [
  { icon: BuildIcon, title: "Custom AI Bot Development for Your Business", desc: "We design and train AI bot solutions based on your specific industry workflows—not generic templates.", color: "#06b6d4" },
  { icon: DataObjectIcon, title: "Trained on Real Business Data", desc: "Our AI bots use real business data instead of fixed scripts, enabling smarter and more accurate responses.", color: "#8b5cf6" },
  { icon: LanguageIcon, title: "End-to-End Setup & Support", desc: "We handle the complete process, including development, deployment, testing, and ongoing improvements.", color: "#22c55e" },
  { icon: SupportAgentIcon, title: "Built for Indian Businesses", desc: "Our AI solutions support Indian languages, integrate with local tools, and are designed to match user behaviour in India.", color: "#f59e0b" },
];

const ChatbotWhyUs = () => (
  <Box sx={{ background: "linear-gradient(180deg, #060d1a 0%, #071225 100%)", py: 8, position: "relative", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", top: "20%", right: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Grid container spacing={5} alignItems="flex-start">
        {/* Why Us Column */}
        <Grid item xs={12} md={7}>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" sx={{ fontWeight: 900, color: "#ffffff", fontSize: { xs: "26px", md: "34px" }, mb: 2 }}>
              Why Vihaan Innovations
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>Why Choose Us</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <Paper elevation={0} sx={{ p: 3.5, borderRadius: "16px", bgcolor: "rgba(255,255,255,0.04)", border: `1px solid ${r.color}25`, display: "flex", gap: 3, alignItems: "center", backdropFilter: "blur(10px)", transition: "all 0.3s", "&:hover": { borderColor: r.color, bgcolor: "rgba(255,255,255,0.07)" } }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: "12px", bgcolor: `${r.color}18`, display: "flex", justifyContent: "center", alignItems: "center", color: r.color, flexShrink: 0, border: `1px solid ${r.color}25` }}>
                      <Icon sx={{ fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "#ffffff", fontSize: "15px", fontWeight: 700, mb: 0.5 }}>{r.title}</Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.6 }}>{r.desc}</Typography>
                    </Box>
                  </Paper>
                </motion.div>
              );
            })}
          </Box>
        </Grid>

        {/* CTA Block */}
        <Grid item xs={12} md={5}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Paper elevation={0} sx={{ p: 5, borderRadius: "24px", background: "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.15) 100%)", border: "1.5px solid rgba(6,182,212,0.3)", backdropFilter: "blur(20px)", boxShadow: "0 0 60px rgba(6,182,212,0.1)", textAlign: "center", position: "sticky", top: "100px" }}>
              <SmartToyIcon sx={{ fontSize: 56, color: "#06b6d4", mb: 2 }} />
              <Typography sx={{ fontWeight: 900, color: "#ffffff", fontSize: "22px", mb: 2, lineHeight: 1.3 }}>
                Get Started with Your AI Bot<br />
                <Box component="span" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", fontWeight: 500 }}>Let’s build a chatbot that works for your business 24/7 — even when you’re offline.</Box>
              </Typography>
              <Button variant="contained" sx={{ bgcolor: "#06b6d4", color: "#000", fontWeight: 800, px: 5, py: 1.8, borderRadius: "12px", textTransform: "none", fontSize: "15px", boxShadow: "0 8px 30px rgba(6,182,212,0.4)", width: "100%", mb: 2, "&:hover": { bgcolor: "#0891b2", transform: "translateY(-2px)", boxShadow: "0 12px 40px rgba(6,182,212,0.5)" }, transition: "all 0.3s" }}>
                Book Your Free 30-Minute Consultation
              </Button>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 2, cursor: "pointer" }}>
                <WhatsAppIcon sx={{ fontSize: 18, color: "#22c55e" }} />
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", textDecoration: "underline" }}>
                  👉 Try a Live Demo on WhatsApp Now
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default ChatbotWhyUs;

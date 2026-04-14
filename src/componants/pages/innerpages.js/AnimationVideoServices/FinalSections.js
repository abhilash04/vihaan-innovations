import React from "react";
import { Box, Container, Typography, Grid, Stack, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Scissors, Edit3, CheckCircle2, Star, Quote } from "lucide-react";

export const WhiteboardAnimation = () => (
  <Box
    id="whiteboard"
    sx={{
      py: { xs: 8, md: 12 },
      bgcolor: "#ffffff",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Stack spacing={3}>
            <Typography sx={{ color: "#06b6d4", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px" }}>WHITEBOARD ANIMATION</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a" }}>
              The Power of Sequential <br />Hand-Drawn Storytelling
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "18px", lineHeight: 1.7 }}>
              Capture the human element with whiteboard animations. Perfect for training and educational purposes, this style uses the psychological "drawing" effect to keep learners engaged and improve information retention by up to 15%.
            </Typography>
            <Stack spacing={2}>
              {["Custom Illustrated Assets", "Engaging 'Live-Drawing' Effect", "Professional Narrator Sync", "Multi-Language Support"].map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="center">
                  <CheckCircle2 size={20} color="#06b6d4" />
                  <Typography sx={{ color: "#1e293b", fontWeight: 600 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
           <Box sx={{ p: 4, bgcolor: "#f8fafc", borderRadius: "32px", border: "2px solid #e2e8f0" }}>
              <Box sx={{ width: "100%", height: "250px", border: "1px dashed #cbd5e1" }} />
           </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export const VideoEditingVFX = () => (
  <Box
    id="video-editing"
    sx={{
      py: { xs: 8, md: 12 },
      bgcolor: "#0f172a",
      color: "white",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={6}>
           <Box sx={{ width: "100%", height: "300px", background: "linear-gradient(135deg, #1e293b, #334155)", borderRadius: "24px" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography sx={{ color: "#7c3aed", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px" }}>VIDEO EDITING & VFX</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif" }}>
              Post-Production Made <br />Cinematic
            </Typography>
            <Typography sx={{ color: "#94a3b8", fontSize: "18px", lineHeight: 1.7 }}>
              Transform raw footage into polished brand stories. From precise narrative editing and color grading to complex visual effects and motion tracking, we ensure your videos have that premium big-budget look.
            </Typography>
            <Stack direction="row" spacing={4}>
               <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#7c3aed" }}>100+</Typography>
                  <Typography sx={{ fontSize: "12px", color: "#64748b" }}>Hours of Footage Edited</Typography>
               </Box>
               <Divider orientation="vertical" flexItem sx={{ bgcolor: "#334155" }} />
               <Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#ec4899" }}>24/7</Typography>
                  <Typography sx={{ fontSize: "12px", color: "#64748b" }}>Rendering Pipeline</Typography>
               </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export const AnimationProcess = () => {
  const steps = [
    { title: "Voice & Script", desc: "Crafting a compelling narrative and recording professional audio." },
    { title: "Storyboarding", desc: "Visualizing every scene before production starts." },
    { title: "Production", desc: "The core animation, modeling, and motion phase." },
    { title: "Polishing", desc: "Adding SFX, color grading, and visual effects." }
  ];

  return (
    <Box sx={{ py: 12, bgcolor: "#f1f5f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" sx={{ mb: 8, fontWeight: 800 }}>Our Production Workflow</Typography>
        <Grid container spacing={4}>
          {steps.map((step, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box sx={{ p: 4, bgcolor: "white", borderRadius: "24px", textAlign: "center", position: "relative" }}>
                 <Typography variant="h2" sx={{ position: "absolute", top: -10, left: 20, opacity: 0.1, color: "#7c3aed" }}>0{i+1}</Typography>
                 <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>{step.title}</Typography>
                 <Typography sx={{ color: "#64748b" }}>{step.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const WhyChooseUs = () => (
  <Box sx={{ py: 12, bgcolor: "#ffffff" }}>
    <Container maxWidth="lg">
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={5}>
           <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Why Leading Brands Entrust Their Story to Us</Typography>
           <Typography sx={{ color: "#475569", mb: 6 }}>We combine technical excellence with artistic flair to deliver videos that don't just look good—they achieve business objectives.</Typography>
           <Stack spacing={4}>
              {[
                { title: "Unlimited Revisions", desc: "We polish until you are 100% satisfied.", color: "#7c3aed" },
                { title: "Global Voice Talent", desc: "Access to professional narrators in 30+ languages.", color: "#ec4899" },
                { title: "Fast Turnaround", desc: "Standard 2-week delivery for most animation projects.", color: "#3b82f6" }
              ].map((item, i) => (
                <Stack key={i} direction="row" spacing={3}>
                   <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: item.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}><Star size={20} /></Box>
                   <Box>
                      <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
                      <Typography sx={{ color: "#64748b", fontSize: "14px" }}>{item.desc}</Typography>
                   </Box>
                </Stack>
              ))}
           </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
           <Box sx={{ p: 6, bgcolor: "#f8fafc", borderRadius: "40px", border: "1px solid #e2e8f0" }}>
              <Quote size={48} color="#cbd5e1" style={{ marginBottom: "24px" }} />
              <Typography variant="h5" sx={{ fontWeight: 500, fontStyle: "italic", mb: 4, lineHeight: 1.6 }}>
                "Working with Vihaan's animation team was a game changer for our SaaS launch. They took a complex technical product and made it feel human, accessible, and desirable. Our conversion rates increased by 30% after the explainer video went live."
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                 <Box sx={{ width: 60, height: 60, borderRadius: "50%", bgcolor: "#e2e8f0" }} />
                 <Box>
                    <Typography sx={{ fontWeight: 800 }}>Alex Thompson</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "14px" }}>Founder, CloudMetrics</Typography>
                 </Box>
              </Stack>
           </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

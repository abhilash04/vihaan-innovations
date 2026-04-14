import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Cubic, Layers, Zap, PlayCircle, Monitor, ArrowRight } from "lucide-react";

export const ThreeDAnimation = () => (
  <Box
    id="3d-animation"
    sx={{
      py: { xs: 8, md: 12 },
      bgcolor: "#f8fafc",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Stack spacing={3}>
            <Typography sx={{ color: "#3b82f6", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px" }}>3D ANIMATION & CGI</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a" }}>
              Photorealistic 3D <br />
              Modeling and Visuals
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "18px", lineHeight: 1.7 }}>
              Elevate your project with cinematic 3D animations. We specialize in high-fidelity product rendering, architectural walkthroughs, and complex CGI that provides an immersive experience for your customers.
            </Typography>
            <Stack spacing={2}>
              {["High-Fidelity Product Rendering", "Character Rigging & Animation", "Architectural Visualisation", "Particle & Physics Simulations"].map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="center">
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#3b82f6" }} />
                  <Typography sx={{ color: "#1e293b", fontWeight: 600 }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box sx={{ position: "relative", height: "400px", bgcolor: "#0f172a", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <motion.div
               animate={{ rotateY: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               style={{ perspective: 1000 }}
             >
               <Box sx={{ width: 150, height: 150, bgcolor: "rgba(59, 130, 246, 0.2)", border: "2px solid #3b82f6", transform: "rotateX(45deg) rotateY(45deg)" }} />
             </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export const MotionGraphics = () => (
  <Box
    id="motion-graphics"
    sx={{
      py: { xs: 8, md: 12 },
      bgcolor: "#ffffff",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 10 }}>
        <Typography sx={{ color: "#7c3aed", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px" }}>MOTION GRAPHICS</Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a" }}>
          Dynamic Graphics in Motion
        </Typography>
        <Typography sx={{ color: "#475569", maxWidth: "700px", fontSize: { xs: "16px", md: "20px" } }}>
          We transform static designs into high-energy visual narratives. Kinetic typography, logo animations, and UI/UX motion systems that make your digital presence feel alive and interactive.
        </Typography>
      </Stack>
      <Grid container spacing={4}>
        {[
          { title: "Kinetic Typography", desc: "Expressive text animations that drive home your core message." },
          { title: "Animated Logos", icon: Zap, desc: "Give your brand identity a personality with signature motion." },
          { title: "UI/UX Micro-Interactions", desc: "Make your applications feel fluid and responsive through motion." },
          { title: "Social Media Motion", desc: "Stop the scroll with high-impact, short-form animated content." },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box sx={{ p: 4, height: "100%", bgcolor: "#f8fafc", borderRadius: "24px", border: "1px solid rgba(124, 58, 237, 0.1)" }}>
               <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>{item.title}</Typography>
               <Typography sx={{ color: "#64748b" }}>{item.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export const ExplainerVideos = () => (
  <Box
    id="explainer-videos"
    sx={{
      py: { xs: 8, md: 12 },
      bgcolor: "#f8fafc",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Container maxWidth="lg">
       <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
             <Box sx={{ aspectRatio: "16/9", bgcolor: "#1e293b", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PlayCircle size={64} color="#7c3aed" />
             </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography sx={{ color: "#ec4899", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px" }}>EXPLAINER VIDEOS</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a" }}>
                Simplifying Complexity <br />Through Storytelling
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: "18px", lineHeight: 1.7 }}>
                Convert more customers with professional explainer videos. We combine clear messaging, engaging visuals, and expert sound design to create videos that explain your value proposition in 90 seconds or less.
              </Typography>
              <Box>
                <Typography sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>Our Explainer Process:</Typography>
                <Grid container spacing={2}>
                   {["Scriptwriting", "Voiceover", "Storyboard", "Animation"].map((step, i) => (
                     <Grid item xs={6} key={i}>
                        <Stack direction="row" spacing={1} alignItems="center">
                           <Box sx={{ width: 24, height: 24, borderRadius: "50%", bgcolor: "rgba(236, 72, 153, 0.1)", color: "#ec4899", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800 }}>{i+1}</Box>
                           <Typography sx={{ fontWeight: 600 }}>{step}</Typography>
                        </Stack>
                     </Grid>
                   ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>
       </Grid>
    </Container>
  </Box>
);

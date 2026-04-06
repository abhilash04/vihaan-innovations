import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Play, Youtube, ArrowRight, Video, Camera, Award } from "lucide-react";

const VideoMarketing = () => {
  return (
    <Box
      id="video-marketing"
      sx={{
        py: { xs: 10, md: 20 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ffffff",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "5%",
          left: "2%",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          lineHeight: 1,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        07
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#e11d48",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    VIDEO MARKETING
                  </Typography>
                  <Typography
                    component="a"
                    href="/video-marketing"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#e11d48",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" }
                    }}
                  >
                    View All <ArrowRight size={14} />
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "32px", md: "42px" },
                    fontWeight: 800,
                    fontFamily: "'Syne', sans-serif",
                    color: "#0f172a",
                    lineHeight: 1.1,
                  }}
                >
                  Visuals That Sell. <br />
                  <Box component="span" sx={{ color: "#e11d48" }}>
                    Stories That Stay.
                  </Box>
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                Video is the fastest way to build trust online. We produce cinematic, high-impact video content designed to capture attention in seconds and drive real conversions.
              </Typography>

              <Grid container spacing={2}>
                 {[
                    { icon: Camera, text: "Professional Production" },
                    { icon: Youtube, text: "YouTube Channel Growth" },
                    { icon: Video, text: "Short-Form Social Ads" },
                    { icon: Award, text: "Brand Storytelling" }
                 ].map((item, i) => (
                    <Grid item xs={6} key={i}>
                       <Stack direction="row" spacing={1.5} alignItems="center">
                          <item.icon size={18} color="#e11d48" />
                          <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "14px" }}>{item.text}</Typography>
                       </Stack>
                    </Grid>
                 ))}
              </Grid>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#e11d48",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                  }}
                >
                  Watch Our Showreel <ArrowRight size={20} />
                </Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "500px",
              }}
            >
               {/* Video Player Visualization */}
               <Box
                 component={motion.div}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 sx={{
                   width: "100%",
                   maxWidth: "500px",
                   aspectRatio: "16/9",
                   bgcolor: "#0f172a",
                   borderRadius: "32px",
                   boxShadow: "0 50px 100px -20px rgba(225, 29, 72, 0.2)",
                   position: "relative",
                   overflow: "hidden",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center"
                 }}
               >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                     <Box sx={{ p: 3, bgcolor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "50%", border: "2px solid white" }}>
                        <Play size={40} color="white" fill="white" />
                     </Box>
                  </motion.div>
                  
                  <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                     <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ flex: 1, height: "4px", bgcolor: "rgba(255,255,255,0.2)", borderRadius: "2px", position: "relative" }}>
                           <motion.div
                             animate={{ width: ["0%", "100%"] }}
                             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                             style={{ height: "100%", background: "#e11d48", borderRadius: "2px" }}
                           />
                        </Box>
                        <Typography sx={{ color: "white", fontSize: "12px", fontWeight: 700 }}>04:12</Typography>
                     </Stack>
                  </Box>
               </Box>
               
               {/* Floating View Count */}
               <Box
                 component={motion.div}
                 animate={{ y: [-15, 15, -15] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 sx={{
                   position: "absolute",
                   top: "10%",
                   right: "5%",
                   bgcolor: "white",
                   p: 2,
                   borderRadius: "20px",
                   boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                   border: "1px solid #f1f5f9"
                 }}
               >
                  <Typography sx={{ fontSize: "10px", fontWeight: 800, color: "#64748b" }}>LIVE VIEWS</Typography>
                  <Typography sx={{ fontSize: "20px", fontWeight: 900, color: "#e11d48" }}>128.4K</Typography>
               </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoMarketing;

import React from "react";
import { Box, Container, Typography, Grid, Stack, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const WhyChooseVihaan = () => {
  const differentiators = [
    { title: "Full-Stack Mastery", desc: "Our website development services cover every layer from frontend design to robust backend deployment.", color: "#2563eb" },
    { title: "Agile & Transparent", desc: "Weekly sprints and full visibility throughout the delivery of our website development services.", color: "#06b6d4" },
    { title: "Scalable Architecture", desc: "Built to handle 10 users or 10 million with our enterprise website development services.", color: "#7c3aed" },
    { title: "Strategic Partnership", desc: "We stay with you through every growth phase, evolving our website development services as you scale.", color: "#10b981" },
  ];

  return (
    <Box id="why-choose-vihaan" sx={{ py: { xs: 15, md: 20 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left - Differentiator Cards */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography sx={{ color: "#06b6d4", fontWeight: 800, letterSpacing: "0.2em", fontSize: "14px", textTransform: "uppercase" }}>
                WHY CHOOSE VIHAAN
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", mb: 4, lineHeight: 1.1 }}>
                The Partner for Your <br />
                <Box component="span" sx={{ color: "#06b6d4" }}>Next Big Idea</Box>
              </Typography>
              
              <Stack spacing={2.5}>
                {differentiators.map((item, i) => (
                  <Box
                    key={i}
                    component={motion.div}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, bgcolor: "#ffffff" }}
                    viewport={{ once: true }}
                    sx={{
                      p: 4,
                      background: "#ffffff",
                      borderRadius: "24px",
                      border: "1px solid #e2e8f0",
                      borderLeft: `6px solid ${item.color}`,
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                    }}
                  >
                     <Typography
                        sx={{
                          position: "absolute",
                          right: 20,
                          top: 10,
                          fontSize: "80px",
                          fontWeight: 900,
                          color: "rgba(15, 23, 42, 0.03)",
                          fontFamily: "'Syne', sans-serif",
                          pointerEvents: "none"
                        }}
                     >
                        0{i + 1}
                     </Typography>
                     <Typography sx={{ color: "#0f172a", fontWeight: 800, mb: 1.5, fontSize: "20px" }}>{item.title}</Typography>
                     <Typography sx={{ color: "#475569", fontSize: "15px", lineHeight: 1.7, fontWeight: 500 }}>{item.desc}</Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right - Testimonial & Trust */}
          <Grid item xs={12} md={6}>
             <Box
               component={motion.div}
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               sx={{
                 position: "relative",
                 p: 1, // for the gradient border effect
                 borderRadius: "32px",
                 background: "rgba(255, 255, 255, 0.05)",
                 overflow: "hidden",
               }}
             >
                {/* Animated Gradient Border Overlay */}
                <Box
                  component={motion.div}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  sx={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    right: "-50%",
                    bottom: "-50%",
                    background: "conic-gradient(#2563eb, #06b6d4, #7c3aed, #2563eb)",
                    zIndex: 0,
                  }}
                />
                
                <Box
                  sx={{
                    position: "relative",
                    p: 6,
                    borderRadius: "28px",
                    background: "#ffffff", // matches section bg but darker for contrast
                    zIndex: 1,
                  }}
                >
                   <Stack spacing={3}>
                      <Stack direction="row" spacing={0.5}>
                        {[1, 2, 3, 4, 5].map((s) => (
                           <motion.div
                             key={s}
                             initial={{ scale: 0 }}
                             whileInView={{ scale: 1 }}
                             transition={{ delay: 0.5 + s * 0.1 }}
                             viewport={{ once: true }}
                           >
                             <Star size={18} fill="#f59e0b" color="#f59e0b" />
                           </motion.div>
                        ))}
                      </Stack>

                      <Quote size={48} color="rgba(37, 99, 235, 0.2)" />
                      
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: 700,
                          lineHeight: 1.4,
                          color: "#0f172a",
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        "Vihaan transformed our idea into a platform serving 200,000 users in under 6 months. The team's technical depth is unmatched."
                      </Typography>

                      <Stack direction="row" spacing={2} alignItems="center">
                         <Avatar sx={{ width: 56, height: 56, bgcolor: "#2563eb" }}>JD</Avatar>
                         <Stack>
                            <Typography sx={{ color: "#0f172a", fontWeight: 700 }}>John Doe</Typography>
                            <Typography sx={{ color: "#475569", fontSize: "13px" }}>CTO at TechGlobal</Typography>
                         </Stack>
                      </Stack>

                      <Box sx={{ pt: 4, borderTop: "1px solid #f1f5f9" }}>
                         <Typography sx={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", mb: 2 }}>TRUSTED BY LEADING TEAMS</Typography>
                         <Stack direction="row" spacing={3} sx={{ opacity: 0.4 }}>
                            {[1, 2, 3, 4].map((i) => (
                               <Box key={i} sx={{ width: 80, height: 20, bgcolor: "#0f172a", borderRadius: 1 }} />
                            ))}
                         </Stack>
                      </Box>
                   </Stack>
                </Box>
             </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseVihaan;

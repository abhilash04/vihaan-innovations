import React from "react";
import { Box, Container, Typography, Grid, Stack, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart, Rocket, Quote, Star } from "lucide-react";

const WhyChooseVihaan = () => {
  const differentiators = [
    { 
       icon: ShieldCheck, 
       title: "Data Integrity", 
       desc: "We don't inflate numbers. Our reporting is transparent, verified, and mapped directly to your ROI.",
       color: "#2563eb"
    },
    { 
       icon: Zap, 
       title: "Agile Optimization", 
       desc: "The digital landscape changes daily. We pivot and optimize campaigns in real-time for peak performance.",
       color: "#f59e0b"
    },
    { 
       icon: BarChart, 
       title: "Full-Funnel Focus", 
       desc: "We don't just stop at clicks. We optimize for high-quality leads that actually convert into revenue.",
       color: "#7c3aed"
    }
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 20 }, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="overline" sx={{ color: "#2563eb", fontWeight: 800, letterSpacing: "0.2em" }}>WHY CHOOSE US</Typography>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: { xs: "36px", md: "52px" }, 
                    fontWeight: 900, 
                    color: "#0f172a", 
                    lineHeight: 1.1,
                    fontFamily: "'Syne', sans-serif"
                  }}
                >
                  We Don't Just Spend. <br />
                  <Box component="span" sx={{ color: "#2563eb" }}>We Multiplier.</Box>
                </Typography>
              </Box>

              <Stack spacing={4}>
                {differentiators.map((diff, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 3 }}>
                    <Box sx={{ p: 1.5, bgcolor: "white", borderRadius: "16px", height: "fit-content", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                       <diff.icon size={24} color={diff.color} />
                    </Box>
                    <Box>
                       <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "18px", mb: 1 }}>{diff.title}</Typography>
                       <Typography sx={{ color: "#64748b", fontSize: "15px", lineHeight: 1.6 }}>{diff.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
             {/* Testimonial card */}
             <Box
               sx={{ 
                 position: "relative",
                 p: 1.5,
                 borderRadius: "40px",
                 background: "rgba(255, 255, 255, 0.5)",
                 border: "1px solid #e2e8f0"
               }}
             >
                <Box
                   component={motion.div}
                   animate={{ rotate: 360 }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   sx={{
                     position: "absolute",
                     top: "-50%",
                     left: "-50%",
                     right: "-50%",
                     bottom: "-50%",
                     background: "conic-gradient(#2563eb, #f59e0b, #7c3aed, #2563eb)",
                     zIndex: 0,
                     opacity: 0.2
                   }}
                 />

                 <Box
                   sx={{
                     position: "relative",
                     p: 6,
                     borderRadius: "32px",
                     background: "#ffffff",
                     zIndex: 1,
                     boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.1)"
                   }}
                 >
                    <Stack spacing={4}>
                       <Stack direction="row" spacing={0.5}>
                         {[1, 2, 3, 4, 5].map((s) => (
                           <Star key={s} size={20} fill="#f59e0b" color="#f59e0b" />
                         ))}
                       </Stack>

                       <Quote size={48} color="#2563eb" opacity={0.1} />

                       <Typography
                         sx={{
                           fontSize: "26px",
                           fontWeight: 800,
                           lineHeight: 1.3,
                           color: "#0f172a",
                           fontFamily: "'Syne', sans-serif",
                         }}
                       >
                         "Vihaan Innovations didn't just manage our ads; they redefined our entire digital strategy. Our cost-per-acquisition dropped by 45% in just 3 months."
                       </Typography>

                       <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar sx={{ width: 56, height: 56, bgcolor: "#2563eb", fontWeight: 800 }}>AM</Avatar>
                          <Stack>
                             <Typography sx={{ color: "#0f172a", fontWeight: 800, fontSize: "16px" }}>Alice Miller</Typography>
                             <Typography sx={{ color: "#475569", fontSize: "14px", fontWeight: 600 }}>Director of Marketing, AeroCloud</Typography>
                          </Stack>
                       </Stack>
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

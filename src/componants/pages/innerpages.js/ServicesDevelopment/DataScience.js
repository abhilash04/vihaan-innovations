import React from "react";
import { Box, Container, Typography, Grid, Stack, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { Database, LineChart, BarChart2, PieChart, Brain, Search, Cpu, ArrowRight as LucideArrowRight } from "lucide-react";

const DataScience = () => {
  const features = [
    "Machine Learning Model Development",
    "Data Pipeline & ETL Engineering",
    "Real-time Analytics Dashboards",
    "Predictive Analytics & Forecasting",
    "Natural Language Processing (NLP)",
    "Data Visualization & Reporting",
  ];

  const technologies = ["Python", "TensorFlow", "Spark", "Pandas", "Tableau", "BigQuery", "Snowflake"];

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.1;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.1 },
        },
      };
    },
  };

  return (
    <Box id="data-science" sx={{ py: { xs: 10, md: 20 }, bgcolor: "#ffffff", position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        07
      </Typography>

      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(234, 179, 8, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left Column Visual - Animated Dashboard */}
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
               {/* Main Dashboard Card */}
               <Box
                 component={motion.div}
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 sx={{
                   width: "100%",
                   maxWidth: "480px",
                   p: 4,
                   background: "#ffffff",
                   backdropFilter: "blur(20px)",
                   borderRadius: "40px",
                   border: "1px solid #e2e8f0",
                   boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.1)",
                 }}
               >
                  <Stack spacing={4}>
                     <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography sx={{ color: "white", fontWeight: 700, fontSize: "18px" }}>Analytics Insights</Typography>
                        <Box sx={{ display: "flex", gap:1 }}>
                           <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#7c3aed" }} />
                           <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#06b6d4" }} />
                        </Box>
                     </Stack>

                     {/* Line Chart Draw */}
                     <Box sx={{ height: 120, position: "relative" }}>
                        <svg width="100%" height="100%" viewBox="0 0 400 120">
                           <motion.path
                              d="M 0,100 Q 50,20 100,80 T 200,40 T 300,90 T 400,30"
                              fill="none"
                              stroke="#7c3aed"
                              strokeWidth="3"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                              viewport={{ once: true }}
                           />
                           <motion.path
                              d="M 0,110 Q 50,60 100,100 T 200,80 T 300,110 T 400,60"
                              fill="none"
                              stroke="#06b6d4"
                              strokeWidth="3"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                              viewport={{ once: true }}
                           />
                        </svg>
                     </Box>

                     {/* Stat Boxes */}
                     <Grid container spacing={2}>
                        {[
                          { label: "Records", val: "2.4M", color: "#3b82f6" },
                          { label: "Accuracy", val: "98.7%", color: "#10b981" },
                          { label: "Latency", val: "0.3s", color: "#f59e0b" }
                        ].map((stat, i) => (
                           <Grid item xs={4} key={i}>
                              <Box sx={{ p: 2, borderRadius: 2, bgcolor: "rgba(255,255,255,0.02)", textAlign: "center", border: "1px solid rgba(255,255,255,0.05)" }}>
                                 <Typography sx={{ color: stat.color, fontWeight: 800, fontSize: "16px" }}>{stat.val}</Typography>
                                 <Typography sx={{ color: "#94a3b8", fontSize: "10px", textTransform: "uppercase" }}>{stat.label}</Typography>
                              </Box>
                           </Grid>
                        ))}
                     </Grid>

                      <Stack spacing={1.5}>
                         {[
                           { label: "Data Quality", val: 85, color: "#7c3aed" },
                           { label: "Model Fitness", val: 92, color: "#06b6d4" }
                         ].map((bar, i) => (
                           <Box key={i}>
                              <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                                 <Typography sx={{ color: "#64748b", fontSize: "13px", fontWeight: 500 }}>{bar.label}</Typography>
                                 <Typography sx={{ color: "#0f172a", fontSize: "13px", fontWeight: 800 }}>{bar.val}%</Typography>
                              </Stack>
                              <Box sx={{ height: 8, bgcolor: "#f1f5f9", borderRadius: 4, overflow: "hidden" }}>
                                 <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${bar.val}%` }}
                                    transition={{ duration: 1.5, delay: 0.8 + i * 0.2 }}
                                    style={{ height: "100%", background: bar.color }}
                                    viewport={{ once: true }}
                                 />
                              </Box>
                           </Box>
                         ))}
                      </Stack>
                  </Stack>

                  {/* Floating Microicons around */}
                  <Box component={motion.div} animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} sx={{ position: "absolute", top: -20, left: -40, p: 2, bgcolor: "rgba(124, 58, 237, 0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 3, display: "flex", alignItems: "center", gap: 1.5 }}>
                     <Brain size={18} color="#7c3aed" />
                     <Typography sx={{ color: "white", fontSize: "12px", fontWeight: 700 }}>ML Models</Typography>
                  </Box>
                  
                  <Box component={motion.div} animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity }} sx={{ position: "absolute", bottom: 20, right: -30, p: 2, bgcolor: "rgba(6, 182, 212, 0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: 3, display: "flex", alignItems: "center", gap: 1.5 }}>
                     <Cpu size={18} color="#06b6d4" />
                     <Typography sx={{ color: "white", fontSize: "12px", fontWeight: 700 }}>Real-time ETL</Typography>
                  </Box>
               </Box>
            </Box>
          </Grid>

          {/* Right Column Content */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#7c3aed",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    DATA SCIENCE
                  </Typography>
                  <Typography
                    component="a"
                    href="/data-analytics"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#7c3aed",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" }
                    }}
                  >
                    View All <LucideArrowRight size={14} />
                  </Typography>
                </Box>
              <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "44px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "white", lineHeight: 1.2 }}>
                Turn Raw Data Into <br />
                <Box component="span" sx={{ color: "#7c3aed" }}>Strategic Decisions</Box>
              </Typography>
              <Typography sx={{ color: "#94a3b8", fontSize: "17px", lineHeight: 1.8 }}>
                We help organizations leverage their data using advanced analytics and machine learning to uncover patterns, predict outcomes, and automate decision-making.
              </Typography>
              
              <Grid container spacing={2}>
                {features.map((feature, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box component="svg" viewBox="0 0 24 24" sx={{ width: 22, height: 22 }}>
                        <motion.path
                          d="M20 6L9 17L4 12"
                          fill="transparent"
                          strokeWidth="3"
                          stroke="#7c3aed"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          variants={draw}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </Box>
                      <Typography sx={{ color: "#1e293b", fontSize: "15px", fontWeight: 600 }}>{feature}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ pt: 4 }}>
                {technologies.map((tech, i) => (
                  <Box key={i} sx={{ px: 2, py: 0.8, borderRadius: "10px", background: "white", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "13px", fontWeight: 700, boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                    {tech}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DataScience;

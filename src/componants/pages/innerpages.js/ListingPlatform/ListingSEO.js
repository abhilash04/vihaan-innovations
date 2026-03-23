import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ListingSEO = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 8 }}>
      <Container maxWidth="lg">

        {/* SEO & Growth Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            SEO & Growth
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Rising traffic and ratios on search results in rich snippets.
          </Typography>
        </Box>

        {/* Two Mockup Panels */}
        <Grid container spacing={6} alignItems="center">

          {/* Left: Analytics Chart mockup */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper elevation={0} sx={{ p: 4, bgcolor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>

                {/* Chart Title Mock */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                  <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "14px" }}>Rising traffic</Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {["1D", "7D", "1M", "3M"].map((label) => (
                      <Box key={label} sx={{ fontSize: "11px", color: "#94a3b8", fontWeight: 600, cursor: "pointer" }}>{label}</Box>
                    ))}
                  </Box>
                </Box>

                {/* Fake SVG Chart */}
                <Box sx={{ height: "180px", position: "relative", display: "flex", alignItems: "flex-end" }}>
                  <svg width="100%" height="100%" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="trafficGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0 130 L50 110 L100 120 L150 90 L200 80 L250 60 L300 40 L350 20 L400 10 L400 150 L0 150 Z" fill="url(#trafficGrad)" />
                    <motion.path
                      d="M0 130 L50 110 L100 120 L150 90 L200 80 L250 60 L300 40 L350 20 L400 10"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                    {/* Data points */}
                    {[
                      [50, 110], [150, 90], [250, 60], [350, 20]
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="5" fill="#22c55e" />
                    ))}
                  </svg>
                  <TrendingUpIcon sx={{ position: "absolute", top: 0, right: 0, color: "#22c55e", fontSize: 32 }} />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <Typography key={m} sx={{ fontSize: "11px", color: "#94a3b8", fontWeight: 600 }}>{m}</Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right: Google SERP Mockup */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper elevation={0} sx={{ p: 4, bgcolor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>

                {/* Browser top bar */}
                <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ef4444" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#f59e0b" }} />
                  <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#22c55e" }} />
                </Box>

                {/* SERP Results Mock */}
                {[1, 2, 3].map((result) => (
                  <Box key={result} sx={{ mb: 4 }}>
                    <Typography sx={{ color: "#94a3b8", fontSize: "11px", mb: 0.5 }}>https://yourlisting.com › category-{result}</Typography>
                    <Box sx={{ width: `${70 + (result * 5)}%`, height: "15px", bgcolor: "#3b82f6", borderRadius: "4px", mb: 1, opacity: 1 - (result * 0.15) }} />
                    <Box sx={{ width: "90%", height: "10px", bgcolor: "#e2e8f0", borderRadius: "4px", mb: 0.5 }} />
                    <Box sx={{ width: "70%", height: "10px", bgcolor: "#e2e8f0", borderRadius: "4px" }} />
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default ListingSEO;

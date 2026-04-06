import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Layout, Image, Send, PieChart } from "lucide-react";

const ContentMarketing = () => {
  const categories = [
    { title: "Long-form Blogs", desc: "In-depth articles that build trust and rank on Google." },
    { title: "Visual Assets", desc: "Infographics and graphics that grab attention fast." },
    { title: "Lead Magnets", desc: "E-books and whitepapers that capture quality leads." }
  ];

  return (
    <Box
      id="content-marketing"
      sx={{
        py: { xs: 10, md: 20 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f8fafc",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "5%",
          right: "2%",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          lineHeight: 1,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        04
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "500px",
              }}
            >
              {/* Content Strategy Visualization: Content Grid */}
              <Grid container spacing={2} sx={{ maxWidth: "500px" }}>
                {[1, 2, 3, 4].map((i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      sx={{
                        p: 3,
                        bgcolor: "white",
                        borderRadius: "24px",
                        border: "1px solid #f1f5f9",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                      }}
                    >
                      <Box sx={{ p: 1.5, bgcolor: i % 2 === 0 ? "rgba(37, 99, 235, 0.1)" : "rgba(245, 158, 11, 0.1)", borderRadius: "12px", width: "fit-content" }}>
                        {i === 1 ? <FileText size={24} color="#2563eb" /> : i === 2 ? <Image size={24} color="#f59e0b" /> : i === 3 ? <Layout size={24} color="#2563eb" /> : <PieChart size={24} color="#f59e0b" />}
                      </Box>
                      <Box>
                        <Box sx={{ height: "10px", width: "80%", bgcolor: "#f8fafc", mb: 1, borderRadius: 1 }} />
                        <Box sx={{ height: "10px", width: "50%", bgcolor: "#f8fafc", borderRadius: 1 }} />
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Stack spacing={4}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#7c3aed",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    CONTENT MARKETING
                  </Typography>
                  <Typography
                    component="a"
                    href="/content-marketing"
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
                  Content That Converts. <br />
                  <Box component="span" sx={{ color: "#7c3aed" }}>
                    Value That Lasts.
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
                Great content does more than fill a page — it earns trust, answers real questions, and positions your brand as the go-to authority in your industry.
              </Typography>

              <Stack spacing={3}>
                {categories.map((cat, i) => (
                  <Box
                    key={i}
                    sx={{
                      p: 2.5,
                      bgcolor: "white",
                      borderRadius: "16px",
                      border: "1px solid #f1f5f9",
                      "&:hover": { borderColor: "#cbd5e1", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" },
                      transition: "all 0.3s ease"
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, color: "#0f172a", mb: 0.5 }}>{cat.title}</Typography>
                    <Typography sx={{ fontSize: "14px", color: "#64748b" }}>{cat.desc}</Typography>
                  </Box>
                ))}
              </Stack>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#7c3aed",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                  }}
                >
                  View Content Portfolio <ArrowRight size={20} />
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentMarketing;

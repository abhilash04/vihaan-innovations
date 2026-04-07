import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Check, ArrowRight, Search, Globe, Link as LinkIcon, BarChart } from "lucide-react";

const SEO = () => {
  const features = [
    "Full Technical SEO Audits",
    "On-Page Content Strategy",
    "High-Authority Link Building",
    "Local SEO & Google Business Profile",
    "Keyword Research & Mapping",
    "Competitor Gap Analysis",
  ];

  const tools = ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Moz"];

  return (
    <Box
      id="seo"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ffffff",
      }}
    >


      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 2 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#2563eb",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    SEARCH ENGINE OPTIMIZATION
                  </Typography>
                  <Typography
                    component="a"
                    href="/seo-services"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#2563eb",
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
                  Rank First. <br />
                  <Box component="span" sx={{ color: "#2563eb" }}>
                    Stay There.
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
                Organic traffic is the most reliable channel for long-term growth. We bring together technical precision and strategic content to earn you top rankings that actually bring in revenue.
              </Typography>

              <Grid container spacing={2.5}>
                {features.map((feature, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ p: 0.5, bgcolor: "rgba(37, 99, 235, 0.1)", borderRadius: "6px" }}>
                        <Check size={16} color="#2563eb" strokeWidth={3} />
                      </Box>
                      <Typography sx={{ color: "#1e293b", fontSize: "15px", fontWeight: 600 }}>
                        {feature}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ pt: 2 }}>
                {tools.map((tool, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: "12px",
                      background: "#f8fafc",
                      border: "1px solid rgba(15, 23, 42, 0.08)",
                      color: "#475569",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    {tool}
                  </Box>
                ))}
              </Stack>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#2563eb",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                    transition: "all 0.3s ease",
                  }}
                >
                  Audit Your Website <ArrowRight size={20} />
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
              {/* SEO Visualization: Search Results Mockup */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  bgcolor: "white",
                  borderRadius: "24px",
                  boxShadow: "0 50px 100px -20px rgba(15, 23, 42, 0.12)",
                  border: "1px solid #f1f5f9",
                  overflow: "hidden"
                }}
              >
                <Box sx={{ px: 3, py: 2, bgcolor: "#f8fafc", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 2 }}>
                  <Search size={18} color="#64748b" />
                  <Typography sx={{ color: "#0f172a", fontWeight: 700, fontSize: "14px" }}>"best enterprise software development company"</Typography>
                </Box>

                <Stack spacing={4} sx={{ p: 4 }}>
                  {[1, 2, 3].map((i) => (
                    <Box
                      key={i}
                      component={motion.div}
                      animate={i === 1 ? { scale: [1, 1.02, 1], borderColor: ["#f1f5f9", "#2563eb", "#f1f5f9"] } : {}}
                      transition={{ duration: 3, repeat: Infinity }}
                      sx={{
                        p: 2.5,
                        borderRadius: "16px",
                        border: i === 1 ? "2px solid #2563eb" : "1px solid #f1f5f9",
                        position: "relative",
                        bgcolor: i === 1 ? "rgba(37, 99, 235, 0.02)" : "transparent"
                      }}
                    >
                      {i === 1 && (
                        <Box sx={{ position: "absolute", top: -12, right: 20, bgcolor: "#2563eb", color: "white", px: 1.5, py: 0.5, borderRadius: "100px", fontSize: "10px", fontWeight: 900 }}>RANK #1</Box>
                      )}
                      <Typography sx={{ color: i === 1 ? "#2563eb" : "#4338ca", fontWeight: 700, fontSize: "16px", mb: 0.5 }}>
                        {i === 1 ? "Vihaan Innovations | Leading Software & Marketing Partner" : `Competitor Brand ${i} - Services & Solutions`}
                      </Typography>
                      <Typography sx={{ color: "#16a34a", fontSize: "12px", mb: 1 }}>https://www.vihaaninnovations.com › services</Typography>
                      <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.5 }}>
                        Expert end-to-end software development and digital marketing services to scale your business. Ranked as top agency in 2024.
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Floating Stats */}
              <Box
                component={motion.div}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "-10%",
                  bgcolor: "white",
                  p: 2,
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  border: "1px solid #f1f5f9",
                  zIndex: 2
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, bgcolor: "rgba(37, 99, 235, 0.1)", borderRadius: "10px" }}>
                    <BarChart size={20} color="#2563eb" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "10px", fontWeight: 800, color: "#64748b" }}>DOMAIN AUTHORITY</Typography>
                    <Typography sx={{ fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>82/100</Typography>
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

export default SEO;

import React from "react";
import { Box, Container, Typography, Grid, Stack, Button, Avatar, AvatarGroup } from "@mui/material";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, ArrowRight, Share2 } from "lucide-react";

const SMM = () => {
  const socialCards = [
    { platform: "Instagram", color: "#e4405f", likes: "12K", comments: "840" },
    { platform: "LinkedIn", color: "#0077b5", likes: "8.5K", comments: "320" },
  ];

  return (
    <Box
      id="smm"
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
        03
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
                      color: "#06b6d4",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    SOCIAL MEDIA MARKETING
                  </Typography>
                  <Typography
                    component="a"
                    href="/social-media-marketing"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#06b6d4",
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
                  Build Community. <br />
                  <Box component="span" sx={{ color: "#06b6d4" }}>
                    Drive Action.
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
                Social platforms are where your audience already spends their time. We craft scroll-stopping content and build engaged communities that turn followers into paying customers.
              </Typography>

              <Stack direction="row" spacing={4}>
                 <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: "#0f172a", fontFamily: "'Syne', sans-serif" }}>95%</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "14px", fontWeight: 600 }}>Engagement Rate Boost</Typography>
                 </Box>
                 <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: "#06b6d4", fontFamily: "'Syne', sans-serif" }}>24/7</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "14px", fontWeight: 600 }}>Community Monitoring</Typography>
                 </Box>
              </Stack>

              <Box sx={{ pt: 2 }}>
                <Button
                  sx={{
                    color: "#06b6d4",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: "17px",
                    p: 0,
                    gap: 1.5,
                    "&:hover": { bgcolor: "transparent", gap: 2 },
                    transition: "all 0.3s ease",
                  }}
                >
                  Grow Your Social Presence <ArrowRight size={20} />
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
                minHeight: "550px",
              }}
            >
               {/* SMM Visualization: Floating Social Cards */}
               <Stack spacing={-15} sx={{ position: "relative" }}>
                  {socialCards.map((card, i) => (
                    <Box
                      key={i}
                      component={motion.div}
                      initial={{ opacity: 0, x: i === 0 ? -50 : 50, rotate: i === 0 ? -5 : 5 }}
                      whileInView={{ opacity: 1, x: 0, rotate: i === 0 ? -8 : 8 }}
                      animate={{ y: i === 0 ? [-10, 10, -10] : [10, -10, 10] }}
                      transition={{ 
                        whileInView: { duration: 0.8, delay: i * 0.2 },
                        animate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                      }}
                      viewport={{ once: true }}
                      sx={{
                        width: "320px",
                        bgcolor: "white",
                        borderRadius: "24px",
                        boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.15)",
                        border: "1px solid #f1f5f9",
                        overflow: "hidden",
                        zIndex: 2 - i
                      }}
                    >
                       <Box sx={{ p: 2, borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Stack direction="row" spacing={1.5} alignItems="center">
                             <Avatar sx={{ width: 32, height: 32, bgcolor: card.color, fontSize: "12px", fontWeight: 800 }}>{card.platform[0]}</Avatar>
                             <Typography sx={{ fontSize: "14px", fontWeight: 800, color: "#0f172a" }}>{card.platform}</Typography>
                          </Stack>
                          <Share2 size={16} color="#64748b" />
                       </Box>
                       
                       <Box sx={{ height: "200px", background: `linear-gradient(135deg, ${card.color}22 0%, ${card.color}44 100%)`, position: "relative" }}>
                          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                             <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                <Heart size={48} color={card.color} fill={card.color} opacity={0.6} />
                             </motion.div>
                          </Box>
                       </Box>

                       <Box sx={{ p: 2.5 }}>
                          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                             <Heart size={20} color="#0f172a" />
                             <MessageCircle size={20} color="#0f172a" />
                             <Send size={20} color="#0f172a" />
                             <Box sx={{ flex: 1 }} />
                             <Bookmark size={20} color="#0f172a" />
                          </Stack>
                          <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", mb: 0.5 }}>{card.likes} likes</Typography>
                          <Typography sx={{ fontSize: "13px", color: "#64748b" }}>View all {card.comments} comments</Typography>
                       </Box>
                    </Box>
                  ))}
               </Stack>
               
               {/* Floating Icon Orbs */}
               <Box
                 component={motion.div}
                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 sx={{
                   position: "absolute",
                   top: "10%",
                   right: "5%",
                   width: "80px",
                   height: "80px",
                   borderRadius: "50%",
                   bgcolor: "rgba(6, 182, 212, 0.1)",
                   zIndex: 1
                 }}
               />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SMM;

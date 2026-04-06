import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Layout, CreditCard, Box as BoxIcon, TrendingUp, Smartphone, UserCheck, CheckCircle, MousePointer2, ArrowRight } from "lucide-react";

const EcommerceDevelopment = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate cursor clicking "Add to Cart"
      setTimeout(() => {
        setIsAdded(true);
        setCartCount(prev => prev + 1);
        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
      }, 3000);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { title: "Custom Cart & Checkout", icon: ShoppingCart, desc: "Frictionless checkout experiences." },
    { title: "Multi-vendor Marketplace", icon: Layout, desc: "Scale with hundreds of sellers." },
    { title: "Payment Integration", icon: CreditCard, desc: "Secure and diverse payment options." },
    { title: "Inventory Management", icon: BoxIcon, desc: "Real-time stock tracking and alerts." },
    { title: "Recommendation Engine", icon: TrendingUp, desc: "AI-driven product suggestions." },
    { title: "Mobile Commerce", icon: Smartphone, desc: "Optimised for mobile shopping." },
  ];

  return (
    <Box id="ecommerce" sx={{ py: { xs: 10, md: 20 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: "120px", md: "250px" },
          fontWeight: 900,
          color: "rgba(15, 23, 42, 0.03)",
          fontFamily: "'Syne', sans-serif",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        08
      </Typography>

      <Box
        sx={{
          position: "absolute",
          bottom: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 12 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%", position: "relative", mb: 2 }}>
            <Typography
              sx={{
                color: "#06b6d4",
                fontWeight: 800,
                letterSpacing: "0.2em",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              ECOMMERCE
            </Typography>
            <Typography
              component="a"
              href="/ecommerce-development"
              sx={{
                position: "absolute",
                right: 0,
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
          <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#0f172a", lineHeight: 1.1 }}>
            Ecommerce Platforms That <br />
            <Box component="span" sx={{ color: "#06b6d4" }}>Convert Browsers Into Buyers</Box>
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "700px", fontSize: { xs: "16px", md: "20px" }, lineHeight: 1.7, fontWeight: 500 }}>
            We build scalable, high-performance ecommerce solutions that provide exceptional shopping experiences and drive conversions.
          </Typography>
        </Stack>

        {/* Central Ecommerce Mockup */}
        <Box
          component={motion.div}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          sx={{
            width: "100%",
            maxWidth: "1000px",
            mx: "auto",
            mb: 12,
            bgcolor: "#ffffff",
            borderRadius: "32px 32px 0 0",
            border: "1px solid #e2e8f0",
            borderBottom: "none",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 40px 100px -20px rgba(15, 23, 42, 0.1)",
          }}
        >
          {/* Header */}
          <Box sx={{ height: "70px", bgcolor: "#f8fafc", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", px: 4, justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1.5}>
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f56" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#27c93f" }} />
            </Stack>
            <Box sx={{ position: "relative", p: 1.5, bgcolor: "white", borderRadius: "50%", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ShoppingCart size={22} color="#0f172a" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <Box
                    component={motion.div}
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    sx={{
                      position: "absolute",
                      top: -5,
                      right: -5,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      bgcolor: "#ef4444",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "white",
                      boxShadow: "0 2px 5px rgba(239, 68, 68, 0.4)"
                    }}
                  >
                    {cartCount}
                  </Box>
                )}
              </AnimatePresence>
            </Box>
          </Box>

          {/* Page Content */}
          <Box sx={{ p: 5, height: "500px", bgcolor: "#ffffff" }}>
            <Stack spacing={5}>
              <Box sx={{ height: 180, width: "100%", background: "linear-gradient(135deg, #f8fafc 0%, #06b6d408 100%)", borderRadius: 6, display: "flex", alignItems: "center", px: 8, border: "1px solid #f1f5f9" }}>
                <Box sx={{ maxWidth: "55%" }}>
                  <Box sx={{ width: "85%", height: 32, bgcolor: "#e2e8f0", borderRadius: 1.5, mb: 2 }} />
                  <Box sx={{ width: "65%", height: 18, bgcolor: "#f1f5f9", borderRadius: 1.5 }} />
                </Box>
              </Box>

              <Grid container spacing={4}>
                {[1, 2, 3].map((n) => (
                  <Grid item xs={4} key={n}>
                    <Box sx={{ p: 3, borderRadius: 4, bgcolor: "#ffffff", border: "1px solid #f1f5f9", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                      <Box sx={{ height: 120, width: "100%", bgcolor: "#f8fafc", borderRadius: 3, mb: 2.5, border: "1px solid #f1f5f9" }} />
                      <Box sx={{ width: "75%", height: 14, bgcolor: "#e2e8f0", borderRadius: 1.5, mb: 2 }} />
                      {n === 1 ? (
                        <Button
                          id="add-to-cart-btn"
                          fullWidth
                          sx={{
                            height: 38,
                            bgcolor: isAdded ? "#10b981" : "#0f172a",
                            color: "white",
                            borderRadius: 2,
                            fontSize: "12px",
                            fontWeight: 800,
                            textTransform: "none",
                            transition: "all 0.3s ease",
                            "&:hover": { bgcolor: isAdded ? "#059669" : "#1e293b" }
                          }}
                        >
                          {isAdded ? "Added! ✓" : "Add to Cart"}
                        </Button>
                      ) : (
                        <Box sx={{ width: "45%", height: 12, bgcolor: "#f1f5f9", borderRadius: 1.5 }} />
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>

            {/* Animated Cursor */}
            <Box
              component={motion.div}
              animate={{
                x: [100, 180, 180, 100],
                y: [100, 380, 380, 100],
                scale: [1, 0.9, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.45, 0.55, 1], ease: "easeInOut" }}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                color: "#0f172a",
                zIndex: 10,
              }}
            >
              <MousePointer2 size={28} fill="currentColor" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }} />
            </Box>

            {/* Success Toast */}
            <AnimatePresence>
              {isAdded && (
                <Box
                  component={motion.div}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: -30, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  sx={{
                    position: "absolute",
                    bottom: 50,
                    right: 20,
                    p: 2.5,
                    background: "#10b981",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "0 15px 30px rgba(16, 185, 129, 0.25)",
                    zIndex: 20,
                  }}
                >
                  <CheckCircle size={20} color="white" />
                  <Typography sx={{ color: "white", fontSize: "14px", fontWeight: 800 }}>Item Added to Cart!</Typography>
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </Box>

        {/* Feature Grid */}
        <Grid container spacing={4}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                sx={{
                  p: 5,
                  height: "65%",
                  background: "#ffffff",
                  borderRadius: "32px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  "&:hover": {
                    borderColor: "#06b6d4",
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "18px",
                    bgcolor: "rgba(6, 182, 212, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    color: "#06b6d4",
                  }}
                >
                  <feature.icon size={28} />
                </Box>
                <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 800, fontSize: "18px", mb: 1.5 }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "15px", lineHeight: 1.7, fontWeight: 500 }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EcommerceDevelopment;

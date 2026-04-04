import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, Button, Switch, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const SectionWrapper = styled(Box)({
  paddingTop: "100px",
  paddingBottom: "100px",
  backgroundColor: "#ffffff",
  borderTop: "1px solid #f1f5f9",
});

const PricingCard = styled(motion.div)(({ theme, isfeatured }) => ({
  padding: "54px 36px",
  borderRadius: "32px",
  backgroundColor: "#ffffff",
  border: isfeatured === "true" ? "2px solid #2563eb" : "1px solid #e2e8f0",
  boxShadow: isfeatured === "true" ? "0 20px 60px rgba(37, 99, 235, 0.1)" : "none",
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
}));

const FeatureItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  marginBottom: "20px",
});

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 54,
  height: 28,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 3,
    "&.Mui-checked": {
      transform: "translateX(26px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#2563eb",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 22,
    height: 22,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  "& .MuiSwitch-track": {
    borderRadius: 28 / 2,
    backgroundColor: "#e2e8f0",
    opacity: 1,
  },
}));

const ExplorePricing = ({ data }) => {
  const [isQuarterly, setIsQuarterly] = useState(false);
  
  if (!data) return null;

  const {
    subtitle = "Pricing",
    title = "Transparent SEO Packages.",
    plans = []
  } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mb: 10 }}
        >
          <Typography sx={{ color: "#2563eb", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", mb: 1.5, fontFamily: "Inter, sans-serif" }}>
            {subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 5, fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px", fontSize: { xs: "32px", md: "48px" } }}>
            {title}
          </Typography>

          <Stack 
            direction="row" 
            spacing={3} 
            alignItems="center" 
            justifyContent="center"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{ 
              bgcolor: "rgba(37, 99, 235, 0.03)", 
              width: "fit-content", 
              mx: "auto", 
              px: 4, 
              py: 2, 
              borderRadius: "100px",
              border: "1px solid rgba(37, 99, 235, 0.1)"
            }}
          >
            <Typography sx={{ fontWeight: 800, color: !isQuarterly ? "#0f172a" : "#64748b", transition: "0.3s", fontSize: "15px" }}>Monthly</Typography>
            <CustomSwitch checked={isQuarterly} onChange={() => setIsQuarterly(!isQuarterly)} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
               <Typography sx={{ fontWeight: 800, color: isQuarterly ? "#0f172a" : "#64748b", transition: "0.3s", fontSize: "15px" }}>Quarterly</Typography>
               <motion.div
                 animate={{ scale: isQuarterly ? [1, 1.1, 1] : 1 }}
                 transition={{ repeat: isQuarterly ? Infinity : 0, duration: 2 }}
               >
                 <Typography sx={{ bgcolor: "#dcfce7", color: "#166534", px: 2, py: 0.5, borderRadius: "100px", fontSize: "12px", fontWeight: 900, letterSpacing: "0.5px" }}>SAVE 10%</Typography>
               </motion.div>
            </Box>
          </Stack>
        </Box>

        <Grid 
          container 
          spacing={4} 
          alignItems="stretch"
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan, i) => (
            <Grid item xs={12} md={4} key={i}>
              <PricingCard 
                isfeatured={plan.isPopular ? "true" : "false"}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(37, 99, 235, 0.12)" }}
              >
                {plan.isPopular && (
                  <Box sx={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", bgcolor: "#2563eb", color: "white", px: 3, py: 1, borderRadius: "100px", fontSize: "13px", fontWeight: 900, boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)", letterSpacing: "1px" }}>
                    MOST POPULAR
                  </Box>
                )}
                <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", mb: 3, fontFamily: "Urbanist, sans-serif", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
                  {plan.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography component="span" variant="h3" sx={{ fontWeight: 900, color: "#0f172a", fontFamily: "Urbanist, sans-serif", fontSize: "48px", letterSpacing: "-2px" }}>
                    ₹{plan.price}
                  </Typography>
                  <Typography component="span" sx={{ fontSize: "18px", color: "#64748b", fontWeight: 800 }}>/{plan.period}</Typography>
                </Box>
                <Typography sx={{ color: "#64748b", fontSize: "15px", mb: 6, fontWeight: 500, lineHeight: 1.6 }}>
                  {plan.tagline}
                </Typography>

                <Box sx={{ flexGrow: 1, mb: 6 }}>
                  {plan.features.map((included, j) => (
                    <Box key={j} sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                       {included ? 
                        <Box sx={{ width: "28px", height: "28px", borderRadius: "50%", bgcolor: "rgba(37, 99, 235, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <CheckIcon sx={{ color: "#2563eb", fontSize: "18px" }} />
                        </Box> : 
                        <CloseIcon sx={{ color: "#e2e8f0", fontSize: "20px" }} />
                       }
                    </Box>
                  ))}
                </Box>

                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    borderColor: plan.isPopular ? "transparent" : "#2563eb", 
                    bgcolor: plan.isPopular ? "#2563eb" : "transparent",
                    color: plan.isPopular ? "white" : "#2563eb",
                    fontWeight: 900,
                    textTransform: "none",
                    py: 2.2,
                    borderRadius: "16px",
                    fontSize: "17px",
                    borderWidth: "2.5px",
                    fontFamily: "Urbanist, sans-serif",
                    "&:hover": {
                      bgcolor: plan.isPopular ? "#1d4ed8" : "rgba(37, 99, 235, 0.05)",
                      borderColor: plan.isPopular ? "transparent" : "#1d4ed8",
                      borderWidth: "2.5px",
                      transform: "translateY(-2px)"
                    }
                  }}
                >
                  {plan.ctaText}
                </Button>
              </PricingCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ExplorePricing;

import React from "react";
import { Box, Typography, Container, Grid, Paper, TextField, Button, MenuItem } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const FormCard = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "24px",
  padding: "40px",
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" },
  "& .MuiOutlinedInput-root": {
    color: "#ffffff",
    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
    "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
    "&.Mui-focused fieldset": { borderColor: "#06b6d4" },
    background: "rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
  },
}));

const CTASection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0a1628",
        py: { xs: 10, md: 14 },
        position: "relative",
        background: "linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Orbs */}
      <Box sx={{ position: "absolute", top: "-10%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 60%)", filter: "blur(50px)", zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: "-10%", left: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 60%)", filter: "blur(50px)", zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Column - Text */}
          <Grid item xs={12} md={5}>
            <Typography sx={{ color: "#06b6d4", fontWeight: 600, fontSize: "12px", letterSpacing: "1.5px", mb: 1.5 }}>
              GET STARTED TODAY
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "46px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", mb: 3, lineHeight: 1.1 }}>
              Ready to Transform Your Business With Technology?
            </Typography>
            <Typography sx={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, mb: 4 }}>
              Drop your details below and our solution architects will formulate a custom strategy breakdown for your enterprise scaling securely.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
              {["Free Consultation", "No Commitment", "Response in 24hrs"].map((text, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.5, px: 2, py: 0.8, bgcolor: "rgba(6, 182, 212, 0.08)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: "50px" }}>
                  <CheckCircleIcon sx={{ fontSize: 14, color: "#06b6d4" }} />
                  <Typography sx={{ color: "#ffffff", fontSize: "12px", fontWeight: 600 }}>{text}</Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {/* Avatar stack mockup */}
              <Box sx={{ display: "flex", overflow: "hidden", "& > *": { border: "2px solid #0a1628", marginLeft: "-8px", "&:first-of-type": { marginLeft: 0 } } }}>
                {[1, 2, 3].map((_, i) => (
                  <Box key={i} sx={{ width: 32, height: 32, borderRadius: "50%", bgcolor: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "12px" }}>
                    U
                  </Box>
                ))}
              </Box>
              <Typography sx={{ color: "#94a3b8", fontSize: "13px" }}>
                Join 150+ growing businesses scaling with Vihaan
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - Form */}
          <Grid item xs={12} md={7}>
            <FormCard>
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <StyledTextField fullWidth label="Your Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField fullWidth label="Work Email" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField fullWidth label="Phone Number" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StyledTextField fullWidth select label="Service of Interest" defaultValue="" variant="outlined">
                    <MenuItem value="web">Web Development</MenuItem>
                    <MenuItem value="mobile">Mobile Apps</MenuItem>
                    <MenuItem value="marketing">Digital Marketing</MenuItem>
                    <MenuItem value="software">Enterprise Software</MenuItem>
                  </StyledTextField>
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField fullWidth multiline rows={4} label="Brief Description of Your Project" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                      color: "#ffffff",
                      fontWeight: 700,
                      py: 1.8,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontSize: "16px",
                      boxShadow: "0 12px 32px rgba(37, 99, 235, 0.2)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        animation: `${shimmer} 4s infinite`,
                      },
                      "&:hover": { transform: "translateY(-2px)", boxShadow: "0 15px 40px rgba(37, 99, 235, 0.3)" },
                    }}
                  >
                    Send My Request →
                  </Button>
                </Grid>
              </Grid>
              <Typography sx={{ color: "#94a3b8", fontSize: "11px", textAlign: "center", mt: 2 }}>
                🔒 Your information is 100% secure and never shared.
              </Typography>
            </FormCard>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default CTASection;

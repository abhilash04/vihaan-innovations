import React from "react";
import { Box, Typography, Container, Grid, Link, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterLink = styled(Link)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.7)",
  textDecoration: "none",
  fontSize: "14px",
  fontFamily: "Inter, sans-serif",
  transition: "all 0.2s ease",
  display: "block",
  marginBottom: "12px",
  "&:hover": {
    color: "#ffffff",
    transform: "translateX(4px)",
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.6)",
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.08)",
    color: "#ffffff",
    borderColor: "#06b6d4",
    transform: "translateY(-3px)",
  },
}));

const ServiceFooter = () => {
  return (
    <Box sx={{ bgcolor: "#060f1e", pt: 10, pb: 4, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Column 1 - Brand */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#ffffff", fontFamily: "Urbanist, sans-serif" }}>
                Vihaan
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#06b6d4", ml: 0.5, fontFamily: "Urbanist, sans-serif" }}>
                Innovations
              </Typography>
            </Box>
            <Typography sx={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, mb: 3 }}>
              Formulating robust digital architectures for absolute enterprise scaling workflows securely.
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <SocialButton><FacebookIcon sx={{ fontSize: 20 }} /></SocialButton>
              <SocialButton><TwitterIcon sx={{ fontSize: 20 }} /></SocialButton>
              <SocialButton><LinkedInIcon sx={{ fontSize: 20 }} /></SocialButton>
              <SocialButton><InstagramIcon sx={{ fontSize: 20 }} /></SocialButton>
            </Box>
          </Grid>

          {/* Column 2 - Services */}
          <Grid item xs={6} md={2}>
            <Typography sx={{ color: "#06b6d4", fontWeight: 700, fontSize: "14px", mb: 3, textTransform: "uppercase" }}>
              Services
            </Typography>
            <FooterLink href="#">Web Development</FooterLink>
            <FooterLink href="#">Mobile Apps</FooterLink>
            <FooterLink href="#">SEO Strategy</FooterLink>
            <FooterLink href="#">Video Animation</FooterLink>
          </Grid>

          {/* Column 3 - Company */}
          <Grid item xs={6} md={2}>
            <Typography sx={{ color: "#06b6d4", fontWeight: 700, fontSize: "14px", mb: 3, textTransform: "uppercase" }}>
              Company
            </Typography>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Portfolio</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </Grid>

          {/* Column 4 - Contact */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ color: "#06b6d4", fontWeight: 700, fontSize: "14px", mb: 3, textTransform: "uppercase" }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
               hello@vihaan.com
            </Typography>
            <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
               +91 98765 43210
            </Typography>
            <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
               Hyderabad, India
            </Typography>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.08)" }} />

        {/* Bottom Bar */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Typography sx={{ color: "#94a3b8", fontSize: "13px" }}>
            © 2026 Vihaan Innovations. All Rights Reserved.
          </Typography>
          <Typography sx={{ color: "#94a3b8", fontSize: "13px" }}>
            Made with ❤️ in India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceFooter;

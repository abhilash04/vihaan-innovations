import React from "react";
import { Box, Typography, Container, Grid, Link, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#64748b",
  textDecoration: "none",
  fontSize: "14px",
  fontFamily: "Inter, sans-serif",
  transition: "all 0.2s ease",
  display: "block",
  marginBottom: "12px",
  fontWeight: 500,
  "&:hover": {
    color: "#0087c9",
    transform: "translateX(4px)",
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "#64748b",
  background: "#ffffff",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
  "&:hover": {
    background: "#f1f5f9",
    color: "#0087c9",
    borderColor: "#0087c9",
    transform: "translateY(-3px)",
  },
}));

const ServiceFooter = () => {
  return (
    <Box sx={{ bgcolor: "#f8fafc", pt: 8, pb: 4, position: "relative", borderTop: "1px solid rgba(0,0,0,0.03)" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">

          {/* Column 1 - Brand */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#0a2233", fontFamily: "Urbanist, sans-serif" }}>
                Vihaan
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#0087c9", ml: 0.5, fontFamily: "Urbanist, sans-serif" }}>
                Innovations
              </Typography>
            </Box>
            <Typography sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6, mb: 3 }}>
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
            <Typography sx={{ color: "#0a2233", fontWeight: 800, fontSize: "13px", mb: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Services
            </Typography>
            <FooterLink href="#">Web Development</FooterLink>
            <FooterLink href="#">Mobile Apps</FooterLink>
            <FooterLink href="#">SEO Strategy</FooterLink>
            <FooterLink href="#">Video Animation</FooterLink>
          </Grid>

          {/* Column 3 - Company */}
          <Grid item xs={6} md={2}>
            <Typography sx={{ color: "#0a2233", fontWeight: 800, fontSize: "13px", mb: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Company
            </Typography>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Portfolio</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </Grid>

          {/* Column 4 - Contact */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ color: "#0a2233", fontWeight: 800, fontSize: "13px", mb: 3, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: "14px", mb: 1, display: "flex", alignItems: "center", gap: 1, fontWeight: 500 }}>
              hello@vihaan.com
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: "14px", mb: 1, display: "flex", alignItems: "center", gap: 1, fontWeight: 500 }}>
              +91 99648 48414
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: "14px", mb: 3, display: "flex", alignItems: "center", gap: 1, fontWeight: 500 }}>
              Hyderabad, India
            </Typography>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(0, 0, 0, 0.05)" }} />

        {/* Bottom Bar */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Typography sx={{ color: "#64748b", fontSize: "13px", fontWeight: 500 }}>
            © 2026 Vihaan Innovations. All Rights Reserved.
          </Typography>
          <Typography sx={{ color: "#64748b", fontSize: "13px", fontWeight: 500 }}>
            Made with ❤️ in India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceFooter;

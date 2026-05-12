import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarsIcon from "@mui/icons-material/Stars";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GppGoodIcon from "@mui/icons-material/GppGood";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const awards = [
  { title: "Top IT Company", body: "GoodFirms", year: "2024", icon: EmojiEventsIcon, color: "#2563eb" },
  { title: "High Performer", body: "G2 Crowd", year: "2024", icon: StarsIcon, color: "#06b6d4" },
  { title: "ISO 9001 Cert", body: "Quality Mgmt", year: "2025", icon: GppGoodIcon, color: "#10b981" },
  { title: "Best Workculture", body: "HR Awards", year: "2024", icon: WorkspacePremiumIcon, color: "#8b5cf6" },
  { title: "Top App Developer", body: "Clutch.co", year: "2025", icon: VerifiedIcon, color: "#f59e0b" },
];

const FlipCardInner = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "180px",
  textAlign: "center",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
}));

const CardFace = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  background: "#f8fafc",
  border: "1px solid rgba(0, 0, 0, 0.04)",
  gap: "12px",
  boxShadow: "none",
}));

const BackFace = styled(CardFace)(({ theme, bgcolor }) => ({
  transform: "rotateY(180deg)",
  background: `linear-gradient(135deg, ${bgcolor}10, #ffffff)`,
  borderColor: `${bgcolor}30`,
  boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
}));

const FlipCard = styled(Box)(({ theme }) => ({
  perspective: "1000px",
  "&:hover .flip-card-inner": {
    transform: "rotateY(180deg)",
  },
}));

const AwardsSection = ({ data }) => {
  const {
    title = "Recognized for Excellence & Quality",
    list = awards
  } = data || {};

  return (
    <Box sx={{ bgcolor: "#ffffff", py: { xs: 3, md: 6 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "40px" }, fontFamily: "Urbanist, sans-serif", color: "#0a2233", textAlign: "center", mb: 4, letterSpacing: "0.5px" }}>
          {title}
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {list.map((award, i) => {
            const SvgIcon = award.icon;
            return (
              <Grid item xs={6} sm={4} md={2.4} key={i}>
                <FlipCard>
                  <FlipCardInner className="flip-card-inner">
                    {/* Front */}
                    <CardFace elevation={0}>
                      <SvgIcon sx={{ fontSize: 40, color: award.color }} />
                      <Typography sx={{ color: "#0a2233", fontWeight: 800, fontSize: "14px", fontFamily: "Urbanist, sans-serif" }}>
                        {award.title}
                      </Typography>
                    </CardFace>
                    {/* Back */}
                    <BackFace bgcolor={award.color} elevation={0}>
                      <Typography sx={{ color: "#0a2233", fontWeight: 800, fontSize: "14px", fontFamily: "Urbanist, sans-serif" }}>
                        {award.body}
                      </Typography>
                      <Typography sx={{ color: award.color, fontSize: "12px", fontWeight: 700 }}>
                        {award.year}
                      </Typography>
                    </BackFace>
                  </FlipCardInner>
                </FlipCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AwardsSection;

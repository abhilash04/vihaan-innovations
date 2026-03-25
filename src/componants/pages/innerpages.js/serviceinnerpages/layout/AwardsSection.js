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
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  gap: "12px",
}));

const BackFace = styled(CardFace)(({ theme, bgcolor }) => ({
  transform: "rotateY(180deg)",
  background: `linear-gradient(135deg, ${bgcolor}20, rgba(255,255,255,0.02))`,
  borderColor: `${bgcolor}40`,
}));

const FlipCard = styled(Box)(({ theme }) => ({
  perspective: "1000px",
  "&:hover .flip-card-inner": {
    transform: "rotateY(180deg)",
  },
}));

const AwardsSection = () => {
  return (
    <Box sx={{ bgcolor: "#0d1f35", py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, fontSize: "24px", fontFamily: "Urbanist, sans-serif", color: "#ffffff", textAlign: "center", mb: 6, letterSpacing: "0.5px" }}>
          Recognized for Excellence & Quality
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {awards.map((award, i) => {
            const SvgIcon = award.icon;
            return (
              <Grid item xs={6} sm={4} md={2.4} key={i}>
                <FlipCard>
                  <FlipCardInner className="flip-card-inner">
                    {/* Front */}
                    <CardFace>
                      <SvgIcon sx={{ fontSize: 40, color: award.color }} />
                      <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "14px" }}>
                        {award.title}
                      </Typography>
                    </CardFace>
                    {/* Back */}
                    <BackFace bgcolor={award.color}>
                      <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "14px" }}>
                        {award.body}
                      </Typography>
                      <Typography sx={{ color: award.color, fontSize: "12px", fontWeight: 600 }}>
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

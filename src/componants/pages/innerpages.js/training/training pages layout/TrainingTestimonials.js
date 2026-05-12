import React from "react";
import { Box, Typography, Container, Avatar, Rating, useMediaQuery, useTheme } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// ── ✏️  ADD / EDIT REVIEWS HERE ────────────────────────────────────────────────
const DEFAULT_REVIEWS = [
  { name: "Priya S.",      role: "Full Stack Developer @ TCS",    rating: 5, text: "Vihaan's training gave me confidence to switch careers. The hands-on projects and placement support were exceptional!" },
  { name: "Rahul M.",      role: "UI Engineer @ Infosys",          rating: 5, text: "Best investment I made. The instructors are very approachable and the curriculum is practical and up-to-date." },
  { name: "Sneha A.",      role: "React Developer @ Startup",      rating: 5, text: "I joined as a complete beginner and landed a job within 2 months of completing the course. Highly recommend!" },
  { name: "Kiran T.",      role: "Backend Dev @ Wipro",            rating: 4, text: "The Node.js and database modules were incredibly well-structured. I finally understand full-stack architecture end-to-end." },
  { name: "Divya R.",      role: "Digital Marketer @ Zomato",      rating: 5, text: "The SEO and SEM modules gave me clarity I never had before. I started getting freelance clients within weeks!" },
  { name: "Arjun K.",      role: "Software Engineer @ HCL",        rating: 5, text: "Excellent mentorship and a very practical approach. The mock interviews really boosted my confidence before placements." },
  // ── Add more reviews below this line ──────────────────────────────────────
  // { name: "Name", role: "Role @ Company", rating: 5, text: "Your review here." },
];
// ──────────────────────────────────────────────────────────────────────────────
// ── Keyframe style injected once ──────────────────────────────────────────────
const SCROLL_STYLE = `
@keyframes scrollLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.testimonial-track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  animation: scrollLeft 28s linear infinite;
  width: max-content;
}
.testimonial-track:hover {
  animation-play-state: paused;
}
`;

const TrainingTestimonials = ({ data = {} }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { title, subtitle, testimonials } = data;

  // Use prop testimonials if available, otherwise fall back to DEFAULT_REVIEWS
  const source = (testimonials && testimonials.length > 0) ? testimonials : DEFAULT_REVIEWS;

  // Duplicate items so the scroll loops seamlessly
  const items = [...source, ...source];

  const cardWidth = isMobile ? 280 : 380;
  const cardGap   = isMobile ? 16  : 24;

  return (
    <Box sx={{ py: { xs: 6, md: 6 }, background: "#ffffff", overflow: "hidden" }}>
      {/* Inject keyframe CSS once */}
      <style>{SCROLL_STYLE}</style>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{ color: "#00b4d8", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", mb: 2 }}
          >
            Alumni Success
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "48px" }, color: "#1e293b", mb: 2 }}
          >
            {title || (<>Join 1200+ <span style={{ color: "#00b4d8" }}>Successful</span> Alumni.</>)}
          </Typography>
          {subtitle && (
            <Typography sx={{ color: "#64748b", maxWidth: "600px", mx: "auto", fontSize: "18px" }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>

      {/* Full-width scroll strip — outside Container so it bleeds edge-to-edge */}
      <Box sx={{ width: "100%", overflow: "hidden", py: 1 }}>
        <div className="testimonial-track">
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                minWidth: `${cardWidth}px`,
                maxWidth: `${cardWidth}px`,
                mx: `${cardGap / 2}px`,
                p: isMobile ? 3 : 4,
                borderRadius: "24px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                position: "relative",
                flexShrink: 0,
                "&:hover": {
                  background: "#ffffff",
                  borderColor: "#00b4d8",
                  boxShadow: "0 20px 40px rgba(0,180,216,0.08)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <FormatQuoteIcon
                sx={{ color: "rgba(0,180,216,0.1)", fontSize: "56px", position: "absolute", top: 16, right: 16 }}
              />
              <Rating value={item.rating} readOnly size="small" sx={{ mb: 2 }} />
              <Typography
                sx={{
                  color: "#1e293b",
                  fontSize: isMobile ? "15px" : "16px",
                  lineHeight: 1.8,
                  mb: 3,
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                "{item.text || item.review}"
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar sx={{ background: "rgba(0,180,216,0.1)", color: "#00b4d8", fontWeight: 700, width: 40, height: 40 }}>
                  {(item.name || "?")[0]}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#1e293b", fontSize: "14px" }}>{item.name}</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "12px" }}>{item.role || item.designation}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default TrainingTestimonials;

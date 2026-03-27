import React from "react";
import { Box, Typography, Container, Grid, Avatar, Rating } from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  { name: "Priya S.", role: "Full Stack Developer @ TCS", rating: 5, text: "Vihaan's training gave me the confidence to switch careers. The hands-on projects and placement support were exceptional!" },
  { name: "Rahul M.", role: "UI Engineer @ Infosys", rating: 5, text: "Best investment I made. The instructors are very approachable, the curriculum is practical and up-to-date." },
  { name: "Sneha A.", role: "React Developer @ Startup", rating: 5, text: "I joined as a complete beginner and landed a job within 2 months of completing the course. Highly recommend!" },
];

const TrainingTestimonials = ({ data = {} }) => {
  const { title, subtitle, testimonials = [] } = data;
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#ffffff" }}>
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

        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  p: 5,
                  borderRadius: "32px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  height: "75%",
                  position: "relative",
                  "&:hover": {
                    background: "#ffffff",
                    borderColor: "#00b4d8",
                    boxShadow: "0 20px 40px rgba(0,180,216,0.06)",
                    transform: "translateY(-5px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <FormatQuoteIcon sx={{ color: "rgba(0,180,216,0.1)", fontSize: "64px", position: "absolute", top: 20, right: 20 }} />
                <Rating value={item.rating} readOnly size="small" sx={{ mb: 3 }} />
                <Typography sx={{ color: "#1e293b", fontSize: "17px", lineHeight: 1.8, mb: 4, fontWeight: 500, fontStyle: "italic" }}>
                  "{item.text || item.review}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ background: "rgba(0,180,216,0.1)", color: "#00b4d8", fontWeight: 700 }}>
                    {item.name[0]}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#1e293b", fontSize: "15px" }}>{item.name}</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "13px" }}>{item.role || item.designation}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrainingTestimonials;

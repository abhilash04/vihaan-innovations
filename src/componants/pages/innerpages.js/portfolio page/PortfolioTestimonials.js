import React from "react";
import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Vikram Singh",
    role: "CEO, TechSphere Solutions",
    review: "The collaboration with Vihan Innovations was seamless. They delivered a complex HMS portal that has transformed our patient care delivery.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Founder, EduNext",
    review: "Their expertise in e-learning platforms is unmatched. The LMS console they built is scalable, fast, and highly intuitive for our students.",
    rating: 5,
  },
  {
    name: "Rajesh Iyer",
    role: "Product Manager, RealtyFlow",
    review: "Excellent communication and a deep understanding of our requirements. The real estate CRM they developed has significantly boosted our sales lead conversion.",
    rating: 5,
  },
];

const PortfolioTestimonials = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6, display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 3 }}>
          <Box>
            <Typography sx={{ color: "#00b4d8", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", mb: 1, textAlign: 'center' }}>
              Kind Words
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "40px" }, color: "#1e293b", textAlign: 'center' }}>
              What Our Clients Say
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                sx={{
                  background: "#ffffff",
                  p: 5,
                  borderRadius: "24px",
                  border: "1px solid #e2e8f0",
                  height: "75%",
                }}
              >
                <Box sx={{ display: "flex", mb: 3 }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#facc15", fontSize: "20px" }} />
                  ))}
                </Box>
                <Typography sx={{ color: "#1e293b", fontSize: "17px", fontWeight: 500, lineHeight: 1.7, mb: 4, fontStyle: "italic" }}>
                  "{item.review}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ background: "rgba(0,180,216,0.1)", color: "#00b4d8", fontWeight: 700 }}>
                    {item.name[0]}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#1e293b", fontSize: "15px" }}>{item.name}</Typography>
                    <Typography sx={{ color: "#64748b", fontSize: "13px" }}>{item.role}</Typography>
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

export default PortfolioTestimonials;

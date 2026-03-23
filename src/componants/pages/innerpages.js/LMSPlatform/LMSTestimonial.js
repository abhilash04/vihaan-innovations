import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

const LMSTestimonial = () => (
  <Box sx={{ bgcolor: "#eff6ff", py: 8 }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#0f172a", fontSize: { xs: "28px", md: "34px" }, mb: 2 }}>Testimonial / Social Proof</Typography>
      </Box>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Paper elevation={0} sx={{ p: { xs: 4, md: 7 }, borderRadius: "24px", bgcolor: "#ffffff", border: "1px solid #dbeafe", boxShadow: "0 20px 60px rgba(37,99,235,0.08)", position: "relative", overflow: "hidden" }}>
          <FormatQuoteIcon sx={{ position: "absolute", top: 20, left: 20, fontSize: 60, color: "rgba(37,99,235,0.08)" }} />
          <FormatQuoteIcon sx={{ position: "absolute", bottom: 20, right: 20, fontSize: 60, color: "rgba(37,99,235,0.08)", transform: "scaleX(-1)" }} />
          {/* Stars */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 4 }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color: "#f59e0b", fontSize: 22 }} />)}
          </Box>
          <Typography sx={{ fontWeight: 600, color: "#1e293b", fontSize: { xs: "18px", md: "22px" }, lineHeight: 1.6, textAlign: "center", mb: 6, position: "relative" }}>
            "Platform sold-all the important social learning tasks and Vihaan demonstrated complete learning tasks and little extra social learning tasks. They built our entire edtech platform from scratch including mobile app, quizzes, certificates, and live lectures in record time."
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2.5 }}>
            <Box sx={{ width: 54, height: 54, borderRadius: "50%", bgcolor: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <PersonIcon sx={{ color: "#2563eb", fontSize: 40, mt: 1 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "16px" }}>Anjali Mehta</Typography>
              <Typography sx={{ color: "#64748b", fontSize: "14px" }}>Coaching Institute Founder, Bangalore</Typography>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  </Box>
);

export default LMSTestimonial;

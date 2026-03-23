import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

const HotelTestimonial = () => (
  <Box sx={{ bgcolor: "#fffdf0", py: 8 }}>
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "26px", md: "34px" } }}>What Hotel Owners Say</Typography>
      </Box>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Paper elevation={0} sx={{ p: { xs: 4, md: 7 }, borderRadius: "28px", bgcolor: "#ffffff", border: "1.5px solid rgba(212,160,23,0.2)", boxShadow: "0 20px 60px rgba(212,160,23,0.08)", position: "relative", overflow: "hidden" }}>
          <FormatQuoteIcon sx={{ position: "absolute", top: 20, left: 20, fontSize: 60, color: "rgba(212,160,23,0.12)" }} />
          <FormatQuoteIcon sx={{ position: "absolute", bottom: 20, right: 20, fontSize: 60, color: "rgba(212,160,23,0.12)", transform: "scaleX(-1)" }} />
          <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 4 }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color: "#d4a017", fontSize: 24 }} />)}
          </Box>
          <Typography sx={{ fontWeight: 600, color: "#1e293b", fontSize: { xs: "18px", md: "22px" }, lineHeight: 1.65, textAlign: "center", mb: 6, position: "relative" }}>
            "Since moving to our custom booking platform, direct bookings have increased by 40%, and we’ve significantly reduced OTA commissions. The system is easy to use, our staff loves the operations dashboard, and our guests find the booking process incredibly smooth. Highly recommended!"
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2.5 }}>
            <Box sx={{ width: 56, height: 56, borderRadius: "50%", bgcolor: "#fef9ec", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <PersonIcon sx={{ color: "#d4a017", fontSize: 42, mt: 1 }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 900, color: "#0f172a", fontSize: "16px" }}>Priya Menon</Typography>
              <Typography sx={{ color: "#64748b", fontSize: "14px" }}>Resort Owner</Typography>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  </Box>
);

export default HotelTestimonial;

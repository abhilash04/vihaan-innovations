import React from "react";
import { Box, Typography, Container, Grid, Paper, Rating } from "@mui/material";
import { motion } from "framer-motion";

const TrainingTestimonials = ({ data = {} }) => {
  const { title, subtitle, testimonials = [] } = data;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "32px", md: "48px" }, mb: 2, color: "#0f172a" }}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ color: "#64748b", maxWidth: "700px", mx: "auto", fontWeight: 500 }}>
              {subtitle}
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((t, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "24px",
                    bgcolor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <Rating value={t.rating} readOnly sx={{ mb: 2, color: "#00b4d8" }} />
                  <Typography sx={{ color: "#475569", fontSize: "16px", fontStyle: "italic", mb: 4, flexGrow: 1 }}>
                    "{t.text}"
                  </Typography>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: "#0f172a" }}>{t.name}</Typography>
                    <Typography sx={{ color: "#00b4d8", fontSize: "14px", fontWeight: 600 }}>{t.role}</Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrainingTestimonials;

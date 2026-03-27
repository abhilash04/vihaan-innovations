import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const TrainingTools = ({ data = [] }) => {
  if (!data || data.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: "28px", md: "40px" }, color: "#0f172a", mb: 2 }}>
              Industry Standard <Box component="span" sx={{ color: "#00b4d8" }}>Tools & Software</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: "#64748b", maxWidth: "700px", mx: "auto", fontWeight: 500 }}>
              Master the same tools used by professionals at top tech companies worldwide.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {data.map((tool, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    bgcolor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: tool.color || "#00b4d8",
                      boxShadow: `0 10px 20px -5px ${tool.color}20`
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      bgcolor: tool.color || "#00b4d8",
                      boxShadow: `0 0 10px ${tool.color}80`
                    }} 
                  />
                  <Typography sx={{ fontWeight: 700, color: "#1e293b", fontSize: "14px", textAlign: "center" }}>
                    {tool.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrainingTools;

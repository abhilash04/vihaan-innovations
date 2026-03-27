import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const OurBeliefs = () => {
  const beliefs = [
    {
      id: "01",
      title: "Build with purpose",
      description: "Every line of code and every design element should serve our people. We don't build for the sake of it — we build what matters.",
    },
    {
      id: "02",
      title: "Teach what you know",
      description: "Knowledge shared is knowledge multiplied. We're a team of practitioners who believe in the best technology is shared with others.",
    },
    {
      id: "03",
      title: "Move with intention",
      description: "We move fast, but not carelessly. Decisions are made with data, empathy, and a clear understanding of who we're building for.",
    },
    {
      id: "04",
      title: "Grow together",
      description: "Our success is collective. We celebrate teammates' wins as our own and invest in each other's long-term career growth.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, background: "#ffffff" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              color: "#00b4d8",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Our Values
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "32px", md: "48px" },
              color: "#1e293b",
            }}
          >
            What we believe in
          </Typography>
        </Box>

        <Grid container>
          {beliefs.map((belief, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{
                border: "1px solid #afd7ffff",
                borderTop: index < 2 ? "1px solid #afd7ffff" : "none",
                borderLeft: index % 2 === 1 ? "none" : "1px solid #afd7ffff",
                p: { xs: 4, md: 8 },
                transition: "all 0.4s ease",
                "&:hover": { background: "#d0f2ffff" },
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: 800,
                    color: "rgba(0, 180, 216, 0.15)", // Slightly stronger color for the numbers
                    mb: 4,
                    lineHeight: 1,
                  }}
                >
                  {belief.id}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "#1e293b",
                    mb: 2,
                    fontSize: "1.4rem",
                  }}
                >
                  {belief.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: "1.05rem",
                  }}
                >
                  {belief.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurBeliefs;

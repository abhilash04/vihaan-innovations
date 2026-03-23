import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Market",
    title: "Global Investment Flows in Q3 PropTech",
    desc: "Tracking risk buffers allocated across secondary liquidity matrices correctly.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=500&q=80",
  },
  {
    category: "Strategy",
    title: "The Shift Towards Decentralized Deeds",
    desc: "Audit transparent locks preserving title escrow node integrity locks.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80",
  },
  {
    category: "Design",
    title: "Optimizing High-Conversion Property Cards",
    desc: "Framer design layouts multiplying landing index visibility matrices correctly.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80",
  },
];

const PortalBlogAlternate = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#F8F6F2", // Light Cream/Off-white
        color: "#1A1E2B", // Dark Charcoal Text
        position: "relative",
        backgroundImage: "radial-gradient(rgba(245, 158, 11, 0.03) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif", // Serif Display Font
                fontWeight: 700,
                fontSize: { xs: "2.2rem", md: "2.8rem" },
                mb: 1.5,
              }}
            >
              Editorial Features
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(26, 30, 43, 0.7)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              In-depth perspective on the architecture and data strategies defining high-performance brokerages.
            </Typography>
          </motion.div>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Box
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(0, 0, 0, 0.04)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 15px 35px rgba(245, 158, 11, 0.08)",
                      borderColor: "rgba(245, 158, 11, 0.2)", // Gold Border
                      "& .blog-img": { transform: "scale(1.05)" },
                    },
                  }}
                >
                  {/* Image Container */}
                  <Box sx={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <Box
                      className="blog-img"
                      component="img"
                      src={post.img}
                      alt={post.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        left: 15,
                        bgcolor: "#F59E0B", // Gold Background
                        p: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        fontFamily: "'Inter', sans-serif",
                        boxShadow: "0 4px 10px rgba(245, 158, 11, 0.2)",
                      }}
                    >
                      {post.category}
                    </Box>
                  </Box>

                  {/* Content Container */}
                  <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        mb: 1,
                        lineHeight: 1.3,
                        color: "#1A1E2B",
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(26, 30, 43, 0.6)",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {post.desc}
                    </Typography>

                    <Link
                      href="#"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "#1A1E2B",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        fontFamily: "'Inter', sans-serif",
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#F59E0B" },
                      }}
                    >
                      Read More{" "}
                      <Box className="read-more-icon" sx={{ display: "flex", alignItems: "center" }}>
                        <ArrowRight size={14} />
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortalBlogAlternate;

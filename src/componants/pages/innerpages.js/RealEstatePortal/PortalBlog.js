import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Insights",
    title: "How Real Estate Portals Are Transforming Property Businesses",
    desc: "Discover how modern real estate portals help agencies manage listings, attract buyers, and streamline property transactions with advanced digital platforms.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  },
  {
    category: "Tech",
    title: "The Future of Digital Transformation in Real Estate",
    desc: "Explore how emerging technologies like automation, AI, and data analytics are reshaping the real estate industry and improving operational efficiency.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
  },
  {
    category: "Growth",
    title: "Why Every Real Estate Business Needs a Smart Property Platform",
    desc: "Learn how scalable real estate platforms help developers, brokers, and property marketplaces manage listings, generate leads, and deliver better customer experiences.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
  },
];

const PortalBlog = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#0C1424", // Lighter Dark
        color: "#FFFFFF",
        position: "relative",
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
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 800,
                fontSize: { xs: "2.2rem", md: "2.8rem" },
                mb: 1.5,
              }}
            >
              Explore Our Resources on Real Estate Solutions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Stay updated with the latest insights, trends, and technologies shaping the real estate industry. Explore expert articles on property platforms, digital transformation, and smart real estate solutions.
            </Typography>
          </motion.div>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4} alignItems="stretch">
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
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
                    bgcolor: "rgba(25, 30, 43, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      bgcolor: "rgba(25, 30, 43, 0.7)",
                      borderColor: "rgba(59, 130, 246, 0.2)",
                      "& .blog-img": { transform: "scale(1.05)" },
                      "& .read-more-icon": { transform: "translateX(4px)", color: "#3B82F6" },
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
                        bgcolor: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        p: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#3B82F6",
                        fontFamily: "'Inter', sans-serif",
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
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(255, 255, 255, 0.6)",
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
                        color: "#3B82F6",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Read More{" "}
                      <Box className="read-more-icon" sx={{ display: "flex", alignItems: "center", transition: "transform 0.2s ease" }}>
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

export default PortalBlog;

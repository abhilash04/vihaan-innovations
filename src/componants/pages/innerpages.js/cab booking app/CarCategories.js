import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Hatchback",
    description: "Budget friendly city rides",
    image: "https://images.unsplash.com/photo-1541899481282-d53b6cb8c3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Sedan",
    description: "Comfortable everyday travel",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "SUV",
    description: "Spacious family and road trips",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c340?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Luxury",
    description: "Premium drives for special occasions",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Electric",
    description: "Eco-friendly zero emission rides",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Mini Bus",
    description: "Group travel and corporate transfers",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CarCategories = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        background: "#f9f9f9", // Off-white contrast band
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#fd544e",
            fontWeight: 600,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Section 7
        </Typography>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "#1a1a1a", fontWeight: 800, mb: 2 }}
        >
          Car Categories
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#666", maxWidth: 600, mx: "auto", mb: 8 }}
        >
          Choose from our diverse fleet of vehicles tailored for any travel requirement.
        </Typography>
      </motion.div>

      {/* Cards Scroll */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: "flex",
          gap: "20px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
          overflowX: "auto",
          paddingBottom: "20px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>
          {`div::-webkit-scrollbar { display: none; }`}
        </style>

        {categories.map((cat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            style={{
              flex: "0 0 240px",
              height: "360px",
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            }}
          >
            <Box
              className="cat-card"
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "all 0.5s ease",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)", // keep dark soft overlay for white text readability
                  zIndex: 1,
                },
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            />

            {/* Content overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "50%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "18px",
                  mb: 0.5,
                }}
              >
                {cat.title}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", mb: 2 }}>
                {cat.description}
              </Typography>

              <Box
                className="browse-link"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  opacity: 0,
                  transform: "translateY(10px)",
                  transition: "all 0.3s ease",
                  ".cat-card:hover ~ &": { opacity: 1, transform: "translateY(0)" }, // wait, sibling selector might still be tricky. I'll make it trigger on overall container hover instead
                }}
              >
                <Typography sx={{ color: "#f78361", fontSize: "12px", fontWeight: 700 }}>
                  Browse
                </Typography>
                <ArrowRight size={14} color="#f78361" />
              </Box>
            </Box>

            {/* Trigger container trigger for hover items */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                "&:hover ~ .bottom-border": { width: "100%" },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "0%",
                height: "4px",
                background: "linear-gradient(90deg, #f78361 0%, #fd544e 100%)",
                zIndex: 4,
                transition: "width 0.3s ease",
              }}
              className="bottom-border"
            />
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default CarCategories;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/it-trends.jpeg";
import img2 from "../../assets/smart-tools.jpeg";
import img3 from "../../assets/tech-life.jpeg";
import img4 from "../../assets/ai-transform.png";

const posts = [
  {
    id: 1,
    category: "IT Services",
    title: "Emerging IT Trends Shaping the Future",
    description:
      "Learn about the latest technology trends like AI, cloud computing, and cybersecurity that are transforming modern businesses.",
    date: "16 Nov 2020",
    author: "admin",
    image: img1,
  },
  {
    id: 2,
    category: "Software Development",
    title: "Smart Tools to Improve Remote Work",
    description:
      "Discover software solutions that make remote work more efficient, collaborative, and productive.",
    date: "16 Nov 2020",
    author: "admin",
    image: img2,
  },
  {
    id: 3,
    category: "Web Development",
    title: "Tech That Makes Everyday Life Easier",
    description:
      "Explore digital tools and smart devices designed to simplify tasks at home and in the workplace.",
    date: "16 Nov 2020",
    author: "admin",
    image: img3,
  },
  {
    id: 4,
    category: "AI/ML",
    title: "How AI is Transforming Today's World",
    description:
      "Understand essential cybersecurity practices to protect your company data and maintain online security.",
    date: "18 Dec 2021",
    author: "admin",
    image: img4,
  },
];

/* ─── Single Post Card ───────────────────────────────────────────────────── */
const PostCard = ({ post }) => (
  <Card
    sx={{
      width: "100%",
      flexShrink: 0,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
    }}
  >
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <CardMedia
        component="img"
        height="200"
        image={post.image}
        alt={post.title}
        sx={{ transition: "filter 0.4s ease", "&:hover": { filter: "grayscale(100%)" } }}
      />
      <Button
        size="small"
        variant="contained"
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          background: "linear-gradient(to right,#03228f 0%,#03228f 26%,#4e95ed 100%)",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "4px 12px",
          fontSize: "0.75rem",
          "&:hover": { background: "linear-gradient(to left,#03228f 0%,#4e95ed 100%)" },
        }}
      >
        {post.category}
      </Button>
    </Box>
    <CardContent>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <CalendarMonthIcon sx={{ fontSize: 16, color: "#0B70E1" }} />
        <Typography variant="caption" color="text.secondary">{post.date}</Typography>
        <PersonIcon sx={{ fontSize: 16, color: "#0B70E1", ml: 2 }} />
        <Typography variant="caption" color="#454545">{post.author}</Typography>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: 1.4,
          color: "#0a0a0a",
          fontFamily: "Livvic",
          mb: "15px",
          "&:hover": { color: "#0B70E1" },
        }}
      >
        {post.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "16px", color: "#454545", fontFamily: "Livvic", mb: "15px", "&:hover": { color: "#0B70E1" } }}
      >
        {post.description}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#061340", fontWeight: 600, cursor: "pointer", "&:hover": { color: "#0B70E1" } }}
      >
        Learn More →
      </Typography>
    </CardContent>
  </Card>
);

/* ─── Arrow Button ───────────────────────────────────────────────────────── */
const ArrowBtn = ({ onClick, disabled, children }) => (
  <IconButton
    onClick={onClick}
    disabled={disabled}
    sx={{
      borderRadius: "50%",
      background: disabled
        ? "rgba(0,0,0,0.15)"
        : "linear-gradient(to right, #03228f 0%, #03228f 26%, #4e95ed 100%)",
      color: "#fff",
      width: 42,
      height: 42,
      flexShrink: 0,
      boxShadow: 2,
      "&:hover": {
        background: disabled
          ? "rgba(0,0,0,0.15)"
          : "linear-gradient(to left, #03228f 0%, #4e95ed 100%)",
      },
    }}
  >
    {children}
  </IconButton>
);

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function TipsAndTricks() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const visibleCount = isMobile ? 1 : 3;
  const maxIndex = posts.length - visibleCount;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6, backgroundColor: "#fdfdfe" }}>
      {/* ── Heading ── */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        sx={{ textAlign: "center", mb: 5, px: { xs: 0, md: 4 } }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: { xs: "1.6rem", md: "2.125rem" } }}>
          Explore Our Latest Insights &amp; Updates
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 500, color: "#444a56", mt: 1 }}>
          Stay informed with the newest technology trends, digital tools, and IT solutions that are shaping businesses and everyday life.
        </Typography>
        <Box sx={{ position: "relative", mt: 1, height: 4, width: 80, mx: "auto", backgroundColor: "#0066ff", borderRadius: 2 }}>
          <Box
            sx={{
              position: "absolute", width: 10, height: 10,
              backgroundColor: "#0066ff", borderRadius: "50%",
              top: "-4px", animation: "rollBall 2s linear infinite",
            }}
          />
        </Box>
        <style>{`@keyframes rollBall { 0% { transform: translateX(-10px); } 100% { transform: translateX(80px); } }`}</style>
      </Box>

      {/* ── Cards Row ── */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: { xs: 1, md: 2 } }}>
        <ArrowBtn onClick={handlePrev} disabled={currentIndex === 0}>
          <ArrowBackIos fontSize="small" />
        </ArrowBtn>

        {/* ── MOBILE: one card at a time with AnimatePresence ── */}
        {isMobile ? (
          <Box sx={{ overflow: "hidden", width: "100%" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <PostCard post={posts[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </Box>
        ) : (
          /* ── DESKTOP: show 3 cards side by side ── */
          <Box sx={{ display: "flex", gap: 4, width: "100%", maxWidth: 1200 }}>
            {posts.slice(currentIndex, currentIndex + visibleCount).map((post) => (
              <Box key={post.id} sx={{ flex: 1, minWidth: 0 }}>
                <PostCard post={post} />
              </Box>
            ))}
          </Box>
        )}

        <ArrowBtn onClick={handleNext} disabled={currentIndex === maxIndex}>
          <ArrowForwardIos fontSize="small" />
        </ArrowBtn>
      </Box>

      {/* ── Dot Indicators (mobile only) ── */}
      {isMobile && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.8, mt: 2.5 }}>
          {posts.map((_, i) => (
            <Box
              key={i}
              onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
              sx={{
                width: i === currentIndex ? 20 : 8,
                height: 8,
                borderRadius: "4px",
                backgroundColor: i === currentIndex ? "#0066ff" : "rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      )}

      {/* ── Explore Button ── */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "none", fontSize: "16px", px: 4, py: 1.5,
            borderRadius: "30px",
            background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
            color: "#fff",
            boxShadow: "0px 4px 15px rgba(0, 180, 216, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #0077b6 0%, #023e8a 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 20px rgba(0, 180, 216, 0.3)",
            },
          }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
}


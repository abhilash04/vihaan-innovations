import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Sample posts
const posts = [
  {
    id: 1,
    category: "IT Services",
    title: "Emerging IT Trends Shaping the Future",
    description:
      "Stay updated with the newest shifts in technology and how they impact businesses.",
    date: "16 Nov 2020",
    author: "admin",
    image:
      "https://img.freepik.com/free-photo/businessman-working-modern-office_1098-18706.jpg",
  },
  {
    id: 2,
    category: "Software Development",
    title: "Smart Tools to Improve Remote Work",
    description:
      "Discover software solutions that make virtual work smoother and more efficient.",
    date: "16 Nov 2020",
    author: "admin",
    image:
      "https://img.freepik.com/free-photo/two-coworkers-working-project-together-office_1098-18749.jpg",
  },
  {
    id: 3,
    category: "Web Development",
    title: "Tech That Makes Everyday Life Easier",
    description:
      "A look at digital tools designed to simplify tasks at home and at work.",
    date: "16 Nov 2020",
    author: "admin",
    image:
      "https://img.freepik.com/free-photo/man-working-laptop-office_1098-19291.jpg",
  },
  {
    id: 4,
    category: "AI/ML",
    title: "How AI is Transforming Today’s World",
    description:
      "Learn how artificial intelligence is influencing industries and daily life.",
    date: "18 Dec 2021",
    author: "admin",
    image:
      "https://img.freepik.com/free-photo/artificial-intelligence-concept_23-2148683512.jpg",
  },
];

export default function TipsAndTricks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // Number of cards visible at once
  const maxIndex = posts.length - visibleCount;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: "#fdfdfe" }}>
      {/* Animated Heading */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Explore Our Latest Insights & Updates
        </Typography>
        <Box
          sx={{
            position: "relative",
            mt: 1,
            height: 4,
            width: 80,
            mx: "auto",
            backgroundColor: "#0066ff",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 10,
              height: 10,
              backgroundColor: "#0066ff",
              borderRadius: "50%",
              top: "-4px",
              animation: "rollBall 2s linear infinite",
            }}
          />
        </Box>
        <style>
          {`
            @keyframes rollBall {
              0% { transform: translateX(-10px); }
              100% { transform: translateX(80px); }
            }
          `}
        </style>
      </Box>

      {/* Arrow + Cards */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            borderRadius: "50%",
            background:
              "linear-gradient(to right, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%)",
            cursor: "pointer",
            width: 42,
            height: 42,
            boxShadow: 2,
            color: "white", // This line was missing
            "&:hover": {
              background: "linear-gradient(to left, #03228f 0%, #4e95ed 100%)",
            },
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "center",
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {posts
            .slice(currentIndex, currentIndex + visibleCount)
            .map((post) => (
              <Card
                key={post.id}
                sx={{
                  width: 320,
                  flexShrink: 0,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      transition: "filter 0.4s ease",
                      "&:hover": {
                        filter: "grayscale(100%)",
                      },
                    }}
                  />
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      right: 10,
                      background:
                        "linear-gradient(to right,#03228f 0%,#03228f 0%,#03228f 26%,#4e95ed 100%)",
                      textTransform: "none",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      padding: "4px 12px",
                      fontSize: "0.75rem",
                      "&:hover": {
                        background:
                          "linear-gradient(to left,#03228f 0%,#4e95ed 100%)",
                      },
                    }}
                  >
                    {post.category}
                  </Button>
                </Box>

                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <CalendarMonthIcon
                      sx={{ fontSize: 16, color: "#0B70E1" }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>
                    <PersonIcon
                      sx={{ fontSize: 16, color: "#0B70E1", ml: 2 }}
                    />
                    <Typography variant="caption" color="#454545">
                      {post.author}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
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
                    sx={{
                      fontSize: "16px",
                      color: "#454545",
                      fontFamily: "Livvic",
                      mb: "15px",
                      "&:hover": { color: "#0B70E1" },
                    }}
                  >
                    {post.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#061340",
                      fontWeight: 600,
                      cursor: "pointer",
                      "&:hover": { color: "#0B70E1" },
                    }}
                  >
                    Learn More →
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            borderRadius: "50%",
            background:
              "linear-gradient(to right, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%)",
            color: "#fff",
            width: 42,
            height: 42,
            boxShadow: 2,
            "&:hover": {
              background: "linear-gradient(to left, #03228f 0%, #4e95ed 100%)",
            },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>

      {/* Explore Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: "16px",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            background: "linear-gradient(45deg, #e3335f, #3b2c73)",
            color: "#fff",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(45deg, #c62848, #2e1c5f)",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
}

import React, { useEffect } from "react";
import Header from "../common/Header";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import bgImage from "../../assets/breadcrumb-bg.webp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Replace with your actual image path
// import ownerImg from "../../assets/ajjis/logo.png";
import { Link } from "react-router-dom";
import ITServiceSection from "./ItServiceSection";
import InnerPageBanner from "./sections/InnerPageBanner";

const points = [
  "Ajji’s Recipe was born from the cherished handwritten cookbook of Jayashree Ajji, who passed on her legacy of traditional cooking to her grandson Prateek.",
  "Inspired by the love and wisdom of his Ajji, Prateek learned to cook her recipes with care, preserving the taste and emotion behind every dish.",
  "The brand is rooted in deep respect for tradition, authenticity, and the healing power of home-cooked food.",
  "Operating under the FSSAI-registered home kitchen ‘Tradition Taste’, Ajji’s Recipe brings home-crafted masalas to kitchens across India.",
  "Each spice blend is made with a commitment to purity, flavor, and the nostalgic essence of homemade food.",
  "We partner with trusted local farmers to source fresh, chemical-free ingredients that ensure taste and health go hand in hand.",
  "Ajji’s Recipe actively promotes sustainable and organic practices, helping communities embrace a toxin-free lifestyle.",
  "With over a decade of dedication to clean, conscious cooking, our journey continues through educational efforts like workshops and community events.",
  "Every pack we ship is a tribute to Ajji’s handwritten legacy — a celebration of family, flavor, and tradition.",
];

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <HeaderSec />
      <InnerPageBanner />
      <ITServiceSection />
      <Footer />
    </>
  );
};

export default AboutUs;

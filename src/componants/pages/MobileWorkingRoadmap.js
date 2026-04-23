import React from "react";
import { Box, Typography, Button, Avatar, Stack } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SearchIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StorageIcon from "@mui/icons-material/Storage";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CampaignIcon from "@mui/icons-material/Campaign";

const colors = { blue: "#1351d8", darkBlue: "#31336b", teal: "#1b89aa", pink: "#fd1774", darkGray: "#30326a" };

const roadmapItems = [
  { id: 1, label: "Brainstorming", icon: <PsychologyIcon sx={{ fontSize: 28 }} />, bgColor: colors.blue },
  { id: 2, label: "UX Research", icon: <SearchIcon sx={{ fontSize: 28 }} />, bgColor: colors.darkGray },
  { id: 3, label: "Product Designing", icon: <DesignServicesIcon sx={{ fontSize: 28 }} />, bgColor: colors.teal },
  { id: 4, label: "Front-End Dev", icon: <CodeIcon sx={{ fontSize: 28 }} />, bgColor: colors.darkGray },
  { id: 5, label: "Usability Testing", icon: <ListAltIcon sx={{ fontSize: 28 }} />, bgColor: colors.darkGray },
  { id: 6, label: "Back-End Dev", icon: <StorageIcon sx={{ fontSize: 28 }} />, bgColor: colors.pink },
  { id: 7, label: "SEO Optimization", icon: <TrendingUpIcon sx={{ fontSize: 28 }} />, bgColor: colors.blue },
  { id: 8, label: "Digital Marketing", icon: <CampaignIcon sx={{ fontSize: 28 }} />, bgColor: colors.teal },
];

const MobileWorkingRoadmap = () => {
  return (
    <Box sx={{ bgcolor: "#171b44", color: "#fff", py: 6, px: 2, textAlign: "center" }}>
      <Button variant="contained" sx={{ bgcolor: "#332d57", textTransform: "none", fontSize: 11, borderRadius: "20px", px: 2, py: 0.5, mb: 2 }}> What We Do </Button>
      <Typography variant="h3" sx={{ fontWeight: 800, fontSize: "24px", lineHeight: 1.2, mb: 2, fontFamily: "Fira Sans" }}>
        Our Smart Workflow for Building Better Digital Solutions
      </Typography>
      <Typography sx={{ color: "#a3abc8", fontSize: "14px", lineHeight: 1.6, mb: 4, px: 1 }}>
        Every stage of our process ensures reliability, performance, and measurable results.
      </Typography>

      {/* Stacked Timeline/List for Mobile avoiding overlap circles */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "flex-start", maxWidth: "280px", mx: "auto", textAlign: "left" }}>
        {roadmapItems.map((item) => (
          <Box key={item.id} sx={{ display: "flex", alignItems: "center", gap: 2, width: "90%", p: 1.5, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Box sx={{ width: 44, height: 44, borderRadius: "12px", bgcolor: item.bgColor, display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              {item.icon}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>Step {item.id}</Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{item.label}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* CTA Button */}
      <Button variant="contained" sx={{ bgcolor: colors.blue, mt: 4, borderRadius: "30px", px: 5, py: 1.3, fontWeight: 700, fontSize: 15, width: "100%", maxWidth: "300px" }}> Get Started </Button>
    </Box>
  );
};

export default MobileWorkingRoadmap;

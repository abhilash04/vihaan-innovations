import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  styled,
} from "@mui/material";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Users,
  LifeBuoy,
  Smartphone,
  Palette,
  Search,
  Award,
  Share2,
  Cloud,
} from "lucide-react";

const scrollItems = [
  {
    number: "01.",
    title: "Vihaan Innovations Digital ",
    title2: "Growth Experts",
    subtitle: "Build modern websites, apps, and scalable business solutions designed to grow your brand faster.",
    services: [
      { label: "Web Development", icon: Globe, color: "#34D399" },
      { label: "CRM", icon: Users, color: "#EC4899" },
      { label: "Support", icon: LifeBuoy, color: "#6366F1" },
    ],
  },
  {
    number: "02.",
    title: "Best IT Services by ",
    title2: "Vihaan Innovations",
    subtitle: "We create fast, secure, and user-friendly digital products that improve business performance.",
    services: [
      { label: "App Development", icon: Smartphone, color: "#34D399" },
      { label: "UI/UX", icon: Palette, color: "#EC4899" },
      { label: "SEO", icon: Search, color: "#6366F1" },
    ],
  },
  {
    number: "03.",
    title: "Custom Web & ",
    title2: "App Solutions",
    subtitle: "Choose Vihaaninnovations for premium design, strong technology, and long-term growth.",
    services: [
      { label: "Branding", icon: Award, color: "#34D399" },
      { label: "Marketing", icon: Share2, color: "#EC4899" },
      { label: "DevOps", icon: Cloud, color: "#6366F1" },
    ],
  },
];

const IconContainer = styled(Box)(({ color }) => ({
  width: "36px",
  height: "36px",
  borderRadius: "10px",
  backgroundColor: color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  boxShadow: `0 4px 15px ${color}30`,
}));

const MobileScrollForm = () => {
  const [index, setIndex] = useState(0);
  const item = scrollItems[index];

  const handlePrev = () => setIndex((p) => (p - 1 + scrollItems.length) % scrollItems.length);
  const handleNext = () => setIndex((p) => (p + 1) % scrollItems.length);

  return (
    <Box sx={{ bgcolor: "#f7f8fd", py: 4, px: 2 }}>
      {/* Content Slider */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "#5c6bc0" }}>{item.number}</Typography>
          <Box sx={{ width: "40px", height: "2px", bgcolor: "#5c6bc0" }} />
        </Box>

        <Typography variant="h3" sx={{ fontWeight: 800, fontSize: "32px", lineHeight: 1.2, mb: 1.5, fontFamily: "Fira Sans" }}>
          {item.title}
          <Box component="span" sx={{ color: "#067ece" }}>{item.title2}</Box>
        </Typography>

        <Typography sx={{ color: "#4b5563", fontSize: "14px", lineHeight: 1.6, mb: 3 }}>{item.subtitle}</Typography>

        {/* Small Services Grid */}
        <Grid container spacing={1.5} sx={{ mb: 3 }}>
          {item.services.map((ser, i) => {
            const Icon = ser.icon;
            return (
              <Grid item xs={12} key={i}>
                <Paper elevation={0} sx={{ p: 1.5, borderRadius: "10px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 1.5 }}>
                  <IconContainer color={ser.color}>
                    <Icon size={18} color="#fff" strokeWidth={2.5} />
                  </IconContainer>
                  <Typography sx={{ fontWeight: 600, color: "#1e293b", fontSize: "13px" }}>{ser.label}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Dots & Navigation */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 0.8 }}>
            {scrollItems.map((_, i) => (
              <Box key={i} sx={{ width: i === index ? 16 : 6, height: 6, borderRadius: "3px", bgcolor: i === index ? "#006cff" : "#cbd5e1", transition: "all 0.3s" }} />
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton size="small" sx={{ border: "1px solid #006cff", color: "#006cff" }} onClick={handlePrev}>
              <ArrowLeft size={16} />
            </IconButton>
            <IconButton size="small" sx={{ border: "1px solid #006cff", color: "#006cff" }} onClick={handleNext}>
              <ArrowRight size={16} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Embedded Form for Mobile */}
      <Paper elevation={0} sx={{ p: 3, borderRadius: "16px", bgcolor: "#ffffff", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 8px 32px rgba(0,0,0,0.04)" }}>
        <Typography sx={{ fontWeight: 800, color: "#0f172a", fontSize: "18px", mb: 0.5, textAlign: "center" }}>Free IT Consultation</Typography>
        <Typography sx={{ color: "#64748b", fontSize: "12px", mb: 2.5, textAlign: "center" }}>Trusted by businesses to deliver reliable IT solutions</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {["Name", "Email", "Phone Number", "Your Message Here"].map((label, i) => (
            <TextField key={i} label={label} variant="outlined" size="small" fullWidth multiline={i === 3} rows={i === 3 ? 2 : 1}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px", bgcolor: "#f8f9fa", "& fieldset": { borderColor: "rgba(0,0,0,0.08)" } } }} />
          ))}
          <Button variant="contained" color="primary" sx={{ px: 4, py: 1.2, borderRadius: "8px", fontWeight: 700, textTransform: "none", fontSize: "14px", mt: 1 }}>Submit</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default MobileScrollForm;

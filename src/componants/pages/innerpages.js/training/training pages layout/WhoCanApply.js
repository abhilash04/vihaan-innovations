import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, useInView, animate } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LanguageIcon from "@mui/icons-material/Language";
import EngineeringIcon from "@mui/icons-material/Engineering";
const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={ref}>{count}</span>;
};

const Card = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: "easeOut" }}
      style={{ height: "70%" }}
    >
      <Box
        sx={{
          position: "relative",
          p: "28px 24px",
          height: "100%",
          borderRadius: "16px",
          background: "#ffffff",
          border: "1.5px solid #e9e4dc",
          transition: "all 0.28s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1.5,
          cursor: "default",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: item.accent,
            boxShadow: `0 12px 32px ${item.accent}18`,
            "& .icon-wrap": {
              background: item.accent,
              color: "#ffffff",
              transform: "scale(1.08)",
            },
          },
        }}
      >
        {/* Top accent line */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "24px",
            width: "40px",
            height: "3px",
            borderRadius: "0 0 4px 4px",
            background: item.accent,
            opacity: 0.7,
          }}
        />

        {/* Icon */}
        <Box
          className="icon-wrap"
          sx={{
            width: 52,
            height: 52,
            borderRadius: "12px",
            background: item.bg,
            color: item.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.28s ease",
            flexShrink: 0,
          }}
        >
          {item.icon}
        </Box>

        {/* Label */}
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "#0c0c0c",
            lineHeight: 1.3,
          }}
        >
          {item.label}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "13.5px",
            color: "#6b6760",
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          {item.text}
        </Typography>
      </Box>
    </motion.div>
  );
};

const WhoCanApply = ({ data = {} }) => {
  const { title, subtitle, badge, audience = [], stats = [] } = data;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f7f5f0",
        py: { xs: 6, md: 6 },
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative circles */}
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1.5px solid #e0dbd3",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "1.5px solid #e0dbd3",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ mb: { xs: 3, md: 4 }, display: "flex", alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2d6a4f",
                mb: 1.5,
                textAlign: "center",
              }}
            >
              {badge || "Eligibility"}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: { xs: "28px", md: "42px" },
                color: "#0c0c0c",
                lineHeight: 1.15,
                textAlign: "center",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              {title || (<>Who Can Apply <Box component="span" sx={{ color: "#2d6a4f" }}>for the Course?</Box></>)}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: "15px",
                color: "#6b6760",
                maxWidth: "500px",
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              {subtitle || "Our program is open to anyone with the drive to learn. No prior coding experience required — just ambition."}
            </Typography>
            {/* Underline accent */}
            <Box
              sx={{
                mt: 2.5,
                width: "48px",
                height: "3px",
                borderRadius: "2px",
                background: "#1a472a",
              }}
            />
          </Box>
        </motion.div>

        {/* Cards */}
        <Grid container spacing={2.5}>
          {audience.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card item={item} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              mt: 4,
              p: "24px 32px",
              borderRadius: "14px",
              background: "#ffffff",
              border: "1.5px solid #e0dbd3",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-between" },
              gap: 3,
            }}
          >
            {(stats.length > 0 ? stats : [
              { num: 1200, label: "Alumni placed", suffix: "+" },
              { num: 200, label: "Hiring partners", suffix: "+" },
              { num: 500, label: "Projects built", suffix: "+" },
              { num: 100, label: "Placement assistance", suffix: "%" },
            ]).map((stat, i) => (
              <Box key={i} sx={{ textAlign: "center", flex: { xs: "0 0 calc(50% - 12px)", md: "1 1 120px" } }}>
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: "26px", md: "32px" },
                    color: "#1a472a",
                    lineHeight: 1,
                  }}
                >
                  <Counter from={0} to={stat.num} duration={2} />
                  {stat.suffix}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: "12px",
                    color: "#6b6760",
                    mt: 0.5,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default WhoCanApply;
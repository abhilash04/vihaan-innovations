import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { motion, useInView, animate } from "framer-motion";

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
      style={{ height: "100%" }}
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
  const { title, subtitle, audience = [], stats = [] } = data;

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f7f5f0",
        py: { xs: 6, md: 8 },
        overflow: "hidden",
      }}
    >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ mb: { xs: 5, md: 7 }, display: "flex", alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
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
              Eligibility
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
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: "15px",
                color: "#6b6760",
                maxWidth: "600px",
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={2.5}>
          {audience.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card item={item} index={index} />
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              mt: 7,
              p: "24px 32px",
              borderRadius: "14px",
              background: "#ffffff",
              border: "1.5px solid #e0dbd3",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            {stats.map((stat, i) => (
              <Box key={i} sx={{ textAlign: "center", flex: "1 1 120px" }}>
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
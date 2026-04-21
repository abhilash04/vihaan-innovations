import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import PopUps from "../common/PopUps";
import { motion } from "framer-motion";

import phone1 from "../../assets/Bitmap.png";
import arrow from "../../assets/arrow.png";
import img1 from "../../assets/2-1.png";

const OurExpert = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom,#f0f4f8ff 0, #e2f3ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Background Lines (desktop only to avoid visual clutter on mobile) ── */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: 0,
          left: "-25%",
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: "1px",
              height: "100%",
              top: 0,
              left: `${(i + 1) * 25}%`,
              background: "rgba(0,0,0,.08)",
              overflow: "hidden",
              "&::after": {
                content: '""',
                display: "block",
                position: "absolute",
                height: "15vh",
                width: "100%",
                top: "-50%",
                left: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #00b4d8 75%, #00b4d8 100%)",
                animation: "drop 7s cubic-bezier(.4,.26,0,.97) infinite",
                animationDelay: `${i * 2}s`,
              },
            }}
          />
        ))}
      </Box>

      {/* ── Foreground Content ── */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          pt: { xs: 4, md: 6 },
          px: { xs: 2, md: 0 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left: Phone Image ── */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mb: { xs: 3, md: 0 },
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={phone1}
            alt="Mobile App"
            sx={{
              height: "100%",
              width: { xs: "60%", sm: "50%", md: "70%" },
              position: "relative",
              zIndex: 2,
            }}
          />

          {/* Floating badge image — hidden on mobile to avoid overflow */}
          <Box
            component="img"
            src={img1}
            alt="badge"
            sx={{
              display: { xs: "none", md: "block" },
              height: "auto",
              width: "100px",
              position: "absolute",
              left: "60%",
              bottom: "65%",
              zIndex: 3,
            }}
          />
        </Box>

        {/* ── Right: Text Content ── */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            flex: 1,
            borderTop: { xs: "none", md: "1px solid #00b4d8" },
            borderLeft: { xs: "none", md: "none" },
            pt: { xs: 0, md: 4 },
          }}
        >
          <Box sx={{ px: { xs: 0, md: 4 } }}>
            <Typography
              sx={{
                color: "#009f9f",
                fontWeight: 600,
                fontSize: { xs: "11px", md: "14px" },
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              [LET'S BUILD SOMETHING AMAZING]
            </Typography>

            <Typography
              sx={{
                color: "#41294a",
                pt: "10px",
                m: "0 0 15px 0",
                fontSize: { xs: "26px", sm: "34px", md: "42px" },
                lineHeight: "1.12em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              GOT A PROJECT? TALK TO OUR IT
              <span style={{ color: "#009f9f" }}> EXPERTS </span>
            </Typography>

            <Typography
              sx={{
                color: "#616263ff",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: 1.8,
              }}
            >
              Share your details and get a free consultation from Vihaan Innovations.
            </Typography>

            {/* ── CTA Button ── */}
            <Box
              sx={{
                mt: { xs: 4, md: "60px" },
                mb: { xs: 4, md: "60px" },
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setOpenPopup(true)}
                sx={{
                  borderRadius: "6px",
                  backgroundColor: "#00b4d8",
                  animation: "pulse 2s infinite",
                  textTransform: "none",
                  width: { xs: "100%", sm: "320px", md: "400px" },
                  py: 1.5,
                  fontSize: { xs: "15px", md: "16px" },
                  fontWeight: 500,
                  "&:hover": { backgroundColor: "#0077b6" },
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(0, 180, 216, 0.4)" },
                    "70%": { transform: "scale(1.05)", boxShadow: "0 0 0 10px rgba(0, 180, 216, 0)" },
                    "100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(0, 180, 216, 0)" },
                  },
                }}
              >
                Get Started
              </Button>

              {/* Arrow — hidden on mobile to avoid overflow issues */}
              <Box
                component="img"
                src={arrow}
                alt="arrow"
                sx={{
                  display: { xs: "none", md: "block" },
                  height: "auto",
                  width: "120px",
                  position: "absolute",
                  right: 0,
                  bottom: "15px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Drop Animation */}
      <style>
        {`
          @keyframes drop {
            0% { top: -50%; }
            100% { top: 110%; }
          }
        `}
      </style>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default OurExpert;

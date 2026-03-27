import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Container, Grid, Button, Stack, useTheme, useMediaQuery, Avatar, Paper } from "@mui/material";
import { motion, useInView, animate } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LanguageIcon from "@mui/icons-material/Language";
import EngineeringIcon from "@mui/icons-material/Engineering";

const audienceData = [
  { icon: <SchoolIcon />, text: "Freshers / Final year Students looking forward to building a career in IT" },
  { icon: <EngineeringIcon />, text: "IT Professionals Seeking Career Change" },
  { icon: <DesktopMacIcon />, text: "Aspiring Web Developers" },
  { icon: <CodeIcon />, text: "Passionate Programmers, Freelancers and Consultants" },
  { icon: <BusinessCenterIcon />, text: "Business Owners and Bloggers" },
  { icon: <LanguageIcon />, text: "Programming Professionals" },
];

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
    <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ display: "flex", width: "100%" }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            width: "100%",
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(0, 180, 216, 0.1)",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0, 180, 216, 0.05)",
            "&:hover": {
              transform: "translateY(-10px) scale(1.03)",
              background: "#ffffff",
              borderColor: "#00b4d8",
              boxShadow: "0 20px 40px rgba(0, 180, 216, 0.12)",
              "& .icon-box": {
                transform: "rotate(10deg) scale(1.1)",
                color: "#00b4d8",
                background: "rgba(0, 180, 216, 0.15)",
              }
            }
          }}
        >
          <Box
            className="icon-box"
            sx={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "rgba(0, 180, 216, 0.08)",
              color: "#00b4d8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              fontSize: "32px",
              transition: "all 0.3s ease",
            }}
          >
            {item.icon}
          </Box>
          <Typography
            sx={{
              color: "#1e293b",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: 1.6,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {item.text}
          </Typography>
        </Paper>
      </motion.div>
    </Grid>
  );
};

const WhoCanApply = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f8fbff", // Clean light blue/white
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0%",
          left: "0%",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 10% 20%, rgba(0, 180, 216, 0.03) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%)",
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "32px", md: "52px" },
                color: "#1e293b",
                mb: 3,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Who Can <span style={{ color: "#00b4d8" }}>Apply</span> for the Course?
            </Typography>
            <Box
              sx={{
                width: "80px",
                height: "4px",
                background: "#00b4d8",
                mx: "auto",
                borderRadius: "2px"
              }}
            />
          </motion.div>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {audienceData.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </Grid>

        {/* Stats Section */}
        <Box
          sx={{
            py: 8,
            px: 4,
            borderRadius: "32px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.03)",
            mb: 10
          }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "50px", md: "72px" },
                    fontWeight: 900,
                    background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1
                  }}
                >
                  <Counter from={0} to={200} />+
                </Typography>
                <Typography sx={{ color: "#64748b", fontWeight: 800, fontSize: "16px", mt: 1, textTransform: "uppercase", letterSpacing: "2px" }}>
                  Students Trained
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={1} sx={{ display: { xs: "none", md: "block" } }}>
              <Box sx={{ height: "60px", width: "1px", bgcolor: "#e2e8f0", mx: "auto" }} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "50px", md: "72px" },
                    fontWeight: 900,
                    background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1
                  }}
                >
                  <Counter from={0} to={500} />+
                </Typography>
                <Typography sx={{ color: "#64748b", fontWeight: 800, fontSize: "16px", mt: 1, textTransform: "uppercase", letterSpacing: "2px" }}>
                  Projects Accomplished
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#1e293b",
                fontWeight: 800,
                fontSize: { xs: "24px", md: "36px" },
                mb: 2,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Experience the power of hands-on learning!
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#00b4d8",
                fontWeight: 700,
                fontSize: { xs: "18px", md: "22px" },
                mb: 6,
                letterSpacing: "0.5px"
              }}
            >
              Elevate Your Skills.
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "18px",
                px: 8,
                py: 2,
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 10px 30px rgba(0, 180, 216, 0.3)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(0, 180, 216, 0.4)",
                  background: "linear-gradient(90deg, #0077b6 0%, #00b4d8 100%)",
                }
              }}
            >
              Enroll Now
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoCanApply;

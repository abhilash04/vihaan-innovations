import React from "react";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import BoltIcon from '@mui/icons-material/Bolt';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkIcon from '@mui/icons-material/Link';

const techStack = [
  "React.js", "Next.js", "Node.js", "PostgreSQL", "AWS / GCP",
  "REST APIs", "WhatsApp API", "Payment Gateway", "DocuSign / eSign", "Google Maps API"
];

const FeatureIcon = ({ icon: Icon, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <Box sx={{
        width: 80, height: 80, borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(0, 155, 186, 0.2) 0%, rgba(0, 147, 176, 0.05) 100%)",
        border: "1px solid rgba(0, 180, 216, 0.3)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: "0 0 30px rgba(0, 180, 216, 0.15)",
        mb: 2,
        color: "#00B4D8",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 0 50px rgba(0, 180, 216, 0.4)",
          transform: "translateY(-5px)"
        }
      }}>
        <Icon sx={{ fontSize: 40 }} />
      </Box>
      <Typography sx={{ color: "#ffffff", fontWeight: 600, fontSize: "16px" }}>
        {label}
      </Typography>
    </Box>
  </motion.div>
);

const RealEstateTechnology = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#0B1120", pt: 16, pb: 12 }}>

      {/* Top Wave SVG matching the solid white of the previous section */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "auto" }}>
          <path d="M0 0H1440V104.148C1087.64 45.4199 824.717 197.669 367.653 104.148C143.498 58.2618 0 120 0 120V0Z" fill="#ffffff" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: "800px", mx: "auto" }}>
          <Typography sx={{ color: "#00B4D8", fontWeight: 600, mb: 2, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", pt: 4 }}>
            Technology
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", mb: 3, fontSize: { xs: "32px", md: "46px" }, lineHeight: 1.2 }}>
            Built with a modern and scalable technology stack
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", lineHeight: 1.6 }}>
            Developed using advanced technologies specially designed for <span><strong>Real Estate CRM Development Software India</strong></span>, ensuring high security, and smooth integrations for real estate platforms.
          </Typography>
        </Box>

        {/* Tech Chips */}
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, mb: 10, maxWidth: "900px", mx: "auto" }}>
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Chip
                label={tech}
                variant="outlined"
                sx={{
                  color: "#ffffff",
                  borderColor: "#00B4D8",

                  bgcolor: "rgba(255,255,255,0.03)",
                  fontSize: "15px",
                  fontWeight: 500,
                  py: 2.5,
                  px: 1,
                  borderRadius: "30px",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.2)",
                    bgcolor: "rgba(0, 180, 216, 0.1)"
                  }
                }}
              />
            </motion.div>
          ))}
        </Box>

        {/* 4 Glowing Icons */}
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "800px", mx: "auto" }}>
          <Grid item xs={6} sm={3}>
            <FeatureIcon icon={BoltIcon} label="Blazing Fast" delay={0.2} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FeatureIcon icon={LockOutlinedIcon} label="Secure by Default" delay={0.3} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FeatureIcon icon={PhoneIphoneIcon} label="Mobile First" delay={0.4} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FeatureIcon icon={LinkIcon} label="Integrations Ready" delay={0.5} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default RealEstateTechnology;

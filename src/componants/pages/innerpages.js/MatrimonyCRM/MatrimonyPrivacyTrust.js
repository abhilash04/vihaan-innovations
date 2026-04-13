import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DialpadIcon from '@mui/icons-material/Dialpad';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BlockIcon from '@mui/icons-material/Block';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

/* ---------- CARD ---------- */
const PrivacyCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ width: "100%", display: "flex" }}
  >
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        p: 1.2,
        borderRadius: "14px",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Box sx={{ color: "#00B4D8", mb: 1 }}>
        <Icon sx={{ fontSize: 36 }} />
      </Box>

      <Typography sx={{ fontWeight: 700, color: "#0B2046", fontSize: "13px" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

/* ---------- DATA ---------- */
const topCards = [
  { icon: VerifiedUserIcon, title: "Photo Privacy" },
  { icon: DialpadIcon, title: "Phone Masking" },
  { icon: FactCheckIcon, title: "Profile Approval" }
];

const bottomCards = [
  { icon: BlockIcon, title: "Report & Block" },
  { icon: SupportAgentIcon, title: "Admin Moderation" },
  { icon: EnhancedEncryptionIcon, title: "Data Security" }
];

/* ---------- MAIN COMPONENT ---------- */
const MatrimonyPrivacyTrust = () => {
  return (
    <Box sx={{ bgcolor: "#0B2046", py: { xs: 6, md: 6 } }}>
      <Container maxWidth="md">

        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography sx={{
            fontWeight: 800,
            color: "#ffffff",
            fontSize: "28px",
            mb: 2
          }}>
            Built for Privacy. Designed for Trust.
          </Typography>

          <Typography sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "16px",
            maxWidth: "800px",
            mx: "auto"
          }}>
            We build secure matchmaking platforms with advanced privacy controls and encryption systems.
          </Typography>
        </Box>

        {/* MAIN BOX */}
        <Box sx={{ maxWidth: "900px", mx: "auto" }}>

          {/* TOP SECTION */}
          <Box
            sx={{
              bgcolor: "#243b5a",
              borderRadius: "20px",
              px: 4,
              py: 5,
              mb: 3,
              textAlign: "center"
            }}
          >
            <Typography sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1px",
              mb: 2,
              mt: 0
            }}>
              CRUCIALLY IMPORTANT
            </Typography>

            <Box sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap"
            }}>
              {topCards.map((card, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    minWidth: "180px",
                    maxWidth: "220px",
                    display: "flex"
                  }}
                >
                  <PrivacyCard {...card} delay={index * 0.1} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* BOTTOM SECTION */}
          <Box sx={{ display: "flex", alignItems: "stretch" }}>

            {/* LEFT LABEL */}
            <Box sx={{
              bgcolor: "#0f4c6e",
              color: "#fff",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              px: 2.5,
              py: 4,
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontWeight: 700,
              letterSpacing: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              Tiered
            </Box>

            {/* RIGHT BOX */}
            <Box sx={{
              flex: 1,
              bgcolor: "#2f4666",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              px: 4,
              py: 6
            }}>
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                flexWrap: "wrap"
              }}>
                {bottomCards.map((card, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      minWidth: "180px",
                      maxWidth: "220px",
                      display: "flex"
                    }}
                  >
                    <PrivacyCard {...card} delay={0.4 + index * 0.1} />
                  </Box>
                ))}
              </Box>
            </Box>

          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default MatrimonyPrivacyTrust;
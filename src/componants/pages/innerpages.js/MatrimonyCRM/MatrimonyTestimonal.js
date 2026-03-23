import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const MatrimonyTestimonal = () => {
    return (
        <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 8 }, position: "relative", overflow: "hidden" }}>
            <Container maxWidth="lg">

                {/* Header */}
                <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                    <Typography sx={{
                        fontWeight: 800,
                        color: "#0B2046",
                        fontSize: { xs: "24px", md: "28px" },
                    }}>
                        Testimonial & Social Proof
                    </Typography>
                </Box>

                {/* Full width quote block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto", px: { xs: 2, md: 6 }, py: 4 }}>
                        <FormatQuoteIcon sx={{ position: "absolute", top: -10, left: 0, fontSize: 80, color: "rgba(0, 180, 216, 0.15)" }} />

                        <Typography sx={{
                            fontWeight: 600,
                            color: "#1A202C",
                            fontSize: { xs: "18px", md: "22px" },
                            lineHeight: 1.6,
                            textAlign: "center",
                            mb: 4,
                            position: "relative",
                            zIndex: 1,
                            fontStyle: "italic"
                        }}>
                            "The platform Vihaan built helped us double our matchmaking speed and build massive trust with families. Their admin tools are incredibly powerful and helped us manage 10,000 profiles with just 3 agents."
                        </Typography>

                        <FormatQuoteIcon sx={{ position: "absolute", bottom: 40, right: 0, fontSize: 80, color: "rgba(0, 180, 216, 0.15)", transform: "scaleX(-1)" }} />

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                            <Box sx={{
                                width: 55,
                                height: 55,
                                borderRadius: "50%",
                                bgcolor: "#E2E8F0",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden"
                            }}>
                                <SupervisedUserCircleIcon sx={{ fontSize: 45, color: "#4A5568", mt: 1 }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 800, color: "#0B2046", fontSize: "16px" }}>
                                    Priya Singh
                                </Typography>
                                <Typography sx={{ color: "#718096", fontSize: "13px", fontWeight: 500 }}>
                                    Founder, Hindu Matrimony Bureau
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </motion.div>

            </Container>
        </Box>
    );
};

export default MatrimonyTestimonal;

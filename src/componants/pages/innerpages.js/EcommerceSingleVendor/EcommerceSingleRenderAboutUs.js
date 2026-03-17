import React from "react";
import { Grid, Typography, Box, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img from '../../../../assets/Aboutus-1.png';
const SideSphere = ({ side }) => (
    <Box
        className="spiral-container"
        sx={{
            position: "absolute",
            top: "50%",
            [side]: "-150px",
            transform: "translateY(-50%)",
            width: "500px",
            height: "500px",
            zIndex: 0,
            pointerEvents: "none",
        }}
    >
        {/* Outer Ring with Traveling Ball */}
        <Box
            sx={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                border: "1px solid rgba(77, 166, 255, 0.15)",
                animation: `rotateSpiral ${side === "left" ? "6s" : "8s"} linear infinite`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "rgba(77, 166, 255, 0.4)",
                    boxShadow: "0 0 10px rgba(77, 166, 255, 0.3)",
                }}
            />
        </Box>

        {/* Middle Ring with Traveling Ball */}
        <Box
            sx={{
                position: "absolute",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                border: "1px dashed rgba(77, 166, 255, 0.1)",
                animation: "rotateSpiralCounter 5s linear infinite",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "rgba(77, 166, 255, 0.4)",
                    boxShadow: "0 0 8px rgba(77, 166, 255, 0.3)",
                }}
            />
        </Box>

        {/* Inner Ring with Traveling Ball */}
        <Box
            sx={{
                position: "absolute",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "1px dotted rgba(77, 166, 255, 0.08)",
                animation: "rotateSpiral 4s linear infinite",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "-4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(77, 166, 255, 0.4)",
                    boxShadow: "0 0 6px rgba(77, 166, 255, 0.3)",
                }}
            />
        </Box>
    </Box>
);

const EcommerceSingleRenderAboutUs = () => {
    return (
        <Box
            sx={{
                py: { xs: 4, md: 8 },
                backgroundColor: "#fff",
                position: "relative",
                overflow: "hidden",
                "@keyframes rotateSpiral": {
                    "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
                    "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
                },
                "@keyframes rotateSpiralCounter": {
                    "0%": { transform: "translate(-50%, -50%) rotate(360deg)" },
                    "100%": { transform: "translate(-50%, -50%) rotate(0deg)" },
                },
                "@keyframes fadeInUp": {
                    from: {
                        opacity: 0,
                        transform: "translateY(30px)",
                    },
                    to: {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                },
            }}
        >
            {/* Symmetrical Side Spheres */}
            <SideSphere side="left" />
            <SideSphere side="right" />
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={6} alignItems="center">
                    {/* Left Side Content */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                backgroundColor: "#f5f5f5",
                                aspectRatio: "1.2 / 1",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                animation: "fadeInUp 1s ease-out 0.4s forwards",
                                opacity: 0,
                            }}
                        >
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={img} alt="about-us-eccomerce" />

                        </Box>
                    </Grid>

                    {/* Right Side Image */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ animation: "fadeInUp 0.8s ease-out forwards" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "32px", md: "46px" },
                                    lineHeight: 1.2,
                                    color: "#1a1a1a",
                                    mb: 2,
                                    fontFamily: "'Inter', sans-serif",
                                }}
                            >
                                Building Websites That  <br />
                                <Box component="span" sx={{ color: "#4da6ff" }}>
                                    Grow Your Business
                                </Box>
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    lineHeight: 1.5,
                                    color: "#4a4a4a",
                                    mb: 2,
                                    animation: "fadeInUp 0.8s ease-out 0.2s forwards",
                                    opacity: 0,
                                }}
                            >
                                At Vihaan Innovations, we help entrepreneurs and businesses
                                establish a strong online presence with professionally designed
                                websites. Whether you're launching a startup, online store, or
                                service business, our expert team creates customized solutions
                                that meet your business goals.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    lineHeight: 1.5,
                                    color: "#4a4a4a",
                                    mb: 4,
                                    animation: "fadeInUp 0.8s ease-out 0.4s forwards",
                                    opacity: 0,
                                }}
                            >
                                We focus on performance, user experience, and modern design to
                                ensure your website not only looks great but also converts
                                visitors into customers.
                            </Typography>
                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: "linear-gradient(to right, #025170, #5699c1)",
                                    color: "#fff",
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    textTransform: "none",
                                    borderRadius: "8px",
                                    transition: "all 0.3s ease",
                                    animation: "fadeInUp 0.8s ease-out 0.6s forwards",
                                    opacity: 0,
                                    "&:hover": {
                                        backgroundColor: "#4da6ff",
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 10px 20px rgba(77, 166, 255, 0.3)",
                                    },
                                }}
                            >
                                Explore Service
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default EcommerceSingleRenderAboutUs;

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import bg from "../../../../assets/bg-vid.jpg";
const BackgroundSection = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 0,
  backgroundImage: `url(${bg})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "100px 0",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    background: "#18124d",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.6,
  },
}));

const SeeHowWeWork = () => {
  return (
    <BackgroundSection>
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: 2,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize:'2.6rem',
            mb: 2,
          }}
        >
          See How We Work
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "16.5px",
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Take control over your business by deploying an all in one business
          data monitoring solution. Take control over your business
        </Typography>

        <Button
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            color: "#18124d",
            fontSize: "32px",
            minWidth: "unset",
            padding: 0,
            lineHeight: 1,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          ▶
        </Button>
      </Box>
    </BackgroundSection>
  );
};

export default SeeHowWeWork;

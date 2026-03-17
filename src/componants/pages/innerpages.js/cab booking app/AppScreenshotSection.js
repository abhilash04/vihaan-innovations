import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Img1 from "../../../../assets/mobile-8.jpg";
import Img2 from "../../../../assets/mobile-9.jpg";
import Img3 from "../../../../assets/mobile-7.jpg";
import BgImg from "../../../../assets/mobile-4.png";

const AppScreenshotSection = () => {
  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", py: 8, px: 2 }}>
      <Grid container alignItems="center">
        {/* Left: Screenshots */}
        <Grid item xs={12} md={7.5}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* First Image - Shifted out slightly on the left */}
            <Box
              component="img"
              src={Img1}
              alt="Screenshot 1"
              sx={{
                height: "450px",
                // objectFit: "cover",
                width: "calc(100% / 3)",
                ml: { xs: 0, md: "-70px", lg: "-140px" },
              }}
            />

            {/* Second Image - Full */}
            <Box
              component="img"
              src={Img2}
              alt="Screenshot 2"
              sx={{
                height: "450px",
                // objectFit: "cover",
                width: "calc(100% / 3)",
              }}
            />

            {/* Third Image - on top of background */}
            <Box
              sx={{
                width: { xs: "100%", md: "calc(100% / 3)" },
                height: { xs: "300px", md: "450px" },
                backgroundImage: `url(${BgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={Img3}
                alt="Screenshot 3"
                sx={{
                  height: { xs: "70%", md: "100%" },
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right: Text */}
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{
            background: "linear-gradient(135deg, #f78361 0%, #fd544e 100%)",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "35px",
              lineHeight: "1.2em",
              color: "#fff",
              mb: "22px",
            }}
          >
            App Screenshot
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontSize: "14px",
              lineHeight: "1.9em",
            }}
          >
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppScreenshotSection;

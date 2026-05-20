import React, { useState } from "react";
import { Grid, Typography, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import PopUps from "../../../common/PopUps";
import img from "../../../../assets/homePageGirlImg.svg";
import banner from "../../../../assets/FreeTrailBanner.png";

const DayFreeTrial = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        minHeight: isMobile ? "auto" : "500px",
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid container>
          {/* Left Content — shown only on desktop now */}
          {!isMobile && (
            <Grid item xs={12} md={5.5}>
              <Box
                component="img"
                src={img}
                alt="Day Free Trial"
                sx={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Grid>
          )}
          {/* Right column */}
          <Grid
            item
            xs={12}
            md={isMobile ? 12 : 6.5}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: isMobile ? 0 : 3.5,
            }}
          >
            <Box sx={{ width: "100%", px: isMobile ? 3 : 14, py: isMobile ? 6 : 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: isMobile ? "28px" : "45px",
                  lineHeight: isMobile ? "38px" : "55px",
                  color: "white",
                  mb: 4,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Enjoy A{" "}
                <span style={{ color: "#f7931e", fontWeight: 600 }}>30-Day Free Trial</span> With No
                Advance Payment.
              </Typography>

              {/* Image shown only on mobile — after the title */}
              {isMobile && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                    mb: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt="Day Free Trial"
                    sx={{
                      width: "90%",
                      maxWidth: "400px",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: isMobile ? "center" : "flex-start",
                  alignItems: "center",
                  mt: isMobile ? 3 : 6,
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => setOpenPopup(true)}
                  sx={{
                    backgroundColor: "#103f6f",
                    color: "white",
                    px: 3.5,
                    py: 1.5,
                    fontSize: isMobile ? "15px" : "17px",
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#4ca6ff",
                    },
                  }}
                >
                  Get Started Now &gt;
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default DayFreeTrial;

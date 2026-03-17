import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import img from "../../../../assets/homePageGirlImg.svg";
import banner from "../../../../assets/FreeTrailBanner.png";
const DayFreeTrial = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        height: "500px",
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid container>
          {/* Left Content */}
          <Grid item xs={12} md={5.5}>
            <Box
              component="img"
              src={img}
              alt="IT Consultation"
              sx={{
                width: "100%",
                height:'500px',
                objectFit: "cover",
              }}
            />
          </Grid>{" "}
          {/* Right column (empty to keep background aligned) */}
          <Grid
            item
            xs={12}
            md={6.5}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 3.5,
            }}
          >
            <Box sx={{ width: "100%", px:14}}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "45px",
                  lineHeight: "55px",
                  color:'white',
                  mb: 4,
                }}
              >
                Enjoy A{" "}
                <span style={{ color: "#f7931e", fontWeight:600 }}>30-Day Free Trial</span> With
                No Advance Payment.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mt: 6,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#103f6f",
                    color: "white",
                    px: 3.5,
                    py: 1.5,
                    fontSize: "17px",
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
    </Box>
  );
};

export default DayFreeTrial;

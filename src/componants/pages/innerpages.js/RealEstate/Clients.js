import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import img1 from "../../../../assets/slider-1.jpg";
import img2 from "../../../../assets/slider-1.jpg";
import img3 from "../../../../assets/slider-1.jpg";
import img4 from "../../../../assets/slider-1.jpg";
import img5 from "../../../../assets/slider-1.jpg";
import img6 from "../../../../assets/slider-1.jpg";
import img7 from "../../../../assets/slider-1.jpg";
import img8 from "../../../../assets/slider-1.jpg";
import img9 from "../../../../assets/slider-1.jpg";
import img10 from "../../../../assets/slider-1.jpg";

const logoList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Clients() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const gridXS = isMobile ? 2.4 : 2.4;

  return (
    <Box
      sx={{
        width: "100%",
        py: isMobile ? 2 : 5,
        background: "#fff",
        mx: "auto", maxWidth: 1200
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={8} md={8} sx={{ mx: "auto", maxWidth: 1200 }}>
          <Divider
            sx={{
              mb: isMobile ? 2 : 4,
              "&::before,&::after": { borderColor: "#e3e3e3", borderWidth: 2 },
            }}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              fontWeight={600}
              sx={{
                background: "#fff",

                letterSpacing: 0.5,
                color: "#222",
              }}
              align="center"
            >
              Our Happy Clients
            </Typography>
          </Divider>
          <Grid
            container
            spacing={isMobile ? 2 : 3}
            justifyContent="center"
            alignItems="center"
          >
            {logoList.map((logo, idx) => (
              <Grid
                item
                key={idx}
                xs={gridXS}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: isMobile ? 90 : 160,
                    height: isMobile ? 55 : 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    p: 1,
                    border: "1px solid #eee",
                    background: "#fff",
                  }}
                >
                  <img
                    src={logo}
                    alt={`client-logo-${idx}`}
                    style={{
                      maxWidth: "85%",
                      maxHeight: isMobile ? "38px" : "50px",
                      objectFit: "contain",
                      margin: "auto",
                      display: "block",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Clients;

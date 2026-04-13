import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import img1 from "../../../../assets/1-1.png";

function Banner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box maxWidth={1200} mx="auto" sx={{ mt: 10, mb: 2, px: isMobile ? 2 : 0 }}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: 5,
          overflow: "hidden",
          padding: isMobile ? 4 : 5,
          background: `
            repeating-linear-gradient(#1157ce 0 2px, transparent 2px 40px), 
            repeating-linear-gradient(90deg, #1157ce 0 2px, transparent 2px 40px), 
            linear-gradient(120deg, #1456ff 70%, #0a2367 100%)
          `,
          color: "#fff",
          position: "relative",
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignContent="center"
          sx={{ textAlign: isMobile ? "center" : "left" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              paddingBottom: isMobile ? 3 : 0,
            }}
          >
            <Typography variant="h3" fontWeight={600} gutterBottom>
              Real Estate Portal Development for Modern Property Businesses
            </Typography>
            <Typography variant="body1" sx={{ mb: isMobile ? 3 : 2 }}>
              We build scalable real estate portal development solutions including property listing platforms, CRM integrations, agent dashboards, and mobile-ready portals.Launch your own real estate marketplace similar to Zillow or MagicBricks with advanced search, property management tools, and lead generation features.
            </Typography>
            <Grid
              container
              spacing={isMobile ? 1 : 2}
              justifyContent={isMobile ? "center" : "flex-start"}
              alignItems="center"
            >
              {[1, 2, 3, 4].map((i) => (
                <Grid item key={i}>
                  <img
                    src={img1}
                    height={isMobile ? "60px" : "100px"}
                    width={isMobile ? "60px" : "100px"}
                    alt={`award ${i}`}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                boxShadow: 4,
                p: isMobile ? 1 : 3,
                width: "100%",
                maxWidth: isMobile ? "100%" : 380,
                mx: isMobile ? 0 : "auto",
                color: "#222",
              }}
            >
              <Typography
                variant="subtitle1"
                align="center"
                fontWeight={600}
                sx={{
                  background: "#e0e6f6",
                  p: 1,
                  borderRadius: 2,
                  mb: 2,
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                Get Answers to Your Questions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="First Name*" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="Last Name*" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Phone Number*"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Select
                            defaultValue="+91"
                            size="small"
                            sx={{
                              minWidth: 62,
                              background: "#f5f8ff",
                              borderRadius: 2,
                            }}
                          >
                            <MenuItem value="+91">+91</MenuItem>
                            <MenuItem value="+1">+1</MenuItem>
                            <MenuItem value="+44">+44</MenuItem>
                          </Select>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Business Email*"
                    type="email"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select size="small" defaultValue="" displayEmpty fullWidth>
                    <MenuItem value="" disabled>
                      Select Services*
                    </MenuItem>
                    <MenuItem value={"Web App Development"}>
                      Web App Development
                    </MenuItem>
                    <MenuItem value={"Mobile App Development"}>
                      Mobile App Development
                    </MenuItem>
                    <MenuItem value={"Custom Solutions"}>
                      Custom Solutions
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Message*"
                    multiline
                    rows={3}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background:
                        "linear-gradient(90deg, #1456ff 65%, #2b79ff 100%)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 16,
                      borderRadius: 2,
                      py: isMobile ? 0.8 : 1.2,
                      mt: isMobile ? 0 : 1,
                      boxShadow: 2,
                      textTransform: "none",
                      "&:hover": { background: "#0a2367" },
                    }}
                  >
                    Let's Connect
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Banner;

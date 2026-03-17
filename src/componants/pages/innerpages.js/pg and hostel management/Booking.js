import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function Booking() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box m={{ xs: 1, md: 2 }} >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#4054e6",
          borderRadius: 3,
          py: { xs: 5, md: 4 },
          px: { xs: 4, md: 4 },
          maxWidth:1000,
          mx:"auto"
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={isMobile ? 3 : 0}
          direction={isMobile ? "column" : "row"}
          
        >
          <Grid item xs= {12} md= {8}>
            <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: 20, md: 32 },
                }}
              >
                Ready to Automate Your PG?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: { xs: 13, md: 16 },
                }}
              >
                Simplify PG Management with Smart, Automated Tools
              </Typography>
            </Box>
          </Grid>

          <Grid
            item xs={12} md={4}
            sx={{
              textAlign: isMobile ? "center" : "right",
              mt: isMobile ? 3 : 0,
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "#4054e6",
                borderRadius: 2,
                fontSize: { xs: 16, md: 18 },
                fontWeight: 700,
                boxShadow: "none",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#e5e9ff",
                },
              }}
            >
              Book a demo
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Booking;

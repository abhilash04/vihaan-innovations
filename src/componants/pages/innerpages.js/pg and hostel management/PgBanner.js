import React, { useState } from "react";
import { PlayArrow, Menu } from "@mui/icons-material";
import {
  Button,
  Grid,
  Typography,
  Paper,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PopUps from "../../../common/PopUps";
import img1 from "../../../../assets/system1.jpg";

function PgBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <Box
      sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          color: "white",
          pt: { xs: 8, md: 16 },
          pb: { xs: 3, md: 6 },
          maxWidth: 1200,
          mx: "auto",
        }}
        spacing={6}
        direction={isMobile ? "column" : "row"}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
              fontSize: { xs: "1.7rem", md: "3rem" },
            }}
          >
            Complete{" "}
            <Box component="span" sx={{ color: "#FFD54F", display: "inline" }}>
              PG Management Software
            </Box>{" "}
            & Paying Guest App
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.7,
              maxWidth: 360,
            }}
          >
            Streamline your paying guest business with our comprehensive PG
            software.
            <br />
            Manage rent collection, tenant records, and hostel operations
            efficiently.
            <br />
            Available as web-based PG management software and mobile paying
            guest app.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
            <Button
              variant="contained"
              onClick={() => setOpenPopup(true)}
              startIcon={<PlayArrow />}
              sx={{
                backgroundColor: "#00C853",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 3,
                px: 3,
                "&:hover": { backgroundColor: "#00B94A" },
              }}
            >
              Start 2 Months Free Trial
            </Button>
            <Button
              variant="outlined"
              startIcon={<Menu />}
              sx={{
                borderColor: "#C7BFFF",
                color: "white",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 3,
                px: 3,
                "&:hover": {
                  borderColor: "#FFF",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              View Features
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 4, mt: 2 }}>
            {[
              { value: "500+", label: "PGs Managed" },
              { value: "10K+", label: "Tenants" },
              { value: "20+", label: "Cities" },
            ].map((item, index) => (
              <Box key={index} sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#FFD54F" }}
                >
                  {item.value}
                </Typography>
                <Typography variant="body2">{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Paper
            elevation={6}
            sx={{
              borderRadius: 6,
              p: 2,
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              display: "inline-block",
            }}
          >
            <Box
              component="img"
              src={img1}
              alt="PG Management Before and After"
              sx={{
                width: "100%",
                margin: 2,
                borderRadius: 4,
                height: "auto",
                display: "block",
                boxShadow: 1,
                background: "rgba(76, 68, 100, 0.13)",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
}

export default PgBanner;

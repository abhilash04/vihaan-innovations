import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupsIcon from "@mui/icons-material/Groups";
import pgImage from "../../../../assets/afterbefore.jpg";

const USERS = [
  {
    icon: <ApartmentIcon sx={{ fontSize: 38, color: "#4054E6" }} />,
    title: "PG Owners & Landlords",
    desc: "To automate rent collection, track payments, and monitor occupancy without manual work. Colleges & Universities with large hostels",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 38, color: "#4054E6" }} />,
    title: "Property Managers",
    desc: "To efficiently handle multiple PG properties from a single dashboard.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 38, color: "#4054E6" }} />,
    title: "Hostel & Dorm Operators",
    desc: "To manage bookings, maintenance, and tenant records digitally.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 38, color: "#4054E6" }} />,
    title: "Co-Living Space Managers",
    desc: "To streamline tenant onboarding, agreements, and shared expense tracking.",
  },
];

function SoftwareSolution() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 5, md: 4 },
        maxWidth: "1300px",
        mx: "auto",
      }}
    >
      <Grid
        container
        spacing={isMobile ? 4 : 8}
        alignItems="center"
        justifyContent="center"
        direction={isMobile ? "column-reverse" : "row"}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: 26, md: 42 },
              lineHeight: 1.3,
              color: "#000",
            }}
          >
            Who Should Use a PG
            <br /> Management Software Solution
          </Typography>

          {USERS.map((user, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 3,
                gap: 2,
              }}
            >
              <Box sx={{ mt: 0.5 }}>{user.icon}</Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#000",
                    fontSize: { xs: 15, md: 17 },
                    mb: 0.5,
                  }}
                >
                  {user.title}{" "}
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 400,
                      color: "#333",
                    }}
                  >
                    – {user.desc}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid
          item xs={12} md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          <Box
            component="img"
            src={pgImage}
            alt="PG Management Illustration"
            sx={{
              width: "100%",
              maxWidth: 520,
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SoftwareSolution;

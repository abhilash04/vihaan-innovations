import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

const segments = [
  {
    id: 1,
    title: "Residential Real Estate",
    short:
      "Stand out for your residential real estate clients with robust software.",
    details:
      "Stand out for your residential real estate clients with robust software simplifying sales and acquisition. We offer residential real estate software solutions that cater to your needs and give you a competitive edge over others.",
    points: [
      "Acquire the right insights into your operation",
      "Get the right data on sales and acquisition",
      "Access quality leads that boost your operation",
    ],
    icon: <HomeOutlinedIcon sx={{ color: "#fff" }} />,
  },
  {
    id: 2,
    title: "Commercial Real Estate",
    short:
      "Amplify your returns with commercial real estate solutions that simplify operations.",
    details:
      "Boost your commercial real estate portfolio with data-driven solutions that streamline property management, leasing, and analytics.",
    points: [
      "Automate commercial property processes",
      "Enhance leasing and rent management",
      "Increase ROI through smart insights",
    ],
    icon: <StoreOutlinedIcon sx={{ color: "#2250cc" }} />,
  },
  {
    id: 3,
    title: "Industrial Real Estate",
    short:
      "Industrial real estate is a vast industry requiring equally vast solutions.",
    details:
      "Manage warehouses and logistics with software that helps track, optimize, and monitor operations seamlessly.",
    points: [
      "Track assets efficiently",
      "Enhance industrial property performance",
      "Reduce downtime with predictive analytics",
    ],
    icon: <BusinessOutlinedIcon sx={{ color: "#2250cc" }} />,
  },
  {
    id: 4,
    title: "Property Marketplace",
    short:
      "Ensure all your listings get the right attention with a property marketplace.",
    details:
      "Manage property listings, buyer interactions, and lead acquisition through intelligent marketplace solutions.",
    points: [
      "Connect buyers and sellers seamlessly",
      "Increase engagement with smart recommendations",
      "Simplify property listing management",
    ],
    icon: <ApartmentOutlinedIcon sx={{ color: "#2250cc" }} />,
  },
];

function RealEstateSegments() {
  const [active, setActive] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #edf2ff 0%, #b3dcff 100%)",
        py: isMobile ? 5 : 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h4"}
        fontWeight={700}
        color="#222"
        textAlign="center"
        sx={{ mb: 2 }}
      >
        Different Real Estate Segments We Serve
      </Typography>

      <Typography
        variant="body1"
        color="#444"
        textAlign="center"
        sx={{
          mb: isMobile ? 4 : 6,
          maxWidth: 800,
          lineHeight: 1.6,
        }}
      >
        We design real-estate solutions for businesses at every scale. No matter
        your unique needs, we create robust solutions to match your operations.
      </Typography>

      <Grid
        container
        spacing={isMobile ? 2 : 2}    // less space between columns
        direction={isMobile ? "column" : "row"}
        alignItems="flex-start"
        justifyContent="center"
        sx={{ width: '100%', mx: 'auto' }}
      >
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="flex-end">
          {segments.map((item) => (
            <Paper
              key={item.id}
              onClick={() => setActive(item.id)}
              sx={{
                backgroundColor: active === item.id ? "#0a2472" : "#fff",
                color: active === item.id ? "#fff" : "#000",
                p: 2,
                borderRadius: "12px",
                mb: 2,
                cursor: "pointer",
                boxShadow:
                  active === item.id
                    ? "0 4px 12px rgba(0,0,0,0.2)"
                    : "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                transition: "all 0.3s ease",
                maxWidth: isMobile ? "100%" : 350,
                width: "100%",
              }}
            >
              <Box>{item.icon}</Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: active === item.id ? "#e0e8ff" : "#666",
                    lineHeight: 1.4,
                  }}
                >
                  {item.short}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="flex-start">
          <Paper
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              p: isMobile ? 2.5 : 5,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              minHeight: 390,
              maxWidth: isMobile ? "100%" : 350,  
              width: "100%",
              mx: "auto",
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
              <HomeOutlinedIcon sx={{ color: "#2250cc", fontSize: 28 }} />
              <Typography variant="h6" fontWeight={700}>
                {segments.find((s) => s.id === active)?.title}
              </Typography>
            </Grid>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: "#444",
                lineHeight: 1.6,
              }}
            >
              {segments.find((s) => s.id === active)?.details}
            </Typography>

            <ul>
              {segments
                .find((s) => s.id === active)
                ?.points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "8px",
                      color: "#333",
                      fontSize: "0.95rem",
                    }}
                  >
                    {point}
                  </li>
                ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RealEstateSegments;
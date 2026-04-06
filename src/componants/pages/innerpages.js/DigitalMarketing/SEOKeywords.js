import React from "react";
import { Box, Container, Typography, Stack, Link } from "@mui/material";

const SEOKeywords = () => {
  const localities = [
    "Marathahalli", "Koramangala", "Indiranagar", "Electronic City", "Whitefield",
    "Jayanagar", "HSR Layout", "Rajajinagar", "JP Nagar", "Yelahanka",
    "Bannerghatta Road", "Rt Nagar", "Chickpete", "Vijayanagar", "Hebbal",
    "BTM Layout", "Malleshwaram", "Yeshwanthpur", "Kaggadasapura", "Bellandur"
  ];

  const cities = [
    "Bangalore", "Mumbai", "Chennai", "Delhi", "Hyderabad", "Pune",
    "Ahmedabad", "Kolkata", "Lucknow", "Jaipur", "Indore", "Kochi",
    "Coimbatore", "Nagpur", "Ludhiana", "Agra", "Surat", "Madurai",
    "Vadodara", "Meerut", "Thiruvananthapuram", "Nashik", "Gurgaon",
    "Noida", "Chandigarh", "Visakhapatnam", "Bhopal", "Patna", "Gazaibad"
  ];

  const countries = [
    "India", "USA", "UK", "Canada", "Australia", "Germany",
    "UAE", "Singapore", "Japan", "Netherlands", "France",
    "Switzerland", "Sweden", "Norway", "South Korea", "Israel", "Ireland",
    "New Zealand", "South Africa", "Brazil"
  ];

  const KeywordGroup = ({ title, items, keywordPrefix }) => (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: "18px",
          fontWeight: 800,
          color: "#0f172a",
          mb: 2,
          fontFamily: "'Syne', sans-serif"
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "13px",
          color: "#64748b",
          lineHeight: 2,
          textAlign: "justify",
          fontWeight: 500
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={`#`}
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#2563eb" }
              }}
            >
              {keywordPrefix} in {item}
            </Link>
            {index < items.length - 1 && " | "}
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ py: 8, bgcolor: "#f1f5f9", borderTop: "1px solid #e2e8f0" }}>
      <Container maxWidth="lg">
        <KeywordGroup
          title="Digital Marketing Services Across Bangalore"
          items={localities}
          keywordPrefix="Digital Marketing Services"
        />
        <KeywordGroup
          title="Leading Digital Marketing Company in Major Cities"
          items={cities}
          keywordPrefix="Digital Marketing Services"
        />
        <KeywordGroup
          title="International SEO & Performance Marketing"
          items={countries}
          keywordPrefix="Digital Marketing Services"
        />

        <Box sx={{ mt: 8, pt: 4, borderTop: "1px solid #cbd5e1" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", mb: 2 }}>
            Digital Marketing & Social Media Growth in Bangalore
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#64748b", lineHeight: 1.8 }}>
            Vihaan Innovations is a full-service digital marketing agency that offers digital marketing services alongside ROI-focused marketing. From advanced SEO and Google Ads management to creative social media campaigns and in-depth analytics, we help brands in Bangalore and across the globe climb search rankings and build lasting customer relationships.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SEOKeywords;

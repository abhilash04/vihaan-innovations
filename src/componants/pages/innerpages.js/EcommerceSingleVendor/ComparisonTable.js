import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { keyframes, styled } from "@mui/system";
import PopUps from "../../../common/PopUps";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shimer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const data = [
  {
    feature: "Experience",
    webmind: { type: "check", text: "12+ Years Expertise" },
    freelance: { type: "cross", text: "Limited" },
    others: { type: "cross", text: "8–10 Years" },
  },
  {
    feature: "Certified Developers",
    webmind: { type: "check", text: "Magento, Shopify, Google" },
    freelance: { type: "cross", text: "Not Certified" },
    others: { type: "cross", text: "Limited Certifications" },
  },
  {
    feature: "Custom Website Solutions",
    webmind: { type: "check", text: "Fully Tailored" },
    freelance: { type: "cross", text: "Basic Templates" },
    others: { type: "warn", text: "Semi-Custom" },
  },
  {
    feature: "Platform Expertise",
    webmind: { type: "check", text: "Multi-Platform" },
    freelance: { type: "cross", text: "Shopify only" },
    others: { type: "warn", text: "2-3 platforms" },
  },
  {
    feature: "SEO Ready Websites",
    webmind: { type: "check", text: "Included" },
    freelance: { type: "cross", text: "Extra cost" },
    others: { type: "warn", text: "Basic SEO" },
  },
  {
    feature: "Support & Maintenance",
    webmind: { type: "check", text: "24/7 Support" },
    freelance: { type: "cross", text: "Limited" },
    others: { type: "warn", text: "Monthly only" },
  },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#fafafa",
  },
}));

const HeaderCell = styled(TableCell)({
  backgroundColor: "#f5f5f5",
  color: "#333",
  fontWeight: "700 !important",
  fontSize: "14px",
  p: "14px 20px !important",
  borderBottom: "2px solid #eee",
  borderRight: "1px solid #eee",
  textAlign: "center",
  "&:last-child": {
    borderRight: "none",
  }
});

const FeatureCell = styled(TableCell)({
  color: "#444",
  fontWeight: "600 !important",
  fontSize: "14px",
  p: "14px 24px !important",
  backgroundColor: "#fff",
  borderBottom: "1px solid #f0f0f0",
  borderRight: "1px solid #f0f0f0",
  textAlign: "left",
});

const VihaanCell = styled(TableCell)({
  backgroundColor: "#f9fbff",
  color: "#3f51b5",
  fontWeight: "600 !important",
  fontSize: "14px",
  p: "14px 24px !important",
  borderBottom: "1px solid #eef2ff",
  borderRight: "1px solid #eef2ff",
  textAlign: "center",
});

const NormalCell = styled(TableCell)({
  color: "#666",
  fontSize: "14px",
  p: "14px 24px !important",
  borderBottom: "1px solid #f0f0f0",
  borderRight: "1px solid #f0f0f0",
  textAlign: "center",
  "&:last-child": {
    borderRight: "none",
  }
});

const renderIcon = (type) => {
  if (type === "check") return <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: 18 }} />;
  if (type === "cross") return <CancelIcon sx={{ color: "#f44336", fontSize: 18 }} />;
  if (type === "warn") return <WarningAmberIcon sx={{ color: "#FFC107", fontSize: 18 }} />;
  return null;
};

export default function ComparisonTable() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Box sx={{ py: 4, px: 3, maxWidth: "1100px", mx: "auto", backgroundColor: "#fff" }}>
      <Box sx={{ textAlign: "center", mb: 6, animation: `${fadeIn} 1s ease` }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "36px",
            color: "#1a1a1a",
            mb: 2,
            letterSpacing: "-0.5px",
            textAlign: "center"
          }}
        >
          Why Businesses Choose Vihaan Innovations
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            color: "#777",
            maxWidth: "700px",
            mx: "auto",
            lineHeight: 1.5,
            textAlign: "center"
          }}
        >
          A detailed comparison showcasing our commitment to quality, expert solutions, and 24/7 support <br />for your single vendor ecommerce website success.
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: "16px",
          border: "1px solid #eee",
          overflow: "hidden"
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <HeaderCell sx={{ textAlign: "left", pl: 3 }}>Key Feature</HeaderCell>
              <HeaderCell sx={{
                backgroundColor: "#f0f4ff",
                color: "#3f51b5",
                position: "relative",
                overflow: "hidden"
              }}>
                Vihaan Innovations
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    animation: `${shimer} 2.5s infinite`,
                  }}
                />
              </HeaderCell>
              <HeaderCell>Freelancers</HeaderCell>
              <HeaderCell>Other Agencies</HeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                <FeatureCell>{row.feature}</FeatureCell>

                <VihaanCell>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    pl: { md: 3, xs: 1 }, // Standardized padding for all columns
                  }}>
                    <Box sx={{ display: "flex", width: 24, justifyContent: "center", mr: 1.5, flexShrink: 0 }}>
                      {renderIcon(row.webmind.type)}
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "14px", whiteSpace: "normal", textAlign: "left" }}>
                      {row.webmind.text}
                    </Typography>
                  </Box>
                </VihaanCell>

                <NormalCell>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    pl: { md: 3, xs: 1 },
                  }}>
                    <Box sx={{ display: "flex", width: 24, justifyContent: "center", mr: 1.5, flexShrink: 0 }}>
                      {renderIcon(row.freelance.type)}
                    </Box>
                    <Typography sx={{ fontSize: "14px", whiteSpace: "normal", textAlign: "left", color: "#666" }}>
                      {row.freelance.text}
                    </Typography>
                  </Box>
                </NormalCell>

                <NormalCell>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    pl: { md: 3, xs: 1 },
                  }}>
                    <Box sx={{ display: "flex", width: 24, justifyContent: "center", mr: 1.5, flexShrink: 0 }}>
                      {renderIcon(row.others.type)}
                    </Box>
                    <Typography sx={{ fontSize: "14px", whiteSpace: "normal", textAlign: "left", color: "#666" }}>
                      {row.others.text}
                    </Typography>
                  </Box>
                </NormalCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Why This Matters Section */}
      <Box
        sx={{
          mt: 1,
          p: { xs: 4, md: 6 },
          textAlign: "center",
          animation: `${fadeIn} 1.2s ease`,
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "28px", md: "36px" },
            color: "#1a1a1a",
            mb: 3,
            letterSpacing: "-0.5px",
          }}
        >
          Why This Matters for Your Business
        </Typography>

        <Box sx={{ maxWidth: "900px", mx: "auto", mb: 5 }}>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#444",
              lineHeight: 1.2,
              width: 800,
              mb: 2,
              fontWeight: 500,
              textAlign: "center",
              mx: "auto"

            }}
          >
            Choosing the right partner ensures your single vendor ecommerce app is professional, scalable, <br />and ready to attract customers and drive sales.
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#444",
              lineHeight: 1.2,
              width: 800,
              mb: 1,
              fontWeight: 500,
              textAlign: "center",
              mx: "auto"
            }}
          >
            With Vihaan Innovations, you get expert developers, modern design, strong SEO foundations,
            and ongoing support to help your single vendor ecommerce app succeed online.
          </Typography>
        </Box>

        <Box
          component="button"
          onClick={() => setOpenPopup(true)}
          sx={{
            backgroundColor: "#3f51b5",
            color: "white",
            border: "none",
            borderRadius: "50px",
            padding: "16px 40px",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            boxShadow: "0 10px 20px rgba(63, 81, 181, 0.2)",
            "&:hover": {
              backgroundColor: "#283593",
              transform: "translateY(-5px) scale(1.05)",
              boxShadow: "0 15px 30px rgba(63, 81, 181, 0.35)",
            },
            "&:active": {
              transform: "scale(0.98)",
            }
          }}
        >
          Build Your Website
          <Box
            component="span"
            sx={{
              display: "flex",

              transition: "transform 0.3s ease",
              ".MuiBox-root:hover &": {
                transform: "translateX(5px)"
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </Box>
      </Box>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
}

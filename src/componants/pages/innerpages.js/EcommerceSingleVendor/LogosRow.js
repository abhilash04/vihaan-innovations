import React from "react";
import { Box, Typography } from "@mui/material";

// 👇 Import logos
import logo1 from "../../../../assets/facebook.svg";
import logo2 from "../../../../assets/whatsapp.svg";
import logo3 from "../../../../assets/amazonAds.svg";
import logo4 from "../../../../assets/instagram.svg";
import logo5 from "../../../../assets/shipRocket.svg";
import logo6 from "../../../../assets/wooCommerce.svg";
import logo7 from "../../../../assets/TallyPrimeNew.svg";
import logo8 from "../../../../assets/myntra.svg";
import logo9 from "../../../../assets/amazon1.svg";
import logo10 from "../../../../assets/flipkart.svg";
import logo11 from "../../../../assets/zoho.svg";
import logo12 from "../../../../assets/nykaaFashion.svg";
import logo13 from "../../../../assets/meesho.svg";
import logo14 from "../../../../assets/firstcry.svg";
import logo15 from "../../../../assets/ajio.svg";
import logo16 from "../../../../assets/tataCliq.svg";
import logo17 from "../../../../assets/cashfree.svg";
import logo18 from "../../../../assets/paytm.svg";
import logo19 from "../../../../assets/razorpay.svg";
import logo20 from "../../../../assets/amazonAds.svg";

const LogosRow = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
  ];

  return (
    <Box sx={{ py: 8, overflow: "hidden" }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            fontSize: { xs: "20px", md: "26px" },
            color: "#222",
            mb: 4,
          }}
        >
          Trusted As The Best CRM for Multi-Channel E-commerce by Leaders
          Nationwide
        </Typography>
      </Box>

      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            animation: "scrollLeft 40s linear infinite",
            gap: 4,
            alignItems: "center",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {[...logos, ...logos].map((src, idx) => (
            <Box
              key={idx}
              component="img"
              src={src}
              alt={`logo-${idx}`}
              sx={{
                height: 50,
                width: "auto",
                flexShrink: 0,
              }}
            />
          ))}
        </Box>
      </Box>

      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LogosRow;

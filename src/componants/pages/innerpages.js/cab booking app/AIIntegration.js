import React from "react";
import { Box, Grid, Typography, Button, Stack, Avatar } from "@mui/material";

const AIIntegrationSection = () => {
  // AI integration icons (using placeholders - replace with actual icons)
  const logoData = [
    {
      name: "ChatGPT",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Grammarly",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Grammarly_Logo.png",
    },
    {
      name: "Gemini",
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Google_Gemini_logo.svg",
    },
    {
      name: "Claude",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Anthropic_logo.svg/320px-Anthropic_logo.svg.png",
    },
  ];

  const logoData1 = [
    {
      name: "Google Translate",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png",
    },
    {
      name: "Google Ads",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Google_Ads_logo.svg",
    },
    {
      name: "HubSpot",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/35/HubSpot_Logo.png",
    },
    {
      name: "Tidio",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tidio_logo_icon.svg/2048px-Tidio_logo_icon.svg.png",
    },
    {
      name: "Make.com",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Make_%28formerly_Integromat%29_logo.svg",
    },
  ];

  // Curved connector component with custom curves
  const CurvedConnector = ({ direction = "left", index }) => {
    const isLeft = direction === "left";

    // Custom curve control points for each index to match images
    const leftCurveHeights = [50, 35, 35, 50, 75];
    const rightCurveHeights = [75, 35, 35, 50, 50];

    const curveHeight = isLeft
      ? leftCurveHeights[index]
      : rightCurveHeights[index];

    return (
      <svg
        width="100%"
        height="60"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: isLeft ? "calc(100% - 30px)" : "30px",
          zIndex: 0,
        }}
      >
        <path
          d={
            isLeft
              ? `M 0,30 Q 100,${curveHeight} 200,30`
              : `M 200,30 Q 100,${curveHeight} 0,30`
          }
          fill="transparent"
          stroke="#7e22ce"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
      </svg>
    );
  };

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#fafafa" }}>
      {/* Integration visualization */}
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Left side icons */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
              }}
            >
              <Stack
                spacing={4}
                sx={{ position: "relative", paddingLeft: "50px" }}
              >
                {logoData.map((item, index) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    {/* Dashed path for each curve */}
                    <Box
                      sx={{
                        width: "100px",
                        height: "80px",
                        position: "absolute",
                        left: "80px",
                        top: "0",
                        zIndex: 1,
                      }}
                    >
                      <svg width="100" height="80">
                        <path
                          d={`M 0 40 Q 50 ${40 - (index - 2) * 30}, 100 40`}
                          stroke="#ccc"
                          strokeWidth="2"
                          fill="transparent"
                          strokeDasharray="6,4"
                          style={{
                            stroke:
                              index === 0 || index === 4 ? "#A855F7" : "#ccc", // purple accent on outer curves
                          }}
                        />
                      </svg>
                    </Box>

                    {/* Avatar (Logo) */}
                    <Avatar
                      src={item.src}
                      alt={item.name}
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: "#fff",
                        boxShadow: 3,
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Center content */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#7e22ce",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: 1.5,
                  mb: 2,
                  display: "block",
                }}
              >
                Integrated Solutions
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "28px", md: "36px" },
                }}
              >
                Power Up Your Content <br /> with AI Integrations
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  mb: 4,
                  color: "#666",
                  fontSize: "18px",
                  lineHeight: 1.6,
                }}
              >
                Enhance your writing with seamless AI integrations. Connect to
                leading tools for creative content, grammar perfection,
                multilingual support, and SEO optimization—all in one place.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7e22ce",
                  color: "#fff",
                  px: 5,
                  py: 1.5,
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(126, 34, 206, 0.4)",
                  "&:hover": {
                    backgroundColor: "#6b21a8",
                    boxShadow: "0 6px 20px rgba(126, 34, 206, 0.5)",
                  },
                }}
              >
                Try it Now
              </Button>
            </Box>
          </Grid>

          {/* Right side icons */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
              }}
            >
              <Stack
                spacing={4}
                sx={{ position: "relative", paddingLeft: "50px" }}
              >
                {logoData1.map((item, index) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    {/* Dashed path for each curve */}
                    <Box
                      sx={{
                        width: "100px",
                        height: "80px",
                        position: "absolute",
                        left: "-80px",
                        top: "0",
                        zIndex: 1,
                      }}
                    >
                      <svg width="100" height="80">
                        <path
                          d={`M 0 40 Q 50 ${40 - (index - 2) * 30}, 100 40`}
                          stroke="#ccc"
                          strokeWidth="2"
                          fill="transparent"
                          strokeDasharray="6,4"
                          style={{
                            stroke:
                              index === 0 || index === 4 ? "#A855F7" : "#ccc", // purple accent on outer curves
                          }}
                        />
                      </svg>
                    </Box>

                    {/* Avatar (Logo) */}
                    <Avatar
                      src={item.src}
                      alt={item.name}
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: "#fff",
                        boxShadow: 3,
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AIIntegrationSection;

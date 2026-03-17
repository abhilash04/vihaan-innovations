import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useTheme,
  useMediaQuery
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../../../../assets/2.png"
import img2 from "../../../../assets/3.png"
import img3 from "../../../../assets/4.png"


const resources = [
  {
    img: img1,
    title: "Generative AI in eCommerce: Transforming the Onlin...",
    text: "Have you ever wondered how big brands like Amazon and Netflix remain on...",
    link: "#"
  },
  {
    img: img2,
    title: "Retail Revolution Stories: Top Brands are Digital...",
    text: "The retail industry is undergoing a technological transformation with the advancement of technology...",
    link: "#"
  },
  {
    img: img3,
    title: "Is Ecommerce Personalization at Scale?...",
    text: "Today is the era of connectivity with different channels. The commitm...",
    link: "#"
  }
];

function Resources() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: isMobile ? 2 : 6,
        px: isMobile ? 1 : 0,
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h5"}
        sx={{
          fontWeight: 700,
          mb: isMobile ? 2 : 4,
          textAlign: "left"
        }}
      >
        Explore Our Resources On Real Estate Solutions
      </Typography>
      <Grid
        container
        spacing={isMobile ? 2 : 3}
        justifyContent={isMobile ? "center" : "flex-start"}
      >
        {resources.map((card, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={idx}
            sx={{
              display: "flex"
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                minHeight: 280,
                borderRadius: 2,
                boxShadow: "0 2px 8px #e6ebf8",
                border: "1px solid #ededed",
                justifyContent: "space-between"
              }}
            >
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{ height: 150, objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {card.text}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ px: 2, pb: 2, pt: 0, justifyContent: "flex-start" }}
              >
                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    pl: 0,
                    color: theme.palette.text.primary,
                    fontSize: "1rem"
                  }}
                  href={card.link}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Resources;

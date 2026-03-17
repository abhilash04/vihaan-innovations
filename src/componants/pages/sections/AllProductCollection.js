import React, { useState } from "react";
import {
  Box,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Rating,
  Stack,
  Chip,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import CategoryMenuCollection from "./CategoryMenuCollection";
import { Link, useLocation } from "react-router-dom";

const AllProductCollection = () => {
  const allProducts = {
    All: [
      {
        title: "A2 Desi Cow Ghee",
        subtitle: "5L Dolchi",
        description: "Same Richness | Timeless Packaging",
        price: "₹10,550",
        originalPrice: "₹10,999",
        bestPrice: "₹8,788",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
        path: "products/gir-cow-ghee",
      },
      {
        title: "Wood Pressed Groundnut Oil",
        subtitle: "1L Bottle",
        description: "Pure & Cold Pressed",
        price: "₹420",
        originalPrice: "₹450",
        bestPrice: "₹399",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Forest Raw Honey",
        subtitle: "500g Glass Jar",
        description: "No Added Sugar | Wild Harvest",
        price: "₹399",
        originalPrice: "₹450",
        bestPrice: "₹349",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Bilona Ghee Combo",
        subtitle: "Cow & Buffalo Ghee",
        description: "Wholesome & Healthy",
        price: "₹1,890",
        originalPrice: "₹2,099",
        bestPrice: "₹1,699",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],
    Ghee: [
      {
        title: "A2 Desi Cow Ghee",
        subtitle: "5L Dolchi",
        description: "Same Richness | Timeless Packaging",
        price: "₹10,550",
        originalPrice: "₹10,999",
        bestPrice: "₹8,788",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Wood Pressed Groundnut Oil",
        subtitle: "1L Bottle",
        description: "Pure & Cold Pressed",
        price: "₹420",
        originalPrice: "₹450",
        bestPrice: "₹399",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Forest Raw Honey",
        subtitle: "500g Glass Jar",
        description: "No Added Sugar | Wild Harvest",
        price: "₹399",
        originalPrice: "₹450",
        bestPrice: "₹349",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Bilona Ghee Combo",
        subtitle: "Cow & Buffalo Ghee",
        description: "Wholesome & Healthy",
        price: "₹1,890",
        originalPrice: "₹2,099",
        bestPrice: "₹1,699",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ], // You can fill unique items for this category
    Oil: [
      {
        title: "A2 Desi Cow Ghee",
        subtitle: "5L Dolchi",
        description: "Same Richness | Timeless Packaging",
        price: "₹10,550",
        originalPrice: "₹10,999",
        bestPrice: "₹8,788",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Wood Pressed Groundnut Oil",
        subtitle: "1L Bottle",
        description: "Pure & Cold Pressed",
        price: "₹420",
        originalPrice: "₹450",
        bestPrice: "₹399",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Forest Raw Honey",
        subtitle: "500g Glass Jar",
        description: "No Added Sugar | Wild Harvest",
        price: "₹399",
        originalPrice: "₹450",
        bestPrice: "₹349",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Bilona Ghee Combo",
        subtitle: "Cow & Buffalo Ghee",
        description: "Wholesome & Healthy",
        price: "₹1,890",
        originalPrice: "₹2,099",
        bestPrice: "₹1,699",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],
    Deals: [
      {
        title: "A2 Desi Cow Ghee",
        subtitle: "5L Dolchi",
        description: "Same Richness | Timeless Packaging",
        price: "₹10,550",
        originalPrice: "₹10,999",
        bestPrice: "₹8,788",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Wood Pressed Groundnut Oil",
        subtitle: "1L Bottle",
        description: "Pure & Cold Pressed",
        price: "₹420",
        originalPrice: "₹450",
        bestPrice: "₹399",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Forest Raw Honey",
        subtitle: "500g Glass Jar",
        description: "No Added Sugar | Wild Harvest",
        price: "₹399",
        originalPrice: "₹450",
        bestPrice: "₹349",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Bilona Ghee Combo",
        subtitle: "Cow & Buffalo Ghee",
        description: "Wholesome & Healthy",
        price: "₹1,890",
        originalPrice: "₹2,099",
        bestPrice: "₹1,699",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],
    Combo: [
      {
        title: "A2 Desi Cow Ghee",
        subtitle: "5L Dolchi",
        description: "Same Richness | Timeless Packaging",
        price: "₹10,550",
        originalPrice: "₹10,999",
        bestPrice: "₹8,788",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Wood Pressed Groundnut Oil",
        subtitle: "1L Bottle",
        description: "Pure & Cold Pressed",
        price: "₹420",
        originalPrice: "₹450",
        bestPrice: "₹399",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Forest Raw Honey",
        subtitle: "500g Glass Jar",
        description: "No Added Sugar | Wild Harvest",
        price: "₹399",
        originalPrice: "₹450",
        bestPrice: "₹349",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Bilona Ghee Combo",
        subtitle: "Cow & Buffalo Ghee",
        description: "Wholesome & Healthy",
        price: "₹1,890",
        originalPrice: "₹2,099",
        bestPrice: "₹1,699",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],
    "₹499": [
      {
        title: "Ayurvedic Kadha Mix",
        subtitle: "100g Zip Pouch",
        description: "Immunity Booster | Herbal Blend",
        price: "₹499",
        originalPrice: "₹599",
        bestPrice: "₹429",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Spiced Jaggery Cubes",
        subtitle: "500g Pack",
        description: "Natural Sweetener | Infused with Spices",
        price: "₹449",
        originalPrice: "₹499",
        bestPrice: "₹389",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Chilli Flavored Groundnut Oil",
        subtitle: "200ml Bottle",
        description: "For Spicy Cooking | Cold Pressed",
        price: "₹399",
        originalPrice: "₹450",
        bestPrice: "₹349",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Herbal Mouth Freshener",
        subtitle: "100g Jar",
        description: "No Sugar | Fennel & Herbs",
        price: "₹349",
        originalPrice: "₹420",
        bestPrice: "₹299",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],

    "₹999": [
      {
        title: "Ghee Trial Combo",
        subtitle: "100ml x 3 Bottles",
        description: "Buffalo, Cow & A2 Ghee Pack",
        price: "₹999",
        originalPrice: "₹1,199",
        bestPrice: "₹899",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Cold Pressed Oil Combo",
        subtitle: "250ml x 2 Bottles",
        description: "Groundnut & Coconut Oil",
        price: "₹949",
        originalPrice: "₹1,100",
        bestPrice: "₹875",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Organic Jaggery & Honey Combo",
        subtitle: "500g Each",
        description: "Sweetener Combo for Daily Use",
        price: "₹970",
        originalPrice: "₹1,050",
        bestPrice: "₹879",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Immunity Wellness Kit",
        subtitle: "3-in-1 Ayurvedic Pack",
        description: "Boosts Resistance Naturally",
        price: "₹999",
        originalPrice: "₹1,250",
        bestPrice: "₹899",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],

    Superfoods: [
      {
        title: "Sprouted Ragi Flour",
        subtitle: "1kg Pack",
        description: "High Fiber | Diabetic-Friendly",
        price: "₹390",
        originalPrice: "₹450",
        bestPrice: "₹349",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Flaxseed Crunch Mix",
        subtitle: "250g Jar",
        description: "Loaded with Omega-3 & Protein",
        price: "₹350",
        originalPrice: "₹420",
        bestPrice: "₹310",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Sunflower Seeds",
        subtitle: "300g Pouch",
        description: "Rich in Antioxidants & Fiber",
        price: "₹430",
        originalPrice: "₹499",
        bestPrice: "₹389",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Chia Seeds",
        subtitle: "500g Zip Pouch",
        description: "Energy Packed | Weight Friendly",
        price: "₹480",
        originalPrice: "₹530",
        bestPrice: "₹425",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],

    New: [
      {
        title: "Desi Cow Butter",
        subtitle: "250g Pack",
        description: "Made from Cultured Milk | Rich in Aroma",
        price: "₹280",
        originalPrice: "₹320",
        bestPrice: "₹245",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Jowar Atta (Millet Flour)",
        subtitle: "1kg Pack",
        description: "Gluten-Free | Stone Ground",
        price: "₹199",
        originalPrice: "₹240",
        bestPrice: "₹175",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Herbal Detox Water Mix",
        subtitle: "150g Jar",
        description: "Cleanses & Refreshes Naturally",
        price: "₹350",
        originalPrice: "₹420",
        bestPrice: "₹310",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
      {
        title: "Instant Millet Dosa Mix",
        subtitle: "400g Pack",
        description: "Tasty & Healthy Breakfast",
        price: "₹399",
        originalPrice: "₹460",
        bestPrice: "₹359",
        image:
          "https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596",
      },
    ],
  };

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const categoryFromURL = queryParams.get("category") || "All";

  const products = allProducts[categoryFromURL] || [];
  return (
    <>
      <CategoryMenuCollection
        onSelectCategory={(label) => {}}
        activeCategory={categoryFromURL}
      />
      <Box
        sx={{
          p: 4,
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "1.8rem",
            fontFamily: "var(--font-heading-family)",
            textAlign: "center",
            color: "#00584b",
            fontStyle: "var(--font-heading-style)",
            letterSpacing: "calc(var(--font-heading-scale) * 0.06rem)",
            lineHeight: "calc(1 + 0.3 / max(1, var(--font-heading-scale)))",
            wordBreak: "break-word",
            pb: 1,
          }}
        >
          Your Favorites | All in One Place
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            gap: 2,
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {products.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                borderRadius: "10px  10px 80px 10px ",
                p: 2,
                position: "relative",
                overflow: "visible",
                border: "1px solid #d1d1d1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minWidth: 250,
                backgroundColor: "#fff",
              }}
            >
              {/* Labels */}
              <Box sx={{ position: "absolute", top: 16, left: 16 }}>
                <Chip
                  label="New Launch"
                  sx={{
                    backgroundColor: "#1d639f",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: "0 0 10px 0",
                    fontSize: 12,
                    fontFamily: "var(--font-heading-family)",
                  }}
                />
              </Box>
              <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Chip
                  label="4% Off"
                  sx={{
                    backgroundColor: "#00584b",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: "0 0 0 10px",
                    fontSize: 12,
                    fontFamily: "var(--font-heading-family)",
                  }}
                />
              </Box>

              {/* Image */}
              <Link to={`/${item.path}`}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "contain",
                    height: 290,
                  }}
                />
              </Link>

              {/* Content */}
              <CardContent sx={{ px: 0 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "var(--font-heading-family)" }}
                >
                  {item.subtitle}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 0.5, fontFamily: "var(--font-heading-family)" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mb: 1, fontFamily: "var(--font-heading-family)" }}
                >
                  {item.description}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: 1 }}
                >
                  <Rating value={4.5} precision={0.5} readOnly size="small" />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "var(--font-heading-family)" }}
                  >
                    1088 reviews
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontFamily: "var(--font-heading-family)" }}
                  >
                    {item.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontFamily: "var(--font-heading-family)",
                    }}
                  >
                    {item.originalPrice}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#00715D",
                    fontWeight: 600,
                    fontFamily: "var(--font-heading-family)",
                  }}
                >
                  Best Price {item.bestPrice}{" "}
                  <Typography
                    component="span"
                    color="text.secondary"
                    sx={{ fontFamily: "var(--font-heading-family)" }}
                  >
                    with coupon
                  </Typography>
                </Typography>
              </CardContent>

              {/* Actions */}
              <Stack
                spacing={1}
                mt={2}
                direction="column"
                alignItems="center"
                sx={{ width: "fit-content", mx: "auto" }}
              >
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon fontSize="small" />}
                  size="small"
                  sx={{
                    px: 1.5,
                    py: 0.3,
                    minWidth: "150px",
                    backgroundColor: "#00715D",
                    color: "#fff",
                    borderRadius: 50,
                    fontFamily: "var(--font-heading-family)",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.72rem",
                    "&:hover": { backgroundColor: "#005f4f" },
                  }}
                >
                  Add to cart
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<FlashOnIcon fontSize="small" />}
                  size="small"
                  sx={{
                    px: 1.5,
                    py: 0.3,
                    minWidth: "150px",
                    borderColor: "#00715D",
                    color: "#00715D",
                    fontFamily: "var(--font-heading-family)",
                    borderRadius: 50,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.72rem",
                    "&:hover": {
                      borderColor: "#005f4f",
                      backgroundColor: "#f4f4f4",
                    },
                  }}
                >
                  Buy Now
                </Button>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AllProductCollection;

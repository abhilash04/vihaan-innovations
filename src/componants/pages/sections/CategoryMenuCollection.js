import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const CategoryMenuCollection = ({ onSelectCategory, activeCategory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const categories = [
    {
      label: "Ghee",
      icon: "https://www.anveshan.farm/cdn/shop/files/a2ghee.svg?v=1712905687",
      link: "/collections/desi-ghee",
    },
    {
      label: "Oil",
      icon: "https://www.anveshan.farm/cdn/shop/files/oils.svg?v=1712905647",
      link: "/collections/wood-cold-pressed-oils",
    },
    {
      label: "Deals",
      icon: "https://www.anveshan.farm/cdn/shop/files/bestdeals.svg?v=1712905646",
      link: "/collections/deals",
    },
    {
      label: "Superfoods",
      icon: "https://www.anveshan.farm/cdn/shop/files/superfood.svg?v=1712905646",
      link: "/collections/superfoods",
    },
    {
      label: "Combo",
      icon: "https://www.anveshan.farm/cdn/shop/files/combo.svg?v=1714126705",
      link: "/collections/a2-desi-ghee-wood-press-oil-combo-packs",
    },
    {
      label: "₹499",
      icon: "https://www.anveshan.farm/cdn/shop/files/under-499.svg?v=1726215410",
      link: "/collections/shop-under-499",
    },
    {
      label: "₹999",
      icon: "https://www.anveshan.farm/cdn/shop/files/under-999.svg?v=1726215410",
      link: "/collections/shop-under-999",
    },
    {
      label: "All",
      icon: "https://www.anveshan.farm/cdn/shop/files/all_product_active.svg?v=1713435265",
      link: "/collections/all-products",
      active: true,
    },
    {
      label: "New",
      icon: "https://www.anveshan.farm/cdn/shop/files/newly.svg?v=1714126432",
      link: "/collections/newly-launched",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#f8f8f7",
        py: 1,
        overflowX: isMobile ? "auto" : "hidden",
      }}
    >
      <Box sx={{ width: "fit-content", mx: "auto", px: isMobile ? 2 : 0 }}>
        <Stack direction="row" spacing={3}>
          {categories.map((item, index) => (
            <Link
              to={`?category=${item.label}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                key={index}
                onClick={() => onSelectCategory(item.label)}
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Avatar
                  src={item.icon}
                  alt={item.label}
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: activeCategory === item.label ? "#ff8c31" : "#fff",
                    margin: "0 auto",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    mt: 1,
                    color: activeCategory === item.label ? "#ff8c31" : "#333",
                    fontFamily: "Avenir Next, sans-serif",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default CategoryMenuCollection;

import React, { useState } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import imgFoodie from "../../../../assets/local-food.webp";
import imgRestaurant from "../../../../assets/order-management.webp";
import PopUps from "../../../common/PopUps";

const tabData = {
  foodies: {
    id: "foodies",
    title: "Discover Amazing Food Near You",
    description: "Enjoy a seamless food ordering experience powered by a smart food delivery app development solution. Discover nearby restaurants, explore new cuisines, and order your favorite meals quickly and easily.",
    features: [
      {
        title: "Save Time with Fast Ordering",
        desc: "Our advanced food delivery app development solution allows food lovers to browse menus, place orders instantly, and get meals delivered faster."
      },
      {
        title: "Personalized Favorites & Recommendations",
        desc: "Built by a trusted food delivery app development company in India, the platform recommends popular dishes and lets users save their favorite restaurants for quick reordering."
      },
      {
        title: "Flexible Dining Choices",
        desc: "From quick snacks to full meals, the platform developed by a leading food delivery app development company in India gives foodies endless dining options anytime."
      }
    ],
    buttonText: "Order Your Favorite Food",
    image: imgFoodie,
    icon: <FastfoodIcon sx={{ mr: 1, fontSize: 24 }} />
  },
  restaurants: {
    id: "restaurants",
    title: "Grow Your Restaurant Business Online",
    description: "Our food delivery app development solution helps restaurants connect with more customers, manage orders efficiently, and increase online sales.",
    features: [
      {
        title: "Reach More Customers",
        desc: "Partner with a leading food delivery app development company in India to list your restaurant and reach thousands of food lovers in your area."
      },
      {
        title: "Easy Menu & Order Management",
        desc: "The food delivery app development solution allows restaurants to manage menus, track orders, and update availability in real time."
      },
      {
        title: "Boost Revenue & Visibility",
        desc: "With technology built by an experienced food delivery app development company in India, restaurants can attract more customers and grow their online presence."
      }
    ],
    buttonText: "List Your Restaurant",
    image: imgRestaurant,
    icon: <RestaurantMenuIcon sx={{ mr: 1, fontSize: 24 }} />
  }
};

export default function FoodDiscovery() {
  const [openPopup, setOpenPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("foodies");
  const content = tabData[activeTab];

  return (
    <Box sx={{ backgroundColor: "#f9fcff", py: { xs: 4, md: 6 }, overflow: "hidden" }}>
      <Container maxWidth="lg">

        {/* Toggle Switches */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Box sx={{
            display: "inline-flex",
            backgroundColor: "#fff",
            borderRadius: "40px",
            p: 1,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.05)"
          }}>
            <Button
              onClick={() => setActiveTab("foodies")}
              sx={{
                px: { xs: 2, md: 5 },
                py: 1.5,
                borderRadius: "30px",
                textTransform: "none",
                fontSize: "18px",
                fontWeight: activeTab === "foodies" ? 700 : 500,
                color: activeTab === "foodies" ? "#fff" : "#666",
                backgroundColor: activeTab === "foodies" ? "#ff6f1e" : "transparent",
                "&:hover": {
                  backgroundColor: activeTab === "foodies" ? "#e65a10" : "rgba(0,0,0,0.05)"
                },
                transition: "all 0.3s ease"
              }}
            >
              {tabData.foodies.icon}
              For Foodies
            </Button>
            <Button
              onClick={() => setActiveTab("restaurants")}
              sx={{
                px: { xs: 2, md: 5 },
                py: 1.5,
                borderRadius: "30px",
                textTransform: "none",
                fontSize: "18px",
                fontWeight: activeTab === "restaurants" ? 700 : 500,
                color: activeTab === "restaurants" ? "#fff" : "#666",
                backgroundColor: activeTab === "restaurants" ? "#1b25a8" : "transparent",
                "&:hover": {
                  backgroundColor: activeTab === "restaurants" ? "#141d8c" : "rgba(0,0,0,0.05)"
                },
                transition: "all 0.3s ease"
              }}
            >
              {tabData.restaurants.icon}
              For Restaurants
            </Button>
          </Box>
        </Box>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'foodies' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'foodies' ? 50 : -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Grid container spacing={6} alignItems="center" direction={activeTab === 'restaurants' ? 'row-reverse' : 'row'}>

              {/* Left Side: Image / Illustration */}
              <Grid item xs={12} md={5}>
                <Box
                  component="img"
                  src={content.image}
                  alt={content.title}
                  sx={{
                    width: "100%",
                    borderRadius: "30px",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    border: "8px solid #fff"
                  }}
                />
              </Grid>

              {/* Right Side: Content + Features */}
              <Grid item xs={12} md={7}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2.5, color: "#1a1a1a", fontSize: { xs: "28px", md: "38px" } }}>
                  {content.title}
                </Typography>
                <Typography sx={{ fontSize: "18px", color: "#555", mb: 4, lineHeight: 1.4 }}>
                  {content.description}
                </Typography>

                <Box sx={{ mb: 6 }}>
                  {content.features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <CheckCircleIcon sx={{ color: activeTab === 'foodies' ? '#ff6f1e' : '#1b25a8', mt: '4px', mr: 2 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a", mb: 0.5 }}>
                          {feature.title}
                        </Typography>
                        <Typography sx={{ color: "#666", lineHeight: 1.6, fontSize: "16px" }}>
                          {feature.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  onClick={() => setOpenPopup(true)}
                  sx={{
                    backgroundColor: activeTab === 'foodies' ? '#ff6f1e' : '#1b25a8',
                    px: 4, py: 1.5,
                    borderRadius: "30px",
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: `0 10px 20px ${activeTab === 'foodies' ? 'rgba(255,111,30,0.3)' : 'rgba(27,37,168,0.3)'}`,
                    "&:hover": {
                      backgroundColor: activeTab === 'foodies' ? '#e65a10' : '#141d8c',
                      transform: 'translateY(-2px)'
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  {content.buttonText}
                </Button>
              </Grid>

            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
      <PopUps open={openPopup} handleClose={() => setOpenPopup(false)} />
    </Box>
  );
}

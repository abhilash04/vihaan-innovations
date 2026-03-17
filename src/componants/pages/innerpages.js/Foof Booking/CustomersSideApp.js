import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import bnr from "../../../../assets/bg.webp";
import img from "../../../../assets/food-delivery-banner.webp";

const CustomerSideApp = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bnr})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Blue Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(2, 81, 112, 0.75)", // Blue with opacity
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          padding: "30px",
          display: "flex",
          mx: "auto",
          maxWidth: "1250px",
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, maxWidth: "650px" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, mb: 2, color: "#fff" }}
          >
            Customer Side App
          </Typography>
          <Typography sx={{ mb: 3, fontSize: "16px", lineHeight: "1.6" }}>
            The endest-user of a Food delivery app is the ordering customer.
            Make their eating journey more and more fun with exciting app
            features that include:
          </Typography>

          {/* 2 Lists Per Row */}
          <Grid container spacing={4}>
            {/* Column 1 */}
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontWeight: 600 }}>
                Simple Log In With
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Phone Number" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Google Account" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Social Media Account" />
                </ListItem>
              </List>

              <Typography sx={{ fontWeight: 600, mt: 2 }}>
                Versatile Search Bar That
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Reads Typed Food" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Hears Voice Commands" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Scans Food Images" />
                </ListItem>
              </List>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} sm={6}>
              <Typography sx={{ fontWeight: 600 }}>
                Profile Creation For
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Keeping Track of Past Orders" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Re-order something gourmet" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Wishlist Food Items for next time" />
                </ListItem>
              </List>

              <Typography sx={{ fontWeight: 600, mt: 2 }}>
                An Order Tracking Option That
              </Typography>
              <List>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Tracks order In Real Time" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Powered by Maps API" />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText primary="Connects Delivery Partner on Calls and Chats" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img}
            alt="Mobile App UI"
            style={{ maxWidth: "500px", borderRadius: "12px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerSideApp;

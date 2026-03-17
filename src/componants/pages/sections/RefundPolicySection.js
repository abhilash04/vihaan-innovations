import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import bgImage from "../../../assets/breadcrumb-bg.webp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const RefundPolicySection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#f5f5f5" }}
      className="innerpage-bg"
    >
      {/* Page Title & Breadcrumbs */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              sx={{ fontSize: "35px", fontWeight: 600, color: "#27272f " }}
            >
              Refund & Return Policy
            </Typography>
          </Box>

          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <Link
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#c24300",
                fontSize: "24px",
              }}
            >
              Home
            </Link>
            <Typography sx={{ color: "#00584b", fontSize: "24px" }}>
              Refund & Return Policy:
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "#f5f7ef",
              p: 4,
              borderRadius: 1,
              boxShadow: 1,
              color: "#6a6a6dff",
            }}
          >
            <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
              Refund & Return Policy
            </Typography>

            <Typography paragraph>
              At Arjjit’s Recipe, we take great care to deliver our homemade,
              high-quality products in perfect condition. However, if something
              isn't right, here’s how we’ll make it better.
            </Typography>

            <Typography paragraph>
              <strong>Wrong or Damaged Products:</strong> If your order arrives
              with damaged packaging or incorrect items, please inform us within{" "}
              <strong>24 hours</strong> of delivery. Photo proof is required for
              verification.
            </Typography>

            <Typography paragraph>
              <strong>Product Quality Issues:</strong> If you believe a product
              does not meet our quality standards, contact us within 24 hours
              with details and supporting images so our team can evaluate the
              concern.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
              Non-Returnable Items
            </Typography>

            <Typography paragraph>
              As most of our products are edible and perishable, we do not
              accept returns on food items once the seal is broken. This is to
              maintain hygiene and food safety. Refunds may be offered only
              under valid and verified concerns.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
              When We Allow Exchanges
            </Typography>

            <Typography paragraph>
              Exchanges or returns will be considered only in the following
              situations:
            </Typography>

            <List dense sx={{ pl: 2 }}>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="You received a damaged or wrong item." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="The product packaging was not sealed properly." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="The product had expired by the time it reached you." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="No exchange is allowed in cases outside the above scenarios." />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
              How to Request a Return
            </Typography>

            <List dense sx={{ pl: 2 }}>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Reach out to our customer support within 24 hours of delivery." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Share your order number, product details, and images of the issue." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="If approved, we’ll provide steps for returning the product (if needed)." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Ensure the item is returned in its original packaging." />
              </ListItem>
              <ListItem
                sx={{ display: "list-item", listStyleType: "disc", pl: 1 }}
              >
                <ListItemText primary="Ship it to the address provided by our support team." />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
              Cancellation Policy
            </Typography>

            <Typography paragraph>
              We do not allow cancellations once an order is confirmed, as we
              prepare items fresh to order. However, if you’ve made a mistake,
              reach out to our support within an hour. If your request is
              eligible, we may issue a refund or adjust the amount in your next
              order.
            </Typography>

            <Typography paragraph>
              Arjjit’s Recipe reserves the right to cancel any order due to
              unexpected circumstances. In such cases, a full refund will be
              initiated.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
              Refund Timelines
            </Typography>

            <Typography paragraph>
              Once we receive and inspect the returned item (if applicable), we
              will update you on the status of your refund. If approved, it will
              be processed within <strong>7–15 business days</strong>, depending
              on your bank or payment provider.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default RefundPolicySection;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
  Paper,
  Slide,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import img from "../../assets/combo.avif";
import img2 from "../../assets/gir-cow-ghee-1L.avif";
import img3 from "../../assets/payment-mathod.jpg";

import CloseIcon from "@mui/icons-material/Close";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const CartDrawer = ({ open, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [showPriceSummary, setShowPriceSummary] = useState(false);

  const togglePriceSummary = () => {
    setShowPriceSummary(!showPriceSummary);
  };

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 450,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Scrollable Content */}
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {/* Cart Header */}
          {/* Cart Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocalGroceryStoreIcon
                sx={{ fontSize: 28, mr: 1, color: "#00695c" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#004d40",
                  fontSize: "20px",
                  letterSpacing: "0.5px",
                }}
              >
                Your Cart
              </Typography>
            </Box>

            {/* Close Button */}
            <IconButton onClick={onClose}>
              <CloseIcon sx={{ color: "#444", backgroundColor: "#cec4c41f" }} />
            </IconButton>
          </Box>
          {/* Promo Banner */}
          <Box>
            <img
              src={img}
              alt="Promo"
              style={{ width: "100%", marginBottom: "10px" }}
            />
          </Box>
          {/* Cart Item */}
          <Box mb={3} sx={{ px: 2 }}>
            <img
              src={img2}
              alt="A2 Gir Cow Ghee"
              style={{
                float: "left",
                marginRight: 10,
                height: 125,
                width: 125,
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#004d40",
                fontSize: "16px",
                letterSpacing: "0.5px",
              }}
            >
              A2 Gir Cow Ghee - 1L Jar
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography variant="body1" fontWeight="bold" mr={1}>
                ₹2,330
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                  mr: 1,
                }}
              >
                ₹2,400
              </Typography>
              <Typography variant="body2" sx={{ color: "#004d40" }}>
                (2% off)
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            {/* Quantity Selector */}
            <Paper
              variant="outlined"
              size="small"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <IconButton
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity === 1}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <Box sx={{ px: 2, minWidth: 40, textAlign: "center" }}>
                {quantity}
              </Box>

              <IconButton
                onClick={() => handleQuantityChange(1)}
                disabled={quantity === 10}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Paper>

            {/* Delete Icon */}
            <IconButton sx={{ color: "#a3a3a3" }}>
              <DeleteIcon />
            </IconButton>
          </Box>
          {/* Offers */}
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#242424",
                fontSize: "18px",
                letterSpacing: "0.5px",
                mt: 2.5,
                px: 1,
              }}
            >
              Available offers for you
            </Typography>

            <Box display="flex" gap={1.5} sx={{ px: 4 }}>
              {/* Offer 1 */}
              <List
                dense
                sx={{ mb: 0, pb: 0, width: 250, backgroundColor: "#fff8f1" }}
              >
                <ListItem alignItems="flex-start" sx={{ px: 1 }}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Upto 30% off
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{
                            color: "#606060",
                            fontSize: "13px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          • Offer applicable on combos
                        </Typography>
                        <Typography
                          sx={{
                            color: "#606060",
                            fontSize: "13px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          • No coupon needed
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </List>

              {/* Offer 2 */}
              <List
                dense
                sx={{ mb: 0, p: 0, width: 250, backgroundColor: "#fff8f1" }}
              >
                <ListItem alignItems="flex-start" sx={{ px: 1 }}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Flat 15% off
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{
                            color: "#606060",
                            fontSize: "13px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          • Minimum purchase of ₹599
                        </Typography>
                        <Typography
                          sx={{
                            color: "#606060",
                            fontSize: "13px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          • Not applicable on combos
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          gap={2}
                          mt={1}
                          sx={{ border: "1px solid #bdb9b9ff" }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ px: 1, color: "black" }}
                          >
                            MONSOON15
                          </Typography>
                          <Typography
                            variant="body2"
                            component="button"
                            onClick={() =>
                              navigator.clipboard.writeText("MONSOON15")
                            }
                            sx={{
                              display: "inline-flex", // 👈 Align text and icon horizontally
                              alignItems: "center",
                              gap: 0.5, // 👈 Small space between text and icon
                              fontSize: "0.75rem",
                              backgroundColor: "#004d40",
                              color: "white",
                              px: 1,
                              py: 0.5,
                              cursor: "pointer",
                              border: "1px solid #004d40",
                            }}
                          >
                            Copy <ContentCopyIcon sx={{ fontSize: "1rem" }} />
                          </Typography>
                        </Box>
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>

        {/* Fixed Bottom Section */}
        <Box sx={{ position: "relative" }}>
          {/* Price Summary Slide */}
          <Slide
            direction="up"
            in={showPriceSummary}
            mountOnEnter
            unmountOnExit
          >
            <Box
              sx={{
                backgroundColor: "white",
                boxShadow: "0 -4px 12px rgba(0,0,0,0.1)",
                p: 2,
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "#212121",
                }}
              >
                Price Summary
              </Typography>

              <Table >
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        p: "4px 0",
                        color: "#616161",
                      }}
                    >
                      Order Total
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        border: "none",
                        p: "4px 0",
                        fontWeight: "500",
                      }}
                    >
                      ₹2400
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        p: "4px 0",
                        color: "#616161",
                      }}
                    >
                      Items Discount
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        border: "none",
                        p: "4px 0",
                        color: "#388e3c",
                        fontWeight: "500",
                      }}
                    >
                      -₹70
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        p: "4px 0",
                        color: "#616161",
                      }}
                    >
                      Shipping
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        border: "none",
                        p: "4px 0",
                        color: "#388e3c",
                        fontWeight: "500",
                      }}
                    >
                      Free (₹49)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        p: "4px 0",
                        color: "#616161",
                      }}
                    >
                      2% Prepaid Discount
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        border: "none",
                        p: "4px 0",
                        color: "#388e3c",
                        fontWeight: "500",
                      }}
                    >
                      -₹47
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        border: "none",
                        p: "8px 0",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      To Pay
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        border: "none",
                        p: "8px 0",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      ₹2283
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Typography
                align="center"
                sx={{
                  backgroundColor: "#235a49",
                  color: "white",
                  fontWeight: "500",
                  py: 1,
                  borderRadius: 1,
                  fontSize: "15px",
                }}
              >
                🎉 You saved ₹117 on this order
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={img3}
                  alt="Promo"
                  style={{ width: "100%",}}
                />
              </Box>              
            </Box>
          </Slide>

          {/* Checkout Section */}
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              p: 1.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  mr: 1,
                }}
              >
                ₹2,330
              </Typography>
              <IconButton
                onClick={togglePriceSummary}
                sx={{ color: "#616161" }}
              >
                {showPriceSummary ? (
                  <ExpandLessIcon sx={{ fontSize: "24px" }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: "24px" }} />
                )}
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffd57a",
                color: "#235a49",
                textTransform: "none",
                borderRadius: "8px",
                px: 3,
                py: 1.5,
                width: "200px",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#ffc850",
                  boxShadow: "none",
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;

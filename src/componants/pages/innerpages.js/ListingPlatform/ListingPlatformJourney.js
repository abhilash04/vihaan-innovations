import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SensorsIcon from '@mui/icons-material/Sensors';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const listerSteps = [
  { label: "Register", icon: AccountCircleOutlinedIcon },
  { label: "Create Listing", icon: AddBoxOutlinedIcon },
  { label: "Upload", icon: CloudUploadOutlinedIcon },
  { label: "Submit", icon: SendOutlinedIcon },
  { label: "Go Live", icon: SensorsIcon },
  { label: "Enquiries", icon: ChatBubbleOutlineIcon },
  { label: "Renew", icon: AutorenewOutlinedIcon },
];

const userSteps = [
  { label: "Land", icon: VisibilityOutlinedIcon },
  { label: "Search", icon: SearchOutlinedIcon },
  { label: "Browse", icon: ViewListOutlinedIcon },
  { label: "Save Favourites", icon: FavoriteBorderOutlinedIcon, highlightColor: "#ec4899" }, // Special pink highlight from mock
  { label: "Enquiry", icon: EmailOutlinedIcon },
  { label: "Review", icon: StarOutlineIcon },
];

const VerticalFlow = ({ steps, title }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "18px", mb: 4, textAlign: "center" }}>
        {title}
      </Typography>

      {steps.map((step, index) => {
        const Icon = step.icon;
        const color = step.highlightColor || "#1a1a1a";
        const borderColor = step.highlightColor || "rgba(0,0,0,0.1)";
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  p: 1.5,
                  minWidth: "180px",
                  borderRadius: "8px",
                  border: `1.5px solid ${borderColor}`,
                  bgcolor: "#ffffff",
                  color: color,
                  boxShadow: "0 2px 5px rgba(0,0,0,0.02)"
                }}
              >
                <Icon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  {step.label}
                </Typography>
              </Paper>
            </motion.div>

            {/* Connecting Arrow */}
            {!isLast && (
              <Box sx={{ height: 40, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(0,0,0,0.2)" }}>
                <ArrowDownwardIcon sx={{ fontSize: 20 }} />
              </Box>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

const ListingPlatformJourney = () => {
  return (
    <Box sx={{ bgcolor: "#fafafa", py: 12 }}>
      <Container maxWidth="md">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            The Platform Journey
          </Typography>
        </Box>

        <Paper 
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            bgcolor: "#ffffff",
            borderRadius: "24px",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
          }}
        >
          <Grid container spacing={6} justifyContent="center">
            
            <Grid item xs={12} sm={6}>
              <VerticalFlow steps={listerSteps} title="Lister Journey" />
            </Grid>

            {/* Optional divider between columns */}
            <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'absolute', left: '50%', top: '20%', bottom: '20%', width: '1px', bgcolor: 'rgba(0,0,0,0.05)' }} />

            <Grid item xs={12} sm={6}>
              <VerticalFlow steps={userSteps} title="User/Buyer Journey" />
            </Grid>

          </Grid>
        </Paper>

      </Container>
    </Box>
  );
};

export default ListingPlatformJourney;

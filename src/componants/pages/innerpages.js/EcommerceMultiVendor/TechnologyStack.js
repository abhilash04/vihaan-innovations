import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

// ✅ Image Imports
import ShopifyIcon from "../../../../assets/Shopify.png";
import MagentoIcon from "../../../../assets/Magento.png";
import WooIcon from "../../../../assets/wooCommerce.svg";
import BigIcon from "../../../../assets/BigCommerce.svg";
import MysqlIcon from "../../../../assets/mysql.png";
import MariadbIcon from "../../../../assets/mariaDB.png";
import MongoIcon from "../../../../assets/MongoDB.png";
import OopsIcon from "../../../../assets/Oops.png";
import MvcIcon from "../../../../assets/MVC.png";
import AgileIcon from "../../../../assets/Agile-Methodology.png";
import SdlcIcon from "../../../../assets/SDLC-Methodologies.png";

// Styled Components
const SectionCard = styled(Paper)(({ theme }) => ({
  background: "rgba(27, 37, 168, 0.05)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  padding: "24px",
  border: "1px solid rgba(0, 191, 255, 0.15)",
  boxShadow: "0 10px 40px rgba(27, 37, 168, 0.03)",
  marginBottom: "16px",
  position: "relative",
  overflow: "hidden",
}));

const TechCard = styled(motion.div)(({ theme }) => ({
  background: "#fff",
  borderRadius: "16px",
  padding: "12px 20px",
  display: "flex",
  flexDirection: "row", // Horizontal for better space
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "12px",
  border: "1px solid rgba(0, 191, 255, 0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 25px rgba(0, 191, 255, 0.12)",
    borderColor: "#00bfff",
  },
}));

const CategoryHeader = ({ title, icon }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1.5 }}>
    <Box sx={{ 
      width: 32, 
      height: 32, 
      borderRadius: "10px", 
      background: "linear-gradient(135deg, #00bfff 0%, #1b25a8 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0, 191, 255, 0.2)"
    }}>
      <Box sx={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid #fff", opacity: 0.8 }} />
    </Box>
    <Typography sx={{ 
      fontSize: "18px", 
      fontWeight: 800, 
      color: "#1d1d1f",
      letterSpacing: "-0.01em"
    }}>
      {title}
    </Typography>
    <Box sx={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(27, 37, 168, 0.1) 0%, transparent 100%)", borderRadius: "1px" }} />
  </Box>
);

const techData = [
  {
    category: "Platforms",
    items: [
      { name: "Shopify", icon: ShopifyIcon },
      { name: "Magento", icon: MagentoIcon },
      { name: "WooCommerce", icon: WooIcon },
      { name: "BigCommerce", icon: BigIcon },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: MysqlIcon },
      { name: "MariaDB", icon: MariadbIcon },
      { name: "MongoDB", icon: MongoIcon },
    ]
  },
  {
    category: "Development",
    items: [
      { name: "OOPs", icon: OopsIcon },
      { name: "MVC", icon: MvcIcon },
      { name: "Agile", icon: AgileIcon },
      { name: "SDLC", icon: SdlcIcon },
    ]
  }
];

const TechnologyStack = () => {
  return (
    <Box sx={{ 
      py: 6, 
      background: "#ffffff",
      position: "relative",
      overflow: "hidden"
    }}>
      <Container sx={{ maxWidth: "1200px", position: "relative", zIndex: 1 }}>
        {/* Main Heading Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "36px" },
                fontWeight: 800,
                color: "#1d1d1f",
                mb: 1,
                lineHeight: 1.2,
                letterSpacing: "-0.02em"
              }}
            >
              Technologies, Powering Our <span style={{ color: "#00bfff" }}>Multi-Vendor Solutions</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#5e6d7a",
                maxWidth: "750px",
                mx: "auto",
                lineHeight: 1.5,
              }}
            >
              We leverage modern platforms, powerful databases, and proven development methodologies to build fully-fledged multi-vendor marketplaces.
            </Typography>
          </motion.div>
        </Box>

        {/* Rows of Tech */}
        {techData.map((section, sIdx) => (
          <motion.div
            key={sIdx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sIdx * 0.1 }}
            viewport={{ once: true }}
          >
            <SectionCard elevation={0}>
              <CategoryHeader title={section.category} />
              
              <Grid container spacing={2}>
                {section.items.map((item, iIdx) => (
                  <Grid item xs={6} sm={4} md={3} key={iIdx}>
                    <TechCard
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: iIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        component="img"
                        src={item.icon}
                        alt={item.name}
                        sx={{ 
                          height: "28px", 
                          width: "auto", 
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                      <Typography sx={{ 
                        fontSize: "13px", 
                        fontWeight: 600, 
                        color: "#1d1d1f",
                      }}>
                        {item.name}
                      </Typography>
                    </TechCard>
                  </Grid>
                ))}
              </Grid>
            </SectionCard>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default TechnologyStack;

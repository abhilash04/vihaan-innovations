import React from "react";
import { Box } from "@mui/material";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import BlogDetailingPage from "./BlogDetailingPage";

const BlogHomepage = () => {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#ffffffff" }}>
            <HeaderSec />
            <BlogDetailingPage />
            <FooterAndPopup />
        </Box>
    );
};

export default BlogHomepage;

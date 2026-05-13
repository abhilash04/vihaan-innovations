
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  Snackbar,
  Alert,
  IconButton,
  CircularProgress,
  Pagination,
  Container,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import img1 from "../../../assets/about-part-003.jpg";
import img2 from "../../../assets/about-part-004.jpg";
import img3 from "../../../assets/about-part-005.jpg";
import Footer from "../../common/Footer";
import HeaderSec from "../../common/HeaderSec";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import BlogBanner from "../sections/BlogBanner";
import CloseIcon from "@mui/icons-material/Close";
import { config } from "../../../config/Config";
import { apiList, invokeApi } from "../../../services/ApiServices";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Blog = () => {
  useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [searchBlogValue, setSearchBlogValue] = useState("");
  const currentIndex = 0;
  const visibleCount = 3;
  const [articleDetails, setArticleDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = isMobile ? 5 : 6;
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const filteredArticles = articleDetails.filter((article) => {
    const matchesSearch = article.blogTitle
      .toLowerCase()
      .includes(searchBlogValue.toLowerCase());
    return matchesSearch;
  });

  const getArticle = async () => {
    setLoading(true);
    try {
      let params = {};
      let response = await invokeApi(
        config.apiBaseUrl + apiList.getArticles,
        params
      );
      if (response?.status >= 200 && response?.status < 300) {
        if (response.data.responseCode === "200") {
          const sortedBlogs = (response.data.blogs || []).sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
          setArticleDetails(sortedBlogs);
        } else {
          showSnackbar("Something went wrong while getting Articles. Please try again later!", "error");
        }
      } else {
        showSnackbar("Something went wrong while getting Articles. Please try again later!", "error");
      }
    } catch (error) {
      showSnackbar("Something went wrong while getting Articles. Please try again later!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleBlogInputChange = (e) => {
    setSearchBlogValue(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    if (location.pathname !== "/articles") {
      navigate("/articles");
    }
  }, [location.pathname, navigate]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredArticles.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredArticles.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <HeaderSec />
      <BlogBanner />

      {/* Heading */}
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
          mt: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
          Explore Our Unique Offerings!
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "2rem" : "2.5rem",
            color: "#ff5722",
            my: 1
          }}
        >
          Vihaan Innovations
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", color: "#6c6c6c", maxWidth: "800px", mx: "auto" }}>
          Discover web solutions, the latest industry trends in development, and
          inspiring digital success stories.
        </Typography>
      </Grid>

      {/* Search Section */}
      <Grid
        sx={{
          bottom: 0,
          pt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid style={{ position: "relative" }}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #1d1a57",
              borderRadius: 10,
              width: isMobile ? "90%" : 600,
              background: "#f0f8ff",
            }}
          >
            <TextField
              value={searchBlogValue}
              onChange={handleBlogInputChange}
              autoComplete="off"
              placeholder="Search Blog Title"
              variant="standard"
              InputProps={{
                endAdornment: <SearchIcon style={{ color: "#1d1a57" }} />,
                disableUnderline: true,
                style: { fontSize: isMobile ? 14 : 16 },
              }}
              sx={{ borderRadius: 0, width: isMobile ? "80%" : 500, py: 1 }}
            />
          </Grid>
        </Grid>
      </Grid>



      {/* Blog Cards Grid */}
      <Container maxWidth="xl" sx={{ my: 6 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
            <CircularProgress />
          </Box>
        ) : currentBlogs.length > 0 ? (
          <Grid container spacing={4} justifyContent="center">
            {currentBlogs.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 380,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderRadius: "15px",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={post.featuredUrl}
                      alt={post.blogTitle}
                      sx={{
                        transition: "filter 0.4s ease",
                        "&:hover": { filter: "grayscale(100%)" },
                      }}
                    />
                    <Button
                      size="small"
                      variant="contained"
                      sx={categoryBtnStyles}
                    >
                      {post.category}
                    </Button>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    {/* <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <CalendarMonthIcon
                        sx={{ fontSize: 16, color: "#ff5722" }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                      <PersonIcon
                        sx={{ fontSize: 16, color: "#ff5722", ml: 2 }}
                      />
                      <Typography variant="caption" color="#454545">
                        {post.author}
                      </Typography>
                    </Box> */}
                    <Typography
                      variant="h6"
                      onClick={() => navigate(`/article/${post.ogUrl}`)}
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: "#1d1a57",
                        // mb: 0.5,
                        cursor: "pointer",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "3.5rem",
                        "&:hover": { color: "#ff5722" },
                      }}
                    >
                      {post.blogTitle}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.95rem",
                        color: "#6c6c6c",
                        mb: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        lineHeight: 1.6,
                      }}
                    >
                      {post.description}
                    </Typography> */}
                    <Box>
                      <Typography
                        variant="body2"
                        onClick={() => navigate(`/article/${post.ogUrl}`)}
                        sx={{
                          color: "#ff5722",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          "&:hover": { gap: 1.5 },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Read More →
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", my: 10 }}>
            <Typography variant="h6" color="text.secondary">
              No articles found matching your criteria.
            </Typography>
          </Box>
        )}
      </Container>

      {/* Dot Pagination Section with Arrows */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: isMobile ? 1 : 3, my: 6 }}>
        <IconButton
          onClick={(e) => handlePageChange(e, Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          sx={{
            color: "#1d1a57",
            border: "1.5px solid #1d1a57",
            "&:disabled": { borderColor: "#d1d1d1" }
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: isMobile ? 14 : 18 }} />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {[...Array(totalPages)].map((_, index) => (
            <Box
              key={index}
              onClick={(e) => handlePageChange(e, index + 1)}
              sx={{
                width: currentPage === index + 1 ? 30 : 12,
                height: 12,
                borderRadius: "6px",
                backgroundColor: currentPage === index + 1 ? "#1d1a57" : "#d1d1d1",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "#1d1a57",
                  opacity: 0.8,
                },
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={(e) => handlePageChange(e, Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          sx={{
            color: "#1d1a57",
            border: "1.5px solid #1d1a57",
            "&:disabled": { borderColor: "#d1d1d1" }
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: isMobile ? 14 : 18 }} />
        </IconButton>
      </Box>

      <Footer />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

const categoryBtnStyles = {
  position: "absolute",
  top: "10px",
  left: "10px",
  backgroundColor: "#0B70E1",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#065ab3",
  },
};

const navBtnStyles = {
  bgcolor: "white",
  color: "#0B70E1",
  boxShadow: 2,
  "&:hover": { bgcolor: "#f0f0f0" },
};

export default Blog;

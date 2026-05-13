
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
  const blogsPerPage = 6;
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
          mt: 5,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Explore Our Unique Offerings!
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { md: "4rem", xs: "3rem" },
            color: "#ff5722",
          }}
        >
          Vihaan Innovations
        </Typography>
        <Typography sx={{ fontSize: "1.5rem", color: "#6c6c6c" }}>
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



      {/* Blog Cards Carousel */}
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "100%",
          }}
        >
          {/* <IconButton onClick={handlePrev} sx={navBtnStyles}>
                <ArrowBackIos fontSize="small" />
              </IconButton> */}

          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              width: "100%",
              maxWidth: 1200,
              my: 6
            }}
          >
            {loading ? (
              <CircularProgress />
            ) : filteredArticles.length > 0 ? (
              filteredArticles.map((post) => (
                <Card
                  key={post.id}
                  sx={{
                    width: 320,
                    flexShrink: 0,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="300"
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

                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <CalendarMonthIcon
                        sx={{ fontSize: 16, color: "#0B70E1" }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                      <PersonIcon
                        sx={{ fontSize: 16, color: "#0B70E1", ml: 2 }}
                      />
                      <Typography variant="caption" color="#454545">
                        {post.author}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      onClick={() => navigate(`/article/${post.ogUrl}`)}
                      sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: "#0a0a0a",
                        fontFamily: "Livvic",
                        mb: "15px",
                        cursor: "pointer",
                        "&:hover": { color: "#0B70E1" },
                      }}
                    >
                      {post.blogTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        color: "#454545",
                        fontFamily: "Livvic",
                        mb: "15px",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      onClick={() => navigate(`/article/${post.ogUrl}`)}
                      sx={{
                        color: "#061340",
                        fontWeight: 600,
                        cursor: "pointer",
                        "&:hover": { color: "#0B70E1" },
                      }}
                    >
                      Learn More →
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography>No articles found matching your criteria.</Typography>
            )}
          </Box>
        )}
        </Container>
        {/* </Grid>
      </Grid > */}      <Footer />
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

export default Blog;

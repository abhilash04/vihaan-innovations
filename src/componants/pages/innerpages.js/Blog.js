
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

  const mobileScreen = useMediaQuery(
    "(min-width: 375px) and (max-width:599px)"
  );

  const [searchBlogValue, setSearchBlogValue] = useState("");
  const currentIndex = 0;
  const visibleCount = 3;
  const [articleDetails, setArticleDetails] = useState([]);
  const [loading, setLoading] = useState(false);
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
          setArticleDetails(response.data.blogs || []);
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

  const handleBlogInputChange = (e) => setSearchBlogValue(e.target.value);

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    if (location.pathname !== "/articles") {
      navigate("/articles");
    }
  }, [location.pathname, navigate]);

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
              width: mobileScreen ? 350 : 600,
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
                style: { fontSize: mobileScreen ? 12 : 16 },
              }}
              sx={{ borderRadius: 0, width: mobileScreen ? 250 : 500, py: 1 }}
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
                      height="200"
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
                      sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: "#0a0a0a",
                        fontFamily: "Livvic",
                        mb: "15px",
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

          {/* <IconButton onClick={handleNext} sx={navBtnStyles}>
                <ArrowForwardIos fontSize="small" />
              </IconButton> */}
        </Box>
      </Grid>

      {/* Pagination */}
      {/* <Box mt={3} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(filteredArticles.length / articlesPerPage)}
              page={currentPage}
              onChange={(event, value) => paginate(value)}
            />
          </Box> */}
      {/* </Grid>
      </Grid > */}
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
    </div >
  );
};


const categoryBtnStyles = {
  position: "absolute",
  bottom: 10,
  right: 10,
  background: "linear-gradient(to right,#03228f 0%,#03228f 26%,#4e95ed 100%)",
  textTransform: "none",
  fontWeight: "bold",
  borderRadius: "20px",
  padding: "4px 12px",
  fontSize: "0.75rem",
  "&:hover": { background: "linear-gradient(to left,#03228f 0%,#4e95ed 100%)" },
};

export default Blog;
















// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   TextField,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import img1 from "../../../assets/about-part-003.jpg";
// import img2 from "../../../assets/about-part-004.jpg";
// import img3 from "../../../assets/about-part-005.jpg";
// import Footer from "../../common/Footer";
// import HeaderSec from "../../common/HeaderSec";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import BlogBanner from "../sections/BlogBanner";

// const Blog = () => {
//   useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const mobileScreen = useMediaQuery(
//     "(min-width: 375px) and (max-width:599px)"
//   );

//   const [searchCategoryValue, setSearchCategoryValue] = useState("");
//   const [searchBlogValue, setSearchBlogValue] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(0);
//   const currentIndex = 0;
//   const visibleCount = 3;

//   // Dummy articles
//   const articleDetails = [
//     {
//       id: 1,
//       blogTitle: "Tips for Choosing the Right Paint",
//       category: "Guides",
//       ogUrl: "tips-for-choosing-paint",
//       featuredUrl: img1,
//       author: "Admin",
//       date: "Jan 5, 2025",
//       description:
//         "Learn how to pick the right paint color and finish for your home.",
//     },
//     {
//       id: 2,
//       blogTitle: "Trending Wall Colors for 2025",
//       category: "Trends",
//       ogUrl: "trending-wall-colors-2025",
//       featuredUrl: img2,
//       author: "Vihaan",
//       date: "Feb 12, 2025",
//       description:
//         "Discover the top trending wall colors to transform your interiors this year.",
//     },
//     {
//       id: 3,
//       blogTitle: "How to Maintain Painted Walls",
//       category: "Maintenance",
//       ogUrl: "maintain-painted-walls",
//       featuredUrl: img3,
//       author: "Team Vihaan",
//       date: "Mar 20, 2025",
//       description:
//         "Practical tips to keep your painted walls looking fresh and vibrant.",
//     },
//     {
//       id: 4,
//       blogTitle: "Tips for Choosing the Right Paint",
//       category: "Guides",
//       ogUrl: "tips-for-choosing-paint",
//       featuredUrl: img1,
//       author: "Admin",
//       date: "Jan 5, 2025",
//       description:
//         "Learn how to pick the right paint color and finish for your home.",
//     },
//     {
//       id: 5,
//       blogTitle: "Trending Wall Colors for 2025",
//       category: "Trends",
//       ogUrl: "trending-wall-colors-2025",
//       featuredUrl: img2,
//       author: "Vihaan",
//       date: "Feb 12, 2025",
//       description:
//         "Discover the top trending wall colors to transform your interiors this year.",
//     },
//     {
//       id: 6,
//       blogTitle: "How to Maintain Painted Walls",
//       category: "Maintenance",
//       ogUrl: "maintain-painted-walls",
//       featuredUrl: img3,
//       author: "Team Vihaan",
//       date: "Mar 20, 2025",
//       description:
//         "Practical tips to keep your painted walls looking fresh and vibrant.",
//     },
//   ];

//   const categories = [
//     ...new Set(articleDetails.map((article) => article.category)),
//   ];

//   const handleBlogInputChange = (e) => setSearchBlogValue(e.target.value);
//   const handleCategoryInputChange = (e) =>
//     setSearchCategoryValue(e.target.value);

//   useEffect(() => {
//     navigate("/articles");
//   }, [location.pathname, navigate]);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         overflowY: "auto",
//         overflowX: "hidden",
//       }}
//     >
//       <HeaderSec />
//       <BlogBanner />

//       {/* Heading */}
//       <Grid
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           textAlign: "center",
//           padding: "20px",
//           mt: 5,
//         }}
//       >
//         <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
//           Explore Our Unique Offerings!
//         </Typography>
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             fontSize: { md: "4rem", xs: "3rem" },
//             color: "#ff5722",
//           }}
//         >
//           Vihaan Innovations
//         </Typography>
//         <Typography sx={{ fontSize: "1.5rem", color: "#6c6c6c" }}>
//           Discover web solutions, the latest industry trends in development, and
//           inspiring digital success stories.
//         </Typography>
//       </Grid>

//       {/* Search Section */}
//       <Grid
//         sx={{
//           bottom: 0,
//           pt: 2,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Grid style={{ position: "relative" }}>
//           <Grid
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "2px solid #1d1a57",
//               borderRadius: 10,
//               width: mobileScreen ? 350 : 600,
//               background: "#f0f8ff",
//             }}
//           >
//             <TextField
//               size="small"
//               placeholder="Search Category"
//               variant="standard"
//               InputProps={{
//                 disableUnderline: true,
//                 style: {
//                   fontSize: mobileScreen ? 10 : 14,
//                   textAlign: "center",
//                 },
//               }}
//               sx={{ borderRadius: 0, width: mobileScreen ? 70 : 150, py: 1 }}
//               value={searchCategoryValue}
//               onChange={handleCategoryInputChange}
//               autoComplete="off"
//             />
//             <TextField
//               value={searchBlogValue}
//               onChange={handleBlogInputChange}
//               autoComplete="off"
//               placeholder="Search Blog Title"
//               variant="standard"
//               InputProps={{
//                 endAdornment: <SearchIcon style={{ color: "#1d1a57" }} />,
//                 disableUnderline: true,
//                 style: { fontSize: mobileScreen ? 10 : 14 },
//               }}
//               sx={{ borderRadius: 0, width: mobileScreen ? 160 : 300 }}
//             />
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Category Tabs */}
//       <Grid sx={{ p: 5 }}>
//         <Grid
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Grid sx={{ my: 5 }}>
//             <Grid sx={{ display: "flex", gap: 2, overflowX: "auto" }}>
//               {categories.map((category, index) => (
//                 <Grid
//                   key={category}
//                   onClick={() => setSelectedCategory(index)}
//                   sx={{
//                     borderRadius: "25px",
//                     py: 1,
//                     px: 3,
//                     cursor: "pointer",
//                     background:
//                       selectedCategory === index
//                         ? "linear-gradient(90deg, #205deb 0%, #3a93f3 50%, #53c7fa 100%)"
//                         : "#F5F5F5",
//                     color: selectedCategory === index ? "#fff" : "#333",
//                     fontWeight: selectedCategory === index ? "bold" : "normal",
//                     textTransform: "capitalize",
//                   }}
//                 >
//                   <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
//                     {category}
//                   </Typography>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>

//           {/* Blog Cards Carousel */}
//           <Grid container spacing={2} sx={{ width: "100%" }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 2,
//                 width: "100%",
//               }}
//             >
//               {/* <IconButton onClick={handlePrev} sx={navBtnStyles}>
//                 <ArrowBackIos fontSize="small" />
//               </IconButton> */}

//               <Box
//                 sx={{
//                   display: "flex",
//                   gap: 4,
//                   justifyContent: "center",
//                   width: "100%",
//                   maxWidth: 1200,
//                 }}
//               >
//                 {articleDetails
//                   .slice(currentIndex, currentIndex + visibleCount)
//                   .map((post) => (
//                     <Card
//                       key={post.id}
//                       sx={{
//                         width: 320,
//                         flexShrink: 0,
//                         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                         "&:hover": {
//                           transform: "translateY(-8px)",
//                           boxShadow: 6,
//                         },
//                       }}
//                     >
//                       <Box sx={{ position: "relative", overflow: "hidden" }}>
//                         <CardMedia
//                           component="img"
//                           height="200"
//                           image={post.featuredUrl}
//                           alt={post.blogTitle}
//                           sx={{
//                             transition: "filter 0.4s ease",
//                             "&:hover": { filter: "grayscale(100%)" },
//                           }}
//                         />
//                         <Button
//                           size="small"
//                           variant="contained"
//                           sx={categoryBtnStyles}
//                         >
//                           {post.category}
//                         </Button>
//                       </Box>

//                       <CardContent>
//                         <Box
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 1,
//                             mb: 1,
//                           }}
//                         >
//                           <CalendarMonthIcon
//                             sx={{ fontSize: 16, color: "#0B70E1" }}
//                           />
//                           <Typography variant="caption" color="text.secondary">
//                             {post.date}
//                           </Typography>
//                           <PersonIcon
//                             sx={{ fontSize: 16, color: "#0B70E1", ml: 2 }}
//                           />
//                           <Typography variant="caption" color="#454545">
//                             {post.author}
//                           </Typography>
//                         </Box>
//                         <Typography
//                           variant="subtitle1"
//                           sx={{
//                             fontSize: "20px",
//                             fontWeight: 600,
//                             lineHeight: 1.4,
//                             color: "#0a0a0a",
//                             fontFamily: "Livvic",
//                             mb: "15px",
//                             "&:hover": { color: "#0B70E1" },
//                           }}
//                         >
//                           {post.blogTitle}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           sx={{
//                             fontSize: "16px",
//                             color: "#454545",
//                             fontFamily: "Livvic",
//                             mb: "15px",
//                           }}
//                         >
//                           {post.description}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           sx={{
//                             color: "#061340",
//                             fontWeight: 600,
//                             cursor: "pointer",
//                             "&:hover": { color: "#0B70E1" },
//                           }}
//                         >
//                           Learn More →
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   ))}
//               </Box>

//               {/* <IconButton onClick={handleNext} sx={navBtnStyles}>
//                 <ArrowForwardIos fontSize="small" />
//               </IconButton> */}
//             </Box>
//           </Grid>

//           {/* Pagination */}
//           {/* <Box mt={3} display="flex" justifyContent="center">
//             <Pagination
//               count={Math.ceil(filteredArticles.length / articlesPerPage)}
//               page={currentPage}
//               onChange={(event, value) => paginate(value)}
//             />
//           </Box> */}
//         </Grid>
//       </Grid>
//       <Footer />
//     </div>
//   );
// };


// const categoryBtnStyles = {
//   position: "absolute",
//   bottom: 10,
//   right: 10,
//   background: "linear-gradient(to right,#03228f 0%,#03228f 26%,#4e95ed 100%)",
//   textTransform: "none",
//   fontWeight: "bold",
//   borderRadius: "20px",
//   padding: "4px 12px",
//   fontSize: "0.75rem",
//   "&:hover": { background: "linear-gradient(to left,#03228f 0%,#4e95ed 100%)" },
// };

// export default Blog;

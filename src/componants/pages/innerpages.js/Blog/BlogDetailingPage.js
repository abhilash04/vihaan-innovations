import React from 'react';
import { Box, Typography, Grid, Container, TextField, Button, Paper, Link as MuiLink } from '@mui/material';
import { CalendarToday, AccessTime, Visibility } from '@mui/icons-material';

const BlogDetailingPage = ({ blogData }) => {
    // Default fallback data so the page still renders beautifully if no props are passed
    const data = blogData || {
        title: "The Future of Web Development: Trends to Watch",
        date: "October 24, 2026",
        mins: "5 min read",
        views: "1,245 Views",
        bannerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        sidebarImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        content: [
            {
                heading: "Introduction",
                body: "The landscape of web development is constantly evolving, driven by new technologies, shifting user expectations, and the continuous pursuit of better performance. In this article, we delve deep into the most promising trends that are set to redefine how we build and experience the web in the coming years."
            },
            {
                heading: "The Rise of AI-Driven Development",
                body: "Artificial Intelligence is no longer just a buzzword; it's becoming an integral part of the development lifecycle. From intelligent code completion to automated testing and debugging, AI is streamlining workflows and allowing developers to focus on higher-level problem solving. Furthermore, AI-powered features like personalized content delivery and intelligent search are becoming standard expectations for modern web applications.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            },
            {
                heading: "Conclusion",
                body: "Staying ahead in web development requires continuous learning and adaptation. By embracing these emerging trends, developers can create more robust, efficient, and engaging web experiences that meet the demands of tomorrow's users. The future is bright, and the possibilities are limitless."
            }
        ]
    };

    // Helper to generate a URL-safe ID for the table of contents anchors
    const generateSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    return (
        <Box sx={{ width: '100%', pb: { xs: 4, md: 6 }, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
            {/* Banner Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
                    py: { xs: 3, md: 3 },
                    px: 2,
                    mt: 10,
                    borderBottom: '1px solid #38bdf8'
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        {/* Left Box (Title, Date, Read, Views) */}
                        <Grid item xs={12} md={6}>
                            <Box pr={{ md: 4 }}>
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    sx={{
                                        fontWeight: 800,
                                        color: '#0c4a6e',
                                        mb: 3,
                                        lineHeight: 1.3,
                                        fontSize: { xs: '2rem', md: '3rem' }
                                    }}
                                >
                                    {data.title}
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, color: '#0284c7', mt: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <CalendarToday fontSize="medium" sx={{ color: '#0ea5e9' }} />
                                        <Typography variant="body1" fontWeight={600}>{data.date}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AccessTime fontSize="medium" sx={{ color: '#0ea5e9' }} />
                                        <Typography variant="body1" fontWeight={600}>{data.mins}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Visibility fontSize="medium" sx={{ color: '#0ea5e9' }} />
                                        <Typography variant="body1" fontWeight={600}>{data.views}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right Box (Image) */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: { xs: '200px', md: '300px' },
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 50px -12px rgba(2, 132, 199, 0.25)' // Slightly blue tinted shadow
                                }}
                            >
                                <img
                                    src={data.bannerImage}
                                    alt={data.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Main Content Area */}
            <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 8 }, mb: { xs: 4, md: 6 }, position: 'relative', zIndex: 10 }}>
                <Grid container spacing={4}>

                    {/* Dynamic Content Area (md=8) */}
                    <Grid item xs={12} md={8}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 6 },
                                backgroundColor: '#ffffff',
                                borderRadius: '24px',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            {/* Table of Contents */}
                            {data.content && data.content.length > 0 && (
                                <Box sx={{ mb: 6, p: 4, backgroundColor: '#f0f9ff', borderRadius: '16px', borderLeft: '4px solid #0ea5e9' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
                                        Table of Contents
                                    </Typography>
                                    <Box component="ul" sx={{ m: 0, pl: 3 }}>
                                        {data.content.map((section, index) => section.heading && (
                                            <Typography component="li" key={index} sx={{ mb: 1.5 }}>
                                                <MuiLink
                                                    href={`#${generateSlug(section.heading)}`}
                                                    underline="hover"
                                                    sx={{ color: '#0284c7', fontWeight: 600, fontSize: '1.1rem' }}
                                                >
                                                    {section.heading}
                                                </MuiLink>
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            )}

                            {/* Render Dynamic Sections */}
                            {data.content?.map((section, index) => (
                                <Box key={index} id={section.heading ? generateSlug(section.heading) : `section-${index}`} sx={{ mb: 6 }}>
                                    {section.heading && (
                                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#0f172a', mb: 3 }}>
                                            {section.heading}
                                        </Typography>
                                    )}
                                    {section.body && (
                                        <Typography variant="body1" sx={{ color: '#475569', mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                                            {section.body}
                                        </Typography>
                                    )}
                                    {section.image && (
                                        <Box
                                            sx={{
                                                width: { xs: '100%', md: '100%' },
                                                mx: 'auto', /* Centers the image */
                                                height: { xs: '200px', md: '450px' },
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                my: 5,
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                            }}
                                        >
                                            <img
                                                src={section.image}
                                                alt={section.heading || 'Blog Image'}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </Paper>
                    </Grid>

                    {/* Static Content Area (md=4) */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: '24px' }}>

                            {/* Top Small Image */}
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '300px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <img
                                    src={data.sidebarImage}
                                    alt="Side placement"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>

                            {/* Bottom Form */}
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: '24px',
                                    background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)',
                                    border: '1px solid #7dd3fc',
                                    boxShadow: '0 10px 15px -3px rgba(125, 211, 252, 0.3)'
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0284c7', mb: 2, textAlign: 'center' }}>
                                    Subscribe
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#0f172a', mb: 4, textAlign: 'center', fontSize: '1rem' }}>
                                    Get the latest updates directly in your inbox.
                                </Typography>

                                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <TextField
                                        placeholder="Your Name"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '8px',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#bae6fd',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#38bdf8',
                                                },
                                            }
                                        }}
                                    />
                                    <TextField
                                        placeholder="Your Email"
                                        variant="outlined"
                                        type="email"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '8px',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#bae6fd',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#38bdf8',
                                                },
                                            }
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        fullWidth
                                        sx={{
                                            mt: 2,
                                            backgroundColor: '#0284c7',
                                            color: 'white',
                                            fontWeight: 700,
                                            p: 1.5,
                                            fontSize: '1rem',
                                            textTransform: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                backgroundColor: '#0369a1',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 10px 15px -3px rgba(2, 132, 199, 0.4)'
                                            }
                                        }}
                                    >
                                        Subscribe Now
                                    </Button>
                                </Box>
                            </Paper>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BlogDetailingPage;

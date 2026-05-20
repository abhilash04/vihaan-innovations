import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Container, TextField, Button, Paper, Link as MuiLink, Avatar, Divider, CircularProgress, Snackbar, Alert, IconButton as MuiIconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, ArrowRight, Share2, Bookmark, CheckCircle2, Mail } from 'lucide-react';
import { config } from '../../../../config/Config';
import { apiList, invokeApi } from '../../../../services/ApiServices';
import NotFound from '../../NotFound';

const BlogDetailingPage = ({ blogData: propData }) => {
    const { ogUrl } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

    const fetchBlogData = async () => {
        setLoading(true);
        try {
            const params = { ogUrl };
            const response = await invokeApi(config.apiBaseUrl + apiList.getArticleByOgUrl, params);

            if (response?.status >= 200 && response?.status < 300) {
                const resData = response.data;
                // Handling the singular 'blog' array as per latest API spec
                if (resData.responseCode == "200" && resData.blog && resData.blog.length > 0) {
                    setBlogData(resData.blog[0]);
                } else {
                    setNotFound(true);
                    handleError("Blog not found.");
                }
            } else {
                setNotFound(true);
                handleError("Failed to connect to the article service.");
            }
        } catch (error) {
            handleError("An unexpected error occurred while loading the blog.");
        } finally {
            setLoading(false);
        }
    };

    const handleError = (message) => {
        setSnackbar({ open: true, message, severity: 'error' });
    };

    useEffect(() => {
        if (ogUrl) {
            fetchBlogData();
        } else if (propData) {
            setBlogData(propData);
            setLoading(false);
        }
    }, [ogUrl, propData]);

    const data = blogData || {};

    const generateSlug = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : 'section';

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#fcfdff' }}>
                <CircularProgress color="primary" />
            </Box>
        );
    }

    if (notFound) {
        return <NotFound />;
    }

    return (
        <Box sx={{ width: '100%', pb: 5, backgroundColor: '#fcfdff', minHeight: '100vh' }}>
            {/* --- Hero Section --- */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                sx={{
                    position: 'relative',
                    mt: 5,
                    width: '100%',
                    maxWidth: '1750px',
                    height: '775px',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    backgroundColor: '#0a0a1a',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: `url(${data.bannerUrl || data.featuredUrl})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.75) 100%)',
                            zIndex: 1
                        }
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                    <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', px: 2 }}>
                        <Typography
                            sx={{
                                color: '#38bdf8',
                                fontWeight: 800,
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '4px',
                                mb: 3
                            }}
                        >
                            {data.category}
                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{
                                color: '#ffffff',
                                fontWeight: 900,
                                fontSize: { xs: '2.4rem', md: '3.8rem' },
                                lineHeight: 1.1,
                                mb: 4,
                                fontFamily: "'Syne', sans-serif"
                            }}
                        >
                            {data.blogTitle}
                        </Typography>

                        <Box
                            sx={{
                                display: 'inline-flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: { xs: 2, md: 5 },
                                px: 5, py: 2.5,
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '50px',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                color: '#ffffff',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Calendar size={18} color="#38bdf8" />
                                <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>{data.date?.split(' ')[0] || 'Oct 2026'}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Clock size={18} color="#38bdf8" />
                                <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>5 min read</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Eye size={18} color="#38bdf8" />
                                <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>1.2k views</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- Main Reading Experience --- */}
            <Container maxWidth="xl" sx={{ mt: { xs: 8, md: 10 }, position: 'relative', zIndex: 12 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 4, md: 7 },
                                borderRadius: '32px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #f1f5f9',
                                boxShadow: '0 20px 50px -12px rgba(15, 23, 42, 0.08)'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 8, pb: 4, borderBottom: '1px solid #f1f5f9' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: '#0ea5e9', width: 48, height: 48, fontWeight: 700 }}>V</Avatar>
                                    <Box>
                                        <Typography sx={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>Vihaan Insights</Typography>
                                        <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>Technology Analyst</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <MuiIconButton size="small" sx={{ border: '1px solid #e2e8f0', color: '#64748b' }}><Share2 size={18} /></MuiIconButton>
                                    <MuiIconButton size="small" sx={{ border: '1px solid #e2e8f0', color: '#64748b' }}><Bookmark size={18} /></MuiIconButton>
                                </Box>
                            </Box>

                            {/* Table of Contents from HTML */}
                            {data.tableOfContent && (
                                <Box sx={{ mb: 10, p: 4, bgcolor: '#f8fbfc', borderRadius: '24px', border: '1px solid #e0f2fe' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0c4a6e', mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <CheckCircle2 color="#0ea5e9" size={24} /> Highlights
                                    </Typography>
                                    <Box
                                        sx={{
                                            color: '#475569',
                                            '& p, & ul, & li': { m: 0, fontSize: '1rem', fontWeight: 500 }
                                        }}
                                        dangerouslySetInnerHTML={{ __html: data.tableOfContent }}
                                    />
                                </Box>
                            )}

                            {/* Main Blog Content from HTML */}
                            <Box
                                sx={{
                                    color: '#334155',
                                    fontSize: '1.2rem',
                                    lineHeight: 2,
                                    '& p': { mb: 4 },
                                    '& h2, & h3, & h4': { fontWeight: 800, color: '#0f172a', mt: 6, mb: 3, fontFamily: "'Syne', sans-serif" },
                                    '& img': { maxWidth: '100%', borderRadius: '24px', my: 4 }
                                }}
                                dangerouslySetInnerHTML={{ __html: data.blogContent }}
                            />
                        </Paper>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: '28px',
                                    overflow: 'hidden',
                                    border: '1px solid #ede9fe',
                                    bgcolor: '#ffffff',
                                    boxShadow: '0 8px 32px -8px rgba(124, 58, 237, 0.12)',
                                }}
                            >
                                {/* Gradient accent top bar */}
                                <Box sx={{ height: '6px', background: 'linear-gradient(90deg, #7c3aed 0%, #a78bfa 50%, #38bdf8 100%)' }} />

                                {/* Featured image — equal padding on all 4 sides */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: '16px',          /* equal on all sides */
                                        bgcolor: '#f8f5ff',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            aspectRatio: '1 / 1',
                                            maxWidth: '220px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            border: '2px solid #ede9fe',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: '#fff',
                                            boxShadow: '0 4px 16px rgba(124,58,237,0.1)',
                                        }}
                                    >
                                        <img
                                            src={data.featuredUrl}
                                            alt="Featured"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                display: 'block',
                                                padding: '12px',  /* inner equal spacing */
                                                boxSizing: 'border-box',
                                            }}
                                        />
                                    </Box>
                                </Box>

                                {/* Card content */}
                                <Box sx={{ px: '24px', pb: '24px', textAlign: 'center' }}>
                                    <Box
                                        sx={{
                                            display: 'inline-block',
                                            bgcolor: '#f3e8ff',
                                            color: '#7c3aed',
                                            fontSize: '0.72rem',
                                            fontWeight: 700,
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase',
                                            px: 1.5, py: 0.5,
                                            borderRadius: '20px',
                                            mb: 1.5,
                                        }}
                                    >
                                        Featured Article
                                    </Box>
                                    <Typography sx={{ fontWeight: 800, color: '#0f172a', mb: 1, fontSize: '1.05rem', lineHeight: 1.3 }}>
                                        Expert Perspective
                                    </Typography>
                                    <Typography sx={{ color: '#64748b', fontSize: '0.88rem', mb: 2.5, lineHeight: 1.6 }}>
                                        Want custom solutions based on these insights?
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        endIcon={<ArrowRight size={16} />}
                                        sx={{
                                            borderRadius: '14px',
                                            py: 1.4,
                                            fontWeight: 700,
                                            fontSize: '0.9rem',
                                            textTransform: 'none',
                                            background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                                            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 6px 20px rgba(124, 58, 237, 0.45)',
                                            },
                                            transition: 'all 0.25s ease',
                                        }}
                                    >
                                        Consult with us
                                    </Button>
                                </Box>
                            </Paper>

                            <Paper sx={{ p: 5, borderRadius: '32px', background: '#ffffff', border: '1px solid #f1f5f9', boxShadow: '0 40px 80px -20px rgba(15, 23, 42, 0.08)' }}>
                                <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, fontFamily: "'Syne', sans-serif", color: '#0f172a' }}>Join the Circle</Typography>
                                <Typography sx={{ color: '#64748b', fontSize: '1rem', mb: 4 }}>Get weekly deep-dives into future tech.</Typography>
                                <Stack spacing={2.5}>
                                    <TextField fullWidth placeholder="Full Name" sx={inputStyles} />
                                    <TextField fullWidth placeholder="Email Address" sx={inputStyles} />
                                    <TextField fullWidth placeholder="Mobile" sx={inputStyles} />
                                    <Button fullWidth variant="contained" sx={submitBtnStyles}>Submit</Button>
                                </Stack>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
                <Alert severity={snackbar.severity} sx={{ width: '100%' }}>{snackbar.message}</Alert>
            </Snackbar>
        </Box>
    );
};

const inputStyles = {
    '& .MuiOutlinedInput-root': {
        bgcolor: '#f8fafc',
        borderRadius: '16px',
        '& fieldset': { borderColor: 'rgba(15, 23, 42, 0.08)' },
        '&.Mui-focused fieldset': { borderColor: '#7c3aed' },
    }
};

const submitBtnStyles = {
    bgcolor: '#7c3aed',
    color: '#ffffff',
    py: 2,
    borderRadius: '16px',
    fontWeight: 800,
    textTransform: 'none',
    '&:hover': { bgcolor: '#6d28d9', transform: 'translateY(-2px)' },
    transition: 'all 0.3s ease'
};

const Stack = ({ children, spacing = 2, sx }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing, ...sx }}>{children}</Box>
);

export default BlogDetailingPage;

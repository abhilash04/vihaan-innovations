import React from 'react';
import { Box, Typography, Grid, Container, TextField, Button, Paper, Link as MuiLink, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, ArrowRight, Share2, Bookmark, CheckCircle2, Mail } from 'lucide-react';

const BlogDetailingPage = ({ blogData }) => {
    // Default fallback data so the page still renders beautifully if no props are passed
    const data = blogData || {
        title: "The Future of Web Development: Trends and Transformative Technologies to Watch in 2026",
        date: "October 24, 2026",
        mins: "5 min read",
        views: "1,245 Views",
        author: {
            name: "Vihaan Insights",
            role: "Technology Analyst"
        },
        bannerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        sidebarImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
        content: [
            {
                heading: "The Paradigm Shift in Modern Architecture",
                body: "The landscape of web development is constantly evolving, driven by new technologies, shifting user expectations, and the continuous pursuit of better performance. In this article, we delve deep into the most promising trends that are set to redefine how we build and experience the web in the coming years. From server-side rendering breakthroughs to edge computing, the foundations are moving beneath our feet."
            },
            {
                heading: "The Rise of AI-Driven Development",
                body: "Artificial Intelligence is no longer just a buzzword; it's becoming an integral part of the development lifecycle. From intelligent code completion to automated testing and debugging, AI is streamlining workflows and allowing developers to focus on higher-level problem solving. Furthermore, AI-powered features like personalized content delivery and intelligent search are becoming standard expectations for modern web applications.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            },
            {
                heading: "Edge Computing & Instant Latency",
                body: "Moving compute closer to the user is the final frontier. Global edge networks now allow us to serve dynamic content with the speed of static sites. This shift is enabling real-time collaboration and immersive experiences that were previously impossible without heavy native applications."
            },
            {
                heading: "Conclusion",
                body: "Staying ahead in web development requires continuous learning and adaptation. By embracing these emerging trends, developers can create more robust, efficient, and engaging web experiences that meet the demands of tomorrow's users. The future is bright, and the possibilities are limitless."
            }
        ]
    };

    const generateSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <Box sx={{ width: '100%', pb: 10, backgroundColor: '#fcfdff', minHeight: '100vh' }}>
            {/* --- Hero Section: Redesigned --- */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                sx={{
                    position: 'relative',
                    height: { xs: '70vh', md: '80vh' },
                    width: '100%',
                    mb: -10, // Overlap effect
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Background Image with Parallax-like overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${data.bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)',
                            zIndex: 1
                        }
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                    <Box 
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', px: 2 }}
                    >
                        <Typography
                            component={motion.span}
                            variants={itemVariants}
                            sx={{
                                display: 'inline-block',
                                color: '#38bdf8',
                                fontWeight: 800,
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '4px',
                                mb: 3
                            }}
                        >
                            Insight & Strategy
                        </Typography>
                        
                        <Typography
                            component={motion.h1}
                            variants={itemVariants}
                            sx={{
                                color: '#ffffff',
                                fontWeight: 900,
                                fontSize: { xs: '2.4rem', md: '3.8rem' },
                                lineHeight: 1.1,
                                mb: 4,
                                fontFamily: "'Syne', sans-serif",
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                            }}
                        >
                            {data.title}
                        </Typography>

                        {/* Glassmorphism Metadata Card */}
                        <Box
                           component={motion.div}
                           variants={itemVariants}
                           sx={{
                               display: 'inline-flex',
                               flexWrap: 'wrap',
                               justifyContent: 'center',
                               gap: { xs: 2, md: 5 },
                               px: 5,
                               py: 2.5,
                               background: 'rgba(255, 255, 255, 0.08)',
                               backdropFilter: 'blur(12px)',
                               borderRadius: '50px',
                               border: '1px solid rgba(255, 255, 255, 0.15)',
                               color: '#ffffff',
                           }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Calendar size={18} color="#38bdf8" />
                                <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>{data.date}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Clock size={18} color="#38bdf8" />
                                <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>{data.mins}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Eye size={18} color="#38bdf8" />
                                <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>{data.views}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* --- Main Reading Experience --- */}
            <Container maxWidth="xl" sx={{ mt: { xs: 15, md: 20 }, position: 'relative', zIndex: 12 }}>
                <Grid container spacing={6}>
                    
                    {/* Reading Content */}
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
                            {/* Author Inline Bio */}
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 8, pb: 4, borderBottom: '1px solid #f1f5f9' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: '#0ea5e9', width: 48, height: 48, fontWeight: 700 }}>V</Avatar>
                                    <Box>
                                        <Typography sx={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>{data.author?.name}</Typography>
                                        <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>{data.author?.role}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <IconButton size="small" sx={{ border: '1px solid #e2e8f0', color: '#64748b' }}><Share2 size={18} /></IconButton>
                                    <IconButton size="small" sx={{ border: '1px solid #e2e8f0', color: '#64748b' }}><Bookmark size={18} /></IconButton>
                                </Box>
                            </Box>

                            {/* Table of Contents Overlay */}
                            {data.content && (
                                <Box sx={{ mb: 10, p: 4, bgcolor: '#f8fbfc', borderRadius: '24px', border: '1px solid #e0f2fe' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0c4a6e', mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <CheckCircle2 color="#0ea5e9" size={24} /> Table of Contents
                                    </Typography>
                                    <Box component="nav" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                                        {data.content.map((sec, idx) => sec.heading && (
                                            <MuiLink
                                                key={idx}
                                                href={`#${generateSlug(sec.heading)}`}
                                                sx={{
                                                    color: '#475569',
                                                    textDecoration: 'none',
                                                    fontSize: '0.95rem',
                                                    fontWeight: 600,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    transition: 'all 0.2s',
                                                    '&:hover': { color: '#0ea5e9', transform: 'translateX(5px)' }
                                                }}
                                            >
                                                <Divider sx={{ width: 10, borderColor: '#cbd5e1' }} /> {sec.heading}
                                            </MuiLink>
                                        ))}
                                    </Box>
                                </Box>
                            )}

                            {/* Dynamic Blog Sections */}
                            {data.content?.map((section, index) => (
                                <Box 
                                    key={index}
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    id={section.heading ? generateSlug(section.heading) : `sec-${index}`}
                                    sx={{ mb: 8 }}
                                >
                                    {section.heading && (
                                        <Typography 
                                            variant="h4" 
                                            sx={{ 
                                                fontWeight: 800, 
                                                color: '#0f172a', 
                                                mb: 3, 
                                                fontFamily: "'Syne', sans-serif",
                                                position: 'relative',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: -20,
                                                    top: '20%',
                                                    height: '60%',
                                                    width: '4px',
                                                    bgcolor: '#0ea5e9',
                                                    borderRadius: '4px',
                                                    display: { xs: 'none', md: 'block' }
                                                }
                                            }}
                                        >
                                            {section.heading}
                                        </Typography>
                                    )}
                                    {section.body && (
                                        <Typography sx={{ color: '#334155', fontSize: '1.15rem', lineHeight: 1.9, mb: 4, fontWeight: 400 }}>
                                            {section.body}
                                        </Typography>
                                    )}
                                    {section.image && (
                                        <Box
                                            component={motion.div}
                                            whileHover={{ scale: 1.01 }}
                                            sx={{
                                                borderRadius: '24px',
                                                overflow: 'hidden',
                                                my: 5,
                                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            <img src={section.image} alt={section.heading} style={{ width: '100%', display: 'block' }} />
                                            {section.heading && (
                                                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', p: 2, bgcolor: '#f8fafc', color: '#64748b', fontStyle: 'italic' }}>
                                                    Visualizing {section.heading} - Emerging Industry Patterns
                                                </Typography>
                                            )}
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </Paper>
                    </Grid>

                    {/* Sidebar: Redesigned */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 5 }}>
                            
                            {/* Sidebar Featured Image Card */}
                            <Paper
                                sx={{
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    border: '1px solid #f1f5f9',
                                    backgroundColor: '#ffffff'
                                }}
                            >
                                <img src={data.sidebarImage} alt="Sidebar" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                                <Box sx={{ p: 4, textAlign: 'center' }}>
                                    <Typography sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5, fontSize: '1.1rem' }}>Need Expert Consultation?</Typography>
                                    <Typography sx={{ color: '#64748b', fontSize: '0.9rem', mb: 3 }}>Our tech architects can help you implement these trends today.</Typography>
                                    <Button 
                                        variant="outlined" 
                                        fullWidth 
                                        endIcon={<ArrowRight size={16} />}
                                        sx={{ borderRadius: '12px', py: 1.5, fontWeight: 700, borderColor: '#0ea5e9', color: '#0ea5e9' }}
                                    >
                                        Let's Connect
                                    </Button>
                                </Box>
                            </Paper>

                            {/* Subscription Card: Updated to match simplified Contact Form */}
                            <Paper
                                sx={{
                                    p: { xs: 4, md: 5 },
                                    borderRadius: '32px',
                                    background: '#ffffff',
                                    border: '1px solid #f1f5f9',
                                    boxShadow: '0 40px 80px -20px rgba(15, 23, 42, 0.08)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box sx={{ position: 'relative', zIndex: 1 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, fontFamily: "'Syne', sans-serif", color: '#0f172a' }}>
                                        Join the Circle
                                    </Typography>
                                    <Typography sx={{ color: '#64748b', fontSize: '1rem', mb: 4, lineHeight: 1.5 }}>
                                        Get weekly deep-dives into future tech sent to your inbox.
                                    </Typography>
                                    
                                    <Stack spacing={2.5}>
                                        <TextField 
                                            fullWidth 
                                            placeholder="Full Name"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: '#f8fafc',
                                                    borderRadius: '16px',
                                                    color: '#0f172a',
                                                    '& fieldset': { borderColor: 'rgba(15, 23, 42, 0.08)' },
                                                    '&.Mui-focused fieldset': { borderColor: '#7c3aed' },
                                                }
                                            }}
                                        />
                                        <TextField 
                                            fullWidth 
                                            placeholder="Your Email Address"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: '#f8fafc',
                                                    borderRadius: '16px',
                                                    color: '#0f172a',
                                                    '& fieldset': { borderColor: 'rgba(15, 23, 42, 0.08)' },
                                                    '&.Mui-focused fieldset': { borderColor: '#7c3aed' },
                                                }
                                            }}
                                        />
                                        <TextField 
                                            fullWidth 
                                            placeholder="Mobile Number"
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: '#f8fafc',
                                                    borderRadius: '16px',
                                                    color: '#0f172a',
                                                    '& fieldset': { borderColor: 'rgba(15, 23, 42, 0.08)' },
                                                    '&.Mui-focused fieldset': { borderColor: '#7c3aed' },
                                                }
                                            }}
                                        />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#7c3aed',
                                                color: '#ffffff',
                                                py: 2,
                                                borderRadius: '16px',
                                                fontWeight: 800,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                boxShadow: '0 10px 20px -5px rgba(124, 58, 237, 0.3)',
                                                '&:hover': { 
                                                    bgcolor: '#6d28d9',
                                                    transform: 'translateY(-2px)'
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Stack>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 4, pt: 3, borderTop: '1px solid #f1f5f9' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', bgcolor: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}>
                                            <Mail size={14} />
                                        </Box>
                                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#64748b' }}>
                                            Join 5,000+ technology leaders
                                        </Typography>
                                    </Box>
                                </Box>
                                {/* Decorative Radial Gradient */}
                                <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, transparent 70%)' }} />
                            </Paper>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// Placeholder components to avoid breaks
const IconButton = ({ children, sx, ...props }) => (
    <Box component="button" sx={{ 
        cursor: 'pointer', border: 'none', background: 'none', p: 1, borderRadius: '50%', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        transition: 'all 0.2s', '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }, ...sx 
    }} {...props}>{children}</Box>
);

const Stack = ({ children, spacing = 2, sx }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing, ...sx }}>{children}</Box>
);

export default BlogDetailingPage;

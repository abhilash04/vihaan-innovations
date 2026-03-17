import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardMedia, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// --- BRAND COLORS (Consistent with previous sections) ---
const colors = {
  primary: '#1A3320', // Dark Green
  gold: '#D4AF37',    // Gold
  cream: '#F9F7F2',   // Light Background
  white: '#FFFFFF',
  sage: '#8A9A5B',
};

// --- BLOG DATA (With new placeholder images) ---
// Image Size Strategy: Landscape (e.g., 800x600px or 16:9) for blog cards.
const blogPosts = [
  {
    id: 1,
    title: 'Rosemary Oil for Hair: Does it really work?',
    image: 'https://images.unsplash.com/photo-1594384028662-400059645614?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: 2,
    title: 'How to Dilute Essential Oils Safely',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: 3,
    title: '5 DIY Face Serums You Can Make at Home',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
];

export default function OrganicaContent() {
  return (
    <Box>
      
      {/* --- SECTION 4: THE ABOUT FEATURE (SPLIT SCREEN) --- */}
      <Box sx={{ backgroundColor: colors.white }}>
        <Grid container sx={{ minHeight: '600px' }}>
          
          {/* LEFT SIDE: IMAGE */}
          {/* Image Size Strategy: Full height, half width. Use a high-res vertical or square image that crops well. */}
          <Grid item xs={12} md={6} sx={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1539514532148-5a8a65fb040c?auto=format&fit=crop&q=80&w=1000)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: { xs: '400px', md: 'auto' } // Ensures height on mobile
          }} />
          
          {/* RIGHT SIDE: TEXT */}
          <Grid item xs={12} md={6} sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: colors.white,
            p: { xs: 4, md: 8, lg: 12 }
          }}>
            <Box>
              <Typography variant="overline" sx={{ 
                color: colors.gold, 
                letterSpacing: '2px', 
                fontWeight: 700,
                display: 'block',
                mb: 2
              }}>
                Our Philosophy
              </Typography>
              <Typography variant="h2" sx={{ 
                fontFamily: 'Playfair Display, serif', 
                color: colors.primary, 
                fontWeight: 700,
                mb: 3
              }}>
                From Soil to Soul.
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#555', 
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: 1.8,
                mb: 4,
                fontSize: '1.1rem'
              }}>
                At Organica Oils, we believe in the power of purity. No fillers, no synthetics—just the raw, potent essence of nature bottled at the source. We partner with artisanal farmers to bring you oils that heal, nourish, and restore.
              </Typography>
              <Button 
                variant="outlined" 
                sx={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  fontFamily: 'Montserrat',
                  borderRadius: '0', // Sharp corners for a modern look
                  padding: '12px 36px',
                  borderWidth: '2px',
                  '&:hover': {
                    backgroundColor: colors.primary,
                    color: colors.white,
                    borderColor: colors.primary
                  }
                }}
              >
                Read Our Story
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* --- SECTION 5: EDUCATIONAL BLOG TEASER --- */}
      <Box sx={{ backgroundColor: colors.cream, py: 12 }}>
        <Container maxWidth="xl">
          
          {/* SECTION HEADER */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ 
              fontFamily: 'Playfair Display, serif', 
              color: colors.primary, 
              fontWeight: 700
            }}>
              The Oil Guide
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#555', 
              fontFamily: 'Montserrat, sans-serif',
              mt: 2
            }}>
              Expert tips, DIY recipes, and the science behind our ingredients.
            </Typography>
          </Box>

          {/* BLOG CARDS GRID */}
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item xs={12} md={4} key={post.id}>
                <Card 
                  elevation={0}
                  sx={{ 
                    backgroundColor: 'transparent', 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover img': {
                      transform: 'scale(1.05)'
                    },
                    '&:hover .MuiLink-root': {
                      color: colors.gold
                    }
                  }}
                >
                  {/* Blog Image */}
                  <Box sx={{ overflow: 'hidden', borderRadius: '12px', mb: 3 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={post.image}
                      alt={post.title}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  
                  {/* Blog Content */}
                  <CardContent sx={{ p: 0, flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" sx={{ 
                      fontFamily: 'Playfair Display, serif', 
                      color: colors.primary, 
                      fontWeight: 600,
                      mb: 2,
                      minHeight: '64px' // Ensures alignment for titles with different lengths
                    }}>
                      {post.title}
                    </Typography>
                    <Link 
                      href={post.link} 
                      underline="none"
                      sx={{ 
                        color: colors.primary,
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        transition: 'color 0.3s'
                      }}
                    >
                      Read Article
                      <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.1rem' }} />
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>
    </Box>
  );
}
import React from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import InstagramIcon from '@mui/icons-material/Instagram';

// --- BRAND COLORS ---
const colors = {
  primary: '#1A3320', // Dark Green
  gold: '#D4AF37',    // Gold
  cream: '#F9F7F2',   // Light Background
  white: '#FFFFFF',
};

// --- INSTAGRAM FEED DATA ---
// Image Size Strategy: Square images (e.g., 600x600px) for a grid layout.
const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1589156288850-56f613931738?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1619737307100-556d439985a9?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1620916566398-1b1c01d01402?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1550508488-404617200327?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600619988034-493844080274?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
];

export default function OrganicaCommunity() {
  return (
    <Box>
      
      {/* --- SECTION 6: SOCIAL PROOF (TESTIMONIAL PARALLAX) --- */}
      <Box sx={{ 
        // Image Strategy: A wide, high-res, slightly blurred background image.
        backgroundImage: 'linear-gradient(rgba(26, 51, 32, 0.7), rgba(26, 51, 32, 0.7)), url(https://images.unsplash.com/photo-1506090582796-047803253349?auto=format&fit=crop&q=80&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Creates the parallax effect
        py: { xs: 10, md: 16 },
        textAlign: 'center',
        color: colors.white
      }}>
        <Container maxWidth="md">
          
          {/* Five Star Rating */}
          <Box sx={{ mb: 3 }}>
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} sx={{ color: colors.gold, fontSize: '2rem' }} />
            ))}
          </Box>

          {/* Testimonial Quote */}
          <Typography variant="h4" component="blockquote" sx={{ 
            fontFamily: 'Playfair Display, serif',
            fontWeight: 500,
            lineHeight: 1.4,
            mb: 4,
            fontStyle: 'italic',
            fontSize: { xs: '1.5rem', md: '2.2rem' }
          }}>
            “I’ve tried dozens of oils, but the Cold-Pressed Almond Oil from Organica is a game changer. My skin has never felt this soft. Truly liquid gold.”
          </Typography>

          {/* Author */}
          <Typography variant="subtitle1" sx={{ 
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            — Sarah J., Verified Buyer
          </Typography>

        </Container>
      </Box>

      {/* --- SECTION 7: INSTAGRAM FEED --- */}
      <Box sx={{ backgroundColor: colors.cream, pt: 12, pb: 4 }}>
        <Container maxWidth="xl">
          
          {/* SECTION HEADER */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <InstagramIcon sx={{ color: colors.gold, fontSize: '2rem', mr: 1 }} />
              <Typography variant="overline" sx={{ color: colors.gold, letterSpacing: '2px', fontWeight: 700 }}>
                @OrganicaOils
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ 
              fontFamily: 'Playfair Display, serif', 
              color: colors.primary, 
              fontWeight: 700
            }}>
              Join the #OrganicaLife
            </Typography>
          </Box>

          {/* INSTAGRAM GRID */}
          <Grid container spacing={2}>
            {instagramPosts.map((post) => (
              <Grid item xs={6} md={4} lg={2} key={post.id}>
                <Card 
                  elevation={0}
                  sx={{ 
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover .insta-overlay': {
                      opacity: 1
                    },
                    '&:hover img': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  {/* Post Image */}
                  <CardMedia
                    component="img"
                    // Square ratio for grid
                    sx={{ aspectRatio: '1 / 1', transition: 'transform 0.3s' }}
                    image={post.image}
                    alt="Instagram Post"
                  />
                  
                  {/* Hover Overlay */}
                  <Box 
                    className="insta-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(26, 51, 32, 0.6)', // Primary color with opacity
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <IconButton sx={{ color: colors.white }}>
                      <InstagramIcon fontSize="large" />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          
        </Container>
      </Box>
    </Box>
  );
}
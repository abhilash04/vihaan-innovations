import React from 'react';
import { Box, Grid, Typography, Button, Container, Paper } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import PetsIcon from '@mui/icons-material/Pets';
import OpacityIcon from '@mui/icons-material/Opacity';
import RecyclingIcon from '@mui/icons-material/Recycling';

// --- BRAND COLORS ---
const colors = {
  primary: '#1A3320', // Dark Green from Logo
  gold: '#D4AF37',    // Gold from Logo
  cream: '#F9F7F2',   // Light Background
  white: '#FFFFFF',
  sage: '#8A9A5B',
};

// --- DATA FOR SECTIONS ---
const trustMetrics = [
  { icon: <SpaIcon />, label: '100% Organic & Pure' },
  { icon: <PetsIcon />, label: 'Cruelty-Free & Vegan' },
  { icon: <OpacityIcon />, label: 'Cold-Pressed Extraction' },
  { icon: <RecyclingIcon />, label: 'Sustainable Packaging' },
];

const categories = [
  {
    title: 'Essential Oils',
    subtitle: 'Pure Aromatics',
    // Replace with the image URL I provide below
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800', 
  },
  {
    title: 'Carrier Oils',
    subtitle: 'The Perfect Base',
    image: 'https://images.unsplash.com/photo-1615486511484-92e172cc416d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Wellness Blends',
    subtitle: 'Find Your Balance',
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Hair & Skincare',
    subtitle: 'Glow Naturally',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800',
  },
];

export default function TrustStrip() {
  return (
    <Box sx={{ backgroundColor: colors.cream, paddingBottom: '4rem' }}>
      
      {/* --- SECTION 1: TRUST STRIP --- */}
      <Box sx={{ 
        backgroundColor: colors.white, 
        py: 4, 
        borderBottom: `1px solid ${colors.sage}30` 
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} justifyContent="center">
            {trustMetrics.map((item, index) => (
              <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                <Box sx={{ 
                  color: colors.primary, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: 1 
                }}>
                  {/* Icon Design: Gold Circle with Green Icon */}
                  <Box sx={{
                    fontSize: '2.5rem',
                    color: colors.gold,
                    mb: 1
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="subtitle1" sx={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 600,
                    color: colors.primary,
                    letterSpacing: '0.5px'
                  }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- SECTION 2: SHOP BY CATEGORY --- */}
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Typography variant="h3" sx={{ 
          fontFamily: 'Playfair Display, serif', 
          color: colors.primary, 
          textAlign: 'center', 
          mb: 1,
          fontWeight: 700
        }}>
          Shop by Category
        </Typography>
        <Typography variant="body1" sx={{ 
          color: '#555', 
          textAlign: 'center', 
          mb: 6,
          fontFamily: 'Montserrat, sans-serif'
        }}>
          Pure, potent, and proven ingredients for every need.
        </Typography>

        <Grid container spacing={3}>
          {categories.map((cat, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Paper 
                elevation={0}
                sx={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  },
                  '&:hover .overlay': {
                    backgroundColor: 'rgba(26, 51, 32, 0.4)' // Darkens on hover
                  },
                  '&:hover .btn': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }}
              >
                {/* Background Image */}
                <Box 
                  component="img"
                  src={cat.image}
                  alt={cat.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                
                {/* Overlay Gradient */}
                <Box 
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(26,51,32,0.9) 0%, rgba(0,0,0,0) 50%)',
                    transition: 'background-color 0.3s'
                  }} 
                />

                {/* Text Content */}
                <Box sx={{
                  position: 'absolute',
                  bottom: 30,
                  left: 0,
                  width: '100%',
                  textAlign: 'center',
                  px: 2
                }}>
                  <Typography variant="h5" sx={{ 
                    color: colors.white, 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600
                  }}>
                    {cat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: colors.gold, 
                    mb: 2,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '0.75rem'
                  }}>
                    {cat.subtitle}
                  </Typography>
                  
                  {/* Hidden Button that slides up */}
                  <Button 
                    variant="outlined" 
                    className="btn"
                    sx={{
                      opacity: 0,
                      transform: 'translateY(20px)',
                      transition: 'all 0.3s ease',
                      borderColor: colors.white,
                      color: colors.white,
                      '&:hover': {
                        borderColor: colors.gold,
                        backgroundColor: colors.white,
                        color: colors.primary
                      }
                    }}
                  >
                    Explore
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
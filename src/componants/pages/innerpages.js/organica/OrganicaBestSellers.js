import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Rating, IconButton, Chip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// --- BRAND COLORS ---
const colors = {
  primary: '#1A3320', // Dark Green
  gold: '#D4AF37',    // Gold
  cream: '#F9F7F2',   // Light Background
  white: '#FFFFFF',
  sage: '#8A9A5B',
  textLight: '#555555'
};

// --- PRODUCT DATA (With New Images) ---
// Image Size Strategy: 600x800px (Portrait) for clear product visibility
const products = [
  {
    id: 1,
    name: 'Moroccan Argan Oil',
    category: 'Hair & Skin',
    price: 24.00,
    rating: 5,
    reviews: 124,
    // Image: Golden oil bottle with nuts
    image: 'https://images.unsplash.com/photo-1629198727546-f9a860778401?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Lavender Sleep Drops',
    category: 'Aromatherapy',
    price: 18.50,
    rating: 5,
    reviews: 89,
    // Image: Purple tint, relaxing vibe
    image: 'https://images.unsplash.com/photo-1596483568285-b15392d40409?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Trending'
  },
  {
    id: 3,
    name: 'Golden Jojoba Oil',
    category: 'Carrier Oil',
    price: 22.00,
    rating: 4,
    reviews: 56,
    // Image: Clear golden liquid
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600&h=800',
    tag: null
  },
  {
    id: 4,
    name: 'Rosemary Growth Oil',
    category: 'Hair Care',
    price: 26.00,
    rating: 4.5,
    reviews: 210,
    // Image: Green herbal vibe
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'New Arrival'
  }
];

export default function OrganicaBestSellers() {
  return (
    <Box sx={{ backgroundColor: colors.cream, py: 10 }}>
      <Container maxWidth="xl">
        
        {/* --- SECTION HEADER --- */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ 
            color: colors.gold, 
            letterSpacing: '2px', 
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>
            Pure & Potent
          </Typography>
          <Typography variant="h3" sx={{ 
            fontFamily: 'Playfair Display, serif', 
            color: colors.primary, 
            fontWeight: 700,
            mt: 1
          }}>
            Loved by Nature, Curated for You
          </Typography>
        </Box>

        {/* --- PRODUCT GRID --- */}
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card 
                sx={{
                  maxWidth: '100%',
                  borderRadius: '16px',
                  boxShadow: 'none',
                  backgroundColor: colors.white,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 30px rgba(26, 51, 32, 0.1)'
                  },
                  '&:hover .add-btn': {
                    backgroundColor: colors.primary,
                    color: colors.white
                  }
                }}
              >
                {/* Product Tag (Best Seller, etc.) */}
                {product.tag && (
                  <Chip 
                    label={product.tag} 
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      zIndex: 2,
                      backgroundColor: colors.primary,
                      color: colors.white,
                      fontFamily: 'Montserrat',
                      fontSize: '0.7rem',
                      height: '24px'
                    }} 
                  />
                )}

                {/* Wishlist Icon */}
                <IconButton 
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 2,
                    color: colors.primary,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    '&:hover': { backgroundColor: colors.gold, color: colors.white }
                  }}
                >
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>

                {/* Product Image */}
                <Box sx={{ overflow: 'hidden', height: '320px' }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  />
                </Box>

                {/* Product Details */}
                <CardContent sx={{ pt: 3, pb: '24px !important' }}>
                  <Typography variant="caption" sx={{ color: colors.sage, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {product.category}
                  </Typography>
                  
                  <Typography variant="h6" sx={{ 
                    fontFamily: 'Playfair Display, serif', 
                    color: colors.primary,
                    fontWeight: 600,
                    mt: 0.5,
                    mb: 1
                  }}>
                    {product.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating 
                      value={product.rating} 
                      readOnly 
                      precision={0.5} 
                      size="small"
                      sx={{ 
                        color: colors.gold,
                        '& .MuiRating-iconEmpty': { color: '#E0E0E0' }
                      }} 
                    />
                    <Typography variant="caption" sx={{ ml: 1, color: '#999' }}>
                      ({product.reviews})
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ color: colors.primary, fontWeight: 700 }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                    
                    {/* Add to Cart Button */}
                    <IconButton 
                      className="add-btn"
                      sx={{ 
                        border: `1px solid ${colors.primary}`,
                        color: colors.primary,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* --- VIEW ALL BUTTON --- */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Box 
            component="button" 
            sx={{
              backgroundColor: 'transparent',
              border: `1px solid ${colors.primary}`,
              color: colors.primary,
              padding: '12px 40px',
              fontFamily: 'Montserrat',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: colors.primary,
                color: colors.gold
              }
            }}
          >
            View All Products
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
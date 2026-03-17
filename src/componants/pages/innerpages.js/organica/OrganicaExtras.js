import React from 'react';
import { Box, Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// --- BRAND COLORS ---
const colors = {
  primary: '#1A3320', // Dark Green
  gold: '#D4AF37',    // Gold
  cream: '#F9F7F2',   // Light Background
  white: '#FFFFFF',
  sage: '#8A9A5B',
  darkSage: '#4A5D23'
};

export default function OrganicaExtras() {
  return (
    <Box>
      
      {/* --- SECTION 8: INGREDIENT SPOTLIGHT (Dark Luxury Block) --- */}
      {/* PLACEMENT: Put this AFTER Best Sellers */}
      <Box sx={{ 
        backgroundColor: colors.primary, 
        color: colors.white, 
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Grid container>
          {/* TEXT SIDE */}
          <Grid item xs={12} md={6} sx={{ p: { xs: 4, md: 8, lg: 12 }, zIndex: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AutoAwesomeIcon sx={{ color: colors.gold, mr: 1 }} />
              <Typography variant="overline" sx={{ color: colors.gold, letterSpacing: '2px', fontWeight: 700 }}>
                Ingredient of the Month
              </Typography>
            </Box>
            
            <Typography variant="h2" sx={{ 
              fontFamily: 'Playfair Display, serif', 
              color: colors.white, 
              fontWeight: 700,
              mb: 2
            }}>
              Pure Lavender Essence
            </Typography>
            
            <Typography variant="body1" sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              fontFamily: 'Montserrat, sans-serif',
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}>
              Sourced from the high-altitude fields of Provence, our lavender is steam-distilled within hours of harvest to capture the complete aromatic profile. It's not just a scent; it's a sleep-inducing, anxiety-calming miracle.
            </Typography>

            <List>
              {[
                'Harvested at peak bloom for maximum potency',
                '100% steam distilled - no chemical solvents',
                'Rich in Linalool for deep relaxation'
              ].map((text, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: '36px' }}>
                    <CheckCircleOutlineIcon sx={{ color: colors.sage }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={text} 
                    primaryTypographyProps={{ 
                      fontFamily: 'Montserrat', 
                      color: colors.white 
                    }} 
                  />
                </ListItem>
              ))}
            </List>

            <Button 
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: colors.gold,
                color: colors.primary,
                fontFamily: 'Montserrat',
                fontWeight: 600,
                padding: '12px 32px',
                '&:hover': { backgroundColor: colors.white }
              }}
            >
              Shop Lavender Collection
            </Button>
          </Grid>

          {/* IMAGE SIDE */}
          <Grid item xs={12} md={6} sx={{ 
            minHeight: '500px',
            position: 'relative'
          }}>
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1563483783225-b55272421375?auto=format&fit=crop&q=80&w=1000"
              alt="Lavender Macro"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Gradient Overlay to blend image into text on mobile */}
            <Box sx={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: {
                xs: `linear-gradient(to top, ${colors.primary} 10%, transparent 50%)`,
                md: 'none' // No gradient needed on desktop side-by-side
              }
            }} />
          </Grid>
        </Grid>
      </Box>


      {/* --- SECTION 9: THE WELLNESS QUIZ (Interactive Banner) --- */}
      {/* PLACEMENT: Put this AFTER The Blog Section */}
      <Box sx={{ 
        py: 10, 
        backgroundColor: colors.sage, // Soft green background
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Circle Background */}
        <Box sx={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          zIndex: 0
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ 
            fontFamily: 'Playfair Display, serif', 
            color: colors.white, 
            fontWeight: 700,
            mb: 2
          }}>
            Not sure what you need?
          </Typography>
          <Typography variant="h6" sx={{ 
            fontFamily: 'Montserrat, sans-serif', 
            color: colors.white, 
            fontWeight: 400,
            mb: 5,
            opacity: 0.9
          }}>
            Take our 30-second ritual quiz to find the perfect oil blend for your skin type and stress level.
          </Typography>

          <Button 
            size="large"
            sx={{
              backgroundColor: 'transparent',
              border: `2px solid ${colors.white}`,
              color: colors.white,
              fontFamily: 'Montserrat',
              letterSpacing: '1px',
              padding: '16px 48px',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: colors.white,
                color: colors.primary,
                transform: 'scale(1.05)'
              }
            }}
          >
            Find My Ritual
          </Button>
        </Container>
      </Box>

    </Box>
  );
}
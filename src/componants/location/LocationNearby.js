import React from 'react';
import { Box, Container, Typography, Stack, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const LocationNearby = ({ locationName, nearbyLocations = [], serviceTitle, serviceSlug }) => {
  if (nearbyLocations.length === 0) return null;

  return (
    <Box sx={{ py: 12, background: '#fff', borderTop: '1px solid var(--border)' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={8}>
          <Typography sx={{ 
            color: 'var(--blue-primary)', fontWeight: 700, fontSize: '12px', 
            letterSpacing: '0.14em', textTransform: 'uppercase' 
          }}>
            ALSO SERVING
          </Typography>
          <Typography variant="h2" sx={{ 
            fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
            fontSize: { xs: '32px', md: '38px' }, textAlign: 'center' 
          }}>
            {serviceTitle} Near {locationName}
          </Typography>
          <Typography sx={{ color: 'var(--text-muted)', textAlign: 'center' }}>
            We serve all major areas near {locationName} with the same level of excellence.
          </Typography>
        </Stack>

        <Box sx={{ 
          display: 'flex', gap: 3, overflowX: 'auto', pb: 4, 
          px: 1, '&::-webkit-scrollbar': { display: 'none' },
          scrollSnapType: 'x mandatory'
        }}>
          {nearbyLocations.map((loc, index) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ flex: '0 0 300px', scrollSnapAlign: 'start' }}
            >
              <Paper 
                component={RouterLink}
                to={`/locations/${serviceSlug}/${loc.slug}`}
                elevation={0}
                sx={{ 
                  p: 4, borderRadius: '20px', border: '1px solid var(--border-blue)',
                  background: '#fff', transition: 'all 0.3s ease', display: 'block',
                  textDecoration: 'none',
                  '&:hover': { 
                    background: 'var(--bg-subtle)', transform: 'translateY(-5px)',
                    boxShadow: 'var(--card-shadow)', borderColor: 'var(--blue-primary)'
                  }
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 44, height: 44, borderRadius: '12px', background: 'var(--bg-subtle)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <LocationOn sx={{ color: 'var(--blue-primary)' }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: 'var(--navy)', fontSize: '16px' }}>
                        {loc.name}
                      </Typography>
                      <Typography sx={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {loc.city || 'Region'}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ borderColor: 'var(--border)' }} />
                  <Typography sx={{ 
                    color: 'var(--blue-primary)', fontWeight: 700, fontSize: '14px',
                    display: 'flex', alignItems: 'center', gap: 1
                  }}>
                    View Services <ArrowForward fontSize="small" />
                  </Typography>
                </Stack>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const Divider = (props) => <Box component="div" {...props} /> 

export default LocationNearby;

import React from 'react';
import { Box, Container, Typography, Grid, Link, Stack, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { locationData } from '../../data/locations/locationData';

const LocationFooterLinks = ({ serviceSlug, serviceTitle, currentSlug }) => {
  const serviceData = locationData[serviceSlug] || locationData['website-development'];
  const locations = serviceData.locations || [];

  const localities = locations.filter(l => l.type === 'locality');
  const cities = locations.filter(l => l.type === 'city');
  const countries = locations.filter(l => l.type === 'country');

  const renderLinkColumn = (title, items) => (
    <Box>
      <Typography sx={{ fontWeight: 800, color: 'var(--navy)', mb: 3, fontSize: '1.1rem' }}>{title}</Typography>
      <Grid container spacing={1}>
        {items.map(loc => (
          <Grid item xs={6} sm={12} key={loc.slug}>
            <Link
              component={RouterLink}
              to={`/locations/${serviceSlug}/${loc.slug}`}
              sx={{
                fontSize: '14px',
                color: loc.slug === currentSlug ? 'var(--blue-primary)' : 'var(--text-mid)',
                fontWeight: loc.slug === currentSlug ? 800 : 500,
                textDecoration: 'none',
                display: 'block',
                py: 0.5,
                transition: 'all 0.2s',
                '&:hover': { 
                  color: 'var(--blue-primary)',
                  transform: 'translateX(5px)'
                }
              }}
            >
              • {loc.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ py: 12, background: 'var(--bg-light)', borderTop: '1px solid var(--border)' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={10}>
          <Typography variant="h3" sx={{ 
            fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
            fontSize: { xs: '28px', md: '34px' }, textAlign: 'center' 
          }}>
            Explore {serviceTitle} Across Locations
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
            {['Bangalore Localities', 'Indian Cities', 'Global Reach'].map(tag => (
              <Chip key={tag} label={tag} variant="outlined" size="small" sx={{ borderColor: 'var(--border-blue)', color: 'var(--blue-primary)', fontWeight: 600 }} />
            ))}
          </Stack>
        </Stack>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            {renderLinkColumn(`${serviceTitle} in Bangalore`, localities)}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderLinkColumn(`${serviceTitle} in Major Cities`, cities)}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderLinkColumn(`Global IT Solutions`, countries)}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LocationFooterLinks;

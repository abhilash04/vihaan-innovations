import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/locations/services';

const LocationServices = ({ serviceSlug, locationName }) => {
  const service = servicesData[serviceSlug] || servicesData['website-development'];
  const services = service.list || [];

  return (
    <Box sx={{ py: 12, background: 'var(--grad-section)' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={8}>
          <Typography sx={{ 
            color: 'var(--blue-primary)', fontWeight: 700, fontSize: '12px', 
            letterSpacing: '0.14em', textTransform: 'uppercase' 
          }}>
            OUR SERVICES IN {locationName}
          </Typography>
          <Typography variant="h2" sx={{ 
            fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
            fontSize: { xs: '32px', md: '38px' }, textAlign: 'center' 
          }}>
            {service.title} We Offer in {locationName}
          </Typography>
          <Typography sx={{ 
            color: 'var(--text-muted)', fontSize: '16px', textAlign: 'center', 
            maxWidth: '700px', lineHeight: 1.8 
          }}>
            We provide end-to-end digital excellence tailored for businesses in {locationName}. 
            Our solutions are designed to scale and succeed in the {locationName} market.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {services.map((item, index) => (
            <Grid item xs={12} sm={6} md={serviceSlug === 'digital-marketing' ? 4 : 4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper elevation={0} sx={{ 
                  borderRadius: '20px', p: 4, height: '100%', border: '1px solid var(--border)',
                  background: '#fff', transition: 'all 0.4s ease', position: 'relative',
                  overflow: 'hidden', display: 'flex', flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'var(--card-hover)',
                    borderColor: 'var(--blue-primary)',
                    '& .hover-bar': { width: '100%' },
                    '& .service-icon': { transform: 'scale(1.1)' }
                  }
                }}>
                  {/* Icon */}
                  <Box className="service-icon" sx={{ 
                    width: 48, height: 48, borderRadius: '12px', background: 'var(--grad-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px',
                    color: '#fff', mb: 3, transition: 'transform 0.3s'
                  }}>
                    {item.icon}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--navy)', mb: 2, fontSize: '18px' }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, mb: 3 }}>
                    {item.desc}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Button sx={{ 
                      p: 0, textTransform: 'none', color: 'var(--blue-primary)', fontWeight: 700,
                      '&:hover': { background: 'transparent', '& span': { transform: 'translateX(5px)' } }
                    }}>
                      Learn More <Box component="span" sx={{ ml: 1, transition: 'transform 0.2s' }}>→</Box>
                    </Button>
                  </Box>

                  {/* Hover Bottom Bar */}
                  <Box className="hover-bar" sx={{ 
                    position: 'absolute', bottom: 0, left: 0, width: '0%', height: '3px',
                    background: 'var(--grad-primary)', transition: 'width 0.4s'
                  }} />
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LocationServices;

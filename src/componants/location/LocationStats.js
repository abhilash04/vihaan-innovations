import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { RocketLaunch, Groups, Public, Star } from '@mui/icons-material';

const LocationStats = ({ locationName, stats }) => {
  const statItems = [
    { label: `Projects in ${locationName}`, value: stats.projectsDelivered, icon: <RocketLaunch fontSize="large" />, desc: "Successful deliveries" },
    { label: "Happy Clients", value: stats.clientsServed, icon: <Groups fontSize="large" />, desc: "Localized businesses" },
    { label: "Total Projects Globally", value: "2000+", icon: <Public fontSize="large" />, desc: "International footprint" },
    { label: "Average Rating", value: "4.9★", icon: <Star fontSize="large" />, desc: "Client satisfaction" }
  ];

  return (
    <Box sx={{ 
      py: 10, background: 'var(--grad-primary)', color: '#fff', position: 'relative', overflow: 'hidden'
    }}>
      {/* Faint Wave Pattern Overlay */}
      <Box sx={{ 
        position: 'absolute', inset: 0, opacity: 0.08, zIndex: 0,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/waves.png")'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {statItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Stack spacing={1} alignItems="center" sx={{ 
                  textAlign: 'center',
                  borderRight: { md: index < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }
                }}>
                  <Box sx={{ opacity: 0.8, mb: 1 }}>{item.icon}</Box>
                  <Typography sx={{ 
                    fontFamily: 'Syne', fontWeight: 800, fontSize: { xs: '42px', md: '52px' }, 
                    lineHeight: 1 
                  }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '15px', letterSpacing: '0.5px' }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', opacity: 0.7 }}>
                    {item.desc}
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LocationStats;

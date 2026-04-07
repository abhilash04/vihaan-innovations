import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';

const LocationWhyUs = ({ locationName, cityName, stats }) => {
  const reasons = [
    { title: "Local Understanding", desc: `We know the ${locationName} market like the back of our hand.` },
    { title: "Fast Turnaround", desc: `Delivery timelines built for the fast-paced ${cityName || locationName} businesses.` },
    { title: "Dedicated Support", desc: `Your personal technology team right here in ${locationName}.` },
    { title: "Proven Results", desc: `${stats.projectsDelivered} successful projects delivered for ${locationName} clients.` }
  ];

  return (
    <Box sx={{ py: 12, background: 'var(--grad-bg)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2} mb={4}>
              <Typography sx={{ 
                color: 'var(--blue-primary)', fontWeight: 700, fontSize: '12px', 
                letterSpacing: '0.14em', textTransform: 'uppercase' 
              }}>
                WHY VIHAAN IN {locationName}
              </Typography>
              <Typography variant="h2" sx={{ 
                fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
                fontSize: { xs: '32px', md: '42px' }, lineHeight: 1.2
              }}>
                The {locationName} Businesses' Preferred Tech Partner
              </Typography>
              <Typography sx={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8 }}>
                We combine global expertise with local insights to deliver digital results that actually move the needle for your business in {locationName}.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
              <Box>
                <Typography sx={{ fontFamily: 'Syne', fontWeight: 900, color: 'var(--blue-primary)', fontSize: '52px', lineHeight: 1 }}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stats.projectsDelivered.replace('+', '')}
                  </motion.span>+
                </Typography>
                <Typography sx={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600 }}>PROJECTS</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(37, 99, 235, 0.2)' }} />
              <Box>
                <Typography sx={{ fontFamily: 'Syne', fontWeight: 900, color: 'var(--blue-primary)', fontSize: '52px', lineHeight: 1 }}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {stats.clientsServed.replace('+', '')}
                  </motion.span>+
                </Typography>
                <Typography sx={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600 }}>CLIENTS</Typography>
              </Box>
            </Stack>

            <Button sx={{ 
              p: 0, textTransform: 'none', color: 'var(--blue-primary)', fontWeight: 700, fontSize: '16px',
              '&:hover': { background: 'transparent', textDecoration: 'underline' }
            }}>
              Read Client Stories →
            </Button>
          </Grid>

          {/* Right Column - Reason Grid */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {reasons.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: index < 2 ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Paper elevation={0} sx={{ 
                      p: 4, borderRadius: '20px', background: '#fff', borderTop: '4px solid var(--blue-primary)',
                      boxShadow: 'var(--card-shadow)', transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.02)' }
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--navy)', mb: 1, fontSize: '18px' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
                        {item.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Divider = (props) => <Box component="div" {...props} /> 

export default LocationWhyUs;

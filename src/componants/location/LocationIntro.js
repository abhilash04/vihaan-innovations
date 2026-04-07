import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Business, Public, Security } from '@mui/icons-material';

const LocationIntro = ({ locationName, cityName, locationType, localKeywords = [], serviceTitle }) => {
  const isLocality = locationType === 'locality';

  return (
    <Box sx={{ py: 12, background: '#fff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Column - Rich Text */}
          <Grid item xs={12} md={7.5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" sx={{ 
                fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
                fontSize: { xs: '32px', md: '38px' }, mb: 4 
              }}>
                Why Businesses in {locationName} Choose Vihaan
              </Typography>
              
              <Stack spacing={3}>
                <Typography sx={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8 }}>
                  The economic landscape of {locationName} is unique and rapidly evolving. With its {localKeywords.slice(0, 2).join(' and ')} focus, businesses here demand digital solutions that are as fast-paced and innovative as the environment itself. At Vihaan Innovations, we understand the local business pulse of {isLocality ? `${locationName} and the greater ${cityName}` : locationName}.
                </Typography>
                
                <Typography sx={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8 }}>
                  We serve a diverse range of clients across {locationName}, from ambitious tech startups looking for their first MVP to established corporate offices seeking complex enterprise transformations. Our team doesn't just build {serviceTitle.toLowerCase()}; we deliver digital ecosystems that speak the language of your local audience.
                </Typography>
                
                <Typography sx={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, fontWeight: 600 }}>
                  Why does a local-focused partner matter? Because we know the competition you face in {locationName}, the landmarks your customers recognize, and the specific growth opportunities within this region.
                </Typography>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Column - Location Card */}
          <Grid item xs={12} md={4.5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={0} sx={{ 
                borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)',
                boxShadow: 'var(--card-shadow)', background: '#fff', position: 'relative'
              }}>
                <Box sx={{ height: '4px', background: 'var(--grad-primary)' }} />
                
                {/* Map Placeholder */}
                <Box sx={{ 
                  height: '180px', background: 'var(--bg-subtle)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 1
                }}>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Box sx={{ 
                      width: 48, height: 48, borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Business sx={{ color: 'var(--blue-primary)', fontSize: '28px' }} />
                    </Box>
                  </motion.div>
                  <Typography sx={{ fontWeight: 800, color: 'var(--blue-primary)', fontFamily: 'Syne' }}>{locationName}</Typography>
                </Box>

                <Box sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: 'var(--text-muted)' }}><Business fontSize="small" /></Box>
                      <Box>
                        <Typography sx={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>LOCATION</Typography>
                        <Typography sx={{ fontWeight: 700, color: 'var(--navy)' }}>{locationName}{isLocality ? `, ${cityName}` : ''}</Typography>
                      </Box>
                    </Box>
                    
                    <Divider sx={{ borderColor: 'var(--border)' }} />
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: 'var(--text-muted)' }}><Public fontSize="small" /></Box>
                      <Box>
                        <Typography sx={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>KEY INDUSTRIES</Typography>
                        <Typography sx={{ fontWeight: 700, color: 'var(--navy)', textTransform: 'capitalize' }}>
                          {localKeywords.length > 0 ? localKeywords.join(', ') : 'Tech, Real Estate, Finance'}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Divider sx={{ borderColor: 'var(--border)' }} />
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: 'var(--text-muted)' }}><Security fontSize="small" /></Box>
                      <Box>
                        <Typography sx={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>SERVICE REACH</Typography>
                        <Typography sx={{ fontWeight: 700, color: 'var(--navy)' }}>Pan-{cityName || locationName} and Remote</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ 
                      mt: 2, p: 2, background: 'var(--bg-subtle)', borderRadius: '12px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                      <Typography sx={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-mid)' }}>Response Time:</Typography>
                      <Typography sx={{ fontSize: '14px', fontWeight: 800, color: 'var(--blue-primary)' }}>Within 2 Hours</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LocationIntro;

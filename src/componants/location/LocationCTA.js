import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, TextField, Button, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';

const LocationCTA = ({ locationName, cityName, serviceTitle, stats }) => {
  return (
    <Box sx={{ py: 12, background: 'var(--grad-primary)', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography sx={{
                color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: '12px',
                letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2
              }}>
                GET STARTED
              </Typography>
              <Typography variant="h2" sx={{
                fontFamily: 'Syne', fontWeight: 800, color: '#fff',
                fontSize: { xs: '38px', md: '52px' }, lineHeight: 1.2, mb: 4
              }}>
                Ready to Grow Your Business in {locationName}?
              </Typography>

              <Stack spacing={3} mb={5}>
                <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', maxWidth: '500px' }}>
                  Our team is ready to help you dominate the {locationName} market with cutting-edge {serviceTitle.toLowerCase()}.
                </Typography>

                <Stack spacing={2}>
                  {["Free Consultation", "Response in 2hrs", `Local ${locationName} Team`].map(item => (
                    <Stack key={item} direction="row" alignItems="center" spacing={1.5}>
                      <CheckCircle sx={{ color: '#fff', fontSize: '20px' }} />
                      <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '16px' }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>

              <Stack direction="row" spacing={-1} alignItems="center">
                {[1, 2, 3, 4].map(i => (
                  <Box key={i} sx={{
                    width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
                    border: '2px solid #fff', backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800
                  }}>
                    {String.fromCharCode(64 + i)}
                  </Box>
                ))}
                <Typography sx={{ color: '#fff', fontWeight: 700, ml: 2, fontSize: '14px' }}>
                  Join {stats.clientsServed}+ {locationName} businesses
                </Typography>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Column - Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper sx={{
                p: 4.5, borderRadius: '32px', background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
              }}>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth placeholder="Your Name" variant="outlined"
                        sx={{ background: 'rgba(255,255,255,0.1)', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' }, '& input': { color: '#fff' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth placeholder="Email Address" variant="outlined"
                        sx={{ background: 'rgba(255,255,255,0.1)', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' }, '& input': { color: '#fff' } }}
                      />
                    </Grid>
                  </Grid>
                  <TextField fullWidth placeholder="Phone Number" variant="outlined"
                    sx={{ background: 'rgba(255,255,255,0.1)', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' }, '& input': { color: '#fff' } }}
                  />
                  <TextField select fullWidth defaultValue={serviceTitle} variant="outlined"
                    sx={{ background: 'rgba(255,255,255,0.1)', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' }, '& .MuiSelect-select': { color: '#fff' } }}
                  >
                    <MenuItem value="Website Development Services">Website Development</MenuItem>
                    <MenuItem value="Digital Marketing Services">Digital Marketing</MenuItem>
                  </TextField>
                  <TextField fullWidth multiline rows={3} placeholder="Tell us about your project" variant="outlined"
                    sx={{ background: 'rgba(255,255,255,0.1)', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' }, '& .MuiInputBase-input': { color: '#fff' } }}
                  />

                  <Button variant="contained" size="large" sx={{
                    background: '#fff', color: 'var(--blue-primary)', py: 2, fontWeight: 800,
                    borderRadius: '16px', fontSize: '16px', textTransform: 'none',
                    '&:hover': { background: '#f8faff', transform: 'scale(1.02)' }
                  }}>
                    Get Free Consultation →
                  </Button>

                  <Typography sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>
                    🔒 Your data is 100% secure. We never spam.
                  </Typography>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LocationCTA;

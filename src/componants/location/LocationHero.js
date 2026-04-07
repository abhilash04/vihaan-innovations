import React from 'react';
import { Box, Container, Typography, Stack, Button, Chip, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, CheckCircle, LocationOn } from '@mui/icons-material';

const LocationHero = ({
  serviceTitle,
  locationName,
  cityName,
  locationType,
  landmark,
  description,
  stats,
  heroTagline,
}) => {
  const isLocality = locationType === 'locality';
  const isCountry = locationType === 'country';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const clipMaskVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.8, ease: "easeInOut" } }
  };

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--grad-bg)',
      overflow: 'hidden',
      pt: { xs: 12, md: 0 }
    }}>
      {/* Decorative Orbs */}
      <Box sx={{ 
        position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '40%',
        background: 'radial-gradient(circle, var(--blue-primary) 0%, transparent 70%)',
        opacity: 0.08, filter: 'blur(60px)', zIndex: 0
      }} />
      <Box sx={{ 
        position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '40%',
        background: 'radial-gradient(circle, var(--sky-blue) 0%, transparent 70%)',
        opacity: 0.08, filter: 'blur(60px)', zIndex: 0
      }} />
      
      {/* Dot Grid Pattern */}
      <Box sx={{ 
        position: 'absolute', inset: 0, opacity: 0.03, zIndex: 0,
        backgroundImage: 'radial-gradient(var(--blue-mid) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={7}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {/* Breadcrumb */}
              <motion.div variants={itemVariants}>
                <Typography sx={{ fontSize: '12px', color: 'var(--text-muted)', mb: 2, fontWeight: 600 }}>
                  Home → Services → <Box component="span" sx={{ color: 'var(--sky-blue)' }}>{serviceTitle}</Box> → {locationName}
                </Typography>
              </motion.div>

              {/* Location Badge */}
              <motion.div variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
              }}>
                <Chip 
                  icon={<LocationOn sx={{ fontSize: '16px !important', color: 'var(--blue-primary)' }} />}
                  label={`${serviceTitle} in ${locationName}${isLocality ? `, ${cityName}` : ''}`}
                  sx={{ 
                    background: '#dbeafe', color: 'var(--blue-primary)', fontWeight: 700, 
                    borderRadius: '50px', mb: 3, px: 1, '& .MuiChip-label': { px: 1 }
                  }}
                />
              </motion.div>

              {/* H1 Headline */}
              <Box sx={{ mb: 3 }}>
                <motion.div variants={clipMaskVariants}>
                  <Typography variant="h1" sx={{ 
                    fontSize: { xs: '42px', md: '62px' }, fontWeight: 800, color: 'var(--navy)', 
                    lineHeight: 1.1, fontFamily: 'Syne' 
                  }}>
                    {isCountry ? `Serving Clients Across` : `Best ${heroTagline}`}
                  </Typography>
                </motion.div>
                <motion.div variants={clipMaskVariants} style={{ transitionDelay: '180ms' }}>
                  <Typography variant="h1" sx={{ 
                    fontSize: { xs: '42px', md: '62px' }, fontWeight: 800,
                    background: 'var(--grad-primary)', WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', lineHeight: 1.2, fontFamily: 'Syne'
                  }}>
                    in {locationName}{isLocality && <Box component="span" sx={{ color: 'var(--text-muted)', fontSize: '0.6em', ml: 2 }}>{cityName}</Box>}
                  </Typography>
                </motion.div>
              </Box>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <Typography sx={{ 
                  color: 'var(--text-mid)', fontSize: '17px', lineHeight: 1.85, 
                  maxWidth: '550px', mb: 4, fontWeight: 400 
                }}>
                  {description || `Unlock the full potential of your ${locationName}-based business with our custom-engineered digital solutions. We specialize in crafting bespoke digital experiences.`}
                </Typography>
              </motion.div>

              {/* Trust Chips */}
              <Grid container spacing={1.5} sx={{ mb: 5 }}>
                {[
                  `${stats.projectsDelivered} Projects Delivered`,
                  `${stats.clientsServed} Clients Served`,
                  `${stats.yearsInRegion} Years Experience`,
                  `Free Consultation Available`
                ].map((text, i) => (
                  <Grid item key={i}>
                    <motion.div variants={itemVariants} custom={i}>
                      <Paper elevation={0} sx={{ 
                        px: 2, py: 1, borderRadius: '50px', border: '1px solid var(--border-blue)',
                        display: 'flex', alignItems: 'center', gap: 1, background: '#fff'
                      }}>
                        <CheckCircle sx={{ color: 'var(--blue-primary)', fontSize: '16px' }} />
                        <Typography sx={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>{text}</Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* CTAs */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <motion.div variants={itemVariants}>
                  <Button variant="contained" size="large" sx={{ 
                    background: 'var(--grad-primary)', color: '#fff', borderRadius: '50px',
                    px: 4, py: 1.8, fontWeight: 700, textTransform: 'none', fontSize: '16px',
                    boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)',
                    '&:hover': { transform: 'scale(1.02)', boxShadow: '0 15px 30px rgba(37, 99, 235, 0.3)' }
                  }}>
                    Get Free Consultation
                  </Button>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button variant="outlined" size="large" sx={{ 
                    borderColor: 'var(--blue-primary)', color: 'var(--blue-primary)', borderRadius: '50px',
                    px: 4, py: 1.8, fontWeight: 700, textTransform: 'none', fontSize: '16px',
                    '&:hover': { background: 'var(--bg-subtle)' }
                  }}>
                    View Our Work
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Visual Card */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Paper elevation={0} sx={{ 
                  borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-blue)',
                  boxShadow: 'var(--card-hover)', background: '#fff', position: 'relative', zIndex: 2
                }}>
                  <Box sx={{ background: 'var(--grad-primary)', px: 3, py: 1.5 }}>
                    <Typography sx={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>
                      Vihaan Innovations — {locationName} Office
                    </Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--navy)', mb: 3 }}>
                      Project Showcase
                    </Typography>
                    <Grid container spacing={2} mb={3}>
                      {[1, 2, 3].map(i => (
                        <Grid item xs={4} key={i}>
                          <Box sx={{ 
                            aspectRatio: '4/3', background: 'var(--bg-subtle)', borderRadius: '12px',
                            border: '1px dashed var(--border-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}>
                            <Typography sx={{ fontSize: '10px', color: 'var(--text-muted)' }}>Project {i}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ 
                        width: 8, height: 8, borderRadius: '50%', background: '#10b981',
                        boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite'
                      }} />
                      <Typography sx={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
                        Current Projects in {locationName}: <Box component="span" sx={{ color: 'var(--navy)' }}>Active ●</Box>
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '-15%', left: '-10%', zIndex: 3 }}
              >
                <Paper sx={{ p: 1.5, px: 2, borderRadius: '12px', borderLeft: '4px solid var(--blue-primary)', boxShadow: 'var(--card-shadow)' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 800 }}>⭐ 4.9 Rating in {locationName}</Typography>
                </Paper>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: 'absolute', top: '10%', right: '-10%', zIndex: 1 }}
              >
                <Paper sx={{ p: 1.5, px: 2, borderRadius: '12px', borderLeft: '4px solid var(--sky-blue)', boxShadow: 'var(--card-shadow)' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 800 }}>🚀 {stats.projectsDelivered} Projects</Typography>
                </Paper>
              </motion.div>

              <motion.div
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ position: 'absolute', bottom: '10%', right: '-20%', zIndex: 1 }}
              >
                <Paper sx={{ p: 1.5, px: 2, borderRadius: '12px', borderLeft: '4px solid var(--navy)', boxShadow: 'var(--card-shadow)' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 800 }}>📍 Serving {locationName} since 2018</Typography>
                </Paper>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default LocationHero;

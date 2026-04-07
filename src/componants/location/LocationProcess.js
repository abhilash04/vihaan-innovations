import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Stack, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';

const LocationProcess = ({ locationName, serviceTitle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const steps = [
    { number: "01", title: "Discovery", desc: `We understand your ${locationName} business goals and target audience.`, pos: 'above' },
    { number: "02", title: "Strategy", desc: "We plan the perfect solution tailored to your local market needs.", pos: 'below' },
    { number: "03", title: "Design", desc: "Our team crafts beautiful, high-conversion interfaces for your brand.", pos: 'above' },
    { number: "04", title: "Development", desc: "We build with clean, scalable, and modern code to ensure long-term success.", pos: 'below' },
    { number: "05", title: "Launch & Support", desc: "We go live and provide ongoing support to fuel your business growth.", pos: 'above' }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Box ref={containerRef} sx={{ py: 12, background: '#fff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={12}>
          <Typography sx={{ 
            color: 'var(--blue-primary)', fontWeight: 700, fontSize: '12px', 
            letterSpacing: '0.14em', textTransform: 'uppercase' 
          }}>
            HOW WE WORK
          </Typography>
          <Typography variant="h2" sx={{ 
            fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
            fontSize: { xs: '32px', md: '38px' }, textAlign: 'center' 
          }}>
            Our Proven Process for {locationName} Clients
          </Typography>
        </Stack>

        <Box sx={{ position: 'relative', pt: { md: 10 }, pb: { md: 10 } }}>
          {!isMobile && (
            <svg 
              width="100%" height="200" viewBox="0 0 1000 200" fill="none" 
              style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 0 }}
            >
              <motion.path
                d="M0 100 Q 125 0, 250 100 T 500 100 T 750 100 T 1000 100"
                stroke="var(--sky-light)"
                strokeWidth="4"
                strokeDasharray="10 10"
                style={{ pathLength }}
              />
            </svg>
          )}

          <Grid container spacing={isMobile ? 4 : 0}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={2.4} key={index} sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, y: step.pos === 'above' ? -40 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Stack 
                    alignItems="center" 
                    sx={{ 
                      mt: !isMobile && step.pos === 'below' ? 15 : 0,
                      mb: !isMobile && step.pos === 'above' ? 15 : 0
                    }}
                  >
                    {/* Node */}
                    <Box sx={{ 
                      width: 56, height: 56, borderRadius: '50%', background: 'var(--grad-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3,
                      boxShadow: '0 0 0 8px rgba(37, 99, 235, 0.1)', position: 'relative'
                    }}>
                      <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '18px' }}>{step.number}</Typography>
                    </Box>

                    {/* Content Card */}
                    <Paper elevation={0} sx={{ 
                      p: 3, borderRadius: '20px', background: '#fff', border: '1px solid var(--border)',
                      boxShadow: 'var(--card-shadow)', width: '100%', maxWidth: '240px', textAlign: 'center',
                      '&:hover': { transform: 'scale(1.05)', borderColor: 'var(--blue-primary)' },
                      transition: 'all 0.3s'
                    }}>
                      <Typography sx={{ fontWeight: 800, color: 'var(--navy)', mb: 1, fontSize: '16px' }}>{step.title}</Typography>
                      <Typography sx={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.6, mb: 2 }}>{step.desc}</Typography>
                      <Stack spacing={0.5}>
                        {['Planning', 'Execution', 'Feedback'].map((tag, i) => (
                          <Stack key={tag} direction="row" alignItems="center" spacing={1} justifyContent="center">
                            <CheckCircle sx={{ color: 'var(--blue-primary)', fontSize: '12px' }} />
                            <Typography sx={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-mid)' }}>{tag}</Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Paper>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationProcess;

import React from 'react';
import { Box, Container, Typography, Stack, Paper, Rating } from '@mui/material';
import { motion } from 'framer-motion';

const dummyTestimonials = [
  { name: "John Doe", role: "CEO", company: "LocalTech", text: "Vihaan Innovations transformed our digital presence in the region. Highly recommended!" },
  { name: "Sarah Smith", role: "Manager", company: "StartHub", text: "Professional, timely, and truly understood our local market requirements." },
  { name: "Rahul Verma", role: "Founder", company: "EduSpark", text: "The best tech partner we've worked with. Their attention to detail is unmatched." },
  { name: "Anita George", role: "Director", company: "FinSmart", text: "Exceptional quality and support. They are our go-to partner for all things digital." }
];

const LocationTestimonials = ({ locationName, cityName }) => {
  return (
    <Box sx={{ py: 12, background: 'var(--grad-bg)', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={10}>
          <Typography sx={{
            color: 'var(--blue-primary)', fontWeight: 700, fontSize: '12px',
            letterSpacing: '0.14em', textTransform: 'uppercase'
          }}>
            CLIENT REVIEWS
          </Typography>
          <Typography variant="h2" sx={{
            fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)',
            fontSize: { xs: '32px', md: '38px' }, textAlign: 'center'
          }}>
            What {locationName} Clients Say About Us
          </Typography>
        </Stack>
      </Container>

      {/* Testimonial Rows */}
      <Stack spacing={4}>
        {[0, 1].map((rowIndex) => (
          <Box key={rowIndex} sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <motion.div
              animate={{
                x: rowIndex === 0 ? ["0%", "-50%"] : ["-50%", "0%"]
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ display: 'flex', gap: '30px', width: 'max-content' }}
            >
              {[...dummyTestimonials, ...dummyTestimonials].map((item, i) => (
                <Paper
                  key={i}
                  elevation={0}
                  sx={{
                    p: 4, borderRadius: '24px', background: '#fff', width: '350px',
                    borderTop: '4px solid var(--blue-primary)', boxShadow: 'var(--card-shadow)',
                    transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' }
                  }}
                >
                  <Rating value={5} readOnly size="small" sx={{ mb: 2, color: '#facc15' }} />
                  <Typography sx={{ color: 'var(--navy)', fontSize: '15px', fontStyle: 'italic', mb: 3, lineHeight: 1.6 }}>
                    "{item.text}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--blue-primary)' }}>
                      {item.name[0]}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: 'var(--navy)', fontSize: '14px' }}>{item.name}</Typography>
                      <Typography sx={{ color: 'var(--text-muted)', fontSize: '12px' }}>{item.role}, {item.company}</Typography>
                    </Box>
                  </Stack>
                  <Box sx={{ mt: 2, display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1.5, py: 0.5, borderRadius: '50px', background: 'var(--bg-subtle)' }}>
                    <Typography sx={{ fontSize: '10px', fontWeight: 800, color: 'var(--blue-primary)' }}>📍 {locationName}</Typography>
                  </Box>
                </Paper>
              ))}
            </motion.div>
          </Box>
        ))}
      </Stack>

      <Container maxWidth="lg" sx={{ mt: 6, textAlign: 'center' }}>
        <Typography sx={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          4.9/5 Average Rating ⭐ from {locationName} Clients
        </Typography>
      </Container>
    </Box>
  );
};

export default LocationTestimonials;

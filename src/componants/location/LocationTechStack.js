import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const techRows = [
  [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "Vue.js", icon: "🟢" },
    { name: "Angular", icon: "🅰️" },
    { name: "Flutter", icon: "📱" },
    { name: "React Native", icon: "📱" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" }
  ],
  [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎸" },
    { name: "AWS", icon: "☁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" }
  ]
];

const LocationTechStack = ({ serviceTitle, locationName }) => {
  return (
    <Box sx={{ py: 12, background: 'var(--grad-section)', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={10}>
          <Typography sx={{ 
            color: 'var(--blue-primary)', fontWeight: 700, fontSize: '12px', 
            letterSpacing: '0.14em', textTransform: 'uppercase' 
          }}>
            TECHNOLOGIES
          </Typography>
          <Typography variant="h2" sx={{ 
            fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
            fontSize: { xs: '32px', md: '38px' }, textAlign: 'center' 
          }}>
            Tech Stack We Use for {locationName} Clients
          </Typography>
        </Stack>
      </Container>

      {/* Ticker Rows */}
      <Stack spacing={4}>
        {techRows.map((row, rowIndex) => (
          <Box key={rowIndex} sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <motion.div
              animate={{ 
                x: rowIndex === 0 ? ["0%", "-50%"] : ["-50%", "0%"]
              }}
              transition={{ 
                duration: rowIndex === 0 ? 30 : 24, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ display: 'flex', gap: '20px', width: 'max-content' }}
            >
              {[...row, ...row].map((tech, i) => (
                <Box
                  key={i}
                  sx={{ 
                    px: 3, py: 1.5, borderRadius: '50px', background: '#fff',
                    border: '1px solid var(--border-blue)', display: 'flex', alignItems: 'center', gap: 1.5,
                    boxShadow: 'var(--card-shadow)', transition: 'all 0.3s',
                    '&:hover': { transform: 'translateY(-5px)', borderColor: 'var(--blue-primary)', cursor: 'default' }
                  }}
                >
                  <Box component="span" sx={{ fontSize: '24px' }}>{tech.icon}</Box>
                  <Typography sx={{ fontWeight: 800, color: 'var(--navy)', fontSize: '14px', whiteSpace: 'nowrap' }}>
                    {tech.name}
                  </Typography>
                </Box>
              ))}
            </motion.div>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default LocationTechStack;

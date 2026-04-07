import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore, HelpOutline } from '@mui/icons-material';
import { faqData } from '../../data/locations/faqs';

const LocationFAQ = ({ locationName, cityName, serviceTitle, serviceSlug }) => {
  const [expanded, setExpanded] = useState(false);
  const faqs = faqData[serviceSlug] || faqData['website-development'];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 12, background: 'var(--grad-section)' }}>
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center" mb={8}>
          <Typography sx={{ 
            color: 'var(--blue-primary)', fontWeight: 700, fontSize: '12px', 
            letterSpacing: '0.14em', textTransform: 'uppercase' 
          }}>
            FAQS
          </Typography>
          <Typography variant="h2" sx={{ 
            fontFamily: 'Syne', fontWeight: 800, color: 'var(--navy)', 
            fontSize: { xs: '32px', md: '38px' }, textAlign: 'center' 
          }}>
            Frequently Asked Questions About {serviceTitle} in {locationName}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {faqs.map((item, index) => {
            const question = item.q.replace(/{location}/g, locationName).replace(/{cityName}/g, cityName || locationName);
            const answer = item.a.replace(/{location}/g, locationName).replace(/{cityName}/g, cityName || locationName);
            const panelName = `panel${index}`;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Accordion 
                  expanded={expanded === panelName} 
                  onChange={handleChange(panelName)}
                  elevation={0}
                  sx={{ 
                    borderRadius: '16px !important', overflow: 'hidden', mb: 2,
                    border: '1px solid var(--border)', background: '#fff',
                    '&:before': { display: 'none' },
                    boxShadow: 'var(--card-shadow)',
                    transition: 'all 0.3s',
                    '&:hover': { borderColor: 'var(--blue-primary)' }
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<Box sx={{ 
                      width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-subtle)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}><ExpandMore sx={{ color: 'var(--blue-primary)' }} /></Box>}
                    sx={{ p: 2, px: 3, '& .MuiAccordionSummary-content': { alignItems: 'center', gap: 2 } }}
                  >
                    <HelpOutline sx={{ color: 'var(--blue-primary)', fontSize: '20px' }} />
                    <Typography sx={{ fontWeight: 800, color: 'var(--navy)', fontSize: '16px' }}>{question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 4, pt: 0, ml: 4.5 }}>
                    <Box sx={{ borderLeft: '4px solid var(--blue-primary)', pl: 3 }}>
                      <Typography sx={{ color: 'var(--text-mid)', fontSize: '15px', lineHeight: 1.8 }}>{answer}</Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default LocationFAQ;

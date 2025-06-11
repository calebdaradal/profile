import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Grid,
  Avatar
} from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { theme } from '../theme';

const References = () => {
  const references = [
    {
      name: 'Ms. Aileen Vasquez',
      title: 'College Department Chair Person',
      company: 'Siena College of Taytay',
      testimonial: 'Jeramy consistently demonstrated exceptional technical skills and leadership qualities during his academic journey. His dedication to learning and problem-solving makes him a valuable asset to any development team.',
      avatar: 'AV'
    },
    {
      name: 'Mr. John Palencia',
      title: 'Business Dev/Software Engineer',
      company: 'DevGeek IT Solutions',
      testimonial: 'Working with Jeramy has been a pleasure. His full-stack development skills and ability to adapt to new technologies quickly impressed our entire team. He delivers quality code consistently.',
      avatar: 'JP'
    },
    {
      name: 'Ms. Abigail Rose Sonido',
      title: 'EPR Staff',
      company: 'Basic Environmental Systems & Technologies, Inc.',
      testimonial: 'Jeramy brings innovative solutions and maintains excellent communication throughout project development. His technical expertise combined with professional attitude makes him highly recommended.',
      avatar: 'AS'
    }
  ];

  return (
    <Box sx={{ py: 8, width: '100%', overflow: 'hidden' }}>
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            color: theme.colors.primary,
            fontSize: '2.5rem',
            fontWeight: 'bold',
            fontFamily: theme.fonts.primary
          }}
        >
          Professional References
        </Typography>
        
        <Grid container spacing={3} justifyContent="center" sx={{ width: '100%' }}>
          {references.map((ref, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card 
                elevation={0}
                sx={{
                  width: '100%',
                  maxWidth: '350px',
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 2,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.colors.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '380px',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px rgba(37, 99, 235, 0.2)`,
                  }
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -18,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 40,
                    height: 40,
                    backgroundColor: theme.colors.text,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    border: `2px solid ${theme.colors.secondary}`
                  }}
                >
                  <FormatQuote sx={{ color: theme.colors.secondary, fontSize: 20 }} />
                </Box>
                
                <CardContent sx={{ p: 3, pt: 5, display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}>
                  {/* Avatar and Name Section */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    <Avatar 
                      sx={{ 
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.secondary,
                        width: 60,
                        height: 60,
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        fontFamily: theme.fonts.primary,
                        mb: 1.5
                      }}
                    >
                      {ref.avatar}
                    </Avatar>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        color: theme.colors.text,
                        fontSize: '1rem',
                        textAlign: 'center',
                        fontFamily: theme.fonts.primary,
                        mb: 0.5,
                        lineHeight: 1.2
                      }}
                    >
                      {ref.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.colors.textLight,
                        fontSize: '0.85rem',
                        textAlign: 'center',
                        fontFamily: theme.fonts.primary,
                        mb: 0.5,
                        lineHeight: 1.3
                      }}
                    >
                      {ref.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.colors.primary,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        fontFamily: theme.fonts.primary,
                        lineHeight: 1.3
                      }}
                    >
                      {ref.company}
                    </Typography>
                  </Box>
                  
                  {/* Testimonial Text */}
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontStyle: 'italic',
                        lineHeight: 1.5,
                        color: theme.colors.text,
                        fontSize: '0.85rem',
                        fontFamily: theme.fonts.primary,
                        textAlign: 'center',
                        width: '100%'
                      }}
                    >
                      "{ref.testimonial}"
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default References;
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Grid
} from '@mui/material';
import { Groups, Star } from '@mui/icons-material';
import { theme } from '../theme';

const AssociationsReferences = () => {
  const associations = [
    {
      organization: 'E-Sports Tournament Org. (Siena College of Taytay)',
      role: 'Administrator'
    },
    {
      organization: 'Information Technology Student Society',
      role: 'President'
    }
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 4, 
            color: 'secondary.main',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
        >
          Associations
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {associations.map((assoc, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                elevation={4}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    <Groups sx={{ fontSize: 48, color: 'primary.main' }} />
                  </Box>
                  <Typography 
                    variant="h3" 
                    component="h3" 
                    sx={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 'bold',
                      color: 'primary.main',
                      mb: 2,
                      lineHeight: 1.3
                    }}
                  >
                    {assoc.organization}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      fontSize: '1.1rem'
                    }}
                  >
                    {assoc.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AssociationsReferences;
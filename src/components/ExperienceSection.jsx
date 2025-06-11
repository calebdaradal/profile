import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Stack,
  Divider
} from '@mui/material';
import { Work, CalendarToday } from '@mui/icons-material';
import { theme } from '../theme';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Developing web applications using React and Node.js"
    },
    {
      title: "Junior Developer",
      company: "StartUp Co.",
      period: "2022 - 2023",
      description: "Built responsive websites and maintained databases"
    }
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 4, 
            color: 'primary.main',
            fontSize: '2.5rem'
          }}
        >
          Professional Experience
        </Typography>
        
        <Stack spacing={3}>
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              elevation={2}
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: 4,
                  transform: 'translateX(10px)',
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                    <Work />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" component="h3" sx={{ fontSize: '1.5rem', mb: 1 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.2rem', color: 'primary.main', mb: 1 }}>
                      {exp.company}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CalendarToday sx={{ fontSize: 16, mr: 1, color: 'grey.600' }} />
                      <Typography variant="body2" color="text.secondary">
                        {exp.period}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {exp.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
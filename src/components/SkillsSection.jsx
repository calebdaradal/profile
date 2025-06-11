import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  Stack
} from '@mui/material';
import { Code, Build, Storage, Web } from '@mui/icons-material';
import { theme } from '../theme';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code />,
      skills: ["JavaScript", "Python", "Java", "C#"]
    },
    {
      title: "Web Technologies",
      icon: <Web />,
      skills: ["React", "Node.js", "HTML5", "CSS3", "Bootstrap", "NextJS"]
    },
    {
      title: "Databases",
      icon: <Storage />,
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Build />,
      skills: ["Git", "VS Code", "Postman", "Firebase"]
    }
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
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
          Technical Skills
        </Typography>
        
        <Grid 
          container 
          spacing={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {skillCategories.map((category, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card 
                elevation={3}
                sx={{
                  height: '100%',
                  width: '100%',
                  maxWidth: 400,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  }
                }}
              >
                <CardContent 
                  sx={{ 
                    p: 3,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 2 
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mr: 1 }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h3" component="h3" sx={{ fontSize: '1.5rem' }}>
                      {category.title}
                    </Typography>
                  </Box>
                  
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    sx={{ 
                      flexWrap: 'wrap', 
                      gap: 1,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        color="primary"
                        variant="outlined"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
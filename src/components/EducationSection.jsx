import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { School } from '@mui/icons-material';
import { theme as customTheme } from '../theme';

const EducationSection = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  
  const education = [
    {
      year: '2021-2025',
      institution: 'Siena College of Taytay',
      level: 'Undergraduate',
      description: 'Bachelor of Science in Information Technology',
      position: 'top'
    },
    {
      year: '2018-2020',
      institution: 'Lasalle College of Antipolo',
      level: 'Senior High School STEM',
      description: 'Science, Technology, Engineering and Mathematics',
      position: 'bottom'
    },
    {
      year: '2015-2018',
      institution: 'St. Clare Holy Christian School',
      level: 'Junior High School',
      description: 'Grade 8 - Grade 10',
      position: 'top'
    },
    {
      year: '2012-2014',
      institution: 'Maria Montessori Holy Christian School',
      level: 'Elementary & Junior High',
      description: 'Grade 5, 6 & Grade 7',
      position: 'bottom'
    },
    {
      year: '2008- 2011',
      institution: 'For Ever In Him',
      level: 'Elementary School',
      description: 'Grade 1 - Grade 4',
      position: 'top'
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            color: 'primary.main',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
        >
          Education Timeline
        </Typography>
        
        {isMobile ? (
          // Mobile vertical timeline
          <Box sx={{ position: 'relative', pl: 4 }}>
            <Box
              sx={{
                position: 'absolute',
                left: 15,
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: 'primary.main',
              }}
            />
            {education.map((edu, index) => (
              <Box key={index} sx={{ position: 'relative', mb: 4 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    left: -23,
                    top: 8,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    border: '3px solid white',
                    boxShadow: 2,
                  }}
                />
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    ml: 2,
                    borderRadius: 3,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      left: -8,
                      top: 16,
                      width: 0,
                      height: 0,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderRight: '8px solid',
                      borderRightColor: 'primary.main',
                    }
                  }}
                >
                  <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 1 }}>
                    {edu.year}
                  </Typography>
                  <Typography variant="h5" sx={{ fontSize: '1.2rem', mb: 1 }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1, opacity: 0.9 }}>
                    {edu.level}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {edu.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        ) : (
          // Desktop horizontal timeline
          <Box sx={{ position: 'relative', py: 4 }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '5%',
                right: '5%',
                height: 4,
                backgroundColor: 'primary.main',
                borderRadius: 2,
                transform: 'translateY(-50%)',
              }}
            />
            
            {/* Timeline items */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', px: '5%' }}>
              {education.map((edu, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    flex: 1,
                    maxWidth: 200,
                  }}
                >
                  {/* Content above timeline */}
                  {edu.position === 'top' && (
                    <Paper
                      elevation={4}
                      sx={{
                        p: 2.5,
                        mb: 3,
                        borderRadius: 3,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        textAlign: 'center',
                        minHeight: 120,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '8px solid',
                          borderTopColor: 'primary.main',
                        }
                      }}
                    >
                      <Typography variant="body2" sx={{ fontSize: '0.9rem', mb: 1, opacity: 0.9 }}>
                        {edu.level}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem', opacity: 0.8 }}>
                        {edu.description}
                      </Typography>
                    </Paper>
                  )}
                  
                  {/* Timeline marker */}
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      border: '4px solid',
                      borderColor: 'primary.main',
                      boxShadow: 3,
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <School sx={{ fontSize: 12, color: 'primary.main' }} />
                  </Box>
                  
                  {/* Year label */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'primary.main',
                      my: 1,
                    }}
                  >
                    {edu.year}
                  </Typography>
                  
                  {/* Content below timeline */}
                  {edu.position === 'bottom' && (
                    <Paper
                      elevation={4}
                      sx={{
                        p: 2.5,
                        mt: 2,
                        borderRadius: 3,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        textAlign: 'center',
                        minHeight: 120,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          top: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderBottom: '8px solid',
                          borderBottomColor: 'primary.main',
                        }
                      }}
                    >
                      <Typography variant="body2" sx={{ fontSize: '0.9rem', mb: 1, opacity: 0.9 }}>
                        {edu.level}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem', opacity: 0.8 }}>
                        {edu.description}
                      </Typography>
                    </Paper>
                  )}
                  
                  {/* Institution name always below year */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '0.95rem',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      textAlign: 'center',
                      mt: edu.position === 'bottom' ? 2 : 1,
                      lineHeight: 1.2,
                    }}
                  >
                    {edu.institution}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default EducationSection;
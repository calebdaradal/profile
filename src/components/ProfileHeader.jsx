import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Avatar, 
  Button, 
  Paper,
  Chip,
  Stack
} from '@mui/material';
import { Download } from '@mui/icons-material';
import { theme } from '../theme';

const ProfileHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            src="/DSC_0015.jpg"
            alt="Jeramy Caleb S. Daradal"
            sx={{
              width: 200,
              height: 200,
              mb: 3,
              border: 4,
              borderColor: 'secondary.main',
              boxShadow: 3,
            }}
          />
          
          <Typography variant="h1" component="h1" sx={{ mb: 2, fontSize: '3rem' }}>
            Jeramy Caleb S. Daradal
          </Typography>
          
          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: '1.5rem', fontWeight: 400 }}>
            Full Stack Web Developer & Software Programmer
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
            <Chip
              icon={<img src="/person.svg" alt="person" style={{ width: 16, height: 16 }} />}
              label="24 years old"
              variant="outlined"
              sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
            />
            <Chip
              icon={<img src="/phone_in_talk.svg" alt="phone" style={{ width: 16, height: 16 }} />}
              label="+63-9622683998"
              variant="outlined"
              sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
            />
            <Chip
              icon={<img src="/mail.svg" alt="email" style={{ width: 16, height: 16 }} />}
              label="jeramydaradal@gmail.com"
              variant="outlined"
              sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
            />
          </Stack>
          
          <Paper
            elevation={2}
            sx={{
              p: 3,
              mb: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              maxWidth: 600,
            }}
          >
            <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.6, color: 'white' }}>
              A motivated and tech-savvy individual with hands-on experience in programming, 
              web development, and IT solutions. Passionate about learning and problem-solving 
              in dynamic environments.
            </Typography>
          </Paper>
          
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<Download />}
            component="a"
            href="/contents/Jeramy-Caleb-Daradal-CV.pdf"
            download
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
              transition: 'all 0.3s ease',
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfileHeader;
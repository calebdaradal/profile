import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Fab } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ProfileHeader from './components/ProfileHeader';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import AssociationsReferences from './components/AssociationsReferences';
import References from './components/References';
import { theme as customTheme } from './theme';
import './App.css';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: customTheme.colors.primary,
    },
    secondary: {
      main: customTheme.colors.secondary,
    },
    background: {
      default: customTheme.colors.secondary,
    },
  },
  typography: {
    fontFamily: customTheme.fonts.primary,
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div>
        <ProfileHeader />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <AssociationsReferences />
        <References />
        
        {/* Floating Download Button with MUI */}
        <Fab
          color="primary"
          aria-label="download resume"
          component="a"
          href="/contents/Jeramy-Caleb-Daradal-CV.pdf"
          download
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
          }}
        >
          <DownloadIcon />
        </Fab>
      </div>
    </ThemeProvider>
  );
}

export default App;

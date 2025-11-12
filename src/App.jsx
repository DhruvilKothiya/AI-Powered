import React from 'react';
import { CssBaseline, Box, useMediaQuery, useTheme } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Box 
          sx={{ 
            display: 'flex', 
            flex: 1,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <Sidebar />
          <Dashboard />
        </Box>
      </Box>
    </>
  );
}

export default App;

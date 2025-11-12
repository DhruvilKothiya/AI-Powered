import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 64px)', // Subtract header height
        width: '100%',
        p: isMobile ? 2 : 3,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: '#999',
          textAlign: 'center',
        }}
      >
        Select a project from the sidebar to view details
      </Typography>
    </Box>
  );
};

export default Dashboard;

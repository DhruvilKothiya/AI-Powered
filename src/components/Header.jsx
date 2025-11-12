import React from 'react';
import { Box, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        p: 2,
        bgcolor: 'white',
        borderBottom: '1px solid #e0e0e0',
        height: 64,
        minHeight: 64,
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          bgcolor: '#1976d2',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DescriptionIcon sx={{ color: 'white', fontSize: 20 }} />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        AI Powered
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#666',
          ml: 1,
        }}
      >
        Document Processing
      </Typography>
    </Box>
  );
};

export default Header;

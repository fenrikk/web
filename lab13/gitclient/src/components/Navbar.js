import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#4349a3', boxShadow: '0 2px 8px 0 rgba(67,73,163,0.08)' }}>
      <Toolbar sx={{ pl: 4 }}>
        <GitHubIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          GitHub Explorer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
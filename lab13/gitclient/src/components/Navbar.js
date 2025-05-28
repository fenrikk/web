import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <GitHubIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GitHub Explorer
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 
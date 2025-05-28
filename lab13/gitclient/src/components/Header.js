import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = ({ user }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
      <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', bgcolor: '#d2f5c7', borderRadius: 3, minWidth: 320 }}>
        <GitHubIcon sx={{ fontSize: 48, mr: 2 }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Welcome to</Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#4349a3' }}>GitCat</Typography>
        </Box>
      </Paper>
      <Paper sx={{ p: 2, bgcolor: '#7d85d6', color: 'white', borderRadius: 3, minWidth: 220, textAlign: 'center' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body2">Received events</Typography>
            <Typography variant="h6">{user?.public_events || 50}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Followers</Typography>
            <Typography variant="h6">{user?.followers}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Forks</Typography>
            <Typography variant="h6">{user?.public_gists || 3}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Header; 
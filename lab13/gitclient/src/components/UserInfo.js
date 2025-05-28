import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const UserInfo = ({ user }) => {
  if (!user) return null;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
      <Avatar src={user.avatar_url} sx={{ width: 80, height: 80, mb: 1, bgcolor: 'white' }} />
      <Typography variant="h6" sx={{ fontWeight: 700 }}>{user.name || user.login}</Typography>
      <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>{user.email || user.login}</Typography>
    </Box>
  );
};

export default UserInfo; 
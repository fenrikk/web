import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const About = ({ user }) => {
  if (!user) return null;
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Account details:</Typography>
      <Typography><b>Email:</b> {user.email || 'N/A'}</Typography>
      <Typography><b>Company:</b> {user.company || 'N/A'}</Typography>
      <Typography><b>Location:</b> {user.location || 'N/A'}</Typography>
      <Typography><b>Blog:</b> {user.blog ? <Link href={user.blog} target="_blank" rel="noopener">{user.blog}</Link> : 'N/A'}</Typography>
      <Typography><b>Public repos:</b> {user.public_repos}</Typography>
      <Typography><b>Followers:</b> {user.followers}</Typography>
      <Typography><b>Following:</b> {user.following}</Typography>
      <Typography><b>GitHub profile:</b> <Link href={user.html_url} target="_blank" rel="noopener">{user.html_url}</Link></Typography>
    </Box>
  );
};

export default About; 
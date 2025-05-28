import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const About = ({ user }) => {
  if (!user) return null;
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: 3, boxShadow: '0 2px 8px 0 rgba(67,73,163,0.04)' }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Account details:</Typography>
      <Typography sx={{ mb: 1 }}><b>Email:</b> {user.email || 'N/A'}</Typography>
      <Typography sx={{ mb: 1 }}><b>Company:</b> {user.company || 'N/A'}</Typography>
      <Typography sx={{ mb: 1 }}><b>Location:</b> {user.location || 'N/A'}</Typography>
      <Typography sx={{ mb: 1 }}><b>Blog:</b> {user.blog ? <Link href={user.blog} target="_blank" rel="noopener">{user.blog}</Link> : 'N/A'}</Typography>
      <Typography sx={{ mb: 1 }}><b>Public repos:</b> {user.public_repos}</Typography>
      <Typography sx={{ mb: 1 }}><b>Followers:</b> {user.followers}</Typography>
      <Typography sx={{ mb: 1 }}><b>Following:</b> {user.following}</Typography>
      <Typography sx={{ mb: 1 }}><b>GitHub profile:</b> <Link href={user.html_url} target="_blank" rel="noopener">{user.html_url}</Link></Typography>
    </Box>
  );
};

export default About; 
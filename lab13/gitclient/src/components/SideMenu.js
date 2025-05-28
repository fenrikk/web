import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import LinkIcon from '@mui/icons-material/Link';
import InfoIcon from '@mui/icons-material/Info';
import UserInfo from './UserInfo';

// UserInfo as a prop for now, can be replaced with a separate component
const SideMenu = ({ user }) => {
  return (
    <Box sx={{
      width: 260,
      minHeight: '100vh',
      bgcolor: '#4349a3',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: 3,
      borderBottomLeftRadius: 24,
      boxShadow: '2px 0 8px 0 rgba(67,73,163,0.08)',
    }}>
      {/* UserInfo */}
      <UserInfo user={user} />
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: '80%', mb: 2 }} />
      {/* Menu */}
      <List sx={{ width: '100%' }}>
        <ListItem
          button
          component={NavLink}
          to="repositories"
          style={({ isActive }) => ({ background: isActive ? '#fff' : 'transparent', color: isActive ? '#4349a3' : '#fff', borderRadius: 12, marginBottom: 8 })}
        >
          <ListItemIcon sx={{ color: 'inherit' }}><FolderIcon /></ListItemIcon>
          <ListItemText primary="Repositories" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="followers"
          style={({ isActive }) => ({ background: isActive ? '#fff' : 'transparent', color: isActive ? '#4349a3' : '#fff', borderRadius: 12, marginBottom: 8 })}
        >
          <ListItemIcon sx={{ color: 'inherit' }}><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Followers" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="subscriptions"
          style={({ isActive }) => ({ background: isActive ? '#fff' : 'transparent', color: isActive ? '#4349a3' : '#fff', borderRadius: 12, marginBottom: 8 })}
        >
          <ListItemIcon sx={{ color: 'inherit' }}><LinkIcon /></ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="about"
          style={({ isActive }) => ({ background: isActive ? '#fff' : 'transparent', color: isActive ? '#4349a3' : '#fff', borderRadius: 12, marginBottom: 8 })}
        >
          <ListItemIcon sx={{ color: 'inherit' }}><InfoIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default SideMenu; 
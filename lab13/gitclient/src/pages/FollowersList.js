import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, TextField, Box, Typography, Divider, Avatar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import axios from 'axios';

const FollowersList = ({ username }) => {
  const [followers, setFollowers] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    axios.get(`https://api.github.com/users/${username}/followers?per_page=100`)
      .then(res => setFollowers(res.data))
      .finally(() => setLoading(false));
  }, [username]);

  const filtered = followers.filter(f => f.login.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: 3, boxShadow: '0 2px 8px 0 rgba(67,73,163,0.04)' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Followers</Typography>
      <TextField
        label="Filter by login"
        variant="outlined"
        size="small"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        sx={{ mb: 3, width: '100%', maxWidth: 320 }}
      />
      {loading ? 'Loading...' : (
        <List>
          {filtered.map(follower => (
            <React.Fragment key={follower.id}>
              <ListItem button component="a" href={follower.html_url} target="_blank" sx={{ borderRadius: 2, mb: 1, px: 2 }}>
                <Avatar src={follower.avatar_url} sx={{ mr: 2 }} />
                <ListItemText
                  primary={<Typography sx={{ fontWeight: 500 }}>{follower.login}</Typography>}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
          {filtered.length === 0 && <Typography sx={{ mt: 2 }}>No followers found.</Typography>}
        </List>
      )}
    </Box>
  );
};

export default FollowersList; 
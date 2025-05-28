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
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>Followers</Typography>
      <TextField
        label="Filter by login"
        variant="outlined"
        size="small"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        sx={{ mb: 2 }}
      />
      {loading ? 'Loading...' : (
        <List>
          {filtered.map(follower => (
            <React.Fragment key={follower.id}>
              <ListItem button component="a" href={follower.html_url} target="_blank">
                <Avatar src={follower.avatar_url} sx={{ mr: 2 }} />
                <ListItemText
                  primary={follower.login}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
          {filtered.length === 0 && <Typography>No followers found.</Typography>}
        </List>
      )}
    </Box>
  );
};

export default FollowersList; 
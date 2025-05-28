import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, TextField, Box, Typography, Divider, Avatar } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import axios from 'axios';

const SubscriptionsList = ({ username }) => {
  const [subs, setSubs] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    axios.get(`https://api.github.com/users/${username}/subscriptions?per_page=100`)
      .then(res => setSubs(res.data))
      .finally(() => setLoading(false));
  }, [username]);

  const filtered = subs.filter(s => s.full_name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>Subscriptions</Typography>
      <TextField
        label="Filter by full name"
        variant="outlined"
        size="small"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        sx={{ mb: 2 }}
      />
      {loading ? 'Loading...' : (
        <List>
          {filtered.map(sub => (
            <React.Fragment key={sub.id}>
              <ListItem button component="a" href={sub.html_url} target="_blank">
                <Avatar sx={{ bgcolor: '#4349a3', mr: 2 }}><LinkIcon /></Avatar>
                <ListItemText
                  primary={sub.full_name}
                  secondary={sub.description}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
          {filtered.length === 0 && <Typography>No subscriptions found.</Typography>}
        </List>
      )}
    </Box>
  );
};

export default SubscriptionsList; 
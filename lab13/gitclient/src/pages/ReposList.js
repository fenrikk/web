import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, TextField, Box, Typography, Divider, Avatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import axios from 'axios';

const ReposList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then(res => setRepos(res.data))
      .finally(() => setLoading(false));
  }, [username]);

  const filtered = repos.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: 3, boxShadow: '0 2px 8px 0 rgba(67,73,163,0.04)' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Repositories</Typography>
      <TextField
        label="Filter by name"
        variant="outlined"
        size="small"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        sx={{ mb: 3, width: '100%', maxWidth: 320 }}
      />
      {loading ? 'Loading...' : (
        <List>
          {filtered.map(repo => (
            <React.Fragment key={repo.id}>
              <ListItem button component="a" href={repo.html_url} target="_blank" sx={{ borderRadius: 2, mb: 1, px: 2 }}>
                <Avatar sx={{ bgcolor: '#4349a3', mr: 2 }}><FolderIcon /></Avatar>
                <ListItemText
                  primary={<Typography sx={{ fontWeight: 500 }}>{repo.name}</Typography>}
                  secondary={repo.description}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
          {filtered.length === 0 && <Typography sx={{ mt: 2 }}>No repositories found.</Typography>}
        </List>
      )}
    </Box>
  );
};

export default ReposList; 
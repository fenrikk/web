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
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>Repositories</Typography>
      <TextField
        label="Filter by name"
        variant="outlined"
        size="small"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        sx={{ mb: 2 }}
      />
      {loading ? 'Loading...' : (
        <List>
          {filtered.map(repo => (
            <React.Fragment key={repo.id}>
              <ListItem button component="a" href={repo.html_url} target="_blank">
                <Avatar sx={{ bgcolor: '#4349a3', mr: 2 }}><FolderIcon /></Avatar>
                <ListItemText
                  primary={repo.name}
                  secondary={repo.description}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
          {filtered.length === 0 && <Typography>No repositories found.</Typography>}
        </List>
      )}
    </Box>
  );
};

export default ReposList; 
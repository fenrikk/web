import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  CircularProgress,
  Alert,
} from '@mui/material';
import { GridView, ViewList } from '@mui/icons-material';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://api.github.com/users');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://api.github.com/users/${searchQuery}`);
      setUsers([response.data]);
    } catch (err) {
      setError('User not found. Please try a different username.');
      console.error('Error searching user:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUserClick = (username) => {
    navigate(`/user/${username}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem' }}>
          <TextField
            fullWidth
            label="Search GitHub Users"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="contained" size="large">
            Search
          </Button>
        </form>
      </Box>

      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => setViewMode('grid')} color={viewMode === 'grid' ? 'primary' : 'default'}>
          <GridView />
        </IconButton>
        <IconButton onClick={() => setViewMode('list')} color={viewMode === 'list' ? 'primary' : 'default'}>
          <ViewList />
        </IconButton>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} sm={viewMode === 'grid' ? 6 : 12} md={viewMode === 'grid' ? 4 : 12} key={user.id}>
              <Card 
                sx={{ 
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: viewMode === 'grid' ? 'column' : 'row',
                  '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.2s' }
                }}
                onClick={() => handleUserClick(user.login)}
              >
                <CardMedia
                  component="img"
                  image={user.avatar_url}
                  alt={user.login}
                  sx={{
                    width: viewMode === 'grid' ? '100%' : 150,
                    height: viewMode === 'grid' ? 200 : 150,
                    objectFit: 'cover'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.login}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click to view profile details
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home; 
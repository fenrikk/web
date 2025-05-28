import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Button,
  Chip,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  People,
  Code,
  Star,
  Visibility,
  ArrowBack,
  Link as LinkIcon,
  LocationOn,
  Business,
} from '@mui/icons-material';
import axios from 'axios';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`)
        ]);
        setUser(userResponse.data);
        setRepos(reposResponse.data);
      } catch (err) {
        setError('Failed to fetch user data. Please try again later.');
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  if (!user) return null;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f6fa' }}>
      <SideMenu user={user} />
      <Box sx={{ flex: 1, px: 4, py: 4 }}>
        <Header user={user} />
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            sx={{ mb: 3 }}
          >
            Back to Home
          </Button>
          <Outlet context={{ username, user }} />
        </Container>
      </Box>
    </Box>
  );
};

export default UserProfile; 
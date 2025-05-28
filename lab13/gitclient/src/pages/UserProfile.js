import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/')}
        sx={{ mb: 3 }}
      >
        Back to Home
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <img
                src={user.avatar_url}
                alt={user.login}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  marginBottom: 16,
                }}
              />
              <Typography variant="h4" gutterBottom>
                {user.name || user.login}
              </Typography>
              {user.bio && (
                <Typography color="text.secondary" paragraph>
                  {user.bio}
                </Typography>
              )}
            </Box>
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                {user.location && (
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOn color="action" />
                      <Typography>{user.location}</Typography>
                    </Box>
                  </Grid>
                )}
                {user.company && (
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Business color="action" />
                      <Typography>{user.company}</Typography>
                    </Box>
                  </Grid>
                )}
                {user.blog && (
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinkIcon color="action" />
                      <Typography>
                        <a href={user.blog} target="_blank" rel="noopener noreferrer">
                          {user.blog}
                        </a>
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <People color="primary" />
                    <Typography variant="h6">{user.followers}</Typography>
                    <Typography color="text.secondary">Followers</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <People color="primary" />
                    <Typography variant="h6">{user.following}</Typography>
                    <Typography color="text.secondary">Following</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Code color="primary" />
                    <Typography variant="h6">{user.public_repos}</Typography>
                    <Typography color="text.secondary">Public Repositories</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Recent Repositories
          </Typography>
          <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
            {repos.map((repo, idx) => (
              <React.Fragment key={repo.id}>
                <ListItem alignItems="flex-start" button component="a" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <ListItemAvatar>
                    <Avatar>
                      <Code />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={repo.name}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary">
                          {repo.language ? `Language: ${repo.language}` : 'No language'}
                        </Typography>
                        {repo.description && (
                          <><br />{repo.description}</>
                        )}
                      </>
                    }
                  />
                  <ListItemSecondaryAction>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip icon={<Star />} label={repo.stargazers_count} size="small" sx={{ mr: 1 }} />
                      <Chip icon={<Visibility />} label={repo.watchers_count} size="small" />
                    </Box>
                  </ListItemSecondaryAction>
                </ListItem>
                {idx < repos.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile; 
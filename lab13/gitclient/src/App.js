import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useOutletContext } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import ReposList from './pages/ReposList';
import FollowersList from './pages/FollowersList';
import SubscriptionsList from './pages/SubscriptionsList';
import About from './pages/About';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0366d6',
    },
    secondary: {
      main: '#28a745',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserProfile />}>
            <Route index element={<ReposListWrapper />} />
            <Route path="repositories" element={<ReposListWrapper />} />
            <Route path="followers" element={<FollowersListWrapper />} />
            <Route path="subscriptions" element={<SubscriptionsListWrapper />} />
            <Route path="about" element={<AboutWrapper />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// Wrapper-компоненти для передачі username/user у вкладки через Outlet
function ReposListWrapper() {
  const { username } = useParams();
  return <ReposList username={username} />;
}
function FollowersListWrapper() {
  const { username } = useParams();
  return <FollowersList username={username} />;
}
function SubscriptionsListWrapper() {
  const { username } = useParams();
  return <SubscriptionsList username={username} />;
}
function AboutWrapper() {
  const { user } = useOutletContext();
  return <About user={user} />;
}

export default App;

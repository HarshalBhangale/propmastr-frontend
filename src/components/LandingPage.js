import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';


const LandingPage = () => {
const navigate = useNavigate();

return (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" textAlign="center" bgcolor="#f0f4f8">
    <Typography variant="h2" gutterBottom>Welcome to PropMaster</Typography>
    <Typography variant="h6" gutterBottom>The best property valuation tool</Typography>
    <Box mt={4}>
      <Button variant="contained" color="primary" onClick={() => navigate('/login')} sx={{ m: 1 }}>Login</Button>
      <Button variant="contained" color="secondary" onClick={() => navigate('/signup')} sx={{ m: 1 }}>Signup</Button>
    </Box>
  </Box>
);
};

export default LandingPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center', 
      backgroundColor: '#f0f4f8',
      backgroundImage: 'url("https://source.unsplash.com/random/1600x900?building")', 
      backgroundSize: 'cover',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ fontSize: '3em', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>Welcome to PropMaster</h1>
      <h2 style={{ fontSize: '1.5em', fontWeight: 'lighter', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>The best property valuation tool</h2>
      <div style={{ marginTop: '20px' }}>
        <button style={{ 
          margin: '10px', 
          padding: '10px 20px', 
          backgroundColor: '#1976d2', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          fontSize: '1em',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }} 
        onClick={() => navigate('/login')}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#155a9a'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#1976d2'}
        >
          Login
        </button>
        <button style={{ 
          margin: '10px', 
          padding: '10px 20px', 
          backgroundColor: '#dc004e', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          fontSize: '1em',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }} 
        onClick={() => navigate('/signup')}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#a30033'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#dc004e'}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';

const box = {
  width: '280px',
  margin: '100px auto',
  padding: '32px',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '12px',
  fontFamily: 'sans-serif',
};

const btn = {
  display: 'block',
  padding: '12px 0',
  margin: '10px 0',
  border: '1px solid #555',
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#333',
};

function Home() {
  return (
    <div style={box}>
      <h1>FORMS</h1>

      <Link to="signup" style={btn}>
        Sign Up
      </Link>

      <Link to="login" style={btn}>
        Log In
      </Link>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { login } from '../api-service';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { id } = await login(email, password);
      if (id) {
        localStorage.setItem('userId', id); // set user ID in session storage
        navigate(`/profile/${id}`);
      } else {
        alert('😤');
      }
    } catch (error) {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login">
      <h1>SCNE</h1>
      <img src="../logo2.png" style={{ width: 250, height: 250 }} alt="" ></img>
      <Button variant="contained" onClick={() => navigate('/join')}>
        GET STARTED
      </Button>
    
   
      <TextField
        id="outlined-basic"
        label="EMAIL"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="PASSWORD"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button type="submit" onClick={handleLogin} variant="outlined">
        LOGIN
      </Button>
    </div>
  );
};

export default Login;

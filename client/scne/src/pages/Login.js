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
      const { user, biz } = await login(email, password);
      if (user) {
        localStorage.setItem('userId', user.id);
        navigate(`/profile/${user.id}`);
      } else if (biz) {
        localStorage.setItem('bizId', biz.id);
        navigate(`/biz/${biz.id}`);
      } else {
        alert('😤');
      }
    } catch (error) {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login">
      <p style={{fontSize: 100, margin:0}}>SCNE</p>
      <img src="../logo2.png" style={{ width: 250, height: 250 }} alt="" ></img>
      <Button 
      sx={{backgroundColor:'#6e06de', fontSize:'20px',}}
      variant="contained" 
      onClick={() => navigate('/join')}>
        GET STARTED
      </Button>
    
   
      <TextField
        id="outlined-basic"
        label="EMAIL"
        variant="outlined"
        value={email}
        sx={{ width:'80%',}}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="PASSWORD"
        variant="outlined"
        value={password}
        sx={{ width:'80%',}}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button 
      sx={{
        color:'#6e06de',
        fontSize:'20px',
        borderColor:'#6e06de',
    }}
      type="submit" 
      onClick={handleLogin} variant="outlined">
        LOGIN
      </Button>
    </div>
  );
};

export default Login;

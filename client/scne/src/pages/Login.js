import React from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'



const Login = () => {

const navigate = useNavigate();

   


  return (
    <div className="login">
    <h1>SCNE</h1>    
    <h2>LOGO HERE</h2>
    <Button variant="contained" onClick={() => navigate('/join')} >GET STARTED</Button>

    <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
    <TextField id="outlined-basic" label="PASSWORD" variant="outlined" />

    <Button type="submit" onClick={() => navigate('/list')} variant="outlined">LOGIN</Button>
     </div>
   
  )
}

export default Login;


import UploadWidget from '../components/UploadWidget';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { createProfile } from '../api-service';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const EditUserProfile = ({ setUserState }) => { 
    const [inputs, setInputs] = useState({ firstName: '', lastName: '', email: '', password: '', city: '' });

    const handleChange = (event) => {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      createProfile(inputs).then((newUser) => {
        setUserState((existingUsers) => [...existingUsers, newUser]);
      });
  
      setInputs({ firstName: '', lastName: '', email: '', password: '', city: '' });
    };
  
    const navigate = useNavigate();
    const handleBusinessClick = () => {
      navigate('/joinbus');
    };





  return (
    <div className="editProfilePage">
    <h1>EDIT PROFILE</h1>
    <div>
    <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 2, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
<UploadWidget></UploadWidget>
<TextField
          id="outlined-multiline-static"
          label="EDIT BIO"
          name="bio"
          value={inputs.bio} 
          multiline
          rows={4}
          onChange={handleChange}
        />
        <h2>SCENES NEAR YOU</h2>
        <Fab variant="extended">COFFEE
        <AddIcon sx={{ mr: 1 }} />
      </Fab>
      <Fab variant="extended">WELLNESS
        <AddIcon sx={{ mr: 1 }} />
      </Fab>
      <Fab variant="extended">MIXOLOGY
        <AddIcon sx={{ mr: 1 }} />
      </Fab>
      <Button variant="outlined">CONNECT TO YOUR TEAM</Button>
        </Box>
    </div>
    <div>
<Navbar/>
</div>
</div>
    
  );
};


export default EditUserProfile;
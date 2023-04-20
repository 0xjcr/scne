import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { updateProfile } from '../api-service';
import UploadWidget from '../components/UploadWidget';

const EditUser = () => {
  const [inputs, setInputs] = useState({ bio: '', photo: '', ig:'' });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const filterEmptyFields = (data) => {
    let filteredData = {};
    for (const key in data) {
      if (data[key]) {
        filteredData[key] = data[key];
      }
    }
    return filteredData;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filteredInputs = filterEmptyFields(inputs);

    updateProfile(id, filteredInputs).then((newUser) => {
    navigate(`/profile`); // Navigate to the updated user profile
    });

    setInputs({ bio: '', photo: '', ig:'' });
  };

  return (
    <div className="editProfilePage">
      <h2>EDIT PROFILE</h2>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 2, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        ><Button type="submit" variant="contained">DONE</Button>
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
          <TextField id="outlined-basic" label="instagram" 
          name="ig"
          variant="outlined"
          value={inputs.ig}
          onChange={handleChange} />
          <Button variant="outlined">CONNECT TO YOUR TEAM</Button>
          <h4>SCENES NEAR YOU</h4>
          <Fab variant="extended">COFFEE
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Fab variant="extended">WELLNESS
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Fab variant="extended">MIXOLOGY
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          
          
        </Box>
      </div>
      <div>
        
      </div>
      
    </div>
  );
};

export default EditUser;

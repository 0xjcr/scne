import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { updateProfile } from '../api-service';
import CloudinaryImageUpload from './CloudinaryImageUpload';

const EditUser = () => {
  const [inputs, setInputs] = useState({ bio: '', photo: '', ig: '', member: '', scene0: '', scene1: '', scene2: '' });
  
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleImageUpload = (imageUrl) => {
    setInputs({ ...inputs, photo: imageUrl });
  };

  const handleButtonClick = (sceneValue) => {
    for (let i = 0; i < 3; i++) {
      const sceneKey = `scene${i}`;
      if (!inputs[sceneKey]) {
        setInputs({ ...inputs, [sceneKey]: sceneValue });
        break;
      }
    }
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
        //update logged in user in the context
      navigate(`/profile/${id}`); // Navigate to the updated user profile
    });

    setInputs({ bio: '', photo: '', ig: '', member: '', scene0: '', scene1: '', scene2: '' });
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
        >
          
          <CloudinaryImageUpload userId={id} onUpload={handleImageUpload} isBusiness={false}></CloudinaryImageUpload>
          <TextField
            id="outlined-multiline-static"
            label="EDIT BIO"
            name="bio"
            value={inputs.bio}
            multiline
            rows={4}
            onChange={handleChange}
          />
          <TextField id="outlined-basic" label="INSTAGRAM" 
          name="ig"
          variant="outlined"
          value={inputs.ig}
          onChange={handleChange} />

          <TextField id="outlined-basic" label="JOIN YOUR TEAM" 
          name="member"
          variant="outlined"
          value={inputs.member}
          onChange={handleChange} />

          <h4>JOIN SCENES NEAR YOU</h4>
          <Fab variant="extended" onClick={() => handleButtonClick('coffee')}>
            COFFEE
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Fab variant="extended" onClick={() => handleButtonClick('wellness')}>
            WELLNESS
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Fab variant="extended" onClick={() => handleButtonClick('mixology')}>
            MIXOLOGY
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Button type="submit" variant="contained">DONE</Button>
        </Box>
      </div>
    </div>
  );
};




export default EditUser;

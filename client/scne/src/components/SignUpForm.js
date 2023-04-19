import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { createProfile } from '../api-service';

const SignUpForm = ({ setUserState }) => {
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

  return (
    <>
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
          <TextField
            id="outlined-basic-firstname"
            label="FIRST NAME"
            variant="outlined"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-lastname"
            label="LAST NAME"
            variant="outlined"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-email"
            label="EMAIL"
            variant="outlined"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-password"
            label="PASSWORD"
            variant="outlined"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          <InputLabel id="simple-select-label">CITY</InputLabel>
          <Select
            labelId="city-id"
            id="simple-select"
            value={inputs.city}
            label="CITY"
            name="city"
            onChange={handleChange}
          >
            <MenuItem value={'barcelona'}>Barcelona</MenuItem>
          </Select>
          <Button type="submit" variant="outlined">
            CREATE
          </Button>
        </Box>
        <Button variant="text">FOR BUSINESS</Button>
      </div>
    </>
  );
};

export default SignUpForm;

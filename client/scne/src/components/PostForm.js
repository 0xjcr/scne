import { useState, useContext } from 'react';
import CloudinaryImageUpload from './CloudinaryImageUpload';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Navbar from './Navbar';
import { createUserPost } from '../api-service';
import { PostContext } from '../pages/Feed';

const PostForm = () => {

    const setPostState = useContext(PostContext);
  const [inputs, setInputs] = useState({ content: '', event: false, comment: false, scene: '', postPhoto: '' });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const loggedInUserId = localStorage.getItem('userId');
    const newPost = { ...inputs, userId: loggedInUserId };
    createUserPost(newPost).then((newPost) => {
      // setPostState((existingPosts) => [...existingPosts, newPost]).then
      (navigate('/feed'))
      
    });
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleImageUpload = (imageUrl) => {
    setInputs({ ...inputs, postPhoto: imageUrl });
  };

  return (
    <div>
      <div className='postform'>
        
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 2, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          
          <FormControl fullWidth>
          <FormLabel id="demo-row-radio-buttons-group-label">POST TYPE</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="comment" control={<Radio />} label="COMMENT" />
        <FormControlLabel value="event" control={<Radio />} label="EVENT" />
        
      </RadioGroup>
            

          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="simple-select-label">SCENE</InputLabel>
            <Select
              labelId="scene-id"
              id="simple-select"
              value={inputs.scene}
              label="SCENE"
              name="scene"
              onChange={handleChange}
            >
              <MenuItem value={'coffee'}>COFFEE</MenuItem>
              <MenuItem value={'wellness'}>WELLNESS</MenuItem>
              <MenuItem value={'mixology'}>MIXOLOGY</MenuItem>
            </Select>
          </FormControl>

          <CloudinaryImageUpload onUpload={handleImageUpload} isBusiness={true} />
          <TextField
            id="outlined-multiline-flexible"
            label="CONTENT"
            variant="outlined"
            name="content"
            multiline
            rows={4}
            value={inputs.content}
            onChange={handleChange}
          />
          <Button sx={{ backgroundColor: '#6e06de'}} type="submit" variant="contained">
            CREATE
          </Button>
        </Box>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default PostForm;

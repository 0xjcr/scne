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
  const [inputs, setInputs] = useState({
    content: '',
    event: '',
    comment: '',
    scene: '',
    postPhoto: '',
  });

  const handleChange = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    if (event.target.name === 'comment') {
      setInputs({ ...inputs, comment: true, event: false });
    } else if (event.target.name === 'event') {
      setInputs({ ...inputs, comment: false, event: true });
    } else {
      setInputs({ ...inputs, [event.target.name]: value });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const loggedInUserId = localStorage.getItem('userId');
    const newPost = { ...inputs, userId: loggedInUserId };
    createUserPost(newPost).then((newPost) => {
      // setPostState((existingPosts) => [...existingPosts, newPost]).then
      navigate('/feed');
    });
  };

  const handleImageUpload = (imageUrl) => {
    setInputs({ ...inputs, postPhoto: imageUrl });
  };

  return (
    <div>
      <div className='postform'>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 2, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          
        >
          <FormControl fullWidth>
            <FormLabel sx={{ color: 'white' }} id='demo-row-radio-buttons-group-label'>
              POST TYPE
            </FormLabel>
            <RadioGroup
  row
  aria-labelledby='demo-row-radio-buttons-group-label'
  name='row-radio-buttons-group'
  defaultValue={false}
  onChange={handleChange}
>
  <FormControlLabel
    value='comment'
    name='comment'
    control={<Radio sx={{ color: 'white' }} />}
    label='COMMENT'
    sx={{ color: 'white' }}
  />
  <FormControlLabel
    value='event'
    name='event'
    control={<Radio sx={{ color: 'white' }} />}
    label='EVENT'
    sx={{ color: 'white' }}
  />
</RadioGroup>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel sx={{ color: 'white' }} id='simple-select-label'>SCENE</InputLabel>
            <Select
              labelId='scene-id'
              id='simple-select'
              value={inputs.scene}
              label='SCENE'
              name='scene'
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
            InputLabelProps={{ sx: { color: 'white' } }}
    sx={{ color: 'white',
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset': { borderColor: 'white' },
    },
    '& .MuiOutlinedInput-input': { color: 'white' },
    '& .MuiInputLabel-outlined': { color: 'white' },
  }}
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

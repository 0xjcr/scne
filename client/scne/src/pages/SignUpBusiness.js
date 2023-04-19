import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const SignUpBusiness = () => {
  return (
    <>
    <div>
    <Box component="form" sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
    <TextField id="outlined-basic" label="BUSINESS NAME" variant="outlined" />
    <TextField id="outlined-basic" label="PHONE" variant="outlined" />
    <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
    <TextField id="outlined-basic" label="PASSWORD" variant="outlined" />
    <InputLabel id="simple-select-label">CITY</InputLabel>
        <Select
          labelId="city-id"
          id="simple-select"
        //   value={age}
          label="CITY"
        //   onChange={handleChange}
        >
          <MenuItem value={'barcelona'}>Barcelona</MenuItem>
          
        </Select>
        <TextField id="outlined-basic" label="ADDRESS" variant="outlined" />
    <Button variant="outlined">CREATE</Button>
    </Box>
    
   </div>
    </>
  )
}

export default SignUpBusiness
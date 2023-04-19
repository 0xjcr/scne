import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SignUpForm = () => {
  return (
    <>
    <div>
    <Box component="form" sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
    <TextField id="outlined-basic" label="FIRST NAME" variant="outlined" />
    <TextField id="outlined-basic" label="LAST NAME" variant="outlined" />
    <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
    <TextField id="outlined-basic" label="PASSWORD" variant="outlined" />

    <Button variant="outlined">CREATE</Button>
    </Box>
    <Button variant="text">FOR BUSINESS</Button>
   </div>
    </>
  );
}

export default SignUpForm
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Topbar = () => {
  return (
    <>
    <div className="topbar">
        <div><div className="topbarCity">BCN</div></div><div> <Box sx={{ minWidth: 120 }}>
      {/* <FormControl fullWidth>
        <InputLabel id="simple-select-label">{value}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={scene}
          label={value}
          defaultValue={value}
          onChange={handleChange}
        >
          <MenuItem value={coffee}>COFFEE</MenuItem>
          <MenuItem value={wellness}>WELLNESS</MenuItem>
          <MenuItem value={mixology}>MIXOLOGY</MenuItem>
        </Select>
      </FormControl> */}
    </Box></div>
    </div>
    </>
  )
}

export default Topbar
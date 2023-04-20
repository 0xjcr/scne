import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@cloudinary/url-gen/qualifiers/background';

const Topbar = () => {
  const [scene, setScene] = useState('coffee');

  const handleChange = (event) => {
    setScene(event.target.value);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbarCity">BCN</div>
        <Box sx={{ minWidth: 120, marginLeft: '1rem', marginTop: 5, }}>
          <FormControl fullWidth>
            <Select
            inputProps={{
                sx: {
                        fontSize: '32px',
                    },
                MenuProps: {
                    MenuListProps: {
                        sx: {
                            backgroundColor: 'rgba( 31, 38, 135, 0.37 )',
                        }
                    }
                }
            }}
              id="simple-select"
              value={scene}
              label="Scene"
              variant="standard"
              disableUnderline="true"
              onChange={handleChange}
            >
              <MenuItem value="coffee">COFFEE</MenuItem>
              <MenuItem value="wellness">WELLNESS</MenuItem>
              <MenuItem value="mixology">MIXOLOGY</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default Topbar;

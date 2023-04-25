import React from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import { ReactComponent as UfoLogo } from '../ufologo.svg';

const StyledSpeedDial = styled(SpeedDial)(({theme }) => ({
  position: 'absolute',
  left: '0.1rem',
  backgroundColor: 'transparent!',
  boxShadow: 'none',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
    backgroundColor: 'transparent',
  },
  '& .MuiSpeedDial-fab': {
    backgroundColor: 'transparent',
    borderRadius: '10%',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  '& .MuiSpeedDialAction-staticTooltipLabel': {
    // width: 'auto',
    // padding: '0.5rem',
    // borderRadius: '0.25rem',
    // backgroundColor: '#f7f7f7',
    // color: '#333',
    // fontWeight: 'bold',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  '& .MuiSpeedDialAction-fab': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}));
const Topbar = ({ scene, onSceneChange }) => {
  const handleChange = (value) => {
    onSceneChange(value);
  };

  return (
    <>
      <div className="topbar">
        <StyledSpeedDial 
          ariaLabel="SpeedDial"
          icon={
            <Box sx={{ bgcolor: 'transparent', p: 0.1, borderRadius: '10%' , fontSize: '1.87rem'}}>SCNE

            </Box>
          }
          direction="left"
          onClose={() => handleChange(scene)}
          onOpen={() => handleChange(scene)}
          
        >
          <SpeedDialAction
  icon={'mixology'}
  tooltipTitle="mixology"
  sx={{
    fontSize: scene === 'mixology' ? '2rem' : '1.rem',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    width: '80px',
    height: '40px',
    minWidth: '80px',
  }}
  onClick={() => handleChange('mixology')}
/>
<SpeedDialAction
  icon={'wellness'}
  tooltipTitle="wellness"
  sx={{
    fontSize: scene === 'wellness' ? '2rem' : '1.rem',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    width: '80px',
    height: '40px',
    minWidth: '80px',
  }}
  onClick={() => handleChange('wellness')}
/>
<SpeedDialAction
  icon={'coffee'}
  tooltipTitle="coffee"
  sx={{
    fontSize: scene === 'coffee' ? '2rem' : '1.rem',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    width: '80px',
    height: '40px',
    minWidth: '80px',
  }}
  onClick={() => handleChange('coffee')}
  selected={scene === 'coffee'}
/>
</StyledSpeedDial>
</div>
</>
);
};

export default Topbar;
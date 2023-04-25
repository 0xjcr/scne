import React from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import { ReactComponent as UfoLogo } from '../ufologo.svg';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  left: '0.1rem',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
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
    width: 'auto',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: '#f7f7f7',
    color: '#333',
    fontWeight: 'bold',
  },
  '& .MuiSpeedDialAction-fab': {
    borderRadius: '0.5rem',
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
              fontSize: '1.3rem',
              color: 'white',
              borderRadius: '2px',
              width: '80px',
              height: '40px',
              minWidth: '80px',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'rgba(112, 255, 0, 0.5)',
              },
              '&.Mui-selected': {
                bgcolor: 'rgba(112, 255, 0, 0.5)',
              },
            }}
            onClick={() => handleChange('mixology')}
          />
          <SpeedDialAction
            icon={'wellness'}
            tooltipTitle="wellness"
            sx={{
              fontSize: '1.3rem',
              color: 'white',
              borderRadius: '2px',
              width: '80px',
              height: '40px',
              minWidth: '80px',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'rgba(112, 255, 0, 0.5)',
              },
              '&.Mui-selected': {
                bgcolor: 'rgba(112, 255, 0, 0.5)',
              },
            }}
            onClick={() => handleChange('wellness')}
          />
          <SpeedDialAction
            icon={'coffee'}
            tooltipTitle="coffee"
            sx={{
              fontSize: '1.3rem',
              color: 'white',
              borderRadius: '2px',
              width: '80px',
              height: '40px',
              minWidth: '80px',
              bgcolor: scene === 'coffee' ? 'rgba(112, 255, 0, 0.5)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(112, 255, 0, 0.5)',
              },
              '&.Mui-selected': {
                bgcolor: 'rgba(112, 255, 0, 0.5)',
              },
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
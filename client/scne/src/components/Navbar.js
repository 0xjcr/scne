import { Link } from "react-router-dom";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import BusinessIcon from '@mui/icons-material/Business';
import { Box, Avatar } from '@mui/material';

const Navbar = ({ scene, onSceneChange }) => {
  const id = localStorage.getItem('userId');
  const isBusiness = localStorage.getItem('bizId') === 'true';


  const handleChange = (value) => {
    onSceneChange(value);
  };

  return (
    <div className="navbarContainer">
      <div className="navbarShell">
        <div className="navbar">
          <Link to="/list">
            <Avatar sx={{
              border: '1px solid rgba(112, 255, 0, 1)',
              bgcolor: 'rgba(5, 0, 142, 0.1)',
            }} className="navicons">
              <FormatListNumberedIcon sx={{ color: '#6e06de' }} />
            </Avatar>
          </Link>
          <Link to="/community">
            <Avatar sx={{
              border: '1px solid rgba(112, 255, 0, 1)',
              bgcolor: 'rgba(5, 0, 142, 0.1)',
            }} className="navicons">
              <PeopleIcon sx={{ color: '#6e06de' }} />
            </Avatar>
          </Link>
          <Link to="/feed">
            <Avatar sx={{
              border: '1px solid rgba(112, 255, 0, 1)',
              bgcolor: 'rgba(5, 0, 142, 0.1)',
            }} className="navicons">
              <ExploreIcon sx={{ color: '#6e06de' }} />
            </Avatar>
          </Link>
          { localStorage.getItem('bizId') && (
            <Link to={`/biz/${localStorage.bizId}`}>
              <Avatar sx={{
                border: '1px solid rgba(112, 255, 0, 1)',
                bgcolor: 'rgba(5, 0, 142, 0.1)',
              }} className="navicons">
                <BusinessIcon sx={{ color: '#6e06de' }} />
              </Avatar>
            </Link>
          )}
          {!isBusiness && id && (
            <Link to={`/profile/${id}`}>
              <Avatar sx={{
                border: '1px solid rgba(112, 255, 0, 1)',
                bgcolor: 'rgba(5, 0, 142, 0.1)',
              }} className="navicons">
                <AccountCircleIcon sx={{ color: '#6e06de' }} />
              </Avatar>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
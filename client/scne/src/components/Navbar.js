import { Link } from "react-router-dom";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
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
            
              <FormatListNumberedIcon sx={{ color: 'white' }} />
            
          </Link>
          <Link to="/community">
            
              <PeopleIcon sx={{ color: 'white' }} />
            
          </Link>
          <Link to="/feed">
            <Avatar sx={{
              border: '1.5px solid white',
              bgcolor: 'rgba(5, 0, 142, 0.1)',
            }} className="navicons">
              <FeedIcon sx={{ color: 'white' }} />
            </Avatar>
          </Link>
          { localStorage.getItem('bizId') && (
            <Link to={`/biz/${localStorage.bizId}`}>
              <Avatar sx={{
                border: '1.5px solid white',
                bgcolor: 'rgba(5, 0, 142, 0.1)',
              }} className="navicons">
                <BusinessIcon sx={{ color: 'white' }} />
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
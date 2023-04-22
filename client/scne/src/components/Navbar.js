import { Link } from "react-router-dom";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import { Box, Avatar } from '@mui/material';

const Navbar = ({ scene, onSceneChange }) => {
  const id = localStorage.getItem('userId');

  const handleChange = (value) => {
    onSceneChange(value);
  };

  return (
    <div className="navbarContainer">
      <div className="navbarShell">
        <div className="navbar">
          <Link to="/list">
            <Avatar sx={{
        bgcolor: 'lightgrey',
      }} className="navicons">
              <FormatListNumberedIcon sx={{ color: '#6e06de' }}/>
            </Avatar>
          </Link>
          <Link to="/community">
            <Avatar sx={{
        bgcolor: 'lightgrey',
      }} className="navicons">
              <PeopleIcon sx={{ color: '#6e06de' }}/>
            </Avatar>
          </Link>
          <Link to="/find">
            <Avatar sx={{
        bgcolor: 'lightgrey',
      }} className="navicons">
              <ExploreIcon sx={{ color: '#6e06de' }}/>
            </Avatar>
          </Link>
          <Link to={`/profile/${id}`}>
            <Avatar sx={{
        bgcolor: 'lightgrey',
      }} className="navicons">
              <AccountCircleIcon sx={{ color: '#6e06de' }}/>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
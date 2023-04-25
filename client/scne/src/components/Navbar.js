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
            
              
              
             
              <FormatListNumberedIcon  className="navicons" sx={{ color: 'white' }} />
            
          </Link>
          <Link to="/community">
            
            
              <PeopleIcon className="navicons" sx={{ color: 'white' }} />
            
          </Link>
          <Link to="/feed">
            
             
              <FeedIcon className="navicons" sx={{ color: 'white' }} />
           
          </Link>
          { localStorage.getItem('bizId') && (
            <Link to={`/biz/${localStorage.bizId}`}>
             
                <BusinessIcon className="navicons" sx={{ color: 'white' }} />
             
            </Link>
          )}
          {!isBusiness && id && (
            <Link to={`/profile/${id}`}>
              
                
              
                <AccountCircleIcon className="navicons" sx={{ color: 'white' }} />
              
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
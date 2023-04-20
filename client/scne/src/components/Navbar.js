import { Link } from "react-router-dom"
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';

const Navbar = () => {
  return (
    <>
    <div className="navbarContainer">
        <div className="navbarShell">
        <div className="navbar">
            <div>
            <Link to="/list"><FormatListNumberedIcon className="navicons"/></Link>
            </div>
            <div>
            <Link to="/community"><PeopleIcon className="navicons"/></Link>
            </div>
            <Link to="/find"><ExploreIcon className="navicons"/></Link>
            <div>
            <Link to="/profile"><AccountCircleIcon className="navicons"/></Link>
            </div>
            {/* <Link to="/Media">Media</Link> */}
            {/* <Link to="/Map">Map</Link> */}
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
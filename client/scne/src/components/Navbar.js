import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div>
        <div>
            <Link to="/list">List</Link>
            <Link to="/community">Community</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Find">Find</Link>
            {/* <Link to="/Media">Media</Link> */}
            {/* <Link to="/Map">Map</Link> */}
        </div>
    </div>
    </>
  );
};

export default Navbar;
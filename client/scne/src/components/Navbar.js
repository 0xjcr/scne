import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavMenu>
            <NavLink to="/List">List</NavLink>
            <NavLink to="/Community">Community</NavLink>
            <NavLink to="/Map">Map</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Media">Media</NavLink>
            <NavLink to="/Find">Find</NavLink>
        </NavMenu>
    </Nav>
    </>
  );
};

export default Navbar;
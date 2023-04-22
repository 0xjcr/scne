import Navbar from "../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileUser from "../components/ProfileUser";

const YourProfile = () => {

    const navigate = useNavigate();

   

    const handleClick = () => {
        //need to account for correct id for logged in user
      navigate("/editprofile/{id}");
    };
  return (
    <>
    
    
    <button className="editProfile" onClick={handleClick}>EDIT YOUR PROFILE</button>
    <div className="yourProfile">
    <ProfileUser>

      
    </ProfileUser>
    </div>

    <Navbar></Navbar>
    
    </>
  )
}

export default YourProfile
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const YourProfile = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/editprofile");
    };
  return (
    <>
    <h2>YourProfile</h2>
    <button onClick={handleClick}>EDIT YOUR PROFILE</button>
    <Navbar></Navbar>
    </>
  )
}

export default YourProfile
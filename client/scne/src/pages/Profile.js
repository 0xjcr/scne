import EditUser from '../components/EditUser';
import Navbar from '../components/Navbar';
import ProfileUser from '../components/ProfileUser';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };


  return (
    <>
    <button onClick={goBack}> BACK</button>
<ProfileUser></ProfileUser>
<Navbar/>
    
    </>
  )
}

export default Profile
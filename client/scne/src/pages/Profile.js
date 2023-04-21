import Navbar from '../components/Navbar';
import ProfileUser from '../components/ProfileUser';
import { useParams } from 'react-router-dom';


const Profile = () => {

  const { id } = useParams();


  return (
    <>
    
<ProfileUser id={id}></ProfileUser>
<Navbar/>
    
    </>
  )
}

export default Profile
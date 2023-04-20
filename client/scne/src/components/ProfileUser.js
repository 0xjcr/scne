import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProfile } from '../api-service';


const ProfileUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    
    useEffect(() => {
      getProfile(id).then((data) => setUser(data));
    }, [id]);
  
    if (!user) {
      return <div>Uh. oh... We've encountered an error finding this user</div>;
    }

    
  
    return (
      <>
        <div>
          <button onClick={goBack}> ⬅️ BACK</button>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.photo}</div>
          <div>{user.bio}</div>
          <div>{user.email}</div>
          <div>{user.reviewCount}</div>
          <button>+</button>
          <div>{user.endorsed}</div>
          {/* <div>{user.endorsements.map((endorsement) => (
            <div key={endorsement.id}>{endorsement.name}</div>
          ))}</div> */}
        </div>
      </>
    );
  };
  
  export default ProfileUser;
  
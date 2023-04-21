import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProfile } from '../api-service';
import { Divider, Chip } from '@mui/material';

const ProfileUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
const loggedInUserId = localStorage.getItem('userId')
//   const {newUser} = useLocation();
//   console.log(newUser)

  useEffect(() => {
    // const loggedInUser = localStorage.getItem('userId');
    // if (loggedInUser) {
    //   const foundUser = JSON.parse(loggedInUser);
    getProfile(id).then((data) => setUser(data));
// }}, [id]);
    //     getProfile(foundUser.id).then((data) => setUser(data));
    // }
  }, [id]);

    

  if (!user) {
    return <div>Uh. oh... We've encountered an error finding this user</div>;
  }

  return (
    <>
    
      <div className="userProfileContainer">
        {loggedInUserId === id && (<div><button>edit</button><button>logout</button></div>)}
        <div className="userProfileContent">
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div className="userProfilePicCircle">
          <img className="userProfilePic" src={user.photo} alt={''} />
          </div>
          <div>{user.bio}</div>
          {user.member ? (
            <Divider>
              <Chip label="TEAM" />
            </Divider>
          ) : (
            <Divider />
          )}
          <div>{user.member}</div>
          <div>{user.email}</div>
          <div>{user.reviewCount}</div>
          <button>+</button>
          <div>{user.endorsed}</div>
          {/* <div>{user.endorsements.map((endorsement) => (
            <div key={endorsement.id}>{endorsement.name}</div>
          ))}</div> */}
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
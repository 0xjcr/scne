import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProfile } from '../api-service';
import { Divider, Chip } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editprofile/${id}`);
  };

  if (!user) {
    return <div>Uh. oh... We've encountered an error finding this user</div>;
  }

  return (
    <>
    
      <div className="userProfileContainer">
        {loggedInUserId === id && (<div className="editAndLogout"><Button sx={{ width: '25%' }}onClick={handleEdit} variant="outlined" size="small" >edit</Button><Button sx={{ width: '25%' }} variant="outlined" size="small" >logout</Button></div>)}
        <div className="userProfileContent">
          <div style={{ display: 'flex', alignItems: 'center' }}><h3>{user.firstName}</h3> <span>&nbsp;</span>
          <h3>{user.lastName}</h3><h4 style={{ marginLeft: '20%' }}>{user.ig}</h4></div>
          <Divider />
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
          <h3>{user.member}</h3>
          <div>{user.email}</div>
          <Divider />
          <div>{user.reviewCount}</div>
          <IconButton aria-label="review" sx={{ transform: 'scale(1.8)', position: 'absolute', bottom: '50px', right: '40px' }}  >
  <AutoAwesomeIcon /></IconButton>
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
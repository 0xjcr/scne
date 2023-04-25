import { useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProfile, updateProfileAlt, logout } from '../api-service';
import { Divider, Chip } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ProfileUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  
  const loggedInUserId = localStorage.getItem('userId')
  

  const handleEndorse = async () => {
    const updatedUser = { ...user, endorsed: user.endorsed + 1 };
    const response = await updateProfileAlt(id, updatedUser);
    if (response.success) {
      setUser(updatedUser);
    }
  };

 

  useEffect(() => {
    if (loggedInUserId && id === loggedInUserId) {
      getProfile(loggedInUserId).then((data) => setUser(data));
    } else {
      getProfile(id).then((data) => setUser(data));
    }
  }, [id, loggedInUserId]);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editprofile/${id}`);
  };

  const handleLogout = async () => {
    try {
      
      await navigate('/logout');
      console.log('logout')
      
      await logout();
  
      
      localStorage.removeItem('userId');
      localStorage.removeItem('bizId');

    } catch (error) {
      console.error('Error during logout:', error);
    
  };
    
    
  };

  if (!user) {
    return <div>Uh. oh... We've encountered an error finding this user</div>;
  }

  return (
    <>
      <div>
        <Card
          className="card"
          sx={{ maxWidth: '90vw', margin: '5vw', borderRadius: '30px', background: 'transparent', border: '1px solid' }}
          style={{ color: 'whitesmoke' }}
        >
          {loggedInUserId === id && (
            <div className="editAndLogout">
              <Button sx={{ color: 'white' , width: '25%' }} onClick={handleEdit} variant="" size="small">
                edit
              </Button>
              <Button sx={{ color: 'white', width: '25%' }} variant="" size="small" onClick={handleLogout}>
                logout
              </Button>
            </div>
          )}
          <CardContent>
            <div className="userProfileContent">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>{user.firstName}</h3> <span>&nbsp;</span>
                <h3>{user.lastName}</h3>
                <h4 style={{ marginLeft: '20%' }}>{user.ig}</h4>
              </div>
              <Divider />
              <div className="userProfilePicCircle">
                <img className="userProfilePic" src={user.photo} alt={''} />
              </div>
              <div style={{ margin: '10px' }}>{user.bio}</div>

              {user.member ? (
                <Divider>
                  <Chip 
                  sx={{
                    color: 'black', 
                    backgroundColor: 'lightgrey', 
                  }}
                  label="TEAM" />
                </Divider>
              ) : (
                <Divider />
              )}
              <h3>{user.member}</h3>
              <div>{user.email}</div>
              <Divider />
              <div>{user.reviewCount}</div>
              <IconButton
                aria-label="review"
                sx={{ transform: 'scale(2)', position: 'absolute', bottom: '50px', right: '40px' }}
                onClick={handleEndorse}
              >
                <AutoAwesomeIcon sx={{ color: '#70FF00' }} />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfileUser;
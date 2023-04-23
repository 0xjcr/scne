import React, { useState, useEffect } from 'react';
import { getAllProfiles } from '../api-service';
import CircleUser from './CircleUser';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const BusinessProfile = ({ name, bio, city, address, phone, reviewCount, ig, photo }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllProfiles().then((fetchedUsers) => {
      const matchingUsers = fetchedUsers.filter((user) => user.member === name);
      setUsers(matchingUsers); 
    });
  }, [name]);

  return (
    <>
      <div className="businessProfileContainer">
        <div className="businessProfileContent">
          <div>
            <h2>{name}</h2>
            <div>{ig}</div>
          </div>
          <div className="busProfilePicCircle">
          <img className="busProfilePic" src={photo} alt={''} />
          </div>
          <div style={{ marginBottom: '20px' }}>{bio}</div>
          <div>
            <div>{city}</div>
            <div>{address}</div>
            <div style={{ marginBottom: '20px' }}>{phone}</div>
            
          </div>
          <div>{reviewCount}</div>
          <Divider>
            <Chip label="TEAM" />
          </Divider>
          <div className="circleUserList" style={{ display: 'flex', flexDirection: 'row' }}>
            {users.map((user) => (
              <CircleUser
                key={user.id}
                id={user.id}
                firstName={user.firstName}
                reviewCount={user.reviewCount}
                photo={user.photo}
                clickable={true}
                member={user.member}
              />
            ))}
          </div>
          <IconButton aria-label="review" sx={{ transform: 'scale(2)', position: 'absolute', bottom: '50px', right: 
          '40px' }} 
          
          // onClick={handleUpvote}
          
          >


  <AutoAwesomeIcon sx={{ color: "#70FF00" }}/></IconButton>
        </div>
      </div>
    </>
  );
};

export default BusinessProfile;


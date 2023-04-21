import React, { useState, useEffect } from 'react';
import { getAllProfiles } from '../api-service';
import CircleUser from './CircleUser';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

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
          <img src={photo} alt={`${name}'s photo`} />
          <div>{bio}</div>
          <div>
            <div>{city}</div>
            <div>{address}</div>
            <div>{phone}</div>
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessProfile;


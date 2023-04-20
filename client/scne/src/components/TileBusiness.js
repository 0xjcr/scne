import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/Button';
import StraightIcon from '@mui/icons-material/Straight';
import CircleUser from './CircleUser';
import { getAllProfiles } from '../api-service'; 

const TileBusiness = ({ id, name, upvotes, handleUpvote, ranking }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllProfiles().then((fetchedUsers) => {
      
      setUsers(fetchedUsers.slice(0, 5)); // Get only the first 5 users
    });
  }, []);

  return (
    <div>
      <div></div>
      <div className="tile">
        <div>{ranking}</div>
        <h2>{name}</h2>
        <div className="upvoteButtonOuter">
          <IconButton size="large" onClick={() => handleUpvote(id)}>
            <StraightIcon />
            {upvotes}
          </IconButton>
        </div>
        
        <div className="circleUserList" style={{ display: 'flex', flexDirection: 'row' }}>
  {users.map((user) => (
    <CircleUser
      key={user.id}
      id={user.id}
      firstName={user.firstName} // Use 'firstName' instead of 'name'
      reviewCount={user.reviewCount}
      photo={user.photo}
      clickable={false}
    />
  ))}
</div>
      </div>
    </div>
  );
};

export default TileBusiness;

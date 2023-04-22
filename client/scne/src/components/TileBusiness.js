import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircleUser from './CircleUser';
import { getAllProfiles, updateUpvote } from '../api-service';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const TileBusiness = ({ id, name, upvotes: initialUpvotes, ranking, photo }) => {
  const [users, setUsers] = useState([]);
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  useEffect(() => {
    getAllProfiles().then((fetchedUsers) => {
      const matchingUsers = fetchedUsers.filter((user) => user.member === name);
      setUsers(matchingUsers.slice(0, 5)); // Get only the first 5 users
    });
  }, [name]);

  const handleUpvote = async (event, id) => {
    // stopPropogation prevents propogating to the parent element when clicking to upvote
    event.stopPropagation();
    event.preventDefault();
    const newUpvotes = upvotes + 1;
    await updateUpvote(id, newUpvotes);
    setUpvotes(newUpvotes);
  };

  return (
    <div>
      <div className="tile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <div id="twelve-point-star" className="ranking">{ranking}</div>
          <h2 style={{ textAlign: 'center', flexGrow: 1 }}>{name}</h2>
        </div>

        {/* <div>{photo}</div> */}


        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: '8px' }}>
          <div className="upvoteButtonOuter" style={{ marginRight: '8px', marginLeft: '8px', marginBottom: '20px' }}>
            <ButtonGroup
              orientation="vertical"
              variant="outlined"
              size="small"
              color="inherit"
              style={{ width: '60px', height: '30px', transform: 'scale(0.85)' , marginLeft: 0 }}
            >
              <Button>{upvotes || 0}</Button>
              <Button onClick={(event) => handleUpvote(event, id)}>
  <AutoAwesomeIcon sx={{ color: "#70FF00" }} />
</Button>
            </ButtonGroup>
          </div>
          {users.slice(0, 4).map((user) => (
            <CircleUser
              key={user.id}
              id={user.id}
              firstName={user.firstName}
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

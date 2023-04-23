import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircleUser from './CircleUser';
import { getAllProfiles, updateUpvote } from '../api-service';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-root': {
    position: 'relative',
  },
  '& .MuiBadge-badge': {
    fontSize: '30px',
    right: 1,
    top: 5,
    width: 40,
    height: 40,
    border: `2px solid lightgray`,
    padding: '0 4px',
    borderRadius: '10px', 
    backgroundColor: 'rgba(112,255,0, 1)',
    color: '#6e06de',
  },
}));

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
      <div className="tile">
        <div className="top-row">
          <h2>{name}</h2>
          <div className="upvoteButtonOuter">
            <ButtonGroup
              orientation="vertical"
              variant="outlined"
              size="large"
              color="inherit"
              style={{
                width: '60px',
                height: '30px',
                transform: 'scale(0.85)',
                marginLeft: 0,
              }}
            >
              <Button>{upvotes || 0}</Button>
              <Button onClick={(event) => handleUpvote(event, id)}>
                <AutoAwesomeIcon sx={{ color: '#70FF00' }} />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="middle-row">
  {ranking < 11 ? (
    <StyledBadge badgeContent={ranking} color="secondary">
      <div className="busTileCircle">
        <img className="busTilePic" src={photo} alt={'hello'} />
      </div>
    </StyledBadge>
  ) : (
    <div className="busTileCircle">
      <img className="busTilePic" src={photo} alt={'hello'} />
    </div>
  )}
</div>
        <div className="bottom-row">
          {users.slice(0, 4).map((user) => (
            <CircleUser
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              reviewCount={user.reviewCount}
              photo={user.photo}
              clickable={false}
              member={user.member}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TileBusiness;

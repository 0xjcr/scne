
import { Card, CardContent, CardMedia, Typography, Box} from '@mui/material';
import CircleUser from './CircleUser';

const Post = ({ id, content, event, comment, scene, postPhoto, user }) => {
  console.log("Event:", event);
  console.log("User:", user);

  const { id: userId, firstName, member, photo } = user;

  const tileStyle = {
    background: event
      ? 'linear-gradient(24deg, rgba(38,251,25,0.21932114882506526) 39%, rgba(181,132,245,0) 56%)'
      : 'linear-gradient(24deg, rgba(110,6,222,1) 39%, rgba(181,132,245,0) 56%)',
  };

  return (
    <Card
      sx={{
        maxWidth: '90vw',
        margin: '5vw',
        borderRadius: '30px',
        background: 'transparent', 
        color: 'whitesmoke',
        ...tileStyle,
        position: 'relative',
        
      }}
    >
      {event && (
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontWeight: 'bold',
          }}
        >
          <Typography variant="h4"
  sx={{
    margin: '4vw',
  }}>EVENT</Typography>
        </Box>
      )}
      <CardContent>
        <CircleUser userId={userId}
        firstName={firstName}
        member={member}
        photo={photo} />
        {postPhoto && (
          <CardMedia
            component="img"
            style={{
              width: '90%',
              height: '90%',
              borderRadius: '10px',
              border: '1px solid white',
              margin: '10px',
            }}
            image={postPhoto}
            alt=""
          />
        )}
        <Typography variant="h5" style={{ margin: '10px' }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
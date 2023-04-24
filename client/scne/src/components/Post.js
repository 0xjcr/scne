
import CircleUser from './CircleUser';

const Post = ({ photo, id, content, event, comment, scene, postPhoto, user }) => {
  console.log("Event:", event);
    const tileStyle = {
      backgroundColor: event ? 'rgba(112,255,0, 0.4)' : '', 
      
    };
  
    return (
        
      <div className="postTile" style={tileStyle}>
        <CircleUser user={user} />
        {/* <img src={(user.photo) || photo} alt="" /> */}
        {postPhoto && <img style={{ width: '90%', height: '90%', borderRadius: '10px', border: '1px solid white', margin: '10px' }} src={postPhoto} alt="" />}
        <div style={{ margin: '10px'}} >{content}</div>
      </div>
    );
  };
  

export default Post;

import CircleUser from './CircleUser';

const Post = ({ photo, id, content, event, comment, scene, postPhoto, user }) => {

    const tileStyle = {
      backgroundColor: event ? 'rgba(112,255,0, 0.4)' : '', 
    };
  
    return (
        
      <div className="postTile" style={tileStyle}>
        <CircleUser user={user} />
        {/* <img src={(user.photo) || photo} alt="" /> */}
        {postPhoto && <img style={{ width: '80%', height: '80%', borderRadius: '10px', border: '1px solid white', margin: '10px' }} src={postPhoto} alt="" />}
        <div style={{ margin: '10px'}} >{content}</div>
      </div>
    );
  };
  

export default Post;
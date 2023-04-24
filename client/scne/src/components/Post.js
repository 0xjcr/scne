
import CircleUser from './CircleUser';

const Post = ({ id, content, event, comment, scene, postPhoto, userId }) => {

    const tileStyle = {
      backgroundColor: event ? 'rgba(112,255,0, 0.4)' : 'initial', 
    };
  
    return (
      <div className="postTile" style={tileStyle}>
        <CircleUser />
        {postPhoto && <img src={postPhoto} alt="Post" />}
        <div>{content}</div>
      </div>
    );
  };
  

export default Post;

import CircleUser from './CircleUser';

const Post = ({ id, content, event, comment, scene, postPhoto, userId }) => {

    const tileStyle = {
      backgroundColor: event ? 'rgba(112,255,0, 0.4)' : '', 
    };
  
    return (
      <div className="postTile" style={tileStyle}>
        <CircleUser userId={userId} />
        {postPhoto && <img style={{ width: '100px', height: '100px', borderRadius: '10px', border: '1px solid white' }} src={postPhoto} alt="" />}
        <div>{content}</div>
      </div>
    );
  };
  

export default Post;
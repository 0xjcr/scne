import CircleUser from './CircleUser';

const Post = ({ id, content, event, comment, scene, postPhoto }) => {
  return (
    <div>
      <CircleUser />
      {postPhoto && <img src={postPhoto} alt="Post" />}
      <div>{content}</div>
      <h1>helllooo</h1>
    </div>
  );
};

export default Post;
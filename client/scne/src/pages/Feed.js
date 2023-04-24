import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { getAllPosts } from '../api-service';
import Topbar from '../components/Topbar';
import Button from '@mui/material/Button';

const PostContext = createContext();

const Feed = ({user}) => {
  const navigate = useNavigate();
  const [scene, setScene] = useState('coffee');
  const [postState, setPostState] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => {
      if (Array.isArray(res)) {
        setPostState(res);
      } else {
        console.error('API response is not an array');
      }
    });
  }, []);

  const handleCreatePostClick = () => {
    navigate(`/addpost/`);
  };

  const filteredPosts = postState.filter((post) => post.scene === scene);

  const handleSceneChange = (newScene) => {
    setScene(newScene);
    // Store the selected scene in local storage
    localStorage.setItem('scene', newScene);
  };

  return (
    <PostContext.Provider value={[postState, setPostState]}>
      <Topbar scene={scene} onSceneChange={handleSceneChange} />
      
      <div className="createPost"> <Button
        variant="contained"
        sx={{
         position: 'sticky',
          marginTop: '12vh',
          width: '70vw',
          height: '5vh',
          fontSize: '25px',
          marginLeft: '15vw',
          backgroundColor: '#6e06de',
         
        }}
        onClick={handleCreatePostClick}
      >
        CREATE A POST
      </Button> </div>

      <div>
        <div className="feedContainer"></div>
        {filteredPosts.map((post, index) => (
          <div key={index}>
            <Post
              id={post.id}
              content={post.content}
              event={post.event}
              comment={post.comment}
              scene={post.scene}
              postPhoto={post.postPhoto}
              userId={post.userId}
              bizId={post.bizId}
              user={post.user}
            />
          </div>
        ))}
        <Navbar />
      </div>
    </PostContext.Provider>
  );
};

export default Feed;
export { PostContext };

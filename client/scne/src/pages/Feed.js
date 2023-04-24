import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { getAllPosts } from '../api-service';
import Topbar from '../components/Topbar';
import Button from '@mui/material/Button';

const PostContext = createContext();
const Feed = () => {
  
  const navigate = useNavigate();

  const storedScene = localStorage.getItem("scene");

  const [scene, setScene] = useState(storedScene || "coffee");

  
  
  const handleSceneChange = (newScene) => {
    setScene(newScene);
    // Store the selected scene in local storage
    localStorage.setItem("scene", newScene);
  };



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

  return (
    <PostContext.Provider value={setPostState}>
<Topbar scene={scene} onSceneChange={handleSceneChange}/>
 <Button variant="contained" sx={{marginTop:'12vh',width:'70vw', height: '5vh' , fontSize:'25px', marginLeft:'15vw', backgroundColor: '#6e06de'}} onClick={handleCreatePostClick} >CREATE A POST</Button>
    <div>
      <div className="feedContainer">
      
      </div>
      {postState.map((post, index) => (
        <div>
          <Post
            id={post.id}
            content={post.content}
            event={post.event}
            comment={post.comment}
            scene={post.scene}
            postPhoto={post.postPhoto}
            userId={post.userId}
            bizId={post.bizId}
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
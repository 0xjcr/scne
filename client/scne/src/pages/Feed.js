import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { getAllPosts } from '../api-service';
import Topbar from '../components/Topbar';

const Feed = () => {

  const storedScene = localStorage.getItem("scene");
  const [scene, setScene] = useState(storedScene || "coffee");

  const handleSceneChange = (newScene) => {
    setScene(newScene);
    // Store the selected scene in local storage
    localStorage.setItem("scene", newScene);
  };


  const navigate = useNavigate();

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

  const handlePostClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <Topbar scene={scene} onSceneChange={handleSceneChange}/>
      {postState.map((post, index) => (
        <div key={post.id} onClick={() => handlePostClick(post.id)}>
          <Post
            id={post.id}
            content={post.content}
            event={post.event}
            comment={post.comment}
            scene={post.scene}
            postPhoto={post.postPhoto}
          />
        </div>
      ))}
      <Navbar />
    </div>
  );
};

export default Feed;
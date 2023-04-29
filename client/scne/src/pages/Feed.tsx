import React,{ useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// @ts-ignore
import Post from "../components/Post.tsx";
import { getAllPosts } from "../api-service";
// @ts-ignore
import Topbar from "../components/Topbar.tsx"
import Button from "@mui/material/Button";

interface PostType {
  id:string,
  content:string,
  event:string,
  comment:string,
  scene:string,
  postPhoto:string,
  userId: string,
  bizId:string,
   user:string,
}

interface Props {
  user: any
}

// const PostContext = createContext<PostType>([]);

const Feed = () => {
  const navigate = useNavigate();
  const [scene, setScene] = useState("coffee");
  const [postState, setPostState] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getAllPosts().then((res) => {
      if (Array.isArray(res)) {
        setPostState([...res]);
      } else {
        console.error("API response is not an array");
      }
    });
  }, []);

  const handleCreatePostClick = () => {
    navigate(`/addpost/`);
  };

  useEffect(() => {
    const newArr = postState.filter((post) => post['scene'] === scene);
    setFilteredPosts(newArr);
  }, [scene, postState]);

  const handleSceneChange = (newScene:string) => {
    setScene(newScene);
    // Store the selected scene in local storage
    localStorage.setItem("scene", newScene);
  };

  return (

    <>
    {/* // <PostContext.Provider value={[postState, setPostState]}> */}
      <Topbar scene={scene} onSceneChange={handleSceneChange} />

      <div className="createPost">
        <Button
          variant="contained"
          sx={{
            position: "sticky",
            marginTop: "12vh",
            width: "70vw",
            height: "5vh",
            fontSize: "25px",
            marginLeft: "15vw",
            backgroundColor: "black",
          }}
          onClick={handleCreatePostClick}
        >
          +
        </Button>{" "}
      </div>

      <div className="feedContainer">
        <div className="feedListContainer"></div>
        {filteredPosts ? (
          filteredPosts.map((post, index) => (
            <div key={index}>
              <Post
                id={post['id']}
                content={post['content']}
                event={post['event']}
                comment={post['comment']}
                scene={post['scene']}
                postPhoto={post['postPhoto']}
                // // userId={post['userId']}
                // // bizId={post['bizId']}
                user={post['user']}


              />
            </div>
          ))
        ) : (
          <div></div>
        )}
        <Navbar />
      </div>
     {/* </PostContext.Provider> */}
      </>
  );
};

export default Feed;
//export { PostContext };

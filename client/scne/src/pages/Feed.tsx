import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import Navbar from "../components/Navbar.tsx";
// @ts-ignore
import Post from "../components/Post.tsx";
// @ts-ignore
import { getAllPosts } from "../api-service.tsx";
// @ts-ignore
import Topbar from "../components/Topbar.tsx";
import Button from "@mui/material/Button";
import { UserPost } from "../types/postType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Feed = () => {
  const scene = useSelector((state: RootState) => state.Scene);
  const navigate = useNavigate();

  const [postState, setPostState] = useState<UserPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<UserPost[]>([]);

  useEffect(() => {
    getAllPosts().then((res: UserPost) => {
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
    const newArr = postState.filter((post) => post["scene"] === scene);
    setFilteredPosts(newArr);
  }, [scene, postState]);

  return (
    <>
      <Topbar />

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
                id={post["id"]!}
                content={post["content"]}
                event={post["event"]}
                comment={post["comment"]}
                scene={post["scene"]}
                postPhoto={post["postPhoto"]}
                user={post["user"]!}
              />
            </div>
          ))
        ) : (
          <div></div>
        )}
        <Navbar />
      </div>
    </>
  );
};

export default Feed;

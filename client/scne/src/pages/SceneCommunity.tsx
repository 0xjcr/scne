import React, { useState } from "react";
// @ts-ignore
import Topbar from "../components/Topbar.tsx";
import Community from "../components/Community";

const SceneCommunity = () => {
  const storedScene = localStorage.getItem("scene");
  const [scene, setScene] = useState<string>(storedScene || "coffee");

  const handleSceneChange = (newScene:string) => {
    setScene(newScene);
    // Store the selected scene in local storage
    localStorage.setItem("scene", newScene);
  };

  return (
    <>
      <Topbar scene={scene} onSceneChange={handleSceneChange} />
      <Community scene={scene} />
    </>
  );
};

export default SceneCommunity;

import { useState } from "react";
import Topbar from "../components/Topbar";
import Community from "./Community";

const SceneCommunity = () => {
  const storedScene = localStorage.getItem("scene");
  const [scene, setScene] = useState(storedScene || "coffee");

  const handleSceneChange = (newScene) => {
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

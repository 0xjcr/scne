import { useState } from "react";
import Topbar from "../components/Topbar";
import Community from "./Community";

const SceneCommunity = () => {
  const [scene, setScene] = useState('coffee');

  const handleSceneChange = (newScene) => {
    setScene(newScene);
  };

  return (
    <>
      <Topbar scene={scene} onSceneChange={handleSceneChange} />
      <Community scene={scene} />
    </>
  );
};

export default SceneCommunity;
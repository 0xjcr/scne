import { useState, useEffect } from "react";
import List from "./List";
import Topbar from "../components/Topbar";

const SceneList = () => {
  const [scene, setScene] = useState(localStorage.getItem("scene") || "coffee");

  const handleSceneChange = (newScene) => {
    setScene(newScene);
  };

  useEffect(() => {
    localStorage.setItem("scene", scene);
  }, [scene]);

  return (
    <>
      <Topbar onSceneChange={handleSceneChange} scene={scene} />
      <List scene={scene} />
    </>
  );
};

export default SceneList;
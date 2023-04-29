import React, { useState, useEffect } from "react";
// @ts-ignore
import List from "../components/List.tsx";
// @ts-ignore
import Topbar from "../components/Topbar.tsx";

const SceneList = () => {
  const [scene, setScene] = useState(
    localStorage.getItem("scene") || "coffee"
  );

  const handleSceneChange = (newScene: string) => {
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
import { useState } from "react";
import List from "./List"
import Topbar from "../components/Topbar"



const SceneList = () => {

    const [scene, setScene] = useState('coffee');

    const handleSceneChange = (newScene) => {
      setScene(newScene);
    };




  return (
    <>
    <Topbar onSceneChange={handleSceneChange}></Topbar>
    <List scene={scene}></List>
    </>
  )
};

export default SceneList;
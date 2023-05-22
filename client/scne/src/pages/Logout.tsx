import React, {useEffect} from "react";
import { logout } from "../api-service";

const Logout:React.FC = () => {
  useEffect(() => {
    logout();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src="../logo2.png" alt="" width="400" height="400" style ={{margin:"20px"}} />
    </div>
  );
};

export default Logout;

import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import CircleUser from "../components/CircleUser";
import { useState, useEffect } from 'react';
import { getAllProfiles } from "../api-service";

const Community = () => {
    const [userProfiles, setUserProfiles] = useState([]);
  
    useEffect(() => {
      getAllProfiles().then((profiles) => setUserProfiles(profiles));
    }, []);
  
    // Sort user profiles by reviewCount
    const sortedProfiles = [...userProfiles].sort(
      (a, b) => b.reviewCount - a.reviewCount
    );
  
    return (
      <>
        <Topbar></Topbar>
        <div className="community">
          {sortedProfiles.map((user) => (
            <CircleUser
              key={user.id}
              id={user.id}
              firstName={user.firstName} // Change this line
              reviewCount={user.reviewCount}
              photo={user.photo}
            />
          ))}
        </div>
        <Navbar></Navbar>
      </>
    );
  };
  
  export default Community;
  
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import CircleUser from "../components/CircleUser";
import { useState, useEffect } from 'react';
import { getAllProfiles } from "../api-service";

const Community = ({ scene }) => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    getAllProfiles().then((profiles) => setUserProfiles(profiles));
  }, []);

  // Filter user profiles by scene and sort them by endorsed
  const filteredAndSortedProfiles = [...userProfiles]
    .filter((profile) => [profile.scene0, profile.scene1, profile.scene2].includes(scene))
    .sort((a, b) => b.endorsed - a.endorsed);

  return (
    <>
      
      <div className="community">
        {filteredAndSortedProfiles.map((user) => (
          <CircleUser
            key={user.id}
            id={user.id}
            firstName={user.firstName} // Change this line
            endorsed={user.endorsed}
            photo={user.photo}
            member={user.member}
            scale={1.5}
          />
        ))}
      </div>
      <Navbar></Navbar>
    </>
  );
};

export default Community;

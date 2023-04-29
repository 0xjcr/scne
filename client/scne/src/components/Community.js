import Navbar from "./Navbar";
import CircleUser from "./CircleUser";
import { useState, useEffect } from "react";
import { getAllProfiles } from "../api-service";

const Community = ({ scene }) => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    getAllProfiles().then((profiles) => {
      setUserProfiles(profiles);
    });
  }, []);

  const filteredAndSortedProfiles = [...userProfiles]
    .filter((profile) => {
      return [profile.scene0, profile.scene1, profile.scene2].includes(scene);
    })
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

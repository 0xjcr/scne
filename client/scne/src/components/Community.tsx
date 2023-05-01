import React, { useState, useEffect } from "react";
// @ts-ignore
import Navbar from "./Navbar.tsx";
// @ts-ignore
import CircleUser from "./CircleUser.tsx";
import { getAllProfiles } from "../api-service";

type UserProfile = {
  scene0: string;
  scene1: string;
  scene2: string;
  endorsed: number;
};

type CommunityProps = {
  scene: string;
};

const Community = ({ scene }: CommunityProps) => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    getAllProfiles().then((profiles) => {
      setUserProfiles(profiles);
    });
  }, []);

  const filteredAndSortedProfiles = [...userProfiles]
    .filter((profile: UserProfile) => {
      return [profile.scene0, profile.scene1, profile.scene2].includes(scene);
    })
    .sort((a, b) => b["endorsed"] - a["endorsed"]);

  return (
    <>
      <div className="community">
        {filteredAndSortedProfiles.map((user) => (
          <CircleUser
            key={user["id"]}
            id={user["id"]}
            firstName={user["firstName"]} // Change this line
            endorsed={user["endorsed"]}
            photo={user["photo"]}
            member={user["member"]}
            scale={1.5}
          />
        ))}
      </div>
      <Navbar></Navbar>
    </>
  );
};

export default Community;

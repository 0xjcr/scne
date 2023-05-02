import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CircleUser from "./CircleUser";
import { getAllProfiles } from "../api-service";
import { UserType } from "../types/userType";

type CommunityProps = {
  scene: string;
};

const Community = ({ scene }: CommunityProps) => {
  const [userProfiles, setUserProfiles] = useState<UserType[]>([]);

  useEffect(() => {
    getAllProfiles().then((profiles: UserType[]) => {
      setUserProfiles(profiles);
    });
  }, []);

  const filteredAndSortedProfiles = [...userProfiles]
    .filter((profile: UserType) => {
      return [profile.scene0, profile.scene1, profile.scene2].includes(scene);
    })
    .sort((a, b) => b["endorsed"] - a["endorsed"]);

  return (
    <>
      <div className="community">
        {filteredAndSortedProfiles.map((user) => (
          <CircleUser
            key={user["id"]!}
            id={user["id"]!}
            firstName={user["firstName"]} // Change this line
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

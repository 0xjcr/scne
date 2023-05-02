import React, { useState, useEffect } from "react";
// @ts-ignore
import Navbar from "./Navbar.tsx";
// @ts-ignore
import CircleUser from "./CircleUser.tsx";
// @ts-ignore
import { getAllProfiles } from "../api-service.tsx";
import { UserType } from "../types/userType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Community = () => {
  const scene = useSelector((state: RootState) => state.Scene);
  const [userProfiles, setUserProfiles] = useState<UserType[]>([]);

  useEffect(() => {
    getAllProfiles().then((profiles: any) => {
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

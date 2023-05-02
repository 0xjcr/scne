import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CircleUser from "./CircleUser";
import { getAllProfiles } from "../api-service";
import { UserType } from "../types/userType";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "../redux/AllUsersSlice";
import { RootState, AppDispatch } from "../redux/store";

const Community = () => {
  const dispatch: AppDispatch = useDispatch();
  const scene = useSelector((state: RootState) => state.Scene);
  const users = useSelector((state: RootState) => state.AllUsers);

  useEffect(() => {
    getAllProfiles().then((profiles: UserType[]) => {
      dispatch(setAllUsers(profiles));
    });
  }, []);

  const filteredAndSortedProfiles = [...users]
    .filter((profile) => {
      return [profile.scene0, profile.scene1, profile.scene2].includes(scene);
    })
    .sort((a, b) => b.endorsed - a["endorsed"]);

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

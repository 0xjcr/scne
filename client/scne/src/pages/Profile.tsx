import React from "react";
import Navbar from "../components/Navbar";
// @ts-ignore
import ProfileUser from "../components/ProfileUser.ts";

const Profile = () => {
  return (
    <>
      <ProfileUser />
      <Navbar />
    </>
  );
};

export default Profile;

import React from "react";
// @ts-ignore
import Navbar from "../components/Navbar.tsx";
// @ts-ignore
import ProfileUser from "../components/ProfileUser.tsx";

const Profile = () => {
  return (
    <>
      <ProfileUser />
      <Navbar />
    </>
  );
};

export default Profile;

import React from "react";
import { useNavigate } from "react-router-dom";
import { CircleUserType } from "../types/circleUserType";

const CircleUser = ({
  id,
  userId,
  firstName,
  member,
  photo,
  clickable = true,
  scale = 1,
}: CircleUserType) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (clickable) {
      navigate(`/profile/${id || userId}`);
    }
  };

  const scaledMargin = 14 * scale;

  return (
    <div
      className="circleuser"
      onClick={handleUserClick}
      style={{
        borderStyle: "solid",
        borderWidth: member ? "1px" : "3px",
        borderColor: member ? "rgba(112, 255, 0, 1)" : "white",
        transform: `scale(${scale})`,
        margin: `${scaledMargin}px`,
      }}
    >
      <img className="circleuser-image" src={photo} alt={firstName} />
    </div>
  );
};

export default CircleUser;

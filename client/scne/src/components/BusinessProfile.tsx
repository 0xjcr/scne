import React, { useState, useEffect } from "react";
import { getAllProfiles } from "../api-service";
import CircleUser from "./CircleUser";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface CircleUserType {
  key: string;
  id: string;
  firstName: string;
  reviewCount: string;
  photo: string;
  clickable: boolean;
  member: string;
  scale: number;
  border: string;
}

const BusinessProfile = ({
  name,
  bio,
  city,
  address,
  phone,
  reviewCount,
  ig,
  photo,
}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllProfiles().then((fetchedUsers) => {
      const matchingUsers = fetchedUsers.filter((user) => user.member === name);
      setUsers(matchingUsers);
    });
  }, [name]);

  return (
    <>
      <div>
        <Card
          className="card"
          sx={{
            maxWidth: "90vw",
            margin: "5vw",
            borderRadius: "30px",
            background: "transparent",
            border: "1px solid",
          }}
          style={{ color: "whitesmoke" }}
        >
          <CardContent>
            <div className="businessProfileContent">
              <div>
                <h2>{name}</h2>
                <div>{ig}</div>
              </div>
              <Divider />
              <div className="busProfilePicCircle">
                <img className="busProfilePic" src={photo} alt={""} />
              </div>
              <div style={{ marginBottom: "20px" }}>{bio}</div>
              <Divider />
              <div>
                <div>{city}</div>
                <div>{address}</div>
                <div style={{ marginBottom: "20px" }}>{phone}</div>
              </div>
              <Divider />
              <div>{reviewCount}</div>
              <Divider>
                <Chip
                  label="TEAM"
                  sx={{ color: "black", backgroundColor: "lightgrey" }}
                />
              </Divider>
              <div
                className="circleUserList"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {users.map((user) => (
                  <CircleUser
                    key={user["id"]}
                    id={user["id"]}
                    userId={user["id"]}
                    firstName={user["firstName"]}
                    // reviewCount={user.reviewCount}
                    photo={user["photo"]}
                    clickable={true}
                    member={user["member"]}
                  />
                ))}
              </div>
              <Divider />
              <div>
                <p>Hours of Operation</p>
                <p>Monday - Sunday 00:00 - 24:00</p>
              </div>
              <IconButton
                aria-label="review"
                sx={{
                  transform: "scale(2)",
                  position: "absolute",
                  bottom: "50px",
                  right: "40px",
                }}
                // onClick={handleUpvote}
              >
                <AutoAwesomeIcon sx={{ color: "#70FF00" }} />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BusinessProfile;

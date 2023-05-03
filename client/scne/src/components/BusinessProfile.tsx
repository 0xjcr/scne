import React, { useEffect } from "react";
import CircleUser from "./CircleUser";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { BizType } from "../types/bizType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useParams, useNavigate } from "react-router-dom";
import { getProfile, logout } from "../api-service";
import Button from "@mui/material/Button";

const BusinessProfile = ({
  name,
  bio,
  city,
  address,
  phone,
  reviewCount,
  ig,
  photo,
}: BizType) => {
  const users = useSelector((state: RootState) => state.AllUsers);

  const matchingUsers = users.filter((user) => user.member === name);

  const { id } = useParams() as { id: string };

  const loggedInUserId = localStorage.getItem("bizId");

  useEffect(() => {
    if (loggedInUserId && id === loggedInUserId) {
      getProfile(Number(loggedInUserId));
    } else {
      getProfile(Number(id));
    }
  }, [id, loggedInUserId]);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editprofile/${id}`);
  };

  const handleLogout = async () => {
    try {
      navigate("/logout");
      await logout();
      localStorage.removeItem("userId");
      localStorage.removeItem("bizId");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

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
          {loggedInUserId === id && (
            <div className="editAndLogout">
              <Button
                sx={{ color: "white", width: "25%" }}
                size="small"
                onClick={handleLogout}
              >
                logout
              </Button>
            </div>
          )}

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
                {matchingUsers.map((user) => (
                  <CircleUser
                    key={user["id"]}
                    id={user["id"]}
                    userId={user["id"]}
                    firstName={user["firstName"]}
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

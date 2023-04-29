import React, { ElementType, useState, useEffect, Component } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
// @ts-ignore
import CircleUser from "./CircleUser.tsx";
import { getAllProfiles, updateUpvote } from "../api-service";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-root": {
    position: "relative",
  },
  "& .MuiBadge-badge": {
    fontSize: "30px",
    right: 1,
    top: 5,
    width: 40,
    height: 40,
    border: `2px solid lightgray`,
    padding: "0 4px",
    borderRadius: "10px",
    backgroundColor: "rgba(112,255,0, 1)",
    color: "#6e06de",
  },
}));

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

type ComponentType = "img" | "video" | "div" | React.ComponentType<any>;

interface Props {
  id: number;
  name: string;
  upvotes: number;
  ranking: number;
  photo: string;
  component: ComponentType;
}

const AltTile = ({
  id,
  name,
  upvotes: initialUpvotes,
  ranking,
  photo,
  component,
}: Props) => {
  const [users, setUsers] = useState([]);
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  useEffect(() => {
    getAllProfiles().then((fetchedUsers) => {
      console.log(fetchedUsers[0]);
      const matchingUsers = fetchedUsers.filter((user) => user.member === name);
      setUsers(matchingUsers.slice(0, 5)); // Get only the first 5 users
    });
  }, [name]);

  const handleUpvote = async (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    // stopPropogation prevents propogating to the parent element when clicking to upvote
    event.stopPropagation();
    event.preventDefault();
    const newUpvotes = upvotes + 1;
    await updateUpvote(id, newUpvotes);
    setUpvotes(newUpvotes);
  };

  return (
    <Card
      className="card"
      sx={{
        maxWidth: "90vw",
        minWidth: "25vw",
        margin: "5vw",
        borderRadius: "30px",
        background: "transparent",
        border: "1px solid",
      }}
      style={{ color: "whitesmoke" }}
    >
      <CardActionArea>
        <CardMedia
          component={component}
          alt={name}
          sx={{ height: 250, objectFit: "cover", position: "relative" }}
          image={photo}
        >
          {ranking < 11 ? (
            <StyledBadge
              badgeContent={`#` + ranking}
              color="secondary"
              sx={{ position: "absolute", top: 25, left: 30 }}
            ></StyledBadge>
          ) : null}
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>{name}</h2>
          <div className="upvoteButtonOuter">
            <ButtonGroup
              orientation="horizontal"
              variant="outlined"
              size="large"
              color="inherit"
              style={{
                width: "50px",
                height: "30px",
                transform: "scale(1.65)",
                marginRight: "10vw",
                marginLeft: "-30%",
              }}
            >
              <Button>{upvotes || 0}</Button>
              <Button onClick={(event) => handleUpvote(event, id)}>
                <AutoAwesomeIcon sx={{ color: "#70FF00" }} />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="bottom-row">
          {users.slice(0, 4).map((user) => (
            <CircleUser
              key={user["id"]}
              id={user["id"]}
              userId={user["id"]}
              firstName={user["firstName"]}
              // reviewCount={user["reviewCount"]}
              photo={user["photo"]}
              clickable={false}
              member={user["member"]}
              scale={1.25}
              // border={"5px solid"}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AltTile;

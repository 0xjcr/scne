import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
// @ts-ignore
import CircleUser from "./CircleUser.tsx";

interface Props {
  id: string;
  content: string;
  event: boolean;
  comment: string;
  scene: string;
  postPhoto: string;
  user: {
    id: string;
    firstName: string;
    member: boolean;
    photo: string;
  };
}

const Post = ({ id, content, event, comment, scene, postPhoto, user }: Props) => {
  const { id: userId, firstName, member, photo } = user;

  const tileStyle = {
    border: "1px solid",
    background: event
      ? "linear-gradient(24deg, rgba(110,6,222,0.2613333333333333) 0%, rgba(170,245,132,0.30133333333333334) 98%)"
      : "linear-gradient(24deg, rgba(232,255,221,0.1226666666666667) 0%, rgba(247,247,247,0.30133333333333334) 98%)",
  };

  return (
    <Card
      sx={{
        maxWidth: "90vw",
        margin: "5vw",
        borderRadius: "30px",
        color: "whitesmoke",
        ...tileStyle,
        position: "relative",
      }}
    >
      {event && (
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontWeight: "bold",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              margin: "4vw",
            }}
          >
            EVENT
          </Typography>
        </Box>
      )}
      <CardContent>
        <CircleUser
          userId={userId}
          firstName={firstName}
          member={member}
          photo={photo}
        />
        {postPhoto && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "90%",
                height: "90%",
                borderRadius: "10px",
                border: "1px solid white",
                margin: "5vw",
              }}
              image={postPhoto}
              alt=""
            />
          </div>
        )}
        <Typography variant="h5" style={{ margin: "10px" }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;

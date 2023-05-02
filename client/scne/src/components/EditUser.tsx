import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// @ts-ignore
import { updateProfile } from "../api-service.tsx";
// @ts-ignore
import CloudinaryImageUpload from "./CloudinaryImageUpload.tsx";
import { ChangeEventHandler } from "react";
import { FormEvent } from "react";
import { EditUserType } from "../api-service";

interface Inputs {
  bio: string;
  photo: string;
  ig: string;
  member: string;
  scene0: string;
  scene1: string;
  scene2: string;
  [key: string]: string;
}

const EditUser: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    bio: "",
    photo: "",
    ig: "",
    member: "",
    scene0: "",
    scene1: "",
    scene2: "",
  });

  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.currentTarget;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setInputs((inputs) => ({ ...inputs, photo: imageUrl.toString() }));
  };

  const handleButtonClick = (sceneValue: string) => {
    for (let i = 0; i < 3; i++) {
      const sceneKey = `scene${i}`;
      if (!inputs[sceneKey]) {
        setInputs((inputs) => ({
          ...inputs,
          [sceneKey]: sceneValue.toString(),
        }));
        break;
      }
    }
  };

  const filterEmptyFields = (data: Inputs) => {
    let filteredData: { [key in keyof EditUserType]: any } = {} as EditUserType;
    for (const key in data) {
      if (data[key]) {
        filteredData[key as keyof EditUserType] = data[key];
      }
    }
    return filteredData;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredInputs = filterEmptyFields(inputs);
    updateProfile(Number(id), filteredInputs).then(() => {
      //update logged in user in the context
      navigate(`/profile/${id}`);
    });

    setInputs({
      bio: "",
      photo: "",
      ig: "",
      member: "",
      scene0: "",
      scene1: "",
      scene2: "",
    });
  };
  return (
    <div className="editProfilePage">
      <h1 style={{ textAlign: "center" }}>EDIT PROFILE</h1>
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CloudinaryImageUpload
            userId={id}
            onUpload={handleImageUpload}
            isBusiness={false}
          ></CloudinaryImageUpload>
          <TextField
            id="outlined-multiline-static"
            label="EDIT BIO"
            name="bio"
            value={inputs.bio}
            multiline
            rows={4}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="INSTAGRAM"
            name="ig"
            variant="outlined"
            value={inputs.ig}
            onChange={handleChange}
          />

          <TextField
            id="outlined-basic"
            label="JOIN YOUR TEAM"
            name="member"
            variant="outlined"
            value={inputs.member}
            onChange={handleChange}
          />

          <h4 style={{ textAlign: "center" }}>JOIN SCENES NEAR YOU</h4>
          <Fab variant="extended" onClick={() => handleButtonClick("coffee")}>
            COFFEE
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Fab variant="extended" onClick={() => handleButtonClick("wellness")}>
            WELLNESS
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Fab variant="extended" onClick={() => handleButtonClick("mixology")}>
            MIXOLOGY
            <AddIcon sx={{ mr: 1 }} />
          </Fab>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#6e06de",
              fontSize: "larger",
              "&:hover": { backgroundColor: "#4b03b5" },
            }}
          >
            DONE
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default EditUser;

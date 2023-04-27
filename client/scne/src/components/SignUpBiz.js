import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { createBusiness } from "../api-service";
import CloudinaryImageUpload from "./CloudinaryImageUpload";
import { useNavigate } from "react-router-dom";

const SignUpBiz = ({ setBusinessState }) => {
  const [inputs, setInputs] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    scene: "",
    photo: "",
    bio: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createBusiness(inputs).then((newBusiness) => {
      setBusinessState((existingBusinesses) => [
        ...existingBusinesses,
        newBusiness,
      ]);
      navigate("list");
    });

    setInputs({
      name: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      scene: "coffee",
      photo: "",
      bio: "",
    });
  };

  const handleImageUpload = (imageUrl) => {
    setInputs({ ...inputs, photo: imageUrl });
  };

  return (
    <>
      <div data-testid="sign-up biz">
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
          <TextField
            id="outlined-basic-name"
            label="NAME"
            variant="outlined"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />

          <FormControl fullWidth>
            <InputLabel id="simple-select-label">CITY</InputLabel>
            <Select
              labelId="city-id"
              id="simple-select"
              value={inputs.city}
              label="CITY"
              name="city"
              onChange={handleChange}
            >
              <MenuItem value={"Barcelona"}>Barcelona</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="simple-select-label">SCENE</InputLabel>
            <Select
              labelId="scene-id"
              id="simple-select"
              value={inputs.scene}
              label="SCENE"
              name="scene"
              onChange={handleChange}
            >
              <MenuItem value={"coffee"}>COFFEE</MenuItem>
              <MenuItem value={"wellness"}>WELLNESS</MenuItem>
              <MenuItem value={"mixology"}>MIXOLOGY</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic-address"
            label="ADDRESS"
            variant="outlined"
            name="address"
            value={inputs.address}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-phone"
            label="PHONE"
            variant="outlined"
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-email"
            label="EMAIL"
            variant="outlined"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-password"
            label="PASSWORD"
            variant="outlined"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />

          <CloudinaryImageUpload
            onUpload={handleImageUpload}
            isBusiness={true}
          ></CloudinaryImageUpload>
          <TextField
            id="outlined-basic-name"
            label="BIO"
            variant="outlined"
            name="bio"
            value={inputs.bio}
            onChange={handleChange}
          />
          <Button
            sx={{ color: "#6e06de", border: "1px solid #6e06de" }}
            type="submit"
            variant="outlined"
          >
            CREATE
          </Button>
        </Box>
      </div>
    </>
  );
};

export default SignUpBiz;

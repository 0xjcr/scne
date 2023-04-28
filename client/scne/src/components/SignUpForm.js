import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { createProfile } from "../api-service";
import { useNavigate } from "react-router-dom";
import { FormControl } from "@mui/material";

const SignUpForm = ({ setUserState }) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();
  const handleBusinessClick = () => {
    navigate("/joinbiz");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProfile(inputs)
      .then((newUser) => {
        setUserState((existingUsers) => [...existingUsers, newUser]);
      })
      .then(navigate("/"));

    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      city: "",
    });
  };

  return (
    <>
      <div data-testid="sign-up">
        <Box
          component="form"
          sx={{
            color: "white",
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
            id="outlined-basic-firstname"
            label="FIRST NAME"
            variant="outlined"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="outlined-basic-lastname"
            label="LAST NAME"
            variant="outlined"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="outlined-basic-email"
            label="EMAIL"
            variant="outlined"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            id="outlined-basic-password"
            label="PASSWORD"
            variant="outlined"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="CITY-label" style={{ color: "white" }}>
              CITY
            </InputLabel>
            <Select
              // labelId="city-id"
              id="simple-select"
              value={inputs.city}
              label="CITY"
              name="city"
              onChange={handleChange}
              inputProps={{
                style: { color: "white" },
              }}
            >
              <MenuItem value={"Barcelona"}>Barcelona</MenuItem>
            </Select>
          </FormControl>

          <Button
            sx={{ border: "5px solid #6e06de ", color: "white" }}
            type="submit"
            variant="outlined"
          >
            CREATE
          </Button>
        </Box>
        <Button
          sx={{
            marginTop: "50px",
            width: "100%",
            fontSize: "25px",
            color: "white",
          }}
          onClick={handleBusinessClick}
          variant="text"
        >
          ARE YOU A BUSINESS?
        </Button>
      </div>
    </>
  );
};

export default SignUpForm;

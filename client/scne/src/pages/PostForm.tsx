import React, { useState } from "react";
import CloudinaryImageUpload from "../components/CloudinaryImageUpload";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Navbar from "../components/Navbar";
import { createUserPost } from "../api-service";



interface Inputs {
  content: string;
  event: boolean;
  comment: boolean;
  scene: string;
  postPhoto: string;
}

const PostForm = () => {
  const [inputs, setInputs] = useState<Inputs>({
    content: "",
    event: false,
    comment: false,
    scene: "",
    postPhoto: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    if (event.target.name === "comment") {
      setInputs({ ...inputs, comment: true, event: false });
    } else if (event.target.name === "event") {
      setInputs({ ...inputs, comment: false, event: true });
    } else {
      setInputs({ ...inputs, [event.target.name]: value });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const loggedInUserId = localStorage.getItem("userId");
    const newPost = { ...inputs, userId: loggedInUserId };
    createUserPost(newPost).then(() => {
      navigate("/feed");
    });
  };

  const handleImageUpload = (imageUrl:string) => {
    setInputs({ ...inputs, postPhoto: imageUrl });
  };

  return (
    <div>
      <div className="postform">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}

          autoComplete="off"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{ color: "white" }}
              id="demo-row-radio-buttons-group-label"
              aria-labelledby="POST TYPE"
            >
              POST TYPE
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={false}
              onChange={handleChange}
            >
              <FormControlLabel
                value="comment"
                name="comment"
                control={<Radio sx={{ color: "white" }} />}
                label="COMMENT"
                sx={{ color: "white" }}
              />
              <FormControlLabel
                value="event"
                name="event"
                control={<Radio sx={{ color: "white" }} />}
                label="EVENT"
                sx={{ color: "white" }}
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth aria-labelledby="SCENE">
            <InputLabel
              sx={{ color: "white" }}
              id="simple-select-label"
              htmlFor="scene-select"
            >
              SCENE
            </InputLabel>
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

          <CloudinaryImageUpload
            onUpload={handleImageUpload}

          />
          <TextField
            id="outlined-multiline-flexible"
            label="CONTENT"
            aria-labelledby="CONTENT"
            variant="outlined"
            name="content"
            multiline
            rows={4}
            value={inputs.content}
            onChange={handleChange}
            InputLabelProps={{ sx: { color: "white" } }}
            sx={{
              color: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
              },
              "& .MuiOutlinedInput-input": { color: "white" },
              "& .MuiInputLabel-outlined": { color: "white" },
            }}
          />
          <Button
            sx={{ backgroundColor: "#6e06de" }}
            type="submit"
            variant="contained"
            aria-labelledby="CREATE"
          >
            CREATE
          </Button>
        </Box>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default PostForm;

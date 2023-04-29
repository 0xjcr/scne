import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { login } from "../api-service";

export const validateEmail = (email:string):boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

const Login = ():JSX.Element => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (validateEmail(email)) {
      try {
        const { user, bizs } = await login(email, password);
        if (user) {
          localStorage.setItem("userId", user.id);
          navigate(`/profile/${user.id}`);
        } else if (bizs) {
          localStorage.setItem("bizId", bizs.id);
          navigate(`/biz/${bizs.id}`);
        } else {
          alert("Please use a valid email address");
        }
      } catch (error) {
        alert("Invalid login credentials");
      }
    } else {
      alert("😤");
    }
  };

  return (
    <div className="login">
      <p style={{ fontSize: 100, margin: 0 }}>SCNE</p>

      <Button
        sx={{ backgroundColor: "#6e06de", fontSize: "20px" }}
        variant="contained"
        onClick={() => navigate("/join")}
      >
        GET STARTED
      </Button>

      <TextField
        id="outlined-basic"
        label="EMAIL"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        InputLabelProps={{ sx: { color: "white" } }}
        sx={{
          width: "80%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
          },
          "& .MuiOutlinedInput-input": { color: "white" },
          "& .MuiInputLabel-outlined": { color: "white" },
        }}
      />
      <TextField
        id="outlined-basic"
        label="PASSWORD"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        InputLabelProps={{ sx: { color: "white" } }}
        sx={{
          width: "80%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
          },
          "& .MuiOutlinedInput-input": { color: "white" },
          "& .MuiInputLabel-outlined": { color: "white" },
        }}
      />

      <Button
        sx={{
          color: "white",
          fontSize: "20px",
          borderColor: "#6e06de",
        }}
        type="submit"
        onClick={handleLogin}
        variant="outlined"
      >
        LOG IN
      </Button>
    </div>
  );
};

export default Login

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Pages
// @ts-ignore
import SceneCommunity from "./pages/SceneCommunity.tsx";
// @ts-ignore
import Feed from "./pages/Feed.tsx";
// @ts-ignore
import SceneList from "./pages/SceneList.tsx";
// @ts-ignore
import Profile from "./pages/Profile.tsx";
// @ts-ignore
import SignUp from "./pages/SignUp.tsx";
// @ts-ignore
import SignUpBusiness from "./pages/SignUpBusiness.tsx";
// @ts-ignore
import EditUserProfile from "./pages/EditUserProfile.tsx";
// @ts-ignore
import ProfileBusiness from "./pages/ProfileBusiness.tsx";
// @ts-ignore
import Login from "./pages/Login.tsx";
// @ts-ignore
import PostForm from "./pages/PostForm.tsx";
// @ts-ignore
import Logout from "./pages/Logout.tsx";

const font = "'Rajdhani', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/join" element={<SignUp />} />
              <Route path="/joinbiz" element={<SignUpBusiness />} />
              <Route path="/list" element={<SceneList />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/community" element={<SceneCommunity />} />
              <Route path="/editprofile/:id" element={<EditUserProfile />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/biz/:id" element={<ProfileBusiness />} />
              <Route path="/" element={<Login />} />
              <Route path="/addpost" element={<PostForm />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

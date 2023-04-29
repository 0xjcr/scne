import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Pages
import SceneCommunity from "./pages/SceneCommunity.tsx";
import Feed from "./pages/Feed.tsx";
import SceneList from "./pages/SceneList.tsx";
import Profile from "./pages/Profile.tsx";
import SignUp from "./pages/SignUp.tsx";
import SignUpBusiness from "./pages/SignUpBusiness.tsx";
import EditUserProfile from "./pages/EditUserProfile.tsx";
import ProfileBusiness from "./pages/ProfileBusiness.tsx";
import Login from "./pages/Login.tsx";
import PostForm from "./pages/PostForm.tsx";
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
    </>
  );
}

export default App;

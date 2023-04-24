import './App.css';
import { BrowserRouter as Router, Routes, Route, useHistory }
from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Pages
import SceneCommunity from './pages/SceneCommunity';
import Feed from './pages/Feed';
import SceneList from './pages/SceneList';
// import Map from './pages/Map';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignUpBusiness from './pages/SignUpBusiness';
import EditUserProfile from './pages/EditUserProfile';
import ProfileBusiness from './pages/ProfileBusiness';
import Login from './pages/Login';


const font =  "'Rajdhani', sans-serif";
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
     <Route path='/join' element={<SignUp />}/>
     <Route path='/joinbiz' element={<SignUpBusiness />}/>
     <Route path='/list' element={<SceneList />}/>
     <Route path='/feed' element={<Feed />}/>
     <Route path='/community' element={<SceneCommunity />}/>
     <Route path='/editprofile/:id' element={<EditUserProfile />}/>
     <Route path="/profile/:id" element={<Profile />} />
     <Route path="/biz/:id" element={<ProfileBusiness />} />
     <Route path="/" element={<Login />} />
    </Routes>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;

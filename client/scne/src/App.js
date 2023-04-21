import './App.css';
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import { useEffect, useState } from 'react';


// Pages
import SceneCommunity from './pages/SceneCommunity';
import Find from './pages/Find';
import SceneList from './pages/SceneList';
// import Map from './pages/Map';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignUpBusiness from './pages/SignUpBusiness';
import EditUserProfile from './pages/EditUserProfile';
import YourProfile from './pages/YourProfile';
import ProfileBusiness from './pages/ProfileBusiness';
import Login from './pages/Login';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);


  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Login />} />
          
            <>
              <Route path="/list" element={<SceneList />} />
              <Route path="/find" element={<Find />} />
              <Route path="/community" element={<SceneCommunity />} />
              <Route path="/editprofile/:id" element={<EditUserProfile />} />
              <Route path="/profile" element={<YourProfile />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/biz/:id" element={<ProfileBusiness />} />
            </>
         
            <>
              <Route path="/join" element={<SignUp />} />
              <Route path="/joinbiz" element={<SignUpBusiness />} />
             
            </>
         
        </Routes>
      </Router>
    </>
  );
};

export default App;
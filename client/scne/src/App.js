import './App.css';
import { BrowserRouter as Router, Routes, Route, useHistory }
from 'react-router-dom';
import { useEffect } from 'react';


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
  const history = useHistory();
  
  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      history.push('/login');
    }
  }, [history]);

  
  return (
    <>
    
    <Router>
    <Routes>
     
     <Route path='/join' element={<SignUp />}/>
     <Route path='/joinbiz' element={<SignUpBusiness />}/>
     <Route path='/list' element={<SceneList />}/>
     <Route path='/find' element={<Find />}/>
     <Route path='/community' element={<SceneCommunity />}/>
     <Route path='/editprofile/:id' element={<EditUserProfile />}/>
     <Route path="/profile/" element={<YourProfile />} />
     <Route path="/profile/:id" element={<Profile />} />
     <Route path="/biz/:id" element={<ProfileBusiness />} />
     <Route path="/" element={<Login />} />
    </Routes>
    
    </Router>
    
    </>
  );
}

export default App;

import './App.css';

import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import {Cloudinary} from "@cloudinary/url-gen";



// Pages
import Community from './pages/Community';
import Find from './pages/Find';
import List from './pages/List';
// import Map from './pages/Map';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignUpBusiness from './pages/SignUpBusiness';
import EditUserProfile from './pages/EditUserProfile';





function App() {

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dqfsyl5rv'
  //   }
  // });




  return (
    <>
    
    <Router>
    <Routes>
     
     <Route path='/join' element={<SignUp />}/>
     <Route path='/joinbus' element={<SignUpBusiness />}/>
     <Route path='/list' element={<List />}/>
     <Route path='/profile' element={<Profile />}/>
     <Route path='/find' element={<Find />}/>
     <Route path='/community' element={<Community />}/>
     <Route path='/editprofile' element={<EditUserProfile />}/>
    </Routes>
    
    </Router>
    
    </>
  );
}

export default App;

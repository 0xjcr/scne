import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';


// Pages
import Community from './pages/Community';
import Find from './pages/Find';
import List from './pages/List';
// import Map from './pages/Map';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignUpBusiness from './pages/SignUpBusiness';




function App() {
  return (
    <>
    
    <Router>
    <Routes>
     
     <Route path='/join' element={<SignUp />}/>
     <Route path='/signupbusiness' element={<SignUpBusiness />}/>
     <Route path='/list' element={<List />}/>
     <Route path='/profile' element={<Profile />}/>
     <Route path='/find' element={<Find />}/>
     <Route path='/community' element={<Community />}/>
    </Routes>
    <Navbar/>
    </Router>
    
    </>
  );
}

export default App;

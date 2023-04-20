import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import TileBusiness from '../components/TileBusiness';
import Topbar from "../components/Topbar";
import { useState, useEffect } from 'react';
import { getAllBusinesses } from "../api-service";

const List = ({biz}) => {
  const navigate = useNavigate();

  const [bizState, setBizState] = useState([]);

  useEffect(() => {
    getAllBusinesses().then(res => setBizState(res))
  }, [])

  const handleBusinessClick = (bizId) => {
    navigate(`/business/${bizId}`);
  };

  const handleUpvote = (bizId) => {
    
  };

  // Sort businesses by upvotes 
  const sortedBiz = [...bizState].sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div>
      <Topbar></Topbar>
      <div className="list">
      {sortedBiz.map((biz, index) => (
        <div key={biz.id} onClick={() => handleBusinessClick(biz.id)}>
          <TileBusiness
            id={biz.id}
            name={biz.name}
            upvotes={biz.upvotes}
            handleUpvote={handleUpvote}
            ranking={index + 1} // Add the ranking prop here
          />
          
        </div>
      ))}
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default List;

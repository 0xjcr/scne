import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import TileBusiness from '../components/TileBusiness';
import { useState, useEffect } from 'react';
import { getAllBusinesses, updateUpvote } from "../api-service";


const List = ({ scene }) => {
  const navigate = useNavigate();

  const [bizState, setBizState] = useState([]);

  useEffect(() => {
    getAllBusinesses().then((res) => setBizState(res));
  }, []);

  const handleBusinessClick = (bizId) => {
    navigate(`/biz/${bizId}`);
  };

  const handleUpvote = async (bizId) => {
    const updatedBiz = await updateUpvote(bizId); // make API call to update upvote count
    setBizState((prevBizState) => {
      // replace the old business with the updated one
      const newBizState = [...prevBizState];
      const index = newBizState.findIndex((biz) => biz.id === bizId);
      newBizState[index] = updatedBiz;
      // sort the businesses by upvotes
      return newBizState.sort((a, b) => b.upvotes - a.upvotes);
    });
  };

  // Filter businesses by scene and sort them by upvotes
  const filteredAndSortedBiz = [...bizState]
    .filter((biz) => biz.scene === scene)
    .sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div className="listContainer">
      <div className="list">
        {filteredAndSortedBiz.map((biz, index) => (
          <div key={biz.id} onClick={() => handleBusinessClick(biz.id)}>
            <TileBusiness
              id={biz.id}
              name={biz.name}
              upvotes={biz.upvotes}
              handleUpvote={() => handleUpvote(biz.id)}
              ranking={index + 1} 
              photo={biz.photo}
              // Add the ranking prop here
            />
          </div>
        ))}
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default List;
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import TileBusiness from '../components/TileBusiness';

const List = ({businesses}) => {
  const navigate = useNavigate();

  const handleBusinessClick = (businessId) => {
    navigate(`/business/${businessId}`);
  };

  const handleUpvote = (businessId) => {
    
  };

  // Sort businesses by upvotes in descending order
  const sortedBusinesses = [...businesses].sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div>
      {sortedBusinesses.map((business) => (
        <div key={business.id} onClick={() => handleBusinessClick(business.id)}>
          <TileBusiness
            id={business.id}
            name={business.name}
            upvotes={business.upvotes}
            handleUpvote={handleUpvote}
          />
            <Navbar></Navbar>
        </div>
      
      ))}
    </div>
  );
};



export default List
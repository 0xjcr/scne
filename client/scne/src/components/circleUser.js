// Import the Cloudinary classes. 
// import {fill} from "@cloudinary/url-gen/actions/resize";
// import {CloudinaryImage} from '@cloudinary/url-gen';

import { useNavigate } from 'react-router-dom';

const CircleUser = ({ id, firstName, reviewCount, photo, clickable = true }) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (clickable) {
      navigate(`/profile/${id}`);
    }
  };

  return (
    <div className="circleuser" onClick={handleUserClick}>
      <h1>{firstName}</h1>
    </div>
  );
};

export default CircleUser;


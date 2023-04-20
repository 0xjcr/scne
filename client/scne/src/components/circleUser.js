// Import the Cloudinary classes. 
// import {fill} from "@cloudinary/url-gen/actions/resize";
// import {CloudinaryImage} from '@cloudinary/url-gen';




import { useNavigate } from 'react-router-dom';

const CircleUser = ({ id, name, reviewCount, photo }) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="circleuser" onClick={handleUserClick}>
      <h1>{name}</h1>
      <div>🔵</div>
    </div>
  );
};

export default CircleUser;
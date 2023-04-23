// Import the Cloudinary classes. 
// import {fill} from "@cloudinary/url-gen/actions/resize";
// import {CloudinaryImage} from '@cloudinary/url-gen';

import { useNavigate } from 'react-router-dom';

const CircleUser = ({ id, firstName, member, photo, clickable = true, scale = 1 }) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (clickable) {
      navigate(`/profile/${id}`);
    }
  };

  const scaledMargin = 14 * scale;

  return (
    <div
      className="circleuser"
      onClick={handleUserClick}
      style={{
        borderStyle: "solid",
        borderWidth: member ? "1px" : "1px",
        borderColor: member ? "rgba(112, 255, 0, 1)" : "white",
        transform: `scale(${scale})`,
        margin: `${scaledMargin}px`,
        
      }}
    >
      <img className="circleuser-image" src={photo} alt={firstName} />
    </div>
  );
};

export default CircleUser;


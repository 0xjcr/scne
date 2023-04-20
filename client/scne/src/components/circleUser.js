// Import the Cloudinary classes. 
// import {fill} from "@cloudinary/url-gen/actions/resize";
// import {CloudinaryImage} from '@cloudinary/url-gen';




const CircleUser = ({ id, name, reviewCount, photo }) => {
  // Render the image in a React component.
    return (
   <div className="circleuser"> 
   <h1>{name}</h1>
   <div>🔵</div>
   </div>  
  )
}

export default CircleUser;
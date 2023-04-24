import React, { useState } from 'react';
import axios from 'axios';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { updateProfile, createBusiness } from '../api-service';

const CloudinaryImageUpload = ({ userId, isBusiness, onUpload }) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    setLoading(true);
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`,
      data
    );
    setLoading(false);

    const updatedUser = {
      photo: res.data.url
    };

    
    
     updateProfile(userId, updatedUser)
    
    
 onUpload(res.data.url)
    setImage(res.data.url);
  };

  return (
    <div>
      <div><AddAPhotoIcon /></div>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '100px', height: '100px', borderRadius:'50%', marginTop: '5px' }} alt="" />
      )}
    </div>
  );
};

export default CloudinaryImageUpload;

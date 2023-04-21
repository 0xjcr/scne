import React, { useState } from 'react';
import axios from 'axios';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const CloudinaryImageUpload = () => {
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
    setImage(res.data.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <div><AddAPhotoIcon></AddAPhotoIcon></div>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} alt="" />
      )}
    </div>
  );
};

export default CloudinaryImageUpload;
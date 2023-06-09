import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

interface CloudinaryImageUploadType {
  userId?: String;
  onUpload: (url: string) => void;
  isBusiness?: Boolean;
}

const CloudinaryImageUpload = ({ onUpload }: CloudinaryImageUploadType) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    const data = new FormData();
    if (files) {
      data.append("file", files[0]);
      data.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET as string
      );
      setLoading(true);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`,
        data
      );
      setLoading(false);

      // const updatedUser = {
      //   photo: res.data.url,
      // };

      // updateProfile(userId, updatedUser); Need to set this state in redux re-format - passed down from post form page

      onUpload(res.data.url);
      setImage(res.data.url);
    }
  };

  return (
    <div>
      <div>
        <AddAPhotoIcon aria-label="Upload photo" />
      </div>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        aria-label="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img
          src={image}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginTop: "5px",
          }}
          alt=""
        />
      )}
    </div>
  );
};

export default CloudinaryImageUpload;

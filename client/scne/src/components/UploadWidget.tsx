import React, { useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const UploadWidget = () => {
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();
  useEffect(() => {
    {
      cloudinaryRef.current = (window as any).cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: "dqfsyl5rv",
          uploadPreset: "scnescne1",
        },
      );
    }
  }, [cloudinaryRef]);

  return (
    <IconButton
      onClick={() => widgetRef.current && widgetRef.current['open()']}
      aria-label="delete"
      data-testid="upload-button"
    >
      <AddAPhotoIcon />
    </IconButton>
  );
};

export default UploadWidget;
